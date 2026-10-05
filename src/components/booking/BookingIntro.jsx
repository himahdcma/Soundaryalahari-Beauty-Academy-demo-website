import React from 'react';
import { Calendar, Info } from 'lucide-react';
import Container from '../common/Container';

export default function BookingIntro() {
  return (
    <section className="pt-10 pb-8 sm:pt-14 sm:pb-10 bg-gradient-to-b from-ivory to-cream-light/30 border-b border-cream-deep/40 text-center">
      <Container>
        <div className="max-w-2xl mx-auto space-y-3.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream border border-cream-deep/70 text-burgundy text-xs font-medium tracking-wide">
            <Calendar className="w-3.5 h-3.5 text-gold-dark" />
            <span>Book Your Visit</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal leading-tight">
            Your Time. Your Beauty.
          </h1>

          <p className="text-muted text-base sm:text-lg leading-relaxed">
            Choose your preferred service and time, then send your appointment request directly to Soundaryalahari.
          </p>

          <div className="pt-2 inline-flex items-center gap-2 text-xs text-charcoal/70 bg-cream/70 border border-cream-deep/60 px-3.5 py-1.5 rounded-full">
            <Info className="w-3.5 h-3.5 text-gold-dark shrink-0" />
            <span>Appointments are confirmed by the salon after receiving your request.</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
