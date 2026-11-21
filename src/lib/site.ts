function normalizeUrl(value: string): string {
  return value.replace(/\/+$/, "");
}

function getSiteUrl(): string {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (configuredUrl) {
    return normalizeUrl(configuredUrl);
  }

  const vercelUrl = process.env.VERCEL_URL;

  if (vercelUrl) {
    return `https://${normalizeUrl(vercelUrl)}`;
  }

  return "http://localhost:3000";
}

const url = getSiteUrl();

export const siteConfig = {
  name: "Sheece Borgi",
  title: "Software Engineer | Sheece Borgi",
  role: "Software Engineer",
  description:
    "Software Engineer with 5+ years building enterprise SaaS platforms, multi-tenant systems, cloud infrastructure, and CI/CD automation.",
  url,
  email: "sheeceborgi@gmail.com",
  github: "https://github.com/SheeceBorgi",
  linkedin: "https://www.linkedin.com/in/sheece-borgi",
  ogImagePath: "/opengraph-image",
  lastUpdated: "2026-11-21",
  keywords: [
    "Sheece Borgi",
    "Software Engineer",
    "Enterprise SaaS",
    "Multi-tenant Systems",
    "Cloud Infrastructure",
    "CI/CD",
    "React",
    "Next.js",
    "TypeScript",
    "Java",
    "Spring Boot",
    "Node.js",
    "AWS",
    "PostgreSQL",
  ],
};

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${url}/#person`,
      name: siteConfig.name,
      url,
      email: `mailto:${siteConfig.email}`,
      jobTitle: siteConfig.role,
      description: siteConfig.description,
      sameAs: [siteConfig.github, siteConfig.linkedin],
      knowsAbout: [
        "Software Engineering",
        "Enterprise SaaS",
        "Multi-tenant Systems",
        "Cloud Infrastructure",
        "CI/CD",
        "System Design",
        "React",
        "Next.js",
        "TypeScript",
        "Java",
        "Spring Boot",
        "Node.js",
        "AWS",
        "PostgreSQL",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${url}/#website`,
      url,
      name: `${siteConfig.name} - ${siteConfig.role}`,
      description: siteConfig.description,
      inLanguage: "en",
      publisher: { "@id": `${url}/#person` },
    },
    {
      "@type": "WebPage",
      "@id": `${url}/#webpage`,
      url,
      name: siteConfig.title,
      description: siteConfig.description,
      isPartOf: { "@id": `${url}/#website` },
      about: { "@id": `${url}/#person` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${url}${siteConfig.ogImagePath}`,
        width: 1200,
        height: 630,
      },
    },
    {
      "@type": "ItemList",
      "@id": `${url}/#projects`,
      name: "Featured projects",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "CreativeWork",
            "@id": `${url}/#project-hrms-saas-platform`,
            name: "HRMS SaaS Platform",
            description:
              "HR SaaS platform covering employee lifecycle management, attendance, payroll, leave, recruitment, tax, performance, and reporting workflows.",
            genre: "Enterprise SaaS",
            keywords: ["Java", "Spring Boot", "React.js", "PostgreSQL"],
            creator: { "@id": `${url}/#person` },
          },
        },
      ],
    },
  ],
};
