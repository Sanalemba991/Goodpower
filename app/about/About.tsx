// app/about/page.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: "Wei Zhang",
    role: "Founder & Chief Engineer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    bio: "Pioneering battery management systems with 20+ years in electrochemistry",
  },
  {
    name: "Sarah Jenkins",
    role: "Global Sales Director",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
    bio: "Expanding clean energy access in European and North American markets",
  },
  {
    name: "Chen Ming",
    role: "Head of R&D",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
    bio: "Leading innovation in high-voltage storage technologies",
  },
  {
    name: "David Müller",
    role: "Quality Assurance Lead",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
    bio: "Ensuring ISO excellence in every cell and module produced",
  },
];

const values = [
  {
    title: "Reliability",
    description:
      "Engineered for longevity. Our LiFePO4 solutions undergo rigorous testing to ensure safety and performance over 6000+ life cycles.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description:
      "From EV power to home Powerwalls, we integrate the latest BMS technology for smarter, safer energy storage.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Sustainability",
    description:
      "Committed to a greener planet through clean energy storage solutions that reduce carbon footprints globally.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Global Service",
    description:
      "Warehouses and support teams across Europe, America, and Asia providing rapid delivery and technical support.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
  },
];

const stats = [
  { number: 12, suffix: "+", label: "Years Manufacturing" },
  { number: 1, suffix: "GWh+", label: "Annual Production" },
  { number: 80, suffix: "+", label: "Countries Served" },
  { number: 1000, suffix: "+", label: "Cycle Life (Cycles)" },
];

interface AnimatedCounterProps {
  end: number;
  suffix: string;
  label: string;
}

function AnimatedCounter({ end, suffix, label }: AnimatedCounterProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (inView && !hasStarted) {
      setHasStarted(true);
    }
  }, [inView, hasStarted]);

  return (
    <div ref={ref} className="stat-item group relative">
      <div className="absolute -top-4 left-0 w-10 h-[2px] bg-yellow-500 transition-all duration-500 group-hover:w-20" />
      <div className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-[#1c1917] leading-none">
        {hasStarted ? (
          <>
            <CountUp start={0} end={end} duration={2.5} delay={0.2} />
            {suffix}
          </>
        ) : (
          <>0{suffix}</>
        )}
      </div>
      <div className="mt-4 w-8 h-[2px] bg-stone-200 transition-colors duration-300 group-hover:bg-yellow-500" />
      <p className="mt-4 text-sm text-stone-500 tracking-[0.12em] uppercase font-medium leading-relaxed">
        {label}
      </p>
    </div>
  );
}

