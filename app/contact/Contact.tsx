"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Variants } from "framer-motion";
/* ─────────────────────────── DATA ─────────────────────────── */

const NAV_LINKS = ["Solutions", "Projects", "About", "Contact"];

const STATS = [
  { value: 500, label: "Projects Delivered", suffix: "+" },
  { value: 150, label: "Clients Pan-India", suffix: "+" },
  { value: 4, label: "Office Locations", suffix: "" },
  { value: 18, label: "Years of Excellence", suffix: "+" },
];

const CHANNELS = [
  {
    label: "Call Us",
    primary: "+ 86 18230571661",
    secondary: "+91 7022429001",
    desc: "Mon–Sat · 9 AM – 6 PM IST",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-[18px] h-[18px] stroke-inherit"
      >
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127 1.04.362 2.05.7 3.03a2 2 0 01-.45 2.11L6.09 8.22a16 16 0 006.29 6.29l1.18-1.18a2 2 0 012.11-.45c.98.337 1.99.572 3.03.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: "Email Us",
    primary: "sales@goodpowercn.com",
    secondary: " srtronioxindia@gmail.com",
    desc: "Global Corporate Inquiries",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-[18px] h-[18px] stroke-inherit"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-9.7 6.5a1 1 0 01-1.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "Visit Us",
    primary: "Goodpower Technology Private Limited, Bengaluru, India",
    secondary:
      "1st Main Lakshmipura Road,Near National Public School Jalahalli,  Abbigere, Bengaluru, Karnataka 560013",
    desc: "By appointment preferred",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-[18px] h-[18px] stroke-inherit"
      >
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Working Hours",
    primary: "Mon – Sat: 9:00 – 18:00",
    secondary: "Sunday: Closed",
    desc: "Public holidays per GOI calendar",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-[18px] h-[18px] stroke-inherit"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

// India - Single Office
const INDIA_OFFICE = {
  num: "01",
  tag: "Headquarters",
  city: "Bengaluru",
  address:
    "1st Main Lakshmipura Road,Near National Public School Jalahalli,  Abbigere, Bengaluru, Karnataka 560013",
  phone: "+91 7022429001",
  email: "srtronioxindia@gmail.com",
};

// China - Single Office
const CHINA_OFFICE = {
  num: "01",
  tag: "Global Headquarters",
  city: "Guangdong",
  address:
    "Room 303, Building 2, Chuangye 1st Street, Dongguan, Guangdong, China",
  phone: "+ 86 18230571661",
  email: "sales@goodpowercn.com",
};

const QUICK_LINKS = [
  { name: "Request a Custom Quote", sub: "Tailored to your project needs" },
  { name: "Schedule a Consultation", sub: "Free 30-minute expert call" },
  { name: "Download Product Catalogue", sub: "PDF · Updated 2024" },
  { name: "Find a Service Centre", sub: "Nearest support location" },
];

const DEPARTMENTS = [
  "General Inquiry",
  "Business Partnership",
  "Technical Support",
  "Billing & Payments",
  "Careers",
  "Other",
];

const FAQS = [
  {
    q: "What regions in India does Goodpower serve?",
    a: "We serve all major metro cities and industrial corridors — Mumbai, Delhi-NCR, Bangalore, Hyderabad, Chennai, Pune, and Kolkata — with a growing distributor network across tier-2 and tier-3 cities.",
  },
  {
    q: "How quickly can I receive a project quote?",
    a: "Standard product quotes are delivered within 24 hours. Custom or large-scale industrial solutions require a site assessment; detailed proposals are shared within 3–5 business days.",
  },
  {
    q: "Do you provide installation and commissioning?",
    a: "Yes. Goodpower delivers end-to-end services: site survey, system design, installation, commissioning, testing, and full operator training for all power solutions.",
  },
  {
    q: "What after-sales support is available?",
    a: "We offer Annual Maintenance Contracts (AMC) with priority response SLAs, 24/7 remote diagnostics, and on-site engineers based in all four office locations.",
  },
  {
    q: "What warranties do your products carry?",
    a: "All standard products carry 2–5 year manufacturer warranties. Extended warranty and performance guarantee programs are available for enterprise and government projects.",
  },
];

/* ─────────────────────────── ANIMATION VARIANTS ─────────────────────────── */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const staggerContainerSlow: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.25 } },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const lineGrow: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
  },
};

