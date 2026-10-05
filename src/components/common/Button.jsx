import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

const variants = {
  primary: 'bg-burgundy text-white hover:bg-burgundy-deep shadow-button border border-burgundy focus-ring',
  secondary: 'bg-cream text-charcoal hover:bg-cream-deep border border-cream-deep/60 focus-ring',
  outline: 'bg-transparent text-burgundy border border-burgundy/40 hover:border-burgundy hover:bg-burgundy/5 focus-ring',
  ghost: 'bg-transparent text-charcoal hover:text-burgundy hover:bg-burgundy/5 focus-ring',
  dark: 'bg-charcoal text-ivory hover:bg-charcoal-deep border border-charcoal focus-ring',
};

const sizes = {
  sm: 'text-xs px-3.5 py-2 tracking-wider uppercase font-semibold',
  md: 'text-sm px-5 py-2.5 tracking-wide font-medium',
  lg: 'text-base px-7 py-3.5 tracking-wide font-medium',
};

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2 rounded-refined transition-all duration-200 cursor-pointer select-none active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none',
    variants[variant] || variants.primary,
    sizes[size] || sizes.md,
    className
  );

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseClasses} {...props}>
      {content}
    </button>
  );
}
