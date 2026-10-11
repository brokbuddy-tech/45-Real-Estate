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
    <section className="mx-4 my-6 max-w-7xl rounded-3xl bg-gray-50 px-4 py-12 sm:mx-auto sm:my-10 sm:px-6 sm:py-24">
      <div className="mb-8 flex flex-col items-stretch gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
        <BlurReveal as="h2" className="text-3xl font-bold text-gray-900 sm:text-4xl">Featured Properties</BlurReveal>
        <Link
          href="/listings"
          className="inline-flex w-full items-center justify-center rounded-full bg-[#FFDE02] px-6 py-3 font-bold text-black transition-colors hover:bg-yellow-400 sm:w-auto"
        >
          View All
        </Link>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-100px" }}
        className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
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
                <div className="grid grid-cols-2 gap-3 border-t border-gray-100 pt-6 text-sm text-gray-600 sm:grid-cols-4">
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

