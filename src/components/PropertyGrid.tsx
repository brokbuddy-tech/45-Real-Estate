"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Square, Star } from "lucide-react";
import { properties } from "@/data/properties";
import { useCurrency } from "@/context/CurrencyContext";
import BlurReveal from "./ui/blur-reveal";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function PropertyGrid() {
  const { formatPrice } = useCurrency();

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto bg-gray-50 rounded-3xl my-10">
      <div className="flex justify-between items-end mb-12">
        <BlurReveal as="h2" className="text-4xl font-bold text-gray-900">Featured Properties</BlurReveal>
        <Link
          href="/listings"
          className="px-6 py-2 rounded-full border border-gray-300 font-medium hover:bg-gray-100 transition-colors"
        >
          View All
        </Link>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {properties.map((property) => (
          <Link href={`/listings/${property.id}`} key={property.id} className="group block">
            <motion.article
              variants={itemVariants}
              className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-shadow group-hover:shadow-xl"
            >
              {/* Image Container with Badges */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  alt={property.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  src={property.image}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold text-gray-900">
                  {formatPrice(property.price)}
                </div>
                <div className="absolute top-4 right-4 bg-[#FFDF00] px-4 py-1 rounded-full text-sm font-semibold text-black">
                  {property.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <BlurReveal as="h3" className="mb-2 text-2xl font-bold text-gray-900">{property.title}</BlurReveal>
                <p className="mb-6 text-gray-500">{property.address}</p>

                {/* Icons Row */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Bed size={16} /> <span>{property.beds}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath size={16} /> <span>{property.baths}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square size={16} /> <span>{property.sqft}</span>
                  </div>
                  <div className="flex items-center gap-1 font-medium text-yellow-500">
                    <Star size={16} fill="currentColor" /> <span>{property.rating}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}

