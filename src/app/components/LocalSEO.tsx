export default function LocalSEO() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "App Nest",
    "description": "Leading web development company in India specializing in React, Next.js, and modern web technologies",
    "url": "https://app-nest.com",
    "telephone": "+91-XXXXXXXXXX",
    "email": "hi@app-nest.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressLocality": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "20.5937",
      "longitude": "78.9629"
    },
    "openingHours": [
      "Mo-Sa 09:00-18:00"
    ],
    "priceRange": "₹15,000 - ₹3,00,000+",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "UPI"],
    "currenciesAccepted": ["INR", "USD"],
    "areaServed": [
      {
        "@type": "City",
        "name": "Mumbai"
      },
      {
        "@type": "City", 
        "name": "Delhi"
      },
      {
        "@type": "City",
        "name": "Bangalore"
      },
      {
        "@type": "City",
        "name": "Chennai"
      },
      {
        "@type": "City",
        "name": "Hyderabad"
      },
      {
        "@type": "City",
        "name": "Pune"
      },
      {
        "@type": "City",
        "name": "Kolkata"
      },
      {
        "@type": "City",
        "name": "Ahmedabad"
      },
      {
        "@type": "Country",
        "name": "India"
      },
      {
        "@type": "Country",
        "name": "United States"
      },
      {
        "@type": "Country",
        "name": "United Kingdom"
      },
      {
        "@type": "Country",
        "name": "Canada"
      },
      {
        "@type": "Country",
        "name": "Australia"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "20.5937",
        "longitude": "78.9629"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Static Website Development",
            "description": "Professional static website development for small businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Website Development",
            "description": "Dynamic business websites with CMS and advanced features"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce Development",
            "description": "Complete e-commerce solutions with payment integration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "React Development",
            "description": "Modern React.js web application development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Next.js Development",
            "description": "High-performance Next.js applications"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Satisfied Client"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Excellent web development services. App Nest delivered a professional website that exceeded our expectations."
      }
    ]
  };

  const serviceAreaSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Development Services",
    "provider": {
      "@type": "Organization",
      "name": "App Nest",
      "url": "https://app-nest.com"
    },
    "areaServed": [
      "Mumbai, India",
      "Delhi, India", 
      "Bangalore, India",
      "Chennai, India",
      "Hyderabad, India",
      "Pune, India",
      "Kolkata, India",
      "Ahmedabad, India",
      "India",
      "United States",
      "United Kingdom",
      "Canada",
      "Australia"
    ],
    "serviceType": "Web Development",
    "description": "Professional web development services including React, Next.js, and modern web technologies"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceAreaSchema),
        }}
      />
    </>
  );
} 