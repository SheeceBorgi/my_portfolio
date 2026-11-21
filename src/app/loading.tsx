export default function Loading() {
  return (
    <main
      aria-busy="true"
      aria-label="Loading portfolio content"
      className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-20 sm:px-8 lg:px-12"
    >
      <span className="sr-only">Loading portfolio content.</span>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div className="space-y-6">
          <div className="h-6 w-40 animate-pulse border-2 border-border bg-muted" />
          <div className="h-24 w-3/4 animate-pulse border-2 border-border bg-muted" />
          <div className="h-5 w-full animate-pulse bg-muted" />
          <div className="h-5 w-5/6 animate-pulse bg-muted" />
          <div className="flex gap-3 pt-4">
            <div className="h-11 w-36 animate-pulse border-2 border-border bg-muted" />
            <div className="h-11 w-36 animate-pulse border-2 border-border bg-muted" />
          </div>
        </div>

        <div className="h-80 animate-pulse border-2 border-border bg-muted shadow-sm" />
      </div>
    </main>
  );
}
