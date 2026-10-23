import { siteConfig } from "../siteConfig";

export default function JsonLd() {
  const baseUrl = siteConfig.url.replace(/\/$/, "");

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    givenName: "Alex",
    familyName: "Job A",
    alternateName: ["Alex Job", "Alex Brighten", "Alex Job Brighten"],
    jobTitle: "Founder's Office Associate",
    description: siteConfig.description,
    url: baseUrl,
    image: `${baseUrl}/avatar.jpg`,
    email: "mailto:alexjob.pm@gmail.com",
    sameAs: [
      "https://linkedin.com/in/alexjob3606",
      "https://github.com/AlexBrighten",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "SRM Institute of Science and Technology",
    },
    knowsAbout: [
      "Product Strategy",
      "Startup Operations",
      "Market Research",
      "Competitive Analysis",
      "Data Analytics",
      "Next.js",
      "React",
      "Node.js",
      "Full-Stack Development",
      "A/B Testing",
      "GTM Strategy",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Alex Job A Portfolio",
    url: baseUrl,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };

  const portfolioProjectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Alex Job A - Featured Projects",
    description: "Proof of work and software projects built by Alex Job A.",
    itemListElement: [
      {
        "@type": "SoftwareApplication",
        position: 1,
        name: "Spidey Tracker",
        applicationCategory: "ProductivityApplication",
        description:
          "Drift-free background timer powered by Web Worker blobs to bypass browser tab throttling with visibility-change auto-abort and Service Worker alerts.",
        url: "https://github.com/AlexBrighten/Alex-Spidey-Tracker-",
        operatingSystem: "Web / PWA",
        author: {
          "@type": "Person",
          name: siteConfig.name,
        },
      },
      {
        "@type": "SoftwareApplication",
        position: 2,
        name: "JobPulse",
        applicationCategory: "BusinessApplication",
        description:
          "Application & resume performance tracker featuring Google Cloud Firestore sync, private local IndexedDB resume storage, and A/B variant analytics.",
        url: "https://github.com/AlexBrighten/JobPulse",
        operatingSystem: "Chrome / Web",
        author: {
          "@type": "Person",
          name: siteConfig.name,
        },
      },
      {
        "@type": "SoftwareApplication",
        position: 3,
        name: "Celtrix (Open Source CLI)",
        applicationCategory: "DeveloperApplication",
        description:
          "Published npm scaffolding CLI tool (npx celtrix) that sets up full-stack web applications with modern tech stacks.",
        url: "https://github.com/AlexBrighten/Celtrix",
        operatingSystem: "Node.js / Cross-platform",
        author: {
          "@type": "Person",
          name: siteConfig.name,
        },
      },
      {
        "@type": "SoftwareApplication",
        position: 4,
        name: "Portman",
        applicationCategory: "DeveloperApplication",
        description:
          "Interactive visual port management extension for VS Code that detects and kills network ports without leaving the editor.",
        url: "https://github.com/AlexBrighten/portman",
        operatingSystem: "VS Code / Cross-platform",
        author: {
          "@type": "Person",
          name: siteConfig.name,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioProjectsSchema),
        }}
      />
    </>
  );
}
