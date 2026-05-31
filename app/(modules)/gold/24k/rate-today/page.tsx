import { getGoldPricesPakistan } from "@/actions/gold-prices-pakistan";
import { AdSlot } from "@/app/_components/ad-slot";
import { HeroSection } from "@/app/_components/hero-section";
import { PriceCards } from "@/app/_components/price-cards";
import { formatPKR } from "@/lib";
import { calculateGoldPrice } from "@/lib/calculators";

export default async function Gold24KRateTodayPage() {
  const { basePricePerTolaPer24k, updatedAt } = await getGoldPricesPakistan();

  const gold24kPrices = [
    {
      label: "Per Tola",
      value: formatPKR(
        calculateGoldPrice(basePricePerTolaPer24k, "tola", "24k"),
      ),
    },
    {
      label: "Per Gram",
      value: formatPKR(
        calculateGoldPrice(basePricePerTolaPer24k, "gram", "24k"),
      ),
    },
    {
      label: "Per 10 Grams",
      value: formatPKR(
        calculateGoldPrice(basePricePerTolaPer24k, "10g", "24k"),
      ),
    },
    {
      label: "Per Ounce",
      value: formatPKR(
        calculateGoldPrice(basePricePerTolaPer24k, "ounce", "24k"),
      ),
    },
    {
      label: "Per Kilogram",
      value: formatPKR(calculateGoldPrice(basePricePerTolaPer24k, "kg", "24k")),
    },
  ];

  return (
    <div className="space-y-10">
      <HeroSection
        description="Live 24K rates per tola, gram, 10g, ounce, and kg — in PKR"
        image={{
          src: "/images/gold/gold-bricks.png",
          alt: "Gold bars",
          width: 735,
          height: 499,
        }}
        slot={<PriceCards className="grid-cols-3" prices={gold24kPrices} />}
        title="24K Gold price in Pakistan"
        updatedAt={updatedAt}
      />
      <AdSlot />
    </div>
  );
}
