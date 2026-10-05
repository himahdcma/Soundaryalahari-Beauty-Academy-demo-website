import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { businessData } from '../../data/businessData';
import Container from '../common/Container';
import Button from '../common/Button';
import { cn } from '../../utils/cn';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Track scroll position for compact header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300 bg-ivory/95 backdrop-blur-md border-b border-cream-deep/60',
          isScrolled ? 'py-2.5 shadow-subtle' : 'py-3.5 sm:py-4'
        )}
      >
        <Container>
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo / Wordmark */}
            <Link
              to="/"
              className="group flex flex-col items-start focus-ring rounded-sm py-1"
              aria-label={`${businessData.name} - Home`}
            >
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-burgundy group-hover:text-burgundy-deep transition-colors">
                  {businessData.shortName}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block mb-1" />
              </div>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.24em] font-medium text-muted -mt-0.5 group-hover:text-charcoal transition-colors">
                Beauty Academy &amp; Salon
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-7 lg:space-x-9" aria-label="Main Navigation">
              {businessData.navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      'text-sm font-medium transition-colors duration-200 relative py-1 focus-ring rounded-sm',
                      isActive
                        ? 'text-burgundy font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-burgundy after:rounded-full'
                        : 'text-charcoal/80 hover:text-burgundy'
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={`tel:${businessData.phone}`}
                className="hidden lg:flex items-center gap-1.5 text-xs font-medium text-muted hover:text-burgundy transition-colors px-2 py-1"
                aria-label={`Call ${businessData.phone}`}
              >
                <Phone className="w-3.5 h-3.5 text-gold-dark" />
                <span>{businessData.phone}</span>
              </a>

              <Button
                to={businessData.cta.path}
                variant="primary"
                size="sm"
                icon={Calendar}
                className="shadow-sm hover:shadow-button"
              >
                {businessData.cta.text}
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 md:hidden">
              <Link
                to={businessData.cta.path}
                className="text-xs font-medium px-3 py-1.5 rounded-refined bg-burgundy text-white hover:bg-burgundy-deep transition-colors"
              >
                Book
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-charcoal hover:text-burgundy focus-ring rounded-refined border border-cream-deep/80 bg-cream/40"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer / Slide-down Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-charcoal/40 backdrop-blur-sm transition-opacity duration-300 md:hidden',
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        className={cn(
          'fixed top-[61px] left-0 right-0 z-40 bg-ivory border-b border-cream-deep shadow-dropdown transition-all duration-300 transform md:hidden overflow-y-auto max-h-[calc(100vh-61px)]',
          mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        )}
      >
        <div className="px-5 py-6 space-y-5">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {businessData.navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    'px-3.5 py-2.5 rounded-refined text-base font-medium transition-colors flex items-center justify-between',
                    isActive
                      ? 'bg-burgundy/10 text-burgundy font-semibold'
                      : 'text-charcoal hover:bg-cream-soft hover:text-burgundy'
                  )
                }
              >
                <span>{item.name}</span>
                {location.pathname === item.path && (
                  <span className="w-1.5 h-1.5 rounded-full bg-burgundy" />
                )}
              </NavLink>
            ))}
          </nav>

          <div className="pt-4 border-t border-cream-deep space-y-3">
            <Button
              to={businessData.cta.path}
              variant="primary"
              size="md"
              className="w-full justify-center"
              icon={Calendar}
            >
              {businessData.cta.text}
            </Button>

            <div className="flex items-center justify-between px-2 pt-2 text-xs text-muted">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                {businessData.location.area}, Hyderabad
              </span>
              <a
                href={`tel:${businessData.phone}`}
                className="font-medium text-burgundy flex items-center gap-1 hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                {businessData.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
