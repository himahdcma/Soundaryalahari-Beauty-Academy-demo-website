import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { homeData } from '../../data/homeData';

export default function IntroSection() {
  const { intro } = homeData;

  return (
    <section className="py-16 sm:py-20 bg-ivory border-b border-cream-deep/40">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <SectionHeading
            kicker={intro.label}
            title={intro.heading}
            align="center"
          />

          <div className="space-y-4 text-muted text-base sm:text-lg leading-relaxed pt-2">
            {intro.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Subtle beauty decorative motif */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className="w-12 h-px bg-gold/50" />
            <span className="w-2 h-2 rounded-full border border-gold/70 bg-ivory" />
            <span className="w-12 h-px bg-gold/50" />
          </div>
        </div>
      </Container>
    </section>
  );
}
