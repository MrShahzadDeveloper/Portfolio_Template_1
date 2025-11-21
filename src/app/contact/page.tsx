"use client";

import HeroHeader from "@/components/Header";
import ContactSection from "@/section/ContactSection";
import React, { useState } from "react";
import { FiPhone, FiMail, FiMapPin, FiArrowUpRight } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Page = () => {
  // ==============================
  // Form state
  // ==============================
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  // ==============================
  // Handle input change
  // ==============================
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ==============================
  // Handle form submission
  // ==============================
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/tahir_csf13@hotmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        toast.success("Message sent successfully!");
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      toast.error("Failed to send message. Try again later.");
    } finally {
      setStatus("idle");
    }
  };

  // ==============================
  // Framer Motion animation variants
  // ==============================
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // inView hook for the form section
  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="bg-black text-white">
      {/* Hero Header */}
      <HeroHeader introText="Say Hi!" heading1="Contact" heading2="Today!" />

      <div className="px-4 md:px-16 xl:px-32 py-10">
        {/* Page Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mb-10"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3"
          >
            <p className="text-lg font-semibold">Estimate Your Project</p>
            <hr className="w-[80px] text-[#575757]" />
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-8xl font-bold"
          >
            Get in touch
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* ==============================
              Company Info Section
          ============================== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="bg-[#0c0c0c] p-10 rounded-md"
          >
            <motion.h2
              variants={itemVariants}
              className="text-xl font-bold mb-8"
            >
              Company Info
            </motion.h2>
            <div className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4"
              >
                <FiPhone className="text-[#C9F31D] text-2xl" />
                <p>+1 234 567 8900</p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4"
              >
                <FiMail className="text-[#C9F31D] text-2xl" />
                <p>Jon_Deo@hotmail.com</p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4"
              >
                <FiMapPin className="text-[#C9F31D] text-2xl" />
                <p>California, USA</p>
              </motion.div>
            </div>
          </motion.div>

          {/* ==============================
              Contact Form Section
          ============================== */}
          <motion.form
            ref={formRef}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
            variants={containerVariants}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Name Fields */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div>
                <label className="block mb-2 text-sm font-semibold">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-700 focus:outline-none py-2"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-700 focus:outline-none py-2"
                />
              </div>
            </motion.div>

            {/* Email & Phone */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div>
                <label className="block mb-2 text-sm font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-700 focus:outline-none py-2"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-700 focus:outline-none py-2"
                />
              </div>
            </motion.div>

            {/* Message Field */}
            <motion.div variants={itemVariants}>
              <label className="block mb-2 text-sm font-semibold">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Write here...."
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-700 focus:outline-none py-2"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={status === "sending"}
              variants={itemVariants}
              className="relative overflow-hidden px-6 py-3 font-semibold flex items-center gap-2 w-fit text-black bg-[#C9F31D] group transition"
            >
              <span className="relative z-10 text-sm flex items-center gap-2">
                {status === "sending" ? "Sending..." : "SEND MESSAGE"}{" "}
                <FiArrowUpRight />
              </span>
              <span className="absolute left-0 top-0 h-full w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
            </motion.button>
          </motion.form>
        </div>
      </div>

      {/* Reusable Contact Section (optional extra content) */}
      <ContactSection />

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default Page;
