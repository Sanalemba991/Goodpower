"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    rating: 5,
    text: "When I had an issue with my inverter at 10PM, GoodPower's tech support walked me through the fix over video call. That's the kind of service that keeps me loyal.",
    name: "Zhang Wei",
    location: "Shenzhen, China",
    avatar: "https://randomuser.me/api/portraits/men/29.jpg",
    verified: true,
    product: "Stacked Battery / Powerwall",
  },
  {
    rating: 5,
    text: "I almost ordered the wrong voltage system. GoodPower called me personally to double-check my setup before shipping. Saved me from a costly mistake.",
    name: "Li Na",
    location: "Shanghai, China",
    avatar: "https://randomuser.me/api/portraits/women/56.jpg",
    verified: true,
    product: "High Voltage Battery + Inverter",
  },
  {
    rating: 5,
    text: "Three years working with GoodPower and they've never missed a delivery deadline. Their quality control and communication are simply the best in China.",
    name: "Chen Jie",
    location: "Guangzhou, China",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    verified: true,
    product: "12V/24V Lithium Battery",
  },
];

// Advanced Card Component
const TestimonialCard: React.FC<{ data: any; index: number }> = ({ data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15, 
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className="relative bg-white p-8 border border-gray-200/50 shadow-[0_2px_4px_rgba(0,0,0,0.02),0_8px_16px_rgba(0,0,0,0.04),0_24px_48px_rgba(0,0,0,0.06)] flex flex-col h-full overflow-hidden group"
    >
      
      {/* Header: Stars + Product Badge */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} width="18" height="18" viewBox="0 0 20 20" fill="#F59E0B">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-xs font-mono bg-yellow-50 text-yellow-700 px-2 py-1 rounded border border-yellow-100">
          {data.product}
        </span>
      </div>

      {/* Editorial Text */}
      <p className="font-serif text-lg leading-relaxed text-gray-700 mb-8 flex-grow italic">
        "{data.text}"
      </p>
      
      {/* Footer */}
      <div className="flex items-center gap-4">
        <img
          src={data.avatar}
          alt={data.name}
          className="w-[52px] h-[52px] rounded-full object-cover border-2 border-gray-100"
        />
        <div>
          <div className="font-bold text-base text-gray-900">{data.name}</div>
          <div className="text-sm text-gray-500 font-medium">{data.location}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default function TestimonialsSection() {
  return (
    <section className="relative bg-gray-50 py-24 px-6 overflow-hidden font-sans">
      
      <div className="relative z-10 max-w-[1200px] mx-auto">
        
        {/* Section Header - GoodPower Branded */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-yellow-50 border border-yellow-200 text-yellow-700 rounded-full text-sm font-semibold mb-5 shadow-sm"
          >
            ★ Trusted by 5,000+ GoodPower Customers Across China
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[clamp(32px,5vw,48px)] font-extrabold text-gray-900 leading-[1.1] tracking-tighter m-0"
          >
            Customer satisfaction isn't just a metric.<br />
            It's our promise.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-500 mt-4 max-w-[600px] mx-auto leading-relaxed"
          >
            See why thousands of customers across China choose GoodPower — not just for our batteries, but for the trust and support that come with them.
          </motion.p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} data={t} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}