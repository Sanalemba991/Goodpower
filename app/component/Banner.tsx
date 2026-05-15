"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const SLIDES = [
  {
    id: 1,
    image: "/banner1.png",

    tagStyle: {
      background: "rgba(80,160,255,0.18)",
      color: "#60a5fa",
      border: "1px solid rgba(80,160,255,0.35)",
    },

    headline: "Advanced LiFePO4 Battery Powerwall",

    subtext:
      "Reliable, long-lasting energy storage solutions designed for homes and industries. Power your future with safe and efficient lithium technology.",

    primaryBtn: "Products",


    // Navigation paths for buttons
    primaryBtnPath: "/products",

    btnGradient: "linear-gradient(135deg,#fde047,#facc15)",
    btnColor: "#1a1200",

    overlay:
      "linear-gradient(135deg,rgba(5,10,25,0.85) 0%,rgba(5,10,25,0.4) 55%,transparent 100%)",
  },

  {
    id: 2,
    image: "/banner2.png",

    tagStyle: {
      background: "rgba(80,220,130,0.18)",
      color: "#4ade80",
      border: "1px solid rgba(80,220,130,0.35)",
    },

    headline: "EV & High Voltage Battery Systems",

    subtext:
      "Powering electric mobility and industrial systems with high-performance EV batteries.",

    primaryBtn: "Contact Us",

    // Navigation paths for buttons
    primaryBtnPath: "/contact",


    btnGradient: "linear-gradient(135deg,#fde047,#facc15)",
    btnColor: "#1a1200",

    overlay:
      "linear-gradient(135deg,rgba(5,30,15,0.85) 0%,rgba(5,30,15,0.4) 55%,transparent 100%)",
  },

  {
    id: 3,
    image: "/banner3.png",

    tagStyle: {
      background: "rgba(255,180,80,0.18)",
      color: "#fbbf24",
      border: "1px solid rgba(255,180,80,0.35)",
    },

    headline: "Complete Solar & Energy Solutions",

    subtext:
      "All-in-one solar charge controller inverters and smart energy systems.",

    primaryBtn: "About Us",

    // Navigation paths for buttons
    primaryBtnPath: "/about",

    btnGradient: "linear-gradient(135deg,#fde047,#facc15)",
    btnColor: "#1a1200",

    overlay:
      "linear-gradient(135deg,rgba(40,25,5,0.85) 0%,rgba(40,25,5,0.35) 55%,transparent 100%)",
  },
];

const DURATION = 5000;
const TICK = 80;

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimers = useCallback((idx: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (progRef.current) clearInterval(progRef.current);

    setProgress(0);

    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
      setProgress(0);
    }, DURATION);

    progRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + 100 / (DURATION / TICK), 100));
    }, TICK);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const next = ((index % SLIDES.length) + SLIDES.length) % SLIDES.length;
      setCurrent(next);
      startTimers(next);
    },
    [startTimers],
  );

  useEffect(() => {
    startTimers(0);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progRef.current) clearInterval(progRef.current);
    };
  }, [startTimers]);

  const currentSlide = SLIDES[current];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>

      <div className="relative w-screen h-[90vh] md:h-screen overflow-hidden shadow-2xl group">
        {SLIDES.map((s, i) => (
          <div
            key={s.id}
            className="absolute inset-0"
            style={{
              opacity: i === current ? 1 : 0,
              transform: i === current ? "scale(1)" : "scale(1.05)",
              transition: "opacity 0.9s ease, transform 0.9s ease",
              pointerEvents: i === current ? "auto" : "none",
              zIndex: i === current ? 1 : 0,
            }}
          >
            {/* Background Image - Full Bleed */}
            <Image
              src={s.image}
              alt={s.headline}
              fill
              priority={i === 0}
              className="object-cover object-center"
              sizes="100vw"
            />

            {/* Gradient Overlay */}
            <div
              className="absolute inset-0 z-10"
              style={{ background: s.overlay }}
            />

            {/* Content */}
            <div
              className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-20 lg:px-32"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <h1
                className="text-white font-black leading-[1.1] mb-4 max-w-xl"
                style={{
                  fontSize: "clamp(36px, 5vw, 64px)",
                }}
              >
                {s.headline}
              </h1>

              <p className="text-white/70 font-light leading-relaxed max-w-sm md:max-w-md mb-10 text-base">
                {s.subtext}
              </p>

              {/* Buttons Container */}
              <div className="flex flex-wrap gap-4">
                {/* Primary Button */}
                <Link href={s.primaryBtnPath}>
                  <button
                    className="inline-flex w-fit items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-lg active:scale-95 [&:hover_span]:translate-x-[2px] [&:hover_span]:-translate-y-[2px] cursor-pointer"
                    style={{ background: s.btnGradient, color: s.btnColor }}
                  >
                    {s.primaryBtn}
                    <span className="transition-transform duration-200">↗</span>
                  </button>
                </Link>

                {/* Secondary Button */}
                
              </div>
            </div>
          </div>
        ))}

        {/* Slide Counter */}
        <div
          className="absolute top-6 right-8 z-30 text-white/60 text-xs tracking-widest"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(SLIDES.length).padStart(2, "0")}
        </div>

        {/* Prev Button - Visible only on Hover */}
        <button
          onClick={() => goTo(current - 1)}
          aria-label="Previous slide"
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full text-white flex items-center justify-center transition-all duration-300 text-3xl opacity-0 group-hover:opacity-100 focus:outline-none cursor-pointer hover:bg-white/10"
        >
          ←
        </button>

        {/* Next Button - Visible only on Hover */}
        <button
          onClick={() => goTo(current + 1)}
          aria-label="Next slide"
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full text-white flex items-center justify-center transition-all duration-300 text-3xl opacity-0 group-hover:opacity-100 focus:outline-none cursor-pointer hover:bg-white/10"
        >
          →
        </button>

        {/* Dot Indicators */}
        
      </div>
    </>
  );
}