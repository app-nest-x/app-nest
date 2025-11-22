'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { articles } from '../articles';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const article = articles.find(a => a.slug === slug);
  if (!article) {
    return (
      <main className="min-h-screen bg-black selection:bg-white selection:text-black">
        <Navbar />
        <section className="pt-40 pb-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-[90rem] text-gray-400">Article not found.</div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black selection:bg-white selection:text-black">
      <Navbar />

      <section className="pt-40 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[90rem]">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-emerald-500/50" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">{article.category}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-medium leading-[0.95] tracking-tighter text-white mb-4">{article.title}</h1>
            <p className="text-xl text-gray-400">{article.subtitle}</p>
            <div className="mt-6 flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-gray-600">
              <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              <span>{article.readTime} min read</span>
            </div>
            <div className="mt-6 flex gap-3">
              {article.topics.map((t) => (
                <span key={t} className="px-3 py-1 border border-emerald-500/30 rounded-full text-[10px] font-mono uppercase tracking-widest text-emerald-400">{t}</span>
              ))}
            </div>
          </div>

          {article ? (
            <div className="prose prose-invert max-w-5xl">
              {article.content.map((p, i) => (
                <motion.p key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-lg text-gray-300 leading-relaxed mb-6">
                  {p}
                </motion.p>
              ))}
            </div>
          ) : (
            <div className="text-gray-400">Article not found.</div>
          )}

          <div className="mt-16">
            <Link href="/insights" className="text-sm font-bold uppercase tracking-widest text-white border-b border-white/30 pb-1">Back to Insights</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}