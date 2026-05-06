"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Tag, Share2, Clock, Mail, Shield, Download, ChevronRight, Activity } from "lucide-react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

// Mock data matching News.tsx
const newsData = {
  "modular-power-conversion-data-centers": {
    title: "Modular Power Conversion for Data Center Hyperscaling",
    category: "Infrastructure",
    date: "May 15, 2026",
    readTime: "10 min read",
    author: "Ing. Thomas Müller",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?w=1200&q=90",
    content: `
      <p>As the global demand for AI compute capacity skyrockets, the infrastructure supporting these massive data centers is facing unprecedented pressure. Hyperscalers are no longer looking for standard power systems; they are demanding modular, high-precision conversion architectures that can scale at the speed of software.</p>
      
      <h2>The Shift to Modular Architectures</h2>
      <p>Traditional monolithic UPS systems are becoming a bottleneck in rapid deployments. Our research shows that modular architectures allow for a 'pay-as-you-grow' model, where power blocks can be added in 2.5MW increments without interrupting live operations.</p>

      <blockquote>
        "Reliability in the hyperscale era isn't just about preventing failure; it's about the speed of recovery and the precision of the power delivery under extreme load swings."
      </blockquote>

      <h2>Efficiency and Footprint Optimization</h2>
      <p>By moving to high-frequency silicon carbide (SiC) switching in our latest conversion units, we have achieved 98.5% efficiency in double-conversion mode. This efficiency gain, combined with the modular design, reduces the required physical footprint by 30%, allowing more room for compute racks.</p>
      
      <p>The Phoenix Project in northern Europe recently implemented this architecture, successfully managing a 500MW load with a 99.9999% uptime record over the first quarter of 2026.</p>
    `
  },
  "solid-state-energy-storage-industrial": {
    title: "The Future of Solid-State Energy Storage in Industrial Applications",
    category: "Technical Analysis",
    date: "May 12, 2026",
    readTime: "8 min read",
    author: "Dr. Sarah Chen",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=90",
    content: `
      <p>The landscape of energy storage is undergoing a seismic shift as we move into the second half of 2026. The integration of solid-state batteries and advanced AI-driven management systems has pushed the efficiency of industrial storage systems to unprecedented heights.</p>
      
      <h2>The Rise of Solid-State Technology</h2>
      <p>One of the most significant trends we've observed this year is the commercial viability of solid-state battery systems. These units offer higher energy density and improved safety profiles compared to traditional lithium-ion solutions, making them ideal for high-density urban environments and mission-critical industrial sites.</p>

      <h2>AI and Grid Stability</h2>
      <p>Artificial Intelligence is no longer just a buzzword in energy management. Today's systems use predictive analytics to balance grid loads in real-time, anticipating peak demand before it occurs and optimizing discharge cycles to extend hardware life by up to 40%.</p>
    `
  },
  "energy-storage-trends-2026": {
    title: "Global Energy Storage Trends: 2026 Q2 Report",
    category: "Insights",
    date: "May 10, 2026",
    readTime: "5 min read",
    author: "Marcus Thorne",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=90",
    content: `
      <p>The second quarter of 2026 has revealed several key shifts in the global energy storage market. As nations race toward 2030 sustainability targets, the demand for long-duration energy storage (LDES) has reached an all-time high.</p>
      
      <h2>Market Dynamics</h2>
      <p>We are seeing a move away from short-cycle storage toward multi-day discharge capabilities. This is driven by the increasing penetration of offshore wind and large-scale solar arrays that require significant buffering to maintain baseline grid stability.</p>
    `
  },
  "industrial-power-infrastructure-expansion": {
    title: "Expanding Industrial Infrastructure in Southeast Asia",
    category: "Corporate",
    date: "April 28, 2026",
    readTime: "4 min read",
    author: "Elena Rodriguez",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=90",
    content: `
      <p>Southeast Asia is rapidly becoming the world's next industrial powerhouse. To support this growth, Goodpower is announcing a major infrastructure expansion across three new strategic hubs in Vietnam, Thailand, and Indonesia.</p>
      
      <h2>Supporting Local Manufacturing</h2>
      <p>Our new facilities will provide specialized power conversion systems tailored to the unique climate and humidity challenges of the region. This localized approach ensures maximum uptime for manufacturing partners.</p>
    `
  }
};

