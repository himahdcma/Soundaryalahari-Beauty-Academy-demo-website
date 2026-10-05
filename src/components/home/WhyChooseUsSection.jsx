import React from 'react';
import { UserCheck, Sparkles, Heart, PhoneCall } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { homeData } from '../../data/homeData';

const iconMap = {
  UserCheck: UserCheck,
  Sparkles: Sparkles,
  Heart: Heart,
  PhoneCall: PhoneCall,
};

export default function WhyChooseUsSection() {
  const { trustPoints } = homeData;

  return (
    <section className="py-16 sm:py-24 bg-ivory border-b border-cream-deep/40">
      <Container>
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <SectionHeading
            kicker="The Soundaryalahari Way"
            title="Beauty Care, Made Personal"
            subtitle="Thoughtful standards and a genuine commitment to every client who walks through our doors."
            align="center"
          />
        </div>

        {/* 4 Trust Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((item, index) => {
            const Icon = iconMap[item.icon] || Sparkles;

            return (
              <div
                key={index}
                className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-3 p-2"
              >
                <div className="w-12 h-12 rounded-refined bg-cream flex items-center justify-center border border-cream-deep/80 text-burgundy shadow-sm shrink-0">
                  <Icon className="w-5 h-5 text-burgundy" />
                </div>

                <h3 className="font-serif text-lg font-medium text-charcoal">
                  {item.title}
                </h3>

                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
