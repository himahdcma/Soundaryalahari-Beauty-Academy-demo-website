import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function ServiceCard({ service, className = '' }) {
  const bookingUrl = `/booking?service=${encodeURIComponent(service.id)}`;

  return (
    <div
      className={cn(
        'group flex flex-col bg-ivory rounded-xl overflow-hidden border border-cream-deep/70 shadow-subtle hover:shadow-card transition-all duration-300 hover:-translate-y-1',
        className
      )}
    >
      {/* Service Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-cream">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3 bg-ivory/95 backdrop-blur-sm text-[11px] font-medium tracking-wider uppercase text-burgundy px-2.5 py-1 rounded-sm border border-cream-deep/60">
          {service.category}
        </div>

        {/* Graceful Duration Display (only if verified) */}
        {service.duration && (
          <div className="absolute bottom-3 right-3 bg-charcoal/70 backdrop-blur-sm text-[11px] text-ivory px-2 py-0.5 rounded flex items-center gap-1">
            <Clock className="w-3 h-3 text-gold" />
            <span>{service.duration}</span>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-serif text-xl text-charcoal group-hover:text-burgundy transition-colors font-medium">
              {service.name}
            </h3>
            {/* Graceful Price Display (only if verified) */}
            {service.price && (
              <span className="text-sm font-semibold text-burgundy shrink-0">
                {service.price}
              </span>
            )}
          </div>

          <p className="text-sm text-muted leading-relaxed">
            {service.shortDescription}
          </p>
        </div>

        {/* Action Link: Book Appointment */}
        <div className="pt-3 border-t border-cream-deep/50 flex items-center justify-between">
          <Link
            to={bookingUrl}
            state={{ selectedService: service.id, serviceName: service.name }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-burgundy hover:text-burgundy-deep transition-colors py-1 group/btn"
          >
            <Calendar className="w-3.5 h-3.5 text-gold-dark group-hover/btn:scale-110 transition-transform" />
            <span>Book Appointment</span>
          </Link>

          <span className="text-[11px] text-muted/60">S.R. Nagar</span>
        </div>
      </div>
    </div>
  );
}
