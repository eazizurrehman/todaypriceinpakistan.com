import { cn } from "@/lib/utils";

export function AdSlot({
  label = "Ad",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <section
      aria-label={label}
      className={cn(
        "rounded-3xl border bg-card/70 backdrop-blur supports-backdrop-filter:bg-card/60",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3 border-border/70 border-b px-4 py-3">
        <span className="text-[11px] text-muted-foreground uppercase tracking-wide">
          {label}
        </span>
      </div>
      <div className="grid place-items-center px-4 py-6 text-muted-foreground text-sm">
        Ad
      </div>
    </section>
  );
}
