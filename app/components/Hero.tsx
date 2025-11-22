'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
            {/* Ambient Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black" />
                <div className="absolute inset-0 aurora-bg animate-pulse-slower" />
                <div className="absolute inset-0 noise-bg opacity-20 mix-blend-overlay" />

                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <motion.div
                style={{ y, opacity, scale }}
                className="relative z-10 flex h-full flex-col justify-center px-6 md:px-12 lg:px-24"
            >
                <div className="max-w-[90rem]">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8 flex items-center gap-4"
                    >
                        <span className="h-[1px] w-12 bg-emerald-500/50" />
                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">
                            System Architecture & Design
                        </span>
                    </motion.div>

                    <h1 className="text-7xl font-medium leading-[0.9] tracking-tighter text-white md:text-9xl lg:text-[11rem]">
                        <div className="overflow-hidden">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="block"
                            >
                                Building
                            </motion.span>
                        </div>
                        <div className="overflow-hidden">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white"
                            >
                                The Unseen
                            </motion.span>
                        </div>
                    </h1>

                    <div className="mt-12 flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-xl text-lg font-light leading-relaxed text-gray-400 md:text-xl"
                        >
                            We are a digital foundry. We forge enterprise-grade applications
                            that operate in the silence of perfection.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center gap-8"
                        >
                            <a href="#work" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white">
                                <span className="border-b border-white/30 pb-1 transition-colors group-hover:border-white">View Projects</span>
                            </a>
                            <a href="#contact" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white">
                                <span className="border-b border-white/30 pb-1 transition-colors group-hover:border-white">Contact Us</span>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute bottom-12 right-12 hidden flex-col items-center gap-4 md:flex"
            >
                <span className="rotate-90 text-[10px] font-bold uppercase tracking-widest text-gray-600">Scroll</span>
                <div className="h-24 w-[1px] bg-gray-800 overflow-hidden">
                    <motion.div
                        animate={{ y: ["-100%", "100%"] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="h-full w-full bg-emerald-500"
                    />
                </div>
            </motion.div>
        </section>
    );
}
