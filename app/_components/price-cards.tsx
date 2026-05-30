import type { TPrice } from "@/app/_components/types";
import { cn } from "@/lib/utils";

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
          <h4 className="shrink-0 text-xs uppercase tracking-widest">
            {item.label}
          </h4>
          <p className="mt-2 shrink-0 font-semibold text-amber-200 text-lg">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}
