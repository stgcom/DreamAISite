'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Layers,
  Wand2,
  TrendingUp,
  Headphones,
  MousePointerClick,
  Users,
} from 'lucide-react';

const features = [
  {
    title: 'All-in-One AI Solution',
    description:
      'A complete set of AI tools to handle all your business needs in one place.',
    icon: Layers,
  },
  {
    title: 'Custom Solutions',
    description:
      'Tailored AI applications built with Bolt.new to match your unique requirements.',
    icon: Wand2,
  },
  {
    title: 'Focus on ROI',
    description:
      'We prioritize real results that directly impact your bottom line.',
    icon: TrendingUp,
  },
  {
    title: 'Expert Support',
    description:
      'Comprehensive training and support to ensure your success with our tools.',
    icon: Headphones,
  },
  {
    title: 'Easy to Use',
    description:
      'No coding needed - our solutions are designed for non-technical users.',
    icon: MousePointerClick,
  },
  {
    title: 'True Partnership',
    description:
      'We work alongside you as a strategic partner invested in your success.',
    icon: Users,
  },
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose DreamAI</h2>
          <p className="text-gray-600">
            We're not just another AI company. We're your partner in success,
            committed to helping your business grow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <feature.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}