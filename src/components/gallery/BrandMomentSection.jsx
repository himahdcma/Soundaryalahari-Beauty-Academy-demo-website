import React from 'react';
import Container from '../common/Container';
import { offersPageContent } from '../../data/offersData';

export default function BrandMomentSection() {
  const { brandMoment } = offersPageContent;

  return (
    <section className="py-14 sm:py-18 bg-cream-light/40 border-t border-b border-cream-deep/40 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Visual Frame (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-card border border-cream-deep/80 group">
              <img
                src={brandMoment.image.url}
                alt={brandMoment.image.alt}
                className="w-full h-56 sm:h-72 lg:h-80 object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 text-[11px] text-ivory/90 bg-charcoal/60 backdrop-blur-sm px-3 py-1 rounded-refined">
                Thoughtful Aesthetics &bull; Soundaryalahari
              </div>
            </div>
          </div>

          {/* Right Editorial Copy (6 cols) */}
          <div className="lg:col-span-6 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <span className="w-8 h-px bg-gold/70 inline-block" />
              <span className="text-xs uppercase tracking-[0.2em] text-gold-dark font-medium">
                Our Philosophy
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal font-normal leading-tight">
              {brandMoment.heading}
            </h2>

            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-lg">
              {brandMoment.description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
