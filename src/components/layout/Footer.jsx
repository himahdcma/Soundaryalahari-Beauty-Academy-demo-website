import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, MessageCircle, Navigation, Clock, ChevronRight } from 'lucide-react';
import { businessData } from '../../data/businessData';
import Container from '../common/Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${businessData.whatsappNumber}?text=${encodeURIComponent(
    businessData.whatsappMessage
  )}`;

  return (
    <footer className="bg-charcoal text-ivory border-t border-charcoal-light/30">
      {/* Upper subtle accent border */}
      <div className="h-1 bg-gradient-to-r from-burgundy via-gold to-burgundy-deep opacity-80" />

      <div className="py-14 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Column 1: Brand & Philosophy (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-2xl lg:text-3xl font-semibold tracking-tight text-ivory">
                    {businessData.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-8 h-px bg-gold/70 inline-block" />
                  <span className="text-xs uppercase tracking-[0.2em] text-gold-light font-medium">
                    Salon &amp; Academy
                  </span>
                </div>
              </div>

              <p className="text-sm text-ivory/70 leading-relaxed max-w-md pt-1">
                {businessData.tagline}
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs text-ivory/60">
                <Clock className="w-3.5 h-3.5 text-gold" />
                <span>Mon – Sun: {businessData.timings.weekdays}</span>
              </div>
            </div>

            {/* Column 2: Quick Links (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-light">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-sm">
                {businessData.navLinks.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="inline-flex items-center gap-1.5 text-ivory/75 hover:text-gold transition-colors duration-200"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-gold/60" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to={businessData.cta.path}
                    className="inline-flex items-center gap-1.5 text-ivory/75 hover:text-gold transition-colors duration-200"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-gold/60" />
                    <span>{businessData.cta.text}</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact & Actions (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-light">
                Visit &amp; Contact
              </h4>

              <div className="space-y-3 text-sm text-ivory/75">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold mt-1 shrink-0" />
                  <span>
                    {businessData.location.fullAddress}
                    <span className="block text-xs text-ivory/55 mt-0.5">
                      {businessData.location.landmark}
                    </span>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gold shrink-0" />
                  <a
                    href={`tel:${businessData.phone}`}
                    className="hover:text-gold transition-colors font-medium"
                  >
                    {businessData.displayPhone}
                  </a>
                </div>
              </div>

              {/* Direct Actions: Call, WhatsApp, Directions */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                <a
                  href={`tel:${businessData.phone}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-refined text-xs font-medium bg-ivory/10 hover:bg-ivory/20 text-ivory transition-colors border border-ivory/15"
                >
                  <Phone className="w-3.5 h-3.5 text-gold" />
                  <span>Call Now</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-refined text-xs font-medium bg-[#25D366]/20 hover:bg-[#25D366]/30 text-emerald-300 transition-colors border border-emerald-500/30"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={businessData.location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-refined text-xs font-medium bg-ivory/10 hover:bg-ivory/20 text-ivory transition-colors border border-ivory/15"
                >
                  <Navigation className="w-3.5 h-3.5 text-gold" />
                  <span>Directions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Note */}
          <div className="mt-12 pt-6 border-t border-ivory/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/50">
            <p>
              &copy; {currentYear} {businessData.name}. All rights reserved.
            </p>
            <p className="text-ivory/40">
              S.R. Nagar, Hyderabad &bull; Professional Beauty Services &amp; Academy
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
