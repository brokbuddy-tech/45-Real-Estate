'use client';

import BlurReveal from '@/components/ui/blur-reveal';
import TestimonialsSection from '@/components/ui/testimonials-6';
import { motion, type Variants, useScroll, useTransform } from 'framer-motion';
import { Award, Compass, Target } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

const fadeRightItem: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function AboutPage() {
  const textRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 85%", "end 50%"],
  });
  const clipPath = useTransform(scrollYProgress, [0, 1], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
  return (
    <div className="w-full bg-[#111812] min-h-screen font-sans text-neutral-900">

      {/* 1. HERO SECTION */}
      <section className="relative pt-48 pb-36 text-center px-6 overflow-hidden bg-[#111812]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
            alt="Architectural Landscape"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-[#111812]/80 to-[#111812]" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <BlurReveal as="h1" className="text-4xl sm:text-6xl font-bold text-white tracking-tight">
            About our office
          </BlurReveal>
          <p className="text-neutral-400 text-sm sm:text-base mt-4 max-w-lg mx-auto">
            Search real listings, compare top features, and lock in your next home worry-free.
          </p>
        </motion.div>
      </section>

      {/* 2. MISSION & VISION SECTION */}
      <section className="bg-[#F6F6F4] py-24 px-6 md:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Image */}
          <motion.div variants={fadeRightItem} className="lg:col-span-5 relative min-h-[300px] md:min-h-[450px] rounded-3xl overflow-hidden shadow-sm">
            <Image alt="Office Building" className="object-cover" fill src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" />
          </motion.div>

          {/* Right Content */}
          <motion.div variants={fadeUpItem} className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-[#111812] text-white text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6 w-max">
              <span className="w-2 h-2 rounded-full bg-[#FFDE02]" />
              About Company
            </div>
            <div className="relative mb-8" ref={textRef}>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-transparent leading-tight" style={{ WebkitTextStroke: "1px #d1d5db" }}>
                Carefully selected rentals in top locations, updated weekly listings
              </h2>
              <motion.h2
                className="absolute top-0 left-0 text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-tight"
                style={{ clipPath }}
              >
                Carefully selected rentals in top locations, updated weekly listings
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200/60">
                <div className="w-10 h-10 rounded-xl bg-[#FFDE02]/30 flex items-center justify-center mb-4 text-neutral-900">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg mb-2">Our Mission</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  To provide seamless real estate solutions with verified listings and top-tier client experiences.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200/60">
                <div className="w-10 h-10 rounded-xl bg-[#111812] text-white flex items-center justify-center mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg mb-2">Our Vision</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  To become the world&apos;s most trusted prop-tech platform connecting buyers to dream homes instantly.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. JOIN OUR JOURNEY (TIMELINE) */}
      <section className="bg-white py-24 px-6 md:px-12 border-t border-neutral-200/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-[#111812] text-white text-xs font-semibold px-3.5 py-1.5 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FFDE02]" />
              Our Story
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900">
              Join our journey
            </h2>
          </motion.div>

          {/* Twin Interior Preview Cards */}
          <div className="flex flex-col md:flex-row gap-6 mb-24 justify-center items-center max-w-5xl mx-auto">
            <motion.div variants={fadeUpItem} className="relative w-full md:w-1/2 aspect-[4/3] rounded-3xl overflow-hidden shadow-sm">
              <Image src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" alt="Interior 1" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <motion.div variants={fadeUpItem} className="relative w-full md:w-1/2 aspect-[4/3] rounded-3xl overflow-hidden shadow-sm mt-0 md:mt-12">
              <Image src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80" alt="Interior 2" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { year: "1980", title: "Journey was started", desc: "Started with small boutique agency operations managing local residential properties." },
              { year: "2020", title: "Get noticed", desc: "Expanded digitally across major metropolitan hubs with automated tour bookings." },
              { year: "2025", title: "Get 10+ awards", desc: "Recognized nationally for excellence in customer satisfaction and tech innovation." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="flex flex-col items-center"
              >
                <span
                  className="text-7xl md:text-8xl font-black text-transparent tracking-tighter"
                  style={{ WebkitTextStroke: '1px rgba(0,0,0,0.2)' }}
                >
                  {item.year}
                </span>
                <h4 className="font-bold text-lg text-neutral-900 mt-4">{item.title}</h4>
                <p className="text-xs text-neutral-500 max-w-xs mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AWARDS & LOCATIONS SECTION */}
      <section className="bg-[#F6F6F4] py-24 px-6 md:px-12 border-t border-neutral-200/50">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Cozy Interior with Rating */}
          <motion.div variants={fadeUpItem} className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-sm">
            <Image src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80" alt="Cozy Interior" fill className="object-cover hover:scale-105 transition-transform duration-700" />

            {/* Floating Rating Card */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white flex items-center gap-4">
              <div className="flex -space-x-2">
                <Image width={32} height={32} sizes="32px" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Avatar" />
                <Image width={32} height={32} sizes="32px" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Avatar" />
                <Image width={32} height={32} sizes="32px" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Avatar" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-bold text-neutral-900">4.95</span>
                  <span className="text-[#FFDE02] text-sm">★</span>
                </div>
                <p className="text-[10px] text-neutral-500 font-medium">From 2k+ reviews</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Text and Awards */}
          <motion.div variants={fadeUpItem} className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-tight mb-12">
              Rentals in prime locations, updated weekly.
            </h2>

            <div className="flex flex-col">
              {[
                { title: "Winner August 2023", desc: "Best Real Estate Agency" },
                { title: "Best Rental Company 2023", desc: "National Property Awards" },
                { title: "Top 100 New Ventures", desc: "Global Real Estate Summit" }
              ].map((award, idx) => (
                <div key={idx} className="flex items-center gap-5 py-6 border-b border-neutral-200/60 last:border-0 group">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-neutral-100 group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6 text-[#111812]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 text-lg">{award.title}</h4>
                    <p className="text-xs text-neutral-500 mt-1">{award.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 5. TESTIMONIALS SECTION */}
      <TestimonialsSection />

      {/* 6. FOOTER */}
      <footer className="relative bg-[#111812] text-white pt-24 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h4 className="font-bold text-base mb-4">About company</h4>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Reach thousands of verified renters every month. Our platform makes it easy to list, manage, and rent out your home.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-base mb-4">Essential pages</h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>About Us</li>
              <li>Get in Touch</li>
              <li>Home Listings</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-base mb-4">Get weekly updates</h4>
            <div className="flex gap-2">
              <input type="email" placeholder="Business email" className="bg-neutral-800 border border-neutral-700 px-4 py-2.5 rounded-xl text-xs text-white placeholder:text-neutral-500 focus:outline-none flex-1" />
              <button className="bg-[#FFDE02] text-neutral-900 px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-yellow-400 transition-colors">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Massive Outlined Footer Text */}
        <div className="w-full overflow-hidden leading-none select-none text-center pointer-events-none mt-12">
          <span
            className="text-[18vw] font-black tracking-tighter text-transparent block -mb-8"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}
          >
            45 real estate
          </span>
        </div>
      </footer>
    </div>
  );
}
