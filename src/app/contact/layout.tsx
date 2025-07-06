import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact AppNest - Get Free Web Development Consultation | Start Your Project",
  description: "Ready to transform your digital presence? Contact AppNest for expert web development services. Get a free consultation and custom quote within 24 hours. Let's build something amazing together.",
  keywords: ["contact appnest", "web development consultation", "get quote", "start project", "hire web developers", "free consultation", "custom web development"],
  openGraph: {
    title: "Contact AppNest - Get Free Web Development Consultation",
    description: "Ready to transform your digital presence? Contact AppNest for expert web development services. Get a free consultation and custom quote within 24 hours.",
    url: "https://app-nest.com/contact",
    siteName: "AppNest",
    type: "website",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact AppNest - Web Development Consultation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact AppNest - Get Free Web Development Consultation",
    description: "Ready to transform your digital presence? Contact AppNest for expert web development services. Get a free consultation within 24 hours.",
    images: ["/og-contact.jpg"],
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 