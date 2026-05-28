import { AppHeader } from "@/app/(modules)/_header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center pb-5">
      <div className="relative flex gap-10">
        <aside className="w-40">
          <div className="sticky top-5 left-0 h-[95.7dvh] w-full rounded-xl border bg-[#151a22] p-5">
            Ad
          </div>
        </aside>
        <div className="container mx-auto">
          <AppHeader />
          {children}
        </div>
        <aside className="w-40">
          <div className="sticky top-5 left-0 h-[95.7dvh] w-full rounded-xl border bg-[#151a22] p-5">
            Ad
          </div>
        </aside>
      </div>
    </div>
  );
}
