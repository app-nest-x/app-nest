import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";
import SEOOptimization from "./components/SEOOptimization";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Web Development Company India | React Next.js Experts | App Nest",
  description: "Top-rated web development company in India offering custom websites, React.js, Next.js, e-commerce solutions from ₹15,000. 500+ projects delivered. Free consultation & 24h support.",
  keywords: [
    // Primary competitive keywords
    "web development company India", "best web development company", "website development India", "custom web development",
    "React development company", "Next.js development services", "full stack development India", "professional web developers",

    // Service-specific keywords
    "e-commerce website development", "responsive web design", "mobile app development", "UI UX design services",
    "website redesign services", "SEO web development", "fast loading websites", "secure web development",

    // Location-based keywords
    "web development company Mumbai", "web development company Delhi", "web development company Bangalore",
    "web development company Chennai", "web development company Pune", "web development company Hyderabad",

    // Technology keywords
    "React.js development", "Next.js experts", "TypeScript development", "Node.js development", "MongoDB development",
    "Tailwind CSS development", "modern web technologies", "JAMstack development", "headless CMS development",

    // Business keywords
    "affordable web development", "startup web development", "enterprise web solutions", "small business websites",
    "web development packages", "website maintenance services", "web development consultation", "digital transformation"
  ],
  authors: [{ name: "App Nest Development Team" }],
  creator: "App Nest - Leading Web Development Company India",
  publisher: "App Nest Web Solutions",
  metadataBase: new URL("https://app-nest.com"),
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/en-US',
      'en-IN': '/en-IN',
    },
  },
  openGraph: {
    title: "Best Web Development Company India | React Next.js Experts | App Nest",
    description: "Top-rated web development company in India offering custom websites, React.js, Next.js, e-commerce solutions from ₹15,000. 500+ projects delivered. Free consultation & 24h support.",
    url: "https://app-nest.com",
    siteName: "App Nest - Web Development Company India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image-web-development-india.jpg",
        width: 1200,
        height: 630,
        alt: "App Nest - Best Web Development Company in India - React Next.js Experts",
      },
      {
        url: "/og-image-services.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Web Development Services - Custom Websites & E-commerce Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@appnest_dev",
    creator: "@appnest_dev",
    title: "Best Web Development Company India | React Next.js Experts | App Nest",
    description: "Top-rated web development company in India offering custom websites, React.js, Next.js, e-commerce solutions from ₹15,000. 500+ projects delivered.",
    images: ["/twitter-card-web-development.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-site-verification-code",
    other: {
      bing: ["bing-site-verification-code"],
    },
  },
  category: "Web Development Services",
  classification: "Business",
  other: {
    "geo.region": "IN",
    "geo.country": "India",
    "geo.placename": "India",
    "ICBM": "20.5937, 78.9629",
    "DC.title": "App Nest - Best Web Development Company India",
    "DC.creator": "App Nest Development Team",
    "DC.subject": "Web Development, React Development, Next.js Development",
    "DC.description": "Top-rated web development company in India offering custom websites and web applications",
    "rating": "General",
    "distribution": "Global",
    "revisit-after": "1 day",
    "language": "English",
    "target": "all",
    "audience": "Business Owners, Startups, Enterprises",
    "coverage": "Worldwide",
    "subject": "Professional Web Development Services",
    "abstract": "Leading web development company specializing in React, Next.js, and modern web technologies for Indian businesses",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        <SEOOptimization />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
