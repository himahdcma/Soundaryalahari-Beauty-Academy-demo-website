import React from 'react';
import { GraduationCap, MessageCircle } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import { aboutData } from '../../data/aboutData';
import { generateWhatsAppAcademyUrl } from '../../utils/whatsapp';

export default function BeautyAcademySection() {
  const { academy } = aboutData;
  const academyWhatsAppUrl = generateWhatsAppAcademyUrl();

  return (
    <section className="py-16 sm:py-20 bg-cream-light/60 border-b border-cream-deep/40">
      <Container>
        <div className="max-w-2xl mx-auto text-center space-y-6 bg-ivory rounded-2xl border border-cream-deep/80 p-8 sm:p-12 shadow-card">
          {/* Subtle Icon Badge */}
          <div className="w-12 h-12 rounded-full bg-burgundy/10 text-burgundy flex items-center justify-center mx-auto border border-burgundy/20">
            <GraduationCap className="w-6 h-6 text-burgundy" strokeWidth={1.75} aria-hidden="true" />
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-gold-dark font-medium">
              {academy.label}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-charcoal font-normal leading-tight">
              {academy.heading}
            </h2>
          </div>

          <p className="text-sm sm:text-base text-muted leading-relaxed max-w-lg mx-auto">
            {academy.copy}
          </p>

          <div className="pt-2 flex justify-center">
            <Button
              href={academyWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="md"
              icon={MessageCircle}
              className="text-[#128C7E] border-[#25D366]/50 bg-[#25D366]/10 hover:bg-[#25D366] hover:text-white transition-all shadow-sm"
            >
              {academy.ctaText}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
