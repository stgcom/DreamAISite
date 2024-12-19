'use client';

import { Button } from '@/components/ui/button';
import { Brain } from 'lucide-react';
import Link from 'next/link';
import { GlowingText } from '@/components/ui/glowing-text';

export function Header() {
  return (
    <header className="border-b border-purple-900/20 bg-black/40 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <Brain className="h-8 w-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-200" />
            <GlowingText className="text-xl font-bold">DreamAI</GlowingText>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            {['Services', 'Use Cases', 'Why Us'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-sm font-medium text-purple-200 hover:text-purple-100 transition-colors duration-200"
              >
                <GlowingText>{item}</GlowingText>
              </Link>
            ))}
            <Button className="bg-purple-600 hover:bg-purple-500 text-white">
              <GlowingText>Get Started</GlowingText>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}