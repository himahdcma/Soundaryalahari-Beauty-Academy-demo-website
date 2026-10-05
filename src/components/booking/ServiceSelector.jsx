import React from 'react';
import { Check } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import { cn } from '../../utils/cn';

export default function ServiceSelector({
  selectedServiceId,
  onSelectService,
  error,
}) {
  return (
    <div className="space-y-3.5">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-semibold text-charcoal">
          Select Service <span className="text-burgundy">*</span>
        </label>
        <span className="text-xs text-muted">
          {selectedServiceId ? '1 service selected' : 'Choose 1 service'}
        </span>
      </div>

      {/* Services Selection Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="radiogroup" aria-label="Select a service">
        {servicesData.map((service) => {
          const isSelected = selectedServiceId === service.id;

          return (
            <div
              key={service.id}
              role="radio"
              aria-checked={isSelected}
              tabIndex={0}
              onClick={() => onSelectService(service.id)}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  onSelectService(service.id);
                }
              }}
              className={cn(
                'group relative flex items-center justify-between p-3.5 rounded-refined border text-left cursor-pointer transition-all duration-200 focus-ring',
                isSelected
                  ? 'border-burgundy bg-burgundy/5 shadow-subtle'
                  : 'border-cream-deep/80 bg-ivory hover:border-burgundy/40 hover:bg-cream-light/30'
              )}
            >
              <div className="space-y-0.5 pr-2">
                <span className="text-[10px] uppercase tracking-wider font-medium text-muted">
                  {service.category}
                </span>
                <h4
                  className={cn(
                    'font-serif text-sm sm:text-base font-medium transition-colors',
                    isSelected ? 'text-burgundy font-semibold' : 'text-charcoal group-hover:text-burgundy'
                  )}
                >
                  {service.name}
                </h4>
              </div>

              {/* Radio Indicator */}
              <div
                className={cn(
                  'w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors',
                  isSelected
                    ? 'border-burgundy bg-burgundy text-white'
                    : 'border-cream-deep group-hover:border-burgundy/40'
                )}
              >
                {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
              </div>
            </div>
          );
        })}
      </div>

      {error && (
        <p className="text-xs font-medium text-burgundy pt-1" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
