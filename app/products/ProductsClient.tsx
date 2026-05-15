"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Shield, Zap, Activity, ArrowRight } from "lucide-react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { getProducts } from "@/lib/api";
import { Product } from "@/types/product";

export default function ProductsClient() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Synchronizing Systems...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-white text-slate-900 selection:bg-amber-100 selection:text-amber-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-48 pb-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-8">
            <div className="flex items-center gap-4 text-[11px] font-bold text-amber-600 uppercase tracking-[0.2em]">
              <span className="bg-amber-50 px-4 py-1.5 border-l-2 border-amber-500">
                Technical Solutions
              </span>
              <div className="w-[1px] h-4 bg-slate-200" />
              <span className="text-slate-400">Catalogue 2026</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold text-slate-900 tracking-tighter leading-[1]">
              Industrial Power <br />
              <span className="text-slate-300">Architectures.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              Precision-engineered conversion and storage systems designed for the next era of global infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid - Smaller cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex flex-col bg-white border border-slate-100 overflow-hidden hover:border-amber-500/30 transition-colors"
              >
                {/* Image Container - Full image with object-contain to show full product */}
                <div className="aspect-[4/3] overflow-hidden bg-slate-50 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 text-[9px] font-bold text-slate-900 uppercase tracking-widest border border-slate-200">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Content - Smaller padding */}
                <div className="p-5 space-y-4 flex-grow flex flex-col">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-amber-600 transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  <Link href={`/products/${product.slug}`} className="block w-full">
                    <button className="w-full py-3 bg-slate-900 text-white text-[9px] font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-2 group-hover:bg-amber-500 group-hover:text-slate-900 transition-all">
                      View Specifications
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Activity size={14} className="text-amber-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions CTA - Smaller */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 p-12 lg:p-16 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/10 blur-[100px] -mr-48 -mt-48" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tighter leading-tight">
                  Require a Custom <br />
                  <span className="text-amber-500">Power Architecture?</span>
                </h2>
                <p className="text-base text-slate-400 font-medium leading-relaxed">
                  Our engineering team specializes in bespoke solutions for complex industrial challenges. From initial simulation to site commissioning.
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2.5">
                    <Shield className="text-amber-500" size={20} />
                    <div>
                      <p className="text-white font-bold text-xs tracking-tight">Certified Engineering</p>
                      <p className="text-slate-500 text-[9px] uppercase tracking-widest">Global Standards Compliance</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Activity className="text-amber-500" size={20} />
                    <div>
                      <p className="text-white font-bold text-xs tracking-tight">Real-time Analysis</p>
                      <p className="text-slate-500 text-[9px] uppercase tracking-widest">Advanced System Diagnostics</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex lg:justify-end">
                <Link href="/contact">
                  <button className="px-10 py-5 bg-amber-500 hover:bg-amber-400 text-slate-900 text-[10px] font-bold uppercase tracking-[0.4em] transition-all flex items-center gap-3 group">
                    Initialize Consultation
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
