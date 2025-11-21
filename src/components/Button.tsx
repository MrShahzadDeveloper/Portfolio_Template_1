"use client";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

// ==============================
// Button Component
// ==============================
// A circular interactive button with hover animation.
// Features a background dot that expands on hover and a fixed arrow icon.
// Props:
// - text: The button label.
// - onClick: Optional click handler function.
// - fillColor: Optional background color (default green #C9F31D).
interface ButtonProps {
  text: string;
  onClick?: () => void;
  fillColor?: string; // Default green
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  fillColor = "#C9F31D",
}) => {
  return (
    <button
      onClick={onClick}
      className="relative cursor-pointer flex items-center justify-center w-30 h-30 sm:w-35 sm:h-35 rounded-full border border-gray-500 overflow-hidden group transition-all duration-300"
    >
      {/* ==============================
          Background Dot (Expands on Hover)
          ==============================
          Creates a visual effect where the dot expands to cover the button
          on hover. The scale transforms from 20% to 100% smoothly.
      */}
      <span
        className="absolute bottom-0 left-0 w-full h-full rounded-full scale-20 group-hover:scale-100 transition-transform duration-500 origin-bottom-left"
        style={{ backgroundColor: fillColor }}
      ></span>

      {/* ==============================
          Small Dot Preview
          ==============================
          A small static dot at the bottom-left to hint at the hover effect.
      */}
      <span
        className="absolute bottom-0 left-0 w-10 h-10 rounded-full"
        style={{ backgroundColor: fillColor }}
      ></span>

      {/* ==============================
          Text and Icon
          ==============================
          The main button label with a fixed arrow icon.
          Changes color on hover for contrast against the expanding background.
      */}
      <span className="relative z-10 flex items-center gap-2 text-white group-hover:text-black font-semibold">
        {text}
        <FiArrowUpRight />
      </span>
    </button>
  );
};

export default Button;
