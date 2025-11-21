"use client";

import { FiSearch, FiPenTool, FiCode, FiSend } from "react-icons/fi";
import React from "react";
import { motion, Variants } from "framer-motion";

// ==============================
// Services Data
// ==============================
const services = [
  {
    icon: <FiSearch className="text-3xl text-[#C9F31D]" />,
    title: "Step 01. Research & Planning",
    description:
      "I start by understanding your business goals, audience, and challenges. This helps define a clear roadmap and strategy before development begins.",
  },
  {
    icon: <FiPenTool className="text-3xl text-[#C9F31D]" />,
    title: "Step 02. Design & Prototyping",
    description:
      "I create wireframes, prototypes, and visual designs to craft user-friendly interfaces that align with your brand and user needs.",
  },
  {
    icon: <FiCode className="text-3xl text-[#C9F31D]" />,
    title: "Step 03. Development & Testing",
    description:
      "I build scalable, secure, and high-performing websites or applications, followed by thorough testing to ensure quality and reliability.",
  },
  {
    icon: <FiSend className="text-3xl text-[#C9F31D]" />,
    title: "Step 04. Launch & Support",
    description:
      "I deploy your product smoothly and provide ongoing support, updates, and optimizations to ensure long-term success.",
  },
];

// ==============================
// Framer Motion Variants
// ==============================
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 }, // Initial state: hidden and moved down
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } // Animate up with easing
  },
};

// ==============================
// ServiceCards Component
// ==============================
const ServiceCards = () => {
  return (
    <section className="grid grid-cols-1 gap-6 mt-12">
      {services.map((service, index) => (
        // Motion card with hover & animation
        <motion.div
          key={index}
          className="bg-[#111] border border-gray-800 rounded-lg p-6 hover:border-[#C9F31D] transition-all group shadow-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          {/* Service Icon */}
          <div className="mb-4">{service.icon}</div>

          {/* Service Title */}
          <h3 className="text-lg font-semibold text-white group-hover:text-[#C9F31D] transition">
            {service.title}
          </h3>

          {/* Service Description */}
          <p className="text-sm text-gray-400 mt-2">{service.description}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default ServiceCards;
