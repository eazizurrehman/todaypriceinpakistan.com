import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AppFooter } from "@/app/_components/_footer";
import { AppHeader } from "@/app/_components/_header";
import { AdSlot } from "@/app/_components/ad-slot";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://todaypriceinpakistan.com"),
  title: {
    default: "Today Price in Pakistan",
    template: "%s | Today Price in Pakistan",
  },
  description:
    "Live gold, silver, dollar and petrol prices in Pakistan updated daily.",
  openGraph: {
    siteName: "Today Price in Pakistan",
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Today Price in Pakistan",
    description:
      "Live gold, silver, dollar and petrol prices in Pakistan updated daily.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={cn(
        "dark",
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        jetbrainsMono.variable,
        "font-sans",
        inter.variable,
      )}
      lang="en"
    >
      <body className="min-h-dvh">
        <main className="container mx-auto grid grid-cols-1 gap-8 px-4 lg:grid-cols-[14rem_minmax(0,1fr)_14rem]">
          <aside className="hidden lg:block">
            <div className="sticky top-6">
              <AdSlot slot="sidebar-left" variant="sidebar" />
            </div>
          </aside>
          <div>
            <AppHeader />
            {children}
            <div className="space-y-10 pb-10">
              <AppFooter />
              <AdSlot slot="footer" variant="inline" />
            </div>
          </div>
          <aside className="hidden lg:block">
            <div className="sticky top-6">
              <AdSlot slot="sidebar-right" variant="sidebar" />
            </div>
          </aside>
        </main>
      </body>
    </html>
  );
}
