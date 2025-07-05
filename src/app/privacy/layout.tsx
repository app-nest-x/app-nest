import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | App Nest',
  description: 'Privacy policy for App Nest web development services. Learn how we collect, use, and protect your personal information.',
  keywords: ['privacy', 'policy', 'data protection', 'App Nest', 'web development'],
  openGraph: {
    title: 'Privacy Policy | App Nest',
    description: 'Privacy policy for App Nest web development services. Learn how we collect, use, and protect your personal information.',
    url: 'https://app-nest.com/privacy',
    siteName: 'App Nest',
    images: [
      {
        url: 'https://app-nest.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'App Nest - Privacy Policy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | App Nest',
    description: 'Privacy policy for App Nest web development services. Learn how we collect, use, and protect your personal information.',
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
    canonical: 'https://app-nest.com/privacy',
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 