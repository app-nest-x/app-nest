import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About AppNest - Expert Web Development Team | Our Story & Values",
  description: "Learn about AppNest's passionate team of web developers and designers. Founded in 2019, we create exceptional digital experiences with modern technologies like React and Next.js.",
  keywords: ["about appnest", "web development team", "react developers", "ui ux designers", "web development company", "next.js experts", "frontend developers"],
  openGraph: {
    title: "About AppNest - Expert Web Development Team",
    description: "Learn about AppNest's passionate team of web developers and designers. Founded in 2019, we create exceptional digital experiences.",
    url: "https://app-nest.com/about",
    siteName: "AppNest",
    type: "website",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "AppNest Team - Web Development Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About AppNest - Expert Web Development Team",
    description: "Learn about AppNest's passionate team of web developers and designers. Founded in 2019, we create exceptional digital experiences.",
    images: ["/og-about.jpg"],
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 