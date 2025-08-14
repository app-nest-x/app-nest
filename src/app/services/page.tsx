import { Metadata } from "next";
import Navigation from "../components/Navigation";
import JsonLd from "../components/JsonLd";
import {
  Code, Globe, Smartphone, ShoppingCart, Palette, Search,
  Zap, Shield, Users, CheckCircle, ArrowRight, Star,
  TrendingUp, BarChart3, Settings, Headphones
} from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development Services India | React Next.js E-commerce | App Nest",
  description: "Professional web development services in India. Custom websites, React.js, Next.js, e-commerce development from ₹15,000. Expert developers, 500+ projects, 24/7 support.",
  keywords: [
    "web development services India", "React development services", "Next.js development company",
    "e-commerce development India", "custom website development", "professional web developers India",
    "responsive web design services", "SEO web development", "UI UX design services",
    "website maintenance services", "web application development", "full stack development India"
  ],
  openGraph: {
    title: "Professional Web Development Services India | App Nest",
    description: "Expert web development services including React.js, Next.js, e-commerce solutions from India's leading development company. 500+ projects delivered.",
    type: "website",
    url: "https://app-nest.com/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Web Development Services India | App Nest",
    description: "Expert web development services including React.js, Next.js, e-commerce solutions from India's leading development company.",
  },
  alternates: {
    canonical: "https://app-nest.com/services",
  },
};

const services = [
  {
    icon: Code,
    title: "Custom Web Development",
    description: "Bespoke websites and web applications built with modern technologies like React, Next.js, and TypeScript for superior performance and user experience.",
    features: ["React.js & Next.js", "TypeScript Development", "Responsive Design", "SEO Optimized", "Fast Loading"],
    pricing: "From ₹15,000",
    popular: false
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    description: "Complete e-commerce solutions with payment gateway integration, inventory management, and conversion optimization for maximum sales.",
    features: ["Payment Integration", "Inventory Management", "Admin Dashboard", "Mobile Optimized", "Security Features"],
    pricing: "From ₹1,50,000",
    popular: true
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Mobile-responsive websites that look perfect on all devices. We follow mobile-first design principles for optimal user experience.",
    features: ["Mobile Responsive", "Touch Optimized", "Fast Loading", "Cross-Browser", "PWA Ready"],
    pricing: "Included",
    popular: false
  },
  {
    icon: Palette,
    title: "UI/UX Design Services",
    description: "User-centered design services including wireframing, prototyping, and visual design for optimal conversion rates and user satisfaction.",
    features: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Usability Testing"],
    pricing: "From ₹25,000",
    popular: false
  },
  {
    icon: Search,
    title: "SEO & Performance",
    description: "Technical SEO optimization and performance enhancement to improve search rankings and provide lightning-fast user experience.",
    features: ["Technical SEO", "Performance Optimization", "Core Web Vitals", "Schema Markup", "Analytics Setup"],
    pricing: "From ₹20,000",
    popular: false
  },
  {
    icon: Settings,
    title: "Website Maintenance",
    description: "Ongoing website maintenance, security updates, performance monitoring, and technical support to keep your site running smoothly.",
    features: ["Security Updates", "Performance Monitoring", "Content Updates", "Backup Management", "24/7 Support"],
    pricing: "From ₹15,000/month",
    popular: false
  }
];

const technologies = [
  { name: "React.js", description: "Modern JavaScript library for building user interfaces" },
  { name: "Next.js", description: "Full-stack React framework for production-ready applications" },
  { name: "TypeScript", description: "Typed JavaScript for better code quality and maintainability" },
  { name: "Node.js", description: "JavaScript runtime for server-side development" },
  { name: "MongoDB", description: "NoSQL database for scalable data storage" },
  { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development" }
];

export default function ServicesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Web Development Services India",
    "description": "Comprehensive web development services including React.js, Next.js, e-commerce development, and custom web applications from India's leading development company.",
    "provider": {
      "@type": "Organization",
      "name": "App Nest",
      "url": "https://app-nest.com"
    },
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        },
        "price": service.pricing,
        "priceCurrency": "INR"
      }))
    }
  };

  return (
    <>
      <JsonLd data={structuredData} />
      <Navigation />

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="section bg-gradient-to-br from-background to-muted/20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-semibold text-balance">
                Professional Web Development Services in India
              </h1>
              <p className="text-lg text-muted-foreground text-balance">
                Expert React.js, Next.js, and e-commerce development services from India's top-rated web development company. 500+ projects delivered with 24/7 support.
              </p>
              <div className="flex items-center justify-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium">500+ Projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Headphones className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold mb-4">Our Web Development Services</h2>
                <p className="text-muted-foreground">
                  Comprehensive web development solutions tailored for Indian businesses and global clients
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`card relative ${service.popular ? 'border-primary shadow-lg' : ''}`}
                  >
                    {service.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{service.title}</h3>
                          <p className="text-primary font-semibold">{service.pricing}</p>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="font-medium">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a href="/contact" className="btn btn-primary w-full group">
                        Get Quote
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="section bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-4">Technologies We Use</h2>
              <p className="text-muted-foreground mb-12">
                We use cutting-edge technologies to build modern, scalable, and high-performance web applications
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologies.map((tech, index) => (
                  <div key={index} className="card text-center space-y-3">
                    <h3 className="text-lg font-semibold">{tech.name}</h3>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-semibold">Ready to Start Your Project?</h2>
              <p className="text-muted-foreground">
                Get a free consultation and custom quote for your web development project. No obligation, just honest advice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="btn btn-primary group">
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
                <a href="/portfolio" className="btn btn-ghost">
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}