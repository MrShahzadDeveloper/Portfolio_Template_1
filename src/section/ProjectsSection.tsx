"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { projects } from "@/data";
import Button from "@/components/Button";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * Card animation variants for Framer Motion.
 * Controls how each project card animates into view.
 */
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 }, // initial state (hidden)
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }, // animation timing
  },
};

/**
 * Heading container variants for staggered animation of children.
 */
const headingContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }, // stagger animation of heading elements
  },
};

/**
 * Individual heading animation variants.
 */
const headingItem: Variants = {
  hidden: { opacity: 0, y: 40 }, // initial hidden position
  visible: {
    opacity: 1,
    y: 0, // animate to original position
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/**
 * ProjectCard Component
 * Renders an individual project card with image, overlay, and hover effects.
 */
const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  // Detect if card is in viewport for animation
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants} // apply card animation
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // animate when in view
    >
      <Link href={`/projects/${project.slug}`} className="group">
        <div className="overflow-hidden relative">
          {/* Project Image */}
          <Image
            width={600}
            height={600}
            src={project.image}
            alt={project.title}
            className="
            w-full 
            object-contain 
            transition duration-500
            "
          />

          {/* Hover Overlay with Project Title */}
          <div
            className="
              absolute inset-0 bg-black/40 
              opacity-0 group-hover:opacity-100 
              transition-opacity duration-500 
              flex items-end justify-center pb-6 md:pb-12
            "
          >
            <button
              className="
                px-6 sm:px-8 md:px-10 py-2 sm:py-3 
                text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold 
                bg-[#C9F31D] text-black shadow-md rounded 
                transform translate-y-10 opacity-0
                group-hover:translate-y-0 group-hover:opacity-100
                transition-all duration-500 ease-out
              "
            >
              {project.title}
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

/**
 * ProjectsSection Component
 * Displays a portfolio section with heading, floating star animation,
 * project cards in two columns, and a "All Projects" button.
 */
const ProjectsSection = () => {
  // Slice first 4 projects to display
  const slicedProjects = projects.slice(0, 4);

  // Split projects into left and right columns
  const leftColumn = slicedProjects.filter((_, i) => i % 2 === 0);
  const rightColumn = slicedProjects.filter((_, i) => i % 2 === 1);

  // Intersection Observer for heading animation
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="px-4 md:px-12 lg:px-20 xl:px-32 bg-[#020202] py-12 md:py-16 lg:py-20">
      {/* Section Heading with staggered animation */}
      <motion.div
        ref={headingRef}
        variants={headingContainer}
        initial="hidden"
        animate={headingInView ? "visible" : "hidden"}
        className="flex justify-center items-end mb-12 md:mb-20"
      >
        {/* Main Heading */}
        <motion.h1
          variants={headingItem}
          className="
            text-[40px] sm:text-[60px] md:text-[100px] lg:text-[120px] xl:text-[150px] 
            text-white font-bold uppercase leading-none text-center
          "
        >
          Portfolio
        </motion.h1>

        {/* Floating Star next to heading */}
        <motion.div
          variants={headingItem}
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            width={70}
            height={70}
            src="/star2.svg"
            alt="star"
            className="ml-3 sm:ml-6 w-8 sm:w-12 md:w-16 lg:w-20"
          />
        </motion.div>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Left Column */}
        <div className="flex flex-col gap-6 md:gap-14">
          {leftColumn.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 md:gap-14 mt-0 md:mt-20">
          {rightColumn.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>

      {/* CTA Button for All Projects */}
      <div className="mt-12 md:mt-20 flex justify-center">
        <Link href="/projects">
          <Button text="All Projects" />
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
