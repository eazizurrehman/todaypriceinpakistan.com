import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
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
        <main>{children}</main>
      </body>
    </html>
  );
}
