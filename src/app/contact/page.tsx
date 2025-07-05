"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Clock, ArrowRight, CheckCircle } from "lucide-react";
import Navigation from "../components/Navigation";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navigation />

      {/* Hero Section - Simplified */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 subtle-pattern opacity-20"></div>
        
        <div className="container relative">
          <motion.div
            {...fadeInUp}
            className="max-w-2xl mx-auto text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-semibold text-balance">
              Let's work together
            </h1>
            <p className="text-lg text-muted-foreground text-balance">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form - Centered and Redesigned */}
      <section className="pb-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="card bg-gradient-to-br from-background to-muted/20 border-2 border-border-subtle">
                <div className="mb-8 text-center">
                  <h2 className="text-2xl font-semibold mb-2">Start Your Project</h2>
                  <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-foreground flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-background border-2 border-border-subtle rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 hover:border-muted-foreground"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-foreground flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-background border-2 border-border-subtle rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 hover:border-muted-foreground"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Company Field */}
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-semibold text-foreground flex items-center">
                      <span className="w-2 h-2 bg-muted-foreground rounded-full mr-2"></span>
                      Company / Organization 
                      <span className="text-muted-foreground ml-1">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-background border-2 border-border-subtle rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 hover:border-muted-foreground"
                      placeholder="Your company or organization name"
                    />
                  </div>

                  {/* Service and Budget Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="project" className="text-sm font-semibold text-foreground flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        Service Needed *
                      </label>
                      <div className="relative">
                        <select
                          id="project"
                          name="project"
                          required
                          value={formData.project}
                          onChange={handleChange}
                          className="w-full px-4 py-4 bg-background border-2 border-border-subtle rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 hover:border-muted-foreground appearance-none cursor-pointer"
                        >
                          <option value="">Choose a service</option>
                          <option value="website">🌐 New Website</option>
                          <option value="redesign">🔄 Website Redesign</option>
                          <option value="ecommerce">🛒 E-commerce Store</option>
                          <option value="branding">🎨 Branding & Design</option>
                          <option value="maintenance">🔧 Website Maintenance</option>
                          <option value="consultation">💬 Just need advice</option>
                          <option value="other">✨ Something else</option>
                        </select>
                        <ArrowRight className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 w-4 h-4 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="budget" className="text-sm font-semibold text-foreground flex items-center">
                        <span className="w-2 h-2 bg-muted-foreground rounded-full mr-2"></span>
                        Budget Range 
                        <span className="text-muted-foreground ml-1">(optional)</span>
                      </label>
                      <div className="relative">
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-4 bg-background border-2 border-border-subtle rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 hover:border-muted-foreground appearance-none cursor-pointer"
                        >
                          <option value="">Select your budget</option>
                          <option value="small">💡 ₹15,000 - ₹50,000</option>
                          <option value="medium">🚀 ₹50,000 - ₹1,50,000</option>
                          <option value="large">⭐ ₹1,50,000 - ₹3,00,000</option>
                          <option value="enterprise">🏢 ₹3,00,000+</option>
                          <option value="flexible">🤝 Let's discuss</option>
                        </select>
                        <ArrowRight className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 w-4 h-4 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-foreground flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-background border-2 border-border-subtle rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 hover:border-muted-foreground resize-vertical"
                      placeholder="Tell us about your project goals, timeline, specific requirements, or any questions you have..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="btn btn-primary w-full group text-lg py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Send Message & Get Free Quote
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>

                  {/* Form Footer */}
                  <div className="pt-4 border-t border-border-subtle">
                    <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Free consultation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span>24h response</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-purple-500" />
                        <span>No spam</span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Quick Contact Alternative */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mt-8"
            >
              <div className="card bg-muted/30 border border-border-subtle">
                <p className="text-sm text-muted-foreground mb-4">
                  Prefer email? Send us a message directly:
                </p>
                <a 
                  href="mailto:hi@app-nest.com" 
                  className="btn btn-ghost group"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  hi@app-nest.com
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </motion.div>
          </div>
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