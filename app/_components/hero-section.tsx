import Image from "next/image";
import { PriceCards } from "@/app/_components/price-cards";
import { Pulse } from "@/app/_components/pulse";
import type { TPrice } from "@/app/_components/types";
import { formatDateAndTime } from "@/lib/date";
import { cn } from "@/lib/utils";

export function HeroSection({
  title,
  description,
  updatedAt,
  image,
  prices,
  pricesClassName,
}: {
  title: string;
  description: string;
  updatedAt: Date;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
  };
  prices: TPrice[];
  pricesClassName?: string;
}) {
  return (
    <section className="relative overflow-hidden rounded-4xl border bg-card/70 p-6 backdrop-blur supports-backdrop-filter:bg-card/60">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-amber-500/12 via-transparent to-emerald-500/8" />
      <div className="relative space-y-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Pulse />
              <p className="text-[12px] text-emerald-300 uppercase tracking-widest">
                Live
              </p>
            </div>
            <h1 className="font-semibold text-4xl leading-tight md:text-5xl">
              {title}
            </h1>
            <p className="text-muted-foreground text-sm">{description}</p>
            <p className="text-muted-foreground text-xs">
              Last updated: {formatDateAndTime(updatedAt)}
            </p>
          </div>
          <div>
            <Image
              alt={image.alt}
              className={cn("w-40 rounded-2xl object-cover", image.className)}
              height={image.height}
              src={image.url}
              width={image.width}
            />
          </div>
        </div>

        <PriceCards className={pricesClassName} prices={prices} />
      </div>
    </section>
  );
}
