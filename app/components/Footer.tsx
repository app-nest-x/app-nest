'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
    const { scrollYProgress } = useScroll();
    const bandOpacity = useTransform(scrollYProgress, [0.995, 0.999, 1], [0, 1, 1]);
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [active, setActive] = useState(false);
    return (
        <>
            <footer className="relative z-20 overflow-hidden border-t border-white/10 bg-black py-24 px-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[1000px] bg-emerald-900/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative mx-auto max-w-6xl">
                    <div className="grid gap-16 lg:grid-cols-2">
                        <div className="flex flex-col gap-8">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white"
                            >
                                Ready to build <br />
                                <span className="text-gray-500">the extraordinary?</span>
                            </motion.h2>

                            <motion.a
                                href="mailto:zyberusx@gmail.com"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="group flex items-center gap-4 text-lg sm:text-xl text-white transition-colors hover:text-emerald-400"
                            >
                                <span className="border-b border-white/20 pb-1 group-hover:border-emerald-400">Start a conversation</span>
                                <ArrowRight className="transition-transform group-hover:translate-x-2" />
                            </motion.a>
                        </div>

                        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-3">
                            {[
                                { title: 'Sitemap', links: ['Home', 'Expertise', 'Method', 'Studio'] },
                                { title: 'Services', links: ['Mobile Development', 'Web Architecture', 'AI Solutions', 'Product Design'] },
                                { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'] },
                            ].map((column, idx) => (
                                <motion.div
                                    key={column.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col gap-4"
                                >
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-600">{column.title}</span>
                                    {column.links.map((link) => {
                                        const href = column.title === 'Legal'
                                            ? (link === 'Privacy Policy' ? '/legal/privacy' : link === 'Terms of Service' ? '/legal/terms' : '/legal/cookies')
                                            : '#';
                                        return (
                                            <Link key={link} href={href} className="text-sm text-gray-400 transition-colors hover:text-white">
                                                {link}
                                            </Link>
                                        );
                                    })}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs font-medium text-gray-600 md:flex-row">
                        <span>© 2025 AppNest Inc. All rights reserved.</span>
                        <div className="flex gap-8">
                            <span>India</span>
                            <span>Hyderabad</span>
                        </div>
                    </div>
                </div>
            </footer>

            <div
                role="presentation"
                aria-hidden="true"
                className="fixed inset-x-0 bottom-0 z-0 underlay-band"
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
                onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
                data-active={active}
                style={{ ['--mx' as any]: `${mouse.x}px`, ['--my' as any]: `${mouse.y}px` }}
            >
                <motion.div style={{ opacity: bandOpacity }} className="mx-auto w-full h-[24vw] md:h-[18vw] bg-white flex items-end justify-center">
                    <div className="underlay-text" data-text="APP NEST">APP NEST</div>
                </motion.div>
            </div>
            <div aria-hidden="true" className="h-[24vw] md:h-[18vw]" />
        </>
    );
}
