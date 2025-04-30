import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import PersonSchema from '@/components/json-ld';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  metadataBase: new URL('https://namanraj.tech'),
  title: 'Naman Raj | Full Stack Developer',
  description:
    'Full Stack Developer specializing in JavaScript,React, Next.js and Go with expertise in building intuitive, scalable, and visually appealing web solutions.',
  keywords:
    'Naman Raj, Full Stack Developer, JavaScript, React, Next.js, Web Development',
  openGraph: {
    title: 'Naman Raj | Full Stack Developer',
    description:
      'Full Stack Developer specializing in JavaScript,React, Next.js and Go',
    url: 'https://namanraj.tech/',
    siteName: 'Naman Raj Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Naman Raj - Full Stack Developer',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Naman Raj | Full Stack Developer',
    description:
      'Full Stack Developer specializing in JavaScript,React, Go, and Next.js',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://namanraj.tech',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>
        {children}
        <PersonSchema />
      </body>
    </html>
  );
}
