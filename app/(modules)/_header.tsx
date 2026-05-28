import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/app/_shadcn/navigation-menu";
import { cn } from "@/lib/utils";

const navigationItems = [
  { key: "gold", label: "Gold", href: "/gold/rate-today" },
  { key: "silver", label: "Silver", href: "/silver-rate-today" },
  { key: "usd", label: "USD", href: "/usd-rate-today" },
  { key: "petrol", label: "Petrol", href: "/petrol-rate-today" },
  { key: "diesel", label: "Diesel", href: "/diesel-rate-today" },
];

export function AppHeader() {
  return (
    <div className="sticky top-0 z-100 rounded-b-2xl bg-background/85 pt-5 backdrop-blur supports-backdrop-filter:bg-background/60">
      <header className="relative mx-auto flex w-full items-center justify-between gap-4 rounded-3xl border bg-card/70 px-4 py-3 shadow-xs backdrop-blur supports-backdrop-filter:bg-card/60">
        <div className="-z-10 absolute inset-0 rounded-3xl bg-linear-to-r from-amber-500/10 via-transparent to-emerald-500/10" />
        <Link className="flex items-center gap-2" href="/">
          <span className="font-semibold leading-tight">
            TodayPriceInPakistan
            <span className="hidden text-muted-foreground text-sm sm:inline">
              .com
            </span>
          </span>
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="space-x-1">
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.key}>
                <NavigationMenuLink
                  asChild
                  className={cn(navigationMenuTriggerStyle(), "text-sm")}
                >
                  <Link href={item.href}>{item.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </header>
    </div>
  );
}
