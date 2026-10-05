import React from 'react';
import { Tag, Calendar, MessageCircle, AlertCircle, Sparkles } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { offersData, offersPageContent } from '../../data/offersData';
import { generateWhatsAppOfferUrl } from '../../utils/whatsapp';

export default function SpecialOffersSection() {
  const { offersIntro } = offersPageContent;

  return (
    <section id="offers" className="py-16 sm:py-24 bg-ivory scroll-mt-28">
      <Container>
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <SectionHeading
            kicker={offersIntro.kicker}
            title={offersIntro.title}
            subtitle={offersIntro.description}
            align="center"
          />
        </div>

        {/* Offer Cards (2 elegant split cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {offersData.map((offer) => {
            const whatsappUrl = generateWhatsAppOfferUrl(offer.title);

            return (
              <div
                key={offer.id}
                className="group flex flex-col sm:flex-row bg-cream-light/60 rounded-2xl overflow-hidden border border-cream-deep/80 shadow-subtle hover:shadow-card transition-all duration-300"
              >
                {/* Visual Thumbnail */}
                <div className="sm:w-2/5 relative aspect-[16/10] sm:aspect-auto overflow-hidden bg-cream shrink-0">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-burgundy/90 text-ivory text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-sm backdrop-blur-sm">
                    {offer.badge}
                  </div>
                </div>

                {/* Offer Details */}
                <div className="p-6 sm:p-7 flex flex-col justify-between space-y-4 flex-grow text-left">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1.5 text-xs font-medium text-gold-dark">
                      <Sparkles className="w-3.5 h-3.5 text-gold" />
                      <span>{offer.audience} Focus</span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-semibold">
                      {offer.title}
                    </h3>

                    <p className="text-sm text-muted leading-relaxed">
                      {offer.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 border-t border-cream-deep/60 flex flex-wrap items-center gap-2.5">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-refined text-xs font-semibold text-[#128C7E] bg-[#25D366]/15 hover:bg-[#25D366] hover:text-white transition-colors border border-[#25D366]/30 focus-ring cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Enquire on WhatsApp</span>
                    </a>

                    <Button
                      to="/booking"
                      variant="primary"
                      size="sm"
                      icon={Calendar}
                    >
                      Book Appointment
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Terms Clarification Note */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-muted text-center max-w-xl mx-auto">
          <AlertCircle className="w-3.5 h-3.5 text-gold-dark shrink-0" />
          <span>{offersIntro.disclaimer}</span>
        </div>
      </Container>
    </section>
  );
}
