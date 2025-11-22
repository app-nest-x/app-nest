'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
    {
        id: '01',
        title: 'iOS Engineering',
        description: 'Native Swift development focusing on haptic feedback, fluid animations, and system-level integration.',
        tags: ['SwiftUI', 'Metal', 'CoreML'],
    },
    {
        id: '02',
        title: 'Android Systems',
        description: 'Pixel-perfect Kotlin applications designed for the diverse Android ecosystem with performance at the core.',
        tags: ['Kotlin', 'Jetpack Compose', 'Coroutines'],
    },
    {
        id: '03',
        title: 'Web Infrastructure',
        description: 'Scalable full-stack solutions using edge computing and serverless architectures.',
        tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    },
    {
        id: '04',
        title: 'AI Integration',
        description: 'Embedding intelligent agents and predictive models directly into your application workflow.',
        tags: ['OpenAI', 'TensorFlow', 'Python'],
    }
];

export default function Services() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="services" className="py-32 bg-black relative z-20">
            <div className="px-6 md:px-12 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8"
                >
                    <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-white">
                        Core <span className="font-bold text-gray-600">Capabilities</span>
                    </h2>
                    <p className="max-w-md text-sm text-gray-400 font-mono mt-4 md:mt-0">
            // DEPLOYING SCALABLE SOLUTIONS
                    </p>
                </motion.div>

                <div className="flex flex-col">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group relative border-t border-white/10 py-12 transition-colors hover:bg-white/[0.02]"
                        >
                            <div className="flex flex-col md:flex-row md:items-baseline gap-8 relative z-10">
                                <span className="font-mono text-xs text-gray-500">
                                    {service.id}
                                </span>

                                <div className="flex-1">
                                    <h3 className="text-3xl md:text-5xl font-medium text-white mb-4 transition-transform duration-500 group-hover:translate-x-4">
                                        {service.title}
                                    </h3>
                                    <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                                        <p className="max-w-xl text-gray-400 text-lg mb-6 pt-2">
                                            {service.description}
                                        </p>
                                        <div className="flex gap-3">
                                            {service.tags.map((tag) => (
                                                <span key={tag} className="px-3 py-1 border border-white/20 rounded-full text-[10px] uppercase tracking-wider text-white/60">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <motion.div
                                    className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    initial={{ x: -20 }}
                                    whileHover={{ x: 0 }}
                                >
                                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
