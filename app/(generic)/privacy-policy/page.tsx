import { AppLastUpdated } from "@/app/_components/last-updated";
import { AppPageBadge } from "@/app/_components/page-badge";

export const metadata = {
  title: "Privacy Policy - TodayPriceInPakistan.com",
  description:
    "Privacy Policy explaining how TodayPriceInPakistan.com handles analytics, ads, and user data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-8 pt-8">
      <section className="relative overflow-hidden rounded-4xl border bg-card/70 p-7">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-amber-200/10 via-transparent to-transparent" />
        <div className="relative space-y-3">
          <AppPageBadge value="Legal" />
          <h1 className="font-semibold text-4xl">Privacy Policy</h1>
          <AppLastUpdated dateAndTime={new Date("June 1, 2026")} />
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <div className="rounded-4xl border bg-card/70 p-6 text-muted-foreground text-sm">
            We collect minimal usage information to improve page quality, site
            performance, and reliability. We do not intentionally collect
            sensitive personal financial information through this website.
          </div>
          <div className="rounded-4xl border bg-card/70 p-6 text-muted-foreground text-sm">
            We may use privacy-conscious analytics and ad providers to
            understand page performance and deliver relevant in-content
            advertisements.
          </div>
          <div className="rounded-4xl border bg-card/70 p-6 text-muted-foreground text-sm">
            Third-party partners may use cookies or similar technologies. You
            can control cookies from your browser settings.
          </div>
          <div className="rounded-4xl border bg-card/70 p-6 text-muted-foreground text-sm">
            If you contact us by email, we use your message only to respond and
            support your request.
          </div>
        </div>

        <aside className="space-y-4 rounded-4xl border bg-card/70 p-6">
          <h2 className="font-medium text-base">Quick facts</h2>
          <ul className="space-y-3 text-muted-foreground text-sm">
            <li>• No account creation or logins.</li>
            <li>• No payment or card data stored.</li>
            <li>• Cookie control via your browser.</li>
          </ul>
          <div className="rounded-3xl border border-border/60 bg-background/40 p-4 text-muted-foreground text-xs">
            For privacy-related concerns, contact
            <span className="text-foreground">
              {" "}
              privacy@todaypriceinpakistan.com
            </span>
            .
          </div>
        </aside>
      </section>
    </div>
  );
}
