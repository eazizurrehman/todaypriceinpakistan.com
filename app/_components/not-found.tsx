import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/_shadcn/button";
import { Skeleton } from "@/app/_shadcn/skeleton";

function NotFoundCard() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="rounded-[28px] border border-border/50 bg-background/80 p-6 shadow-lg">
        <div className="flex items-center justify-between text-muted-foreground text-xs">
          <Link className="flex items-center" href="/">
            <Image
              alt="TodayPriceInPakistan.com"
              className="h-4 w-auto"
              height={60}
              src="/logo.svg"
              width={610}
            />
          </Link>
          <span className="font-bold">404</span>
        </div>
        <div className="mt-6 space-y-4">
          <div className="space-y-2">
            <Skeleton className="h-2 w-28 rounded-full bg-muted" />
            <Skeleton className="h-2 w-40 rounded-full bg-muted" />
          </div>
          <div className="rounded-2xl border border-border/60 bg-card/70 p-4">
            <p className="font-semibold text-foreground text-sm">
              Page not found
            </p>
            <p className="mt-2 text-muted-foreground text-xs">
              We couldn&apos;t fetch the requested page.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex gap-2">
              <Skeleton className="h-2 w-20 rounded-full bg-muted" />
              <Skeleton className="h-2 w-10 rounded-full bg-muted" />
            </div>
            <div className="flex gap-2">
              <Skeleton className="h-2 w-28 rounded-full bg-muted" />
              <Skeleton className="h-2 w-10 rounded-full bg-muted" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function NotFound() {
  return (
    <section className="relative mt-10 overflow-hidden rounded-3xl border border-border/60 bg-card/60 px-6 py-16 shadow-[0_0_90px_-45px_rgba(59,130,246,0.35)] backdrop-blur sm:px-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="-top-32 -translate-x-1/2 absolute left-1/2 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="-bottom-20 absolute right-6 h-52 w-52 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute bottom-10 left-6 h-40 w-40 rounded-full bg-sky-400/10 blur-2xl" />
      </div>

      <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-6">
          <div className="space-y-3">
            <h1 className="font-semibold text-3xl text-foreground leading-tight sm:text-4xl">
              Page Not Found
            </h1>
            <p className="max-w-md text-muted-foreground text-sm sm:text-base">
              The page you requested doesn&apos;t exist or has been moved. Use
              these links to get back to today&apos;s latest prices.
            </p>
          </div>
          <Button asChild>
            <Link href="/">Go to home</Link>
          </Button>
        </div>

        <NotFoundCard />
      </div>
    </section>
  );
}