/* ─────────────────────────── SCROLL REVEAL WRAPPER ─────────────────────────── */

function Reveal({
  children,
  variants = fadeUp,
  className = "",
  once = true,
  delay = 0,
}: {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  once?: boolean;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  const customVariants = delay
    ? {
      ...variants,
      visible: {
        ...(variants?.visible as any),
        transition: {
          ...((variants?.visible as any)?.transition || {}),
          delay,
        },
      },
    }
    : variants;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={customVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────── HELPERS ─────────────────────────── */

function EyebrowLabel({
  children,
  center = false,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-[10px] font-mono text-[10px] tracking-[0.2em] uppercase text-[#FFD600] mb-3 ${center ? "justify-center" : ""}`}
    >
      <motion.span
        className="w-6 h-px bg-[#FFD600] block origin-left"
        variants={lineGrow}
      />
      {children}
      {center && (
        <motion.span
          className="w-6 h-px bg-[#FFD600] block origin-right"
          variants={lineGrow}
        />
      )}
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="w-[14px] h-[14px] stroke-gray-700 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127 1.04.362 2.05.7 3.03a2 2 0 01-.45 2.11L6.09 8.22a16 16 0 006.29 6.29l1.18-1.18a2 2 0 012.11-.45c.98.337 1.99.572 3.03.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      className="w-[14px] h-[14px] stroke-gray-700 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-9.7 6.5a1 1 0 01-1.06 0L2 7" />
    </svg>
  );
}

function ArrowUpRight({ cls }: { cls?: string }) {
  return (
    <svg
      className={cls ?? "w-[14px] h-[14px]"}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

/* ─────────────────────────── COUNTABLE NUMBER ─────────────────────────── */

function CountableNumber({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [isInView, target]);

  return (
    <span
      ref={ref}
      className="font-['Barlow_Condensed',sans-serif] text-[44px] font-bold text-[#0A0A0A] leading-none"
    >
      {display}
      <span className="text-[#FFD600]">{suffix}</span>
    </span>
  );
}

/* ─────────────────────────── FAQ ITEM ─────────────────────────── */

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      variants={fadeUp}
      className={`border-b transition-colors duration-200 ${open ? "border-[#FFD600]" : "border-[#EBEBEA]"}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-[22px] text-left gap-5 bg-transparent border-none cursor-pointer"
      >
        <span
          className={`text-[15px] font-medium transition-colors duration-200 ${open ? "text-[#0A0A0A]" : "text-[#5A5A58]"}`}
        >
          {q}
        </span>
        <motion.span
          animate={
            open
              ? {
                rotate: 135,
                backgroundColor: "#FFD600",
                borderColor: "#FFD600",
              }
              : {
                rotate: 0,
                backgroundColor: "transparent",
                borderColor: "#D8D8D7",
              }
          }
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0"
        >
          <svg
            className={`w-[10px] h-[10px] transition-colors ${open ? "stroke-[#0A0A0A]" : "stroke-gray-700"}`}
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={
          open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="text-[14px] font-light text-gray-700 leading-[1.75] pr-10 pb-5">
          {a}
        </p>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────── MAIN PAGE ─────────────────────────── */

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  department: string;
  subject: string;
  message: string;
}
const EMPTY: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  department: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const set = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm(EMPTY);
    }, 5000);
  };

  const inputCls = (name: string) =>
    `w-full bg-[#FAFAF8] border rounded-[2px] pl-10 pr-4 py-[13px] font-sans text-[14px] text-[#0A0A0A] placeholder:text-gray-400 outline-none transition-all duration-200 appearance-none ${focused === name
      ? "border-[#FFD600] shadow-[0_0_0_3px_rgba(255,214,0,0.07)]"
      : "border-[#EBEBEA] hover:border-[#D8D8D7]"
    }`;

  const iconCls = (name: string) =>
    `w-[15px] h-[15px] transition-colors duration-200 ${focused === name ? "stroke-[#FFD600]" : "stroke-[#D8D8D7]"}`;

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#0A0A0A] font-sans antialiased">
      {/* ══ TOPBAR ══ */}

      {/* ══ HERO ══ */}
      <section className="max-w-[1200px] mx-auto px-10 pt-20 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-end border-b border-[#EBEBEA]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <Reveal variants={fadeUp}>
            <EyebrowLabel>Contact Us</EyebrowLabel>
          </Reveal>
          <h1 className="font-['Barlow_Condensed',sans-serif] text-[clamp(52px,6vw,80px)] font-bold leading-[0.9] tracking-[-0.01em] uppercase text-[#0A0A0A] mb-7">
            {["How Can We", "Power", "Your Future?"].map((line, i) => (
              <motion.span
                key={i}
                variants={fadeUp}
                className={i === 1 ? "text-[#FFD600]" : ""}
                style={{ display: "block" }}
              >
                {line}
              </motion.span>
            ))}
          </h1>
          <motion.p
            variants={fadeUp}
            className="text-[16px] font-light text-gray-700 leading-[1.7] max-w-[400px]"
          >
            Whether you need a power solution, want to explore a partnership, or
            have a technical question — our team is ready to help.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainerSlow}
          className="grid grid-cols-2 gap-px bg-[#EBEBEA] border border-[#EBEBEA] rounded-[2px] overflow-hidden"
        >
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="bg-[#FAFAF8] hover:bg-[#F5F5F3] transition-colors duration-200 px-7 py-8"
            >
              <CountableNumber target={s.value} suffix={s.suffix} />
              <p className="text-[11px] tracking-[0.12em] uppercase text-gray-700 font-medium mt-2">
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══ CHANNELS ══ */}


      {/* ══ FORM + SIDEBAR ══ */}

      <section className="bg-white border-b border-[#EBEBEA] py-20">
        <div className="max-w-[1200px] mx-auto px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12"
          >
            <div>
              <Reveal variants={fadeUp}>
                <EyebrowLabel>China Office</EyebrowLabel>
              </Reveal>
              <motion.h2
                variants={fadeUp}
                className="font-['Barlow_Condensed',sans-serif] text-[clamp(28px,3.5vw,44px)] font-bold uppercase tracking-[-0.01em] leading-[0.95] text-[#0A0A0A]"
              >
                China <span className="text-[#FFD600]">Location</span>
              </motion.h2>
            </div>
            <motion.p
              variants={fadeUp}
              className="text-[14px] font-light text-gray-700 max-w-sm leading-relaxed md:text-right"
            >
              Our global headquarters and manufacturing hub in China.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            className="bg-white border border-[#D8D8D7] rounded-[2px] overflow-hidden hover:bg-[#F5F5F3] transition-colors duration-300"
          >
            <div className="px-9 py-10">
              <div className="flex items-start justify-between mb-5">
                <span className="font-mono text-[11px] text-gray-400 tracking-[0.1em]">
                  {CHINA_OFFICE.num}
                </span>
                <span className="font-mono text-[9px] tracking-[0.15em] uppercase bg-[#FFD600] text-[#0A0A0A] px-[10px] py-1 rounded-[2px]">
                  {CHINA_OFFICE.tag}
                </span>
              </div>
              <h3 className="font-['Barlow_Condensed',sans-serif] text-[32px] font-bold uppercase tracking-[-0.01em] text-[#0A0A0A] mb-[10px]">
                {CHINA_OFFICE.city}
              </h3>
              <p className="text-[13px] font-light text-gray-700 leading-relaxed mb-5 whitespace-pre-line">
                {CHINA_OFFICE.address}
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <div className="flex items-center gap-2 text-[13px] font-medium text-[#5A5A58] font-mono tracking-[0.03em]">
                  <PhoneIcon />
                  {CHINA_OFFICE.phone}
                </div>
                <div className="flex items-center gap-2 text-[13px] font-medium text-[#5A5A58] font-mono tracking-[0.03em]">
                  <MailIcon />
                  {CHINA_OFFICE.email}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ══ INDIA OFFICE (SINGLE) ══ */}
      <section className="bg-[#F5F5F3] border-t border-b border-[#EBEBEA] py-20">
        <div className="max-w-[1200px] mx-auto px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12"
          >
            <div>
              <Reveal variants={fadeUp}>
                <EyebrowLabel>India Office</EyebrowLabel>
              </Reveal>
              <motion.h2
                variants={fadeUp}
                className="font-['Barlow_Condensed',sans-serif] text-[clamp(28px,3.5vw,44px)] font-bold uppercase tracking-[-0.01em] leading-[0.95] text-[#0A0A0A]"
              >
                India <span className="text-[#FFD600]">Location</span>
              </motion.h2>
            </div>
            <motion.p
              variants={fadeUp}
              className="text-[14px] font-light text-gray-700 max-w-sm leading-relaxed md:text-right"
            >
              Our India headquarters serving clients across the subcontinent.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            className="bg-white border border-[#D8D8D7] rounded-[2px] overflow-hidden hover:bg-[#F5F5F3] transition-colors duration-300"
          >
            <div className="px-9 py-10">
              <div className="flex items-start justify-between mb-5">
                <span className="font-mono text-[11px] text-gray-400 tracking-[0.1em]">
                  {INDIA_OFFICE.num}
                </span>
                <span className="font-mono text-[9px] tracking-[0.15em] uppercase bg-[#0A0A0A] text-white px-[10px] py-1 rounded-[2px]">
                  {INDIA_OFFICE.tag}
                </span>
              </div>
              <h3 className="font-['Barlow_Condensed',sans-serif] text-[32px] font-bold uppercase tracking-[-0.01em] text-[#0A0A0A] mb-[10px]">
                {INDIA_OFFICE.city}
              </h3>
              <p className="text-[13px] font-light text-gray-700 leading-relaxed mb-5 whitespace-pre-line">
                {INDIA_OFFICE.address}
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <div className="flex items-center gap-2 text-[13px] font-medium text-[#5A5A58] font-mono tracking-[0.03em]">
                  <PhoneIcon />
                  {INDIA_OFFICE.phone}
                </div>
                <div className="flex items-center gap-2 text-[13px] font-medium text-[#5A5A58] font-mono tracking-[0.03em]">
                  <MailIcon />
                  {INDIA_OFFICE.email}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section
        id="form"
        className="max-w-[1200px] mx-auto px-10 py-20 grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-20 border-b border-[#EBEBEA]"
      >
        {/* Form */}
        <Reveal variants={slideInLeft}>
          <div>
            <EyebrowLabel>Send a Message</EyebrowLabel>
            <h2 className="font-['Barlow_Condensed',sans-serif] text-[clamp(28px,3vw,40px)] font-bold uppercase tracking-[-0.01em] leading-[0.95] text-[#0A0A0A] mb-2">
              We&apos;d Love to <span className="text-[#FFD600]">Hear</span>{" "}
              From You
            </h2>
            <p className="text-[14px] font-light text-gray-700 mb-9 max-w-md leading-relaxed">
              Complete the form and a member of our team will reach out within
              one business day.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.15,
                  }}
                  className="w-16 h-16 rounded-full bg-[#FFD600] flex items-center justify-center mb-6"
                >
                  <svg
                    className="w-7 h-7 stroke-[#0A0A0A]"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </motion.div>
                <h3 className="font-['Barlow_Condensed',sans-serif] text-[28px] font-bold uppercase tracking-[0.02em] mb-2">
                  Message Sent
                </h3>
                <p className="text-[14px] text-gray-700 max-w-xs leading-relaxed font-light">
                  Thank you. Your enquiry has been received and we&apos;ll
                  respond within one business day.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="relative">
                    <span className="absolute left-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        className={iconCls("name")}
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name *"
                      required
                      value={form.name}
                      onChange={set}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      className={inputCls("name")}
                    />
                  </div>
                  <div className="relative">
                    <span className="absolute left-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        className={iconCls("email")}
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M22 7l-9.7 6.5a1 1 0 01-1.06 0L2 7" />
                      </svg>
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      required
                      value={form.email}
                      onChange={set}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      className={inputCls("email")}
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="relative">
                    <span className="absolute left-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        className={iconCls("phone")}
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127 1.04.362 2.05.7 3.03a2 2 0 01-.45 2.11L6.09 8.22a16 16 0 006.29 6.29l1.18-1.18a2 2 0 012.11-.45c.98.337 1.99.572 3.03.7A2 2 0 0122 16.92z" />
                      </svg>
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={set}
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused(null)}
                      className={inputCls("phone")}
                    />
                  </div>
                  <div className="relative">
                    <span className="absolute left-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        className={iconCls("company")}
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="7" width="20" height="15" rx="2" />
                        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={form.company}
                      onChange={set}
                      onFocus={() => setFocused("company")}
                      onBlur={() => setFocused(null)}
                      className={inputCls("company")}
                    />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="relative">
                    <span className="absolute left-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        className={iconCls("department")}
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                      </svg>
                    </span>
                    <select
                      name="department"
                      value={form.department}
                      onChange={set}
                      onFocus={() => setFocused("department")}
                      onBlur={() => setFocused(null)}
                      className={`${inputCls("department")} cursor-pointer pr-9 ${!form.department ? "text-gray-400" : "text-[#0A0A0A]"}`}
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23999' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 14px center",
                      }}
                    >
                      <option value="">Select Department</option>
                      {DEPARTMENTS.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="relative">
                    <span className="absolute left-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        className={iconCls("subject")}
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="8" y1="6" x2="21" y2="6" />
                        <line x1="8" y1="12" x2="21" y2="12" />
                        <line x1="8" y1="18" x2="21" y2="18" />
                        <line x1="3" y1="6" x2="3.01" y2="6" />
                        <line x1="3" y1="12" x2="3.01" y2="12" />
                        <line x1="3" y1="18" x2="3.01" y2="18" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject *"
                      required
                      value={form.subject}
                      onChange={set}
                      onFocus={() => setFocused("subject")}
                      onBlur={() => setFocused(null)}
                      className={inputCls("subject")}
                    />
                  </div>
                </div>

                {/* Textarea */}
                <div className="relative">
                  <span className="absolute left-[14px] top-[16px] pointer-events-none">
                    <svg
                      className={iconCls("message")}
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                    </svg>
                  </span>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your requirements... *"
                    required
                    value={form.message}
                    onChange={set}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    className={`${inputCls("message")} resize-none pt-[14px]`}
                  />
                </div>

                {/* Submit */}
                <div className="flex items-center justify-between pt-2">
                  <p className="font-mono text-[11px] text-gray-400 tracking-[0.05em]">
                    * Required · Your data stays private.
                  </p>
                  <motion.button
                    type="submit"
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="group inline-flex items-center gap-2 bg-[#0A0A0A] text-white font-['Barlow_Condensed',sans-serif] text-[14px] font-semibold tracking-[0.12em] uppercase px-8 py-[13px] rounded-[2px] hover:bg-[#FFD600] hover:text-[#0A0A0A] transition-colors duration-200"
                  >
                    Send Message
                    <ArrowUpRight cls="w-[14px] h-[14px] stroke-current group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </motion.button>
                </div>
              </form>
            )}
          </div>
        </Reveal>

        {/* Sidebar */}
        <Reveal variants={slideInRight} delay={0.2}>
          <div className="lg:border-l lg:border-[#EBEBEA] lg:pl-12 space-y-8">
            <div>
              <EyebrowLabel>Headquarters</EyebrowLabel>
              <div className="relative border border-[#EBEBEA] rounded-[2px] overflow-hidden h-[220px] mb-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.979092798744!2d72.8561!3d19.0707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c94032a0b0e1%3A0x6fe0e7e2e2e8e0e0!2sBandra%20Kurla%20Complex%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: "",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute bottom-3 left-3 bg-[#0A0A0A] text-white font-mono text-[10px] tracking-[0.12em] uppercase px-3 py-1.5 rounded-[2px]"
                >
                  Bengaluru
                </motion.div>
              </div>
              <p className="font-mono text-[11px] text-gray-700 tracking-[0.08em] uppercase text-right">
                Bengaluru, Karnataka 560056
              </p>
            </div>

            <div>
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-gray-700 mb-1">
                Quick Links
              </p>
              {QUICK_LINKS.map((item, i) => (
                <motion.a
                  key={item.name}
                  href="#"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex items-center justify-between py-[14px] border-b border-[#EBEBEA] hover:border-[#D8D8D7] transition-colors no-underline"
                >
                  <div>
                    <p className="text-[13px] font-medium text-[#0A0A0A] group-hover:text-[#FFD600] transition-colors duration-200">
                      {item.name}
                    </p>
                    <p className="font-mono text-[11px] text-gray-700 tracking-[0.04em] mt-0.5">
                      {item.sub}
                    </p>
                  </div>
                  <ArrowUpRight cls="w-[14px] h-[14px] stroke-[#D8D8D7] group-hover:stroke-[#FFD600] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0" />
                </motion.a>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
      {/* ══ CHINA OFFICE (SINGLE) ══ */}

      {/* ══ CTA ══ */}
      <section className="max-w-[1200px] mx-auto px-10 py-20 border-b border-[#EBEBEA]">
        <Reveal variants={scaleReveal}>
          <div className="relative bg-[#0A0A0A] rounded-[2px] overflow-hidden px-12 py-16 md:px-20 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-14">
            <div
              className="absolute inset-0 opacity-[0.025] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(#FFD600 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.04 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-[#FFD600] pointer-events-none"
            />
            <div className="relative z-10 max-w-lg">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#FFD600] mb-4">
                Ready to Start?
              </p>
              <h2 className="font-['Barlow_Condensed',sans-serif] text-[clamp(32px,4vw,52px)] font-bold uppercase leading-[0.95] tracking-[-0.01em] text-white mb-4">
                Let&apos;s Power
                <br />
                Your Next
                <br />
                Project
              </h2>
              <p className="text-[14px] font-light text-white/40 leading-relaxed max-w-sm">
                From consultation to installation and beyond — Goodpower is your
                end-to-end energy partner across India.
              </p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0 relative z-10">
              <motion.a
                href="tel:+ 86 18230571661"
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center justify-center gap-2.5 bg-[#FFD600] text-[#0A0A0A] font-['Barlow_Condensed',sans-serif] text-[14px] font-bold tracking-[0.1em] uppercase px-8 py-[14px] rounded-[2px] hover:bg-white transition-colors duration-200 no-underline"
              >
                <svg
                  className="w-4 h-4 stroke-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127 1.04.362 2.05.7 3.03a2 2 0 01-.45 2.11L6.09 8.22a16 16 0 006.29 6.29l1.18-1.18a2 2 0 012.11-.45c.98.337 1.99.572 3.03.7A2 2 0 0122 16.92z" />
                </svg>
                Call Now
              </motion.a>
              <motion.a
                href="mailto:sales@goodpowercn.com"
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center justify-center gap-2.5 border border-white/10 text-white/60 font-['Barlow_Condensed',sans-serif] text-[14px] font-semibold tracking-[0.1em] uppercase px-8 py-[14px] rounded-[2px] hover:border-[#FFD600]/40 hover:text-[#FFD600] transition-colors duration-200 no-underline"
              >
                <svg
                  className="w-4 h-4 stroke-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-9.7 6.5a1 1 0 01-1.06 0L2 7" />
                </svg>
                Email Us
              </motion.a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ══ FAQ ══ */}
      <section className="bg-[#F5F5F3] border-t border-[#EBEBEA] py-20">
        <div className="max-w-[800px] mx-auto px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="text-center mb-14"
          >
            <Reveal variants={fadeUp}>
              <EyebrowLabel center>Support</EyebrowLabel>
            </Reveal>
            <motion.h2
              variants={fadeUp}
              className="font-['Barlow_Condensed',sans-serif] text-[clamp(28px,3.5vw,44px)] font-bold uppercase tracking-[-0.01em] leading-[0.95] text-[#0A0A0A]"
            >
              Common <span className="text-[#FFD600]">Questions</span>
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainerSlow}
            className="bg-white border border-[#EBEBEA] rounded-[2px] px-8"
          >
            <div className="border-t border-[#EBEBEA]">
              {FAQS.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
    </main>
  );
}
