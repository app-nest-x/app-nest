'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
    { id: 'app', label: 'Mobile App' },
    { id: 'web', label: 'Web Platform' },
    { id: 'ai', label: 'AI Integration' },
    { id: 'other', label: 'Other' }
];

export default function Contact() {
    const [selectedService, setSelectedService] = useState<string | null>(null);

    return (
        <main className="min-h-screen bg-black selection:bg-white selection:text-black">
            <Navbar />

            <section className="pt-40 pb-24 px-6 md:px-12 lg:px-24 min-h-screen flex flex-col justify-center">
                <div className="max-w-[90rem] mx-auto w-full grid lg:grid-cols-12 gap-20 lg:gap-32">

                    {/* Left: The Statement */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-6xl md:text-8xl font-medium tracking-tighter text-white mb-12 leading-[0.9]">
                                Let's <br />
                                <span className="text-gray-600">collaborate.</span>
                            </h1>

                            <div className="space-y-12">
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Get in touch</p>
                                    <a href="mailto:zyberusx@gmail.com" className="text-2xl md:text-3xl text-white hover:text-gray-400 transition-colors border-b border-white/20 pb-1">
                                        zyberusx@gmail.com
                                    </a>
                                </div>

                                <div>
                                    <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Visit</p>
                                    <p className="text-xl text-white leading-relaxed">
                                        Hitech City, Hyderabad<br />
                                        Telangana, India
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: The Minimal Form */}
                    <div className="lg:col-span-7">
                        <motion.form
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-16"
                        >
                            <div className="space-y-12">
                                <div className="group">
                                    <label className="block text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 group-focus-within:text-white transition-colors">
                                        01. What's your name?
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-2xl md:text-4xl text-white placeholder-white/30 focus:border-white focus:outline-none transition-all"
                                        placeholder="Rayan Khan"
                                    />
                                </div>

                                <div className="group">
                                    <label className="block text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 group-focus-within:text-white transition-colors">
                                        02. How can we reach you?
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-2xl md:text-4xl text-white placeholder-white/30 focus:border-white focus:outline-none transition-all"
                                        placeholder="rayankhan@company.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">
                                        03. What are you building?
                                    </label>
                                    <div className="flex flex-wrap gap-x-8 gap-y-4">
                                        {services.map((service) => (
                                            <button
                                                key={service.id}
                                                type="button"
                                                onClick={() => setSelectedService(service.id)}
                                                className={`text-2xl md:text-4xl transition-colors duration-300 ${selectedService === service.id
                                                    ? 'text-white'
                                                    : 'text-white/20 hover:text-white/60'
                                                    }`}
                                            >
                                                {service.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="group">
                                    <label className="block text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 group-focus-within:text-white transition-colors">
                                        04. Tell us more
                                    </label>
                                    <textarea
                                        rows={1}
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-2xl md:text-4xl text-white placeholder-white/30 focus:border-white focus:outline-none transition-all resize-none"
                                        placeholder="Project details, budget, timeline..."
                                        onInput={(e) => {
                                            const target = e.target as HTMLTextAreaElement;
                                            target.style.height = 'auto';
                                            target.style.height = target.scrollHeight + 'px';
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="pt-8">
                                <button
                                    type="submit"
                                    className="group flex items-center gap-6 text-white"
                                >
                                    <div className="h-16 w-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                                        <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                    </div>
                                    <span className="text-xl font-medium tracking-wide">Send Request</span>
                                </button>
                            </div>
                        </motion.form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
