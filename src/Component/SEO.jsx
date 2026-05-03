/**
 * SEO.jsx
 *
 * Injects per-page <title>, <meta>, Open Graph, Twitter Card,
 * canonical URL, and JSON-LD structured data into <head>.
 *
 * Usage: <SEO page="home" /> — place at top of each page component.
 * No visual output — purely metadata.
 */

import { useEffect } from "react";

const SITE_URL = "https://muhammadbin-naveed.vercel.app";
const SITE_NAME = "Muhammad Bin Naveed — MERN Stack Developer";
const OG_IMAGE = `${SITE_URL}/og-image.webp`;

const PAGE_META = {
  home: {
    title: "Muhammad Bin Naveed — Full Stack MERN Developer | Lahore, Pakistan",
    description:
      "Muhammad Bin Naveed is a Full Stack MERN Developer from Lahore, Pakistan. He builds modern, responsive, and production-ready web applications using React.js, Node.js, Express.js, and MongoDB.",
    canonical: `${SITE_URL}/`,
    keywords:
      "Muhammad Bin Naveed, MERN Stack Developer, Full Stack Developer, React Developer, Node.js Developer, Lahore Pakistan, Web Developer Portfolio",
  },
  about: {
    title: "About Muhammad Bin Naveed — MERN Stack Developer | Skills & Experience",
    description:
      "Learn about Muhammad Bin Naveed — a Full Stack MERN Developer with expertise in React.js, Node.js, MongoDB, and Tailwind CSS. Certified developer with real-world project experience.",
    canonical: `${SITE_URL}/About`,
    keywords:
      "About Muhammad Bin Naveed, MERN Developer Skills, React.js Developer, Full Stack Developer Pakistan, Web Development Experience",
  },
  project: {
    title: "Projects by Muhammad Bin Naveed — Real-World MERN Stack Applications",
    description:
      "Explore real-world web projects built by Muhammad Bin Naveed including e-commerce platforms, business websites, and web applications using the MERN stack.",
    canonical: `${SITE_URL}/Project`,
    keywords:
      "Muhammad Bin Naveed Projects, MERN Stack Projects, React Projects, Full Stack Web Apps, Click2Print, IQX World, Portfolio Projects",
  },
  contact: {
    title: "Contact Muhammad Bin Naveed — Hire a MERN Stack Developer",
    description:
      "Get in touch with Muhammad Bin Naveed for web development projects, collaborations, or freelance work. Available for MERN stack development, React.js, and full stack projects.",
    canonical: `${SITE_URL}/Contact`,
    keywords:
      "Contact Muhammad Bin Naveed, Hire MERN Developer, Freelance Web Developer Lahore, React Developer for Hire",
  },
};

// ── JSON-LD structured data ──
const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Bin Naveed",
  url: SITE_URL,
  image: `${SITE_URL}/muhammad.webp`,
  jobTitle: "Full Stack MERN Developer",
  description:
    "Full Stack MERN Developer specializing in React.js, Node.js, Express.js, and MongoDB. Based in Lahore, Pakistan.",
  email: "muhammadbinnaveed01@gmail.com",
  telephone: "+923215081609",
  address: {
    "@type": "PostalAddress",
    streetAddress: "E-858 D-2 Bilal Street, Abusar Chowk, Ali Park, Badia Road",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  sameAs: [
    "https://www.linkedin.com/in/muhammad-bin-naveed-236409252",
    "https://www.facebook.com/share/1B8xo1mvwx",
    "https://www.instagram.com/musilmuham",
  ],
  knowsAbout: [
    "React.js", "Node.js", "Express.js", "MongoDB", "MERN Stack",
    "Tailwind CSS", "Vite", "Three.js", "REST APIs", "Full Stack Development",
    "SEO", "Web Performance Optimization",
  ],
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Rise Group of Colleges",
      address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
    },
    {
      "@type": "EducationalOrganization",
      name: "EVS Training Institute",
      address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
    },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "MERN Stack Full Stack Web Development Certification",
    credentialCategory: "Certificate",
    recognizedBy: { "@type": "Organization", name: "EVS Training Institute" },
    dateCreated: "2026-01-25",
  },
  worksFor: {
    "@type": "Organization",
    name: "Click2Print.pk",
    url: "https://click2print.pk",
  },
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Portfolio website of Muhammad Bin Naveed — Full Stack MERN Developer from Lahore, Pakistan.",
  author: { "@type": "Person", name: "Muhammad Bin Naveed" },
  inLanguage: "en",
};

