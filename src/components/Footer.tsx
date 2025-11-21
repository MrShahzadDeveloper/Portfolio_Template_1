"use client";

import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ✅ Footer Component
export default function Footer() {
  const [year, setYear] = useState<number | null>(null);
  const [email, setEmail] = useState("");

  // Set current year dynamically
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  // Handle newsletter subscription form
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    toast.success(`Subscribed successfully with: ${email}`, {
      position: "top-right",
      autoClose: 3000,
    });

    setEmail("");
  };

  return (
    <>
      <footer className="bg-black text-gray-300 px-4 md:px-16 xl:px-32 py-6 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* About Jon Deo */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">About Me</h3>
            <p className="text-sm leading-6">
              I’m Jon Deo, a passionate software engineer specializing in app and web development.
              I create scalable, user-friendly digital solutions that turn ideas into impactful experiences.
            </p>
            {/* Social Media Links */}
            <div className="flex gap-4 mt-6">
              {[
                { Icon: FaFacebookF, link: "https://www.facebook.com/jondeo" },
                { Icon: FaLinkedinIn, link: "https://www.linkedin.com/in/jondeo/" },
                { Icon: FaInstagram, link: "https://www.instagram.com/jondeo/" },
                { Icon: FaGithub, link: "https://github.com/jondeo" },
              ].map(({ Icon, link }, idx) => (
                <a
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#C9F31D] hover:text-black transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Navigation</h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Projects", href: "/projects" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="relative inline-block cursor-pointer transition text-gray-300 hover:text-[#C9F31D]
                               before:absolute before:left-0 before:bottom-0 before:h-[1px] before:bg-white
                               before:w-0 before:transition-all before:duration-300
                               hover:before:w-full"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Offered */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              {[
                "App Development",
                "Web Development",
                "UX/UI Design",
                "Branding & Identity",
                "Analytics & Strategy",
              ].map((service) => (
                <li key={service}>
                  <span
                    className="relative inline-block cursor-pointer transition text-gray-300 hover:text-[#C9F31D]
                               before:absolute before:left-0 before:bottom-0 before:h-[1px] before:bg-white
                               before:w-0 before:transition-all before:duration-300
                               hover:before:w-full"
                  >
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Newsletter</h3>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex items-center border-b border-gray-700"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-2 py-3 w-full bg-transparent focus:outline-none text-sm placeholder-gray-500"
              />
              <button
                type="submit"
                className="bg-[#C9F31D] text-black w-10 h-9 flex items-center justify-center rounded-full hover:opacity-90 transition -ml-2 cursor-pointer"
              >
                <FaArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center text-xs text-gray-500 mt-12 border-t border-gray-800 pt-6">
          © {year ?? ""} Jon Deo. All rights reserved.
        </div>
      </footer>

      {/* Toast Notifications */}
      <ToastContainer />
    </>
  );
}
