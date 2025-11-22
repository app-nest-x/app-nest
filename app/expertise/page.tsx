'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';

const domains = [
    {
        name: "Mobile Native",
        code: "MBL",
        capabilities: [
            { skill: "iOS (Swift/SwiftUI)", mastery: 98, projects: 45 },
            { skill: "Android (Kotlin)", mastery: 96, projects: 38 },
            { skill: "React Native", mastery: 94, projects: 52 },
            { skill: "Flutter", mastery: 91, projects: 28 }
        ]
    },
    {
        name: "Web Engineering",
        code: "WEB",
        capabilities: [
            { skill: "Next.js/React", mastery: 99, projects: 67 },
            { skill: "Node.js/Bun", mastery: 97, projects: 54 },
            { skill: "TypeScript", mastery: 98, projects: 89 },
            { skill: "GraphQL/tRPC", mastery: 95, projects: 41 }
        ]
    },
    {
        name: "Infrastructure",
        code: "INF",
        capabilities: [
            { skill: "AWS/GCP/Azure", mastery: 96, projects: 43 },
            { skill: "Kubernetes/Docker", mastery: 94, projects: 37 },
            { skill: "PostgreSQL/MongoDB", mastery: 97, projects: 56 },
            { skill: "Redis/Kafka", mastery: 93, projects: 31 }
        ]
    },
    {
        name: "AI/ML Systems",
        code: "AI",
        capabilities: [
            { skill: "OpenAI/Anthropic", mastery: 97, projects: 29 },
            { skill: "Vector Databases", mastery: 95, projects: 24 },
            { skill: "PyTorch/TensorFlow", mastery: 92, projects: 18 },
            { skill: "LangChain/Agents", mastery: 96, projects: 22 }
        ]
    }
];

function CircularProgress({ value, size = 120 }: { value: number, size?: number }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setProgress(value), 200);
        return () => clearTimeout(timer);
    }, [value]);

    const circumference = 2 * Math.PI * (size / 2 - 8);
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div className="relative" style={{ width: size, height: size }}>
            <svg className="transform -rotate-90" width={size} height={size}>
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={size / 2 - 8}
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="2"
                    fill="none"
                />
                <motion.circle
                    cx={size / 2}
                    cy={size / 2}
                    r={size / 2 - 8}
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: offset }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                />
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#ffffff" />
                    </linearGradient>
                </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-white tabular-nums">{progress}</span>
            </div>
        </div>
    );
}

function DomainCard({ domain, index }: { domain: typeof domains[0], index: number }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useTransform(mouseY, [-100, 100], [5, -5]);
    const rotateY = useTransform(mouseX, [-100, 100], [-5, 5]);
    const rotateXSpring = useSpring(rotateX, { damping: 20, stiffness: 300 });
    const rotateYSpring = useSpring(rotateY, { damping: 20, stiffness: 300 });

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                mouseX.set(e.clientX - rect.left - rect.width / 2);
                mouseY.set(e.clientY - rect.top - rect.height / 2);
            }}
            onMouseLeave={() => {
                mouseX.set(0);
                mouseY.set(0);
            }}
            className="relative group"
            style={{ perspective: 1000 }}
        >
            <motion.div
                style={{
                    rotateX: rotateXSpring,
                    rotateY: rotateYSpring,
                    transformStyle: "preserve-3d"
                }}
                className="border border-white/10 p-12 bg-black hover:border-emerald-500/30 transition-colors duration-300"
            >
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <div className="font-mono text-xs text-emerald-500 mb-2">/{domain.code}</div>
                        <h3 className="text-4xl font-medium text-white">{domain.name}</h3>
                    </div>
                    <motion.button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="h-10 w-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                        whileTap={{ scale: 0.9 }}
                    >
                        <motion.span
                            animate={{ rotate: isExpanded ? 45 : 0 }}
                            className="text-xl"
                        >
                            +
                        </motion.span>
                    </motion.button>
                </div>

                {/* Capability Grid */}
                <div className="grid grid-cols-2 gap-8">
                    {domain.capabilities.map((cap, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm text-white font-medium">{cap.skill}</span>
                                <span className="font-mono text-xs text-gray-500">{cap.projects} projects</span>
                            </div>
                            <div className="h-1 bg-white/10 overflow-hidden rounded-full">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${cap.mastery}%` }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 + 0.2 }}
                                    className="h-full bg-gradient-to-r from-emerald-500 to-white"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Expanded Details */}
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                        height: isExpanded ? 'auto' : 0,
                        opacity: isExpanded ? 1 : 0
                    }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden border-t border-white/10 mt-8"
                >
                    <div className="pt-8 grid grid-cols-3 gap-6">
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">
                                {domain.capabilities.reduce((sum, c) => sum + c.projects, 0)}
                            </div>
                            <div className="text-xs font-bold uppercase tracking-widest text-gray-600">Total Projects</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">
                                {Math.round(domain.capabilities.reduce((sum, c) => sum + c.mastery, 0) / domain.capabilities.length)}%
                            </div>
                            <div className="text-xs font-bold uppercase tracking-widest text-gray-600">Avg Mastery</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">
                                {domain.capabilities.length}
                            </div>
                            <div className="text-xs font-bold uppercase tracking-widest text-gray-600">Technologies</div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                className="absolute inset-0 -z-10 bg-emerald-500/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
        </motion.div>
    );
}

export default function Expertise() {
    return (
        <main className="min-h-screen bg-black selection:bg-white selection:text-black">
            <Navbar />

            <section className="pt-40 pb-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-[90rem]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-32"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <span className="h-[1px] w-12 bg-emerald-500/50" />
                            <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">
                                Technical Arsenal
                            </span>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-16 mb-16">
                            <div className="lg:col-span-7">
                                <h1 className="text-6xl md:text-[9rem] font-medium leading-[0.85] tracking-tighter text-white">
                                    Deep <br />
                                    <span className="text-gray-700">Expertise</span>
                                </h1>
                            </div>
                            <div className="lg:col-span-5 flex flex-col justify-end">
                                <p className="text-2xl font-light text-white leading-tight mb-12">
                                    We don't dabble. <br />
                                    <span className="text-gray-500">We master.</span>
                                </p>

                                {/* Circular Stats */}
                                <div className="grid grid-cols-2 gap-8">
                                    <div className="text-center">
                                        <CircularProgress value={97} size={100} />
                                        <div className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-600">Avg Mastery</div>
                                    </div>
                                    <div className="text-center">
                                        <CircularProgress value={100} size={100} />
                                        <div className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-600">Success Rate</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Domain Cards */}
                    <div className="grid md:grid-cols-2 gap-px bg-white/10">
                        {domains.map((domain, index) => (
                            <DomainCard key={domain.code} domain={domain} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
