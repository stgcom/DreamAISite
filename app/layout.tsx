import './globals.css';
import '../styles/glow.css';
import type { Metadata } from 'next';
import { Providers } from './providers';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { NebulaBackground } from '@/components/background/nebula';

export const metadata: Metadata = {
  title: 'DreamAI Consulting | AI Solutions for Small Businesses',
  description: 'Transform your small business with AI-powered solutions. Automate tasks, grow your business, and focus on what matters most.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-black min-h-screen">
        <NebulaBackground />
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}