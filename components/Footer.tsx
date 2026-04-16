"use client";

import Link from "next/link";
import { useApp } from "@/contexts/AppContext";

export default function Footer() {
  const { theme } = useApp();
  const isDark = theme === "dark";

  return (
    <footer
      className={`mt-auto pt-20 pb-12 px-6 md:px-12 flex flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between ${
        isDark ? "bg-black text-gray-500" : "bg-white text-gray-500"
      }`}
    >
      <p>© 2026 ATTOM Agency. All rights reserved.</p>

      <div className="flex flex-wrap items-center gap-6">
        <Link
          href="/privacy-policy"
          className={`underline-offset-4 hover:underline transition ${
            isDark ? "hover:text-white" : "hover:text-black"
          }`}
        >
          Privacy Policy
        </Link>
        <Link
          href="/cookie-policy"
          className={`underline-offset-4 hover:underline transition ${
            isDark ? "hover:text-white" : "hover:text-black"
          }`}
        >
          Cookie Policy
        </Link>
        <Link
          href="/terms-and-conditions"
          className={`underline-offset-4 hover:underline transition ${
            isDark ? "hover:text-white" : "hover:text-black"
          }`}
        >
          Terms & Conditions
        </Link>
      </div>
    </footer>
  );
}