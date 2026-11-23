export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="bg-brown flex min-h-screen items-center justify-center"
    >
      <span className="sr-only">Loading</span>
      <div
        aria-hidden="true"
        className="border-orange h-10 w-10 animate-spin rounded-full border-4 border-r-transparent"
      />
    </div>
  );
}
