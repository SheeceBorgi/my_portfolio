import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-border bg-card">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-4 sm:px-8 lg:px-12">
        <Link
          href="/#top"
          prefetch={false}
          aria-label="Sheece Borgi, back to top"
          className="inline-flex items-center gap-3 font-mono text-sm font-bold uppercase tracking-wider text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
        >
          <span
            aria-hidden="true"
            className="grid h-9 w-9 place-items-center border border-border bg-primary text-primary-foreground shadow-xs"
          >
            SB
          </span>
          Sheece Borgi
        </Link>

        <nav
          aria-label="Primary"
          className="order-3 w-full sm:order-none sm:w-auto"
        >
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  prefetch={false}
                  className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
