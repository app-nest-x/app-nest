export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    "name": "App Nest",
    "alternateName": ["AppNest", "App Nest Web Development", "App Nest India"],
    "legalName": "App Nest Web Solutions Private Limited",
    "description": "Top-rated web development company in India offering custom websites, React.js, Next.js, e-commerce solutions from ₹15,000. 500+ projects delivered with 24/7 support and free consultation.",
    "url": "https://app-nest.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://app-nest.com/logo.png",
      "width": 300,
      "height": 100,
      "caption": "App Nest - Best Web Development Company India"
    },
    "image": [
      "https://app-nest.com/images/app-nest-office.jpg",
      "https://app-nest.com/images/web-development-team.jpg",
      "https://app-nest.com/images/react-nextjs-experts.jpg"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-9059166132",
        "email": "hi@app-nest.com",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"],
        "areaServed": ["IN", "US", "UK", "CA", "AU"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      },
      {
        "@type": "ContactPoint",
        "email": "support@app-nest.com",
        "contactType": "technical support",
        "availableLanguage": ["English", "Hindi"],
        "areaServed": "IN"
      },
      {
        "@type": "ContactPoint",
        "email": "sales@app-nest.com",
        "contactType": "sales",
        "availableLanguage": ["English", "Hindi"],
        "areaServed": "Worldwide"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India",
      "addressLocality": "Multiple Cities",
      "postalCode": "000000"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "20.5937",
      "longitude": "78.9629"
    },
    "sameAs": [
      "https://linkedin.com/company/appnest-web-development",
      "https://twitter.com/appnest_dev",
      "https://facebook.com/appnest.webdev",
      "https://instagram.com/appnest_official",
      "https://github.com/appnest-dev",
      "https://dribbble.com/appnest",
      "https://behance.net/appnest"
    ],
    "founder": [
      {
        "@type": "Person",
        "name": "App Nest Founding Team",
        "jobTitle": "Co-Founders & Lead Developers"
      }
    ],
    "foundingDate": "2020-01-15",
    "slogan": "Best Web Development Company in India - React & Next.js Experts",
    "brand": {
      "@type": "Brand",
      "name": "App Nest",
      "logo": "https://app-nest.com/logo.png"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Rajesh Kumar"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Excellent web development company! They built our e-commerce website with React and it's performing amazingly. Highly recommend App Nest for professional web development services."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Priya Sharma"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Best web development company in India! They delivered our Next.js website on time and within budget. Great communication and technical expertise."
      }
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "Custom Website Development",
        "description": "Professional custom website development with React, Next.js, and modern technologies",
        "priceRange": "₹15,000 - ₹1,50,000",
        "priceCurrency": "INR",
        "areaServed": "IN",
        "availability": "InStock",
        "validFrom": "2025-01-01",
        "category": "Web Development Services"
      },
      {
        "@type": "Offer",
        "name": "E-commerce Development",
        "description": "Complete e-commerce solutions with payment gateway integration and admin dashboard",
        "priceRange": "₹1,50,000 - ₹5,00,000",
        "priceCurrency": "INR",
        "areaServed": "IN",
        "availability": "InStock",
        "validFrom": "2025-01-01",
        "category": "E-commerce Development"
      },
      {
        "@type": "Offer",
        "name": "React Development Services",
        "description": "Expert React.js development for modern, interactive web applications",
        "priceRange": "₹25,000 - ₹3,00,000",
        "priceCurrency": "INR",
        "areaServed": "Worldwide",
        "availability": "InStock",
        "validFrom": "2025-01-01",
        "category": "React Development"
      }
    ],
    "serviceType": [
      "Custom Web Development",
      "React.js Development",
      "Next.js Development",
      "E-commerce Development",
      "Website Design & UI/UX",
      "Mobile Responsive Design",
      "SEO Web Development",
      "Website Maintenance",
      "Web Application Development",
      "API Development & Integration",
      "Database Design & Development",
      "Performance Optimization",
      "Security Implementation",
      "Digital Transformation Consulting"
    ],
    "knowsAbout": [
      "React.js", "Next.js", "TypeScript", "JavaScript", "Node.js", "MongoDB",
      "Tailwind CSS", "HTML5", "CSS3", "Web Performance", "SEO", "UI/UX Design",
      "E-commerce", "Payment Gateways", "API Integration", "Database Design",
      "Cloud Deployment", "Web Security", "Mobile Responsive Design"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Google Certified Web Developer",
        "credentialCategory": "Professional Certification"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "React Certified Developer",
        "credentialCategory": "Technical Certification"
      }
    ],
    "award": [
      "Best Web Development Company India 2024",
      "Top React Development Agency 2024",
      "Excellence in Web Design 2024"
    ],
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "15-25"
    },
    "yearlyRevenue": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": "50000000"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Web Development Services India",
    "description": "Top-rated web development company in India offering custom websites, React.js, Next.js, e-commerce solutions from ₹15,000. Expert developers, 500+ projects delivered, 24/7 support.",
    "provider": {
      "@type": "Organization",
      "name": "App Nest",
      "url": "https://app-nest.com"
    },
    "serviceType": "Web Development",
    "category": "Information Technology Services",
    "areaServed": [
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
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://app-nest.com/contact",
      "serviceSmsNumber": "+91-9876543210",
      "servicePhone": "+91-9876543210"
    },
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Complete Web Development Services Catalog",
      "description": "Comprehensive web development services from India's leading development company",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Website Development",
            "description": "Bespoke websites and web applications built with React, Next.js, and cutting-edge technologies for businesses across India and globally",
            "serviceType": "Web Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce Development",
            "description": "Full-featured e-commerce solutions with payment gateway integration, inventory management, and conversion optimization for Indian businesses",
            "serviceType": "E-commerce Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "React.js Development",
            "description": "Expert React.js development services for building modern, scalable, and high-performance web applications",
            "serviceType": "React Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Next.js Development",
            "description": "Professional Next.js development for server-side rendered applications with superior SEO performance and user experience",
            "serviceType": "Next.js Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UI/UX Design Services",
            "description": "User-centered design services including wireframing, prototyping, and visual design for optimal user experience and conversion rates",
            "serviceType": "Design Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO & Performance Optimization",
            "description": "Technical SEO, performance optimization, and Core Web Vitals improvement for better search rankings and user experience",
            "serviceType": "SEO Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Maintenance & Support",
            "description": "Ongoing website maintenance, security updates, performance monitoring, and technical support services",
            "serviceType": "Maintenance Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Strategy Consulting",
            "description": "Strategic planning and digital transformation consulting to maximize online presence and business growth",
            "serviceType": "Consulting Services"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "App Nest - Best Web Development Company India",
    "alternateName": "App Nest Web Development Services",
    "url": "https://app-nest.com",
    "description": "Top-rated web development company in India offering custom websites, React.js, Next.js, e-commerce solutions from ₹15,000. 500+ projects delivered with expert developers and 24/7 support.",
    "inLanguage": ["en-IN", "en-US", "hi-IN"],
    "isAccessibleForFree": true,
    "isFamilyFriendly": true,
    "publisher": {
      "@type": "Organization",
      "name": "App Nest",
      "url": "https://app-nest.com",
      "logo": "https://app-nest.com/logo.png"
    },
    "creator": {
      "@type": "Organization",
      "name": "App Nest Development Team"
    },
    "copyrightHolder": {
      "@type": "Organization",
      "name": "App Nest"
    },
    "copyrightYear": "2025",
    "dateCreated": "2020-01-15",
    "dateModified": "2025-01-14",
    "datePublished": "2020-01-15",
    "mainEntity": {
      "@type": "Organization",
      "name": "App Nest"
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Web Development",
        "description": "Professional web development services"
      },
      {
        "@type": "Thing",
        "name": "React Development",
        "description": "Expert React.js development services"
      },
      {
        "@type": "Thing",
        "name": "Next.js Development",
        "description": "Professional Next.js development services"
      },
      {
        "@type": "Thing",
        "name": "E-commerce Development",
        "description": "Complete e-commerce solutions"
      }
    ],
    "keywords": [
      "web development company India",
      "React development services",
      "Next.js development",
      "e-commerce development",
      "custom website development",
      "professional web developers",
      "affordable web development",
      "responsive web design"
    ],
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": "https://app-nest.com/faq?search={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      {
        "@type": "ReadAction",
        "target": "https://app-nest.com/blog"
      },
      {
        "@type": "InteractAction",
        "target": "https://app-nest.com/contact"
      }
    ],
    "hasPart": [
      {
        "@type": "WebPage",
        "name": "Web Development Services",
        "url": "https://app-nest.com/services",
        "description": "Comprehensive web development services including React, Next.js, and e-commerce solutions"
      },
      {
        "@type": "WebPage",
        "name": "Portfolio",
        "url": "https://app-nest.com/portfolio",
        "description": "Showcase of our web development projects and client success stories"
      },
      {
        "@type": "WebPage",
        "name": "Blog",
        "url": "https://app-nest.com/blog",
        "description": "Latest insights and tips on web development, React, Next.js, and modern web technologies"
      },
      {
        "@type": "WebPage",
        "name": "Contact",
        "url": "https://app-nest.com/contact",
        "description": "Get in touch for web development consultation and project quotes"
      }
    ]
  };

  // Additional schemas for enhanced SEO
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://app-nest.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://app-nest.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Portfolio",
        "item": "https://app-nest.com/portfolio"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Blog",
        "item": "https://app-nest.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Contact",
        "item": "https://app-nest.com/contact"
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "App Nest Web Development Company",
    "description": "Leading web development company in India specializing in React, Next.js, and modern web technologies",
    "url": "https://app-nest.com",
    "telephone": "+91-9876543210",
    "email": "hi@app-nest.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "20.5937",
      "longitude": "78.9629"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "₹15,000 - ₹5,00,000",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "UPI", "Digital Wallet"],
    "currenciesAccepted": ["INR", "USD"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "App Nest Professional Web Development Services",
    "description": "Expert web development services including React.js, Next.js, e-commerce, and custom web applications for businesses in India and worldwide",
    "provider": {
      "@type": "Organization",
      "name": "App Nest"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "20.5937",
        "longitude": "78.9629"
      },
      "geoRadius": "10000000"
    },
    "areaServed": ["IN", "US", "UK", "CA", "AU", "SG", "AE"],
    "serviceType": "Web Development",
    "category": "Computer Services",
    "priceRange": "₹15,000 - ₹5,00,000+",
    "availableLanguage": ["English", "Hindi"],
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
    </>
  );
} 