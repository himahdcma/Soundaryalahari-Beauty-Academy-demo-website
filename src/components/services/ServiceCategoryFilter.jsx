import React from 'react';
import { cn } from '../../utils/cn';
import { servicesCategories } from '../../data/servicesData';

export default function ServiceCategoryFilter({
  activeCategory,
  onSelectCategory,
  className = '',
}) {
  return (
    <div className={cn('w-full', className)}>
      {/* Mobile-friendly scrollable container with hidden scrollbar */}
      <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center no-scrollbar">
        {servicesCategories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onSelectCategory(category)}
              aria-pressed={isActive}
              className={cn(
                'whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer select-none focus-ring shrink-0',
                isActive
                  ? 'bg-burgundy text-white shadow-sm border border-burgundy'
                  : 'bg-cream text-charcoal/80 hover:bg-cream-deep hover:text-burgundy border border-cream-deep/70'
              )}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
