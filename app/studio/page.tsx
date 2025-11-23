'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const heroStats = [
    { label: "Founded", value: "2024", suffix: "" },
    { label: "Team Size", value: "16", suffix: "" },
    { label: "Success Rate", value: "100", suffix: "%" },
    { label: "Avg Mastery", value: "97", suffix: "%" }
];

const metrics = [
    {
        value: "4–6",
        label: "Projects Per Year",
        detail: "We deliberately stay selective. Quality over quantity. Every project gets our full attention."
    },
    {
        value: "100%",
        label: "Direct Engineering",
        detail: "No project managers. No account executives. Just engineers and designers who own the outcome."
    },
    {
        value: "∞",
        label: "Iterations Until Perfect",
        detail: "We don't ship MVPs. We ship products we're proud to put our name on."
    },
    {
        value: "16",
        label: "Global Team Members",
        detail: "Based in Hyderabad, India. United by craft."
    }
];

const philosophy = [
    {
        title: "01 / Obsession",
        content: "We obsess over details that most people will never notice. That 2-pixel offset. That 16ms frame drop. That edge case that happens 0.1% of the time. We fix them all."
    },
    {
        title: "02 / Ownership",
        content: "When you work with us, you work with us. Not a junior team. Not offshore contractors. The people who quote the project are the people who build it."
    },
    {
        title: "03 / Silence",
        content: "The best software is invisible. It anticipates needs. It fades into the background. It doesn't beg for attention with dark patterns and notification spam."
    },
    {
        title: "04 / Longevity",
        content: "We don't build for the next sprint. We build for the next decade. Maintainable code. Future-proof architecture. Documentation that actually helps."
    }
];

const team = [
    { role: "Engineering", count: 10, location: "ZRH / SFO" },
    { role: "Design", count: 4, location: "SFO / TYO" },
    { role: "Strategy", count: 2, location: "ZRH" }
];

function HeroStat({ stat, index }: { stat: typeof heroStats[0], index: number }) {
    const [count, setCount] = useState(0);
    const targetValue = stat.suffix === "%" ? parseInt(stat.value) : parseInt(stat.value);

    useEffect(() => {
        let start = 0;
        const end = targetValue;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [targetValue]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
        >
            <div className="text-5xl md:text-7xl font-bold text-white mb-2 tabular-nums">
                {count}{stat.suffix}
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-600">
                {stat.label}
            </div>
        </motion.div>
    );
}

function MetricCard({ metric, index }: { metric: typeof metrics[0], index: number }) {
    const [isRevealed, setIsRevealed] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onMouseEnter={() => setIsRevealed(true)}
            onMouseLeave={() => setIsRevealed(false)}
            className="relative border border-white/10 p-8 sm:p-10 md:p-12 cursor-pointer group overflow-hidden"
        >
            <div className="relative z-10">
                <motion.div
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tabular-nums"
                    animate={{ scale: isRevealed ? 1.05 : 1 }}
                    transition={{ duration: 0.3 }}
                >
                    {metric.value}
                </motion.div>
                <div className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">
                    {metric.label}
                </div>

                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                        height: isRevealed ? 'auto' : 0,
                        opacity: isRevealed ? 1 : 0
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                >
                    <div className="border-t border-white/20 pt-6">
                        <p className="text-gray-400 leading-relaxed">
                            {metric.detail}
                        </p>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 to-teal-900/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: isRevealed ? 1 : 0 }}
                transition={{ duration: 0.4 }}
            />
        </motion.div>
    );
}

function PhilosophyCard({ item, index }: { item: typeof philosophy[0], index: number }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => setIsActive(!isActive)}
            className="group cursor-pointer border-l-2 border-white/10 pl-8 py-8 hover:border-emerald-500 transition-colors duration-500"
        >
            <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-xl md:text-2xl font-medium text-white group-hover:text-emerald-400 transition-colors">
                    {item.title}
                </h3>
                <motion.div
                    animate={{ rotate: isActive ? 45 : 0 }}
                    className="h-6 w-6 border border-white/20 rounded-full flex items-center justify-center text-white text-sm group-hover:bg-white group-hover:text-black transition-colors"
                >
                    +
                </motion.div>
            </div>

            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                    height: isActive ? 'auto' : 0,
                    opacity: isActive ? 1 : 0
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
            >
                <p className="text-gray-400 leading-relaxed max-w-2xl">
                    {item.content}
                </p>
            </motion.div>
        </motion.div>
    );
}

