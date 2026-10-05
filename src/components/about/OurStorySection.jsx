import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { aboutData } from '../../data/aboutData';

export default function OurStorySection() {
  const { story } = aboutData;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-ivory border-b border-cream-deep/40">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <SectionHeading
            kicker={story.label}
            title={story.heading}
            align="center"
          />

          <div className="space-y-5 text-muted text-base sm:text-lg leading-relaxed pt-2">
            {story.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="text-charcoal/85">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Subtle beauty decorative motif */}
          <div className="pt-4 flex items-center justify-center gap-3" aria-hidden="true">
            <span className="w-12 h-px bg-gold/50" />
            <span className="w-2 h-2 rounded-full border border-gold/70 bg-ivory" />
            <span className="w-12 h-px bg-gold/50" />
          </div>
        </div>
      </Container>
    </section>
  );
}
