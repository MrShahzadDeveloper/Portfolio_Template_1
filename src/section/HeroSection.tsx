"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import bg from "../assets/bg.avif";
import Circle from "@/components/Circle";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

/**
 * HeroSection - Envato/ThemeForest ready
 * This section uses placeholder/demo data so buyers can replace easily.
 * Author info, titles, and description are all generic.
 */

// ✅ Properly typed variants for motion animations
const textVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const HeroSection = () => {
  return (
    <section className="relative w-full h-[70vh] sm:h-screen flex items-center px-4 sm:px-8 md:px-16 xl:px-32 sm:pt-24 text-white bg-[url('/bg-grid.svg')] bg-no-repeat bg-left bg-contain overflow-hidden pb-8 md:pb-20">
      {/* Glowing Circle background */}
      <div className="absolute left-[-100px] top-[40%] -translate-y-1/2 -z-10 pointer-events-none">
        <Circle />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 ">
        {/* Intro Text */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 mb-4"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={0}
        >
          {/* Replace "Your Name" with buyer's info */}
          <h3 className="font-bold text-sm sm:text-xl text-center sm:text-left">
            Hey There! John Doe {/* Replace "John Doe" with your own name */}
          </h3>

          <hr className="hidden sm:block w-[80px] border-[#575757]" />
        </motion.div>

        {/* Hero Title with Background Image */}
        <div className="relative flex flex-col gap-6 sm:gap-10">
          {/* Background image */}
          <div className="absolute sm:-right-[100px] top-[90%] sm:top-[70%] -translate-y-1/2 -z-10 opacity-70 pointer-events-none">
            <Image
              src={bg}
              alt="background"
              width={600}
              height={600}
              priority
              unoptimized
              className="object-contain w-[300] h-[300] sm:w-[600] sm:h-[600]"
            />
          </div>

          {/* Titles */}
          <div>
            <div className="flex justify-center sm:justify-start gap-3 sm:items-end sm:gap-6 sm:mb-5">
              <motion.span
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-2xl sm:text-6xl xl:text-[75px] border-b font-bold text-[#C9F31D] leading-none mb-2 sm:mb-3 w-fit flex justify-center sm:justify-end items-end"
              >
                Senior
              </motion.span>

              <motion.h1
                custom={2}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-5xl sm:text-7xl xl:text-[150px] font-bold uppercase leading-none relative z-10"
              >
                Web
              </motion.h1>

              {/* Slow rotating star */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              >
                <Image
                  src="/star.svg"
                  alt="star"
                  width={120}
                  height={120}
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-[120px] lg:h-[120px] mt-1 sm:mt-0"
                />
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 relative z-10">
              {/* Floating rings animation */}
              <motion.div
                animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/rings.svg"
                  alt="rings"
                  width={350}
                  height={80}
                  className="hidden sm:block w-28 h-8 sm:w-40 sm:h-10 md:w-60 md:h-14 lg:w-[350px] lg:h-[80px] mt-4 sm:mt-0"
                />
              </motion.div>

              {/* Main Hero Text */}
              <motion.h1
                custom={3}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-5xl text-center sm:text-start sm:text-7xl xl:text-[150px] font-bold uppercase leading-none"
              >
                Developer
              </motion.h1>
            </div>
          </div>

          {/* Paragraph / Description */}
          <motion.p
            custom={4}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-lg md:max-w-2xl text-[#D2D2D2] mt-6 sm:mt-0 text-center sm:text-left relative z-10"
          >
            I believe in creativity and innovation to transform ideas into
            amazing digital experiences. Working closely with clients, John Doe
            strives to bring visions to life.{" "}
            {/* Replace with your own intro */}
          </motion.p>
        </div>

          {/* CTA Button */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="py-10"
        >
          <Link href="/contact">
            <Button text="LET'S TALK" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
