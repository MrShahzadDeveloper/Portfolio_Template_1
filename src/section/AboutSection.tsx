"use client";

import React from "react";
import Image from "next/image";
import profile from "../assets/aboutPentos.png"; // Buyer can replace with their own profile image
import Button from "@/components/Button";
import Link from "next/link";
import CountUp from "react-countup";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * AboutSection Component - ThemeForest / Envato Ready
 * Features:
 * - Responsive layout (image + text + stats)
 * - Animated stats using CountUp
 * - Floating bolt animation
 * - Fully commented for easy customization
 */

/** Container animation variants */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // Each child animates one after another
      when: "beforeChildren",
    },
  },
};

/** Individual item animation variants */
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AboutSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once when scrolled into view
    threshold: 0.2,
  });

  return (
    <section className="px-4 md:px-12 xl:px-32">
      {/* Attach intersection ref to trigger animations */}
      <div ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header: About title + main heading */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
            variants={itemVariants}
          >
            <div>
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-5"
              >
                <h3 className="font-bold text-lg md:text-xl text-white ml-[6px]">
                  About {/* Section title, replaceable */}
                </h3>
                <hr className="w-[50px] md:w-[70px] text-[#575757]" />
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl text-white font-bold leading-tight"
              >
                Passion for <br /> Digital Innovation{" "}
                {/* Replaceable demo heading */}
              </motion.h1>
            </div>

            {/* Floating bolt animation (decorative) */}
            <motion.div
              animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                width={60}
                height={60}
                src="/bolt.svg" // Decorative, can be replaced
                alt="bolt"
                className="sm:w-[100px] sm:h-[100px]"
              />
            </motion.div>
          </motion.div>

          {/* Content Section: Image + Text + Stats */}
          <div className="mt-16 flex flex-col xl:flex-row justify-between gap-12 lg:gap-20 items-center">
            {/* Profile Image */}
            <motion.div
              className="relative w-full sm:w-[400px] md:w-[500px] h-[450px] sm:h-[500px] md:h-[550px] flex-shrink-0"
              variants={itemVariants}
            >
              <Image
                fill
                src={profile}
                alt="Profile Image"
                className="rounded-t-2xl shadow-md object-cover object-top
                [mask-image:linear-gradient(to_bottom,black_85%,transparent)]
                [mask-repeat:no-repeat] [mask-size:100%_100%]"
              />
            </motion.div>

            {/* Text Content + Stats */}
            <motion.div
              className="text-[rgb(210,210,210)] flex-1"
              variants={itemVariants}
            >
              {/* Description / Bio */}
              <motion.div
                className="text-base sm:text-lg max-w-full md:max-w-[600px]"
                variants={itemVariants}
              >
                <p className="mb-6 md:mb-10">
                  My journey began with a simple yet powerful idea: to
                  revolutionize the digital landscape through innovative
                  solutions and exceptional creativity.{" "}
                  {/* Replace with your own introduction */}
                </p>
                <p>
                  Driven by a passion for design and technology, I set out to
                  create unique digital experiences that make an impact online.{" "}
                  {/* Replaceable */}
                </p>
              </motion.div>

              {/* Stats Block: Editable numbers and labels */}
              <motion.div
                className="mt-10 flex flex-col sm:flex-row items-center sm:justify-start gap-8 sm:gap-12 text-white text-center sm:text-left"
                variants={itemVariants}
              >
                <motion.div variants={itemVariants}>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#C9F31D]">
                    {inView && <CountUp end={100} duration={3} suffix="+" />}{" "}
                    {/* Replaceable number */}
                  </h3>
                  <p className="text-sm text-gray-300">Projects Completed</p>{" "}
                  {/* Replaceable label */}
                </motion.div>

                <div className="hidden sm:block h-8 w-px bg-gray-700" />

                <motion.div variants={itemVariants}>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#C9F31D]">
                    {inView && <CountUp end={145} duration={3} suffix="+" />}
                  </h3>
                  <p className="text-sm text-gray-300">Happy Clients</p>
                </motion.div>

                <div className="hidden sm:block h-8 w-px bg-gray-700" />

                <motion.div variants={itemVariants}>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#C9F31D]">
                    {inView && <CountUp end={259} duration={3} separator="," />}
                  </h3>
                  <p className="text-sm text-gray-300">Cups of Coffee</p>
                </motion.div>
              </motion.div>

              {/* Call-to-Action Button */}
              <motion.div
                className="py-10 flex justify-center items-center md:justify-start"
                variants={itemVariants}
              >
                <Link href="/about">
                  <Button text="About Me" /> {/* Replaceable button text */}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
