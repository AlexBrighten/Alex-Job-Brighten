// Centralized site configuration for SEO, metadata, and structured data
export const siteConfig = {
  name: "Alex Job A",
  fullName: "Alex Job A",
  title: "Alex Job A | Aspiring Founder's Office Associate & Technical Generalist",
  shortTitle: "Alex Job A | Founder's Office Associate",
  description:
    "Official portfolio of Alex Job A - an aspiring Founder's Office Associate with a technical core in product strategy, data-driven execution, and rapid prototyping.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://alex-job-brighten.vercel.app"),
  ogImage: "/avatar.jpg",
  author: {
    name: "Alex Job A",
    email: "alexjob.pm@gmail.com",
    linkedin: "https://linkedin.com/in/alexjob3606",
    github: "https://github.com/AlexBrighten",
  },
  keywords: [
    "Alex Job A",
    "Alex Job",
    "Alex Brighten",
    "Alex Job portfolio",
    "Founder's Office Associate",
    "Founder's Office Intern",
    "Founder's Office",
    "Chief of Staff",
    "Technical Generalist",
    "Product Strategy",
    "Startup Operations",
    "Growth & Operations",
    "Full Stack Developer",
    "Next.js Developer",
    "Celtrix CLI",
    "JobPulse",
    "Spidey Tracker",
    "Portman VS Code",
    "SRM Institute",
  ],
  googleVerification: "google67eaf5de69c6d68f",
};