export default function About() {
  const pathname = usePathname();
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const innovationRef = useRef(null);
  const teamRef = useRef(null);
  const valuesRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const timer = setTimeout(() => {
      try {
        const heroTl = gsap.timeline();
        heroTl.from(".hero-line", {
          y: 100,
          opacity: 0,
          duration: 1.2,
          stagger: 0.1,
          ease: "power3.out",
        });
        heroTl.from(
          ".hero-fade",
          {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.5",
        );

        gsap.from(".story-text", {
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
        });

        gsap.from(".story-image", {
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
          scale: 0.9,
          opacity: 0,
          duration: 1.4,
          ease: "power2.out",
        });

        // Innovation section animations
        gsap.from(".innovation-text", {
          scrollTrigger: {
            trigger: innovationRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power2.out",
        });

        gsap.from(".innovation-img", {
          scrollTrigger: {
            trigger: innovationRef.current,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
          scale: 0.95,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
        });

        gsap.from(".team-card", {
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
          y: 80,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power2.out",
        });

        gsap.from(".value-card", {
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        });
      } catch (error) {
        console.error("GSAP Error:", error);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pathname]);

  return (
    <main className="bg-[#f4f2ef] text-[#1c1917] overflow-hidden">
      {/* ── Hero Section ── */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative px-6 py-32"
      >
        <div className="text-center max-w-5xl mx-auto">
          <div className="overflow-hidden mb-6">
            <span className="hero-line inline-block text-xs font-bold uppercase tracking-[0.3em] text-stone-500">
              Energy Storage Solutions
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-8">
            <span className="hero-line inline-block overflow-hidden">
              <span className="inline-block">Powering</span>
            </span>
            <br />
            <span className="hero-line inline-block overflow-hidden">
              <span className="inline-block">Your</span>
            </span>
            <span className="hero-line inline-block overflow-hidden text-yellow-600">
              <span className="inline-block ml-4">Future</span>
            </span>
          </h1>
          <p className="hero-fade text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Leading manufacturer of LiFePO4 batteries. From residential
            Powerwalls to EV battery systems, we engineer reliable power for a
            sustainable tomorrow.
          </p>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hero-fade">
          <div className="w-px h-16 bg-gradient-to-b from-stone-300 to-transparent mx-auto mb-4 animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500">
            Scroll
          </span>
        </div>

        <div className="absolute top-20 left-10 w-20 h-20 border border-yellow-200 rounded-full opacity-30" />
        <div className="absolute bottom-40 right-20 w-32 h-32 border border-stone-300 opacity-20" />
      </section>

      {/* ── Story Section ── */}
      <section ref={storyRef} className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="story-text text-xs font-bold uppercase tracking-[0.3em] text-stone-500 block mb-6">
                About Goodpower
              </span>
              <h2 className="story-text text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
                Engineered for excellence, built for durability
              </h2>
              <div className="space-y-6 text-stone-600">
                <p className="story-text text-lg leading-relaxed">
                  Established in Shenzhen, Goodpower has grown into a premier
                  supplier of advanced energy storage solutions. We specialize
                  in LiFePO4 technology, delivering safe, long-lasting power for
                  homes, electric vehicles, and industrial applications.
                </p>
                <p className="story-text text-lg leading-relaxed">
                  Our diverse product range includes Powerwalls, EV Batteries,
                  High Voltage Storage, and All-in-One Solar Inverters. We
                  empower businesses and homeowners to achieve energy
                  independence with cutting-edge technology.
                </p>
                <p className="story-text text-lg leading-relaxed">
                  With strict quality control and advanced R&amp;D capabilities,
                  we serve clients across 80+ countries, driving the global
                  transition to clean energy.
                </p>
              </div>
            </div>
            <div className="story-image relative">
              <div className="aspect-[4/5] relative overflow-hidden rounded-sm">
                <Image
                  src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&h=1000&fit=crop"
                  alt="Goodpower Manufacturing Facility"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 border border-yellow-300 -z-10" />
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-yellow-100 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Continuous Innovation Section ── */}
      <section ref={innovationRef} className="py-24 px-6 md:px-12 bg-[#edeae6]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.75fr_1.1fr] gap-2.5 items-stretch lg:min-h-[780px]">
          {/* Left Column — large image + 2 small */}
          <div className="flex flex-col gap-2.5 h-full">
            <div className="innovation-img relative flex-[2.3] min-h-0 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&fit=crop"
                alt="Business collaboration"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="flex gap-2.5 flex-1">
              <div className="innovation-img relative w-1/2 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&fit=crop"
                  alt="R&D Lab"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="innovation-img relative w-1/2 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&fit=crop"
                  alt="Our team"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Center Column — text */}
          <div className="flex flex-col justify-center items-start px-8 py-10 lg:py-0">
            <span className="innovation-text text-xs font-bold uppercase tracking-[0.3em] text-stone-500 block mb-5">
              Our Approach
            </span>

            <h2 className="innovation-text text-2xl md:text-3xl font-bold tracking-tight leading-snug mb-5">
              Continuous Innovation and Improvement
            </h2>

            <div className="innovation-text w-9 h-0.5 bg-yellow-600 mb-5" />

            <p className="innovation-text text-stone-600 leading-relaxed text-sm">
              From R&amp;D breakthroughs to manufacturing excellence, we
              relentlessly push the boundaries of what energy storage can
              achieve — delivering smarter, safer, and more sustainable
              solutions every year.
            </p>
          </div>

          {/* Right Column — 2 stacked images */}
          <div className="flex flex-col gap-2.5 h-full">
            <div className="innovation-img relative flex-1 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1764054655220-99548fc12fe3?w=500&auto=format&fit=crop&q=60"
                alt="Factory quality inspection"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="innovation-img relative flex-1 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&fit=crop"
                alt="Warehouse and logistics"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Section ── */}
      <section ref={statsRef} className="py-28 px-6 md:px-12 bg-white relative">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent" />

        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <span className="stat-item text-xs font-bold uppercase tracking-[0.3em] text-stone-400 block mb-4">
              By The Numbers
            </span>
            <h2 className="stat-item text-3xl md:text-4xl font-bold tracking-tight text-[#1c1917]">
              Scale You Can Trust
            </h2>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8">
            {stats.map((stat, index) => (
              <AnimatedCounter
                key={index}
                end={stat.number}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>

          {/* Bottom decorative line */}
          <div className="mt-20 flex items-center gap-4 justify-center">
            <div className="w-12 h-px bg-stone-300" />
            <div className="w-2 h-2 rounded-full border border-yellow-500" />
            <div className="w-12 h-px bg-stone-300" />
          </div>
        </div>
      </section>
      <section className="py-32 px-6 md:px-12 bg-[#1c1917] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Ready to power your business?
          </h2>
          <p className="text-stone-400 text-lg mb-12 max-w-2xl mx-auto">
            Partner with a manufacturer you can trust. Get wholesale pricing,
            OEM/ODM support, and technical consultation for your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-12 py-4 bg-yellow-500 text-white text-xs uppercase tracking-widest font-bold hover:bg-yellow-600 transition-colors duration-300"
            >
              Request a Quote
            </Link>
            <Link
              href="/products"
              className="inline-block px-12 py-4 border border-white/20 text-xs uppercase tracking-widest font-bold hover:bg-white/10 transition-colors duration-300"
            >
              View Catalog
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}