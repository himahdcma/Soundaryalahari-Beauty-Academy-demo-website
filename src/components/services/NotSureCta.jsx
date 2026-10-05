import React from 'react';
import { Phone, MessageCircle, HelpCircle } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import { businessData } from '../../data/businessData';
import { servicesPageContent } from '../../data/servicesData';

export default function NotSureCta() {
  const { notSureCta } = servicesPageContent;
  const whatsappUrl = `https://wa.me/${businessData.whatsappNumber}?text=${encodeURIComponent(
    'Hi! I am browsing the services on your website and would like personalized recommendations.'
  )}`;

  return (
    <section className="py-14 sm:py-16 bg-cream-light/60 border-t border-b border-cream-deep/50">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-medium text-gold-dark">
            <HelpCircle className="w-3.5 h-3.5 text-gold" />
            <span>Assistance &amp; Guidance</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-normal leading-tight">
            {notSureCta.heading}
          </h2>

          <p className="text-muted text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            {notSureCta.description}
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            <Button
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="md"
              icon={MessageCircle}
              className="text-[#128C7E] border-[#25D366]/40 hover:bg-[#25D366]/10"
            >
              WhatsApp Us
            </Button>

            <Button
              href={`tel:${businessData.phone}`}
              variant="secondary"
              size="md"
              icon={Phone}
            >
              Call {businessData.phone}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
