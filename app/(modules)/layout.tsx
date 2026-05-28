import { AdSlot } from "@/app/(modules)/_components/ad-slot";
import { AppFooter } from "@/app/(modules)/_footer";
import { AppHeader } from "@/app/(modules)/_header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="pb-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 lg:grid-cols-[14rem_minmax(0,1fr)_14rem]">
        <aside className="hidden lg:block">
          <div className="sticky top-6">
            <AdSlot slot="sidebar-left" variant="sidebar" />
          </div>
        </aside>

        <div className="min-w-0">
          <AppHeader />
          <div className="container mx-auto">
            {children}
            <AppFooter />
          </div>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-6">
            <AdSlot slot="sidebar-right" variant="sidebar" />
          </div>
        </aside>
      </div>
    </div>
  );
}
