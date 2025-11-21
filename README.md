# Next.js Portfolio & Services Template

A modern, fully responsive **Next.js** template for agencies, freelancers, or businesses showcasing services, projects, and workflow. This template is built with **Next.js**, **React**, and **Tailwind CSS**, providing a clean, fast, and SEO-friendly structure. It includes pre-built sections for services, projects, FAQs, and work processes, making it easy to launch a professional website.

---

## Features

* ✅ Fully responsive design (mobile, tablet, desktop)
* ✅ Modern UI built with **Tailwind CSS**
* ✅ Projects, services, and FAQs pre-configured
* ✅ SEO-friendly and performance optimized
* ✅ Smooth animations and user-friendly interactions
* ✅ Easy to customize: change images, text, and colors
* ✅ Compatible with Next.js 14+ and React 18+
* ✅ Ready for Vercel deployment

---

## Demo

You can view a live demo of this template here:
[https://portfoliocustomtemplates.netlify.app/]

---

## Getting Started

This project was bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and uses the latest Next.js features.

### Prerequisites

* Node.js v18+ or higher
* npm, yarn, or pnpm package manager

---

### Installation


Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the template in your browser. The page auto-updates as you edit the files.

Build for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

Start the production server:

```bash
npm start
# or
yarn start
# or
pnpm start
```

---

## Services Data

All services are configured in `data.js`. Update them to customize your offerings.

```javascript
export const services = [
  { id: 1, title: "App Development", details: "..." },
  { id: 2, title: "Web Development", details: "..." },
  { id: 3, title: "Branding & Identity", details: "..." },
  { id: 4, title: "UX/UI Design", details: "..." }
];
```

---

## Projects Data

All projects are configured in `data.js`. Replace images and text to add your own portfolio items.

```javascript
import project1 from "./assets/project1.webp";
import project2 from "./assets/project2.avif";
import project3 from "./assets/project3.webp";
import project4 from "./assets/project4.webp";

export const projects = [
  { slug: "solarify-framer", title: "Solarify Framer Template", category: "Technology", image: project1, ... },
  { slug: "clayai-saas", title: "ClayAI SaaS Website", category: "Technology", image: project2, ... },
  { slug: "probuilder-framer", title: "ProBuilder Framer Site", category: "Technology", image: project3, ... },
  { slug: "vinency-creative", title: "Vinency Creative Website", category: "Technology", image: project4, ... }
];
```

---

## Project FAQs

```javascript
export const projectFaqs = [
  { question: "What is the typical timeline for a project?", answer: "..." },
  { question: "How do you handle website maintenance and updates?", answer: "..." },
  { question: "What strategies do you use for digital marketing?", answer: "..." },
  { question: "What payment methods do you accept?!", answer: "..." }
];
```

---

## Work Process

```javascript
export const workProcess = [
  { icon: "/workProcess1.svg", title: "Discovery & Research", description: "..." },
  { icon: "/workProcess2.avif", title: "Strategy & Planning", description: "..." },
  { icon: "/workProcess3.svg", title: "Implementation & Deploy", description: "..." }
];
```

---

## Customization

* Replace images in `./assets/`
* Update text in `data.js` for services, projects, FAQs, and work process
* Tailwind CSS classes can be edited directly for style changes

---

## Deployment

Deploy easily on **Vercel**:

1. Connect your GitHub repository.
2. Select the project.
3. Deploy with a few clicks.

---

## Environment Variables

```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

Access in code:

```javascript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

---

## License & Terms

* Envato-ready, follows all marketplace requirements
* Use for personal or commercial projects
* Redistribution/resale without permission is prohibited
* See LICENSE file for details

---

## Support

Contact [[your-email@example.com](mailto:your-email@example.com)] or visit your support page.

---

## Learn More

* [Next.js Documentation](https://nextjs.org/docs)
* [Tailwind CSS Documentation](https://tailwindcss.com/docs)
* [React Documentation](https://react.dev/)
