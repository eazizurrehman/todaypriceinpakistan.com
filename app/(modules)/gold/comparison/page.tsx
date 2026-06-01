import Image from "next/image";
import { getGoldPricesPakistan } from "@/actions/gold-prices-pakistan";
import { AdSlot } from "@/app/_components/ad-slot";
import { DataTable } from "@/app/_components/table";
import {
  type GoldRateRow,
  goldColumns,
} from "@/app/(modules)/gold/rate-today/columns";
import { calculateGoldPrice, formatPKR } from "@/lib/calculators";

export default async function GoldComparisonPage() {
  const { basePricePerTolaPer24k } = await getGoldPricesPakistan();

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

  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-4xl border bg-card/70 p-6 backdrop-blur supports-backdrop-filter:bg-card/60">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-amber-500/12 via-transparent to-emerald-500/8" />
        <div className="relative space-y-10">
          <div className="flex justify-between gap-4">
            <div className="space-y-2">
              <h1 className="font-semibold text-4xl leading-tight md:text-5xl">
                Gold Comparison
              </h1>
              <p className="max-w-lg text-muted-foreground text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit,
                aut?
              </p>
            </div>
            <div className="flex min-h-full items-center justify-center">
              <Image
                alt="Gold calculator"
                className="w-40 object-cover"
                height={1024}
                src="/images/gold/gold-calculator.png"
                width={1024}
              />
            </div>
          </div>
        </div>
      </section>
      <AdSlot />
      <section className="grid items-start gap-6 lg:gap-8">
        <DataTable
          columns={goldColumns}
          data={makeData()}
          title="Gold price by karat"
        />
      </section>

      <AdSlot />
    </div>
  );
}
