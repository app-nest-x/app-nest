import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Services - React, Next.js & Custom Solutions | AppNest",
  description: "Professional web development services including custom web apps, UI/UX design, e-commerce solutions, and SEO optimization. Starting from $3,000. Get your free consultation today.",
  keywords: ["web development services", "react development", "nextjs development", "custom web applications", "ecommerce development", "ui ux design", "seo optimization", "web development pricing"],
  openGraph: {
    title: "Web Development Services - React, Next.js & Custom Solutions",
    description: "Professional web development services including custom web apps, UI/UX design, e-commerce solutions, and SEO optimization. Starting from $3,000.",
    url: "https://app-nest.com/services",
    siteName: "AppNest",
    type: "website",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "AppNest Web Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Services - React, Next.js & Custom Solutions",
    description: "Professional web development services including custom web apps, UI/UX design, e-commerce solutions, and SEO optimization.",
    images: ["/og-services.jpg"],
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 