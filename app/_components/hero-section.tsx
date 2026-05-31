import Image from "next/image";
import { Pulse } from "@/app/_components/pulse";
import { formatDateAndTime } from "@/lib/date";
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
