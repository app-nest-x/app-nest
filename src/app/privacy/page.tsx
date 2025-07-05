'use client';

import { motion } from 'framer-motion';
import { Calendar, Shield, Lock, Eye, Users, Database } from 'lucide-react';
import Navigation from '../components/Navigation';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
              <Lock className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent font-medium">Privacy Document</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Last updated: January 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              {/* Privacy Commitment */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-green-900 mb-2">Our Privacy Commitment</h3>
                    <p className="text-green-800 text-sm">
                      We are committed to protecting your privacy and ensuring your personal information is handled securely. 
                      This policy explains how we collect, use, and safeguard your data.
                    </p>
                  </div>
                </div>
              </div>

              {/* Privacy Sections */}
              <div className="space-y-8">
                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <Eye className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h2 className="text-2xl font-bold mb-2">1. Information We Collect</h2>
                      <p className="text-muted-foreground mb-4">
                        We collect information you provide directly to us and information automatically collected when you use our services.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Personal Information</h3>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Name and contact information</li>
                        <li>Email address and phone number</li>
                        <li>Company name and business information</li>
                        <li>Project requirements and preferences</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Technical Information</h3>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>IP address and browser information</li>
                        <li>Device type and operating system</li>
                        <li>Website usage patterns and preferences</li>
                        <li>Cookies and tracking technologies</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <Database className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h2 className="text-2xl font-bold mb-2">2. How We Use Your Information</h2>
                      <p className="text-muted-foreground mb-4">
                        We use your information to provide and improve our services, communicate with you, and fulfill legal obligations.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Service Delivery</h3>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Provide web development services</li>
                        <li>Communicate about projects and updates</li>
                        <li>Process payments and billing</li>
                        <li>Provide customer support</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Business Operations</h3>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Improve our services and website</li>
                        <li>Analyze usage patterns and preferences</li>
                        <li>Send marketing communications (with consent)</li>
                        <li>Comply with legal requirements</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <Users className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h2 className="text-2xl font-bold mb-2">3. Information Sharing</h2>
                      <p className="text-muted-foreground mb-4">
                        We do not sell your personal information. We may share information in limited circumstances as outlined below.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Service Providers</h3>
                      <p className="text-muted-foreground">
                        We may share information with trusted third-party service providers who assist us in operating our business, 
                        such as payment processors, hosting providers, and analytics services.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Legal Requirements</h3>
                      <p className="text-muted-foreground">
                        We may disclose information when required by law, to protect our rights, or to comply with legal proceedings.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                  <p className="text-muted-foreground mb-4">
                    We implement appropriate security measures to protect your information:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>SSL encryption for data transmission</li>
                    <li>Secure servers and databases</li>
                    <li>Access controls and authentication</li>
                    <li>Regular security audits and updates</li>
                    <li>Employee training on data protection</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
                  <p className="text-muted-foreground mb-4">
                    You have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Delete your information (right to erasure)</li>
                    <li>Restrict processing of your information</li>
                    <li>Data portability</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    To exercise these rights, contact us at <a href="mailto:hi@app-nest.com" className="text-primary hover:underline">hi@app-nest.com</a>.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-bold mb-4">6. Cookies and Tracking</h2>
                  <p className="text-muted-foreground mb-4">
                    We use cookies and similar technologies to improve your experience:
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Essential Cookies</h3>
                      <p className="text-muted-foreground">
                        Required for basic website functionality and security.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Analytics Cookies</h3>
                      <p className="text-muted-foreground">
                        Help us understand how visitors use our website to improve our services.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Marketing Cookies</h3>
                      <p className="text-muted-foreground">
                        Used to deliver relevant advertisements (only with your consent).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-bold mb-4">7. Data Retention</h2>
                  <p className="text-muted-foreground mb-4">
                    We retain your information for as long as necessary to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Provide our services to you</li>
                    <li>Comply with legal obligations</li>
                    <li>Resolve disputes and enforce agreements</li>
                    <li>Maintain business records</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    We will delete your information when it is no longer needed for these purposes.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-bold mb-4">8. International Data Transfers</h2>
                  <p className="text-muted-foreground mb-4">
                    Your information may be transferred to and processed in countries outside your residence. 
                    We ensure appropriate safeguards are in place to protect your information during such transfers.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-bold mb-4">9. Children's Privacy</h2>
                  <p className="text-muted-foreground mb-4">
                    Our services are not intended for individuals under 16 years of age. 
                    We do not knowingly collect personal information from children under 16.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-bold mb-4">10. Changes to This Policy</h2>
                  <p className="text-muted-foreground mb-4">
                    We may update this privacy policy from time to time. We will notify you of any material changes by:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Posting the updated policy on our website</li>
                    <li>Sending you an email notification</li>
                    <li>Providing notice through our services</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
                  <p className="text-muted-foreground mb-4">
                    If you have questions about this privacy policy or our privacy practices, contact us:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Email: <a href="mailto:hi@app-nest.com" className="text-primary hover:underline">hi@app-nest.com</a></p>
                    <p>Phone: +1 (555) 123-4567</p>
                    <p>Address: 123 Tech Street, Innovation City, IC 12345</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 