import React from 'react';
import { Image, Tag } from 'lucide-react';
import Container from '../common/Container';

export default function GalleryJumpNav() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-ivory border-b border-cream-deep/40 py-3 sticky top-[60px] z-30 backdrop-blur-md bg-ivory/95">
      <Container>
        <div className="flex items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium">
          <button
            type="button"
            onClick={() => scrollToSection('gallery')}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-charcoal hover:text-burgundy hover:bg-cream transition-colors focus-ring cursor-pointer"
          >
            <Image className="w-3.5 h-3.5 text-gold-dark" />
            <span>Visual Gallery</span>
          </button>

          <span className="text-muted/40">&bull;</span>

          <button
            type="button"
            onClick={() => scrollToSection('offers')}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-charcoal hover:text-burgundy hover:bg-cream transition-colors focus-ring cursor-pointer"
          >
            <Tag className="w-3.5 h-3.5 text-gold-dark" />
            <span>Special Offers</span>
          </button>
        </div>
      </Container>
    </div>
  );
}
