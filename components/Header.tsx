"use client";

import Image from "next/image";
import Link from "next/link";
import { useApp } from "@/contexts/AppContext";

export default function Header() {
  const { theme } = useApp();
  const d = theme === "dark";

  return (
    <header className={`flex items-center pt-8 pb-0 mb-24 px-6 md:px-12 ${d ? "bg-black" : "bg-white"}`}>
      <Link href="/">
        <Image
          src="/logo_v2.png"
          alt="ATTOM"
          width={160}
          height={64}
          className="h-12 md:h-16 w-auto"
          style={d ? { filter: "invert(1)" } : {}}
          priority
        />
      </Link>
    </header>
  );
}