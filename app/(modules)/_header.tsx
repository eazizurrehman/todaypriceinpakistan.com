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
  { key: "gold", label: "Gold", href: "/gold-rate-today" },
  { key: "silver", label: "Silver", href: "/silver-rate-today" },
  { key: "usd", label: "USD", href: "/usd-rate-today" },
  { key: "petrol", label: "Petrol", href: "/petrol-rate-today" },
  { key: "diesel", label: "Diesel", href: "/diesel-rate-today" },
];

export function AppHeader() {
  return (
    <div className="sticky top-0 z-100 rounded-b-xl bg-background pt-5 leading-0">
      <header className="container mx-auto flex w-full items-center justify-between rounded-xl border bg-[#151a22] px-2 py-2">
        <h1 className="font-semibold text-xl">Today Price in Pakistan</h1>
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
