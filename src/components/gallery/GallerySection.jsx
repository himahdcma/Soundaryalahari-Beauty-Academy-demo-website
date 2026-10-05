import React, { useState } from 'react';
import { Sparkles, Image as ImageIcon, ZoomIn } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import GalleryLightbox from './GalleryLightbox';
import { galleryCategories, galleryData } from '../../data/galleryData';
import { offersPageContent } from '../../data/offersData';
import { cn } from '../../utils/cn';

export default function GallerySection() {
  const { galleryIntro } = offersPageContent;
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Filter items
  const filteredGallery =
    activeCategory === 'All'
      ? galleryData
      : galleryData.filter(
          (item) => item.category.toLowerCase() === activeCategory.toLowerCase()
        );

  const handleOpenLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredGallery.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      prev === filteredGallery.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="gallery" className="py-14 sm:py-20 bg-ivory scroll-mt-28">
      <Container>
        {/* Gallery Intro */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <SectionHeading
            kicker={galleryIntro.kicker}
            title={galleryIntro.title}
            subtitle={galleryIntro.description}
            align="center"
          />
        </div>

        {/* Filter Pills */}
        <div className="mb-10 flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center no-scrollbar">
          {galleryCategories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={cn(
                  'whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer select-none focus-ring shrink-0',
                  isActive
                    ? 'bg-burgundy text-white shadow-sm border border-burgundy'
                    : 'bg-cream text-charcoal/80 hover:bg-cream-deep hover:text-burgundy border border-cream-deep/70'
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Editorial Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredGallery.map((item, index) => {
            return (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(index)}
                className="group relative rounded-xl overflow-hidden bg-cream border border-cream-deep/70 shadow-subtle hover:shadow-card cursor-pointer transition-all duration-300 transform hover:-translate-y-0.5"
                tabIndex={0}
                role="button"
                aria-label={`Open image: ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenLightbox(index);
                  }
                }}
              >
                {/* Image Container with Consistent Aspect Ratio */}
                <div className="relative aspect-[4/3] sm:aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient Scrim & Hover Overlay */}
                  <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-ivory/90 text-burgundy flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-md">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Subtle category badge */}
                  <div className="absolute top-3 left-3 bg-ivory/90 backdrop-blur-sm text-[10px] uppercase tracking-wider font-semibold text-burgundy px-2.5 py-1 rounded-sm border border-cream-deep/60">
                    {item.category}
                  </div>
                </div>

                {/* Caption Bar */}
                <div className="p-3.5 bg-ivory flex items-center justify-between border-t border-cream-deep/40 text-xs">
                  <span className="font-serif font-medium text-charcoal truncate">
                    {item.title}
                  </span>
                  <span className="text-[11px] text-muted shrink-0 pl-2">
                    Click to view
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Demo Imagery Notation */}
        <div className="mt-8 pt-4 border-t border-cream-deep/50 flex items-center justify-center gap-2 text-xs text-muted text-center">
          <ImageIcon className="w-3.5 h-3.5 text-gold-dark shrink-0" />
          <span>{galleryIntro.demoNote}</span>
        </div>
      </Container>

      {/* Lightbox Modal */}
      <GalleryLightbox
        isOpen={lightboxOpen}
        images={filteredGallery}
        currentIndex={currentImageIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
