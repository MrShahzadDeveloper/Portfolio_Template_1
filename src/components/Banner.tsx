import Marquee from "react-fast-marquee";

// ==============================
// Keywords to display in the marquee
// ==============================
const keywords = ["Designer", "Developer", "Creative", "Problem Solver"];

// ==============================
// Star Icon Component
// Reusable star SVG used between keywords
// ==============================
const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4 sm:w-6 sm:h-6 md:w-10 md:h-10 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-white flex-shrink-0"
  >
    <path d="M12 2L15 9l7 3-7 3-3 7-3-7-7-3 7-3z" />
  </svg>
);

// ==============================
// Banner Component
// Displays a horizontally scrolling marquee of keywords with stars in between
// ==============================
const Banner = () => {
  return (
    <div className="py-4 md:py-16 lg:py-20 overflow-hidden">
      {/* Marquee component */}
      <Marquee
        gradient={false}           // No gradient effect at edges
        speed={40}                 // Scroll speed
        direction="right"          // Scroll direction: left → right
        pauseOnHover={true}        // Pause on hover
        className="py-4"
      >
        {/* Repeat the keyword sequence twice for continuous scrolling */}
        {Array.from({ length: 2 }).map((_, idx) => (
          <div key={idx} className="flex items-center space-x-6 sm:space-x-10 mr-8">
            {/* Map over keywords */}
            {keywords.map((word, i) => (
              <div key={i} className="flex items-center space-x-4 sm:space-x-6">
                {/* Keyword text */}
                <span className="text-2xl md:text-4xl lg:text-6xl xl:text-[100px] font-bold text-white">
                  {word}
                </span>
                {/* Insert star icon between keywords (except after last) */}
                {i !== keywords.length - 1 && <StarIcon />}
              </div>
            ))}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Banner;