export default function Studio() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

    return (
        <main className="min-h-screen bg-black selection:bg-white selection:text-black">
            <Navbar />

            {/* Minimalist Hero with Rotating Taglines */}
            <section
                ref={containerRef}
                className="relative min-h-screen flex flex-col items-center justify-center px-6"
            >
                <motion.div
                    style={{ opacity }}
                    className="text-center max-w-4xl"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-20"
                    >
                        <h1 className="text-6xl sm:text-7xl md:text-9xl lg:text-[12rem] font-bold leading-[0.8] tracking-tighter text-white mb-12">
                            AppNest
                        </h1>
                        <div className="h-[1px] w-32 bg-white mx-auto mb-8" />
                        <p className="text-xl md:text-2xl font-light text-gray-400">
                            Hyderabad-based development studio <br />
                            engineering the future of software
                        </p>
                    </motion.div>

                    {/* Stats Row */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 border-t border-white/10 pt-12"
                    >
                        {[
                            { num: "16", label: "Team" },
                            { num: "2024", label: "Founded" },
                            { num: "100%", label: "Success" }
                        ].map((stat, i) => (
                            <div key={i} className="group">
                                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors tabular-nums">
                                    {stat.num}
                                </div>
                                <div className="text-xs font-bold uppercase tracking-widest text-gray-600">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Bottom indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="absolute bottom-12 font-mono text-xs uppercase tracking-widest text-gray-600"
                >
                    Scroll to learn more
                </motion.div>
            </section>

            {/* Metrics Grid */}
            <section className="py-32 px-6 md:px-12 lg:px-24 bg-black">
                <div className="max-w-[90rem]">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-16"
                    >
                        By The Numbers
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-px bg-white/10">
                        {metrics.map((metric, index) => (
                            <MetricCard key={index} metric={metric} index={0} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="py-32 px-6 md:px-12 lg:px-24 bg-black">
                <div className="max-w-[90rem]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid lg:grid-cols-12 gap-16 mb-24"
                    >
                        <div className="lg:col-span-5">
                            <h2 className="text-5xl sm:text-6xl md:text-7xl font-medium leading-[0.9] tracking-tighter text-white">
                                How We <br />
                                <span className="text-gray-700">Work</span>
                            </h2>
                        </div>
                        <div className="lg:col-span-7 flex items-end">
                            <p className="text-xl text-gray-400 leading-relaxed">
                                We have strong opinions about how software should be built.
                                These aren't just values on a wall—they're principles we live by on every project.
                            </p>
                        </div>
                    </motion.div>

                    <div className="space-y-2">
                        {philosophy.map((item, index) => (
                            <PhilosophyCard key={index} item={item} index={0} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Composition */}
            <section className="py-32 px-6 md:px-12 lg:px-24 bg-black">
                <div className="max-w-[90rem]">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-16"
                    >
                        Team Structure
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
                        {team.map((dept, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="bg-black p-16 text-center hover:bg-white/[0.02] transition-colors group"
                            >
                                <div className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-6 group-hover:text-emerald-400 transition-colors tabular-nums">
                                    {dept.count}
                                </div>
                                <div className="text-lg sm:text-xl font-medium text-white mb-2">{dept.role}</div>
                                <div className="font-mono text-xs text-gray-500">{dept.location}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Footer Quote */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-32 text-center"
                    >
                        <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight max-w-4xl mx-auto">
                            "Small team. <span className="text-gray-600">Big impact.</span> <br />
                            That's not a tagline. <span className="text-gray-600">It's a promise.</span>"
                        </blockquote>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
