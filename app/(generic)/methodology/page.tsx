export const metadata = {
  title: "Methodology - TodayPriceInPakistan.com",
  description:
    "How TodayPriceInPakistan.com gathers, validates, and presents commodity price references.",
};

export default function MethodologyPage() {
  return (
    <div className="space-y-8 pt-8">
      <section className="relative overflow-hidden rounded-4xl border bg-card/70 p-7">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-slate-200/10 via-transparent to-transparent" />
        <div className="relative space-y-3">
          <p className="text-[11px] text-muted-foreground uppercase tracking-wide">
            Editorial
          </p>
          <h1 className="font-semibold text-4xl">Methodology</h1>
          <p className="text-muted-foreground text-sm">
            This page explains how we gather and present rates to keep updates
            clean, transparent, and useful.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border bg-card/70 p-6">
          <h2 className="font-medium text-lg">1. Source collection</h2>
          <p className="mt-2 text-muted-foreground text-sm">
            We collect rate references from credible public and market-facing
            sources relevant to Pakistan.
          </p>
        </div>
        <div className="rounded-3xl border bg-card/70 p-6">
          <h2 className="font-medium text-lg">2. Normalization</h2>
          <p className="mt-2 text-muted-foreground text-sm">
            Values are normalized into consistent units (tola, gram, kg) for
            easier comparison.
          </p>
        </div>
        <div className="rounded-3xl border bg-card/70 p-6">
          <h2 className="font-medium text-lg">3. Publishing</h2>
          <p className="mt-2 text-muted-foreground text-sm">
            Final values are shown with clear labels and update markers in a
            mobile-first layout.
          </p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-4xl border bg-card/70 p-7">
          <h2 className="font-semibold text-2xl">Update policy</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground text-sm">
            <li>• Rates are refreshed on a frequent schedule.</li>
            <li>• Major discrepancies are corrected as quickly as possible.</li>
            <li>• Users can report potential errors via the contact page.</li>
          </ul>
        </div>
        <div className="rounded-4xl border bg-card/70 p-7">
          <h2 className="font-semibold text-2xl">Accuracy focus</h2>
          <p className="mt-4 text-muted-foreground text-sm">
            We cross-check market references and standardize unit conversions
            before publishing each update.
          </p>
        </div>
      </section>
    </div>
  );
}
