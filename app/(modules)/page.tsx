import Link from "next/link";
import { AdSlot } from "@/app/_components/ad-slot";

const priceCategories = [
  {
    title: "Gold ",
    description:
      "Live 24K, 22K, 21K, and 18K prices in Pakistan across tola and gram.",
    href: "/gold/rate-today",
    status: "Live",
    accent: "from-amber-400/25 via-amber-300/10 to-transparent",
  },
  {
    title: "Silver ",
    description:
      "Daily silver prices with tola, gram, and kilogram conversions.",
    href: "/silver-rate-today",
    status: "Live",
    accent: "from-slate-300/20 via-slate-200/10 to-transparent",
  },
  {
    title: "USD ",
    description: "PKR conversion rates for USD with market trend snapshots.",
    href: "/usd-rate-today",
    status: "Live",
    accent: "from-emerald-400/25 via-emerald-300/10 to-transparent",
  },
  {
    title: "Petrol ",
    description: "Latest petrol and diesel prices with historical changes.",
    href: "/petrol-rate-today",
    status: "Live",
    accent: "from-rose-400/25 via-rose-300/10 to-transparent",
  },
  {
    title: "Diesel ",
    description: "Latest diesel prices with city-wise changes.",
    href: "/diesel-rate-today",
    status: "Live",
    accent: "from-cyan-400/25 via-cyan-300/10 to-transparent",
  },
];

const marketSummary = [
  { label: "USD → PKR", value: "278.34" },
  { label: "Gold Ounce (USD)", value: "$4,438.06" },
  { label: "Today High", value: "$4,466.69" },
  { label: "Today Low", value: "$4,438.06" },
];

function StatChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border bg-card/70 px-4 py-3 backdrop-blur supports-backdrop-filter:bg-card/60">
      <p className="text-[11px] text-muted-foreground uppercase tracking-wide">
        {label}
      </p>
      <p className="mt-1 font-semibold text-foreground text-sm">{value}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="space-y-8 pt-8 text-foreground">
      <section className="relative overflow-hidden rounded-4xl border bg-card/70 px-6 py-10 backdrop-blur supports-backdrop-filter:bg-card/60 md:px-10">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-amber-500/10 via-transparent to-emerald-500/10" />
        <div className="relative grid items-start gap-8">
          <div className="space-y-10">
            <p className="text-[11px] text-muted-foreground uppercase tracking-wide">
              Fast, clean, and frequently updated
            </p>
            <h1 className="max-w-xl font-semibold text-4xl leading-tight md:text-5xl">
              <span className="block">Prices in Pakistan</span>
              <span className="block">— without the noise.</span>
            </h1>
            <p className="max-w-xl text-base text-muted-foreground">
              Gold, currency, and fuel rates in one modern dashboard. Built for
              speed and clarity, with ad placements that don’t interrupt
              reading.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-amber-300 px-5 py-2.5 font-medium text-amber-950 text-sm hover:bg-amber-200"
                href="/gold/rate-today"
              >
                View gold rate
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-full border bg-background/40 px-5 py-2.5 font-medium text-foreground text-sm hover:bg-background/60"
                href="/gold/rate-today#converter"
              >
                Open converter
              </Link>
              <span className="rounded-full border bg-background/30 px-4 py-2 text-muted-foreground text-sm">
                Updated frequently
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <StatChip label="UX" value="Mobile-first & clean" />
              <StatChip label="Ads" value="No popups" />
              <StatChip label="Performance" value="Fast pages" />
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6">
        <div className="space-y-4">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="font-semibold text-xl">All price categories</h2>
              <p className="mt-1 text-muted-foreground text-sm">
                Each module follows the same clean layout for consistency.
              </p>
            </div>
            <span className="text-muted-foreground text-xs">
              Data updates frequently
            </span>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {priceCategories.map((category) => {
              const isLive = category.status === "Live";
              return (
                <div
                  className="group rounded-4xl border bg-card/70 p-6 transition-colors hover:bg-card/80"
                  key={category.title}
                >
                  <div
                    className={`h-12 rounded-3xl border border-border/70 bg-linear-to-r ${category.accent}`}
                  />
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                    <span
                      className={`shrink-0 rounded-full border px-3 py-1 text-xs ${
                        isLive
                          ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-200"
                          : "border-border/70 text-muted-foreground"
                      }`}
                    >
                      {category.status}
                    </span>
                  </div>
                  <p className="mt-2 text-muted-foreground text-sm">
                    {category.description}
                  </p>
                  {isLive ? (
                    <Link
                      className="mt-4 inline-flex text-amber-200 text-sm hover:text-amber-100"
                      href={category.href}
                    >
                      View details →
                    </Link>
                  ) : (
                    <span className="mt-4 inline-flex text-muted-foreground text-sm">
                      Launching soon
                    </span>
                  )}
                </div>
              );
            })}
            <AdSlot />
          </div>
        </div>
      </section>
      <section className="grid gap-6">
        <div className="space-y-10">
          <div className="rounded-4xl border bg-card/70 p-6">
            <h3 className="font-semibold text-lg">Today at a glance</h3>
            <p className="mt-2 text-muted-foreground text-sm">
              Your quick summary panel for major price movements in Pakistan.
            </p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between rounded-3xl border bg-background/30 px-4 py-3">
                <span className="text-muted-foreground text-sm">Gold 24K</span>
                <span className="font-medium text-foreground text-sm">
                  Rs. 495,660
                </span>
              </div>
              <div className="flex items-center justify-between rounded-3xl border bg-background/30 px-4 py-3">
                <span className="text-muted-foreground text-sm">Silver</span>
                <span className="font-medium text-foreground text-sm">
                  Live today
                </span>
              </div>
              <div className="flex items-center justify-between rounded-3xl border bg-background/30 px-4 py-3">
                <span className="text-muted-foreground text-sm">USD/PKR</span>
                <span className="font-medium text-foreground text-sm">
                  Updated
                </span>
              </div>
            </div>
          </div>
          <AdSlot />

          <div className="rounded-4xl border bg-card/70 p-6">
            <h3 className="font-semibold text-lg">Market summary</h3>
            <div className="mt-4 space-y-3">
              {marketSummary.map((item) => (
                <div
                  className="flex items-center justify-between rounded-3xl border bg-background/25 px-4 py-3"
                  key={item.label}
                >
                  <span className="text-muted-foreground text-sm">
                    {item.label}
                  </span>
                  <span className="font-medium text-foreground text-sm">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-4xl border bg-card/70 p-7">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="font-semibold text-lg">Why people use this hub</h3>
            <p className="mt-2 text-muted-foreground text-sm">
              A single place for commodity prices with a modern UI, clean UX,
              and ad placements that flow naturally with content.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-muted-foreground text-xs">
            <span className="rounded-full border bg-background/30 px-3 py-1">
              No popups
            </span>
            <span className="rounded-full border bg-background/30 px-3 py-1">
              Mobile-first
            </span>
            <span className="rounded-full border bg-background/30 px-3 py-1">
              Fast loading
            </span>
            <span className="rounded-full border bg-background/30 px-3 py-1">
              Consistent modules
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
