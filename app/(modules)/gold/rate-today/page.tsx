import type { Metadata } from "next";
import Image from "next/image";
import { getGoldPricesPakistan } from "@/actions/gold-prices-pakistan";
import { AdSlot } from "@/app/_components/ad-slot";
import { Pulse } from "@/app/_components/pulse";
import { SideLinks } from "@/app/_components/side-links";
import { DataTable } from "@/app/_components/table";
import { Badge } from "@/app/_shadcn/badge";
import {
  type GoldRateRow,
  goldColumns,
} from "@/app/(modules)/gold/rate-today/columns";
import { calculateGoldPrice } from "@/app/(modules)/gold/utils";
import { formatPKR } from "@/lib";
import { formatDateAndTime } from "@/lib/date";

export const metadata: Metadata = {
  title: "Gold | Live 24k, 22k, 21k, 18k, 14k, 12k, 10k prices",
  description:
    "Live gold today price in Pakistan with 24k, 22k, 21k, 18k, 14k, 12k, 10k prices, per tola and per gram.",
  alternates: {
    canonical: "https://todaypriceinpakistan.com/gold/rate-today",
  },
};

const sidebarSections = [
  {
    title: "Per unit",
    links: [{ label: "Per Tola", href: "/gold/per-tola" }],
  },
];

export default async function GoldRateTodayPage() {
  const { basePricePerTolaPer24k, updatedAt } = await getGoldPricesPakistan();

  const highlights = [
    {
      label: "24K per tola",
      value: formatPKR(
        calculateGoldPrice(basePricePerTolaPer24k, "tola", "24k"),
      ),
    },
    {
      label: "22K per tola",
      value: formatPKR(
        calculateGoldPrice(basePricePerTolaPer24k, "tola", "22k"),
      ),
    },
    {
      label: "21K per tola",
      value: formatPKR(
        calculateGoldPrice(basePricePerTolaPer24k, "tola", "21k"),
      ),
    },
    {
      label: "18K per tola",
      value: formatPKR(
        calculateGoldPrice(basePricePerTolaPer24k, "tola", "18k"),
      ),
    },
  ];

  const makeData = (): GoldRateRow[] => {
    const karats = ["24k", "22k", "21k", "18k", "14k", "12k", "10k"] as const;
    const units = [
      { label: "Per Tola", unit: "tola" },
      { label: "Per Gram", unit: "gram" },
      { label: "Per 10 Grams", unit: "10g" },
      { label: "Per Ounce", unit: "ounce" },
      { label: "Per Kilogram", unit: "kg" },
    ] as const;

    return units.map(({ label, unit }) => {
      const row: GoldRateRow = {
        unit: label,
        "24k": "",
        "22k": "",
        "21k": "",
        "18k": "",
        "14k": "",
        "12k": "",
        "10k": "",
      };

      karats.forEach((karat) => {
        row[karat] = formatPKR(
          calculateGoldPrice(basePricePerTolaPer24k, unit, karat),
        );
      });

      return row;
    });
  };

  // const _marketSummary = [
  //   { label: "USD → PKR", value: "278.34" },
  //   { label: "Gold Ounce (USD)", value: "$4,438.06" },
  //   { label: "Today High", value: "$4,466.69" },
  //   { label: "Today Low", value: "$4,438.06" },
  //   { label: "Updated", value: formatDateAndTime(updatedAt) },
  // ];

  return (
    <div className="flex gap-6">
      <div className="relative">
        <div className="sticky top-28 left-0 h-[84dvh]">
          <SideLinks sections={sidebarSections} title="Browse gold rates" />
        </div>
      </div>
      <div className="">
        <div className="space-y-8 pt-8 text-foreground">
          <section className="relative overflow-hidden rounded-4xl border bg-card/70 p-7 backdrop-blur supports-backdrop-filter:bg-card/60">
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-amber-500/12 via-transparent to-emerald-500/8" />
            <div className="relative space-y-10">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Pulse />
                    <p className="text-[12px] text-emerald-300 uppercase">
                      Live
                    </p>
                  </div>

                  <h1 className="font-semibold text-4xl leading-tight md:text-5xl">
                    Gold price in Pakistan
                  </h1>
                  <p className="text-muted-foreground text-sm">
                    Live rates for 24K, 22K, 21K and 18K — in PKR
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Last updated: {formatDateAndTime(updatedAt)}
                  </p>
                </div>
                <div>
                  <Image
                    alt="Gold bars"
                    className="w-40 rounded-2xl object-cover"
                    height={499}
                    src="/images/gold/gold-bricks.png"
                    width={735}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {highlights.map((item) => (
                  <div
                    className="rounded-3xl border bg-background/25 p-4"
                    key={item.label}
                  >
                    <Badge variant="outline">{item.label}</Badge>
                    <p className="mt-2 font-semibold text-amber-200 text-lg">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <AdSlot slot="gold-inline-top" variant="leaderboard" />

          <section className="grid items-start gap-6 lg:gap-8">
            <DataTable
              columns={goldColumns}
              data={makeData()}
              title="Gold price by karat"
            />
          </section>
          <section className="grid items-start gap-6">
            <div className="space-y-10">
              <div className="rounded-4xl border bg-card/70 p-6">
                <h3 className="font-semibold text-lg">Quick converter</h3>
                <p className="mt-2 text-muted-foreground text-sm">
                  Convert between tola, gram, and kilogram in PKR.
                </p>
                <div className="mt-4 space-y-3">
                  <input
                    className="w-full rounded-3xl border bg-background/25 px-4 py-3 text-foreground text-sm outline-none"
                    defaultValue={1}
                    type="number"
                  />
                  <select className="w-full rounded-3xl border bg-background/25 px-4 py-3 text-foreground text-sm">
                    <option>Per Tola (Pakistan)</option>
                    <option>Per Gram</option>
                    <option>Per 10 Grams</option>
                    <option>Per Kilogram</option>
                  </select>
                  <div className="rounded-3xl border border-amber-300/30 bg-linear-to-br from-amber-500/12 via-background/30 to-transparent px-4 py-3 text-amber-200 text-sm">
                    Estimated value: Rs. 495,660
                  </div>
                </div>
              </div>

              <AdSlot slot="gold-sidebar-inline" />
            </div>
          </section>

          {/* <section className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-4xl border bg-card/70 p-6 lg:col-span-2">
              <h3 className="font-semibold text-lg">Trend (last 7 days)</h3>
              <p className="mt-2 text-muted-foreground text-sm">
                Placeholder space for a minimal sparkline chart.
              </p>
              <div className="mt-6 h-44 rounded-3xl border bg-linear-to-r from-amber-500/10 via-background/30 to-emerald-500/10" />
            </div>

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
          </section> 
          <AdSlot slot="gold-inline-bottom" /> */}

          <section className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-4xl border bg-card/70 p-6">
              <h3 className="font-semibold text-lg">Gold buying guide</h3>
              <ul className="mt-4 space-y-3 text-muted-foreground text-sm">
                <li>
                  • Compare both tola and gram rates before finalizing purchase.
                </li>
                <li>
                  • 24K is purest; 22K is commonly used in jewelry making.
                </li>
                <li>
                  • Check local making charges separately from daily gold rate.
                </li>
                <li>• Review USD-PKR movement to understand global impact.</li>
              </ul>
            </div>
            <div className="rounded-4xl border bg-card/70 p-6">
              <h3 className="font-semibold text-lg">Visual mockup</h3>
              <p className="mt-2 text-muted-foreground text-sm">
                Shareable preview for this modern gold dashboard style.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
