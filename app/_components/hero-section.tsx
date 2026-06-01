import Image from "next/image";
import { AppLastUpdated } from "@/app/_components/last-updated";
import { AppLiveIndicator } from "@/app/_components/live-indicator";
import { AppPageBadge } from "@/app/_components/page-badge";
import { cn } from "@/lib/utils";

export function HeroSection({
  title,
  description,
  updatedAt,
  image,
  slot,
}: {
  title: string;
  description: string;
  updatedAt: Date;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
  };
  slot: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden rounded-4xl border bg-card/70 p-6 backdrop-blur supports-backdrop-filter:bg-card/60">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-amber-500/12 via-transparent to-emerald-500/8" />
      <div className="relative space-y-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="space-y-2">
            <AppPageBadge value="Commodities" />
            <div className="flex items-center gap-2">
              <h1 className="font-semibold text-4xl leading-tight md:text-5xl">
                {title}
              </h1>
              <AppLiveIndicator />
            </div>
            <p className="text-muted-foreground text-sm">{description}</p>
            <AppLastUpdated dateAndTime={updatedAt} />
          </div>
          <div>
            <Image
              alt={image.alt}
              className={cn("w-40 rounded-2xl object-cover", image.className)}
              height={image.height}
              src={image.src}
              width={image.width}
            />
          </div>
        </div>
        {slot}
      </div>
    </section>
  );
}
