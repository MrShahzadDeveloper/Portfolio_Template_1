import BullDogs from "./assets/BullDogs.png";
import barbr from "./assets/barbr.png";
import chargers from "./assets/chargers.png";
import haApp from "./assets/haApp.png";
import bea from "./assets/bea.png";
import lions from "./assets/loins.png";
import haWeb from "./assets/ha.png";
import vibe from "./assets/VibeMaching.png";
import digifootApp from "./assets/DigiFoot.png";
import mamuApp from "./assets/mamu.png";
import client4 from "./assets/c4.png";
import client5 from "./assets/c5.jpeg";

import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

import client1 from "./assets/c1.jpeg";
import client2 from "./assets/c2.jpeg";
import client3 from "./assets/c3.png";

export const services = [
  {
    id: 1,
    title: "App Development",
    details:
      "In today’s digital-first world, mobile apps are essential for connecting with customers and enhancing business growth. Our app development services cover everything from idea validation and UI/UX design to development and deployment. We specialize in building cross-platform mobile applications using React Native and Expo, allowing you to reach both iOS and Android users with a single, cost-effective solution. Our apps are designed to be fast, reliable, and user-friendly, offering features like push notifications, secure authentication, real-time updates, and seamless API integrations. Whether you need an e-commerce app, a booking system, or a custom solution for your business, we deliver apps that provide exceptional performance, scalability, and a delightful user experience.",
  },
  {
    id: 2,
    title: "Web Development",
    details:
      "Our web development services focus on creating fast, secure, and modern websites tailored to your unique business needs. We specialize in building responsive websites that adapt seamlessly to any device, ensuring an excellent user experience across desktops, tablets, and mobile phones. Using cutting-edge technologies like React, Next.js, and Tailwind CSS, we develop scalable web solutions that not only look great but also perform exceptionally well. From simple landing pages to complex web applications, we emphasize clean code, optimized performance, and SEO-friendly structures to help your business stand out and grow online.",
  },
  {
    id: 3,
    title: "Branding & Identity",
    details:
      "Your brand is more than just a logo — it’s the personality and story of your business. Our branding and identity services help you create a strong and lasting impression on your audience. We design logos, color palettes, typography, and complete brand guidelines that align with your company’s vision and values. Beyond visuals, we also focus on shaping your brand’s tone and strategy to ensure consistency across all platforms. Whether you’re launching a new business or refreshing an existing identity, we craft designs and brand assets that not only look professional but also build trust, recognition, and loyalty with your audience.",
  },
  {
    id: 4,
    title: "UX/UI Design",
    details:
      "We believe that great design goes beyond aesthetics — it’s about how users feel when interacting with your product. Our UX/UI design services aim to create intuitive, user-friendly, and visually engaging interfaces that enhance the overall digital experience. We conduct in-depth research and user testing to understand your audience’s needs and behaviors, then design interfaces that are both beautiful and functional. From wireframes and prototypes to final polished designs, we focus on clarity, accessibility, and seamless navigation. The result is a design that not only delights users but also drives higher engagement, satisfaction, and conversions.",
  },
];

