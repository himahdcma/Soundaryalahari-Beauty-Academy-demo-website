import React from 'react';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { homeData } from '../../data/homeData';

export default function GalleryPreviewSection() {
  const { gallery } = homeData;

  return (
    <section className="py-16 sm:py-24 bg-ivory">
      <Container>
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <SectionHeading
            kicker={gallery.label}
            title={gallery.heading}
            subtitle={gallery.subtitle}
            align="center"
          />
        </div>

        {/* 6-image curated grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {gallery.images.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-refined overflow-hidden bg-cream border border-cream-deep/60 shadow-subtle hover:shadow-card transition-all duration-300"
            >
              <img
                src={item.url}
                alt={item.alt}
                className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute bottom-2 left-2 right-2 text-[10px] uppercase tracking-wider font-medium text-ivory bg-charcoal/70 backdrop-blur-sm px-2 py-1 rounded text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.category}
              </div>
            </div>
          ))}
        </div>

        {/* Demo notation & CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-cream-deep/40 text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <ImageIcon className="w-3.5 h-3.5 text-gold-dark" />
            <span>{gallery.note}</span>
          </span>

          <Button
            to={gallery.cta.path}
            variant="outline"
            size="md"
            icon={ArrowRight}
            iconPosition="right"
          >
            {gallery.cta.text}
          </Button>
        </div>
      </Container>
    </section>
  );
}
