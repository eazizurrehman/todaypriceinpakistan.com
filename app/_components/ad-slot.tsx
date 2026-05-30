import { cn } from "@/lib/utils";

type AdSlotVariant = "inline" | "sidebar" | "leaderboard";

export function AdSlot({
  label = "Ad",
  slot,
  variant = "inline",
  className,
}: {
  label?: string;
  slot: string;
  variant?: AdSlotVariant;
  className?: string;
}) {
  const sizeClasses =
    variant === "sidebar"
      ? "min-h-64"
      : variant === "leaderboard"
        ? "min-h-24"
        : "min-h-28";

  return (
    <section
      aria-label={label}
      className={cn(
        "rounded-3xl border bg-card/70 backdrop-blur supports-backdrop-filter:bg-card/60",
        sizeClasses,
        className,
      )}
      data-ad-slot={slot}
    >
      <div className="flex items-center justify-between gap-3 border-border/70 border-b px-4 py-3">
        <span className="text-[11px] text-muted-foreground uppercase tracking-wide">
          {label}
        </span>
        <span className="rounded-full border border-border/70 bg-background/40 px-2 py-0.5 text-[11px] text-muted-foreground">
          {slot}
        </span>
      </div>
      <div className="grid place-items-center px-4 py-6 text-muted-foreground text-sm">
        Ad
      </div>
    </section>
  );
}
