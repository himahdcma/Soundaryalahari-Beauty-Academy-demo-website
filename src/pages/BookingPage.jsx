import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import Container from '../components/common/Container';
import BookingIntro from '../components/booking/BookingIntro';
import BookingStepIndicator from '../components/booking/BookingStepIndicator';
import ServiceSelector from '../components/booking/ServiceSelector';
import DateTimeSelector from '../components/booking/DateTimeSelector';
import CustomerDetailsForm from '../components/booking/CustomerDetailsForm';
import BookingSummary from '../components/booking/BookingSummary';
import { servicesData } from '../data/servicesData';
import { generateWhatsAppBookingUrl } from '../utils/whatsapp';

export default function BookingPage() {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  // Form State
  const [selectedServiceId, setSelectedServiceId] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');

  // Validation & Submission States
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  // Preselection from query param (?service=...) or router state
  useEffect(() => {
    const serviceFromQuery = searchParams.get('service');
    const serviceFromState = location.state?.selectedService;
    const targetServiceId = serviceFromQuery || serviceFromState;

    if (targetServiceId) {
      const matched = servicesData.find(
        (s) => s.id.toLowerCase() === targetServiceId.toLowerCase()
      );
      if (matched) {
        setSelectedServiceId(matched.id);
        setCurrentStep(2); // Auto-advance to date & time
      }
    }
  }, [searchParams, location.state]);

  // Derived selected service object
  const selectedService = servicesData.find((s) => s.id === selectedServiceId) || null;

  // Clear errors when fields change
  const handleSelectService = (id) => {
    setSelectedServiceId(id);
    if (errors.service) setErrors((prev) => ({ ...prev, service: undefined }));
    if (currentStep === 1) setCurrentStep(2);
  };

  const handleDateChange = (date) => {
    setPreferredDate(date);
    if (errors.date) setErrors((prev) => ({ ...prev, date: undefined }));
    if (preferredTime && currentStep === 2) setCurrentStep(3);
  };

  const handleTimeChange = (time) => {
    setPreferredTime(time);
    if (errors.time) setErrors((prev) => ({ ...prev, time: undefined }));
    if (preferredDate && currentStep === 2) setCurrentStep(3);
  };

  const handleNameChange = (name) => {
    setCustomerName(name);
    if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
  };

  const handlePhoneChange = (phone) => {
    setCustomerPhone(phone);
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
  };

  // Reset form handler
  const handleResetForm = () => {
    setSelectedServiceId('');
    setPreferredDate('');
    setPreferredTime('');
    setCustomerName('');
    setCustomerPhone('');
    setCustomerNotes('');
    setErrors({});
    setIsSubmitted(false);
    setCurrentStep(1);
  };

  // Form Validation
  const validateForm = () => {
    const newErrors = {};

    if (!selectedServiceId) {
      newErrors.service = 'Please select a service for your appointment.';
    }

    if (!preferredDate) {
      newErrors.date = 'Please select your preferred date.';
    } else {
      // Validate not past date
      const selected = new Date(preferredDate + 'T00:00:00');
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        newErrors.date = 'Please select today or an upcoming date.';
      }
    }

    if (!preferredTime) {
      newErrors.time = 'Please select your preferred time slot.';
    }

    if (!customerName || !customerName.trim()) {
      newErrors.name = 'Please enter your full name.';
    }

    if (!customerPhone || !customerPhone.trim()) {
      newErrors.phone = 'Please enter your mobile phone number.';
    } else {
      const digitsOnly = customerPhone.replace(/\D/g, '');
      if (digitsOnly.length < 10) {
        newErrors.phone = 'Please enter a valid 10-digit mobile number.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // WhatsApp Submission Handler
  const handleSubmitRequest = () => {
    if (!validateForm()) {
      // Scroll into view if there are validation errors
      const firstErrorKey = Object.keys(errors)[0];
      if (firstErrorKey === 'service') setCurrentStep(1);
      else if (firstErrorKey === 'date' || firstErrorKey === 'time') setCurrentStep(2);
      else setCurrentStep(3);
      return;
    }

    const whatsappUrl = generateWhatsAppBookingUrl({
      serviceName: selectedService ? selectedService.name : 'Salon Service',
      preferredDate,
      preferredTime,
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      customerNotes: customerNotes.trim(),
    });

    // Open WhatsApp in new window/tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  return (
    <div className="w-full">
      {/* 1. Page Introduction */}
      <BookingIntro />

      <section className="py-12 sm:py-16 bg-ivory">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left / Main Booking Form Area (7 cols) */}
            <div className="lg:col-span-7 space-y-10">
              {/* Step Indicator */}
              <BookingStepIndicator
                currentStep={currentStep}
                onStepClick={(step) => setCurrentStep(step)}
              />

              {/* Step 1: Service Selection */}
              <div id="step-service" className="space-y-4 pt-2">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-burgundy/10 text-burgundy text-xs font-semibold flex items-center justify-center">
                    1
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-medium">
                    Choose Your Service
                  </h2>
                </div>

                <ServiceSelector
                  selectedServiceId={selectedServiceId}
                  onSelectService={handleSelectService}
                  error={errors.service}
                />
              </div>

              {/* Step 2: Preferred Date & Time */}
              <div id="step-datetime" className="space-y-4 pt-4 border-t border-cream-deep/50">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-burgundy/10 text-burgundy text-xs font-semibold flex items-center justify-center">
                    2
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-medium">
                    Preferred Date &amp; Time
                  </h2>
                </div>

                <DateTimeSelector
                  preferredDate={preferredDate}
                  onDateChange={handleDateChange}
                  dateError={errors.date}
                  preferredTime={preferredTime}
                  onTimeChange={handleTimeChange}
                  timeError={errors.time}
                />
              </div>

              {/* Step 3: Customer Details */}
              <div id="step-details" className="space-y-4 pt-4 border-t border-cream-deep/50">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-burgundy/10 text-burgundy text-xs font-semibold flex items-center justify-center">
                    3
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-medium">
                    Your Contact Details
                  </h2>
                </div>

                <CustomerDetailsForm
                  name={customerName}
                  onNameChange={handleNameChange}
                  nameError={errors.name}
                  phone={customerPhone}
                  onPhoneChange={handlePhoneChange}
                  phoneError={errors.phone}
                  notes={customerNotes}
                  onNotesChange={setCustomerNotes}
                />
              </div>
            </div>

            {/* Right Sticky Summary Area (5 cols) */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <BookingSummary
                selectedService={selectedService}
                preferredDate={preferredDate}
                preferredTime={preferredTime}
                customerName={customerName}
                customerPhone={customerPhone}
                customerNotes={customerNotes}
                onSubmitRequest={handleSubmitRequest}
                onResetForm={handleResetForm}
                isSubmitted={isSubmitted}
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
