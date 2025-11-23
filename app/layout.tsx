import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "App Nest - Enterprise App Development Studio",
  description: "Hyderabad-based development studio engineering the future of software. Expert in iOS, Android, Web, and AI development with 100% success rate.",
  keywords: ["app development", "iOS development", "Android development", "web development", "AI integration", "Hyderabad", "enterprise software"],
  authors: [{ name: "App Nest" }],
  openGraph: {
    title: "App Nest - Enterprise App Development Studio",
    description: "Building enterprise-grade applications that operate in the silence of perfection.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
