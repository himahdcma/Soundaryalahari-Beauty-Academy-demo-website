import React from 'react';
import { HeartHandshake, Sparkles, Smile } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { aboutData } from '../../data/aboutData';

const iconMap = {
  HeartHandshake,
  Sparkles,
  Smile,
};

export default function BeautyPhilosophySection() {
  const { philosophy } = aboutData;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-cream-light/50 border-b border-cream-deep/40">
      <Container>
        <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
          <SectionHeading
            kicker={philosophy.label}
            title={philosophy.heading}
            subtitle={philosophy.subtitle}
            align="center"
            className="mx-auto"
          />

          {/* 3 Principles with minimal borders and generous spacing - not SaaS feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-center md:text-left">
            {philosophy.principles.map((item, index) => {
              const Icon = iconMap[item.iconName] || Sparkles;

              return (
                <div
                  key={item.id}
                  className="group flex flex-col items-center md:items-start space-y-4 px-4 py-2"
                >
                  {/* Subtle Lucide Icon in warm aesthetic circle */}
                  <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-burgundy border border-cream-deep/70 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-5 h-5 text-burgundy" strokeWidth={1.75} aria-hidden="true" />
                  </div>

                  {/* Number / accent indicator */}
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] tracking-widest uppercase text-gold-dark font-medium">
                      0{index + 1}
                    </span>
                    <span className="w-6 h-px bg-gold/40" aria-hidden="true" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif text-charcoal font-medium">
                    {item.title}
                  </h3>

                  {/* Short sentence */}
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
