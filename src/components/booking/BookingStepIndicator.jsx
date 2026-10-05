import React from 'react';
import { cn } from '../../utils/cn';

export default function BookingStepIndicator({ currentStep = 1, onStepClick }) {
  const steps = [
    { number: '01', title: 'Service' },
    { number: '02', title: 'Date & Time' },
    { number: '03', title: 'Details' },
  ];

  return (
    <div className="w-full py-4 border-b border-cream-deep/50 mb-8">
      <div className="flex items-center justify-between sm:justify-start sm:gap-10">
        {steps.map((step, idx) => {
          const stepNum = idx + 1;
          const isActive = currentStep === stepNum;
          const isDone = currentStep > stepNum;

          return (
            <button
              key={step.number}
              type="button"
              onClick={() => onStepClick && onStepClick(stepNum)}
              className={cn(
                'flex items-center gap-2 text-xs sm:text-sm font-medium transition-colors text-left focus-ring rounded p-1',
                isActive
                  ? 'text-burgundy font-semibold'
                  : isDone
                  ? 'text-charcoal hover:text-burgundy'
                  : 'text-muted/60'
              )}
            >
              <span
                className={cn(
                  'w-6 h-6 rounded-full flex items-center justify-center text-xs transition-colors',
                  isActive
                    ? 'bg-burgundy text-white'
                    : isDone
                    ? 'bg-cream-deep text-charcoal'
                    : 'bg-cream text-muted/60'
                )}
              >
                {step.number}
              </span>
              <span>{step.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