export const projects = [
  {
    slug: "ha",
    title: "Ha Health AI",
    category: "Technology",
    para1:
      "Hā Health is your AI-powered wellness companion, built on evidence-based nutrition and holistic health principles. The app creates affordable meal plans, tracks exercise, and provides mindfulness tools tailored to your lifestyle.",
    para2:
      "Whether it’s managing a diet on a budget, staying consistent with workouts, or practicing meditation, Hā adapts to your personal needs. It delivers actionable, AI-personalised insights backed by science and dietitian best practices.",
    para3:
      "Hā means breath, energy, vitality—empowering you and your family to live healthier, longer lives with smart, adaptive guidance and real-time progress tracking.",
    description:
      "An AI-powered health and wellness app focused on nutrition, fitness, and mindfulness.",
    li1: "AI Meal Planning",
    li2: "Fitness & Mindfulness Tools",
    li3: "Affordable Nutrition Guidance",
    li4: "Progress Tracking & Insights",
    image: haApp,
    info: {
      client: "Hā Labs",
      category: "HealthTech",
      completedOn: "August 12, 2025",
      googleStore:
        "https://play.google.com/store/apps/details?id=com.ha.accelrate",
      appStore: "https://apps.apple.com/pk/app/h%C4%81-app/id6751707249 ",
    },
    socials: [
      {
        name: "Facebook",
        icon: FaFacebookF,
        link: "https://facebook.com/hahealth",
      },
      {
        name: "Twitter",
        icon: FaXTwitter,
        link: "https://twitter.com/hahealth",
      },
      {
        name: "Instagram",
        icon: FaInstagram,
        link: "https://instagram.com/hahealth",
      },
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com/@hahealth",
      },
    ],
  },
  {
    slug: "bea-ai",
    title: "Bea AI",
    category: "Beauty & Lifestyle",
    para1:
      "Bea AI helps you try fun style simulations, preview fresh looks, and share your favorites. It offers playful before-and-after visualizations for trending makeup styles, lip color ideas, and cosmetic inspirations.",
    para2:
      "Explore curated beauty looks, save your favorites, and find inspiration for new styles. Bea AI also provides light, non-medical personal insights about facial balance to help inspire new looks.",
    para3:
      "Designed for lifestyle and entertainment, Bea AI makes it easy to visualize beauty transformations and share them with friends or on social media—no commitment required.",
    description:
      "An AI-powered beauty styling app offering look previews, playful visualizations, and cosmetic inspiration tools.",
    li1: "AI Beauty Style Simulations",
    li2: "Before-and-After Look Visualization",
    li3: "Curated Makeup & Lip Color Ideas",
    li4: "Shareable Looks & Personal Insights",
    image: bea,
    info: {
      client: "Bea Labs",
      category: "BeautyTech",
      completedOn: "November 19, 2025",
      // googleStore:"https://play.google.com/store/apps/details?id=com.ha.accelrate",
      appStore: "https://apps.apple.com/us/app/bea-aesthetic-ai/id6748384622",
    },
    socials: [
      {
        name: "Facebook",
        icon: FaFacebookF,
        link: "https://facebook.com/beaai",
      },
      {
        name: "Twitter",
        icon: FaXTwitter,
        link: "https://twitter.com/beaai",
      },
      {
        name: "Instagram",
        icon: FaInstagram,
        link: "https://instagram.com/beaai",
      },
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com/@beaai",
      },
    ],
  },

  {
    slug: "barbr",
    title: "Barbr",
    category: "Technology",
    para1:
      "Barbr is a smart booking and business growth platform designed specifically for barbers. It helps barbers attract new clients, manage schedules, and grow their brand effortlessly.",
    para2:
      "With a unique booking link and customizable profile, barbers can save time while giving clients a seamless booking experience. Automated reminders and simple calendar management reduce no-shows and keep appointments organized.",
    para3:
      "Barbr empowers barbers to focus on their craft while unlocking their full earning potential, all while building stronger client relationships.",
    description:
      "A barber-focused platform for booking, client management, and brand growth.",
    li1: "Smart Scheduling",
    li2: "Client Management",
    li3: "Brand Growth Tools",
    li4: "Unique Booking Link",
    image: barbr,
    info: {
      client: "Barbr Inc.",
      category: "Business Tech",
      completedOn: "September 20, 2022",
      googleStore:
        "https://play.google.com/store/apps/details?id=com.barbrme&hl=en",
      appStore: "https://apps.apple.com/pk/app/barbr-biz/id1550249560",
    },
    socials: [
      {
        name: "Facebook",
        icon: FaFacebookF,
        link: "https://facebook.com/barbrapp",
      },
      {
        name: "Twitter",
        icon: FaXTwitter,
        link: "https://twitter.com/barbrapp",
      },
      {
        name: "Instagram",
        icon: FaInstagram,
        link: "https://instagram.com/barbrapp",
      },
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com/@barbrapp",
      },
    ],
  },
  {
    slug: "bulldogs",
    title: "AAMU Sports",
    category: "Sports",
    para1:
      "The Official AAMU Sports mobile app is your first stop for all things AAMU Bulldogs! Stay connected with your favorite teams, athletes, and the latest updates. The Official AAMU Sports mobile app is your first stop for all things AAMU Bulldogs! The new mobile app is home for team updates, schedules, tickets, and more!",
    para2:
      "The app brings schedules, team news, tickets, and more directly to your fingertips, making it easy for fans to keep up with AAMU Athletics anytime, anywhere.",
    para3:
      "Whether you’re at the game or on the go, the AAMU Sports app is designed to keep the Bulldogs community engaged and informed.",
    description:
      "Your official home for AAMU Bulldogs schedules, tickets, and team updates.",
    li1: "Team Updates",
    li2: "Game Schedules",
    li3: "Tickets Access",
    li4: "Fan Engagement",
    image: BullDogs, // ✅ keep as imported variable, NOT string
    info: {
      client: "Alabama A&M University Athletics",
      category: "Sports",
      completedOn: "October 2, 2023",
      googleStore:
        "https://play.google.com/store/apps/details?id=com.aamubulldogs",
      appStore: "https://apps.apple.com/pk/app/aamu-bulldogs/id6474274460 ",
    },
    socials: [
      {
        name: "Facebook",
        icon: FaFacebookF,
        link: "https://facebook.com/bulldogsgaming",
      },
      {
        name: "Twitter",
        icon: FaXTwitter,
        link: "https://twitter.com/bulldogsgaming",
      },
      {
        name: "Instagram",
        icon: FaInstagram,
        link: "https://instagram.com/bulldogsgaming",
      },
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com/@bulldogsgaming",
      },
    ],
  },

  {
    slug: "chargers",
    title: "UAH Sports",
    category: "Sports",
    para1:
      "The Official UAH Chargers mobile app is your first stop for all things UAH Athletics! Stay connected with your favorite teams, athletes, and the latest updates.",
    para2:
      "The app brings schedules, team news, tickets, and more directly to your fingertips, making it easy for fans to keep up with UAH Athletics anytime, anywhere.",
    para3:
      "Whether you’re at the game or on the go, the UAH Sports app is designed to keep the Chargers community engaged and informed.",
    description:
      "The Official UAH Chargers mobile app is your all-in-one hub for UAH Athletics. " +
      "Fans can access team updates, game schedules, and tickets right from their phone. " +
      "Stay connected and engaged with the Chargers community anytime, anywhere.",
    li1: "Team Updates",
    li2: "Game Schedules",
    li3: "Tickets Access",
    li4: "Fan Engagement",
    image: chargers,
    info: {
      client: "University of Alabama in Huntsville Athletics",
      category: "Sports",
      completedOn: "August 29, 2022",
      googleStore:
        "https://play.google.com/store/apps/details?id=com.uahchargers",
      appStore: "https://apps.apple.com/pk/app/uah-chargers/id6472647762 ",
    },
    socials: [
      {
        name: "Facebook",
        icon: FaFacebookF,
        link: "https://facebook.com/chargersapp",
      },
      {
        name: "Twitter",
        icon: FaXTwitter,
        link: "https://twitter.com/chargersapp",
      },
      {
        name: "Instagram",
        icon: FaInstagram,
        link: "https://instagram.com/chargersapp",
      },
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com/@chargersapp",
      },
    ],
  },

  {
    slug: "lions",
    title: "Roar Lions",
    category: "Sports",
    para1:
      "The Roar Lions mobile app is your first stop for all things UNA Athletics! Stay connected with your favorite teams, athletes, and the latest updates.",
    para2:
      "The app brings scores, schedules, social media streams, and more directly to your fingertips, making it easy for fans to keep up with UNA Athletics anytime, anywhere.",
    para3:
      "Whether you’re at the game or on the go, the Roar Lions app is designed to keep the Lions community engaged and informed.",
    description:
      "The Roar Lions app is the official home for UNA Athletics, delivering live scores, schedules, and team updates. " +
      "Fans can follow their favorite teams, explore social media streams, and access news in one convenient place. " +
      "Stay connected with UNA Lions wherever you are and never miss a moment of the action.",
    li1: "Live Scores",
    li2: "Game Schedules",
    li3: "Social Media Streams",
    li4: "Fan Engagement",
    image: lions, // ✅ imported variable, not string
    info: {
      client: "University of North Alabama Athletics",
      category: "Sports",
      completedOn: "September 10, 2021",
      googleStore:
        "https://play.google.com/store/apps/details?id=com.nivyapp.roarlions",
      appStore: "https://apps.apple.com/pk/app/roar-lions/id1659498292 ",
    },
    socials: [
      {
        name: "Facebook",
        icon: FaFacebookF,
        link: "https://facebook.com/lionsnetwork",
      },
      {
        name: "Twitter",
        icon: FaXTwitter,
        link: "https://twitter.com/lionsnetwork",
      },
      {
        name: "Instagram",
        icon: FaInstagram,
        link: "https://instagram.com/lionsnetwork",
      },
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com/@lionsnetwork",
      },
    ],
  },

  {
    slug: "ha-web",
    title: "Ha Health AI",
    category: "Technology",
    para1:
      "Hā Health is your AI-powered wellness companion, built on evidence-based nutrition and holistic health principles. The app creates affordable meal plans, tracks exercise, and provides mindfulness tools tailored to your lifestyle.",
    para2:
      "Whether it’s managing a diet on a budget, staying consistent with workouts, or practicing meditation, Hā adapts to your personal needs. It delivers actionable, AI-personalised insights backed by science and dietitian best practices.",
    para3:
      "Hā means breath, energy, vitality—empowering you and your family to live healthier, longer lives with smart, adaptive guidance and real-time progress tracking.",
    description:
      "An AI-powered health and wellness app focused on nutrition, fitness, and mindfulness.",
    li1: "AI Meal Planning",
    li2: "Fitness & Mindfulness Tools",
    li3: "Affordable Nutrition Guidance",
    li4: "Progress Tracking & Insights",
    image: haWeb,
    info: {
      client: "Hā Labs",
      category: "HealthTech",
      completedOn: "August 12, 2024",
      googleStore: "https://www.haahealth.com/",
    },
    socials: [
      {
        name: "Facebook",
        icon: FaFacebookF,
        link: "https://facebook.com/hahealth",
      },
      {
        name: "Twitter",
        icon: FaXTwitter,
        link: "https://twitter.com/hahealth",
      },
      {
        name: "Instagram",
        icon: FaInstagram,
        link: "https://instagram.com/hahealth",
      },
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com/@hahealth",
      },
    ],
  },
  {
    slug: "vibe-matching",
    title: "Vibe Matching",
    category: "Social Networking",
    para1:
      "Vibe Matching is a map-based social networking app that helps people connect in real-time. It lets users explore nearby profiles, send waves, and start conversations instantly—making social networking simple, fun, and engaging.",
    para2:
      "Whether you’re looking for new friends, casual hangouts, flirty connections, or something more meaningful, Vibe Matching makes meeting nearby people easy, secure, and enjoyable. With its wave-to-connect feature, there’s no need to swipe—just send a wave and start chatting.",
    para3:
      "Built with privacy in mind, Vibe Matching gives users control over their data while providing an interactive and personalized way to discover people around them.",
    description:
      "A real-time, map-based social networking app designed for discovering and connecting with nearby people.",
    li1: "Interactive Map with Real-Time User Locations",
    li2: "Wave-to-Connect Matching",
    li3: "Secure In-App Chat",
    li4: "Customizable Profiles with Photos & Bio",
    image: vibe,
    info: {
      client: "Vibe Labs",
      category: "Social Networking",
      completedOn: "April 5, 2021",
      googleStore: "",
      appStore: "https://apps.apple.com/us/app/vibe-matching-app/id6743134828",
    },
    socials: [
      {
        name: "Facebook",
        icon: FaFacebookF,
        link: "https://facebook.com/vibematching",
      },
      {
        name: "Twitter",
        icon: FaXTwitter,
        link: "https://twitter.com/vibematching",
      },
      {
        name: "Instagram",
        icon: FaInstagram,
        link: "https://instagram.com/vibematching",
      },
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com/@vibematching",
      },
    ],
  },
  {
    slug: "digifoot-scanner",
    title: "digifoot Scanner App",
    category: "Health & Technology",
    para1:
      "The digifoot Scanner App works together with the digifoot webshop (www.digifoot.de) and allows users to conveniently scan their soles from home to order custom-made and personalized insoles.",
    para2:
      "After placing an order in the webshop, the user receives a PIN and a QR code for verification in the app. The feet are then scanned with the TrueDepth camera, a 3D model is created, and the user can review it before uploading.",
    para3:
      "The app does not store or transfer any image or video data. Instead, it creates a point cloud or mesh model and only transmits it to the servers with the user’s explicit consent to produce the customized insoles.",
    description:
      "A 3D scanner app for custom insoles, seamlessly integrated with the digifoot website.",
    li1: "Easy ordering with PIN & QR code",
    li2: "TrueDepth-powered 3D foot scan",
    li3: "Privacy-friendly – no image storage",
    li4: "Custom insoles delivered within days",
    image: digifootApp, // ✅ replace with your imported image variable
    info: {
      client: "digifoot",
      category: "HealthTech",
      completedOn: "02 October 2021",
      appStore: "https://apps.apple.com/us/app/digifoot/id1600893181",
    },
    socials: [
      {
        name: "Facebook",
        icon: FaFacebookF,
        link: "https://facebook.com/digifoot",
      },
      {
        name: "Twitter",
        icon: FaXTwitter,
        link: "https://twitter.com/digifoot",
      },
      {
        name: "Instagram",
        icon: FaInstagram,
        link: "https://instagram.com/digifoot",
      },
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com/@digifoot",
      },
    ],
  },

  {
    slug: "mamu-app",
    title: "Mamu",
    category: "Music & Entertainment",
    para1:
      "Mamu is an innovative app designed to enhance live music experiences for DJs and fans. DJs can create and manage events, showcase their unique style, and engage directly with their audience.",
    para2:
      "The app features real-time voting, allowing users to vote for their favorite songs as they’re played. This interactive element lets the audience influence the playlist, ensuring top-voted tracks get played live.",
    para3:
      "With an intuitive interface, fans can browse events, follow their favorite DJs, and discover new music, while DJs gain valuable insights into audience preferences for impactful performances.",
    description:
      "An interactive live music app where DJs host events and fans vote in real time to shape the playlist.",
    li1: "DJ Event Creation & Management",
    li2: "Real-Time Song Voting",
    li3: "Fan-DJ Interaction & Community Building",
    li4: "Audience Insights for DJs",
    image: mamuApp, // ✅ replace with your imported image variable
    info: {
      client: "Mamu Labs",
      category: "MusicTech",
      completedOn: "04 November 2020",
      googleStore:
        "https://play.google.com/store/apps/details?id=com.alphors.mamu&hl=en",
      appStore: "https://apps.apple.com/us/app/mamu/id6736948723",
    },
    socials: [
      {
        name: "Facebook",
        icon: FaFacebookF,
        link: "https://facebook.com/mamuapp",
      },
      {
        name: "Twitter",
        icon: FaXTwitter,
        link: "https://twitter.com/mamuapp",
      },
      {
        name: "Instagram",
        icon: FaInstagram,
        link: "https://instagram.com/mamuapp",
      },
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com/@mamuapp",
      },
    ],
  },
];

