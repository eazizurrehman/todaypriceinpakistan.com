import { getGoldPricesPakistan } from "@/actions/gold-prices-pakistan";
import { HeroSection } from "@/app/_components/hero-section";
import { calculateGoldPrice } from "@/app/(modules)/gold/utils";
import { formatPKR } from "@/lib";

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
    <div className="flex gap-6">
      <HeroSection
        description="Live 24K rates per tola, gram, 10g, ounce, and kg — in PKR"
        image={{
          url: "/images/gold/gold-bricks.png",
          alt: "Gold bars",
          width: 735,
          height: 499,
        }}
        prices={gold24kPrices}
        title="24K Gold price in Pakistan"
        updatedAt={updatedAt}
      />
    </div>
  );
}
