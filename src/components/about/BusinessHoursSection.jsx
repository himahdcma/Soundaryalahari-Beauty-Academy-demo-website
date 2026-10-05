import React from 'react';
import { Clock, Phone } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { businessData } from '../../data/businessData';
import { aboutData } from '../../data/aboutData';

export default function BusinessHoursSection() {
  const { hours } = aboutData;
  const verifiedHours = businessData.businessHours; // null when unverified

  return (
    <section className="py-16 sm:py-20 bg-ivory border-b border-cream-deep/40">
      <Container>
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <SectionHeading
            kicker={hours.label}
            title={hours.heading}
            align="center"
          />

          <div className="bg-cream-light/60 rounded-2xl border border-cream-deep/80 p-8 sm:p-10 shadow-card space-y-6">
            <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-burgundy mx-auto border border-cream-deep/70">
              <Clock className="w-6 h-6 text-burgundy" strokeWidth={1.75} aria-hidden="true" />
            </div>

            {verifiedHours ? (
              /* If verified hours are provided in the future */
              <div className="space-y-2">
                <p className="text-base text-charcoal font-medium">
                  {verifiedHours}
                </p>
              </div>
            ) : (
              /* Unverified fallback requested by user */
              <div className="space-y-5">
                <p className="text-base sm:text-lg text-charcoal/90 leading-relaxed font-serif">
                  {hours.unverifiedNotice}
                </p>

                <div className="pt-1 flex justify-center">
                  <Button
                    href={`tel:${businessData.phone}`}
                    variant="primary"
                    size="md"
                    icon={Phone}
                    className="shadow-sm"
                  >
                    {hours.ctaText}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
