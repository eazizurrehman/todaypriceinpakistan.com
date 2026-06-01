import { Info } from "lucide-react";
import { formatDateAndTime } from "@/lib/date";

export function AppLastUpdated({ dateAndTime }: { dateAndTime: Date }) {
  return (
    <p className="mt-2 flex items-center gap-1.5 text-muted-foreground/70 text-xs">
      <Info className="size-3.5 text-muted-foreground/50" />
      Last updated: {formatDateAndTime(dateAndTime)}
    </p>
  );
}
