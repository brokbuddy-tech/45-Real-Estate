'use client';

import { motion, type Variants } from 'framer-motion';
import { Award, Bath, Bed, Mail, MapPin, Phone, Square, Star } from 'lucide-react';
import Image from 'next/image';

interface Agent {
  id: string;
  name: string;
  role: string;
  phone: string;
  email: string;
  office: string;
  image: string;
  listings: number;
  bio: string;
}

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  type: string;
  beds: number;
  baths: number;
  sqft: string;
  rating: string;
  image: string;
}

export default function AgentDetailClient({ agent, properties }: { agent: Agent; properties: Property[] }) {

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const fadeUpItem: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="w-full bg-[#111812] min-h-screen font-sans">

      {/* 1. PROFILE HEADER SECTION */}
      <section className="bg-[#111812] text-white pt-36 pb-20 px-6 border-b border-white/10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >

          {/* Agent Photo */}
          <motion.div variants={fadeUpItem} className="lg:col-span-5 relative aspect-[3/4] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src={agent.image}
              alt={agent.name}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Agent Info */}
          <motion.div variants={fadeUpItem} className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6 w-max">
              <span className="w-2 h-2 rounded-full bg-[#FFDE02]" />
              {agent.role}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              {agent.name}
            </h1>

            <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-2xl mb-10">
              {agent.bio}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-4 bg-white/5 rounded-2xl p-4 border border-white/5">
                <div className="w-10 h-10 rounded-full bg-[#FFDE02] text-[#111812] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">Phone</p>
                  <p className="text-sm font-medium">{agent.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/5 rounded-2xl p-4 border border-white/5">
                <div className="w-10 h-10 rounded-full bg-[#FFDE02] text-[#111812] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">Email</p>
                  <p className="text-sm font-medium">{agent.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/5 rounded-2xl p-4 border border-white/5">
                <div className="w-10 h-10 rounded-full bg-[#FFDE02] text-[#111812] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">Office</p>
                  <p className="text-sm font-medium">{agent.office}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/5 rounded-2xl p-4 border border-white/5">
                <div className="w-10 h-10 rounded-full bg-[#FFDE02] text-[#111812] flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">Active Listings</p>
                  <p className="text-sm font-medium">{agent.listings} Properties</p>
                </div>
              </div>
            </div>

          </motion.div>
        </motion.div>
      </section>

      {/* 2. AGENT'S LISTED PROPERTIES SECTION */}
      <section className="bg-[#F6F6F4] text-neutral-900 py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 mt-2">Listed Properties</h2>
            </div>
            <p className="text-sm text-neutral-500">{agent.listings} properties represented</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {properties.map((property) => (
              <motion.article
                key={property.id}
                variants={fadeUpItem}
                className="bg-white rounded-3xl overflow-hidden border border-neutral-200/60 shadow-sm group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image src={property.image} alt={property.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-neutral-800">{property.price}</span>
                  <span className="absolute top-4 right-4 bg-[#FFDE02] px-3 py-1 rounded-full text-xs font-semibold text-neutral-900">{property.type}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900">{property.title}</h3>
                  <p className="text-sm text-neutral-500 mt-1">{property.location}</p>
                  <div className="grid grid-cols-4 gap-2 pt-5 mt-5 border-t border-neutral-100 text-xs text-neutral-600">
                    <span className="flex items-center gap-1"><Bed className="w-3.5 h-3.5" />{property.beds}</span>
                    <span className="flex items-center gap-1"><Bath className="w-3.5 h-3.5" />{property.baths}</span>
                    <span className="flex items-center gap-1"><Square className="w-3.5 h-3.5" />{property.sqft}</span>
                    <span className="flex items-center gap-1 text-amber-500"><Star className="w-3.5 h-3.5 fill-current" />{property.rating}</span>
                  </div>
                </div>
              </motion.article>
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
