import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import { servicesPageContent } from '../../data/servicesData';

export default function ServiceOffersPreview() {
  const { offersPreview } = servicesPageContent;

  return (
    <section className="py-12 sm:py-14 bg-ivory">
      <Container>
        <div className="max-w-3xl mx-auto rounded-xl bg-cream/50 border border-cream-deep/70 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-subtle">
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-gold-dark">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>{offersPreview.label}</span>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-medium">
              {offersPreview.heading}
            </h3>

            <p className="text-sm text-muted leading-relaxed max-w-md">
              {offersPreview.description}
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <Button
              to={offersPreview.cta.path}
              variant="outline"
              size="md"
              icon={ArrowRight}
              iconPosition="right"
              className="w-full sm:w-auto"
            >
              {offersPreview.cta.text}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
