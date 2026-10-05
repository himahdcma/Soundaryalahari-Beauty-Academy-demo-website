import React from 'react';
import { MapPin, Phone, MessageCircle, Navigation, Clock } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { businessData } from '../../data/businessData';
import { homeData } from '../../data/homeData';

export default function LocationContactSection() {
  const { locationSection } = homeData;
  const whatsappUrl = `https://wa.me/${businessData.whatsappNumber}?text=${encodeURIComponent(
    'Hi! I would like to inquire about appointments and visiting Soundaryalahari Beauty Academy in S.R. Nagar.'
  )}`;

  return (
    <section className="py-16 sm:py-20 bg-cream-light/60 border-t border-cream-deep/40">
      <Container>
        <div className="max-w-4xl mx-auto rounded-2xl bg-ivory border border-cream-deep/80 p-8 sm:p-12 shadow-card text-center">
          <SectionHeading
            kicker="Our Location"
            title={locationSection.heading}
            subtitle={locationSection.subtitle}
            align="center"
            className="mx-auto mb-8"
          />

          {/* Details row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-y border-cream-deep/60 text-sm">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-burgundy">
                <MapPin className="w-5 h-5 text-burgundy" />
              </div>
              <span className="font-semibold text-charcoal">{businessData.location.area}, Hyderabad</span>
              <span className="text-xs text-muted">Telangana &bull; Near Metro Station</span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-burgundy">
                <Phone className="w-5 h-5 text-burgundy" />
              </div>
              <a
                href={`tel:${businessData.phone}`}
                className="font-semibold text-burgundy hover:underline"
              >
                {businessData.displayPhone}
              </a>
              <span className="text-xs text-muted">Call for direct inquiries</span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-burgundy">
                <Clock className="w-5 h-5 text-burgundy" />
              </div>
              <span className="font-semibold text-charcoal">{businessData.timings.weekdays}</span>
              <span className="text-xs text-muted">Monday through Sunday</span>
            </div>
          </div>

          {/* 3 Clickable Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Button
              href={`tel:${businessData.phone}`}
              variant="primary"
              size="md"
              icon={Phone}
            >
              Call Now
            </Button>

            <Button
              href={businessData.location.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="md"
              icon={Navigation}
            >
              Get Directions
            </Button>

            <Button
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="md"
              icon={MessageCircle}
              className="text-[#128C7E] border-[#25D366]/40 hover:bg-[#25D366]/10"
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
