'use client';

import {
  Bot,
  Calendar,
  Users,
  Mail,
  Code,
  Star,
  HeartHandshake,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { GlowingText } from '@/components/ui/glowing-text';

const services = [
  {
    title: 'AI-Powered Chatbots',
    description: 'Intelligent chatbots that handle customer inquiries 24/7, book appointments, and collect leads.',
    icon: Bot,
  },
  // ... other services
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <GlowingText>
            <h2 className="text-3xl font-bold mb-4 text-purple-200">Our Services</h2>
          </GlowingText>
          <p className="text-purple-300/80">
            Comprehensive AI solutions designed to make your business more
            efficient and profitable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="bg-purple-900/20 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-colors duration-200">
              <CardHeader>
                <service.icon className="h-8 w-8 text-purple-400 mb-4" />
                <CardTitle>
                  <GlowingText className="text-purple-200">{service.title}</GlowingText>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-300/80">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}