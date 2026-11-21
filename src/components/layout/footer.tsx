"use client";

import { ArrowUp } from "lucide-react";
import { useSyncExternalStore } from "react";

const subscribeToYear = () => () => {};
const getClientYear = () => new Date().getFullYear();
const getServerYear = () => null;

export function Footer() {
  const currentYear = useSyncExternalStore<number | null>(
    subscribeToYear,
    getClientYear,
    getServerYear,
  );

  return (
    <footer className="border-t-2 border-border bg-card">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-10 sm:grid-cols-3 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-2">
          <p className="font-mono text-sm font-bold uppercase tracking-wider text-foreground">
            Software Engineer
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            © {currentYear ?? "—"} Sheece Borgi
          </p>
        </div>

        <div className="sm:text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
            Built with
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Next.js, React, TypeScript &amp; Tailwind CSS.
          </p>
        </div>

        <div className="sm:text-right">
          <a
            href="#top"
            aria-label="Back to top of page"
            className="inline-flex items-center gap-2 border-2 border-border bg-muted px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-foreground transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
          >
            Back to top
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
