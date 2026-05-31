import { cn } from "@/lib/utils";
import type { TPrice } from "@/types";

export function PriceCards({
  prices,
  className,
}: {
  prices: TPrice[];
  className?: string;
}) {
  return (
    <div className={cn("grid gap-4", className)}>
      {prices.map((item) => (
        <div
          className="flex w-full flex-col rounded-3xl border bg-background/25 p-4"
          key={item.label}
        >
          <h4 className="shrink-0 text-center text-xs uppercase tracking-widest">
            {item.label}
          </h4>
          <p className="mt-2 shrink-0 text-center font-semibold text-amber-200 text-lg">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}
