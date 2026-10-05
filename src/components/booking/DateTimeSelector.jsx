import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { cn } from '../../utils/cn';

const TIME_PRESETS = [
  { id: 'morning', label: 'Morning', timing: '10:00 AM – 1:00 PM' },
  { id: 'afternoon', label: 'Afternoon', timing: '1:00 PM – 5:00 PM' },
  { id: 'evening', label: 'Evening', timing: '5:00 PM – 8:00 PM' },
];

export default function DateTimeSelector({
  preferredDate,
  onDateChange,
  dateError,
  preferredTime,
  onTimeChange,
  timeError,
}) {
  // Compute minimum selectable date as today (YYYY-MM-DD)
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const minDateString = `${year}-${month}-${day}`;

  return (
    <div className="space-y-6">
      {/* 1. Date Selection */}
      <div className="space-y-2">
        <label
          htmlFor="preferredDate"
          className="block text-sm font-semibold text-charcoal"
        >
          Preferred Date <span className="text-burgundy">*</span>
        </label>

        <div className="relative">
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            min={minDateString}
            value={preferredDate}
            onChange={(e) => onDateChange(e.target.value)}
            className={cn(
              'w-full px-4 py-2.5 rounded-refined border bg-ivory text-charcoal text-sm transition-colors focus-ring cursor-pointer',
              dateError ? 'border-burgundy' : 'border-cream-deep/80 hover:border-burgundy/40'
            )}
            aria-describedby={dateError ? 'date-error' : undefined}
          />
        </div>

        {dateError ? (
          <p id="date-error" className="text-xs font-medium text-burgundy" role="alert">
            {dateError}
          </p>
        ) : (
          <p className="text-[11px] text-muted">
            Select today or any upcoming date.
          </p>
        )}
      </div>

      {/* 2. Time Selection */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-semibold text-charcoal">
            Preferred Time <span className="text-burgundy">*</span>
          </label>
          <span className="text-[11px] text-muted flex items-center gap-1">
            <Clock className="w-3 h-3 text-gold-dark" />
            <span>Salon opens 10:00 AM</span>
          </span>
        </div>

        {/* Time Preference Options */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5" role="radiogroup" aria-label="Select preferred time slot">
          {TIME_PRESETS.map((preset) => {
            const isSelected = preferredTime === preset.timing;

            return (
              <button
                key={preset.id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => onTimeChange(preset.timing)}
                className={cn(
                  'p-3 rounded-refined border text-left transition-all duration-200 focus-ring',
                  isSelected
                    ? 'border-burgundy bg-burgundy/5 text-burgundy font-medium shadow-subtle'
                    : 'border-cream-deep/80 bg-ivory text-charcoal hover:border-burgundy/40 hover:bg-cream-light/30'
                )}
              >
                <div className="text-xs font-semibold">{preset.label}</div>
                <div className="text-[11px] text-muted mt-0.5">{preset.timing}</div>
              </button>
            );
          })}
        </div>

        {/* Custom Specific Time option or note */}
        <div className="pt-1">
          <p className="text-[11px] text-muted">
            Final timing will be confirmed by the salon.
          </p>
        </div>

        {timeError && (
          <p className="text-xs font-medium text-burgundy" role="alert">
            {timeError}
          </p>
        )}
      </div>
    </div>
  );
}
