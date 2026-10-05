import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import { aboutData } from '../../data/aboutData';

export default function AboutHero() {
  const { hero } = aboutData;

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-cream-light via-ivory to-ivory border-b border-cream-deep/40 overflow-hidden">
      {/* Subtle background decorative glow */}
      <div 
        className="absolute top-0 right-1/4 w-96 h-96 bg-cream-deep/30 rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true" 
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          {/* Text Column */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            {/* Small label & location badge */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="text-xs uppercase tracking-[0.2em] text-burgundy font-semibold">
                {hero.label}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold/60" aria-hidden="true" />
              <span className="inline-flex items-center gap-1 text-xs text-muted font-medium bg-cream/70 px-2.5 py-0.5 rounded-full border border-cream-deep/60">
                <MapPin className="w-3.5 h-3.5 text-burgundy" aria-hidden="true" />
                {hero.locationBadge}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-charcoal font-normal leading-[1.18] tracking-tight">
              {hero.heading}
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
              {hero.subheading}
            </p>

            {/* CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Button
                to={hero.ctaLink}
                variant="primary"
                size="md"
                icon={Calendar}
                className="w-full sm:w-auto"
              >
                {hero.ctaText}
              </Button>
            </div>
          </div>

          {/* Image Column - Compact, framed, elegant */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-card border border-cream-deep/70 bg-cream">
                <img
                  src={hero.heroImage.url}
                  alt={hero.heroImage.alt}
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-center sm:text-left">
                  <span className="inline-block text-[11px] text-ivory/95 font-medium tracking-wide bg-charcoal/60 backdrop-blur-sm px-2.5 py-1 rounded">
                    Soundaryalahari &bull; S.R. Nagar
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
