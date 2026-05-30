"use server";

import axios from "axios";
import { cacheLife, cacheTag } from "next/cache";
import { env } from "@/env";

export type GoldPricesPakistan = {
  updatedAt: Date;
  basePricePerTolaPer24k: number;
};

export const getGoldPricesPakistan = async (): Promise<GoldPricesPakistan> => {
  "use cache";
  cacheTag("gold_prices_pakistan");
  cacheLife("eightHours");

  const { status, data } = await axios.get(env.GOLD_PRICES_PAKISTAN_GOLD_API, {
    headers: {
      "x-rapidapi-host": env.GOLD_PRICES_PAKISTAN_API_HOST,
      "x-rapidapi-key": env.GOLD_PRICES_PAKISTAN_API_KEY,
    },
  });

  if (status !== 200) throw new Error("Failed to fetch gold/silver price");

  return {
    updatedAt: new Date(),
    basePricePerTolaPer24k: data["1 Tola"][0],
  };
};
