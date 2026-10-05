import React from 'react';
import HeroSection from '../components/home/HeroSection';
import IntroSection from '../components/home/IntroSection';
import FeaturedServicesSection from '../components/home/FeaturedServicesSection';
import SpecialOfferSection from '../components/home/SpecialOfferSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import BeautyExperienceSection from '../components/home/BeautyExperienceSection';
import GalleryPreviewSection from '../components/home/GalleryPreviewSection';
import LocationContactSection from '../components/home/LocationContactSection';
import FinalCtaSection from '../components/home/FinalCtaSection';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Brand Introduction */}
      <IntroSection />

      {/* 3. Featured Services */}
      <FeaturedServicesSection />

      {/* 4. Special Offer */}
      <SpecialOfferSection />

      {/* 5. Why Choose Us */}
      <WhyChooseUsSection />

      {/* 6. Beauty Experience */}
      <BeautyExperienceSection />

      {/* 7. Gallery Preview */}
      <GalleryPreviewSection />

      {/* 8. Visit / Contact */}
      <LocationContactSection />

      {/* 9. Final Booking CTA */}
      <FinalCtaSection />
    </div>
  );
}
