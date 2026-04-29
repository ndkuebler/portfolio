import Link from "next/link";

export function BackButton() {
  return (
    <Link
      href="/#selected-works"
      className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-200 mb-12"
    >
      ← Back to work
    </Link>
  );
}
