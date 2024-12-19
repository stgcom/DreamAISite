'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { GlowFilter } from './glow-filter';
import { BackgroundGlow } from './background-glow';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <BackgroundGlow />
      <GlowFilter />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="header-text">
            <span className="glow-filter" data-text="Transform Your Business">
              Transform Your Business
            </span>
            <br />
            <span className="glow-filter" data-text="with AI Solutions">
              with AI Solutions
            </span>
          </h1>
          <p className="mt-6 text-xl text-gray-400">
            Stop being overwhelmed by day-to-day tasks. Let AI handle the busy work
            so you can focus on growing your business.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg bg-white text-black hover:bg-gray-200">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white/10">
              View Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}