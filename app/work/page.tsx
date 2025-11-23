'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const projects = [
    {
        id: "001",
        client: "NextRoadmap",
        title: "AI Roadmap Generator",
        year: "2025",
        url: "https://nextroadmap.com",
        scope: ["AI Generation", "Interactive UI", "Export Features"],
        metrics: { roadmaps: "5K+", satisfaction: "98%", uptime: "99.9%" }
    },
    {
        id: "002",
        client: "Zefaza",
        title: "E‑commerce Platform",
        year: "2025",
        url: "https://zefaza.in",
        scope: ["Storefront", "Cart/Checkout", "Payments"],
        metrics: { products: "1K+", conversions: "+12%", uptime: "99.9%" }
    },
    {
        id: "003",
        client: "Playrito",
        title: "Turf Booking System",
        year: "2025",
        url: "https://playrito.com",
        scope: ["Slot Booking", "Payments", "Admin Panel"],
        metrics: { venues: "50+", bookings: "10K+", rating: "4.8/5" }
    },
    {
        id: "004",
        client: "Zyberus",
        title: "Developer Portfolio",
        year: "2025",
        url: "https://zyberus.in",
        scope: ["Personal Site", "Projects Showcase", "Contact"],
        metrics: { visits: "100K+", projects: "30+", response: "<24h" }
    },
    {
        id: "005",
        client: "SASSY",
        title: "Clothing Brand Website",
        year: "2025",
        url: "https://sasssy-red.vercel.app/",
        scope: ["Catalog", "Cart", "Order Tracking"],
        metrics: { SKUs: "500+", orders: "5K+", retention: "+9%" }
    },
    {
        id: "006",
        client: "Locazon",
        title: "Developer Portfolio",
        year: "2025",
        url: "https://locazon.in",
        scope: ["Personal Site", "Resume", "Contact"],
        metrics: { views: "50K+", projects: "20+", response: "<24h" }
    }
];

function ProjectRow({ project, index }: { project: typeof projects[0], index: number }) {
    const [isHovered, setIsHovered] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useTransform(mouseY, [-100, 100], [5, -5]);
    const rotateY = useTransform(mouseX, [-100, 100], [-5, 5]);

    const springConfig = { damping: 20, stiffness: 300 };
    const rotateXSpring = useSpring(rotateX, springConfig);
    const rotateYSpring = useSpring(rotateY, springConfig);

    return (
        <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                mouseX.set(e.clientX - rect.left - rect.width / 2);
                mouseY.set(e.clientY - rect.top - rect.height / 2);
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                mouseX.set(0);
                mouseY.set(0);
            }}
            className="group relative border-t border-white/10 py-16 cursor-pointer block"
            style={{
                perspective: 1000,
            }}
        >
            <motion.div
                style={{
                    rotateX: rotateXSpring,
                    rotateY: rotateYSpring,
                    transformStyle: "preserve-3d",
                }}
            >
                {/* Project Number & Client */}
                <div className="flex items-baseline gap-4 md:gap-8 mb-6">
                    <span className="font-mono text-xs text-emerald-500 w-8 md:w-12">/{project.id}</span>
                    <div className="flex-1">
                        <motion.h3
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium text-white mb-2"
                            animate={{ x: isHovered ? 20 : 0 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {project.client}
                        </motion.h3>
                        <motion.p
                            className="text-base md:text-xl text-gray-500"
                            animate={{ x: isHovered ? 20 : 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {project.title}
                        </motion.p>
                    </div>
                    <span className="hidden sm:block font-mono text-sm text-gray-600">{project.year}</span>
                </div>

                {/* Scope - Revealed on hover */}
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                        height: isHovered ? 'auto' : 0,
                        opacity: isHovered ? 1 : 0
                    }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden ml-10 md:ml-20"
                >
                    <div className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8">
                        {project.scope.map((item, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                                transition={{ duration: 0.2 }}
                                className="px-3 md:px-4 py-1.5 md:py-2 border border-white/20 rounded-full text-[10px] md:text-xs uppercase tracking-wider text-white/60"
                            >
                                {item}
                            </motion.span>
                        ))}
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-6">
                        {Object.entries(project.metrics).map(([key, value], i) => (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="text-xl md:text-2xl font-medium text-white">{value}</div>
                                <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-600">{key}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Hover indicator */}
                <motion.div
                    className="hidden md:flex absolute right-4 lg:right-12 top-1/2 -translate-y-1/2"
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        x: isHovered ? 0 : -10
                    }}
                >
                    <div className="flex items-center gap-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-white">View Case Study</span>
                        <div className="h-12 w-12 rounded-full border border-white flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Ambient glow on hover */}
            <motion.div
                className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-900/10 to-teal-900/10 blur-3xl"
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.5 }}
            />
        </motion.a>
    );
}

export default function Work() {
    return (
        <main className="min-h-screen bg-black selection:bg-white selection:text-black">
            <Navbar />

            <section className="pt-40 pb-24 px-6 md:px-12 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-32 max-w-[90rem]"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <span className="h-[1px] w-12 bg-emerald-500/50" />
                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">
                            Case Studies
                        </span>
                    </div>
                    <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-medium leading-[0.85] tracking-tighter text-white">
                        Selected <br />
                        <span className="text-gray-700">Work</span>
                    </h1>
                </motion.div>

                <div className="max-w-[90rem] flex flex-col">
                    {projects.map((project, index) => (
                        <ProjectRow key={project.id} project={project} index={index} />
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
