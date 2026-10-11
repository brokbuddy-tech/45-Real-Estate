"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollTextReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate the clip-path based on scroll progress to reveal the solid text
  const clipPath = useTransform(scrollYProgress, [0, 1], [
    "inset(0 100% 0 0)",
    "inset(0 0% 0 0)",
  ]);

  const text = "Spacious and sunlit. Modern living redesigned for your comfort and elegance.";

  return (
    <section ref={containerRef} className="relative h-[200vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center px-6">
        <div className="relative mx-auto w-full max-w-5xl">
          {/* Outlined Base Text */}
          <p
            className="text-5xl md:text-7xl font-bold leading-tight"
            style={{ WebkitTextStroke: "1px #d1d5db", color: "transparent" }}
          >
            {text}
          </p>

          {/* Solid Filled Text that overlays based on scroll */}
          <motion.p
            className="pointer-events-none absolute top-0 left-0 w-full text-5xl md:text-7xl font-bold leading-tight text-zinc-900"
            style={{ clipPath }}
          >
            {text}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
