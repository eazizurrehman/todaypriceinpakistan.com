import type { Metadata } from "next";
import { getGoldPricesPakistan } from "@/actions/gold-prices-pakistan";
import { AdSlot } from "@/app/_components/ad-slot";
import { HeroSection } from "@/app/_components/hero-section";
import { PriceCards } from "@/app/_components/price-cards";
import { DataTable } from "@/app/_components/table";
import {
  type GoldRateRow,
  goldColumns,
} from "@/app/(modules)/gold/rate-today/columns";
import { formatPKR } from "@/lib";
import { calculateGoldPrice } from "@/lib/calculators";

export const metadata: Metadata = {
  title: "Gold | Live 24K, 22K, 21K, 18K, 14K, 12K, 10K prices",
  description:
    "Live gold today price in Pakistan with 24K, 22K, 21K, 18K, 14K, 12K, 10K prices, per tola and per gram.",
  alternates: {
    canonical: "https://todaypriceinpakistan.com/gold/rate-today",
  },
};

export default async function GoldRateTodayPage() {
  const { basePricePerTolaPer24k, updatedAt } = await getGoldPricesPakistan();

  const goldMainPrices = [
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
    <div className="">
      <div className="space-y-8 text-foreground">
        <HeroSection
          description="Live rates for 24K, 22K, 21K, 18K, 14K, 12K, 10K — in PKR"
          image={{
            src: "/images/gold/gold-bricks.png",
            alt: "Gold bars",
            width: 735,
            height: 499,
          }}
          slot={<PriceCards className="grid-cols-4" prices={goldMainPrices} />}
          title="Gold price in Pakistan"
          updatedAt={updatedAt}
        />

        <AdSlot variant="leaderboard" />

        <section className="grid items-start gap-6 lg:gap-8">
          <DataTable
            columns={goldColumns}
            data={makeData()}
            title="Gold price by karat"
          />
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
          <AdSlot  /> */}

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
          </div>
        </section>
      </div>
    </div>
  );
}
