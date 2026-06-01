import { Pulse } from "@/app/_components/pulse";

export function AppLiveIndicator() {
  return (
    <div className="flex items-center gap-2">
      <Pulse />
      <p className="text-emerald-300 text-xs uppercase tracking-widest">Live</p>
    </div>
  );
}
