export const KARAT_MULTIPLIERS: Record<string, number> = {
  "24k": 1,
  "22k": 22 / 24,
  "21k": 21 / 24,
  "18k": 18 / 24,
  "16k": 16 / 24,
  "14k": 14 / 24,
  "12k": 12 / 24,
  "10k": 10 / 24,
};

export const UNIT_CONVERSIONS: Record<string, number> = {
  tola: 1,
  "10g": 10 / 11.6638,
  gram: 1 / 11.6638,
  kg: 1000 / 11.6638,
  ounce: 1 / 3.74976,
  ratti: 1 / 0.8748,
  masha: 1 / 12,
  grain: 1 / 180,
  tael: 37.7994 / 11.6638,
};

export const calculateGoldPrice = (
  basePricePerTolaPer24k: number,
  unit: string,
  karat: string,
): number =>
  Math.round(
    basePricePerTolaPer24k * UNIT_CONVERSIONS[unit] * KARAT_MULTIPLIERS[karat],
  );
