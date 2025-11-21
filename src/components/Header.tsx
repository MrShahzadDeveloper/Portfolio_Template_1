"use client";

import React from "react";
import Image from "next/image";
import Circle from "@/components/Circle";
import ProjectDetailCircle from "./ProjectDetailCircle";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

// ==============================
// Props Interface
// ==============================
interface HeroHeaderProps {
  introText: string;   // Introductory small text above headings
  heading1: string;    // First main heading
  heading2: string;    // Second main heading
}

// ==============================
// Animation Variants
// ==============================

// Staggered container for child animations
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

// Fade-up animation for text and elements
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ==============================
// HeroHeader Component
// ==============================
const HeroHeader: React.FC<HeroHeaderProps> = ({
  introText,
  heading1,
  heading2
}) => {
  // Scroll-triggered animation hook
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="relative min-h-[40vh] md:min-h-[60vh] py-10 md:py-20 lg:py-36 flex flex-col justify-center text-white overflow-hidden"
    >
      {/* ==============================
          Background Circle Component
          Decorative floating circle on the left
      =============================== */}
      <div className="absolute left-[-100px] top-[40%] -translate-y-1/2 -z-10 pointer-events-none">
        <Circle />
      </div>

      {/* ==============================
          Header Content Wrapper
      =============================== */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-16 xl:px-32">
        {/* ==============================
            Intro Text + Horizontal Line
        =============================== */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col md:flex-row md:items-center gap-3 sm:gap-5 mb-6 text-center md:text-left"
        >
          <h3 className="font-bold text-lg sm:text-xl text-white">{introText}</h3>
          <hr className="hidden sm:block w-[80px] border-[#575757]" />
        </motion.div>

        {/* ==============================
            Main Headings + Decorative Elements
        =============================== */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full">
          {/* ==============================
              Left Title Block
          =============================== */}
          <div className="text-center md:text-left">
            {/* First Heading + Rotating Star */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row sm:items-end sm:gap-6 mb-5 justify-center md:justify-start"
            >
              <motion.h1 variants={fadeUp} className="text-5xl sm:text-7xl lg:text-[100px] font-bold uppercase leading-none">
                {heading1}
              </motion.h1>

              {/* Rotating Star Decoration */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              >
                <Image
                  src="/star.svg"
                  alt="star"
                  width={120}
                  height={120}
                  className="hidden md:block w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[120px] lg:h-[120px] mt-2 sm:mt-0"
                />
              </motion.div>
            </motion.div>

            {/* Second Heading + Floating Rings */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row sm:items-center sm:gap-4 justify-center md:justify-start"
            >
              {/* Floating Rings Animation */}
              <motion.div
                animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/rings.svg"
                  alt="rings"
                  width={350}
                  height={80}
                  className="hidden md:block w-28 h-8 sm:w-40 sm:h-10 md:w-60 md:h-14 lg:w-[350px] lg:h-[80px] my-8 sm:my-0"
                />
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-5xl sm:text-7xl lg:text-[100px] font-bold uppercase leading-none"
              >
                {heading2}
              </motion.h1>
            </motion.div>
          </div>

          {/* ==============================
              Right Project Circle
              Decorative circular element (e.g., project animation)
          =============================== */}
          <motion.div
            variants={fadeUp}
            className="flex-shrink-0 flex justify-center md:justify-end w-full md:w-auto mb-30"
          >
            <ProjectDetailCircle />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroHeader;
