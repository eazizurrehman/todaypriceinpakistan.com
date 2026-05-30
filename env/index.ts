import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
import "dotenv/config";

export const env = createEnv({
  server: {
    // App
    NODE_ENV: z.enum(["development", "production"]).default("development"),

    // GOLDPRICEZ
    GOLDPRICEZ_GOLD_SILVER_API: z.url("GOLDPRICEZ_GOLD_SILVER_API is required"),
    GOLDPRICEZ_API_KEY: z.string("GOLDPRICEZ_API_KEY is required"),

    // GOLD_PRICES_PAKISTAN
    GOLD_PRICES_PAKISTAN_GOLD_API: z.url(
      "GOLD_PRICES_PAKISTAN_GOLD_API is required",
    ),
    GOLD_PRICES_PAKISTAN_API_HOST: z.string(
      "GOLD_PRICES_PAKISTAN_API_HOST is required",
    ),
    GOLD_PRICES_PAKISTAN_API_KEY: z.string(
      "GOLD_PRICES_PAKISTAN_API_KEY is required",
    ),
  },
  emptyStringAsUndefined: true,
  runtimeEnv: {
    // App
    NODE_ENV: process.env.NODE_ENV,

    // GOLDPRICEZ
    GOLDPRICEZ_GOLD_SILVER_API: process.env.GOLDPRICEZ_GOLD_SILVER_API,
    GOLDPRICEZ_API_KEY: process.env.GOLDPRICEZ_API_KEY,

    // GOLD_PRICES_PAKISTAN
    GOLD_PRICES_PAKISTAN_GOLD_API: process.env.GOLD_PRICES_PAKISTAN_GOLD_API,
    GOLD_PRICES_PAKISTAN_API_HOST: process.env.GOLD_PRICES_PAKISTAN_API_HOST,
    GOLD_PRICES_PAKISTAN_API_KEY: process.env.GOLD_PRICES_PAKISTAN_API_KEY,
  },
});
