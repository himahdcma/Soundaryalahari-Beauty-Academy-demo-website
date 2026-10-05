import React from 'react';
import { cn } from '../../utils/cn';

export default function SectionHeading({
  kicker,
  title,
  subtitle,
  align = 'center',
  className = '',
  kickerColor = 'gold',
}) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  const kickerStyles = {
    gold: 'text-gold-dark font-medium',
    burgundy: 'text-burgundy font-medium',
    muted: 'text-muted font-medium',
  };

  return (
    <div className={cn('flex flex-col max-w-2xl', alignClasses[align] || alignClasses.center, className)}>
      {kicker && (
        <div className="flex items-center gap-2 mb-2.5">
          <span className="w-6 h-px bg-gold/60 inline-block" />
          <span className={cn('text-xs uppercase tracking-[0.2em]', kickerStyles[kickerColor] || kickerStyles.gold)}>
            {kicker}
          </span>
          {align === 'center' && <span className="w-6 h-px bg-gold/60 inline-block" />}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-charcoal font-serif font-normal leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
