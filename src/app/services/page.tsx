"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Code, Palette, Zap, Users, Globe, Headphones, ArrowLeft, Shield, Server, HeadphonesIcon, Clock, AlertCircle } from "lucide-react";
import Navigation from "../components/Navigation";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
};

export default function Services() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="section pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 subtle-pattern opacity-20"></div>
        
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-6xl font-semibold text-center">
                Services that drive{" "}
                <span className="gradient-text">results</span>
              </h1>
              <div className="max-w-2xl mx-auto">
                <p className="text-xl text-muted-foreground text-center leading-relaxed">
                  From concept to launch, we provide comprehensive digital solutions that help your business thrive in the modern landscape.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a href="/contact" className="btn btn-primary group">
                Start your project
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a href="#consultation" className="btn btn-ghost">
                Get custom quote
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {[
              {
                icon: Globe,
                title: "Static Website",
                description: "Perfect for small businesses and startups. Fast, secure, and SEO-friendly static websites with everything you need to get online and make a strong first impression.",
                features: ["5-10 Pages", "Mobile Responsive", "Domain Included (1 year)", "SSL Certificate", "Google Analytics Setup"],
                cta: "Get Custom Quote"
              },
              {
                icon: Code,
                title: "Business Website",
                description: "Dynamic websites with content management systems, ideal for growing businesses that need regular updates and advanced functionality.",
                features: ["Custom Development", "Content Management", "Free Hosting Setup", "30-Day Free Support", "SEO Foundation"],
                cta: "Get Custom Quote"
              },
              {
                icon: Zap,
                title: "E-commerce Store",
                description: "Complete online stores with payment integration, inventory management, and everything needed to sell products online successfully.",
                features: ["Payment Gateway Setup", "Product Catalog", "Free SSL Certificate", "Mobile Optimized", "Analytics Dashboard"],
                cta: "Get Custom Quote"
              },
              {
                icon: Palette,
                title: "Brand Design",
                description: "Complete visual identity systems that resonate with your audience and elevate your brand presence across all digital touchpoints.",
                features: ["Logo Design", "Brand Guidelines", "Social Media Kit", "Business Cards Design", "Free Revisions (3x)"],
                cta: "Get Custom Quote"
              },
              {
                icon: Users,
                title: "Digital Strategy",
                description: "Comprehensive approach to your digital presence with data-driven insights and growth strategies for long-term success.",
                features: ["Free SEO Audit", "Performance Report", "Growth Strategy", "Competitor Analysis", "Monthly Check-ins"],
                cta: "Get Custom Quote"
              },
              {
                icon: Headphones,
                title: "Support & Maintenance",
                description: "Ongoing maintenance, optimization, and strategic guidance to ensure your website continues to perform at its best.",
                features: ["24/7 Monitoring", "Free Security Updates", "Performance Optimization", "Priority Support", "Monthly Reports"],
                cta: "Get Custom Quote"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="card group hover:shadow-lg transition-all duration-300 h-full flex flex-col"
              >
                <div className="flex-1 flex flex-col space-y-6">
                  <div className="flex items-center justify-between">
                    <service.icon className="w-8 h-8 text-foreground group-hover:scale-105 transition-transform duration-300" />
                    <div className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">Custom</div>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="text-sm font-medium text-foreground">What's included:</div>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border-subtle mt-auto">
                    <a href="/contact" className="btn btn-primary w-full group">
                      {service.cta}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="section bg-muted/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-12"
          >
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold">
                What others charge extra for
              </h2>
              <p className="text-muted-foreground">
                We include these essentials at no additional cost
              </p>
            </div>

            {/* Minimal Feature List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Domain & SSL", 
                  icon: Shield, 
                  subtitle: "Usually ₹3,500/year",
                  color: "text-green-500"
                },
                { 
                  title: "Hosting Setup", 
                  icon: Server, 
                  subtitle: "Usually ₹4,000 setup",
                  color: "text-blue-500"
                },
                { 
                  title: "30-Day Support", 
                  icon: HeadphonesIcon, 
                  subtitle: "Usually ₹5,000/month",
                  color: "text-purple-500"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-4 group"
                >
                  <div className="mx-auto w-16 h-16 bg-muted/50 rounded-2xl flex items-center justify-center group-hover:bg-muted transition-colors duration-300">
                    <item.icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-foreground">{item.title}</div>
                    <div className="text-xs text-muted-foreground">{item.subtitle}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Psychological Hook */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center space-y-2"
            >
              <div className="text-sm text-muted-foreground">
                Most agencies bill these separately
              </div>
              <div className="text-sm font-medium text-red-600">
                Save ₹12,500+ in hidden costs
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16 space-y-4"
          >
            <h2 className="text-4xl font-semibold text-center">
              Our proven process
            </h2>
            <p className="text-lg text-muted-foreground text-center">
              We follow a structured approach to ensure your project is delivered on time, within budget, and exceeds expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We start by understanding your business, goals, and target audience to create a solid foundation."
              },
              {
                step: "02",
                title: "Strategy",
                description: "We develop a comprehensive strategy and roadmap tailored to your specific needs and objectives."
              },
              {
                step: "03",
                title: "Design & Development",
                description: "Our team brings your vision to life with beautiful designs and robust, scalable code."
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "We handle the launch process and provide ongoing support to ensure continued success."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full font-semibold">
                  {step.step}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section id="consultation" className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16 space-y-6"
          >
            <h2 className="text-4xl font-semibold text-center">
              Custom solutions for every business
            </h2>
            <p className="text-lg text-muted-foreground text-center">
              We believe every business is unique. That's why we create custom solutions tailored to your specific needs, goals, and budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Why custom solutions?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Tailored to your needs</div>
                      <div className="text-sm text-muted-foreground">Every feature is designed specifically for your business goals</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Flexible budget options</div>
                      <div className="text-sm text-muted-foreground">We work within your budget to deliver maximum value</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Scalable solutions</div>
                      <div className="text-sm text-muted-foreground">Built to grow with your business over time</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Ongoing partnership</div>
                      <div className="text-sm text-muted-foreground">We're here to support your success long-term</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20"
            >
              <div className="space-y-6">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-semibold">Ready to get started?</h3>
                  <p className="text-muted-foreground">
                    Let's discuss your project and create a custom solution that perfectly fits your needs and budget.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                    <span className="font-medium">Free consultation</span>
                    <span className="text-sm text-muted-foreground">30 minutes</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                    <span className="font-medium">Custom proposal</span>
                    <span className="text-sm text-muted-foreground">Within 24h</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                    <span className="font-medium">No commitment</span>
                    <span className="text-sm text-muted-foreground">Just honest advice</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <a href="/contact" className="btn btn-primary w-full group">
                    Schedule free consultation
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                  <a href="mailto:hi@app-nest.com" className="btn btn-ghost w-full">
                    Send us an email
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-muted/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-semibold text-center">
                Ready to get started?
              </h2>
              <p className="text-lg text-muted-foreground text-center">
                Let's discuss your project and create a custom solution that perfectly fits your needs, goals, and budget.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn btn-primary group">
                Schedule free consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a href="/" className="btn btn-ghost group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
                Back to home
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
                  Crafting exceptional digital experiences for forward-thinking companies.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="text-sm font-medium">Services</div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <a href="/services" className="block hover:text-foreground transition-colors">Web Development</a>
                  <a href="/services" className="block hover:text-foreground transition-colors">Brand Design</a>
                  <a href="/services" className="block hover:text-foreground transition-colors">Performance</a>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="text-sm font-medium">Company</div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <a href="/about" className="block hover:text-foreground transition-colors">About</a>
                  <a href="/faq" className="block hover:text-foreground transition-colors">FAQ</a>
                  <a href="/contact" className="block hover:text-foreground transition-colors">Contact</a>
                  <a href="/privacy" className="block hover:text-foreground transition-colors">Privacy</a>
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
              © 2025 App Nest. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
} 