"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Search, Mail, ArrowRight, CheckCircle, Clock, Globe, Code, Palette } from "lucide-react";
import FAQStructuredData from "../components/FAQStructuredData";
import Navigation from "../components/Navigation";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const faqData = [
  {
    category: "Web Development Services",
    questions: [
      {
        question: "What web development services do you offer in India?",
        answer: "We offer comprehensive web development services including custom website development, e-commerce solutions, web applications, React.js development, Next.js applications, mobile-responsive design, SEO optimization, and website maintenance. Our team specializes in modern technologies and serves clients across India with competitive pricing starting from ₹15,000."
      },
      {
        question: "How much does website development cost in India?",
        answer: "Website development costs in India vary based on complexity. Basic static websites start from ₹15,000-₹50,000, business websites range from ₹50,000-₹1,50,000, and e-commerce stores cost ₹1,50,000-₹3,00,000+. We provide custom quotes based on your specific requirements and budget."
      },
      {
        question: "Do you build mobile-responsive websites?",
        answer: "Yes, all our websites are mobile-responsive and optimized for all devices including smartphones, tablets, and desktops. We follow mobile-first design principles and ensure your website looks perfect and functions smoothly across all screen sizes and browsers."
      },
      {
        question: "What technologies do you use for web development?",
        answer: "We use cutting-edge technologies including React.js, Next.js, TypeScript, Tailwind CSS, Node.js, MongoDB, and modern web standards. Our tech stack ensures fast loading times, excellent SEO performance, and scalable solutions that grow with your business."
      }
    ]
  },
  {
    category: "E-commerce & Business Solutions",
    questions: [
      {
        question: "Can you build e-commerce websites with payment integration?",
        answer: "Absolutely! We develop complete e-commerce solutions with payment gateway integration (Razorpay, PayU, Stripe), inventory management, order tracking, product catalogs, shopping carts, and admin dashboards. Our e-commerce sites are secure, fast, and optimized for conversions."
      },
      {
        question: "Do you provide SEO services for websites?",
        answer: "Yes, we include basic SEO optimization with all our websites including on-page SEO, meta tags, schema markup, sitemap generation, and mobile optimization. We also offer advanced SEO services, keyword research, content optimization, and ongoing SEO maintenance to improve your search rankings."
      },
      {
        question: "What is the difference between static and dynamic websites?",
        answer: "Static websites display fixed content and are perfect for small businesses, portfolios, and landing pages. Dynamic websites have interactive features, content management systems, user dashboards, and database integration. We recommend static sites for simple needs and dynamic sites for businesses requiring regular updates."
      }
    ]
  },
  {
    category: "Process & Timeline",
    questions: [
      {
        question: "How long does it take to build a website?",
        answer: "Website development timelines depend on complexity: Simple static websites take 1-2 weeks, business websites with CMS take 2-4 weeks, and complex e-commerce sites take 4-8 weeks. We provide detailed project timelines during our free consultation and keep you updated throughout the development process."
      },
      {
        question: "What is your web development process?",
        answer: "Our process includes: 1) Discovery & Planning (understanding requirements), 2) Design & Wireframing, 3) Development & Testing, 4) Client Review & Revisions, 5) Launch & Deployment, 6) Training & Support. We maintain transparent communication and provide regular updates throughout the project."
      },
      {
        question: "Do you provide website maintenance and support?",
        answer: "Yes, we offer comprehensive website maintenance including security updates, content updates, performance optimization, bug fixes, backup management, and technical support. Our maintenance plans start from ₹15,000/month and ensure your website stays secure and up-to-date."
      },
      {
        question: "Can you redesign my existing website?",
        answer: "Absolutely! We specialize in website redesigns to improve user experience, modernize design, enhance performance, and boost SEO rankings. We can work with your existing content and branding or create a completely new look while preserving your search engine rankings."
      }
    ]
  },
  {
    category: "Design & Branding",
    questions: [
      {
        question: "Do you provide UI/UX design services?",
        answer: "Yes, we offer complete UI/UX design services including user research, wireframing, prototyping, visual design, and user testing. Our designs focus on user experience, conversion optimization, and modern aesthetics that align with your brand identity and business goals."
      },
      {
        question: "Can you help with logo design and branding?",
        answer: "Yes, we provide comprehensive branding services including logo design, brand identity, color schemes, typography, business cards, and brand guidelines. Our branding packages start from ₹50,000 and help establish a strong, professional brand presence."
      },
      {
        question: "Do you create custom website designs or use templates?",
        answer: "We create 100% custom website designs tailored to your brand and requirements. We don't use generic templates. Every design is unique, optimized for your target audience, and built to reflect your brand personality while ensuring excellent user experience and conversion rates."
      }
    ]
  },
  {
    category: "Technical & Support",
    questions: [
      {
        question: "Do you provide website hosting and domain services?",
        answer: "We can help you choose the right hosting provider and set up your domain, though we recommend reliable hosting services based on your needs. We assist with the entire setup process and ensure your website is properly configured for optimal performance and security."
      },
      {
        question: "Will my website be secure and fast loading?",
        answer: "Yes, we implement industry-standard security measures including SSL certificates, secure coding practices, regular security updates, and performance optimization. Our websites typically achieve 90+ performance scores and load in under 3 seconds for excellent user experience and SEO benefits."
      },
      {
        question: "Can you integrate third-party services and APIs?",
        answer: "Yes, we can integrate various third-party services including payment gateways, CRM systems, email marketing tools, social media platforms, analytics tools, booking systems, and custom APIs. We ensure seamless integration and optimal functionality."
      }
    ]
  },
  {
    category: "Business & Consultation",
    questions: [
      {
        question: "Do you work with small businesses and startups?",
        answer: "Absolutely! We work with businesses of all sizes including startups, small businesses, and enterprises. We offer flexible solutions and payment plans to accommodate different budgets and help growing businesses establish a strong online presence."
      },
      {
        question: "Do you provide free consultations?",
        answer: "Yes, we offer free 30-minute consultations to understand your requirements, discuss your project goals, and provide honest advice about the best approach for your needs. There's no obligation, and we'll provide a detailed proposal with transparent pricing."
      },
      {
        question: "What makes App Nest different from other web development companies?",
        answer: "We're a fresh creative studio specializing in modern technologies with personalized attention, transparent pricing, and custom solutions for every budget. We focus on building long-term partnerships, providing excellent support, and delivering projects that drive real business results for our clients."
      }
    ]
  }
];

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const filteredFAQs = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(
      faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  let globalIndex = 0;

  return (
    <>
      <FAQStructuredData />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 subtle-pattern opacity-20"></div>
        
        <div className="container relative">
          <motion.div
            {...fadeInUp}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-semibold text-balance">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground text-balance">
              Everything you need to know about our web development services, pricing, process, and more.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-background border-2 border-border-subtle rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    {categoryIndex === 0 && <Code className="w-4 h-4 text-primary" />}
                    {categoryIndex === 1 && <Globe className="w-4 h-4 text-primary" />}
                    {categoryIndex === 2 && <Clock className="w-4 h-4 text-primary" />}
                    {categoryIndex === 3 && <Palette className="w-4 h-4 text-primary" />}
                    {categoryIndex === 4 && <CheckCircle className="w-4 h-4 text-primary" />}
                    {categoryIndex === 5 && <Mail className="w-4 h-4 text-primary" />}
                  </div>
                  <h2 className="text-2xl font-semibold">{category.category}</h2>
                </div>

                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const currentIndex = globalIndex++;
                    const isOpen = openItems.includes(currentIndex);
                    
                    return (
                      <div
                        key={questionIndex}
                        className="card border border-border-subtle hover:border-muted-foreground transition-all duration-300"
                      >
                        <button
                          onClick={() => toggleItem(currentIndex)}
                          className="w-full text-left p-6 flex items-center justify-between"
                        >
                          <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                          <ChevronDown 
                            className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        
                        <motion.div
                          initial={false}
                          animate={{ 
                            height: isOpen ? 'auto' : 0,
                            opacity: isOpen ? 1 : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-0">
                            <div className="border-t border-border-subtle pt-4">
                              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No FAQs found matching your search. Try different keywords.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h2 className="text-3xl font-semibold">Still have questions?</h2>
            <p className="text-muted-foreground">
              Can't find the answer you're looking for? Our team is here to help with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn btn-primary group">
                Get Free Consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a href="mailto:hi@app-nest.com" className="btn btn-ghost group">
                <Mail className="w-4 h-4 mr-2" />
                Email Us Directly
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section border-t border-border-subtle">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="text-lg font-semibold">App Nest</div>
                <p className="text-sm text-muted-foreground">
                  Professional web development services for modern businesses in India.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="text-sm font-medium">Services</div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <a href="/services" className="block hover:text-foreground transition-colors">Web Development</a>
                  <a href="/services" className="block hover:text-foreground transition-colors">E-commerce</a>
                  <a href="/services" className="block hover:text-foreground transition-colors">SEO Services</a>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="text-sm font-medium">Company</div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <a href="/about" className="block hover:text-foreground transition-colors">About</a>
                  <a href="/faq" className="block hover:text-foreground transition-colors">FAQ</a>
                  <a href="/contact" className="block hover:text-foreground transition-colors">Contact</a>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="text-sm font-medium">Connect</div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <a href="mailto:hi@app-nest.com" className="block hover:text-foreground transition-colors">hi@app-nest.com</a>
                  <div className="text-muted-foreground">Professional support</div>
                </div>
              </div>
            </div>
            
            <div className="pt-8 mt-8 border-t border-border-subtle text-center text-sm text-muted-foreground">
              © 2025 App Nest. Professional web development services in India.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
} 