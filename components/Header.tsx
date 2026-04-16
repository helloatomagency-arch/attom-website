import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between pt-8 pb-0 mb-24 px-6 md:px-12">
      <Link href="/">
        <Image
          src="/logo_v2.png"
          alt="ATTOM"
          width={160}
          height={64}
          className="h-12 md:h-16 w-auto"
          priority
        />
      </Link>

      <nav className="flex items-center gap-8 text-sm uppercase tracking-[0.15em]">
        <Link href="/about" className="hover:opacity-60 transition">
          About
        </Link>
        <Link href="/what-we-do" className="hover:opacity-60 transition">
          What We Do
        </Link>
        <Link href="/contact" className="hover:opacity-60 transition">
          Contact
        </Link>
      </nav>
    </header>
  );
}