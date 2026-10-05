import React from 'react';
import { Calendar, ArrowRight, MapPin, Sparkles } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import { homeData } from '../../data/homeData';

export default function HeroSection() {
  const { hero } = homeData;

  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:py-20 lg:py-24 bg-gradient-to-b from-ivory to-cream-light/40">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Copy & CTAs */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-6 sm:space-y-8 z-10 text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream border border-cream-deep/70 text-burgundy text-xs font-medium tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>{hero.eyebrow}</span>
            </div>

            {/* Editorial Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-charcoal font-normal leading-[1.18] tracking-tight">
              Beauty That Feels <br className="hidden sm:inline" />
              <span className="italic text-burgundy font-serif">Like You.</span>
            </h1>

            {/* Natural Supporting Copy */}
            <p className="text-base sm:text-lg text-muted max-w-xl leading-relaxed">
              {hero.description}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Button
                to={hero.primaryCta.path}
                variant="primary"
                size="lg"
                icon={Calendar}
                className="w-full sm:w-auto"
              >
                {hero.primaryCta.text}
              </Button>

              <Button
                to={hero.secondaryCta.path}
                variant="outline"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                className="w-full sm:w-auto"
              >
                {hero.secondaryCta.text}
              </Button>
            </div>

            {/* Location Subtext */}
            <div className="pt-3 flex items-center gap-2 text-xs sm:text-sm text-muted">
              <MapPin className="w-4 h-4 text-gold-dark shrink-0" />
              <span className="font-medium text-charcoal/80">{hero.locationText}</span>
              <span className="text-muted/40">•</span>
              <span>Beauty Salon &amp; Academy</span>
            </div>
          </div>

          {/* Right Column: Editorial Image Frame */}
          <div className="lg:col-span-6 xl:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Subtle decorative offset border in champagne gold */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-full h-full rounded-2xl border-2 border-gold/40 -z-10 transition-transform duration-500 hidden sm:block" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-card border border-cream-deep/80 bg-cream">
                <img
                  src={hero.image.url}
                  alt={hero.image.alt}
                  className="w-full h-[360px] sm:h-[460px] lg:h-[490px] object-cover object-center transform transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />

                {/* Subtle soft gradient scrim at bottom for elegance */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent pointer-events-none" />

                {/* Subtle discrete indicator tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-ivory/90 bg-charcoal/60 backdrop-blur-sm px-3.5 py-2 rounded-refined">
                  <span>Thoughtful Care in S.R. Nagar</span>
                  <span className="text-gold-light font-medium">Soundaryalahari</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
