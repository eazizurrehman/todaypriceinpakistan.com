export function Pulse() {
  return (
    <span className="relative flex size-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75"></span>
      <span className="relative inline-flex size-2 rounded-full bg-emerald-300"></span>
    </span>
  );
}
