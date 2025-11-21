"use client";

import Image from "next/image";
import React from "react";
import { workProcess } from "@/data";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

// ==============================
// WorkProcessSection Component
// ==============================
const WorkProcessSection = () => {
  // Scroll-triggered animation hook
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // ==============================
  // Animation Variants
  // ==============================
  
  // Container variant for staggered card animations
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  // Individual card fade-up variant
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Section header fade-up variant
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 bg-black text-white px-4 sm:px-8 md:px-16 xl:px-32"
    >
      {/* ==============================
          Section Header
          Includes subtitle, horizontal line, and main title
      =============================== */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={headerVariants}
        className="mb-10"
      >
        <div className="flex items-center gap-3">
          <p className="text-lg font-semibold">My Linear Process</p>
          <hr className="w-[80px] border-[#575757]" />
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-[70px] xl:text-[100px] font-bold mt-4">
          Work Process
        </h2>
      </motion.div>

      {/* ==============================
          Work Process Cards Grid
          Each card represents a step in the workflow
      =============================== */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {workProcess.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="border border-[#2c2c2c] px-6 py-8 md:py-16 rounded-xl transition-all duration-300 
                       hover:shadow-lg sm:hover:border-transparent"
          >
            {/* Icon representing the step */}
            <Image
              src={item.icon}
              alt={item.title}
              width={50}
              height={50}
              className="w-10 h-10 md:w-14 md:h-14 lg:w-[50px] lg:h-[50px] mb-4"
            />

            {/* Step Title */}
            <h3 className="text-lg md:text-xl font-bold mb-3">{item.title}</h3>

            {/* Step Description */}
            <p className="text-sm md:text-base text-gray-300">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WorkProcessSection;
