import React, { useState } from 'react';
import Container from '../components/common/Container';
import ServicesHero from '../components/services/ServicesHero';
import ServiceCategoryFilter from '../components/services/ServiceCategoryFilter';
import ServiceGrid from '../components/services/ServiceGrid';
import NotSureCta from '../components/services/NotSureCta';
import ServiceOffersPreview from '../components/services/ServiceOffersPreview';
import ServicesFinalCta from '../components/services/ServicesFinalCta';
import { servicesData } from '../data/servicesData';

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="w-full">
      {/* 1. Compact Services Hero */}
      <ServicesHero />

      {/* 2 & 3. Category Filter and Services Grid Container */}
      <section className="py-12 sm:py-16 bg-ivory">
        <Container>
          {/* Category Filter Controls */}
          <div className="mb-10">
            <ServiceCategoryFilter
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />
          </div>

          {/* Responsive Service Grid */}
          <ServiceGrid
            services={servicesData}
            activeCategory={activeCategory}
          />
        </Container>
      </section>

      {/* 4. Not Sure What to Choose? CTA */}
      <NotSureCta />

      {/* 5. Special Offers Preview */}
      <ServiceOffersPreview />

      {/* 6. Final Booking CTA */}
      <ServicesFinalCta />
    </div>
  );
}
