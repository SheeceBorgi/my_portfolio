import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const content = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.description}`,
    "",
    `Canonical URL: [${siteConfig.url}](${siteConfig.url})`,
    `Last updated: ${siteConfig.lastUpdated}`,
    "",
    "## Key facts",
    "",
    `- Name: ${siteConfig.name}`,
    `- Role: ${siteConfig.role}`,
    "- Experience: 5+ years",
    "- Focus: Enterprise SaaS platforms, cloud infrastructure, multi-tenant systems, CI/CD automation",
    "- Core technologies: React, Next.js, TypeScript, Java, Node.js, AWS, PostgreSQL, Spring Boot",
    "",
    "## Featured project",
    "",
    `- [HRMS SaaS Platform](${siteConfig.url}/#projects): HR SaaS platform covering employee lifecycle management, attendance, payroll, leave, recruitment, tax, performance, and reporting workflows.`,
    "- Contribution: Built across frontend, backend, and database layers with Java, Spring Boot, React.js, and PostgreSQL.",
    "",
    "## Contact",
    "",
    `- Email: [${siteConfig.email}](mailto:${siteConfig.email})`,
    `- GitHub: [${siteConfig.github}](${siteConfig.github})`,
    `- LinkedIn: [${siteConfig.linkedin}](${siteConfig.linkedin})`,
    "",
    "## Machine-readable data",
    "",
    `- [JSON-LD embedded in homepage](${siteConfig.url}/#webpage): Person, WebSite, WebPage, and featured project entities.`,
    `- [Sitemap](${siteConfig.url}/sitemap.xml)`,
    `- [Robots](${siteConfig.url}/robots.txt)`,
    "",
    "## Optional",
    "",
    `- [Open Graph image](${siteConfig.url}${siteConfig.ogImagePath})`,
    `- [Icon](${siteConfig.url}/icon.svg)`,
    "",
    "## Preferred citation",
    "",
    `[${siteConfig.name} - ${siteConfig.role}](${siteConfig.url})`,
    "",
  ].join("\n");

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
