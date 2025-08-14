import { Metadata } from "next";
import Navigation from "../components/Navigation";
import { Users, Award, Clock, Globe, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Best Web Development Company India | App Nest",
  description: "Learn about App Nest, India's leading web development company. 500+ projects delivered, expert React & Next.js developers, and 4.9/5 client satisfaction rating.",
  keywords: [
    "about App Nest", "web development company India", "React developers India", "Next.js experts",
    "web development team", "professional developers", "company profile", "web development experience"
  ],
  openGraph: {
    title: "About Us | Best Web Development Company India | App Nest",
    description: "Learn about App Nest, India's leading web development company. 500+ projects delivered, expert React & Next.js developers.",
    type: "website",
    url: "https://app-nest.com/about",
  },
  alternates: {
    canonical: "https://app-nest.com/about",
  },
};

const stats = [
  { number: "500+", label: "Projects Delivered", icon: Award },
  { number: "4.9/5", label: "Client Satisfaction", icon: Users },
  { number: "5+ Years", label: "Industry Experience", icon: Clock },
  { number: "15+ Countries", label: "Global Reach", icon: Globe }
];

const values = [
  {
    title: "Quality First",
    description: "We never compromise on quality. Every line of code is written with precision and tested thoroughly."
  },
  {
    title: "Transparent Communication",
    description: "Clear, honest communication throughout the project lifecycle. No hidden costs or surprises."
  },
  {
    title: "Modern Technologies",
    description: "We use cutting-edge technologies like React, Next.js, and TypeScript for superior performance."
  },
  {
    title: "Client Success",
    description: "Your success is our success. We're committed to delivering solutions that drive business growth."
  }
];

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="section bg-gradient-to-br from-background to-muted/20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-semibold text-balance">
                About App Nest
              </h1>
              <p className="text-lg text-muted-foreground text-balance">
                We're India's leading web development company, specializing in React, Next.js, and modern web technologies.
                With 500+ successful projects and a 4.9/5 client satisfaction rating, we help businesses transform their digital presence.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center space-y-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl font-semibold">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-semibold">Our Story</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Founded in 2020, App Nest began with a simple mission: to help businesses succeed online
                      through exceptional web development services. What started as a small team of passionate
                      developers has grown into India's most trusted web development company.
                    </p>
                    <p>
                      We specialize in modern web technologies like React, Next.js, and TypeScript, delivering
                      high-performance websites and web applications that drive business growth. Our commitment
                      to quality, transparency, and client success has earned us a 4.9/5 satisfaction rating.
                    </p>
                    <p>
                      Today, we've successfully delivered 500+ projects for clients across 15+ countries,
                      from startups to enterprises. We're not just developers – we're your digital partners,
                      committed to your long-term success.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8">
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Why Choose App Nest?</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium">Expert Team</div>
                          <div className="text-sm text-muted-foreground">Certified React & Next.js developers</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium">Proven Track Record</div>
                          <div className="text-sm text-muted-foreground">500+ successful projects delivered</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium">24/7 Support</div>
                          <div className="text-sm text-muted-foreground">Round-the-clock technical support</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium">Transparent Pricing</div>
                          <div className="text-sm text-muted-foreground">No hidden costs, clear project scope</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
                <p className="text-muted-foreground">
                  The principles that guide everything we do
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="card text-center space-y-4">
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-semibold">Ready to Work Together?</h2>
              <p className="text-muted-foreground">
                Let's discuss your web development needs and create something amazing together.
                Get a free consultation and see why 500+ clients trust App Nest.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="btn btn-primary group">
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
                <a href="/portfolio" className="btn btn-ghost">
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}