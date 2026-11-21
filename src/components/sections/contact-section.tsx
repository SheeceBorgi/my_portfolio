import {
  ArrowUpRight,
  Code2,
  Mail,
  UserRound,
  type LucideIcon,
} from "lucide-react";

type SocialLink = {
  label: string;
  href: string;
  ariaLabel: string;
  icon: LucideIcon;
};

const EMAIL_ADDRESS = "sheeceborgi@gmail.com";

const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/SheeceBorgi",
    ariaLabel: "Sheece Borgi GitHub profile",
    icon: Code2,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sheece-borgi",
    ariaLabel: "Sheece Borgi LinkedIn profile",
    icon: UserRound,
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 border-t-2 border-border bg-primary text-primary-foreground"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-widest opacity-80">
              Contact
            </p>
            <h2
              id="contact-heading"
              className="mt-4 max-w-2xl text-4xl font-bold tracking-tighter text-balance sm:text-5xl lg:text-6xl"
            >
              Let&apos;s build something useful.
            </h2>
            <p className="mt-6 max-w-xl font-serif text-lg leading-8 opacity-90">
              I&apos;m a Software Engineer with 5+ years building enterprise
              SaaS platforms. If you&apos;re working on multi-tenant products,
              clean architecture, or reliable delivery pipelines, I&apos;d be
              glad to talk.
            </p>

            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              aria-label={`Email ${EMAIL_ADDRESS}`}
              className="mt-10 inline-flex items-center gap-3 border-b-2 border-current pb-1 text-xl font-bold transition-colors hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-primary sm:text-2xl"
            >
              <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
              {EMAIL_ADDRESS}
              <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden="true" />
            </a>
          </div>

          <address className="not-italic border-2 border-border bg-card p-6 text-foreground shadow-md sm:p-8">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
              Elsewhere
            </p>

            <ul className="mt-6 grid gap-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon;

                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.ariaLabel}
                      className="inline-flex w-full items-center justify-between gap-3 border-2 border-border bg-muted px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                    >
                      <span className="inline-flex items-center gap-3">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                        {link.label}
                      </span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </address>
        </div>
      </div>
    </section>
  );
}
