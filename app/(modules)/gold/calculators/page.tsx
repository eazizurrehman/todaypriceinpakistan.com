import Image from "next/image";
import { AdSlot } from "@/app/_components/ad-slot";
import { GoldCalculator } from "@/app/(modules)/gold/calculators/_gold-unit-converter";

export default function GoldCalculatorsPage() {
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-4xl border bg-card/70 p-6 backdrop-blur supports-backdrop-filter:bg-card/60">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-amber-500/12 via-transparent to-emerald-500/8" />
        <div className="relative space-y-10">
          <div className="flex justify-between gap-4">
            <div className="space-y-2">
              <h1 className="font-semibold text-4xl leading-tight md:text-5xl">
                Gold Calculators
              </h1>
              <p className="max-w-lg text-muted-foreground text-sm">
                Convert gold weights between Tola, Gram, Ounce, and Kilogram —
                and get real-time PKR valuations based on live market rates.
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
      <section className="grid items-start gap-6">
        <GoldCalculator />
      </section>
      <AdSlot slot="gold-sidebar-inline" />
    </div>
  );
}
