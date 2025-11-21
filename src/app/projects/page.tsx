'use client'

import HeroHeader from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data";
import ContactSection from "@/section/ContactSection";
import { motion } from "framer-motion";

const ProjectDetailPage: React.FC = () => {
  return (
    <section className="flex flex-col min-h-[80vh]">
      {/* ==============================
          Hero Header Section
          Displays intro text and main headings
          Envato/ThemeForest style comment
      =============================== */}
      <HeroHeader
        introText="Detailed Presentation"
        heading1="Project"
        heading2="Completed"
      />

      {/* ==============================
          Floating Star Animation
          Animated star floating above the projects grid
          Using Framer Motion for smooth y/x movement
      =============================== */}
      <div className="flex justify-center items-end mb-12 md:mb-20">
        <motion.div
          animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
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
      </div>

      {/* ==============================
          Projects Grid Section
          Maps through the projects array and displays project cards
          Each card has hover overlay with project title button
          Animated entrance using Framer Motion
      =============================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4 sm:px-8 md:px-16 xl:px-32 pb-10 md:pb-20">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* ==============================
                Single Project Card
                Contains project image and hover overlay
            =============================== */}
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
                    object-cover object-top 
                    transition duration-500
                  "
                />

                {/* Hover Overlay */}
                <div className="
                    absolute inset-0 bg-black/40 
                    opacity-0 group-hover:opacity-100 
                    transition-opacity duration-500 
                    flex items-end justify-center pb-6 md:pb-12
                  ">
                  <button className="
                      px-6 sm:px-8 md:px-10 py-2 sm:py-3 
                      text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold 
                      bg-[#C9F31D] text-black shadow-md rounded 
                      transform translate-y-10 opacity-0
                      group-hover:translate-y-0 group-hover:opacity-100
                      transition-all duration-500 ease-out
                    ">
                    {project.title}
                  </button>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* ==============================
          Contact Section
          Reusable contact CTA component
          Envato-style structured comment
      =============================== */}
      <ContactSection />
    </section>
  );
};

export default ProjectDetailPage;
