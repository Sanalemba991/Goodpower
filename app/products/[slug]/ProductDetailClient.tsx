"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Zap, Shield, Activity, ChevronRight, Info } from "lucide-react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { getProductBySlug } from "@/lib/api";
import { Product } from "@/types/product";

export default function ProductDetailClient() {
  const params = useParams();
  const slug = params.slug as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    if (slug) {
      getProductBySlug(slug).then((data) => {
        setProduct(data || null);
        setLoading(false);
      });
    }
  }, [slug]);

  const getProductImage = (productSlug: string) => {
    if (imgError) {
      switch (productSlug) {
        case "prismatic-lfp-cell":
          return "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?w=1200&q=90";
        case "cylindrical-cell":
          return "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=90";
        case "battery-management-system":
          return "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=90";
        default:
          return "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?w=1200&q=90";
      }
    }
    return product?.image || "";
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Accessing Specifications...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center space-y-8">
          <h1 className="text-5xl font-bold text-slate-900 tracking-tight">Product Not Found</h1>
          <Link href="/products" className="inline-flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700 transition-colors uppercase tracking-widest text-sm">
            <ArrowLeft size={16} /> Return to Catalogue
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
          <div className="grid lg:grid-cols-[1fr_420px] gap-24 items-start">
            
            {/* Main Content Area */}
            <div className="space-y-16">
              
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-10"
              >
                <Link href="/products" className="inline-flex items-center gap-3 text-slate-400 font-bold text-[10px] uppercase tracking-[0.3em] hover:text-amber-600 transition-colors">
                  <ArrowLeft size={14} /> Back to Products
                </Link>

                <div className="space-y-8">
                  <div className="flex items-center gap-4 text-[11px] font-bold text-amber-600 uppercase tracking-[0.2em]">
                    <span className="bg-amber-50 px-4 py-1.5 border-l-2 border-amber-500">
                      {product.category}
                    </span>
                    <div className="w-[1px] h-4 bg-slate-200" />
                    <span className="text-slate-400">SKU: GP-{product.id}0026</span>
                  </div>

                  <h1 className="text-6xl lg:text-7xl font-bold text-slate-900 tracking-tighter leading-[1] mb-6">
                    {product.name}
                  </h1>

                  <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
                    {product.description}
                  </p>
                </div>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="aspect-video overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-100 relative group"
              >
                <img 
                  src={getProductImage(slug)} 
                  alt={product.name} 
                  className="w-full h-full object-contain p-8"
                  onError={() => setImgError(true)}
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-500" />
              </motion.div>

              {/* Technical Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="prose prose-slate prose-xl max-w-none 
                  prose-headings:text-slate-900 prose-headings:font-bold prose-headings:tracking-tight
                  prose-p:text-slate-600 prose-p:leading-relaxed prose-p:font-medium
                  prose-h2:text-4xl prose-h2:mt-24 prose-h2:mb-10 prose-h2:tracking-tighter
                  prose-strong:text-slate-900"
                dangerouslySetInnerHTML={{ __html: product.content }}
              />

              {/* Key Features Grid */}
              <div className="pt-16 border-t border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-[0.3em] mb-12 flex items-center gap-3">
                  <Zap className="text-amber-500" size={18} />
                  Performance Metrics
                </h3>
                <div className="grid sm:grid-cols-2 gap-12">
                  {product.features.map((feature, i) => (
                    <div key={i} className="space-y-4">
                      <div className="w-12 h-px bg-amber-500" />
                      <p className="text-2xl font-bold text-slate-900 tracking-tight">{feature}</p>
                      <p className="text-sm text-slate-500 font-medium">Verified under maximum operational load and extreme environmental conditions.</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Specifications Sidebar */}
            <aside className="sticky top-40 space-y-8">
              {/* Technical Specs Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900 text-white border border-slate-800 relative overflow-hidden"
              >
                 <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                
                <div className="relative p-10 space-y-10">
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.4em]">Technical Data</h4>
                    <p className="text-2xl font-bold tracking-tight">Specifications</p>
                  </div>

                  <div className="space-y-6">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{key}</span>
                        <span className="text-sm font-bold text-white">{value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4 pt-6">
                    <Link href="/contact" className="block">
                      <button className="w-full py-5 border border-slate-700 hover:bg-white/5 text-white text-[10px] font-bold uppercase tracking-[0.3em] transition-all">
                        Request Pricing
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Engineering Support Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 bg-slate-50 border border-slate-100 space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white border border-slate-200 flex items-center justify-center">
                    <Shield className="text-amber-500" size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-[0.3em]">Support Tier</h4>
                    <p className="text-sm font-bold text-slate-700">Level 3 Engineering</p>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                  Direct access to our senior design team for integration support and custom firmware configurations for the {product.name}.
                </p>
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Technicians Online</span>
                  </div>
                  <Info size={14} className="text-slate-300" />
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
