"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Battery, 
  Zap, 
  Settings, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Globe, 
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  Cpu
} from "lucide-react";
import CountUp from "react-countup";

const solutionsData = [
  {
    id: "energy-storage",
    title: "Energy Storage",
    tagline: "Industrial Reliability",
    slug: "energy-storage-solutions",
    icon: Battery,
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=90",
    description: "End-to-end energy storage systems engineered for grid-scale stability and residential independence.",
    features: ["Grid-Scale Balancing", "High-Voltage DC", "Smart Management"],
    color: "amber"
  },
  {
    id: "power-systems",
    title: "Power Systems",
    tagline: "High Efficiency",
    slug: "power-system-solutions",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=90",
    description: "Integrated power conversion modules for industrial automation and electric vehicle infrastructure.",
    features: ["E-Mobility Power", "Custom OEM/ODM", "IP65 Rated"],
    color: "blue"
  },
  {
    id: "ev-infrastructure",
    title: "EV Infrastructure",
    tagline: "Future Mobility",
    slug: "ev-infrastructure-solutions",
    icon: Settings,
    image: "https://images.unsplash.com/photo-1593941707882-d5f7a2abdf56?w=1200&q=90",
    description: "Cutting-edge charging infrastructure with ultra-fast delivery and intelligent fleet software.",
    features: ["350kW Fast DC", "OCPP 2.0.1", "Fleet Control"],
    color: "emerald"
  }
];

const stats = [
  { value: 150, label: "Specialists", icon: Users },
  { value: 2000, label: "Installations", icon: CheckCircle2 },
  { value: 50, label: "Countries", icon: Globe },
  { value: 99, label: "Uptime %", icon: ShieldCheck }
];

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900 selection:bg-amber-100 selection:text-amber-900">
      
      {/* ── NAVIGATION (In-page placeholder) ── */}
     

      {/* ── IMAGE COLLAGE HERO SECTION (REFINED SOLUTIONS) ── */}
      <section className="relative pt-20 pb-16 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Image Collage (Smaller) */}
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
              
              <div className="grid grid-cols-2 gap-3 relative z-10 scale-90 origin-left">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-3 pt-8"
                >
                  <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-lg relative group">
                    <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80" alt="Solutions" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-[2rem] overflow-hidden shadow-lg relative">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" alt="Expertise" className="w-full h-full object-cover" />
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-3"
                >
                  <div className="aspect-square rounded-[2rem] overflow-hidden shadow-lg relative">
                    <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80" alt="Tech" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-lg relative group">
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80" alt="Grid" className="w-full h-full object-cover" />
                  </div>
                </motion.div>
              </div>

              {/* Floating Badge (Smaller) */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center p-1.5 z-20"
              >
                <div className="w-full h-full rounded-full border border-dashed border-amber-500 flex items-center justify-center">
                  <div className="text-[8px] font-black text-amber-500 uppercase tracking-tighter text-center">
                    Goodpower <br /> Solutions
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Content & Stats */}
            <div className="space-y-8">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-2 text-amber-500 font-bold text-[10px] uppercase tracking-widest"
                >
                  <Zap size={12} className="fill-amber-500" />
                  Leading Power Infrastructure
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tighter"
                >
                  Transforming <span className="text-amber-500">Industry</span> <br />
                  with <span className="text-amber-500">Precision Systems</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-base text-slate-500 leading-relaxed max-w-xl font-medium"
                >
                  Engineering global-scale energy storage and power systems designed for peak efficiency and industrial-grade reliability.
                </motion.p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-100">
                {stats.slice(0, 3).map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <h3 className="text-2xl font-black text-slate-900 leading-none mb-1">
                      <CountUp end={stat.value} duration={3} />+
                    </h3>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ALTERNATING SCHEMES SECTION (CLEANER) ── */}
      <section id="solutions" className="py-24 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-6 space-y-32">
          
          {/* Energy Storage Scheme */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl group"
            >
              <img 
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1000&q=90" 
                alt="Energy Storage" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">Energy Storage Scheme</h2>
              <div className="space-y-4 text-slate-500 leading-relaxed font-medium">
                <p>
                  Goodpower delivers bespoke energy storage solutions encompassing R&D, advanced manufacturing, and global after-sales support.
                </p>
                <p>
                  Our systems are engineered for base station backup, residential storage, and high-voltage DC applications.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Base Stations", "Residential", "High-Voltage DC"].map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-amber-500 uppercase tracking-widest">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Power Scheme */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:order-2 relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl group"
            >
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&q=90" 
                alt="Power Systems" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:order-1 space-y-6"
            >
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">Power Scheme</h2>
              <div className="space-y-4 text-slate-500 leading-relaxed font-medium">
                <p>
                  With deep industrial expertise, we offer integrated power systems and one-stop engineering services for the global infrastructure market.
                </p>
                <p>
                  From EV infrastructure to robotic automation, we provide the hardware layers for modern industrial efficiency.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["EV Infrastructure", "Robotics", "Power Conversion"].map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-amber-500 uppercase tracking-widest">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>




      {/* ── METHODOLOGY SECTION (REFINED) ── */}
      <section id="process" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <h2 className="text-5xl font-black text-slate-900 leading-tight">
                Our <span className="text-amber-500">Lifecycle</span> Engineering
              </h2>
              
              <div className="space-y-10">
                {[
                  { t: "Discovery", d: "Deep technical analysis and feasibility modeling.", i: "01" },
                  { t: "Design", d: "High-precision CAD and system-wide engineering.", i: "02" },
                  { t: "Integration", d: "Seamless deployment and grid-connection testing.", i: "03" }
                ].map(step => (
                  <div key={step.t} className="flex gap-8 group">
                    <span className="text-6xl font-black text-slate-100 group-hover:text-amber-100 transition-colors">{step.i}</span>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900 mb-2">{step.t}</h4>
                      <p className="text-slate-600 leading-relaxed font-medium">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-amber-500/5 rounded-[4rem] blur-2xl" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-slate-50">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=90" 
                  alt="Precision Engineering" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>  
    </main>
  );
}

