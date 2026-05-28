import Link from "next/link";

const priceCategories = [
  {
    title: "Gold Rate Today",
    description:
      "Live 24K, 22K, 21K, and 18K prices in Pakistan across tola and gram.",
    href: "/gold-rate-today",
    status: "Live",
    accent: "from-amber-300/20 via-amber-200/10 to-transparent",
  },
  {
    title: "Silver Rate Today",
    description:
      "Daily silver prices with tola, gram, and kilogram conversions.",
    href: "/silver-rate-today",
    status: "Live",
    accent: "from-slate-300/20 via-slate-200/10 to-transparent",
  },
  {
    title: "USD Rate Today",
    description: "PKR conversion rates for USD with market trend snapshots.",
    href: "/usd-rate-today",
    status: "Live",
    accent: "from-emerald-300/20 via-emerald-200/10 to-transparent",
  },
  {
    title: "Petrol Rate Today",
    description: "Latest petrol and diesel prices with historical changes.",
    href: "/petrol-rate-today",
    status: "Live",
    accent: "from-rose-300/20 via-rose-200/10 to-transparent",
  },
  {
    title: "Diesel Rate Today",
    description: "Latest diesel prices with city-wise changes.",
    href: "/diesel-rate-today",
    status: "Live",
    accent: "from-cyan-300/20 via-cyan-200/10 to-transparent",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto space-y-12 pt-10 text-white">
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <p className="text-white/50 text-xs uppercase">
            TodayPriceInPakistan.com
          </p>
          <h1 className="font-semibold text-4xl leading-tight md:text-5xl">
            Pakistan Price Tracker
          </h1>
          <p className="max-w-xl text-base text-white/70">
            Track precious metals, currency, and fuel prices in one place. Start
            with gold today and watch for upcoming categories.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
              href="/gold-rate-today"
            >
              View gold rate
            </Link>
            <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/60">
              Updated daily
            </span>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[#151a22] p-6">
          <p className="text-white/50 text-xs uppercase">Live right now</p>
          <h2 className="mt-3 font-semibold text-2xl">Gold Price</h2>
          <p className="mt-2 text-sm text-white/70">
            24K per tola • Karachi, Pakistan
          </p>
          <div className="mt-6 rounded-2xl border border-[#c8972a]/40 bg-[#1a1f29] px-4 py-4 text-[#f6d58a]">
            Rs. 495,660
          </div>
          <Link
            className="mt-5 inline-flex items-center text-amber-200 text-sm hover:text-amber-100"
            href="/gold-rate-today"
          >
            Explore gold dashboard →
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-semibold text-xl">All price categories</h2>
          <span className="text-white/50 text-xs">Updated daily</span>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {priceCategories.map((category) => {
            const isLive = category.status === "Live";
            return (
              <div
                className="rounded-3xl border border-white/10 bg-[#151a22] p-5"
                key={category.title}
              >
                <div
                  className={`h-12 rounded-2xl border border-white/5 bg-linear-to-r ${category.accent}`}
                />
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                  <span
                    className={`rounded-full border px-3 py-1 text-xs ${
                      isLive
                        ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-200"
                        : "border-white/10 text-white/50"
                    }`}
                  >
                    {category.status}
                  </span>
                </div>
                <p className="mt-2 text-sm text-white/70">
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
                  <span className="mt-4 inline-flex text-sm text-white/40">
                    Launching soon
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-[#151a22] p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-lg">Why track with us?</h3>
            <p className="mt-2 text-sm text-white/70">
              We combine local market rates, global spot trends, and clean
              design to help you make informed decisions.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-white/60 text-xs">
            <span className="rounded-full border border-white/10 px-3 py-1">
              Accurate PKR rates
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              Mobile-first layout
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              Updated daily
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
