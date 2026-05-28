import type { Metadata } from "next";
import Image from "next/image";
import { AdSlot } from "@/app/_components/ad-slot";

export const metadata: Metadata = {
  title: "Gold | Live 24K, 22K, 21K, 18K prices",
  description:
    "Live gold today price in Pakistan with 24K, 22K, 21K, 18K prices, per tola and per gram, plus market summary and converter.",
  alternates: {
    canonical: "https://todaypriceinpakistan.com/gold/rate-today",
  },
};

const karatRatios = {
  "24K": 1,
  "22K": 0.9167,
  "21K": 0.875,
  "18K": 0.75,
} as const;

const baseUnits = [
  { key: "tola", label: "Per Tola (Pakistan)", value: 495660.04 },
  { key: "gram", label: "Per Gram", value: 39652.8 },
  { key: "10g", label: "Per 10 Grams", value: 396528.04 },
  { key: "kg", label: "Per Kilogram", value: 39715432.71 },
  { key: "masha", label: "Per Masha", value: 38528.69 },
  { key: "ratti", label: "Per Ratti", value: 7226.45 },
  { key: "grain", label: "Per Grain", value: 2470.58 },
  { key: "tael", label: "Tael (Hong Kong)", value: 1501223.02 },
];

const marketSummary = [
  { label: "USD → PKR", value: "278.34" },
  { label: "Gold Ounce (USD)", value: "$4,438.06" },
  { label: "Today High", value: "$4,466.69" },
  { label: "Today Low", value: "$4,438.06" },
  { label: "Updated", value: "28 May 2026, 01:13 AM" },
];

const highlights = [
  { label: "24K per tola", value: "Rs. 495,660", delta: "+0.24%" },
  { label: "22K per tola", value: "Rs. 454,350", delta: "+0.21%" },
  { label: "24K per gram", value: "Rs. 39,653", delta: "+0.19%" },
  { label: "10 grams 24K", value: "Rs. 396,528", delta: "+0.22%" },
];

function RatePill({
  label,
  value,
  delta,
}: {
  label: string;
  value: string;
  delta: string;
}) {
  return (
    <div className="rounded-3xl border bg-background/25 p-4">
      <p className="text-[11px] text-muted-foreground uppercase tracking-wide">
        {label}
      </p>
      <p className="mt-2 font-semibold text-amber-200 text-lg">{value}</p>
      <p className="mt-1 text-emerald-300 text-xs">{delta} today</p>
    </div>
  );
}

const mockupImage =
  "data:image/svg+xml;utf8,<?xml version='1.0' encoding='UTF-8'?><svg xmlns='http://www.w3.org/2000/svg' width='1200' height='520' viewBox='0 0 1200 520'><defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'><stop offset='0' stop-color='%23131a23'/><stop offset='1' stop-color='%231b2230'/></linearGradient></defs><rect width='1200' height='520' fill='url(%23g)'/><rect x='60' y='60' width='520' height='160' rx='24' fill='%231e2634' stroke='%23313945'/><rect x='640' y='60' width='500' height='340' rx='24' fill='%231e2634' stroke='%23313945'/><rect x='60' y='250' width='520' height='220' rx='24' fill='%231e2634' stroke='%23313945'/><rect x='90' y='90' width='200' height='16' rx='8' fill='%23f6d58a'/><rect x='90' y='120' width='260' height='12' rx='6' fill='%23c4c8cf'/><rect x='90' y='320' width='380' height='12' rx='6' fill='%23c4c8cf'/><rect x='90' y='350' width='300' height='12' rx='6' fill='%23c4c8cf'/><rect x='90' y='380' width='260' height='12' rx='6' fill='%23c4c8cf'/><rect x='680' y='100' width='420' height='18' rx='9' fill='%23f6d58a'/><rect x='680' y='140' width='360' height='12' rx='6' fill='%23c4c8cf'/><rect x='680' y='180' width='300' height='12' rx='6' fill='%23c4c8cf'/><rect x='680' y='220' width='280' height='12' rx='6' fill='%23c4c8cf'/><rect x='680' y='260' width='240' height='12' rx='6' fill='%23c4c8cf'/></svg>";

export default function GoldRateTodayPage() {
  return (
    <div className="space-y-8 pt-8 text-foreground">
      <section className="relative overflow-hidden rounded-4xl border bg-card/70 p-7 backdrop-blur supports-backdrop-filter:bg-card/60">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-amber-500/12 via-transparent to-emerald-500/8" />
        <div className="relative space-y-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="text-[11px] text-muted-foreground uppercase tracking-wide">
                Gold rate dashboard
              </p>
              <h1 className="font-semibold text-4xl leading-tight md:text-5xl">
                Gold rate today in Pakistan
              </h1>
              <p className="text-muted-foreground text-sm">
                Updated frequently • clean layout • no popup ads
              </p>
            </div>
            <div className="rounded-3xl border border-amber-300/30 bg-background/25 px-5 py-4">
              <p className="text-muted-foreground text-xs">24K per tola</p>
              <p className="mt-1 font-semibold text-3xl text-amber-200">
                Rs. 495,660
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <RatePill
                delta={item.delta}
                key={item.label}
                label={item.label}
                value={item.value}
              />
            ))}
          </div>
        </div>
      </section>

      <AdSlot slot="gold-inline-top" variant="leaderboard" />

      <section className="grid items-start gap-6">
        <div className="rounded-4xl border bg-card/70 p-6 backdrop-blur supports-backdrop-filter:bg-card/60">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-semibold text-xl">Gold price by karat</h2>
            <div className="flex gap-2 text-xs">
              <span className="rounded-full border bg-background/25 px-3 py-1 text-muted-foreground">
                PKR
              </span>
              <span className="rounded-full border bg-background/25 px-3 py-1 text-muted-foreground">
                Last update: today
              </span>
            </div>
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-160 text-left text-sm">
              <thead className="text-[11px] text-muted-foreground uppercase tracking-wide">
                <tr>
                  <th className="pr-6 pb-3">Unit</th>
                  {Object.keys(karatRatios).map((karat) => (
                    <th className="pr-6 pb-3" key={karat}>
                      {karat}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-foreground/90">
                {baseUnits.map((unit) => (
                  <tr className="border-border/70 border-t" key={unit.key}>
                    <td className="py-4 pr-6 font-medium text-foreground">
                      {unit.label}
                    </td>
                    {Object.values(karatRatios).map((ratio, index) => (
                      <td className="py-4 pr-6" key={`${unit.key}-${index}`}>
                        Rs. {Math.round(unit.value * ratio).toLocaleString()}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
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

      <section className="grid gap-6 lg:grid-cols-3">
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

      <AdSlot slot="gold-inline-bottom" />

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-4xl border bg-card/70 p-6">
          <h3 className="font-semibold text-lg">Gold buying guide</h3>
          <ul className="mt-4 space-y-3 text-muted-foreground text-sm">
            <li>
              • Compare both tola and gram rates before finalizing purchase.
            </li>
            <li>• 24K is purest; 22K is commonly used in jewelry making.</li>
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
          <div className="mt-5 overflow-hidden rounded-3xl border bg-background/25">
            <Image
              alt="Gold price UI mockup preview"
              className="w-full object-cover"
              height={520}
              src={mockupImage}
              unoptimized
              width={1200}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
