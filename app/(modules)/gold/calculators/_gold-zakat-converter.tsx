"use client";

import { useState } from "react";
import { AppLastUpdated } from "@/app/_components/last-updated";
import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/app/_shadcn/combobox";
import { Input } from "@/app/_shadcn/input";
import {
  formatPKR,
  KARAT_PURITY,
  KARATS,
  sanitize,
  type TKarat,
  TO_GRAMS,
  type TUnit,
  UNITS,
} from "@/lib/calculators";

const GOLD_NISAB_GRAMS = 87.4785;
const ZAKAT_RATE = 0.025;

export function GoldZakatCalculator({
  basePricePerTolaPer24k,
  priceUpdatedAt,
}: {
  basePricePerTolaPer24k: number;
  priceUpdatedAt: Date;
}) {
  const [quantity, setQuantity] = useState<string>("1");
  const [unit, setUnit] = useState<TUnit>("Tola");
  const [karat, setKarat] = useState<TKarat>("24K");

  const pricePerGram24k = basePricePerTolaPer24k / TO_GRAMS.Tola;

  const parsed = parseFloat(sanitize(quantity) || "0");
  const totalGrams = parsed * TO_GRAMS[unit];
  const pureGoldGrams = totalGrams * KARAT_PURITY[karat];

  const nisabValuePKR = GOLD_NISAB_GRAMS * pricePerGram24k;
  const totalValuePKR = pureGoldGrams * pricePerGram24k;
  const meetsNisab = pureGoldGrams >= GOLD_NISAB_GRAMS;
  const zakatDue = meetsNisab ? totalValuePKR * ZAKAT_RATE : 0;

  return (
    <div className="rounded-4xl border bg-card/70 p-6 shadow-lg">
      <p className="mt-2 text-muted-foreground text-sm">
        Calculate your gold Zakat based on the nisab threshold (
        {GOLD_NISAB_GRAMS}g of 24k gold - {formatPKR(nisabValuePKR)}).
      </p>
      <AppLastUpdated dateAndTime={priceUpdatedAt} />

      <div className="mt-6 flex gap-4">
        <div className="flex-1">
          <Input
            className="font-semibold text-lg placeholder:font-normal"
            min={0}
            onChange={(e) => setQuantity(sanitize(e.target.value))}
            placeholder="Enter quantity..."
            type="number"
            value={quantity}
          />
        </div>
        <div className="flex-1">
          <Combobox
            items={KARATS}
            onValueChange={(val) => setKarat(val as TKarat)}
            value={karat}
          >
            <ComboboxInput className="text-base" placeholder="Karat" />
            <ComboboxContent>
              <ComboboxList>
                {(item) => (
                  <ComboboxItem key={item} value={item}>
                    {item} - {(KARAT_PURITY[item as TKarat] * 100).toFixed(2)}%
                    pure
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>
        <div className="flex-1">
          <Combobox
            items={UNITS}
            onValueChange={(val) => setUnit(val as TUnit)}
            value={unit}
          >
            <ComboboxInput className="text-base" placeholder="Unit" />
            <ComboboxContent>
              <ComboboxList>
                {(item) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>
      </div>

      <div
        className={`mt-6 rounded-2xl border px-4 py-3 text-sm ${
          meetsNisab
            ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
            : "border-muted/30 bg-muted/20 text-muted-foreground"
        }`}
      >
        {meetsNisab ? (
          <span>
            ✓ Nisab met — your gold exceeds{" "}
            <strong>
              {GOLD_NISAB_GRAMS}g of 24k gold - {formatPKR(nisabValuePKR)}{" "}
            </strong>
            . Zakat is obligatory.
          </span>
        ) : (
          <span>
            ✗ Nisab not met — you need at least{" "}
            <strong>
              {GOLD_NISAB_GRAMS}g of 24k gold - {formatPKR(nisabValuePKR)}{" "}
            </strong>
            for Zakat to be obligatory.
          </span>
        )}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="rounded-3xl border border-muted/30 bg-muted/20 px-5 py-4 text-center">
          <p className="text-muted-foreground text-xs uppercase tracking-widest">
            Gold Value
          </p>
          <p className="mt-1 font-bold text-lg tracking-wide">
            {totalValuePKR > 0 ? formatPKR(totalValuePKR) : "—"}
          </p>
        </div>
        <div className="rounded-3xl border border-amber-300/30 bg-linear-to-br from-amber-500/10 via-background/40 to-transparent px-5 py-4 text-center shadow-inner">
          <p className="text-muted-foreground text-xs uppercase tracking-widest">
            Zakat Due (2.5%)
          </p>
          <p className="mt-1 font-bold text-2xl text-amber-200 tracking-wide">
            {meetsNisab && zakatDue > 0 ? formatPKR(zakatDue) : "—"}
          </p>
        </div>
      </div>
    </div>
  );
}