const PROJECTS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Web Development Projects by Muhammad Bin Naveed",
  description: "Real-world web applications built by Muhammad Bin Naveed using the MERN stack.",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "CreativeWork",
        name: "Click2Print",
        url: "https://click2print.pk/",
        description: "E-commerce printing platform built with MERN stack.",
        author: { "@type": "Person", name: "Muhammad Bin Naveed" },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "CreativeWork",
        name: "IQX World",
        url: "https://iqx.world/",
        description: "Web application developed using React.js and Node.js.",
        author: { "@type": "Person", name: "Muhammad Bin Naveed" },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "CreativeWork",
        name: "Faizalam Faizi Portfolio",
        url: "https://faizalamfaizi.com/",
        description: "Personal portfolio website built with React.js.",
        author: { "@type": "Person", name: "Muhammad Bin Naveed" },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "CreativeWork",
        name: "AI Transport Ltd",
        url: "https://www.aitransportltd.co.uk/",
        description: "Transport company website built with MERN stack.",
        author: { "@type": "Person", name: "Muhammad Bin Naveed" },
      },
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Muhammad Bin Naveed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Muhammad Bin Naveed is a Full Stack MERN Developer from Lahore, Pakistan, specializing in building modern, responsive, and production-ready web applications using React.js, Node.js, Express.js, and MongoDB.",
      },
    },
    {
      "@type": "Question",
      name: "What services does Muhammad Bin Naveed offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Muhammad Bin Naveed offers full stack web development (MERN), frontend development with React.js and Tailwind CSS, backend API development with Node.js and Express.js, MongoDB database design, 3D web experiences with Three.js, and SEO/GEO/AEO optimization.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does Muhammad Bin Naveed use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Muhammad Bin Naveed uses React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Vite, Three.js, React Three Fiber, Framer Motion, REST APIs, and Git for version control and Vercel for deployment.",
      },
    },
    {
      "@type": "Question",
      name: "What real projects has Muhammad Bin Naveed built?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Muhammad Bin Naveed has built Click2Print (e-commerce printing platform), IQX World (web application), Faizalam Faizi Portfolio, and AI Transport Ltd (UK transport company website), all using the MERN stack.",
      },
    },
    {
      "@type": "Question",
      name: "How can I hire Muhammad Bin Naveed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can contact Muhammad Bin Naveed via email at muhammadbinnaveed01@gmail.com, by phone at +92 321 5081609, or through his LinkedIn profile at linkedin.com/in/muhammad-bin-naveed-236409252.",
      },
    },
  ],
};

const PAGE_SCHEMAS = {
  home: [PERSON_SCHEMA, WEBSITE_SCHEMA, FAQ_SCHEMA],
  about: [PERSON_SCHEMA],
  project: [PROJECTS_SCHEMA],
  contact: [PERSON_SCHEMA],
};

function setMeta(name, content, attr = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function injectSchema(schemas, pageKey) {
  // Remove previous schema scripts for this page
  document.querySelectorAll(`script[data-seo-page]`).forEach((s) => s.remove());
  schemas.forEach((schema, i) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo-page", pageKey);
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  });
}

export default function SEO({ page }) {
  useEffect(() => {
    const meta = PAGE_META[page];
    if (!meta) return;

    // Title
    document.title = meta.title;

    // Basic meta
    setMeta("description", meta.description);
    setMeta("keywords", meta.keywords);
    setMeta("robots", "index, follow");
    setMeta("author", "Muhammad Bin Naveed");

    // Canonical
    setLink("canonical", meta.canonical);

    // Open Graph
    setMeta("og:type", "website", "property");
    setMeta("og:title", meta.title, "property");
    setMeta("og:description", meta.description, "property");
    setMeta("og:url", meta.canonical, "property");
    setMeta("og:image", OG_IMAGE, "property");
    setMeta("og:site_name", SITE_NAME, "property");
    setMeta("og:locale", "en_US", "property");

    // Twitter Card
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", meta.title);
    setMeta("twitter:description", meta.description);
    setMeta("twitter:image", OG_IMAGE);

    // JSON-LD
    const schemas = PAGE_SCHEMAS[page] || [];
    injectSchema(schemas, page);
  }, [page]);

  return null;
}
