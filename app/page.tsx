"use client";

import { useEffect, useState } from "react";
import { useApp } from "@/contexts/AppContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const { theme } = useApp();
  const isDark = theme === "dark";
  const [cookieChoice, setCookieChoice] = useState<string | null>(null);

  useEffect(() => {
    const savedChoice = localStorage.getItem("attom_cookie_consent");
    if (savedChoice) setCookieChoice(savedChoice);
  }, []);

  const handleCookieChoice = (choice: "accepted" | "rejected") => {
    localStorage.setItem("attom_cookie_consent", choice);
    setCookieChoice(choice);
  };

  return (
    <main className={`min-h-screen flex flex-col px-6 pb-0 md:px-12 ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>

      <Header />

      {/* ── HERO ── */}
      <section className="flex flex-1 items-center">
        <div className="max-w-5xl">
          <h1 className="text-5xl font-semibold leading-[1.05] md:text-[5.5rem] md:leading-[1.02]">
            Most brands are built
            <br />
            to be seen.{" "}
            <span className="italic font-light">Very few</span>
            <br />
            are built to last.
          </h1>

          <p className={`mt-10 max-w-lg text-base leading-relaxed md:text-lg ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            We work on what holds them together.
          </p>

          <a
            href="/what-we-do"
            className={`mt-10 inline-block px-5 py-3 text-sm font-medium transition hover:opacity-90 ${isDark ? "bg-white text-black" : "bg-black text-white"}`}
          >
            See how →
          </a>
        </div>
      </section>
      {/* ── FIM DO HERO ── */}

      <Footer />

      {/* COOKIES */}
      {!cookieChoice && (
        <div className={`fixed bottom-6 left-6 right-6 z-50 border p-5 shadow-lg md:left-12 md:right-12 ${isDark ? "bg-black border-gray-700" : "bg-white border-gray-200"}`}>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-2 text-sm font-medium">Cookies</p>
              <p className={`text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                We use cookies to improve your browsing experience and analyse
                website traffic. You can accept or reject non-essential cookies.
                Read our{" "}
                <a href="/cookie-policy" className="underline underline-offset-4">
                  Cookie Policy
                </a>{" "}
                for more information.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleCookieChoice("rejected")}
                className={`border px-5 py-3 text-sm font-medium transition ${isDark ? "border-gray-600 hover:border-white" : "border-gray-300 hover:border-black"}`}
              >
                Reject
              </button>
              <button
                onClick={() => handleCookieChoice("accepted")}
                className={`px-5 py-3 text-sm font-medium transition hover:opacity-90 ${isDark ? "bg-white text-black" : "bg-black text-white"}`}
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}