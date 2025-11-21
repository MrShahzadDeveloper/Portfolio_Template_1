"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import comma from "../../public/comma.svg";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import client images
import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpg";
import client3 from "../assets/client3.jpg";

// ✅ Type for a single testimonial
type Testimonial = {
  text: string;
  name: string;
  role: string;
  image: StaticImageData;
};

// ✅ Updated testimonial data for ThemeForest/Envato-style clients
const testimonials: Testimonial[] = [
  {
    text: "Jon Deo delivered a clean, modern, and fully responsive ThemeForest template. His attention to detail and design sense perfectly captured the essence of our brand, helping us attract more buyers.",
    name: "Sarah Mitchell",
    role: "Founder, Creative Agency",
    image: client1,
  },
  {
    text: "Working with Jon Deo on our Envato Marketplace SaaS theme was seamless. From custom components to responsive layouts, every aspect exceeded our expectations. His professionalism is unmatched.",
    name: "Edward Rhodes",
    role: "CEO, Solar Technologies",
    image: client2,
  },
  {
    text: "Jon Deo designed our Envato-ready e-commerce template with precision. His ability to implement complex UI/UX patterns while keeping performance high was impressive. Highly recommended for any marketplace projects.",
    name: "Alic Azoya",
    role: "CTO & Product Lead",
    image: client3,
  },
];

// Parent container for staggered animations
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

// Simple fade-up animation for child elements
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ✅ Individual Testimonial Card component
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex flex-col md:flex-row justify-between items-center gap-10"
    >
      {/* Left side: testimonial text */}
      <motion.div variants={containerVariants} className="max-w-2xl">
        {/* Floating comma icon for stylistic effect */}
        <motion.div
          animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div variants={fadeUp}>
            <Image
              src={comma}
              alt="comma"
              width={80}
              height={80}
              className="mb-6 text-[#C6FF00]"
            />
          </motion.div>
        </motion.div>

        {/* Testimonial text */}
        <motion.p
          variants={fadeUp}
          className="text-xl font-semibold leading-relaxed"
        >
          {testimonial.text}
        </motion.p>

        {/* Client info */}
        <motion.div variants={fadeUp} className="mt-6">
          <p className="font-bold text-lg">{testimonial.name}</p>
          <p className="text-gray-400 text-sm">{testimonial.role}</p>
        </motion.div>
      </motion.div>

      {/* Right side: client image */}
      <motion.div variants={fadeUp} className="shrink-0">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={300}
          height={350}
          className="rounded-lg rotate-0 md:rotate-3 shadow-lg object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

// ✅ Testimonial Section wrapper
const TestmonialSection = () => {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="px-4 md:px-16 xl:px-32 py-16 bg-black text-white">
      {/* Section Heading */}
      <motion.div
        ref={headingRef}
        variants={containerVariants}
        initial="hidden"
        animate={headingInView ? "visible" : "hidden"}
        className="mb-12"
      >
        {/* Subheading */}
        <motion.div variants={fadeUp} className="flex items-center gap-3">
          <p className="text-lg font-semibold">Testimonials</p>
          <hr className="w-[80px] border-[#575757]" />
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-5xl lg:text-[70px] font-bold mt-3"
        >
          What my clients say
        </motion.h2>
      </motion.div>

      {/* Testimonials List */}
      <div className="flex flex-col gap-20">
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} testimonial={t} />
        ))}
      </div>
    </section>
  );
};

export default TestmonialSection;
