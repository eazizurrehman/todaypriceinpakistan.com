export const metadata = {
  title: "About - TodayPriceInPakistan.com",
  description:
    "Learn about TodayPriceInPakistan.com, our mission, and how we provide clean, fast commodity price updates for Pakistan.",
};

export default function AboutPage() {
  return (
    <div className="space-y-8 pt-8">
      <section className="relative overflow-hidden rounded-4xl border bg-card/70 p-7">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-amber-200/10 via-transparent to-transparent" />
        <div className="relative space-y-3">
          <p className="text-[11px] text-muted-foreground uppercase tracking-wide">
            About us
          </p>
          <h1 className="font-semibold text-4xl">About TodayPriceInPakistan</h1>
          <p className="text-muted-foreground text-sm">
            TodayPriceInPakistan.com is a focused commodity price hub designed
            for users who want fast, clean, and practical updates without
            clutter. We publish key pricing information in a consistent
            dashboard format that is easy to browse on mobile and desktop.
          </p>
          <div className="flex flex-wrap gap-2 text-muted-foreground text-xs">
            <span className="rounded-full border border-border/70 px-3 py-1">
              Mobile-first
            </span>
            <span className="rounded-full border border-border/70 px-3 py-1">
              Clean data presentation
            </span>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border bg-card/70 p-6">
          <h2 className="font-medium text-lg">Clean UI</h2>
          <p className="mt-2 text-muted-foreground text-sm">
            We prioritize readability, spacing, and modern visual hierarchy.
          </p>
        </div>
        <div className="rounded-3xl border bg-card/70 p-6">
          <h2 className="font-medium text-lg">Clean UX</h2>
          <p className="mt-2 text-muted-foreground text-sm">
            Important rates are visible quickly with minimal interaction
            friction.
          </p>
        </div>
        <div className="rounded-3xl border bg-card/70 p-6">
          <h2 className="font-medium text-lg">Respectful Ads</h2>
          <p className="mt-2 text-muted-foreground text-sm">
            We avoid intrusive popups and use native ad placements only.
          </p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-4xl border bg-card/70 p-7">
          <h2 className="font-semibold text-2xl">What we cover</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground text-sm">
            <li>• Gold and precious metal rates in Pakistan</li>
            <li>• Currency reference rates like USD to PKR</li>
            <li>• Fuel pricing categories and market snapshots</li>
          </ul>
        </div>
        <div className="rounded-4xl border bg-card/70 p-7">
          <h2 className="font-semibold text-2xl">Our promise</h2>
          <p className="mt-4 text-muted-foreground text-sm">
            Accuracy, clarity, and consistency. If a value looks off, report it
            and we will review quickly.
          </p>
        </div>
      </section>
    </div>
  );
}
