"use client";

import { motion } from "framer-motion";
import { Users2, Target, Lightbulb, Award, Clock, Globe, Crown, User, Code2 } from "lucide-react";
import Navigation from "../components/Navigation";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function About() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="section pt-32">
        <div className="container">
          <motion.div 
            {...fadeInUp}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h1 className="text-5xl font-semibold text-balance">
              Building the future of the web, 
              <span className="gradient-text"> one project at a time</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance">
              We're a passionate team of designers and developers dedicated to creating 
              exceptional digital experiences that drive real business results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div className="space-y-6">
                <h2 className="text-4xl font-semibold">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2019, App Nest emerged from a simple belief: that great web experiences 
                    should be accessible to businesses of all sizes. We started as a small team of 
                    passionate developers and designers who were frustrated with the gap between 
                    beautiful design and functional, performant websites.
                  </p>
                  <p>
                    Today, we've grown into a trusted partner for companies worldwide, helping them 
                    transform their digital presence and achieve their business goals through 
                    thoughtful, user-centered design and cutting-edge development.
                  </p>
                  <p>
                    Our approach combines strategic thinking, creative problem-solving, and technical 
                    excellence to deliver solutions that not only look great but perform exceptionally 
                    across all devices and platforms.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="card text-center">
                  <div className="text-3xl font-semibold text-foreground mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="card text-center">
                  <div className="text-3xl font-semibold text-foreground mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="card text-center">
                  <div className="text-3xl font-semibold text-foreground mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="card text-center">
                  <div className="text-3xl font-semibold text-foreground mb-2">2.1s</div>
                  <div className="text-sm text-muted-foreground">Avg Load Time</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-muted">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-semibold mb-6">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              These principles guide everything we do and shape how we work with our clients
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {[
              {
                icon: Target,
                title: "Purpose-Driven",
                description: "Every project has a clear purpose. We don't just build websites; we create solutions that solve real problems and drive meaningful results."
              },
              {
                icon: Users2,
                title: "User-Centric",
                description: "Great design starts with understanding users. We research, test, and iterate to ensure every interaction feels natural and intuitive."
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "We stay ahead of trends and embrace new technologies to deliver cutting-edge solutions that give our clients a competitive advantage."
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We're perfectionists who sweat the details. From code quality to pixel-perfect designs, we never compromise on excellence."
              },
              {
                icon: Clock,
                title: "Reliability",
                description: "We deliver on time, every time. Our clients trust us because we consistently meet deadlines and exceed expectations."
              },
              {
                icon: Globe,
                title: "Accessibility",
                description: "The web should be accessible to everyone. We build inclusive experiences that work for users of all abilities and backgrounds."
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="card group"
              >
                <value.icon className="w-8 h-8 text-foreground mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-medium mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-semibold mb-6">Meet the Team</h2>
            <p className="text-lg text-muted-foreground">
              The talented individuals behind every successful project
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              {
                name: "Rayan Khan",
                role: "Founder & CEO",
                description: "Visionary leader with expertise in business strategy and full-stack development architecture",
                icon: Crown
              },
              {
                name: "Zyberus",
                role: "Lead Developer",
                description: "Expert full-stack developer specializing in React, Next.js, and scalable web applications",
                icon: Code2
              },
              {
                name: "Zyberax",
                role: "Lead Developer",
                description: "Senior developer focused on performance optimization and modern web technologies",
                icon: User
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="card text-center group"
              >
                <div className="w-20 h-20 bg-accent rounded-full mx-auto mb-4 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                  <member.icon className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-muted">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center space-y-8"
          >
            <h2 className="text-4xl font-semibold">Ready to work together?</h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss your project and see how we can help bring your vision to life.
            </p>
            <a href="/contact" className="btn btn-primary inline-flex">
              Start a conversation
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm">
            <a href="/" className="font-medium mb-4 md:mb-0">AppNest</a>
            <div className="flex items-center space-x-6 text-muted-foreground">
              <a href="/privacy" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-foreground transition-colors">Terms</a>
              <span>&copy; 2024 AppNest. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
} 