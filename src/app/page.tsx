"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Palette, Rocket, Users, Star, CheckCircle, ArrowUpRight, Zap, Target, Globe, Shield, Server, Smartphone, TrendingUp, BarChart3, HeadphonesIcon, Sparkles, Clock } from "lucide-react";
import Navigation from "./components/Navigation";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
};

export default function Home() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="section min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 subtle-pattern opacity-20"></div>
        
        <div className="container relative">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Hero Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="inline-flex items-center space-x-2 bg-muted/60 rounded-full px-4 py-2 text-sm font-medium"
                  >
                    <Zap className="w-4 h-4 text-foreground" />
                    <span>Fresh • Innovative • Ready to Build</span>
                  </motion.div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance leading-tight">
                    Your digital vision,{" "}
                    <span className="gradient-text">perfectly crafted</span>
                  </h1>
                  
                  <p className="text-lg text-muted-foreground text-balance leading-relaxed max-w-lg">
                    We're App Nest — a new creative studio specializing in modern web development and digital design. Let's build something extraordinary together.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/contact" className="btn btn-primary group">
                    Start your project
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                  <a href="/services" className="btn btn-ghost group">
                    Explore services
                    <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </a>
                </div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="flex items-center space-x-6 pt-4"
                >
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">Ready to deliver</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium">Modern stack</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Hero Visual */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative"
              >
                <div className="relative">
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl"></div>
                  
                  {/* Main card */}
                  <div className="relative card bg-background/80 backdrop-blur-sm border-2 border-border-subtle">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">Modern Web Project</h3>
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Code className="w-5 h-5 text-blue-500" />
                          <span className="text-sm font-mono">React + TypeScript</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Palette className="w-5 h-5 text-purple-500" />
                          <span className="text-sm font-mono">Tailwind + Figma</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Rocket className="w-5 h-5 text-orange-500" />
                          <span className="text-sm font-mono">Node.js + MongoDB</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Globe className="w-5 h-5 text-green-500" />
                          <span className="text-sm font-mono">& much more...</span>
                        </div>
                      </div>

                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="text-sm text-muted-foreground mb-2">Performance Score</div>
                        <div className="flex items-center space-x-2">
                          <div className="flex-1 bg-muted rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '98%' }}></div>
                          </div>
                          <span className="text-sm font-semibold">98%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12 space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-balance">
              Why start with App Nest?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground text-balance">
              As a new studio, we bring fresh perspectives, cutting-edge expertise, and dedicated attention to every project.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              {
                icon: Target,
                title: "Focused Attention",
                description: "Every project gets our full attention. No legacy clients, no divided focus — just dedicated work on your vision."
              },
              {
                icon: Zap,
                title: "Latest Technology",
                description: "We use the newest tools and frameworks. No outdated practices — just modern, efficient solutions."
              },
              {
                icon: Users,
                title: "Personal Partnership",
                description: "Direct communication with founders. No account managers — just authentic collaboration with the people building your project."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="card text-center space-y-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <benefit.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
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
            className="max-w-4xl mx-auto text-center space-y-16"
          >
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold">
                Everything included, nothing extra
              </h2>
              <p className="text-muted-foreground">
                Most agencies charge separately for these essentials
              </p>
            </div>

            {/* Clean Value Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { title: "Domain & SSL", icon: Globe, color: "text-blue-500" },
                { title: "Hosting Setup", icon: Server, color: "text-green-500" },
                { title: "Mobile Ready", icon: Smartphone, color: "text-purple-500" },
                { title: "SEO Optimized", icon: TrendingUp, color: "text-orange-500" },
                { title: "Analytics", icon: BarChart3, color: "text-red-500" },
                { title: "30-Day Support", icon: HeadphonesIcon, color: "text-cyan-500" },
                { title: "Logo Polish", icon: Sparkles, color: "text-yellow-500" },
                { title: "Performance", icon: Zap, color: "text-pink-500" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="text-center space-y-3 group"
                >
                  <div className="mx-auto w-12 h-12 bg-muted/50 rounded-xl flex items-center justify-center group-hover:bg-muted transition-colors duration-300">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">{item.title}</div>
                </motion.div>
              ))}
            </div>

            {/* Psychological Hook */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="flex items-center justify-center space-x-2 text-sm">
                <Clock className="w-4 h-4 text-amber-500" />
                <span className="text-muted-foreground">Others charge ₹15,000+ for these separately</span>
              </div>
              <div className="text-xs text-green-600 font-medium">
                Included free with every project
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12 space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-center">
              What we create
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground text-center">
              From concept to launch, we build digital experiences that make an impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
               {
                 title: "Static Website",
                 description: "Perfect for small businesses and startups. Fast, secure, and SEO-friendly static websites that make a strong first impression.",
                 features: ["5-10 Pages", "Mobile Responsive", "Domain Included (1 year)", "SSL Certificate", "Google Analytics Setup"],
                 cta: "Get Custom Quote"
               },
               {
                 title: "Business Website",
                 description: "Dynamic websites with content management systems, ideal for growing businesses that need regular updates and advanced functionality.",
                 features: ["Custom Development", "Content Management", "Free Hosting Setup", "30-Day Free Support", "SEO Foundation"],
                 cta: "Get Custom Quote"
               },
               {
                 title: "E-commerce Store",
                 description: "Complete online stores with payment integration, inventory management, and everything needed to sell products online successfully.",
                 features: ["Payment Gateway Setup", "Product Catalog", "Free SSL Certificate", "Mobile Optimized", "Analytics Dashboard"],
                 cta: "Get Custom Quote"
               },
               {
                 title: "Brand & Design",
                 description: "Complete visual identity and user experience design that connects with your audience and drives results.",
                 features: ["Logo Design", "Social Media Kit", "Business Cards", "Free Revisions (3x)"],
                 cta: "Get Custom Quote"
               },
               {
                 title: "Digital Strategy",
                 description: "Strategic planning and optimization to maximize your digital presence and accelerate growth.",
                 features: ["Free SEO Audit", "Performance Report", "Growth Strategy", "Monthly Check-ins"],
                 cta: "Get Custom Quote"
               },
               {
                 title: "Maintenance & Support",
                 description: "Ongoing support and updates to keep your digital presence running smoothly and performing at its best.",
                 features: ["24/7 Monitoring", "Free Security Updates", "Priority Support", "Monthly Reports"],
                 cta: "Get Custom Quote"
               }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:shadow-lg transition-all duration-300 h-full flex flex-col"
              >
                <div className="flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Custom
                    </span>
                  </div>
                  
                  <div className="flex-1 flex flex-col space-y-4">
                    <p className="text-muted-foreground leading-relaxed min-h-[6rem]">{service.description}</p>
                    
                    <div className="flex-1 space-y-3">
                      <div className="text-sm font-medium text-foreground">What's included:</div>
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center space-y-8"
        >
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-semibold text-center">
                Ready to bring your vision to life?
              </h2>
              <div className="max-w-2xl mx-auto">
                <p className="text-lg text-muted-foreground text-center">
                  Let's schedule a free consultation to discuss your project and create a custom solution that perfectly fits your needs and budget.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn btn-primary group">
                Schedule free consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a href="/services" className="btn btn-ghost">
                View detailed services
        </a>
            </div>

            {/* Value Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto pt-8">
              <div className="text-center space-y-2">
                <div className="text-2xl font-semibold text-foreground">₹19,200+</div>
                <div className="text-sm text-muted-foreground">Free extras included</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-semibold text-foreground">30 Days</div>
                <div className="text-sm text-muted-foreground">Free support & updates</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-semibold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Custom, no templates</div>
              </div>
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
                  A fresh creative studio building exceptional digital experiences for forward-thinking companies.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="text-sm font-medium">Services</div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <a href="/services" className="block hover:text-foreground transition-colors">Web Development</a>
                  <a href="/services" className="block hover:text-foreground transition-colors">Brand Design</a>
                  <a href="/services" className="block hover:text-foreground transition-colors">Digital Strategy</a>
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
                  <div className="text-muted-foreground">Let's build together</div>
                </div>
              </div>
            </div>
            
            <div className="pt-8 mt-8 border-t border-border-subtle text-center text-sm text-muted-foreground">
              © 2025 App Nest. Ready to create something amazing.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
