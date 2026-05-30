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
    <aside className="h-full w-40 rounded-2xl border bg-card/70 p-6 backdrop-blur supports-backdrop-filter:bg-card/60">
      <h3 className="font-semibold text-lg">{title}</h3>
      <div className="mt-4 space-y-5">
        {sections.map((section) => (
          <div key={section.title}>
            <p className="text-muted-foreground text-xs uppercase tracking-wide">
              {section.title}
            </p>
            <ul className="mt-2 space-y-3">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    className="flex items-center justify-between border text-foreground text-sm transition hover:border-amber-300/50 hover:text-amber-200"
                    href={link.href}
                  >
                    <span>{link.label}</span>
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
