"use client";

import Link from "next/link";
import Image from "next/image";
import { useApp } from "@/contexts/AppContext";

export default function Header() {
  const { lang, setLang, theme, setTheme } = useApp();
  const d = theme === "dark";

  return (
    <header className={`flex items-center justify-between pt-8 pb-0 mb-24 px-6 md:px-12 ${d ? "bg-black" : "bg-white"}`}>
      {/* LOGO */}
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

      {/* NAV + TOGGLES */}
      <div className="flex items-center gap-8">
        <nav className={`flex items-center gap-8 text-sm uppercase tracking-[0.15em] ${d ? "text-white" : "text-black"}`}>
          <Link href="/about" className="hover:opacity-60 transition">About</Link>
          <Link href="/what-we-do" className="hover:opacity-60 transition">What We Do</Link>
          <Link href="/contact" className="hover:opacity-60 transition">Contact</Link>
        </nav>

        {/* TOGGLES */}
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-1 text-[11px] tracking-[0.15em] uppercase">
            <button onClick={() => setLang("en")} className={`transition ${lang === "en" ? (d ? "text-white font-medium" : "text-black font-medium") : "text-gray-400"}`}>EN</button>
            <span className="text-gray-400">|</span>
            <button onClick={() => setLang("pt")} className={`transition ${lang === "pt" ? (d ? "text-white font-medium" : "text-black font-medium") : "text-gray-400"}`}>PT</button>
          </div>
          <div className="flex items-center gap-1 text-[11px] tracking-[0.15em] uppercase">
            <button onClick={() => setTheme("light")} className={`transition ${theme === "light" ? (d ? "text-white font-medium" : "text-black font-medium") : "text-gray-400"}`}>Light</button>
            <span className="text-gray-400">|</span>
            <button onClick={() => setTheme("dark")} className={`transition ${theme === "dark" ? (d ? "text-white font-medium" : "text-black font-medium") : "text-gray-400"}`}>Dark</button>
          </div>
        </div>
      </div>
    </header>
  );
}