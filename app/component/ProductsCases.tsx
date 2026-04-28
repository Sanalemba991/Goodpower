'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Variants } from 'framer-motion';
const slides = [
  {
    id: 1,
    title: 'Medical Cases',
    subtitle: 'MEDICAL HEALTHCARE',
    description:
      'We provide advanced medical equipment cases using patented technology, delivering reliable protection for healthcare institutions, sensitive medical devices, and mobile medical units operating in demanding environments worldwide.',
    image: 'https://picsum.photos/seed/medical-healthcare/1920/1080.jpg',
  },
  {
    id: 2,
    title: 'Smart Home Cases',
    subtitle: 'SMART HOME',
    description:
      'We provide advanced smart home equipment cases using patented technology, delivering reliable protection for automation systems, connected devices, and modern IoT setups operating in dynamic environments worldwide.',
    image: 'https://picsum.photos/seed/smart-home-tech/1920/1080.jpg',
  },
  {
    id: 3,
    title: 'Power Tool Cases',
    subtitle: 'POWER TOOLS',
    description:
      'We provide advanced power tool equipment cases using patented technology, delivering reliable protection for industrial tools, heavy-duty equipment, and field operations working in extreme conditions worldwide.',
    image: 'https://picsum.photos/seed/power-tools-industrial/1920/1080.jpg',
  },
  {
    id: 4,
    title: 'Military Technical Cases',
    subtitle: 'MILITARY TECHNICAL',
    description:
      'We provide advanced military technical equipment cases using patented technology, delivering reliable protection for defense systems, tactical devices, and mission-critical operations in challenging environments worldwide.',
    image: 'https://picsum.photos/seed/military-helicopter/1920/1080.jpg',
  },
];

export default function ProductsCases() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const goToSlide = useCallback((index: number) => {
    setIsLoading(true);
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Optimized variants with will-change and hardware acceleration
  const slideVariants: Variants = {
    enter: {
      opacity: 0,
      scale: 1.05,
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black group">
      {/* Preload next image */}
      <link 
        rel="preload" 
        as="image" 
        href={slides[(currentSlide + 1) % slides.length].image}
      />
      
      {/* Background Images with AnimatePresence */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
            onLoad={() => setIsLoading(false)}
          />
          {/* Multi-layer overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl w-full mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
            
            {/* Slide Number & Progress Line - RAISED HIGHER relative to other content */}
            <div className="hidden lg:flex flex-col items-start gap-6 translate-y-[-20px] lg:translate-y-[-40px]">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-start gap-4"
              >
                {/* Large slide number - 01, 02, 03, 04 */}
                <span className="text-7xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-br from-white/30 via-white/20 to-transparent bg-clip-text text-transparent tracking-tighter leading-none">
                  {String(currentSlide + 1).padStart(2, '0')}
                </span>
                
                {/* Small progress indicator line */}
                <div className="w-16 h-px bg-white/30 relative overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-white"
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Glass Content Box - positioned lower relative to slide number */}
            <div className="lg:max-w-3xl w-full lg:translate-y-[-20px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 shadow-2xl will-change-transform"
                  style={{
                    // Clip-path for professional diagonal cut
                    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)'
                  }}
                >
                  {/* Subtitle badge */}
                 

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight"
                  >
                    {slides[currentSlide].title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-xl"
                  >
                    {slides[currentSlide].description}
                  </motion.p>

                  {/* Learn More button */}
                  
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>

      {/* Navigation dots - mobile visible, desktop hidden */}
      

      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 
        w-12 h-12 flex items-center justify-center 
        opacity-0 group-hover:opacity-100 transition-all duration-500 
        hover:bg-white/10 rounded-full backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg
          className="w-5 h-5 transform hover:-translate-x-1 transition-transform text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 
        w-12 h-12 flex items-center justify-center 
        opacity-0 group-hover:opacity-100 transition-all duration-500 
        hover:bg-white/10 rounded-full backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg
          className="w-5 h-5 transform hover:translate-x-1 transition-transform text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide counter - subtle bottom right */}
     
    </section>
  );
}