// Import project images from the assets folder
import project1 from "./assets/project1.webp";
import project2 from "./assets/project2.avif";
import project3 from "./assets/project3.webp";
import project4 from "./assets/project4.webp";

/* 
  ==========================
  Services Data
  ==========================
  This array contains all the services offered. 
  Each service has:
  - id: Unique identifier
  - title: Name of the service
  - details: Description of the service
  You can add more services by following the same structure.
*/
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

/* 
  ==========================
  Projects Data
  ==========================
  This array contains all project details for your portfolio.
  Each project has:
  - slug: URL-friendly unique string
  - title: Project title
  - category: Category/type of project
  - para1, para2: Detailed description paragraphs
  - li1-li4: Features or services involved in the project
  - description: Short description
  - image: Imported image representing the project
  - faq: Array of frequently asked questions about the project
  - info: Additional info (client, category, completion date, website)
  You can add more projects by following this structure.
*/
export const projects = [
  {
    slug: "solarify-framer",
    title: "Solarify Framer Template",
    category: "Technology",
    para1:
      "We work alongside you to dig deep into your business goals and craft a strategic plan that will help you capture your audience’s attention and dominate your space. Together, we’ll pinpoint your mission, vision, and values to ensure your brand has a clear, confident voice and a strong foundation that will drive long-term success. Whether you’re looking to revitalize an existing brand or build one from the ground up, we’re here to make sure your brand turns heads and leaves a lasting impression.",
    para2:
      "Whether you’re looking to revitalize an existing brand or build one from the ground up, we’re here to make sure your brand turns heads and leaves a lasting impression.",
    li1: "Analytics & Strategy",
    li2: "UX/UI Design",
    li3: "Branding & Identity",
    li4: "Web Development",
    description:
      "A successful brand starts with a clear strategy. We work closely with you to understand your business goals, target audience, and market positioning. Together, we define your brand's mission, vision, and values, creating a solid foundation for all your branding efforts.",
    image: project1,
    faq: [
      "What is the typical timeline for a project? Meeting project deadlines is a top priority. We understand the importance of timely delivery and have established a comprehensive approach to ensure that all projects.",
      "How do you handle website maintenance and updates?",
      "What strategies do you use for digital marketing?",
      "What payment methods do you accept?!",
    ],
    info: {
      client: "Jeff Wington",
      category: "Technology",
      completedOn: "July 30, 2024",
      website: "www.pentaclay.com",
    },
  },
  {
    slug: "clayai-saas",
    title: "ClayAI SaaS Website",
    category: "Technology",
    para1:
      "We believe a brand goes beyond a logo or tagline—it's the core of your business. Our Branding & Identity services help you build and express your unique brand personality, ensuring it connects with your audience and makes an impact in your market. We start with a solid strategy, working with you to understand your business goals, target audience, and positioning. Together, we define your mission, vision, and values, creating a clear path for your brand's success.",
    para2:
      "Meeting project deadlines is a top priority. We understand the importance of timely delivery and have established a comprehensive approach to ensure that all projects.",
    li1: "Analytics & Strategy",
    li2: "UX/UI Design",
    li3: "Branding & Identity",
    li4: "Web Development",
    description:
      "A successful brand starts with a clear strategy. We work closely with you to understand your business goals, target audience, and market positioning. Together, we define your brand's mission, vision, and values, creating a solid foundation for all your branding efforts.",
    image: project2,
    faq: [
      "What is the typical timeline for a project? Meeting project deadlines is a top priority. We understand the importance of timely delivery and have established a comprehensive approach to ensure that all projects.",
      "How do you handle website maintenance and updates?",
      "What strategies do you use for digital marketing?",
      "What payment methods do you accept?!",
    ],
    info: {
      client: "Kazi Erfan",
      category: "Technology",
      completedOn: "July 30, 2024",
      website: "www.pentaclay.com",
    },
  },
  {
    slug: "probuilder-framer",
    title: "ProBuilder Framer Site",
    category: "Technology",
    para1:
      "At Pentos, we understand that a strong brand is more than just a logo or a tagline—it's the essence of who you are as a business. Our Branding & Identity services are designed to help you define, develop, and communicate your brand’s unique personality, ensuring it resonates with your target audience and stands out in the marketplace.",
    para2:
      "Meeting project deadlines is a top priority. We understand the importance of timely delivery and have established a comprehensive approach to ensure that all projects.",
    li1: "Analytics & Strategy",
    li2: "UX/UI Design",
    li3: "Branding & Identity",
    li4: "Web Development",
    description:
      "Our Branding & Identity services are crafted to help you articulate your brand’s unique identity, ensuring it speaks to your audience with authenticity and impact.",
    image: project3,
    faq: [
      "What is the typical timeline for a project? Meeting project deadlines is a top priority. We understand the importance of timely delivery and have established a comprehensive approach to ensure that all projects.",
      "How do you handle website maintenance and updates?",
      "What strategies do you use for digital marketing?",
      "What payment methods do you accept?!",
    ],
    info: {
      client: "Chris Frick",
      category: "Technology",
      completedOn: "July 30, 2024",
      website: "www.pentaclay.com",
    },
  },
  {
    slug: "vinency-creative",
    title: "Vinency Creative Website",
    category: "Technology",
    para1:
      "At Pentos, we get it—your brand is so much more than just a logo or a tagline. It’s the personality behind your business, the story you tell, and the connection you build with your audience. That’s where our Branding & Identity services come in.",
    para2:
      "Through this in-depth analysis, we collaborate with you to define your brand’s mission, vision, and values—core elements that form the foundation of a cohesive brand strategy.",
    li1: "Analytics & Strategy",
    li2: "UX/UI Design",
    li3: "Branding & Identity",
    li4: "Web Development",
    description:
      "From there, we help you create a brand identity that not only reflects your business but also resonates with your audience, building trust and loyalty over time.",
    image: project4,
    faq: [
      "What is the typical timeline for a project? Meeting project deadlines is a top priority. We understand the importance of timely delivery and have established a comprehensive approach to ensure that all projects.",
      "How do you handle website maintenance and updates?",
      "What strategies do you use for digital marketing?",
      "What payment methods do you accept?!",
    ],
    info: {
      client: "Kazi Erfan",
      category: "Technology",
      completedOn: "July 30, 2024",
      website: "www.pentaclay.com",
    },
  },
];

/* 
  ==========================
  Project FAQs
  ==========================
  This array contains common questions and answers for projects.
  Can be displayed globally or individually per project.
*/
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

/* 
  ==========================
  Work Process Steps
  ==========================
  Each object represents a step in your workflow:
  - icon: Path to step icon
  - title: Step title
  - description: Step description
*/
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
