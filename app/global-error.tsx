"use client";

import { useEffect } from "react";
import "./globals.css";

/**
 * Last-resort boundary used when the root layout itself fails. It replaces
 * the layout, so it must render its own <html> and <body>.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Unhandled application error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-brown flex min-h-screen items-center justify-center px-6 text-white">
        <div className="max-w-xl text-center">
          <h1 className="text-4xl font-black tracking-tight uppercase">
            Gully Fame is taking a break
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Something went wrong. Please reload the page.
          </p>
          {error.digest && (
            <p className="mt-2 text-sm text-white/50">Reference: {error.digest}</p>
          )}
          <button
            type="button"
            onClick={reset}
            className="bg-orange text-ink mt-8 cursor-pointer rounded-full px-6 py-3 text-base font-extrabold"
          >
            Reload
          </button>
        </div>
      </body>
    </html>
  );
}
