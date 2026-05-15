'use client';

import React, { useState } from 'react';
import { Play, ArrowRight, BatteryCharging, ShieldCheck, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Variants } from 'framer-motion';
const Fun: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section className="relative bg-white text-gray-800 overflow-hidden font-sans">

      {/* Subtle Background Texture */}
      <div className="absolute inset-0 z-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-12 lg:py-20">

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* --- Left Column: Visuals --- */}
          <motion.div
            className="col-span-1 lg:col-span-6 relative"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >

            {/* Main Image Card */}
            <div className="relative group  overflow-hidden shadow-lg ">
              <img
                src="./home1.png"
                alt="FunPack Facility"
                className="w-full h-[300px] lg:h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Badge Overlay */}
              <motion.div
                className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full py-1.5 px-3 shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Award className="w-3.5 h-3.5 text-yellow-600" />
                <span className="text-[10px] font-bold tracking-wide uppercase text-gray-700">High-Tech Enterprise</span>
              </motion.div>

              {/* Company Info Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Good Power</h3>
                  <p className="text-white/70 text-xs">Chuangye 1st Street, Dongguan, Guangdong, China</p>
                </div>
                <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm rounded-md py-1 px-2 border border-white/10">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[10px] font-medium text-white">ISO 9001</span>
                </div>
              </div>
            </div>

            {/* Secondary Image - Floating Animation */}
            <motion.div
              className="hidden lg:block absolute -bottom-4 -right-4 w-48 h-36  overflow-hidden border-2 border-white shadow-xl z-20"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: -2 }}
            >
              <img
                src="./home2.png"
                alt="Assembly Line"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* --- Right Column: Content --- */}
          <div className="col-span-1 lg:col-span-6 flex flex-col justify-center">

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              {/* Eyebrow Tag */}
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4">
                <div className="w-6 h-0.5 bg-yellow-500" />
                <span className="text-yellow-500 font-semibold text-xs tracking-widest uppercase">Core Strength</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-4">
                Professional Li-ion <br />
                <span className="text-yellow-500">Battery Solutions</span>
              </motion.h1>

              {/* Description */}
              <motion.p variants={itemVariants} className="text-gray-500 text-sm leading-relaxed mb-8 max-w-lg border-l-2 border-gray-200 pl-4">
                Dedicated to R&D and manufacturing of high-performance lithium battery packs. We deliver reliable power solutions for automotive, industrial, and consumer applications globally.
              </motion.p>

              {/* CTA Buttons */}


              {/* Stats Grid */}
              <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 border-t border-gray-100 pt-6">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-gray-900">15+</span>
                  <span className="text-gray-400 text-xs mt-0.5">Years Exp.</span>
                </div>
                <div className="flex flex-col border-l border-r border-gray-100 px-6">
                  <span className="text-2xl font-bold text-gray-900">500+</span>
                  <span className="text-gray-400 text-xs mt-0.5">Clients</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-yellow-500 mb-1">
                    <BatteryCharging className="w-4 h-4" />
                    <span className="text-xs font-semibold">OEM/ODM</span>
                  </div>
                  <span className="text-gray-400 text-xs">Custom Services</span>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Video Modal - AnimatePresence for entry/exit */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer"
            onClick={() => setIsVideoPlaying(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative w-full max-w-3xl aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-white/10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
                  <p className="text-gray-400 text-sm">Video Player Placeholder</p>
                  <p className="text-xs text-gray-600 mt-1">Click backdrop to close</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Fun;