"use client";

import * as React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/data";
import { MdCheck } from "react-icons/md";
import ProjectDetailAccordion from "@/components/ProjectDetailAccordian";
import Link from "next/link";
import googlePlay from "../../../assets/googlepaly.png";
import appstore from "../../../assets/appStore.png"; // ✅ App Store badge
import HeroHeader from "@/components/Header";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa6";

// ==============================
// Animation Variants
// ==============================
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ProjectDetailPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  // ✅ unwrap params using React.use()
  const { slug } = React.use(params);

  // ✅ find the project by slug
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  // ✅ inView hooks for scroll-triggered animations
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      {/* ==============================
          Hero Section
          Displays project detail heading and intro text
      =============================== */}
      <HeroHeader
        introText="Detailed Presentation"
        heading1="Project"
        heading2="Detail"
      />

      {/* ==============================
          Banner Image Section
          Full-width project image with gradient overlay
      =============================== */}
      <section className="w-full h-[300px] sm:h-[450px] md:h-[600px] lg:h-[750px] relative overflow-hidden">
        <div className="absolute inset-0 shadow-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </section>

      {/* ==============================
          Project Details Section
          Left: Text, Images, Bullet Points
          Right: Project Info + Socials
      =============================== */}
      <section className="mt-8 mb-20 px-4 md:px-16 xl:px-32 flex flex-col lg:flex-row gap-14">
        {/* ------------------------------
            Left Side: Project Content
        ------------------------------ */}
        <motion.div
          ref={ref1}
          variants={containerVariants}
          initial="hidden"
          animate={inView1 ? "show" : "hidden"}
          className="w-full lg:w-2/3 max-w-3xl"
        >
          {/* Category & Title */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base sm:text-lg text-[#D8D8D8] mb-3">{project.category}</h3>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
              {project.title}
            </h1>
          </motion.div>

          <motion.hr
            variants={itemVariants}
            className="hidden sm:block w-full my-8 border-[#575757]"
          />

          {/* Paragraph 1 */}
          <motion.div variants={itemVariants}>
            <p className="text-[#D8D8D8] mb-8">{project.para1}</p>
          </motion.div>

          {/* Image + Bullet Points */}
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-6">
            {/* Project Image */}
            <div className="w-full md:w-1/2 h-[220px] sm:h-[280px] md:h-[300px] relative overflow-hidden rounded-lg">
              <Image
                src={project.image}
                alt={`${project.title} Image`}
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Bullet Points */}
            <div className="text-[#D8D8D8] flex flex-col justify-center w-full md:w-1/2">
              <p className="mb-3">{project.para2}</p>
              <ul className="space-y-2">
                {[project.li1, project.li2, project.li3, project.li4].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <MdCheck size={22} color="#C9F31D" />
                    <h3>{item}</h3>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

       

          {/* Accordion */}
          <motion.div variants={itemVariants} className="mt-10 flex justify-center">
            <ProjectDetailAccordion />
          </motion.div>
        </motion.div>

        {/* ------------------------------
            Right Side: Project Info + Socials
        ------------------------------ */}
        <motion.div
          ref={ref2}
          variants={containerVariants}
          initial="hidden"
          animate={inView2 ? "show" : "hidden"}
          className="w-full lg:w-1/3 text-white pt-6 lg:pt-10"
        >
          {/* Heading */}
          <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Project Information
          </motion.h2>

          {/* Project Info Grid */}
          <div className="grid grid-cols-1 gap-6">
            {Object.entries(project.info).map(([key, value]) => {
              if (["website", "googlestore", "appstore"].includes(key.toLowerCase())) return null;
              return (
                <motion.div key={key} variants={itemVariants}>
                  <h4 className="text-[#D8D8D8] text-base sm:text-lg capitalize">
                    {key.replace(/([A-Z])/g, " $1")}:
                  </h4>
                  <h1 className="text-xl sm:text-2xl font-medium">{value}</h1>
                </motion.div>
              );
            })}
          </div>

          {/* Social Media Links */}
          <motion.div variants={itemVariants} className="mt-8">
            <h4 className="text-[#D8D8D8] text-base sm:text-lg mb-3">Share On:</h4>
            <div className="flex gap-3 flex-wrap">
              {[
                { icon: FaFacebookF, link: "https://facebook.com" },
                { icon: FaLinkedinIn, link: "https://linkedin.com" },
                { icon: FaInstagram, link: "https://instagram.com" },
                { icon: FaGithub, link: "https://github.com" },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#C9F31D] hover:text-black transition"
                  >
                    <Icon className="text-base sm:text-lg" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default ProjectDetailPage;
