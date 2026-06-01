import type { TSection } from "@/types";

export const sidebarSections: TSection[] = [
  {
    title: "Karats",
    links: [
      { label: "24K", href: "/gold/24k/rate-today" },
      { label: "22K", href: "/gold/22k/rate-today" },
      { label: "21K", href: "/gold/21k/rate-today" },
      { label: "18K", href: "/gold/18k/rate-today" },
      { label: "14K", href: "/gold/14k/rate-today" },
      { label: "12K", href: "/gold/12k/rate-today" },
      { label: "10K", href: "/gold/10k/rate-today" },
    ],
  },
  {
    title: "Calculators",
    links: [
      { label: "Price Calculator", href: "/gold/calculators/price-calculator" },
      { label: "Unit Converter", href: "/gold/calculators/unit-converter" },
      { label: "Zakat Calculator", href: "/gold/calculators/zakat-calculator" },
    ],
  },
  {
    title: "General",
    links: [
      { label: "Comparison", href: "/gold/comparison" },
      { label: "Guide", href: "/gold/guide" },
      { label: "Disclaimer", href: "/gold/disclaimer" },
    ],
  },
];
