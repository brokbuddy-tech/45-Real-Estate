'use client';

import BlurReveal from '@/components/ui/blur-reveal';
import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin, Phone, Send, Star } from 'lucide-react';
import Image from 'next/image';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }
  }
};

export default function ContactPage() {
  return (
    <div className="w-full bg-[#111812] min-h-screen font-sans">

      {/* 1. HERO SECTION */}
      <section className="relative pt-36 pb-28 text-center px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000"
            alt="Hero Background"
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-[#111812] via-transparent to-[#111812]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <BlurReveal as="h1" className="text-4xl sm:text-6xl font-bold text-white tracking-tight">
            Get in touch
          </BlurReveal>
          <p className="text-neutral-400 text-sm sm:text-base mt-4 max-w-lg mx-auto">
            Search real listings, compare top features, and lock in your next home worry-free.
          </p>
        </motion.div>
      </section>

      {/* 2. FLOATING INFO CARDS & CONTENT SECTION */}
      <section className="bg-[#F6F6F4] text-neutral-900 pb-24 relative">

        {/* Floating Cards Bar */}
        <div className="max-w-5xl mx-auto px-6 -translate-y-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {/* Email Card */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-5 shadow-sm border border-neutral-200/80 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-neutral-800" />
              </div>
              <div>
                <p className="text-xs text-neutral-400 font-medium">Email Address</p>
                <p className="text-sm font-semibold text-neutral-900 mt-0.5">info@45 real estate.com</p>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-5 shadow-sm border border-neutral-200/80 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-neutral-800" />
              </div>
              <div>
                <p className="text-xs text-neutral-400 font-medium">Phone Number</p>
                <p className="text-sm font-semibold text-neutral-900 mt-0.5">+123 456 789 00-5</p>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-5 shadow-sm border border-neutral-200/80 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-neutral-800" />
              </div>
              <div>
                <p className="text-xs text-neutral-400 font-medium">Downtown Boulevard</p>
                <p className="text-sm font-semibold text-neutral-900 mt-0.5">Dubai, UAE</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Form Outer Container */}
        <div className="max-w-5xl mx-auto px-6 mt-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-neutral-200/60 grid grid-cols-1 lg:grid-cols-12 gap-12"
          >
            {/* Left Info Column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#111812] text-white text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#FFDE02]" />
                  Write Here
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
                  Leave a message for us.
                </h2>
              </div>

              {/* Map Box */}
              <div className="mt-8 rounded-2xl overflow-hidden bg-[#E3EBDC] border border-neutral-200/80 relative min-h-[220px] p-4 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-neutral-700 shadow-sm flex items-center gap-1">
                    Open in Maps <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl text-xs text-neutral-600">
                  📍 Dubai Headquarters, Downtown Boulevard
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full bg-transparent border-b border-neutral-200 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-black focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-transparent border-b border-neutral-200 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-black focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone number"
                      className="w-full bg-transparent border-b border-neutral-200 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-black focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <select className="w-full bg-transparent border-b border-neutral-200 py-3 text-sm text-neutral-700 focus:border-black focus:outline-none transition-colors">
                      <option value="DXB">Dubai</option>
                      <option value="AUH">Abu Dhabi</option>
                      <option value="SHJ">Sharjah</option>
                      <option value="RAK">Ras Al Khaimah</option>
                    </select>
                  </div>
                </div>

                <div>
                  <textarea
                    rows={4}
                    placeholder="Message"
                    className="w-full bg-transparent border-b border-neutral-200 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-black focus:outline-none transition-colors resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="bg-[#111812] hover:bg-neutral-800 text-white font-medium text-sm px-8 py-3.5 rounded-full flex items-center gap-2 shadow-sm transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Submit Now
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. FOOTER SECTION WITH OUTLINED TYPOGRAPHY */}
      <footer className="relative bg-[#111812] text-white pt-20 pb-0 flex flex-col overflow-hidden">
        {/* Footer Links Grid */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col justify-center mb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/10 pb-16">
            {/* About & Trust */}
            <div className="col-span-1 md:col-span-4">
              <BlurReveal as="h3" className="text-2xl font-bold mb-6">45 Real Estate Real Estate</BlurReveal>
              <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
                We are dedicated to helping you find the perfect home that fits your lifestyle. Premium quality, exceptional service.
              </p>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[#FFDE02]"><Star size={20} /></div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[#FFDE02]"><Star size={20} /></div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[#FFDE02]"><Star size={20} /></div>
              </div>
            </div>

            {/* Links */}
            <div className="col-span-1 md:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <BlurReveal as="h4" className="font-bold mb-6 text-lg">Essential</BlurReveal>
                <ul className="flex flex-col gap-4 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Home Listings</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Get in Touch</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                </ul>
              </div>
              <div>
                <BlurReveal as="h4" className="font-bold mb-6 text-lg">Legal</BlurReveal>
                <ul className="flex flex-col gap-4 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className="col-span-1 md:col-span-4">
              <BlurReveal as="h4" className="font-bold mb-6 text-lg">Get weekly updates</BlurReveal>
              <p className="text-gray-400 mb-6">Subscribe to our newsletter for the latest property news and market trends.</p>
              <form className="relative" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 outline-none focus:border-[#FFDE02] transition-colors text-white"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 bg-[#FFDE02] text-black font-bold px-6 rounded-full hover:bg-yellow-400 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
            <p>© 2024 45 Real Estate Real Estate. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
        </div>

        {/* Massive Background Text */}
        <div className="w-full overflow-hidden leading-none select-none opacity-20 text-center pointer-events-none mt-12 relative z-10">
          <span
            className="text-[18vw] font-black tracking-tighter text-transparent block -mb-8"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}
          >
            45 real estate
          </span>
        </div>
      </footer>
    </div>
  );
}

