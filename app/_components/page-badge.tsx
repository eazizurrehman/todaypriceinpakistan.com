export function AppPageBadge({ value }: { value: string }) {
  return (
    <p className="text-muted-foreground text-xs uppercase tracking-widest">
      {value}
    </p>
  );
}
