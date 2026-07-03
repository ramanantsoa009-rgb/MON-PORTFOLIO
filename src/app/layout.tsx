import type { Metadata } from 'next';
import { Carlito } from 'next/font/google';
import Script from 'next/script';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingShapes } from '@/components/motion/FloatingShapes';
import { SmoothScroll } from '@/components/motion/SmoothScroll';
import { LanguageProvider } from '@/context/LanguageContext';
import { site } from '@/content/site';
import { DEFAULT_LOCALE } from '@/lib/i18n';
import './globals.css';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const carlito = Carlito({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-carlito',
  display: 'swap',
});

const siteMeta = site[DEFAULT_LOCALE];

export const metadata: Metadata = {
  title: `${siteMeta.name} — ${siteMeta.role}`,
  description: siteMeta.tagline,
  openGraph: {
    title: `${siteMeta.name} — ${siteMeta.role}`,
    description: siteMeta.tagline,
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteMeta.name} — ${siteMeta.role}`,
    description: siteMeta.tagline,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={DEFAULT_LOCALE} className={carlito.variable}>
      <body className="flex min-h-screen flex-col bg-bg text-ink antialiased">
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}</Script>
          </>
        )}
        <LanguageProvider>
          <SmoothScroll />
          <FloatingShapes />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
