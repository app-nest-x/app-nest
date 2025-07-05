import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development FAQ - Common Questions & Answers | App Nest India",
  description: "Find answers to frequently asked questions about web development services, pricing, process, and technology in India. Expert guidance on website development, e-commerce, SEO, and more.",
  keywords: [
    "web development FAQ India",
    "website development questions",
    "web development cost India",
    "how much website development cost",
    "website development process",
    "e-commerce development FAQ",
    "SEO services questions",
    "React development questions",
    "Next.js development FAQ",
    "website maintenance cost",
    "custom website development",
    "mobile responsive website FAQ",
    "payment gateway integration",
    "website security questions",
    "web development timeline",
    "startup website development",
    "small business website cost",
    "UI UX design questions",
    "website redesign FAQ",
    "web development company India"
  ],
  openGraph: {
    title: "Web Development FAQ - Common Questions & Answers | App Nest",
    description: "Find answers to frequently asked questions about web development services, pricing, process, and technology in India.",
    url: "https://app-nest.com/faq",
    siteName: "App Nest",
    type: "website",
    images: [
      {
        url: "/og-faq.jpg",
        width: 1200,
        height: 630,
        alt: "App Nest FAQ - Web Development Questions & Answers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development FAQ - Common Questions & Answers | App Nest",
    description: "Find answers to frequently asked questions about web development services, pricing, process, and technology in India.",
    images: ["/og-faq.jpg"],
  },
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 