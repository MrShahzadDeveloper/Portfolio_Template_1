"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// ==============================
// ProjectDetailCircle Component
// ==============================
// A circular rotating element used on project detail pages. 
// Contains an inner arrow icon and a circular text animation.
// Designed to visually highlight the project role (App/Website Developer).
const ProjectDetailCircle = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* ==============================
          Inner Circle
          ==============================
          A smaller centered circle with a border and an arrow icon.
          Serves as the focal point of the component.
      */}
      <div className="p-8 border rounded-full border-[#575757] relative z-10 flex items-center justify-center">
        <Image width={30} height={30} src="/arrow.svg" alt="App Developer" />
      </div>

      {/* ==============================
          Rotating Circular Text
          ==============================
          A text path arranged around a circular path.
          Rotates infinitely to create a dynamic effect.
      */}
      <motion.svg
        className="absolute w-[150px] h-[140px]"
        viewBox="0 0 100 100"
        overflow="visible"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ rotate: 360 }} // Full rotation
        transition={{
          repeat: Infinity,      // Loop forever
          ease: "linear",        // Smooth continuous rotation
          duration: 20,          // Rotation speed (increase = slower)
        }}
      >
        {/* ==============================
            Circular Path Definition
            ==============================
            Defines the path that the text follows.
            Two half-circles combined for full circular motion.
        */}
        <path
          id="outerCirclePath"
          d="M 0 50 
             A 1 1 0 0 1 100 50 
             A 1 1 0 0 1 0 50"
          fill="transparent"
          stroke="none"
        />

        {/* ==============================
            Text on Path
            ==============================
            Text rotates along the defined circular path.
            Styled with Outfit font, bold, and spaced letters.
        */}
        <text>
          <textPath
            href="#outerCirclePath"
            startOffset="0"
            dominantBaseline="central"
            style={{
              fontFamily: "Outfit, sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.38em",
              lineHeight: "0.5em",
              fill: "rgb(243,245,242)",
            }}
          >
            App - Developer - Website -
          </textPath>
        </text>
      </motion.svg>
    </div>
  );
};

export default ProjectDetailCircle;
