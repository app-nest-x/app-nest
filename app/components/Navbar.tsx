'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
    { name: 'Work', href: '/work' },
    { name: 'Expertise', href: '/expertise' },
    { name: 'Studio', href: '/studio' },
    { name: 'Insights', href: '/insights' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500",
                    scrolled ? "py-3 md:py-4" : "py-4 md:py-6"
                )}
            >
                <div
                    className={cn(
                        "relative flex items-center justify-between transition-all duration-500 ease-[0.16,1,0.3,1]",
                        scrolled
                            ? "w-[95%] md:w-[90%] max-w-5xl rounded-full bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl px-4 md:px-6 py-3"
                            : "w-[95%] md:w-full max-w-7xl bg-transparent border-transparent px-4 md:px-6 py-3 md:py-4"
                    )}
                >
                    {/* Logo/Brand */}
                    <Link href="/" className="group flex items-center gap-2 md:gap-3 z-10 relative">
                        <div className="relative h-8 w-8 md:h-9 md:w-9 overflow-hidden rounded-lg bg-gradient-to-br from-white to-gray-200 text-black flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <span className="font-bold text-xs md:text-sm">AN</span>
                        </div>
                        <motion.span
                            className="font-semibold text-xs md:text-sm tracking-[0.3em] text-white uppercase"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            APP NEST
                        </motion.span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "relative px-4 py-2 text-xs font-medium uppercase tracking-widest transition-all duration-300 rounded-full",
                                        isActive
                                            ? "text-white"
                                            : "text-gray-400 hover:text-white hover:bg-white/5"
                                    )}
                                >
                                    <span className="relative z-10">{item.name}</span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="absolute inset-0 rounded-full bg-white/10 border border-white/20"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* CTA Button - Desktop */}
                    <Link
                        href="/contact"
                        className="hidden md:flex group relative overflow-hidden rounded-full bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-black transition-all hover:shadow-lg hover:shadow-white/30 hover:scale-105"
                    >
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">Start Project</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors z-10"
                        aria-label="Toggle menu"
                    >
                        <div className="w-5 h-4 flex flex-col justify-between">
                            <motion.span
                                animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-full h-0.5 bg-white rounded-full origin-center"
                            />
                            <motion.span
                                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                transition={{ duration: 0.2 }}
                                className="w-full h-0.5 bg-white rounded-full"
                            />
                            <motion.span
                                animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-full h-0.5 bg-white rounded-full origin-center"
                            />
                        </div>
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 md:hidden"
                    >
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        {/* Menu Content */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="relative h-full flex flex-col items-center justify-center px-6"
                        >
                            {/* Navigation Links */}
                            <div className="flex flex-col items-center gap-2 mb-12">
                                {navItems.map((item, index) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                                        >
                                            <Link
                                                href={item.href}
                                                className={cn(
                                                    "relative block px-8 py-4 text-2xl font-medium uppercase tracking-wider transition-all duration-300 rounded-2xl",
                                                    isActive
                                                        ? "text-white bg-white/10 border border-white/20"
                                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                                )}
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                <span className="relative z-10">{item.name}</span>
                                                {isActive && (
                                                    <motion.div
                                                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-white/10"
                                                        layoutId="mobile-menu-active"
                                                    />
                                                )}
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* CTA Button - Mobile */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.4 }}
                            >
                                <Link
                                    href="/contact"
                                    className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all hover:shadow-2xl hover:shadow-white/40 hover:scale-105"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">Start Your Project</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </Link>
                            </motion.div>

                            {/* Decorative Elements */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 0.1, scale: 1 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full blur-3xl"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 0.1, scale: 1 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
