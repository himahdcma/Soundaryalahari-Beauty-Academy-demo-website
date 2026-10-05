import React from 'react';
import { cn } from '../../utils/cn';

export default function Container({ children, className = '', as: Component = 'div', ...props }) {
  return (
    <Component
      className={cn('max-w-site mx-auto px-4 sm:px-6 lg:px-8 w-full', className)}
      {...props}
    >
      {children}
    </Component>
  );
}
