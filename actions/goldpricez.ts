"use server";

import axios from "axios";
import { cacheTag } from "next/cache";
import { env } from "@/env";

const getGoldSilverRaw = async () => {
  "use cache";
  cacheTag("goldpricez_gold_silver_price");

  const response = await axios.get(env.GOLDPRICEZ_GOLD_SILVER_API);

  if (response.status !== 200)
    throw new Error("Failed to fetch gold/silver price");

  return response.data;
};

export const getGoldPrice = async () => {
  const data = await getGoldSilverRaw();

  return {
    ounce_price_usd: data.ounce_price_usd,
    gmt_ounce_price_usd_updated: data.gmt_ounce_price_usd_updated,
    ounce_price_ask: data.ounce_price_ask,
    ounce_price_bid: data.ounce_price_bid,
    ounce_price_usd_today_low: data.ounce_price_usd_today_low,
    ounce_price_usd_today_high: data.ounce_price_usd_today_high,
    usd_to_pkr: data.usd_to_pkr,
    gmt_pkr_updated: data.gmt_pkr_updated,
    ounce_in_pkr: data.ounce_in_pkr,
    gram_to_ounce_formula: data.gram_to_ounce_formula,
    gram_in_usd: data.gram_in_usd,
    gram_in_pkr: data.gram_in_pkr,
    kg_to_ounce_formula: data.kg_to_ounce_formula,
    kg_in_usd: data.kg_in_usd,
    kg_in_pkr: data.kg_in_pkr,
    grain_to_ounce_formula: data.grain_to_ounce_formula,
    grain_in_usd: data.grain_in_usd,
    grain_in_pkr: data.grain_in_pkr,
    "tael-hongkong_to_ounce_formula": data["tael-hongkong_to_ounce_formula"],
    "tael-hongkong_in_usd": data["tael-hongkong_in_usd"],
    "tael-hongkong_in_pkr": data["tael-hongkong_in_pkr"],
    "tael-japan_to_ounce_formula": data["tael-japan_to_ounce_formula"],
    "tael-japan_in_usd": data["tael-japan_in_usd"],
    "tael-japan_in_pkr": data["tael-japan_in_pkr"],
    "tola-india_to_ounce_formula": data["tola-india_to_ounce_formula"],
    "tola-india_in_usd": data["tola-india_in_usd"],
    "tola-india_in_pkr": data["tola-india_in_pkr"],
    "tola-pakistan_to_ounce_formula": data["tola-pakistan_to_ounce_formula"],
    "tola-pakistan_in_usd": data["tola-pakistan_in_usd"],
    "tola-pakistan_in_pkr": data["tola-pakistan_in_pkr"],
    masha_to_ounce_formula: data.masha_to_ounce_formula,
    masha_in_usd: data.masha_in_usd,
    masha_in_pkr: data.masha_in_pkr,
    ratti_to_ounce_formula: data.ratti_to_ounce_formula,
    ratti_in_usd: data.ratti_in_usd,
    ratti_in_pkr: data.ratti_in_pkr,
  };
};

export const getSilverPrice = async () => {
  const data = await getGoldSilverRaw();

  return {
    silver_ounce_in_pkr: data.silver_ounce_in_pkr,
    silver_gram_in_usd: data.silver_gram_in_usd,
    silver_gram_in_pkr: data.silver_gram_in_pkr,
    silver_kg_in_usd: data.silver_kg_in_usd,
    silver_kg_in_pkr: data.silver_kg_in_pkr,
    silver_grain_in_usd: data.silver_grain_in_usd,
    silver_grain_in_pkr: data.silver_grain_in_pkr,
    "silver_tael-hongkong_in_usd": data["silver_tael-hongkong_in_usd"],
    "silver_tael-hongkong_in_pkr": data["silver_tael-hongkong_in_pkr"],
    "silver_tael-japan_in_usd": data["silver_tael-japan_in_usd"],
    "silver_tael-japan_in_pkr": data["silver_tael-japan_in_pkr"],
    "silver_tola-india_in_usd": data["silver_tola-india_in_usd"],
    "silver_tola-india_in_pkr": data["silver_tola-india_in_pkr"],
    "silver_tola-pakistan_in_usd": data["silver_tola-pakistan_in_usd"],
    "silver_tola-pakistan_in_pkr": data["silver_tola-pakistan_in_pkr"],
    silver_masha_in_usd: data.silver_masha_in_usd,
    silver_masha_in_pkr: data.silver_masha_in_pkr,
    silver_ratti_in_usd: data.silver_ratti_in_usd,
    silver_ratti_in_pkr: data.silver_ratti_in_pkr,
    silver_ounce_price_ask_pkr: data.silver_ounce_price_ask_pkr,
    silver_ounce_price_bid_pkr: data.silver_ounce_price_bid_pkr,
    silver_ounce_price_pkr_today_low: data.silver_ounce_price_pkr_today_low,
    silver_ounce_price_pkr_today_high: data.silver_ounce_price_pkr_today_high,
  };
};
