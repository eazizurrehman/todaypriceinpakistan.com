"use client";

import { ArrowUpDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/app/_shadcn/button";
import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/app/_shadcn/combobox";
import { Input } from "@/app/_shadcn/input";
import {
  convertUnits,
  formatNumber,
  sanitize,
  type TUnit,
  UNITS,
} from "@/lib/calculators";

export function GoldUnitCalculator() {
  const [topValue, setTopValue] = useState<string>("1");
  const [topUnit, setTopUnit] = useState<TUnit>("Tola");
  const [bottomValue, setBottomValue] = useState<string>(
    formatNumber(convertUnits(1, "Tola", "Gram")),
  );
  const [bottomUnit, setBottomUnit] = useState<TUnit>("Gram");

  const handleTopValueChange = (val: string) => {
    const clean = sanitize(val);
    setTopValue(clean);
    const parsed = parseFloat(clean);
    if (!Number.isNaN(parsed))
      setBottomValue(formatNumber(convertUnits(parsed, topUnit, bottomUnit)));
    else setBottomValue("");
  };

  const handleTopUnitChange = (unit: TUnit) => {
    setTopUnit(unit);
    const parsed = parseFloat(topValue);
    if (!Number.isNaN(parsed))
      setBottomValue(formatNumber(convertUnits(parsed, unit, bottomUnit)));
  };

  const handleBottomValueChange = (val: string) => {
    const clean = sanitize(val);
    setBottomValue(clean);
    const parsed = parseFloat(clean);
    if (!Number.isNaN(parsed))
      setTopValue(formatNumber(convertUnits(parsed, bottomUnit, topUnit)));
    else setTopValue("");
  };

  const handleBottomUnitChange = (unit: TUnit) => {
    setBottomUnit(unit);
    const parsed = parseFloat(topValue);
    if (!Number.isNaN(parsed))
      setBottomValue(formatNumber(convertUnits(parsed, topUnit, unit)));
  };

  const handleSwap = () => {
    setTopValue(bottomValue);
    setBottomValue(topValue);
    setTopUnit(bottomUnit);
    setBottomUnit(topUnit);
  };

  return (
    <div className="space-y-10">
      <div className="rounded-4xl border bg-card/70 p-6 shadow-lg">
        <h3 className="font-semibold text-xl md:text-2xl">Unit Converter</h3>
        <p className="mt-2 text-muted-foreground text-sm">
          Convert between Tola, Gram, Ounce, and Kilogram in PKR.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <Input
                className="font-semibold text-lg placeholder:font-normal"
                min={0}
                onChange={(e) => handleTopValueChange(e.target.value)}
                placeholder="Enter quantity..."
                type="number"
                value={topValue}
              />
            </div>
            <div className="flex-1">
              <Combobox
                items={UNITS}
                onValueChange={(val) => handleTopUnitChange(val as TUnit)}
                value={topUnit}
              >
                <ComboboxInput className="text-base" placeholder="Select" />
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
          <div className="flex justify-center">
            <Button
              className="px-6 shadow-sm"
              onClick={handleSwap}
              type="button"
              variant="secondary"
            >
              <ArrowUpDown className="w-5 text-amber-400" />
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <Input
                className="font-semibold text-lg placeholder:font-normal"
                min={0}
                onChange={(e) => handleBottomValueChange(e.target.value)}
                placeholder="Enter quantity..."
                type="number"
                value={bottomValue}
              />
            </div>
            <div className="flex-1">
              <Combobox
                items={UNITS}
                onValueChange={(val) => handleBottomUnitChange(val as TUnit)}
                value={bottomUnit}
              >
                <ComboboxInput className="text-base" placeholder="Select" />
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
        </div>
      </div>
    </div>
  );
}
