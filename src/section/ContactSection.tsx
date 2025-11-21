"use client";

import Button from "@/components/Button";
import Link from "next/link";
import React from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

// ✅ Container variants for staggered animations of child elements
const containerVariants: Variants = {
  hidden: {}, // initial state
  visible: {
    transition: { staggerChildren: 0.25 }, // children appear sequentially
  },
};

// ✅ Fade-up animation for headings, text, and button
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 }, // start below and invisible
  visible: {
    opacity: 1, // fade in
    y: 0, // move to natural position
    transition: { duration: 0.6, ease: "easeOut" }, // smooth timing
  },
};

// ✅ Contact Section component
const ContactSection = () => {
  // Using Intersection Observer to trigger animations when section is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.2, // 20% of section visible to trigger
  });

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="px-4 md:px-16 xl:px-32 py-20 flex flex-col justify-center items-center text-white text-center"
    >
      {/* Heading */}
      <motion.h1
        variants={fadeUp}
        className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl xl:text-[10rem] font-extrabold text-[#C9F31D] leading-tight"
      >
        Let’s Talk
      </motion.h1>

      {/* Email Address */}
      <motion.p
        variants={fadeUp}
        className="text-lg sm:text-2xl md:text-4xl lg:text-6xl xl:text-8xl font-bold mt-4 break-words"
      >
        Jon_Deo@hotmail.com
      </motion.p>

      {/* Contact Button */}
      <motion.div variants={fadeUp} className="py-10">
        <Link href={"/contact"}>
          <Button text="Contact Me" />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ContactSection;
