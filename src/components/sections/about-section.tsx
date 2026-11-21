import { Layers, Rocket, Search, type LucideIcon } from "lucide-react";

type ApproachItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const APPROACH_ITEMS: ApproachItem[] = [
  {
    title: "Understand the domain",
    description:
      "Translate business workflows, user requirements, and technical constraints into reliable software.",
    icon: Search,
  },
  {
    title: "Design for maintainability",
    description:
      "Use clean architecture, RBAC, REST APIs, and SOLID principles across multi-tenant systems.",
    icon: Layers,
  },
  {
    title: "Optimize and ship",
    description:
      "Cut unnecessary dashboard re-renders by over 50% and automated production releases with CI/CD.",
    icon: Rocket,
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 border-y-2 border-border bg-muted"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
              About
            </p>
            <h2
              id="about-heading"
              className="mt-4 text-3xl font-bold tracking-tighter text-foreground text-balance sm:text-5xl"
            >
              Enterprise platforms, built to last
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              Software engineering across HR, ERP, and enterprise platforms.
            </p>
            <p className="mt-10 hidden border-l-4 border-accent pl-4 font-mono text-xs font-bold uppercase tracking-widest text-primary lg:block">
              01 / Approach
            </p>
          </div>

          <div className="lg:col-span-7">
            <p className="border-2 border-border bg-card p-6 font-serif text-lg leading-8 text-foreground shadow-sm sm:p-8 sm:text-xl sm:leading-9">
              Software Engineer with 5+ years designing and building enterprise
              SaaS platforms. I specialize in cloud infrastructure, system
              design, and CI/CD automation, with hands-on experience across
              React, Next.js, Java, Node.js, and AWS.
            </p>

            <ol className="mt-6 grid gap-4 sm:grid-cols-3">
              {APPROACH_ITEMS.map((item, index) => {
                const Icon = item.icon;

                return (
                  <li
                    key={item.title}
                    className="flex flex-col border-2 border-border bg-card p-5 shadow-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-primary" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="mt-6 font-mono text-sm font-bold uppercase tracking-wide text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
