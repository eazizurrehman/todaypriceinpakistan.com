import Image from "next/image";
import Link from "next/link";

const commodityLinks = [
  { label: "Gold ", href: "/gold/rate-today" },
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
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1.9fr]">
        <div className="flex flex-col justify-between gap-4">
          <Link className="flex items-center" href="/">
            <Image
              alt="TodayPriceInPakistan.com"
              className="h-6 w-auto"
              height={60}
              src="/logo.svg"
              width={610}
            />
          </Link>
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">
              Developed by{" "}
              <a href="https://azizurrehman.com" rel="noopener" target="_blank">
                azizurrehman.com
              </a>{" "}
            </p>
            <p className="text-muted-foreground text-sm">
              © 2026 TodayPriceInPakistan.com
            </p>
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
    </footer>
  );
}
