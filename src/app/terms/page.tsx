'use client';

import { motion } from 'framer-motion';
import { Calendar, Shield, FileText, AlertTriangle } from 'lucide-react';
import Navigation from '../components/Navigation';

export default function TermsPage() {
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
              <FileText className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent font-medium">Legal Document</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Terms and Conditions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Please read these terms carefully before using our services
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Last updated: January 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Legal compliance</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              {/* Warning Notice */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-amber-900 mb-2">Important Notice</h3>
                    <p className="text-amber-800 text-sm">
                      By using our services, you agree to be bound by these Terms and Conditions. 
                      If you do not agree to these terms, please do not use our services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Terms Sections */}
              <div className="space-y-8">
                <div className="bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground mb-4">
                    By accessing and using App Nest's services, you accept and agree to be bound by these Terms and Conditions. 
                    These terms apply to all users of our website and services.
                  </p>
                  <p className="text-muted-foreground">
                    App Nest reserves the right to modify these terms at any time. Changes will be effective immediately upon posting.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-bold mb-4">2. Service Description</h2>
                  <p className="text-muted-foreground mb-4">
                    App Nest provides web development services including but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                    <li>Custom web application development</li>
                    <li>Website design and development</li>
                    <li>E-commerce solutions</li>
                    <li>Mobile app development</li>
                    <li>API development and integration</li>
                    <li>Website maintenance and support</li>
                  </ul>
                  <p className="text-muted-foreground">
                    Service availability and features may vary and are subject to change without notice.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-bold mb-4">3. Payment and Billing</h2>
                  <p className="text-muted-foreground mb-4">
                    Payment terms are specified in individual service agreements. General payment policies include:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                    <li>Payment is due according to the agreed schedule</li>
                    <li>Late payments may incur additional fees</li>
                    <li>Refunds are subject to our refund policy</li>
                    <li>All prices are in USD unless otherwise specified</li>
                  </ul>
                  <p className="text-muted-foreground">
                    We reserve the right to suspend services for non-payment.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
                  <p className="text-muted-foreground mb-4">
                    Upon full payment, clients receive ownership of custom work created specifically for them. However:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                    <li>App Nest retains rights to general methodologies and techniques</li>
                    <li>Third-party components remain property of their respective owners</li>
                    <li>App Nest may retain the right to use work for portfolio purposes</li>
                    <li>Open-source components are subject to their respective licenses</li>
                  </ul>
                  <p className="text-muted-foreground">
                    Specific intellectual property terms may be outlined in individual contracts.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-bold mb-4">5. Privacy and Data Protection</h2>
                  <p className="text-muted-foreground mb-4">
                    We are committed to protecting your privacy and personal data:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                    <li>We collect only necessary information for service delivery</li>
                    <li>Client data is kept confidential and secure</li>
                    <li>We comply with applicable data protection laws</li>
                    <li>Data retention policies are outlined in our Privacy Policy</li>
                  </ul>
                  <p className="text-muted-foreground">
                    Please review our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> for detailed information.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
                  <p className="text-muted-foreground mb-4">
                    App Nest's liability is limited to the maximum extent permitted by law:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                    <li>Services are provided "as is" without warranties</li>
                    <li>We are not liable for indirect or consequential damages</li>
                    <li>Total liability is limited to the amount paid for services</li>
                    <li>We are not responsible for third-party service failures</li>
                  </ul>
                  <p className="text-muted-foreground">
                    Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-bold mb-4">7. Termination</h2>
                  <p className="text-muted-foreground mb-4">
                    Either party may terminate services under the following conditions:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                    <li>Written notice as specified in the service agreement</li>
                    <li>Immediate termination for breach of terms</li>
                    <li>Completion of agreed services</li>
                    <li>Mutual agreement to terminate</li>
                  </ul>
                  <p className="text-muted-foreground">
                    Upon termination, all outstanding payments become due immediately.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
                  <p className="text-muted-foreground mb-4">
                    These Terms and Conditions are governed by and construed in accordance with the laws of the jurisdiction 
                    where App Nest operates, without regard to conflict of law principles.
                  </p>
                  <p className="text-muted-foreground">
                    Any disputes shall be resolved through binding arbitration or in the courts of competent jurisdiction.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
                  <p className="text-muted-foreground mb-4">
                    For questions about these Terms and Conditions, please contact us:
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