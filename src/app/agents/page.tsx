'use client';

import BlurReveal from '@/components/ui/blur-reveal';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Mail, MessageCircle, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const agentsData = [
  { id: '1', name: 'Almond D. Dawson', role: 'Senior Principal Broker', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80', listings: 14 },
  { id: '2', name: 'Sarah Jenkins', role: 'Luxury Real Estate Specialist', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80', listings: 9 },
  { id: '3', name: 'Marcus Vance', role: 'Commercial & Residential Agent', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80', listings: 11 },
];

export default function AgentsPage() {
  return (
    <div className="w-full bg-[#111812] min-h-screen font-sans">

      {/* 1. HERO SECTION */}
      <section className="relative pt-48 pb-32 text-center px-6 overflow-hidden bg-[#111812]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=2000&q=80"
            alt="Professional real estate team"
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
            Meet our expert agents
          </BlurReveal>
          <p className="text-neutral-400 text-sm sm:text-base mt-4 max-w-lg mx-auto">
            Dedicated professionals ready to help you find your dream home or sell your property worry-free.
          </p>
        </motion.div>
      </section>

      {/* 2. AGENTS GRID */}
      <section className="bg-[#F6F6F4] text-neutral-900 py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {agentsData.map((agent) => (
              <motion.div
                key={agent.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-neutral-200/60 group flex flex-col justify-between"
              >
                {/* Image & Hover Social Overlay */}
                <div className="relative h-[380px] w-full overflow-hidden bg-neutral-100">
                  <Image alt={agent.name} className="object-cover group-hover:scale-105 transition-transform duration-500" fill src={agent.image} />

                  {/* Social Media Links Overlay (Appears on Hover) */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <a href="#" className="w-10 h-10 rounded-full bg-white text-neutral-900 flex items-center justify-center hover:bg-[#FFDE02] transition-colors shadow-md">
                      <Globe className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white text-neutral-900 flex items-center justify-center hover:bg-[#FFDE02] transition-colors shadow-md">
                      <MessageCircle className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white text-neutral-900 flex items-center justify-center hover:bg-[#FFDE02] transition-colors shadow-md">
                      <Phone className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white text-neutral-900 flex items-center justify-center hover:bg-[#FFDE02] transition-colors shadow-md">
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-neutral-800 shadow-sm">
                    {agent.listings} Active Listings
                  </div>
                </div>

                {/* Card Details & Navigation Button */}
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900">{agent.name}</h3>
                    <p className="text-xs text-neutral-500 font-medium mt-1">{agent.role}</p>
                  </div>
                  <Link className="w-11 h-11 rounded-full bg-neutral-100 hover:bg-[#FFDE02] text-neutral-900 flex items-center justify-center transition-colors shadow-sm shrink-0" href={`/agents/${agent.id}`}>
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. FOOTER */}
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
