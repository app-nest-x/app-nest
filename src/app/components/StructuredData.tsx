export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "App Nest",
    "alternateName": "AppNest",
    "description": "Leading web development company in India offering affordable website development, e-commerce solutions, React.js, Next.js development starting from ₹15,000.",
    "url": "https://app-nest.com",
    "logo": "https://app-nest.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hi@app-nest.com",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi"],
      "areaServed": "IN"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://linkedin.com/company/appnest",
      "https://twitter.com/appnest"
    ],
    "founder": {
      "@type": "Person",
      "name": "App Nest Team"
    },
    "foundingDate": "2020",
    "slogan": "Best Web Development Company in India",
    "offers": {
      "@type": "Offer",
      "description": "Web Development Services",
      "priceRange": "₹15,000 - ₹3,00,000+",
      "areaServed": "IN"
    },
    "serviceType": [
      "Web Development",
      "Website Design",
      "E-commerce Development",
      "React Development",
      "Next.js Development",
      "Mobile Responsive Design",
      "SEO Services",
      "UI/UX Design"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "App Nest Web Development Services",
    "description": "Best web development company in India offering React, Next.js, e-commerce, and custom website development from ₹15,000",
    "provider": {
      "@type": "Organization",
      "name": "App Nest"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "priceRange": "₹15,000 - ₹3,00,000+",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Website Development",
            "description": "Custom websites and web applications built with React, Next.js, and modern technologies for Indian businesses"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce Development",
            "description": "Complete e-commerce solutions with payment gateway integration for Indian businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "SEO & Performance Optimization",
            "description": "SEO-optimized websites with fast loading times and mobile responsiveness for better search rankings"
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "App Nest",
    "url": "https://app-nest.com",
    "description": "Leading web development company in India offering affordable website development, e-commerce solutions, and digital services starting from ₹15,000.",
    "inLanguage": ["en-US", "hi-IN"],
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization", 
      "name": "App Nest"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://app-nest.com/faq?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
} 