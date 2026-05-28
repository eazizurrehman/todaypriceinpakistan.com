export const metadata = {
  title: "Disclaimer - TodayPriceInPakistan.com",
  description:
    "Important disclaimer regarding market data, pricing references, and liability.",
};

export default function DisclaimerPage() {
  return (
    <div className="space-y-8 pt-8">
      <section className="relative overflow-hidden rounded-4xl border bg-card/70 p-7">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-rose-200/10 via-transparent to-transparent" />
        <div className="relative space-y-3">
          <p className="text-[11px] text-muted-foreground uppercase tracking-wide">
            Legal
          </p>
          <h1 className="font-semibold text-4xl">Disclaimer</h1>
          <div className="flex flex-wrap gap-2 text-muted-foreground text-xs">
            <span className="rounded-full border border-border/70 px-3 py-1">
              Informational content only
            </span>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <div className="rounded-4xl border bg-card/70 p-6 text-muted-foreground text-sm">
            TodayPriceInPakistan.com publishes market information for awareness
            and convenience. It is not investment, financial, or trading advice.
          </div>
          <div className="rounded-4xl border bg-card/70 p-6 text-muted-foreground text-sm">
            While we strive for accuracy, rates can vary by city, source, and
            timing. We do not guarantee completeness or real-time precision.
          </div>
          <div className="rounded-4xl border bg-card/70 p-6 text-muted-foreground text-sm">
            Users are responsible for independently verifying rates with
            official dealers, exchanges, banks, or regulatory sources before any
            decision.
          </div>
        </div>
        <aside className="rounded-4xl border bg-card/70 p-6 text-muted-foreground text-sm">
          We are not liable for losses arising from reliance on displayed
          values.
        </aside>
      </section>
    </div>
  );
}
