import type { Metadata } from 'next';
import { Carlito } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingShapes } from '@/components/motion/FloatingShapes';
import { SmoothScroll } from '@/components/motion/SmoothScroll';
import { site } from '@/content/site';
import './globals.css';

const carlito = Carlito({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-carlito',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.tagline,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={carlito.variable}>
      <body className="flex min-h-screen flex-col bg-bg text-ink antialiased">
        <SmoothScroll />
        <FloatingShapes />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
