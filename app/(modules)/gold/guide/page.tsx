import Image from "next/image";
import { AdSlot } from "@/app/_components/ad-slot";
import { AppPageBadge } from "@/app/_components/page-badge";

export default function GoldCalculatorsPage() {
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-4xl border bg-card/70 p-6 backdrop-blur supports-backdrop-filter:bg-card/60">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-amber-500/12 via-transparent to-emerald-500/8" />
        <div className="relative space-y-10">
          <div className="flex justify-between gap-4">
            <div className="space-y-2">
              <AppPageBadge value="Commodities" />
              <h1 className="font-semibold text-4xl leading-tight md:text-5xl">
                Gold Guide
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
      <section>
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
      </section>
    </div>
  );
}
