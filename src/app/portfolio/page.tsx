import { Metadata } from "next";
import Navigation from "../components/Navigation";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

export const metadata: Metadata = {
    title: "Portfolio | Web Development Projects | App Nest India",
    description: "Explore our portfolio of successful web development projects. React, Next.js, e-commerce, and custom web applications built for clients across India and globally.",
    keywords: [
        "web development portfolio", "React projects", "Next.js projects", "e-commerce websites",
        "custom web applications", "web development examples", "portfolio India", "web design showcase"
    ],
    openGraph: {
        title: "Portfolio | Web Development Projects | App Nest India",
        description: "Explore our portfolio of successful web development projects. React, Next.js, e-commerce, and custom web applications.",
        type: "website",
        url: "https://app-nest.com/portfolio",
    },
    alternates: {
        canonical: "https://app-nest.com/portfolio",
    },
};

const projects = [
    {
        title: "E-commerce Fashion Store",
        description: "Modern e-commerce platform built with Next.js and Stripe integration. Features include product catalog, shopping cart, and admin dashboard.",
        technologies: ["Next.js", "React", "Stripe", "MongoDB", "Tailwind CSS"],
        image: "/portfolio/ecommerce-fashion.jpg",
        liveUrl: "#",
        githubUrl: "#",
        category: "E-commerce"
    },
    {
        title: "SaaS Dashboard Application",
        description: "Comprehensive dashboard for a SaaS platform with real-time analytics, user management, and subscription handling.",
        technologies: ["React", "Node.js", "PostgreSQL", "Chart.js", "Material-UI"],
        image: "/portfolio/saas-dashboard.jpg",
        liveUrl: "#",
        githubUrl: "#",
        category: "Web Application"
    },
    {
        title: "Restaurant Booking System",
        description: "Online reservation system with table booking, menu display, and customer management features.",
        technologies: ["Next.js", "TypeScript", "Prisma", "MySQL", "Tailwind CSS"],
        image: "/portfolio/restaurant-booking.jpg",
        liveUrl: "#",
        githubUrl: "#",
        category: "Business Website"
    },
    {
        title: "Real Estate Platform",
        description: "Property listing platform with advanced search, virtual tours, and agent management system.",
        technologies: ["React", "Node.js", "MongoDB", "Cloudinary", "Bootstrap"],
        image: "/portfolio/real-estate.jpg",
        liveUrl: "#",
        githubUrl: "#",
        category: "Web Application"
    },
    {
        title: "Healthcare Management System",
        description: "Patient management system with appointment scheduling, medical records, and telemedicine features.",
        technologies: ["Next.js", "React", "Firebase", "Stripe", "Chakra UI"],
        image: "/portfolio/healthcare-system.jpg",
        liveUrl: "#",
        githubUrl: "#",
        category: "Web Application"
    },
    {
        title: "Educational Learning Platform",
        description: "Online learning platform with course management, video streaming, and progress tracking.",
        technologies: ["React", "Node.js", "MongoDB", "AWS S3", "Material-UI"],
        image: "/portfolio/learning-platform.jpg",
        liveUrl: "#",
        githubUrl: "#",
        category: "Web Application"
    }
];

export default function PortfolioPage() {
    return (
        <>
            <Navigation />

            <main className="min-h-screen pt-20">
                {/* Hero Section */}
                <section className="section bg-gradient-to-br from-background to-muted/20">
                    <div className="container">
                        <div className="max-w-4xl mx-auto text-center space-y-6">
                            <h1 className="text-4xl md:text-5xl font-semibold text-balance">
                                Our Web Development Portfolio
                            </h1>
                            <p className="text-lg text-muted-foreground text-balance">
                                Explore our successful web development projects built with React, Next.js, and modern technologies.
                                From e-commerce stores to complex web applications, we deliver results that drive business growth.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Portfolio Grid */}
                <section className="section">
                    <div className="container">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {projects.map((project, index) => (
                                    <div key={index} className="card group hover:shadow-lg transition-all duration-300">
                                        <div className="space-y-4">
                                            {/* Project Image Placeholder */}
                                            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                                                <span className="text-muted-foreground text-sm">Project Screenshot</span>
                                            </div>

                                            {/* Project Info */}
                                            <div className="space-y-3">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                                                        {project.category}
                                                    </span>
                                                </div>

                                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                                    {project.title}
                                                </h3>

                                                <p className="text-muted-foreground text-sm leading-relaxed">
                                                    {project.description}
                                                </p>

                                                {/* Technologies */}
                                                <div className="flex flex-wrap gap-2">
                                                    {project.technologies.map((tech, idx) => (
                                                        <span key={idx} className="text-xs bg-muted px-2 py-1 rounded">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Project Links */}
                                                <div className="flex items-center space-x-4 pt-2">
                                                    <a
                                                        href={project.liveUrl}
                                                        className="flex items-center space-x-2 text-sm text-primary hover:underline"
                                                    >
                                                        <ExternalLink className="w-4 h-4" />
                                                        <span>Live Demo</span>
                                                    </a>
                                                    <a
                                                        href={project.githubUrl}
                                                        className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground"
                                                    >
                                                        <Github className="w-4 h-4" />
                                                        <span>Code</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
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
                            <h2 className="text-3xl font-semibold">Ready to Start Your Project?</h2>
                            <p className="text-muted-foreground">
                                Let's discuss your web development needs and create something amazing together.
                                Get a free consultation and custom quote for your project.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="/contact" className="btn btn-primary group">
                                    Start Your Project
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                                </a>
                                <a href="/services" className="btn btn-ghost">
                                    View Our Services
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}