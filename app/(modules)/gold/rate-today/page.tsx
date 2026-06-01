import type { Metadata } from "next";
import { getGoldPricesPakistan } from "@/actions/gold-prices-pakistan";
import { AdSlot } from "@/app/_components/ad-slot";
import { HeroSection } from "@/app/_components/hero-section";
import { PriceCards } from "@/app/_components/price-cards";
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

        <AdSlot />
      </div>
    </div>
  );
}
