import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "App Nest - Modern Web Development Services | Custom Websites & Apps",
  description: "Professional web development services specializing in modern, responsive websites and web applications. Expert React, Next.js, and full-stack development solutions.",
  keywords: ["web development", "website design", "react development", "next.js", "full-stack development", "custom web applications", "responsive design", "SEO optimization"],
  authors: [{ name: "App Nest Team" }],
  creator: "App Nest",
  publisher: "App Nest",
  metadataBase: new URL("https://app-nest.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "App Nest - Modern Web Development Services",
    description: "Professional web development services specializing in modern, responsive websites and web applications.",
    url: "https://app-nest.com",
    siteName: "App Nest",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AppNest - Modern Web Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "App Nest - Modern Web Development Services",
    description: "Professional web development services specializing in modern, responsive websites and web applications.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
