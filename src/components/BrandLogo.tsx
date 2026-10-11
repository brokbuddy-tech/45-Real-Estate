"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type BrandLogoProps = {
  variant: "luxury" | "glossy";
  className?: string;
  preload?: boolean;
};

const transition = {
  duration: 0.52,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function BrandLogo({
  variant,
  className = "",
  preload = false,
}: BrandLogoProps) {
  const isLuxury = variant === "luxury";

  return (
    <span
      aria-label="45 Real Estate"
      role="img"
      className={`relative inline-block shrink-0 ${className}`}
    >
      <motion.span
        aria-hidden="true"
        className="absolute inset-0"
        initial={false}
        animate={{
          opacity: isLuxury ? 1 : 0,
          scale: isLuxury ? 1 : 0.965,
          filter: isLuxury ? "blur(0px)" : "blur(2px)",
        }}
        transition={transition}
      >
        <Image
          src="/brand/45-real-estate-luxury.png"
          alt=""
          fill
          preload={preload}
          sizes="(max-width: 640px) 9rem, 12rem"
          className="object-contain"
        />
      </motion.span>

      <motion.span
        aria-hidden="true"
        className="absolute inset-0"
        initial={false}
        animate={{
          opacity: isLuxury ? 0 : 1,
          scale: isLuxury ? 0.965 : 1,
          filter: isLuxury ? "blur(2px)" : "blur(0px)",
        }}
        transition={transition}
      >
        <Image
          src="/brand/45-real-estate-glossy.png"
          alt=""
          fill
          sizes="(max-width: 640px) 9rem, 12rem"
          className="object-contain"
        />
      </motion.span>
    </span>
  );
}
