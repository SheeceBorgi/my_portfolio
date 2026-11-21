import type { Metadata } from "next";
import Link from "next/link";

import { ArrowLeft, ArrowUpRight, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Page not found | Sheece Borgi",
  },
  description:
    "The requested page could not be found on Sheece Borgi's portfolio.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center bg-background px-6 py-20 sm:px-8 lg:px-12">
      <section
        aria-labelledby="not-found-title"
        className="w-full max-w-3xl border-2 border-border bg-card shadow-lg"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-border bg-muted px-5 py-3">
          <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">
            <Terminal aria-hidden="true" className="h-4 w-4" />
            portfolio / 404
          </div>
          <span className="border border-border bg-card px-2 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-widest text-foreground">
            route not found
          </span>
        </div>

        <div className="p-6 sm:p-10">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
            $ resolve --route current
          </p>

          <div className="mt-5 flex flex-wrap items-end gap-x-6 gap-y-2">
            <span className="font-mono text-7xl font-bold leading-none tracking-tighter text-foreground sm:text-8xl">
              404
            </span>
            <span
              aria-hidden="true"
              className="hidden h-1 w-16 bg-secondary sm:block"
            />
          </div>

          <h1
            id="not-found-title"
            className="mt-6 max-w-xl text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            This page doesn’t exist.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            The route you requested isn’t part of this portfolio. Head back to
            the homepage or jump straight to my work.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              prefetch={false}
              className="inline-flex items-center justify-center gap-2 border-2 border-border bg-primary px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-xs transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              Back home
            </Link>
            <Link
              href="/#projects"
              prefetch={false}
              className="inline-flex items-center justify-center gap-2 border-2 border-border bg-card px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-foreground shadow-xs transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
            >
              View projects
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 border-t-2 border-border pt-5 font-mono text-xs leading-6 text-muted-foreground">
            <p>
              <span className="font-bold text-foreground">hint:</span> try
              <span className="mx-1 border border-border bg-muted px-1.5 py-0.5 text-foreground">
                /
              </span>
              or
              <span className="mx-1 border border-border bg-muted px-1.5 py-0.5 text-foreground">
                /#contact
              </span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
