import React from 'react';
import { Phone, MessageCircle, Navigation, MapPin } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { businessData } from '../../data/businessData';
import { aboutData } from '../../data/aboutData';
import { generateWhatsAppGeneralInquiryUrl } from '../../utils/whatsapp';

export default function ContactSection() {
  const { contact } = aboutData;
  const generalWhatsAppUrl = generateWhatsAppGeneralInquiryUrl();
  const directionsUrl = businessData.directionsUrl || businessData.location.mapUrl;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-ivory border-b border-cream-deep/40">
      <Container>
        <div className="max-w-4xl mx-auto space-y-12">
          <SectionHeading
            kicker={contact.label}
            title={contact.heading}
            subtitle={contact.subtitle}
            align="center"
            className="mx-auto"
          />

          {/* Business Identity Card */}
          <div className="bg-cream-light/70 rounded-2xl border border-cream-deep/80 p-8 sm:p-12 shadow-card text-center space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-gold-dark font-medium block">
                Beauty & Grooming Studio
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-charcoal font-medium">
                {businessData.name}
              </h3>
            </div>

            {/* Direct Info Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto py-6 border-y border-cream-deep/60">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-burgundy border border-cream-deep/60">
                  <MapPin className="w-5 h-5 text-burgundy" aria-hidden="true" />
                </div>
                <span className="text-xs uppercase tracking-wider text-muted font-medium">Location</span>
                <span className="text-base font-medium text-charcoal">
                  {businessData.location.area}, {businessData.location.city}
                </span>
                <span className="text-xs text-muted">Telangana</span>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-burgundy border border-cream-deep/60">
                  <Phone className="w-5 h-5 text-burgundy" aria-hidden="true" />
                </div>
                <span className="text-xs uppercase tracking-wider text-muted font-medium">Phone Number</span>
                <a
                  href={`tel:${businessData.phone}`}
                  className="text-base font-semibold text-burgundy hover:underline focus-ring rounded"
                >
                  {businessData.displayPhone || businessData.phone}
                </a>
                <span className="text-xs text-muted">Direct calls & bookings</span>
              </div>
            </div>

            {/* 3 Clear Actions */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
              {/* 1. Call Now */}
              <Button
                href={`tel:${businessData.phone}`}
                variant="primary"
                size="md"
                icon={Phone}
                className="w-full sm:w-auto min-w-[150px]"
              >
                Call Now
              </Button>

              {/* 2. WhatsApp */}
              <Button
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="md"
                icon={MessageCircle}
                className="w-full sm:w-auto min-w-[150px] text-[#128C7E] border-[#25D366]/40 hover:bg-[#25D366]/10"
              >
                WhatsApp
              </Button>

              {/* 3. Get Directions */}
              <Button
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="md"
                icon={Navigation}
                className="w-full sm:w-auto min-w-[150px]"
              >
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
