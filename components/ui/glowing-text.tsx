'use client';

interface GlowingTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GlowingText({ children, className = '' }: GlowingTextProps) {
  return (
    <span className={`glow-text ${className}`}>
      {children}
    </span>
  );
}