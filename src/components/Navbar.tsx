"use client";

import { useCurrency, type Currency } from "@/context/CurrencyContext";
import BrandLogo from "@/components/BrandLogo";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [useLuxuryLogo, setUseLuxuryLogo] = useState(true);
  const { currency, setCurrency } = useCurrency();
  const pathname = usePathname();
  const isPropertyDetail = /^\/listings\/[^/]+$/.test(pathname);
  const showLuxuryLogo = !isPropertyDetail && useLuxuryLogo;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);

    const isOverDarkSurface = Array.from(
      document.querySelectorAll<HTMLElement>("[data-brand-surface='dark']")
    ).some((surface) => {
      const { top, bottom } = surface.getBoundingClientRect();
      return top <= 40 && bottom > 40;
    });

    setUseLuxuryLogo(isOverDarkSurface || latest < 50);
  });

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-[100] transition-[background-color,border-color,box-shadow] duration-500 ${showLuxuryLogo
        ? isScrolled
          ? "bg-[#111812]/85 backdrop-blur-md shadow-sm border-b border-white/10"
          : "bg-transparent"
        : "bg-white/80 backdrop-blur-md shadow-sm border-b border-black/5"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-3 sm:h-20 sm:px-6">
        {/* Logo */}
        <Link href="/" className="group flex items-center">
          <BrandLogo
            variant={showLuxuryLogo ? "luxury" : "glossy"}
            className="h-9 w-28 transition-transform duration-300 group-hover:scale-[1.025] sm:h-12 sm:w-44"
            preload
          />
        </Link>

        {/* Center Links */}
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "Properties", "About", "Agents"].map((item) => (
            <div key={item} className="relative group">
              <Link
                href={
                  item === "Home" ? "/" :
                    item === "About" ? "/about" :
                      item === "Agents" ? "/agents" :
                        item === "Properties" ? "#" :
                          `#${item.toLowerCase()}`
                }
                className={`text-sm font-semibold transition-colors duration-500 flex items-center gap-1 ${showLuxuryLogo ? "text-white/80 hover:text-[#FFDE02]" : "text-neutral-600 hover:text-black"
                  }`}
              >
                {item}
                {item === "Properties" && (
                  <ChevronDown className="w-3 h-3 opacity-70" strokeWidth={3} />
                )}
              </Link>

              {item === "Properties" && (
                <div className="absolute top-full left-0 pt-4 w-44 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-black/5 p-2 flex flex-col gap-1">
                    <Link href="/sell" className="px-3 py-2 text-sm font-medium text-neutral-600 hover:text-black hover:bg-neutral-50 rounded-xl transition-colors">For Sell</Link>
                    <Link href="/rent" className="px-3 py-2 text-sm font-medium text-neutral-600 hover:text-black hover:bg-neutral-50 rounded-xl transition-colors">For Rent</Link>
                    <Link href="/off-plan" className="px-3 py-2 text-sm font-medium text-neutral-600 hover:text-black hover:bg-neutral-50 rounded-xl transition-colors">Off-Plan</Link>
                    <Link href="/commercial" className="px-3 py-2 text-sm font-medium text-neutral-600 hover:text-black hover:bg-neutral-50 rounded-xl transition-colors">Commercial</Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA & Currency */}
        <div className="flex items-center gap-1.5 sm:gap-4">
          <Link href="/contact" className={`rounded-full px-3 py-2 text-xs font-bold shadow-sm transition-all duration-500 hover:scale-105 sm:px-6 sm:py-2.5 sm:text-sm ${showLuxuryLogo
            ? "bg-[#FFDE02] text-black hover:bg-yellow-400"
            : "bg-black text-white hover:bg-neutral-800"
            }`}>
            Contact Us
          </Link>

          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value as Currency)}
            className={`cursor-pointer bg-transparent text-xs font-bold outline-none transition-colors duration-500 sm:text-sm ${showLuxuryLogo ? "text-white/90 hover:text-white" : "text-neutral-800 hover:text-black"
              }`}
          >
            <option value="USD" className="text-black">USD</option>
            <option value="AED" className="text-black">AED</option>
            <option value="EUR" className="text-black">EUR</option>
          </select>
        </div>
      </div>
    </motion.header>
  );
}
