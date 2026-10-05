import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { homeData } from '../../data/homeData';

export default function FeaturedServicesSection() {
  const { featuredServices } = homeData;

  return (
    <section className="py-16 sm:py-24 bg-cream-light/30">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <SectionHeading
            kicker="Our Services"
            title="Care Designed Around You"
            subtitle="Explore our thoughtfully curated salon treatments and specialized beauty therapies, personalized for your skin, hair, and self-care routines."
            align="center"
          />
        </div>

        {/* 6 Featured Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col bg-ivory rounded-xl overflow-hidden border border-cream-deep/70 shadow-subtle hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Frame with Aspect Ratio */}
              <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Category tag */}
                <div className="absolute top-3 left-3 bg-ivory/95 backdrop-blur-sm text-[11px] font-medium tracking-wider uppercase text-burgundy px-2.5 py-1 rounded-sm border border-cream-deep/60">
                  {service.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl text-charcoal group-hover:text-burgundy transition-colors font-medium">
                    {service.name}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-2 flex items-center justify-between border-t border-cream-deep/40 text-xs">
                  <Link
                    to="/booking"
                    className="inline-flex items-center gap-1.5 font-medium text-burgundy hover:text-burgundy-deep transition-colors py-1"
                  >
                    <Calendar className="w-3.5 h-3.5 text-gold-dark" />
                    <span>Book Treatment</span>
                  </Link>

                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1 text-muted hover:text-charcoal transition-colors py-1"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <Button
            to="/services"
            variant="outline"
            size="md"
            icon={ArrowRight}
            iconPosition="right"
          >
            View All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
