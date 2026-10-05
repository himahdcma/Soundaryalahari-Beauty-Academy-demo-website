import React from 'react';
import { Calendar, MessageCircle } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import { aboutData } from '../../data/aboutData';
import { generateWhatsAppGeneralInquiryUrl } from '../../utils/whatsapp';

export default function AboutFinalCta() {
  const { finalCta } = aboutData;
  const whatsappUrl = generateWhatsAppGeneralInquiryUrl();

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-cream-light/60 to-cream/90 text-center border-t border-cream-deep/40">
      <Container>
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex items-center justify-center gap-2 mb-2" aria-hidden="true">
            <span className="w-8 h-px bg-gold/60" />
            <span className="text-xs uppercase tracking-[0.2em] text-gold-dark font-medium">
              Reserve Your Time
            </span>
            <span className="w-8 h-px bg-gold/60" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal leading-tight">
            {finalCta.heading}
          </h2>

          <p className="text-muted text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
            {finalCta.subheading}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button
              to={finalCta.primaryLink}
              variant="primary"
              size="lg"
              icon={Calendar}
              className="w-full sm:w-auto shadow-button"
            >
              {finalCta.primaryCta}
            </Button>

            <Button
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
              icon={MessageCircle}
              className="w-full sm:w-auto text-[#128C7E] border-[#25D366]/40 hover:bg-[#25D366]/10"
            >
              {finalCta.secondaryCta}
            </Button>
          </div>

          <p className="text-xs text-muted pt-2">
            Soundaryalahari Beauty Academy &bull; S.R. Nagar, Hyderabad
          </p>
        </div>
      </Container>
    </section>
  );
}
