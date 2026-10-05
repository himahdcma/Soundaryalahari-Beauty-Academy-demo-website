import React, { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import OurStorySection from '../components/about/OurStorySection';
import BeautyPhilosophySection from '../components/about/BeautyPhilosophySection';
import VisualSalonSection from '../components/about/VisualSalonSection';
import BeautyAcademySection from '../components/about/BeautyAcademySection';
import ContactSection from '../components/about/ContactSection';
import LocationDirectionsSection from '../components/about/LocationDirectionsSection';
import BusinessHoursSection from '../components/about/BusinessHoursSection';
import AboutFinalCta from '../components/about/AboutFinalCta';

export default function AboutPage() {
  useEffect(() => {
    document.title = "About & Contact | Soundaryalahari Beauty Academy - S.R. Nagar, Hyderabad";
  }, []);

  return (
    <div className="w-full">
      {/* 1. Compact About Hero */}
      <AboutHero />

      {/* 2. Our Story */}
      <OurStorySection />

      {/* 3. Care That Feels Personal (Beauty Philosophy) */}
      <BeautyPhilosophySection />

      {/* 4. Visual Salon Experience */}
      <VisualSalonSection />

      {/* 5. Beauty Academy Enquiry */}
      <BeautyAcademySection />

      {/* 6. Contact Section */}
      <ContactSection />

      {/* 7. Location / Directions */}
      <LocationDirectionsSection />

      {/* 8. Business Hours */}
      <BusinessHoursSection />

      {/* 9. Final Booking CTA */}
      <AboutFinalCta />
    </div>
  );
}