export default function NewsDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = newsData[slug as keyof typeof newsData];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center space-y-8">
          <h1 className="text-5xl font-bold text-slate-900 tracking-tight">Post Not Found</h1>
          <Link href="/news" className="inline-flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700 transition-colors uppercase tracking-widest text-sm">
            <ArrowLeft size={16} /> Return to Intelligence
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-white text-slate-900 selection:bg-amber-100 selection:text-amber-900">
      <Navbar />

      <article className="pt-48 pb-32">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-[1fr_380px] gap-24 items-start">

            {/* Main Content Area */}
            <div className="space-y-16">

              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-10"
              >
                <Link href="/news" className="inline-flex items-center gap-3 text-slate-400 font-bold text-[10px] uppercase tracking-[0.3em] hover:text-amber-600 transition-colors">
                  <ArrowLeft size={14} /> Back to Insights
                </Link>

                <div className="space-y-8">
                  <div className="flex items-center gap-4 text-[11px] font-bold text-amber-600 uppercase tracking-[0.2em]">
                    <span className="bg-amber-50 px-4 py-1.5 border-l-2 border-amber-500">
                      {post.category}
                    </span>
                    <div className="w-[1px] h-4 bg-slate-200" />
                    <span className="text-slate-400">{post.date}</span>
                  </div>

                  <h1 className="text-6xl lg:text-8xl font-bold text-slate-900 tracking-tighter leading-[1] mb-10">
                    {post.title}
                  </h1>

                  <div className="flex items-center gap-6 pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-900 flex items-center justify-center text-white font-bold text-xs uppercase">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm tracking-tight">{post.author}</p>
                        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Lead Engineer / Analysis</p>
                      </div>
                    </div>
                    <div className="ml-auto flex items-center gap-3 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                      <Clock size={14} /> {post.readTime}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="aspect-[21/9] overflow-hidden bg-slate-100 border border-slate-100"
              >
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </motion.div>

              {/* Body Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="prose prose-slate prose-xl max-w-none 
                  prose-headings:text-slate-900 prose-headings:font-bold prose-headings:tracking-tight
                  prose-p:text-slate-600 prose-p:leading-relaxed prose-p:font-medium
                  prose-h2:text-4xl prose-h2:mt-24 prose-h2:mb-10 prose-h2:tracking-tighter
                  prose-blockquote:border-l-4 prose-blockquote:border-amber-500 prose-blockquote:bg-slate-50 prose-blockquote:py-10 prose-blockquote:px-12 prose-blockquote:text-2xl prose-blockquote:text-slate-900 prose-blockquote:font-bold prose-blockquote:italic prose-blockquote:leading-tight
                  prose-strong:text-slate-900
                  prose-img:border prose-img:border-slate-100"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Technical Sidebar */}
            <aside className="sticky top-40 space-y-8">
              {/* High-End Consultation CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-slate-900" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 blur-[100px] -mr-32 -mt-32 group-hover:bg-amber-500/30 transition-colors duration-1000" />

                {/* Technical Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

                <div className="relative p-10 space-y-12 border border-slate-800">
                  <div className="space-y-6">
                    <div className="inline-flex p-4 bg-slate-800/50 border border-slate-700/50">
                      <Shield className="text-amber-500" size={32} />
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-2xl font-bold text-white leading-tight tracking-tight">Technical Consultation.</h4>
                      <p className="text-slate-400 text-sm font-medium leading-relaxed">
                        Engage our senior engineering team for hyperscale power conversion planning and grid-scale reliability analysis.
                      </p>
                    </div>
                  </div>

                  {/* Capability Matrix */}
                  <div className="space-y-6 pt-10 border-t border-slate-800">
                    <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em]">Core Competencies</h5>
                    <div className="space-y-4">
                      {[
                        "500MW+ Scale Planning",
                        "N+2 Redundancy Modeling",
                        "SiC Efficiency Analysis",
                        "Grid Synchronization"
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <div className="w-1 h-1 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                          <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>


                  <Link href="/contact">
                    <button className="w-full py-5 bg-amber-500 hover:bg-amber-400 text-slate-900 text-[10px] font-bold uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 group/btn shadow-[0_10px_30px_-10px_rgba(245,158,11,0.3)]">
                      Initialize Consultation
                      <ChevronRight
                        size={14}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </button>
                  </Link>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Engineering Staff Active</span>
                    </div>
                    <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">v4.1.0</span>
                  </div>
                </div>
              </motion.div>

              {/* Technical Authority Block */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 bg-white border border-slate-100 space-y-6 relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-slate-50" />
                <div className="flex items-center gap-4">
                  <Activity size={16} className="text-amber-500" />
                  <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-[0.3em]">Data Integrity</h4>
                </div>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                  All technical specifications and performance benchmarks are verified against IEEE 1547.1 standards and Goodpower's 2026 internal audit protocols.
                </p>
                <div className="pt-4 flex items-center justify-between border-t border-slate-50">
                  <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">Certified Authority</span>
                  <div className="w-6 h-6 rounded-full bg-slate-50 border border-slate-100" />
                </div>
              </motion.div>
            </aside>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}


