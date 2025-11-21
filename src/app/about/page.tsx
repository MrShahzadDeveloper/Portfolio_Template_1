import React from "react";

// ==============================
// Sections Imports
// ==============================
import ContactSection from "@/section/ContactSection";
import ServicesSection from "@/section/ServicesSection";
import AboutSection from "@/section/AboutSection";
import WorkProcessSection from "@/section/WorkProcessSection";
import TechStackSection from "@/section/TechStackSection";
import TestmonialSection from "@/section/TestmonialSection";
import HeroHeader from "@/components/Header";

// ==============================
// Main Page Component
// ==============================
const Page = () => {
  return (
    <div className="">
      {/* ==============================
          Hero Section
          Displays intro text and headings
      =============================== */}
      <HeroHeader
        introText="Hey There, Its"
        heading1="Jon Deo"
        heading2="Web Developer"
      />

      {/* ==============================
          About Section
          Provides details about the developer
      =============================== */}
      <AboutSection />

      {/* ==============================
          Work Process Section
          Explains the workflow or development process
      =============================== */}
      <WorkProcessSection />

      {/* ==============================
          Tech Stack Section
          Displays tools, frameworks, and technologies used
      =============================== */}
      <TechStackSection />

      {/* ==============================
          Services Section
          Showcases offered services
      =============================== */}
      <ServicesSection />

      {/* ==============================
          Testimonial Section
          Displays client feedback and reviews
      =============================== */}
      <TestmonialSection />

      {/* ==============================
          Contact Section
          Call-to-action for getting in touch
      =============================== */}
      <ContactSection />
    </div>
  );
};

export default Page;
