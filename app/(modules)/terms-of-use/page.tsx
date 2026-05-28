export const metadata = {
  title: "Terms of Use - TodayPriceInPakistan.com",
  description: "Terms of Use for accessing and using TodayPriceInPakistan.com.",
};

export default function TermsOfUsePage() {
  return (
    <div className="space-y-8 pt-8">
      <section className="relative overflow-hidden rounded-4xl border bg-card/70 p-7">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-slate-200/10 via-transparent to-transparent" />
        <div className="relative space-y-3">
          <p className="text-[11px] text-muted-foreground uppercase tracking-wide">
            Legal
          </p>
          <h1 className="font-semibold text-4xl">Terms of Use</h1>
          <p className="text-muted-foreground text-sm">
            Last updated: 28 May 2026
          </p>
          <div className="flex flex-wrap gap-2 text-muted-foreground text-xs">
            <span className="rounded-full border border-border/70 px-3 py-1">
              Informational content
            </span>
            <span className="rounded-full border border-border/70 px-3 py-1">
              Responsible use
            </span>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <div className="rounded-4xl border bg-card/70 p-6 text-muted-foreground text-sm">
            By using this website, you agree to use it lawfully and responsibly.
          </div>
          <div className="rounded-4xl border bg-card/70 p-6 text-muted-foreground text-sm">
            All rates and market values are provided for informational purposes
            and may change without notice. Always verify values from official or
            market sources before making a transaction.
          </div>
          <div className="rounded-4xl border bg-card/70 p-6 text-muted-foreground text-sm">
            You may reference our content with proper attribution and a link to
            the source page. Automated scraping and abusive access are
            prohibited.
          </div>
        </div>
        <aside className="rounded-4xl border bg-card/70 p-6">
          <h2 className="font-medium text-base">Changes</h2>
          <p className="mt-3 text-muted-foreground text-sm">
            We may update these terms at any time. Continued use of the site
            means you accept the latest version.
          </p>
        </aside>
      </section>
    </div>
  );
}