export const projectFaqs = [
  {
    question: "What is the typical timeline for a project?",
    answer:
      "Meeting project deadlines is a top priority. We understand the importance of timely delivery and have established a comprehensive approach to ensure that all projects.",
  },
  {
    question: "How do you handle website maintenance and updates?",
    answer:
      "We provide ongoing website maintenance and updates to ensure security, performance, and feature enhancements as your business grows.",
  },
  {
    question: "What strategies do you use for digital marketing?",
    answer:
      "We use SEO, social media campaigns, PPC, and content marketing strategies tailored to your business goals.",
  },
  {
    question: "What payment methods do you accept?!",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers depending on your preference.",
  },
];

export const testimonials = [
  {
    text: "Working with Tahir on the Hā Health AI app was an amazing experience. He perfectly captured our vision of combining wellness, nutrition, and mindfulness into a seamless app. The design and functionality exceeded our expectations.",
    name: "Sarah Mitchell",
    role: "Founder, Hā Labs",
    image: client3,
  },
  {
    text: "Tahir built the UNA Charger app for our college tournaments, and it has completely changed how we organize events. From team registrations to match updates, everything runs smoothly now. His dedication made this project a huge success.",
    name: "Matthew Rhodes",
    role: "Founder of Nivy Techenologies",
    image: client4,
  },
  {
    text: "Vibe Matching was a challenging idea, but Tahir delivered it brilliantly. The interactive features and clean UI make connecting people seamless. His creativity and technical expertise really shone through.",
    name: "Muhammad Naeem Maqsood",
    role: "CTO & GenAI Specialist ",
    image: client1,
  },
  {
    text: "The Barbr app turned out exactly how we imagined—simple, intuitive, and powerful for managing barber appointments. Tahir’s ability to translate our business needs into a user-friendly app was outstanding.",
    name: "Reef Ray",
    role: "Founder & CEO @Barbr",
    image: client5,
  },
  {
    text: "With the Digifoot scanner app, Tahir helped us bring advanced 3D foot scanning technology to our customers. The integration with our webshop was flawless, and the app performs with precision. A real game-changer for our business.",
    name: "Shehryar Malik",
    role: "AI-Powered Products",
    image: client2,
  },
];

export const workProcess = [
  {
    icon: "/workProcess1.svg",
    title: "Discovery & Research",
    description:
      "We start by getting to know your business, your goals, and your target audience. Through in-depth research and analysis, we gather valuable insights that inform.",
  },
  {
    icon: "/workProcess2.avif",
    title: "Strategy & Planning",
    description:
      "Based on our research, we develop a comprehensive strategy and detailed project plan. This includes setting clear goals, defining key performance indicators.",
  },
  {
    icon: "/workProcess3.svg",
    title: "Implementation & Deploy",
    description:
      "We start by delivering the results and taking feedback. Through in-depth research and analysis, we gather valuable feedback that shapes the output.",
  },
];
