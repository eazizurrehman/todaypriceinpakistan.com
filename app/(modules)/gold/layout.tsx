import { SideLinks } from "@/app/_components/side-links";
import { sidebarSections } from "@/app/(modules)/gold/side-sections";

export default function GoldLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex gap-6">
      <div className="relative">
        <div className="sticky top-28 left-0 h-[84dvh]">
          <SideLinks sections={sidebarSections} title="Gold rates" />
        </div>
      </div>
      {children}
    </div>
  );
}
