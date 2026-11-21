import {
  Braces,
  Cloud,
  Code2,
  Database,
  Network,
  Server,
  type LucideIcon,
} from "lucide-react";

type SkillGroup = {
  title: string;
  summary: string;
  skills: string[];
  icon: LucideIcon;
};

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Frontend",
    summary: "Interfaces for complex enterprise dashboards.",
    skills: [
      "React.js",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "SCSS",
      "Material UI",
      "Ant Design",
    ],
    icon: Code2,
  },
  {
    title: "Backend",
    summary: "APIs and services for multi-tenant products.",
    skills: ["Java", "Node.js"],
    icon: Server,
  },
  {
    title: "Cloud & DevOps",
    summary: "Production infrastructure and repeatable delivery.",
    skills: [
      "AWS EC2",
      "RDS",
      "S3",
      "CloudFront",
      "GitHub Actions",
      "CI/CD",
      "Linux",
      "SSL & Domains",
    ],
    icon: Cloud,
  },
  {
    title: "Databases",
    summary: "Relational data modeling and ORM workflows.",
    skills: ["MySQL", "PostgreSQL", "RDS", "JPA / Hibernate"],
    icon: Database,
  },
  {
    title: "Architecture",
    summary: "Design principles behind reliable systems.",
    skills: [
      "System Design",
      "RBAC",
      "Multi-tenant Systems",
      "Clean Architecture",
      "SOLID Principles",
    ],
    icon: Network,
  },
  {
    title: "Languages",
    summary: "Core languages used across the stack.",
    skills: ["JavaScript (ES6+)", "TypeScript", "PHP", "Java"],
    icon: Braces,
  },
];

const BASE_CARD_CLASS = "flex flex-col p-6 sm:p-7";
const STANDARD_CARD_CLASS = "border-2 border-border bg-card shadow-sm";
const FEATURED_CARD_CLASS =
  "border-2 border-border bg-primary text-primary-foreground shadow-md";

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-24 bg-background"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
              Skills
            </p>
            <h2
              id="skills-heading"
              className="mt-4 text-3xl font-bold tracking-tighter text-foreground text-balance sm:text-5xl"
            >
              Technical capabilities
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            A practical toolkit built across enterprise SaaS products and
            production cloud environments.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 lg:grid-cols-6">
          {SKILL_GROUPS.map((group, index) => {
            const featured = index === 0;
            const spanClass = featured
              ? "lg:col-span-3 lg:row-span-2"
              : index === SKILL_GROUPS.length - 1
                ? "lg:col-span-6"
                : "lg:col-span-3";
            const Icon = group.icon;

            return (
              <li
                key={group.title}
                className={`${BASE_CARD_CLASS} ${
                  featured ? FEATURED_CARD_CLASS : STANDARD_CARD_CLASS
                } ${spanClass}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <h3
                      className={`font-mono text-xs font-bold uppercase tracking-widest ${
                        featured ? "text-primary-foreground" : "text-primary"
                      }`}
                    >
                      {group.title}
                    </h3>
                    <Icon
                      className={`h-5 w-5 shrink-0 ${
                        featured ? "text-primary-foreground" : "text-primary"
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                  <p
                    className={`mt-3 text-sm leading-6 ${
                      featured
                        ? "text-primary-foreground opacity-90"
                        : "text-muted-foreground"
                    }`}
                  >
                    {group.summary}
                  </p>
                </div>

                <ul className="mt-auto flex flex-wrap gap-2 pt-8">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className={`border px-2.5 py-1 font-mono text-xs ${
                        featured
                          ? "border-primary-foreground text-primary-foreground"
                          : "border-border bg-muted text-foreground"
                      }`}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
