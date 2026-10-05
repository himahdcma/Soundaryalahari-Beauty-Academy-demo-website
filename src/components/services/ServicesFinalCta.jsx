import React from 'react';
import { Calendar, MessageCircle } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import { businessData } from '../../data/businessData';
import { servicesPageContent } from '../../data/servicesData';

export default function ServicesFinalCta() {
  const { finalCta } = servicesPageContent;
  const whatsappUrl = `https://wa.me/${businessData.whatsappNumber}?text=${encodeURIComponent(
    'Hi! I would like to schedule an appointment for beauty services at Soundaryalahari Beauty Academy.'
  )}`;

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-cream-light/40 to-cream/70 text-center border-t border-cream-deep/40">
      <Container>
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-gold/60" />
            <span className="text-xs uppercase tracking-[0.2em] text-gold-dark font-medium">
              Appointments &bull; S.R. Nagar
            </span>
            <span className="w-8 h-px bg-gold/60" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal leading-tight">
            {finalCta.heading}
          </h2>

          <p className="text-muted text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
            {finalCta.description}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button
              to={finalCta.primaryCta.path}
              variant="primary"
              size="lg"
              icon={Calendar}
              className="w-full sm:w-auto"
            >
              {finalCta.primaryCta.text}
            </Button>

            <Button
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              icon={MessageCircle}
              className="w-full sm:w-auto text-[#128C7E]"
            >
              WhatsApp Us
            </Button>
          </div>

          <p className="text-xs text-muted pt-1">
            Appointments &amp; Walk-ins Welcome &bull; Open Mon – Sun
          </p>
        </div>
      </Container>
    </section>
  );
}
