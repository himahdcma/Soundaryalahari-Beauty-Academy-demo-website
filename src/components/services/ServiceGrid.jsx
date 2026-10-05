import React from 'react';
import ServiceCard from './ServiceCard';

export default function ServiceGrid({ services, activeCategory }) {
  const filteredServices =
    activeCategory === 'All'
      ? services
      : services.filter((s) => s.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="space-y-6">
      {/* Category count indicator */}
      <div className="flex items-center justify-between text-xs text-muted border-b border-cream-deep/40 pb-3">
        <span>
          Showing <strong className="text-charcoal font-semibold">{filteredServices.length}</strong>{' '}
          {filteredServices.length === 1 ? 'service' : 'services'}
          {activeCategory !== 'All' && <span> in <strong className="text-burgundy">{activeCategory}</strong></span>}
        </span>
        <span>Soundaryalahari Beauty Care</span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-12 bg-cream-light/50 rounded-xl border border-cream-deep/60 p-6">
          <p className="text-muted text-sm">
            No services currently listed under this category.
          </p>
        </div>
      )}
    </div>
  );
}
