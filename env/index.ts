import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
import "dotenv/config";

export const env = createEnv({
  server: {
    // App
    NODE_ENV: z.enum(["development", "production"]).default("development"),
    GOLD_PRICEZ_API_KEY: z.url("DATABASE_URL is required"),
  },
  emptyStringAsUndefined: true,
  runtimeEnv: {
    // App
    NODE_ENV: process.env.NODE_ENV,
    GOLD_PRICEZ_API_KEY: process.env.GOLD_PRICEZ_API_KEY,
  },
});
