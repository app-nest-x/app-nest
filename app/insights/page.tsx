'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { articles as ARTICLE_DATA } from './articles';
import { useState } from 'react';

const articles = ARTICLE_DATA.map((a, i) => ({
    id: String(i + 1).padStart(3, '0'),
    ...a,
}));

const categories = ["All", ...Array.from(new Set(articles.map(a => a.category)))];

function ArticleRow({ article, index }: { article: typeof articles[0], index: number }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative border-t border-white/10 py-12 transition-colors hover:bg-white/[0.02]"
        >
            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
                {/* ID */}
                <span className="font-mono text-xs text-gray-600 w-12 pt-2 hidden sm:block">{article.id}</span>

                {/* Content */}
                <div className="flex-1 w-full">
                    <motion.h3
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-3"
                        animate={{ x: isHovered ? 10 : 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Link href={`/insights/${article.slug}`}>{article.title}</Link>
                    </motion.h3>
                    <motion.p
                        className="text-base sm:text-lg text-gray-500 mb-6"
                        animate={{ x: isHovered ? 10 : 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {article.subtitle}
                    </motion.p>

                    {/* Topics - Revealed on hover */}
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                            opacity: isHovered ? 1 : 0,
                            height: isHovered ? 'auto' : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex gap-3 overflow-hidden"
                    >
                        {article.topics.map((topic, i) => (
                            <motion.span
                                key={topic}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                                transition={{ duration: 0.2 }}
                                className="px-3 py-1 border border-emerald-500/30 rounded-full text-xs font-mono text-emerald-400"
                            >
                                {topic}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>

                {/* Meta Info */}
                <div className="flex sm:flex-col items-start sm:items-end gap-4 pt-2">
                    <div className="text-right">
                        <div className="text-xs font-bold uppercase tracking-widest text-white mb-1">
                            {article.category}
                        </div>
                        <div className="font-mono text-xs text-gray-600">
                            {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-gray-500">{article.readTime} min</span>
                        <motion.div
                            className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center"
                            animate={{
                                borderColor: isHovered ? 'rgb(255,255,255)' : 'rgba(255,255,255,0.2)',
                                backgroundColor: isHovered ? 'rgb(255,255,255)' : 'transparent'
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <svg
                                className={`w-3 h-3 transition-colors ${isHovered ? 'text-black' : 'text-white'}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </motion.div>
                    </div>
                </div>
            </div>

            <motion.div
                className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-900/5 to-teal-900/5 blur-2xl"
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.5 }}
            />
        </motion.div>
    );
}

export default function Insights() {
    const [activeCategory, setActiveCategory] = useState("All");
    const filteredArticles = activeCategory === "All"
        ? articles
        : articles.filter(a => a.category === activeCategory);

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
                            Technical Journal
                        </span>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-16 mb-16">
                        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-medium leading-[0.85] tracking-tighter text-white">
                            Insights
                        </h1>
                        <div className="text-left md:text-right">
                            <div className="text-5xl font-medium text-white mb-2">{filteredArticles.length}</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-gray-600">Articles</div>
                        </div>
                    </div>

                    {/* Category Filter */}
                    <div className="flex gap-3 overflow-x-auto pb-4 border-b border-white/10">
                        {categories.map((cat) => (
                            <motion.button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-colors ${activeCategory === cat
                                    ? 'bg-white text-black'
                                    : 'border border-white/20 text-gray-400 hover:border-white hover:text-white'
                                    }`}
                                whileTap={{ scale: 0.95 }}
                            >
                                {cat}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                <div className="max-w-[90rem] flex flex-col">
                    <AnimatePresence mode="wait">
                        {filteredArticles.map((article, index) => (
                            <ArticleRow key={article.id} article={article} index={index} />
                        ))}
                    </AnimatePresence>
                </div>
            </section>

            <Footer />
        </main>
    );
}
