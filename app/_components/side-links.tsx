import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export type SideLinksSection = {
  title: string;
  links: Array<{ label: string; href: string }>;
};

type SideLinksProps = {
  title?: string;
  sections: SideLinksSection[];
};

export function SideLinks({ title = "Browse", sections }: SideLinksProps) {
  return (
    <aside className="sticky top-28 left-0 h-full max-h-[84dvh] w-44 overflow-y-auto rounded-2xl border bg-card/70 py-6 backdrop-blur supports-backdrop-filter:bg-card/60">
      <h3 className="px-4 font-semibold text-lg">{title}</h3>
      <div className="mt-4 space-y-5">
        {sections.map((section) => (
          <div key={section.title}>
            <p className="px-4 text-muted-foreground text-xs uppercase tracking-wide">
              {section.title}
            </p>
            <ul className="mt-2">
              {section.links.map((link) => (
                <li className="group" key={link.href}>
                  <Link
                    className="flex h-8 w-full items-center justify-between border px-4 text-foreground text-sm transition-colors duration-300 ease-in-out hover:border-amber-300/50 hover:text-amber-200 group-hover:bg-card/70"
                    href={link.href}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight
                      className="hidden text-amber-200 group-hover:block"
                      width={16}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
