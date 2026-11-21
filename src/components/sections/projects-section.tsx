type Project = {
  title: string;
  category: "enterprise";
  description: string;
  contribution: string;
  technologies: string[];
};

const CATEGORY_LABEL = "SaaS Platform";
const CATEGORY_CLASS =
  "border-sidebar-border bg-sidebar-primary text-sidebar-primary-foreground";

const PROJECTS: Project[] = [
  {
    title: "HRMS SaaS Platform",
    category: "enterprise",
    description:
      "HR SaaS platform covering employee lifecycle management, attendance, payroll, leave, recruitment, tax, performance, and reporting workflows.",
    contribution:
      "Building the application across frontend, backend, and database layers with Java, Spring Boot, React.js, and PostgreSQL.",
    technologies: ["Java", "Spring Boot", "React.js", "PostgreSQL"],
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-24 border-t-2 border-border bg-muted"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
              Work
            </p>
            <h2
              id="projects-heading"
              className="mt-4 text-3xl font-bold tracking-tighter text-foreground text-balance sm:text-5xl"
            >
              Featured project
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            A focused example of enterprise SaaS application work.
          </p>
        </div>

        <div className="mt-12 grid gap-6">
          {PROJECTS.map((project, index) => (
            <article
              key={project.title}
              className="grid overflow-hidden border-2 border-border bg-card shadow-md lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]"
            >
              <div className="border-b-2 border-border bg-sidebar p-6 text-sidebar-foreground sm:p-8 lg:border-b-0 lg:border-r-2">
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex items-center rounded-sm border px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-widest ${CATEGORY_CLASS}`}
                  >
                    {CATEGORY_LABEL}
                  </span>
                  <span className="font-mono text-xs opacity-70" aria-hidden="true">
                    /{String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-12 font-serif text-3xl font-bold leading-tight text-balance sm:text-4xl">
                  {project.title}
                </h3>

                <ul className="mt-10 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="border border-sidebar-border px-2.5 py-1 font-mono text-xs"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid content-start gap-8 p-6 sm:p-8">
                <div>
                  <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
                    Description
                  </h4>
                  <p className="mt-3 font-serif text-lg leading-8 text-foreground">
                    {project.description}
                  </p>
                </div>

                <div className="border-t-2 border-border pt-8">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
                    Contribution
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                    {project.contribution}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
