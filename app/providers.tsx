'use client';

import { cn } from '@/lib/utils';

export function Providers({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('min-h-screen', className)}>
      {children}
    </div>
  );
}