import React from 'react';
import { Phone, Calendar, Clock, User, MessageSquare, AlertCircle, RefreshCw, CheckCircle2 } from 'lucide-react';
import Button from '../common/Button';
import { businessData } from '../../data/businessData';
import { generateWhatsAppBookingUrl } from '../../utils/whatsapp';

export default function BookingSummary({
  selectedService,
  preferredDate,
  preferredTime,
  customerName,
  customerPhone,
  customerNotes,
  onSubmitRequest,
  onResetForm,
  isSubmitted,
}) {
  // Format the date for friendly display
  const formattedDate = preferredDate
    ? new Date(preferredDate + 'T00:00:00').toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : null;

  return (
    <div className="bg-cream-light/60 rounded-2xl border border-cream-deep/80 p-6 sm:p-7 shadow-card space-y-6">
      <div className="flex items-center justify-between border-b border-cream-deep/60 pb-3">
        <h3 className="font-serif text-lg sm:text-xl text-charcoal font-medium">
          Your Appointment Request
        </h3>
        {onResetForm && (
          <button
            type="button"
            onClick={onResetForm}
            className="text-xs text-muted hover:text-burgundy flex items-center gap-1 transition-colors focus-ring rounded py-1 px-1.5"
            title="Reset all form fields"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Clear Form</span>
          </button>
        )}
      </div>

      {/* Summary List */}
      <div className="space-y-3.5 text-sm">
        {/* Service */}
        <div className="flex items-start gap-3">
          <Calendar className="w-4 h-4 text-burgundy mt-0.5 shrink-0" />
          <div className="flex-grow">
            <span className="text-xs text-muted block">Selected Service</span>
            <span className="font-medium text-charcoal">
              {selectedService ? selectedService.name : (
                <span className="italic text-muted/60">Not chosen yet</span>
              )}
            </span>
          </div>
        </div>

        {/* Date */}
        <div className="flex items-start gap-3">
          <Clock className="w-4 h-4 text-burgundy mt-0.5 shrink-0" />
          <div className="flex-grow">
            <span className="text-xs text-muted block">Preferred Date &amp; Time</span>
            <span className="font-medium text-charcoal">
              {formattedDate ? formattedDate : <span className="italic text-muted/60">Select date</span>}
              {preferredTime && <span> &bull; {preferredTime}</span>}
            </span>
          </div>
        </div>

        {/* Name & Phone */}
        <div className="flex items-start gap-3">
          <User className="w-4 h-4 text-burgundy mt-0.5 shrink-0" />
          <div className="flex-grow">
            <span className="text-xs text-muted block">Customer Details</span>
            <span className="font-medium text-charcoal">
              {customerName ? customerName : <span className="italic text-muted/60">Your name</span>}
              {customerPhone && (
                <span className="block text-xs text-muted font-normal mt-0.5">
                  Phone: {customerPhone}
                </span>
              )}
            </span>
          </div>
        </div>

        {/* Optional Notes */}
        {customerNotes && customerNotes.trim() && (
          <div className="flex items-start gap-3 pt-1 border-t border-cream-deep/40">
            <MessageSquare className="w-4 h-4 text-burgundy mt-0.5 shrink-0" />
            <div className="flex-grow">
              <span className="text-xs text-muted block">Notes</span>
              <p className="text-xs text-charcoal/90 italic line-clamp-3">
                "{customerNotes.trim()}"
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Confirmation Note Notice */}
      <div className="p-3.5 rounded-refined bg-ivory border border-cream-deep/70 text-xs text-charcoal/80 space-y-1">
        <div className="flex items-center gap-1.5 font-medium text-burgundy">
          <AlertCircle className="w-3.5 h-3.5 text-gold-dark shrink-0" />
          <span>Notice on Confirmation</span>
        </div>
        <p className="text-[11px] leading-relaxed text-muted">
          Your appointment is not confirmed yet. Soundaryalahari will confirm the final timing with you.
        </p>
      </div>

      {/* WhatsApp Action Button */}
      <div className="space-y-3 pt-1">
        <button
          type="button"
          onClick={onSubmitRequest}
          className="w-full flex items-center justify-center gap-2.5 py-3 px-5 rounded-refined text-sm font-semibold tracking-wide text-white bg-[#25D366] hover:bg-[#20ba5a] active:scale-[0.99] transition-all duration-200 shadow-md hover:shadow-lg focus-ring cursor-pointer"
        >
          {/* Crisp WhatsApp Icon */}
          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.19 8.19 0 0 1-5.82 2.41h-.01c-1.42 0-2.81-.37-4.04-1.07l-.29-.17-3.11.82.83-3.03-.19-.3a8.18 8.18 0 0 1-1.25-4.48c0-4.54 3.7-8.24 8.24-8.24zm4.55 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.07-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z" />
          </svg>
          <span>Send Request via WhatsApp</span>
        </button>

        {/* Temporary Submission Feedback (non-fake confirmation) */}
        {isSubmitted && (
          <div className="p-2.5 rounded bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>WhatsApp opened with your appointment request.</span>
          </div>
        )}

        {/* Direct Call Alternative */}
        <div className="pt-2 text-center text-xs text-muted">
          <span>Prefer to speak with us? </span>
          <a
            href={`tel:${businessData.phone}`}
            className="text-burgundy font-semibold hover:underline inline-flex items-center gap-1"
          >
            <Phone className="w-3 h-3 text-gold-dark inline" />
            <span>Call {businessData.phone}</span>
          </a>
        </div>
      </div>

      {/* Privacy note */}
      <div className="pt-2 border-t border-cream-deep/40 text-[11px] text-muted text-center leading-relaxed">
        Your details are used only to prepare your WhatsApp appointment request.
      </div>
    </div>
  );
}
