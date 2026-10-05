import React from 'react';
import { Calendar, Sparkles } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import { homeData } from '../../data/homeData';

export default function BeautyExperienceSection() {
  const { experience } = homeData;

  return (
    <section className="py-16 sm:py-24 bg-cream/40 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Large Image Frame (7 cols) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-card border border-cream-deep/80 group">
              <img
                src={experience.image.url}
                alt={experience.image.alt}
                className="w-full h-[320px] sm:h-[420px] lg:h-[460px] object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 text-xs text-ivory/90 bg-charcoal/60 backdrop-blur-sm px-3.5 py-1.5 rounded-refined">
                Salon Ambience &bull; Soundaryalahari, Hyderabad
              </div>
            </div>
          </div>

          {/* Copy & CTA (5 cols) */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>{experience.kicker}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal leading-tight">
              {experience.heading}
            </h2>

            <p className="text-muted text-base sm:text-lg leading-relaxed">
              {experience.description}
            </p>

            <div className="pt-2">
              <Button
                to={experience.cta.path}
                variant="primary"
                size="lg"
                icon={Calendar}
              >
                {experience.cta.text}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
