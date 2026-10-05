import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import { homeData } from '../../data/homeData';
import { businessData } from '../../data/businessData';

export default function FinalCtaSection() {
  const { finalCta } = homeData;

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-cream-light/60 to-cream/80 text-center">
      <Container>
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-px bg-gold/60" />
            <span className="text-xs uppercase tracking-[0.2em] text-gold-dark font-medium">
              Appointments &amp; Inquiries
            </span>
            <span className="w-8 h-px bg-gold/60" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal leading-tight">
            {finalCta.heading}
          </h2>

          <p className="text-muted text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
            {finalCta.description}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
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
              href={finalCta.phoneCta.href}
              variant="secondary"
              size="lg"
              icon={Phone}
              className="w-full sm:w-auto"
            >
              Call {businessData.phone}
            </Button>
          </div>

          <p className="text-xs text-muted pt-2">
            Walk-ins welcome &bull; S.R. Nagar, Hyderabad &bull; {businessData.timings.weekdays}
          </p>
        </div>
      </Container>
    </section>
  );
}
