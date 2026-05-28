export const metadata = {
  title: "Contact - TodayPriceInPakistan.com",
  description:
    "Contact TodayPriceInPakistan.com for corrections, partnerships, and general inquiries.",
};

export default function ContactPage() {
  return (
    <div className="space-y-8 pt-8">
      <section className="relative overflow-hidden rounded-4xl border bg-card/70 p-7">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-emerald-200/10 via-transparent to-transparent" />
        <div className="relative space-y-3">
          <p className="text-[11px] text-muted-foreground uppercase tracking-wide">
            Contact
          </p>
          <h1 className="font-semibold text-4xl">Get in touch</h1>
          <p className="text-muted-foreground text-sm">
            If you notice a pricing issue, want to discuss partnerships, or have
            a general question, contact us using the details below.
          </p>
          <div className="flex flex-wrap gap-2 text-muted-foreground text-xs">
            <span className="rounded-full border border-border/70 px-3 py-1">
              Response within 24-48 hours
            </span>
            <span className="rounded-full border border-border/70 px-3 py-1">
              Friendly support
            </span>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-6">
        <div className="rounded-3xl border bg-card/70 p-6">
          <h2 className="font-medium text-lg">Email support</h2>
          <p className="mt-2 text-muted-foreground text-sm">
            support@todaypriceinpakistan.com
          </p>
          <p className="mt-4 text-muted-foreground text-sm">
            For urgent corrections, include:
          </p>
          <ul className="mt-3 space-y-1 text-muted-foreground text-sm">
            <li>• Page URL</li>
            <li>• Reported value</li>
            <li>• Suggested correction source</li>
          </ul>
        </div>

        <div className="rounded-3xl border bg-card/70 p-6">
          <h2 className="font-medium text-lg">Business & Ads</h2>
          <p className="mt-2 text-muted-foreground text-sm">
            partnerships@todaypriceinpakistan.com
          </p>
          <p className="mt-4 text-muted-foreground text-sm">
            We support in-content ad placements that match the site experience.
            We do not support popups, autoplay overlays, or disruptive formats.
          </p>
        </div>

        <div className="rounded-3xl border bg-card/70 p-6">
          <h2 className="font-medium text-lg">Send a tip</h2>
          <p className="mt-2 text-muted-foreground text-sm">
            Share trusted sources or corrections to help improve accuracy.
          </p>
          <p className="mt-4 text-muted-foreground text-xs">
            Please include screenshots or source links when possible.
          </p>
        </div>
      </section>
    </div>
  );
}
