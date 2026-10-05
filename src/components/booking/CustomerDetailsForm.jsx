import React from 'react';
import { User, Phone, FileText } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function CustomerDetailsForm({
  name,
  onNameChange,
  nameError,
  phone,
  onPhoneChange,
  phoneError,
  notes,
  onNotesChange,
}) {
  return (
    <div className="space-y-4">
      {/* 1. Full Name */}
      <div className="space-y-1.5">
        <label htmlFor="customerName" className="block text-sm font-semibold text-charcoal">
          Full Name <span className="text-burgundy">*</span>
        </label>
        <div className="relative">
          <input
            type="text"
            id="customerName"
            name="customerName"
            autoComplete="name"
            placeholder="e.g. Ananya Sharma"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            className={cn(
              'w-full px-3.5 py-2.5 rounded-refined border bg-ivory text-charcoal text-sm transition-colors focus-ring placeholder:text-muted/50',
              nameError ? 'border-burgundy' : 'border-cream-deep/80 hover:border-burgundy/40'
            )}
            aria-describedby={nameError ? 'name-error' : undefined}
          />
        </div>
        {nameError && (
          <p id="name-error" className="text-xs font-medium text-burgundy" role="alert">
            {nameError}
          </p>
        )}
      </div>

      {/* 2. Phone Number */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label htmlFor="customerPhone" className="block text-sm font-semibold text-charcoal">
            Phone Number <span className="text-burgundy">*</span>
          </label>
          <span className="text-[11px] text-muted">For WhatsApp confirmation</span>
        </div>
        <div className="relative">
          <input
            type="tel"
            id="customerPhone"
            name="customerPhone"
            autoComplete="tel"
            placeholder="e.g. 98765 43210 or +91 9876543210"
            value={phone}
            onChange={(e) => onPhoneChange(e.target.value)}
            className={cn(
              'w-full px-3.5 py-2.5 rounded-refined border bg-ivory text-charcoal text-sm transition-colors focus-ring placeholder:text-muted/50',
              phoneError ? 'border-burgundy' : 'border-cream-deep/80 hover:border-burgundy/40'
            )}
            aria-describedby={phoneError ? 'phone-error' : undefined}
          />
        </div>
        {phoneError && (
          <p id="phone-error" className="text-xs font-medium text-burgundy" role="alert">
            {phoneError}
          </p>
        )}
      </div>

      {/* 3. Optional Message / Notes */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label htmlFor="customerNotes" className="block text-sm font-medium text-charcoal">
            Message / Notes <span className="text-muted text-xs font-normal">(Optional)</span>
          </label>
          <span className="text-[11px] text-muted">Special requests</span>
        </div>
        <textarea
          id="customerNotes"
          name="customerNotes"
          rows={3}
          placeholder="Any skin concerns, timing preferences, or questions..."
          value={notes}
          onChange={(e) => onNotesChange(e.target.value)}
          className="w-full px-3.5 py-2.5 rounded-refined border border-cream-deep/80 bg-ivory text-charcoal text-sm transition-colors focus-ring placeholder:text-muted/50 resize-y"
        />
      </div>
    </div>
  );
}
