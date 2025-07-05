import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | App Nest',
  description: 'Terms and conditions for App Nest web development services. Read our legal terms before using our services.',
  keywords: ['terms', 'conditions', 'legal', 'App Nest', 'web development'],
  openGraph: {
    title: 'Terms and Conditions | App Nest',
    description: 'Terms and conditions for App Nest web development services. Read our legal terms before using our services.',
    url: 'https://app-nest.com/terms',
    siteName: 'App Nest',
    images: [
      {
        url: 'https://app-nest.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'App Nest - Terms and Conditions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms and Conditions | App Nest',
    description: 'Terms and conditions for App Nest web development services. Read our legal terms before using our services.',
    images: ['https://app-nest.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://app-nest.com/terms',
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 