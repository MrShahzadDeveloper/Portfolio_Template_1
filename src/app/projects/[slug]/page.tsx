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

// ✅ Animation Variants
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

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // ✅ inView hooks for scroll-triggered animations
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      {/* Hero Section */}
      <HeroHeader
        introText="Detailed Presentation"
        heading1="Project"
        heading2="Detail"
      />

      {/* Banner Image */}
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

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </section>

      {/* Project Details + Info */}
      <section className="mt-8 mb-20 px-4 md:px-16 xl:px-32 flex flex-col lg:flex-row gap-14">
        {/* Left Side */}
        <motion.div
          ref={ref1}
          variants={containerVariants}
          initial="hidden"
          animate={inView1 ? "show" : "hidden"}
          className="w-full lg:w-2/3 max-w-3xl"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-base sm:text-lg text-[#D8D8D8] mb-3">
              {project.category}
            </h3>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
              {project.title}
            </h1>
          </motion.div>

          <motion.hr
            variants={itemVariants}
            className="hidden sm:block w-full my-8 border-[#575757]"
          />

          <motion.div variants={itemVariants}>
            <p className="text-[#D8D8D8] mb-8">{project.para1}</p>
          </motion.div>

          {/* Image + Bullet Points */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-6"
          >
            <div className="w-full md:w-1/2 h-[220px] sm:h-[280px] md:h-[300px] relative overflow-hidden rounded-lg">
              <Image
                src={project.image}
                alt={`${project.title} Image`}
                fill
                className="object-cover object-top"
              />
            </div>

            <div className="text-[#D8D8D8] flex flex-col justify-center w-full md:w-1/2">
              <p className="mb-3">{project.para2}</p>
              <ul className="space-y-2">
                {[project.li1, project.li2, project.li3, project.li4].map(
                  (item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <MdCheck size={22} color="#C9F31D" />
                      <h3>{item}</h3>
                    </li>
                  )
                )}
              </ul>
            </div>
          </motion.div>

          <motion.p variants={itemVariants} className="text-[#D8D8D8] mt-8">
            {project.para3}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex justify-center"
          >
            <ProjectDetailAccordion />
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          ref={ref2}
          variants={containerVariants}
          initial="hidden"
          animate={inView2 ? "show" : "hidden"}
          className="w-full lg:w-1/3 text-white pt-6 lg:pt-10"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
          >
            Project Information
          </motion.h2>

          {/* Info Grid */}
          <div className="grid grid-cols-1 gap-6">
            {Object.entries(project.info).map(([key, value]) => {
              // ✅ skip website, handle stores separately
              if (key.toLowerCase() === "website") return null;
              if (key.toLowerCase() === "googlestore" || key.toLowerCase() === "appstore") return null;

              return (
                <motion.div key={key} variants={itemVariants}>
                  <h4 className="text-[#D8D8D8] text-base sm:text-lg capitalize">
                    {key.replace(/([A-Z])/g, " $1")}:
                  </h4>
                  <h1 className="text-xl sm:text-2xl font-medium">{value}</h1>
                </motion.div>
              );
            })}

            {/* ✅ App / Play Store Badges */}
            {(project.info.googleStore || project.info.appStore) && (
              <motion.div variants={itemVariants} className="flex gap-4 items-center">
                {project.info.googleStore && (
                  <Link
                    href={project.info.googleStore as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Image
                      src={googlePlay}
                      alt="Get it on Google Play"
                      width={140}
                      height={50}
                    />
                  </Link>
                )}
                {project.info.appStore && (
                  <Link
                    href={project.info.appStore as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Image
                      src={appstore}
                      alt="Download on the App Store"
                      width={140}
                      height={50}
                    />
                  </Link>
                )}
              </motion.div>
            )}
          </div>

          {/* Share On */}
          {/* <motion.div variants={itemVariants} className="mt-8">
            <h4 className="text-[#D8D8D8] text-base sm:text-lg mb-3">
              Share On:
            </h4>
            <div className="flex gap-3 flex-wrap">
              {project.socials?.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
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
          </motion.div> */}
        </motion.div>
      </section>
    </>
  );
};

export default ProjectDetailPage;
