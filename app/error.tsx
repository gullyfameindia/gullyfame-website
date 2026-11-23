"use client";

import Link from "next/link";
import { useEffect } from "react";

/**
 * Route-level error boundary. The raw error is never shown to visitors; only
 * the opaque digest is, so it can be matched to server logs.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Unhandled page error:", error);
  }, [error]);

  return (
    <main
      id="main-content"
      className="bg-brown flex min-h-screen grow items-center justify-center px-6 py-24"
    >
      <div className="max-w-xl text-center">
        <h1 className="font-display text-4xl font-black tracking-tight uppercase">
          Something went wrong
        </h1>
        <p className="mt-4 text-lg text-white/80">
          We hit an unexpected problem loading this page. Please try again.
        </p>
        {error.digest && (
          <p className="mt-2 text-sm text-white/50">Reference: {error.digest}</p>
        )}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="bg-orange text-ink font-display cursor-pointer rounded-full px-6 py-3 text-base font-extrabold"
          >
            Try again
          </button>
          <Link
            href="/"
            className="font-display rounded-full border-2 border-white/40 px-6 py-3 text-base font-extrabold"
          >
            Home
          </Link>
        </div>
      </div>
    </main>
  );
}
