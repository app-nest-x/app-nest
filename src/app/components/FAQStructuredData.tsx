export default function FAQStructuredData() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What web development services do you offer in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer comprehensive web development services including custom website development, e-commerce solutions, web applications, React.js development, Next.js applications, mobile-responsive design, SEO optimization, and website maintenance. Our team specializes in modern technologies and serves clients across India with competitive pricing starting from ₹15,000."
        }
      },
      {
        "@type": "Question",
        "name": "How much does website development cost in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Website development costs in India vary based on complexity. Basic static websites start from ₹15,000-₹50,000, business websites range from ₹50,000-₹1,50,000, and e-commerce stores cost ₹1,50,000-₹3,00,000+. We provide custom quotes based on your specific requirements and budget."
        }
      },
      {
        "@type": "Question",
        "name": "Do you build mobile-responsive websites?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our websites are mobile-responsive and optimized for all devices including smartphones, tablets, and desktops. We follow mobile-first design principles and ensure your website looks perfect and functions smoothly across all screen sizes and browsers."
        }
      },
      {
        "@type": "Question",
        "name": "Can you build e-commerce websites with payment integration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We develop complete e-commerce solutions with payment gateway integration (Razorpay, PayU, Stripe), inventory management, order tracking, product catalogs, shopping carts, and admin dashboards. Our e-commerce sites are secure, fast, and optimized for conversions."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Website development timelines depend on complexity: Simple static websites take 1-2 weeks, business websites with CMS take 2-4 weeks, and complex e-commerce sites take 4-8 weeks. We provide detailed project timelines during our free consultation and keep you updated throughout the development process."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide SEO services for websites?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we include basic SEO optimization with all our websites including on-page SEO, meta tags, schema markup, sitemap generation, and mobile optimization. We also offer advanced SEO services, keyword research, content optimization, and ongoing SEO maintenance to improve your search rankings."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies do you use for web development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use cutting-edge technologies including React.js, Next.js, TypeScript, Tailwind CSS, Node.js, MongoDB, and modern web standards. Our tech stack ensures fast loading times, excellent SEO performance, and scalable solutions that grow with your business."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with small businesses and startups?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We work with businesses of all sizes including startups, small businesses, and enterprises. We offer flexible solutions and payment plans to accommodate different budgets and help growing businesses establish a strong online presence."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide free consultations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer free 30-minute consultations to understand your requirements, discuss your project goals, and provide honest advice about the best approach for your needs. There's no obligation, and we'll provide a detailed proposal with transparent pricing."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide website maintenance and support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer comprehensive website maintenance including security updates, content updates, performance optimization, bug fixes, backup management, and technical support. Our maintenance plans start from ₹15,000/month and ensure your website stays secure and up-to-date."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
} 