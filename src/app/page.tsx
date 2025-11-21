import Banner from "@/components/Banner";
import AboutSection from "@/section/AboutSection";
import ContactSection from "@/section/ContactSection";
import HeroSection from "@/section/HeroSection";
import ProjectsSection from "@/section/ProjectsSection";
import ServicesSection from "@/section/ServicesSection";
import TestmonialSection from "@/section/TestmonialSection";

export default function Home() {
  return (
    <div className="">
      {/* Hero / Introduction Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Scrolling Banner with keywords */}
      <Banner />

      {/* Services / What I Offer */}
      <ServicesSection />

      {/* Projects / Portfolio Section */}
      <ProjectsSection />

      {/* Testimonials Section */}
      <TestmonialSection />

      {/* Contact / Get in Touch */}
      <ContactSection />
    </div>
  );
}
