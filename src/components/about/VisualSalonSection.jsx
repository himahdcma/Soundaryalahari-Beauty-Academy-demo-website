import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { aboutData } from '../../data/aboutData';

export default function VisualSalonSection() {
  const { visualSalon } = aboutData;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-ivory border-b border-cream-deep/40">
      <Container>
        <div className="max-w-5xl mx-auto space-y-12">
          <SectionHeading
            kicker={visualSalon.label}
            title={visualSalon.heading}
            subtitle={visualSalon.subtitle}
            align="center"
            className="mx-auto"
          />

          {/* Editorial 3-image grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* Primary featured image */}
            <div className="md:col-span-7 flex flex-col">
              <div className="relative h-72 sm:h-96 md:h-full min-h-[280px] rounded-2xl overflow-hidden shadow-card border border-cream-deep/70 bg-cream group">
                <img
                  src={visualSalon.images[0].url}
                  alt={visualSalon.images[0].alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-serif text-ivory tracking-wide bg-charcoal/70 backdrop-blur-sm px-3 py-1.5 rounded-refined inline-block">
                    {visualSalon.images[0].caption}
                  </span>
                </div>
              </div>
            </div>

            {/* Two secondary images stacked */}
            <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6 sm:gap-8">
              {visualSalon.images.slice(1, 3).map((item) => (
                <div
                  key={item.id}
                  className="relative h-60 sm:h-64 rounded-2xl overflow-hidden shadow-card border border-cream-deep/70 bg-cream group"
                >
                  <img
                    src={item.url}
                    alt={item.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-serif text-ivory tracking-wide bg-charcoal/70 backdrop-blur-sm px-3 py-1.5 rounded-refined inline-block">
                      {item.caption}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subtle demo note - non-dominant, honest, clear */}
          {visualSalon.demoNote && (
            <div className="text-center pt-2">
              <p className="text-xs text-muted/70 tracking-wide">
                &bull; {visualSalon.demoNote} &bull;
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
