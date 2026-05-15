"use client";

import React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Battery,
  Zap,
  Settings,
  ArrowRight,
  CheckCircle2,
  Users,
  Globe,
  ShieldCheck,
  Cpu,
  Activity,
  Box
} from "lucide-react";
import CountUp from "react-countup";

const solutionsData = [
  {
    id: "energy-storage",
    title: "Energy Storage",
    tagline: "Industrial Reliability",
    slug: "energy-storage-solutions",
    icon: Battery,
    image: "/solution3.png",
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
  { value: 99.9, label: "Uptime %", icon: ShieldCheck }
];

export default function Solution() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <main className="bg-white text-slate-900 selection:bg-amber-100 selection:text-amber-900 font-sans">

      {/* ── HERO SECTION: SOPHISTICATED & PRECISION ── */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 z-0 opacity-[0.03]"
          style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white z-0" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-16 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-3 px-4 py-2 bg-amber-50 rounded-full border border-amber-100"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                  </span>
                  <span className="text-[11px] font-bold text-amber-700 uppercase tracking-widest">Global Power Infrastructure v2.0</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl lg:text-7xl font-light tracking-tight text-slate-900 leading-[1.1]"
                >
                  Engineering the <br />
                  <span className="font-semibold text-amber-500">Next Frontier</span> <br />
                  of Energy Systems.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-lg text-slate-500 leading-relaxed max-w-xl font-medium"
                >
                  Advanced power conversion and intelligent storage solutions designed for mission-critical industrial applications and grid-scale stability.
                </motion.p>
              </div>



              {/* Refined Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-slate-100">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <stat.icon size={14} className="text-amber-500" />
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{stat.label}</p>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 tracking-tighter">
                      <CountUp end={stat.value} decimals={stat.value % 1 !== 0 ? 1 : 0} duration={2.5} />
                      <span className="text-amber-500">{stat.label === "Uptime %" ? "%" : "+"}</span>
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Technical Visualization */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10"
              >
                <div className="aspect-[4/5]  overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100 relative group">
                  <img
                    src="/solution2.png"
                    alt="Industrial Technology"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Overlay Labels */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-2 border border-white/20 shadow-sm">
                    <div className="flex items-center gap-2">
                      <Activity size={12} className="text-emerald-500" />
                      <span className="text-[10px] font-bold text-slate-900">SYSTEM STABLE</span>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 bg-slate-900/90 backdrop-blur px-4 py-4  border border-white/10 shadow-xl max-w-[200px]">
                    <p className="text-white/60 text-[9px] font-bold uppercase tracking-widest mb-1">Architecture</p>
                    <p className="text-white text-xs font-medium leading-tight">Modular DC-coupled storage arrays with AI balancing.</p>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-12 -right-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl z-0"
                />
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-500/5  blur-3xl z-0"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS SECTION: MODERN ALTERNATING ── */}
      <section id="solutions" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-[11px] font-bold text-amber-500 uppercase tracking-[0.4em]">Integrated Schemes</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">Industrial Scale Solutions</h3>
            <div className="h-1 w-20 bg-amber-500 mx-auto mt-6" />
          </div>

          <div className="space-y-40">
            {/* Scheme 01 */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                <div className="absolute -inset-2 bg-slate-100  rotate-1 scale-[1.02] -z-10 group-hover:rotate-0 transition-transform duration-500" />
                <div className="aspect-[4/3]  overflow-hidden shadow-2xl relative">
                  <img
                    src="/solution.png"
                    alt="Energy Storage"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <p className="text-white text-sm font-medium">Click to view technical specifications</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <span className="text-amber-500 font-mono text-xs font-bold tracking-widest uppercase">/ Scheme 01</span>
                  <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Energy Storage System</h2>
                  <p className="text-slate-500 leading-relaxed text-lg">
                    Goodpower delivers bespoke energy storage solutions encompassing R&D, advanced manufacturing, and global after-sales support. Engineered for the most demanding environments.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { t: "Base Station Backup", d: "Uninterruptible power for critical comms." },
                    { t: "Residential Storage", d: "High-density lithium iron phosphate." },
                    { t: "Utility Scale", d: "MWh scale grid balancing units." },
                    { t: "Smart BMS", d: "Cloud-monitored battery management." }
                  ].map((item, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-amber-500" />
                        <h4 className="font-bold text-slate-900 text-sm">{item.t}</h4>
                      </div>
                      <p className="text-slate-400 text-xs ml-6 leading-normal">{item.d}</p>
                    </div>
                  ))}
                </div>


              </motion.div>
            </div>

            {/* Scheme 02 */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:order-2 relative group"
              >
                <div className="absolute -inset-2 bg-amber-50  -rotate-1 scale-[1.02] -z-10 group-hover:rotate-0 transition-transform duration-500" />
                <div className="aspect-[4/3]  overflow-hidden shadow-2xl relative">
                  <img
                    src="./solution1.png"
                    alt="Power Systems"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <p className="text-white text-sm font-medium">Click to view engineering portfolio</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:order-1 space-y-8"
              >
                <div className="space-y-4">
                  <span className="text-amber-500 font-mono text-xs font-bold tracking-widest uppercase">/ Scheme 02</span>
                  <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Integrated Power Infrastructure</h2>
                  <p className="text-slate-500 leading-relaxed text-lg">
                    Complete hardware layers for modern industrial efficiency. We provide integrated power systems and one-stop engineering services for global infrastructure projects.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {["EV Charging", "Robotics", "Power Conversion", "Modular DC", "Industrial Automation"].map(tag => (
                    <span key={tag} className="px-4 py-2 bg-slate-50 border border-slate-100  text-[10px] font-bold text-slate-600 uppercase tracking-widest">{tag}</span>
                  ))}
                </div>

                <div className="p-6 bg-slate-900  space-y-4">
                  <div className="flex items-center gap-3">
                    <Box className="text-amber-500" size={20} />
                    <h4 className="text-white font-bold">Precision OEM/ODM</h4>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Custom manufacturing capabilities for high-voltage DC modules and modular power systems with IP65 rating.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY: CLEAN & NUMERICAL ── */}
      <section id="process" className="py-32 bg-slate-50 relative overflow-hidden">
        {/* Decorative thin lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-slate-200/50 hidden lg:block" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-slate-200/50 hidden lg:block" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-slate-200/50 hidden lg:block" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-16">
              <div className="space-y-6">
                <h2 className="text-[11px] font-bold text-amber-500 uppercase tracking-[0.4em]">Our Workflow</h2>
                <h3 className="text-5xl font-light text-slate-900 leading-tight">
                  The <span className="font-bold">Lifecycle</span> of <br />
                  Excellence.
                </h3>
              </div>

              <div className="space-y-0">
                {[
                  { t: "Discovery", d: "Deep technical analysis, site audit, and feasibility modeling.", i: "01" },
                  { t: "System Design", d: "High-precision CAD engineering and customized architecture.", i: "02" },
                  { t: "Integration", d: "Seamless deployment, testing, and grid synchronization.", i: "03" },
                  { t: "Optimization", d: "Continuous monitoring and AI-driven performance tuning.", i: "04" }
                ].map((step, idx) => (
                  <motion.div
                    key={step.t}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-10 group py-8 border-b border-slate-200 last:border-0"
                  >
                    <span className="text-sm font-mono font-bold text-amber-500 pt-1">{step.i}</span>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-amber-600">{step.t}</h4>
                      <p className="text-slate-500 leading-relaxed font-medium text-sm max-w-md">{step.d}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-amber-500/10  blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative  overflow-hidden shadow-[0_50px_100px_-30px_rgba(0,0,0,0.15)] border-[1px] border-slate-200">
                <img
                  src="/solution3.png"
                  alt="Precision Engineering"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                {/* Tech UI Overlay */}
                <div className="absolute inset-0 bg-slate-900/10 mix-blend-overlay" />
                <div className="absolute top-10 left-10">
                  <Cpu className="text-white/80 animate-pulse" size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


