import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Home">
      {/* Replace the SVG logo with simple text */}
      <span className="text-blacko-500 text-xl font-bold">Recommended Cafe In Bogor</span>
    </Link>
  );
}
