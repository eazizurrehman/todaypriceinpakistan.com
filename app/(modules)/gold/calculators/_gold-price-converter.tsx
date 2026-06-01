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

export function GoldPriceCalculator({
  basePricePerTolaPer24k,
  priceUpdatedAt,
}: {
  basePricePerTolaPer24k: number;
  priceUpdatedAt: Date;
}) {
  const [quantity, setQuantity] = useState<string>("1");
  const [unit, setUnit] = useState<TUnit>("Tola");
  const [karat, setKarat] = useState<TKarat>("24K");

  const handleQuantityChange = (val: string) => {
    setQuantity(sanitize(val));
  };

  const pricePerGram24k = basePricePerTolaPer24k / TO_GRAMS.Tola;

  const totalPrice = (() => {
    const parsed = parseFloat(quantity);
    if (Number.isNaN(parsed)) return null;
    const grams = parsed * TO_GRAMS[unit];
    return grams * pricePerGram24k * KARAT_PURITY[karat];
  })();

  return (
    <div className="rounded-4xl border bg-card/70 p-6 shadow-lg">
      <p className="mt-2 text-muted-foreground text-sm">
        Calculate gold value by weight and karat in PKR.
      </p>
      <AppLastUpdated dateAndTime={priceUpdatedAt} />

      <div className="mt-6 flex gap-4">
        <div className="flex-1">
          <Input
            className="font-semibold text-lg placeholder:font-normal"
            min={0}
            onChange={(e) => handleQuantityChange(e.target.value)}
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

      <div className="mt-6 rounded-3xl border border-amber-300/30 bg-linear-to-br from-amber-500/10 via-background/40 to-transparent px-6 py-4 text-center shadow-inner">
        <p className="text-muted-foreground text-xs uppercase tracking-widest">
          Total Value
        </p>
        <p className="mt-1 font-bold text-2xl text-amber-200 tracking-wide">
          {totalPrice !== null ? formatPKR(totalPrice) : "—"}
        </p>
      </div>
    </div>
  );
}
