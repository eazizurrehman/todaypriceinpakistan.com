import Link from "next/link";

const commodityLinks = [
  { label: "Gold ", href: "/gold-rate-today" },
  { label: "Silver ", href: "/silver-rate-today" },
  { label: "USD ", href: "/usd-rate-today" },
  { label: "Petrol ", href: "/petrol-rate-today" },
  { label: "Diesel ", href: "/diesel-rate-today" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Methodology", href: "/methodology" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export function AppFooter() {
  return (
    <footer className="mt-12 space-y-8 rounded-4xl border bg-card/70 p-6 backdrop-blur supports-backdrop-filter:bg-card/60 md:p-8">
      <div className="h-px w-full bg-linear-to-r from-amber-200/30 via-white/10 to-transparent" />
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1.9fr]">
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="font-semibold text-foreground text-lg">
              TodayPriceInPakistan
            </p>
            <p className="text-muted-foreground text-sm">
              Clean, fast, and frequently updated commodity prices for Pakistan.
            </p>
            <p className="text-muted-foreground text-xs">
              Ads are displayed as in-content placements only. No popups.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              className="rounded-full border border-border/60 bg-background/40 px-4 py-2 text-foreground text-xs transition hover:bg-background/70"
              href="/contact"
            >
              Contact support
            </Link>
            <Link
              className="rounded-full border border-border/60 px-4 py-2 text-muted-foreground text-xs transition hover:text-foreground"
              href="/methodology"
            >
              Methodology
            </Link>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <h3 className="font-medium text-foreground text-sm">Commodities</h3>
            <ul className="space-y-2 text-sm">
              {commodityLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-medium text-foreground text-sm">Company</h3>
            <ul className="space-y-2 text-sm">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-medium text-foreground text-sm">Legal</h3>
            <ul className="space-y-2 text-sm">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-border/60 bg-background/40 p-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-medium text-foreground text-sm">
              Get daily price alerts
            </p>
            <p className="text-muted-foreground text-xs">
              Email us to subscribe to update notifications.
            </p>
          </div>
          <a
            className="rounded-full border border-border/60 bg-background/60 px-4 py-2 text-foreground text-xs transition hover:bg-background"
            href="mailto:updates@todaypriceinpakistan.com"
          >
            updates@todaypriceinpakistan.com
          </a>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-border/70 border-t pt-4 text-muted-foreground text-xs">
        <p>© 2026 TodayPriceInPakistan.com</p>
        <p>
          For informational purposes only. Verify rates before transactions.
        </p>
      </div>
    </footer>
  );
}
