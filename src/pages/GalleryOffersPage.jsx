import React from 'react';
import GalleryHero from '../components/gallery/GalleryHero';
import GalleryJumpNav from '../components/gallery/GalleryJumpNav';
import GallerySection from '../components/gallery/GallerySection';
import BrandMomentSection from '../components/gallery/BrandMomentSection';
import SpecialOffersSection from '../components/gallery/SpecialOffersSection';
import GalleryFinalCta from '../components/gallery/GalleryFinalCta';

export default function GalleryOffersPage() {
  return (
    <div className="w-full">
      {/* 1. Compact Hero */}
      <GalleryHero />

      {/* 2. Jump Navigation */}
      <GalleryJumpNav />

      {/* 3. Visual Gallery Section with Filters, Grid & Lightbox */}
      <GallerySection />

      {/* 4. Visual Brand Break */}
      <BrandMomentSection />

      {/* 5. Special Offers Section with WhatsApp Enquiries */}
      <SpecialOffersSection />

      {/* 6. Final Booking CTA */}
      <GalleryFinalCta />
    </div>
  );
}
