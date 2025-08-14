export default function SEOOptimization() {
  return (
    <>
      {/* DNS Prefetch for better performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
      <link rel="dns-prefetch" href="//unpkg.com" />

      {/* Preconnect for critical third-party origins */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />

      {/* Critical resource hints for better performance */}
      <link rel="prefetch" href="/services" />
      <link rel="prefetch" href="/contact" />
      <link rel="prefetch" href="/about" />
      <link rel="prefetch" href="/portfolio" />
      <link rel="prefetch" href="/blog" />
      <link rel="prefetch" href="/faq" />

      {/* Preload critical assets - Google Fonts are handled by Next.js */}

      {/* Mobile optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="App Nest" />
      <meta name="application-name" content="App Nest" />
      <meta name="msapplication-TileColor" content="#1e293b" />
      <meta name="theme-color" content="#1e293b" />

      {/* Enhanced Search Engine Optimization */}
      <meta name="revisit-after" content="1 day" />
      <meta name="rating" content="General" />
      <meta name="distribution" content="Global" />
      <meta name="language" content="English, Hindi" />
      <meta name="author" content="App Nest Development Team" />
      <meta name="publisher" content="App Nest Web Solutions" />
      <meta name="copyright" content="© 2025 App Nest. All rights reserved." />
      <meta name="abstract" content="Top-rated web development company in India specializing in React, Next.js, e-commerce, and modern web technologies. 500+ projects delivered with expert developers." />
      <meta name="topic" content="Web Development Services, React Development, Next.js Development, E-commerce Solutions" />
      <meta name="summary" content="App Nest is India's leading web development company offering custom websites, React development, Next.js applications, and e-commerce solutions from ₹15,000" />
      <meta name="subject" content="Professional Web Development, React.js Development, Next.js Development, Custom Websites, E-commerce Development, UI/UX Design, SEO Services" />
      <meta name="url" content="https://app-nest.com" />
      <meta name="identifier-URL" content="https://app-nest.com" />
      <meta name="directory" content="submission" />
      <meta name="category" content="Web Development, Information Technology, Digital Services" />
      <meta name="coverage" content="India, United States, United Kingdom, Canada, Australia, Worldwide" />
      <meta name="target" content="Business Owners, Startups, Enterprises, Developers" />
      <meta name="audience" content="Business Owners, Entrepreneurs, Startups, Small Businesses, Enterprises" />
      <meta name="pagename" content="App Nest - Best Web Development Company India" />
      <meta name="page-topic" content="Professional Web Development Services India" />
      <meta name="page-type" content="Business Service Website" />

      {/* Enhanced Geo-location and Local SEO */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.country" content="India" />
      <meta name="geo.placename" content="India" />
      <meta name="ICBM" content="20.5937, 78.9629" />
      <meta name="geo.position" content="20.5937;78.9629" />

      {/* Business and Contact Information */}
      <meta name="classification" content="Business, Technology, Web Development" />
      <meta name="owner" content="App Nest Web Solutions" />
      <meta name="designer" content="App Nest Design Team" />
      <meta name="developer" content="App Nest Development Team" />
      <meta name="reply-to" content="hi@app-nest.com" />
      <meta name="contact" content="hi@app-nest.com" />
      <meta name="email" content="hi@app-nest.com" />

      {/* Enhanced Performance and Caching */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000, stale-while-revalidate=86400" />
      <meta httpEquiv="Expires" content="31536000" />
      <meta httpEquiv="Pragma" content="public" />

      {/* Enhanced Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />

      {/* Content and Language */}
      <meta httpEquiv="Content-Language" content="en-IN, en-US, hi-IN" />
      <meta name="content-language" content="en-IN" />

      {/* Additional Business Meta Tags */}
      <meta name="business.name" content="App Nest" />
      <meta name="business.type" content="Web Development Company" />
      <meta name="business.industry" content="Information Technology" />
      <meta name="business.founded" content="2020" />
      <meta name="business.employees" content="15-25" />
      <meta name="business.revenue" content="₹5 Crores+" />
      <meta name="business.location" content="India" />
      <meta name="business.services" content="Web Development, React Development, Next.js Development, E-commerce Development" />

      {/* Social Media and Sharing */}
      <meta name="twitter:dnt" content="on" />
      <meta name="pinterest" content="nopin" />

      {/* Additional Competitive Keywords Meta Tags */}
      <meta name="web-development-company" content="App Nest - Best Web Development Company India" />
      <meta name="react-development-services" content="Expert React.js Development Services India" />
      <meta name="nextjs-development-company" content="Professional Next.js Development Company" />
      <meta name="ecommerce-development-india" content="E-commerce Development Services India" />
      <meta name="custom-website-development" content="Custom Website Development India" />
      <meta name="affordable-web-development" content="Affordable Web Development Services from ₹15,000" />
      <meta name="professional-web-developers" content="Professional Web Developers India" />
      <meta name="responsive-web-design" content="Mobile Responsive Web Design Services" />
      <meta name="seo-web-development" content="SEO Optimized Web Development" />
      <meta name="fast-website-development" content="Fast Loading Website Development" />

      {/* Enhanced Structured Data for Technical SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "Best Web Development Company India - React & Next.js Experts",
            "description": "Comprehensive guide to choosing the best web development company in India. Learn about React, Next.js, and modern web development services.",
            "author": {
              "@type": "Organization",
              "name": "App Nest",
              "url": "https://app-nest.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "App Nest",
              "logo": {
                "@type": "ImageObject",
                "url": "https://app-nest.com/logo.png"
              }
            },
            "datePublished": "2025-01-14",
            "dateModified": "2025-01-14",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://app-nest.com"
            },
            "image": {
              "@type": "ImageObject",
              "url": "https://app-nest.com/images/web-development-services.jpg",
              "width": 1200,
              "height": 630
            }
          })
        }}
      />

      {/* Additional Performance Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "App Nest Web Development Platform",
            "description": "Professional web development platform offering React, Next.js, and modern web solutions",
            "url": "https://app-nest.com",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web Browser",
            "browserRequirements": "Modern web browser with JavaScript enabled",
            "softwareVersion": "2025.1",
            "datePublished": "2020-01-15",
            "dateModified": "2025-01-14",
            "author": {
              "@type": "Organization",
              "name": "App Nest"
            },
            "offers": {
              "@type": "Offer",
              "price": "15000",
              "priceCurrency": "INR",
              "description": "Professional web development services starting from ₹15,000"
            }
          })
        }}
      />
    </>
  );
} 