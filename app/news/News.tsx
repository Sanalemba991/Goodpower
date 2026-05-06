"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, TrendingUp, Clock, Share2, Shield, Activity } from "lucide-react";

const newsItems = [
  {
    title: "Modular Power Conversion for Data Center Hyperscaling",
    category: "Infrastructure",
    date: "May 15, 2026",
    readTime: "10 min read",
    excerpt: "How modular UPS and conversion architectures are enabling 500MW+ data centers to maintain 99.9999% reliability while reducing footprint by 30%.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?w=1200&q=80",
    slug: "modular-power-conversion-data-centers",
    featured: true
  },
  {
    title: "The Future of Solid-State Energy Storage in Industrial Applications",
    category: "Technical Analysis",
    date: "May 12, 2026",
    readTime: "8 min read",
    excerpt: "Exploring the shift from lithium-ion to solid-state chemistry and its implications for large-scale grid stability and safety protocols in industrial hubs.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    slug: "solid-state-energy-storage-industrial"
  },
  {
    title: "Global Energy Storage Trends: 2026 Q2 Report",
    category: "Insights",
    date: "May 10, 2026",
    readTime: "5 min read",
    excerpt: "The integration of advanced AI-driven management systems is reshaping the industry, providing unprecedented efficiency in power distribution.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1000&q=80",
    slug: "energy-storage-trends-2026"
  },
  {
    title: "Expanding Industrial Infrastructure in Southeast Asia",
    category: "Corporate",
    date: "April 28, 2026",
    readTime: "4 min read",
    excerpt: "Goodpower announces major infrastructure expansion across three new strategic hubs to support local manufacturing and renewable integration.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1000&q=80",
    slug: "industrial-power-infrastructure-expansion"
  }
];

export default function News() {
  const featuredPost = newsItems.find(item => item.featured);
  const regularPosts = newsItems.filter(item => !item.featured);

  return (
    <section className="bg-white min-h-screen selection:bg-amber-100 selection:text-amber-900">
      
      {/* ── HERO SECTION ── */}
      <div className="pt-40 pb-24 border-b border-slate-100 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="h-[1px] w-12 bg-amber-500" />
              <span className="text-[11px] font-bold text-amber-600 uppercase tracking-[0.4em]">Intelligence Report 2026</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl lg:text-9xl font-bold text-slate-900 tracking-tight mb-10 leading-[0.85]"
            >
              Industry <br />
              <span className="text-amber-500">Analysis.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl"
            >
              High-precision reporting on the critical infrastructure and power systems shaping the global industrial landscape.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* ── FEATURED POST ── */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-32 group"
            >
              <Link href={`/news/${featuredPost.slug}`}>
                <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
                  <div className="relative aspect-[16/9] lg:aspect-auto lg:h-[600px] overflow-hidden bg-slate-100 border border-slate-100">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title} 
                      className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 bg-white p-8 max-w-xs border-t border-r border-slate-100 hidden lg:block">
                      <div className="flex items-center gap-3 text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-2">
                        <Activity size={14} /> Systems Report
                      </div>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">
                        In-depth technical review of modular power architectures.
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 space-y-8">
                    <div className="flex items-center gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                      <span className="text-amber-600">{featuredPost.category}</span>
                      <div className="w-[1px] h-3 bg-slate-200" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight group-hover:text-amber-600 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-slate-500 text-xl leading-relaxed font-medium">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-10 pt-6">
                      <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                        <Clock size={14} /> {featuredPost.readTime}
                      </div>
                      <div className="flex items-center gap-3 text-slate-900 font-bold text-xs uppercase tracking-[0.2em] group/btn">
                        Explore Analysis
                        <div className="w-10 h-10 border border-slate-200 flex items-center justify-center transition-all group-hover/btn:bg-slate-900 group-hover/btn:text-white">
                          <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* ── POSTS GRID ── */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {regularPosts.map((item, i) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <Link href={`/news/${item.slug}`} className="flex flex-col h-full">
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 mb-10 border border-slate-100">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="space-y-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
                      <span className="text-amber-600">
                        {item.category}
                      </span>
                      <span className="text-slate-400">
                        {item.date}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-tight tracking-tight">
                      {item.title}
                    </h3>
                    
                    <p className="text-slate-500 text-base leading-relaxed font-medium line-clamp-3 mb-auto">
                      {item.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-8 border-t border-slate-100 mt-6">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        <Clock size={12} /> {item.readTime}
                      </div>
                      <div className="w-10 h-10 border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:border-slate-900 group-hover:text-white transition-all">
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
         
        </div>
      </div>

    </section>
  );
}


