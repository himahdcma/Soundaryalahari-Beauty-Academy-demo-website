import React from 'react';
import { Calendar, Sparkles } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import { offersPageContent } from '../../data/offersData';

export default function GalleryHero() {
  const { hero } = offersPageContent;

  return (
    <section className="relative overflow-hidden pt-10 pb-12 sm:pt-14 sm:pb-16 bg-gradient-to-b from-ivory to-cream-light/30 border-b border-cream-deep/40">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text (7 cols) */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream border border-cream-deep/70 text-burgundy text-xs font-medium tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
              <span>{hero.kicker}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal leading-tight">
              {hero.title}
            </h1>

            <p className="text-base sm:text-lg text-muted max-w-xl leading-relaxed">
              {hero.description}
            </p>

            <div className="pt-2">
              <Button
                to={hero.cta.path}
                variant="primary"
                size="md"
                icon={Calendar}
              >
                {hero.cta.text}
              </Button>
            </div>
          </div>

          {/* Right Image (5 cols) */}
          <div className="lg:col-span-5 hidden sm:block">
            <div className="relative max-w-md ml-auto rounded-xl overflow-hidden border border-cream-deep/80 shadow-subtle group">
              <img
                src={hero.image.url}
                alt={hero.image.alt}
                className="w-full h-48 sm:h-56 lg:h-64 object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 text-[11px] text-ivory/90 bg-charcoal/60 backdrop-blur-sm px-3 py-1 rounded-refined">
                Visual Showcase &bull; S.R. Nagar
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
