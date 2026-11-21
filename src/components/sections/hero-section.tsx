import { ArrowUpRight, Mail, Terminal as TerminalIcon } from "lucide-react";

type TerminalLine = {
  label: string;
  value: string;
};

type TerminalBlock = {
  command: string;
  lines: TerminalLine[];
};

const TERMINAL_BLOCKS: TerminalBlock[] = [
  {
    command: "profile --summary",
    lines: [
      { label: "role", value: "Software Engineer" },
      { label: "experience", value: "5+ years" },
      { label: "focus", value: "Enterprise SaaS platforms" },
    ],
  },
  {
    command: "stack --core",
    lines: [
      { label: "web", value: "React, Next.js, TypeScript" },
      { label: "backend", value: "Java, Node.js" },
      { label: "cloud", value: "AWS, GitHub Actions" },
    ],
  },
  {
    command: "delivery --focus",
    lines: [
      { label: "quality", value: "Clean architecture, SOLID" },
      { label: "systems", value: "RBAC, REST APIs, CI/CD" },
      { label: "scale", value: "Multi-tenant platforms" },
    ],
  },
];

const LINK_CLASS_NAME =
  "inline-flex h-11 items-center justify-center gap-2 rounded-sm px-5 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
        <div className="lg:pt-10">
          <div className="inline-flex items-center gap-2 rounded-sm border border-border bg-card px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground shadow-xs">
            <span className="h-2 w-2 bg-accent" aria-hidden="true" />
            5+ years shipping
          </div>

          <h1
            id="hero-heading"
            className="mt-6 text-4xl font-bold tracking-tighter text-foreground text-balance sm:text-6xl lg:text-7xl"
          >
            Software
            <span className="mt-2 block bg-primary px-3 py-1 text-primary-foreground">
              Engineer
            </span>
          </h1>

          <p className="mt-6 max-w-xl font-serif text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            I design and build enterprise SaaS platforms, with a focus on cloud
            infrastructure, multi-tenant systems, and CI/CD automation.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className={`${LINK_CLASS_NAME} border border-border bg-primary text-primary-foreground shadow-sm`}
            >
              View Projects
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className={`${LINK_CLASS_NAME} border border-border bg-card text-foreground shadow-sm hover:bg-muted`}
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t-2 border-border pt-6 font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
            <span>Enterprise SaaS</span>
            <span>AWS / CI/CD</span>
          </div>
        </div>

        <div className="relative lg:pt-10">
          <div className="absolute -right-3 -top-3 z-10 hidden border border-border bg-accent px-3 py-2 font-mono text-xs font-bold uppercase tracking-widest text-accent-foreground shadow-sm sm:block">
            SaaS / Cloud
          </div>

          <section
            aria-labelledby="profile-panel-heading"
            className="overflow-hidden rounded-sm border-2 border-border bg-card shadow-md"
          >
            <h2 id="profile-panel-heading" className="sr-only">
              Profile summary
            </h2>

            <div className="flex items-center gap-2 border-b-2 border-border bg-muted px-4 py-3">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 border border-border bg-secondary" />
                <span className="h-2.5 w-2.5 border border-border bg-accent" />
                <span className="h-2.5 w-2.5 border border-border bg-primary" />
              </div>
              <span className="ml-2 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                <TerminalIcon className="h-4 w-4" aria-hidden="true" />
                profile.txt
              </span>
            </div>

            <div className="space-y-5 p-5 font-mono text-sm leading-6 sm:p-6">
              {TERMINAL_BLOCKS.map((block) => (
                <div key={block.command}>
                  <p className="flex items-center gap-2 text-muted-foreground">
                    <span aria-hidden="true" className="font-bold text-accent">
                      $
                    </span>
                    <span>{block.command}</span>
                  </p>

                  <dl className="mt-2 space-y-1">
                    {block.lines.map((line) => (
                      <div
                        key={line.label}
                        className="grid grid-cols-[max-content_1fr] gap-x-3"
                      >
                        <dt className="text-muted-foreground">{line.label}:</dt>
                        <dd className="text-foreground">{line.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between border-t-2 border-border bg-muted px-5 py-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              <span>status</span>
              <span className="inline-flex items-center gap-2 font-bold text-foreground">
                <span className="h-2 w-2 bg-primary" aria-hidden="true" />
                shipping
              </span>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
