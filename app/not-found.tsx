import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader active="" />
      <main id="main-content" className="grow overflow-x-clip">
        <div className="bg-brown border-ink border-b-[3px]">
          <div className="mx-auto flex max-w-[1240px] flex-col items-start gap-5 px-6 pt-36 pb-24">
            <span className="bg-lilac text-ink font-display -rotate-3 self-start rounded-full px-3.5 py-2 text-sm font-extrabold">
              404
            </span>
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.98] font-black tracking-[-0.03em] uppercase">
              This stage is empty
            </h1>
            <p className="max-w-xl text-lg text-white/80">
              The page you are looking for does not exist or has moved. Head
              back home to find the battles.
            </p>
            <Link
              href="/"
              className="bg-orange text-ink font-display rounded-full px-6 py-3 text-base font-extrabold"
            >
              Back to home
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
