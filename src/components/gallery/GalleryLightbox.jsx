import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GalleryLightbox({
  isOpen,
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) {
  // Handle ESC and Arrow keys
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[currentIndex];
  if (!currentImage) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Preview Lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-charcoal/90 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Lightbox Content Container (prevent click propagation) */}
      <div
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center select-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls bar */}
        <div className="w-full flex items-center justify-between text-ivory pb-3 px-1 text-xs">
          <div className="flex items-center gap-2">
            <span className="uppercase tracking-widest text-[11px] text-gold font-medium">
              {currentImage.category}
            </span>
            <span className="text-ivory/40">&bull;</span>
            <span className="text-ivory/70">
              {currentIndex + 1} of {images.length}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Lightbox"
            className="p-1.5 rounded-full bg-ivory/10 hover:bg-ivory/20 text-ivory transition-colors focus-ring cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Image View */}
        <div className="relative w-full overflow-hidden rounded-xl bg-charcoal-deep border border-ivory/15 shadow-2xl flex items-center justify-center max-h-[75vh]">
          <img
            src={currentImage.image}
            alt={currentImage.alt}
            className="max-h-[75vh] w-auto max-w-full object-contain"
          />

          {/* Previous Button */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={onPrev}
              aria-label="Previous Image"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-charcoal/60 hover:bg-charcoal/90 text-ivory transition-all backdrop-blur-sm focus-ring cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Next Button */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={onNext}
              aria-label="Next Image"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-charcoal/60 hover:bg-charcoal/90 text-ivory transition-all backdrop-blur-sm focus-ring cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Image Caption & Title */}
        <div className="w-full pt-3 px-1 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ivory/80">
          <p className="font-serif text-sm text-ivory font-medium">
            {currentImage.title}
          </p>
          <span className="text-[11px] text-ivory/50">
            Press ESC or click anywhere outside to close
          </span>
        </div>
      </div>
    </div>
  );
}
