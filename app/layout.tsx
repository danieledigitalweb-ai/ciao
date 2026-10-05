import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { personalInfo } from '@/lib/data';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const siteUrl = 'https://danielecaldarola.dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personalInfo.name} — ${personalInfo.role}`,
    template: `%s — ${personalInfo.name}`,
  },
  description:
    'Portfolio personale di Daniele Caldarola, Web Developer. Scopri competenze, progetti e servizi web.',
  keywords: [
    'Daniele Caldarola',
    'Web Developer',
    'Siti web',
    'Landing page',
    'Portfolio',
    'Next.js',
    'React',
    'TypeScript',
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: siteUrl,
    title: `${personalInfo.name} — ${personalInfo.role}`,
    description:
      'Portfolio personale di Daniele Caldarola, Web Developer. Scopri competenze, progetti e servizi web.',
    siteName: personalInfo.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} — ${personalInfo.role}`,
    description:
      'Portfolio personale di Daniele Caldarola, Web Developer. Scopri competenze, progetti e servizi web.',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: '227wVvtRLbRoflusxyZj1MCtxlerxgMvpxMlJFYvC7g',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`dark ${inter.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
