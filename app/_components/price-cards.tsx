import type { TPrice } from "@/app/_components/types";
import { Badge } from "@/app/_shadcn/badge";

export function PriceCards({ prices }: { prices: TPrice[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {prices.map((item) => (
        <div
          className="rounded-3xl border bg-background/25 p-4"
          key={item.label}
        >
          <Badge variant="outline">{item.label}</Badge>
          <p className="mt-2 font-semibold text-amber-200 text-lg">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}
