import React from 'react';
import { Tag, ArrowRight, Sparkles } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import { homeData } from '../../data/homeData';

export default function SpecialOfferSection() {
  const { specialOffer } = homeData;

  return (
    <section className="py-16 sm:py-20 bg-burgundy text-ivory relative overflow-hidden">
      {/* Subtle background glow/accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-burgundy-deep/60 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto rounded-2xl bg-burgundy-deep/70 border border-gold/30 p-8 sm:p-12 lg:p-14 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-4 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/40 text-gold-light text-xs font-medium tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>{specialOffer.label}</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-ivory font-normal leading-tight">
                {specialOffer.title}
              </h2>

              <p className="text-gold-light font-medium text-base sm:text-lg">
                {specialOffer.tagline}
              </p>

              <p className="text-ivory/80 text-sm sm:text-base leading-relaxed max-w-xl">
                {specialOffer.description}
              </p>
            </div>

            {/* Right Action (4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center pt-2 lg:pt-0">
              <Button
                to={specialOffer.cta.path}
                variant="secondary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                className="w-full sm:w-auto bg-ivory text-burgundy hover:bg-cream border-gold/40 font-semibold"
              >
                {specialOffer.cta.text}
              </Button>
              <span className="text-xs text-ivory/60 mt-3 text-left lg:text-right">
                Inquire at salon or online &bull; S.R. Nagar
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
