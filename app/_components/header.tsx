"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  {
    key: "silver",
    label: "Silver",
    href: "/silver-rate-today",
  },
  { key: "usd", label: "USD", href: "/usd-rate-today" },
  {
    key: "petrol",
    label: "Petrol",
    href: "/petrol-rate-today",
  },
  {
    key: "diesel",
    label: "Diesel",
    href: "/diesel-rate-today",
  },
];

const isActiveLink = (key: string, pathname: string): boolean => {
  return pathname.startsWith(`/${key}`);
};

export function AppHeader() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-100 rounded-b-2xl bg-background/85 pt-5 backdrop-blur supports-backdrop-filter:bg-background/60">
      <header className="relative mx-auto flex w-full items-center justify-between gap-4 rounded-3xl border bg-card/70 px-4 py-3 shadow-xs backdrop-blur supports-backdrop-filter:bg-card/60">
        <div className="-z-10 absolute inset-0 flex items-center rounded-3xl bg-linear-to-r from-amber-500/10 via-transparent to-emerald-500/10" />
        <Link className="flex items-center" href="/">
          <Image
            alt="TodayPriceInPakistan.com"
            className="h-6 w-auto"
            height={60}
            src="/logo.svg"
            width={610}
          />
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="space-x-1">
            {navigationItems.map((item) => {
              const isActive = isActiveLink(item.key, pathname);

              return (
                <NavigationMenuItem key={item.key}>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      isActive && "bg-muted",
                      "text-sm",
                    )}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </header>
    </div>
  );
}
