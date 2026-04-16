"use client";

import Link from "next/link";
import Image from "next/image";
import { useApp } from "@/contexts/AppContext";

export default function Header() {
  const { lang, setLang, theme, setTheme } = useApp();
  const isDark = theme === "dark";

  return (
    <header
      className={`flex items-center justify-between pt-8 pb-0 mb-24 px-6 md:px-12 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* LOGO */}
      <Link href="/">
        <Image
          src={isDark ? "/logo-dark.png" : "/logo_v2.png"}
          alt="ATTOM"
          width={160}
          height={64}
          className="h-12 md:h-16 w-auto"
          priority
        />
      </Link>

      {/* NAV + TOGGLES */}
      <div className="flex items-center gap-8">
        <nav className="flex items-center gap-8 text-sm uppercase tracking-[0.15em]">
          <Link
            href="/about"
            className={`transition hover:opacity-60 ${isDark ? "text-white" : "text-black"}`}
          >
            About
          </Link>
          <Link
            href="/what-we-do"
            className={`transition hover:opacity-60 ${isDark ? "text-white" : "text-black"}`}
          >
            What We Do
          </Link>
          <Link
            href="/contact"
            className={`transition hover:opacity-60 ${isDark ? "text-white" : "text-black"}`}
          >
            Contact
          </Link>
        </nav>

        {/* TOGGLES */}
        <div className="flex flex-col items-end gap-1">
          {/* LANG */}
          <div className="flex items-center gap-1 text-[11px] tracking-[0.15em] uppercase">
            <button
              onClick={() => setLang("en")}
              className={`transition ${
                lang === "en"
                  ? isDark ? "text-white font-medium" : "text-black font-medium"
                  : "text-gray-400"
              }`}
            >
              EN
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => setLang("pt")}
              className={`transition ${
                lang === "pt"
                  ? isDark ? "text-white font-medium" : "text-black font-medium"
                  : "text-gray-400"
              }`}
            >
              PT
            </button>
          </div>

          {/* THEME */}
          <div className="flex items-center gap-1 text-[11px] tracking-[0.15em] uppercase">
            <button
              onClick={() => setTheme("light")}
              className={`transition ${
                theme === "light"
                  ? isDark ? "text-white font-medium" : "text-black font-medium"
                  : "text-gray-400"
              }`}
            >
              Light
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => setTheme("dark")}
              className={`transition ${
                theme === "dark"
                  ? isDark ? "text-white font-medium" : "text-black font-medium"
                  : "text-gray-400"
              }`}
            >
              Dark
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}