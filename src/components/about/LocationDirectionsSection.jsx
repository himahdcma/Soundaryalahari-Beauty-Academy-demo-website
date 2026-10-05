import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { businessData } from '../../data/businessData';
import { aboutData } from '../../data/aboutData';

export default function LocationDirectionsSection() {
  const { location } = aboutData;
  const directionsUrl = businessData.directionsUrl || businessData.location.mapUrl;
  const embedUrl = businessData.googleMapsEmbedUrl || null;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-cream-light/40 border-b border-cream-deep/40">
      <Container>
        <div className="max-w-4xl mx-auto space-y-10">
          <SectionHeading
            kicker={location.label}
            title={location.heading}
            subtitle="Centrally situated in S.R. Nagar for accessible neighborhood beauty care."
            align="center"
            className="mx-auto"
          />

          <div className="rounded-2xl border border-cream-deep/80 bg-ivory shadow-card overflow-hidden">
            {/* If a confirmed Google Maps embed URL exists in the future, render the iframe */}
            {embedUrl ? (
              <div className="w-full h-80 sm:h-96">
                <iframe
                  title="Soundaryalahari Salon Location"
                  src={embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            ) : (
              /* Polished, unverified map preview container with architectural aesthetic */
              <div className="relative p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-cream via-cream-light to-ivory border-b border-cream-deep/60 flex flex-col items-center text-center">
                {/* Subtle map grid graphic motif */}
                <div 
                  className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#262323_1px,transparent_1px)] [background-size:16px_16px]"
                  aria-hidden="true" 
                />

                <div className="relative z-10 max-w-lg space-y-5">
                  <div className="w-14 h-14 rounded-full bg-burgundy text-white flex items-center justify-center mx-auto shadow-md">
                    <MapPin className="w-7 h-7" aria-hidden="true" />
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-2xl sm:text-3xl font-serif text-charcoal font-medium">
                      {location.area}
                    </h3>
                    <p className="text-base text-muted font-medium">
                      {location.city}, {location.state}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-muted/90 leading-relaxed max-w-md mx-auto">
                    Conveniently accessible in the heart of S.R. Nagar. Click below to view area directions or navigate via Google Maps.
                  </p>

                  <div className="pt-2">
                    <Button
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="md"
                      icon={Navigation}
                      className="shadow-md"
                    >
                      {location.directionsText}
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Info Strip */}
            <div className="px-6 py-4 sm:px-8 bg-cream/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold inline-block" aria-hidden="true" />
                <span>Primary Area: <strong>{location.area}</strong>, {location.city}</span>
              </span>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-burgundy hover:underline font-medium"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
