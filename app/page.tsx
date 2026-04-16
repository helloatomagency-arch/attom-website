"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [cookieChoice, setCookieChoice] = useState<string | null>(null);

  useEffect(() => {
    const savedChoice = localStorage.getItem("attom_cookie_consent");
    if (savedChoice) {
      setCookieChoice(savedChoice);
    }
  }, []);

  const handleCookieChoice = (choice: "accepted" | "rejected") => {
    localStorage.setItem("attom_cookie_consent", choice);
    setCookieChoice(choice);
  };

  return (
    <main className="min-h-screen flex flex-col bg-white text-black px-6 pt-8 pb-0 md:px-12">
      <header className="flex items-center justify-between mb-24">
        <a href="/">
          <img src="/logo_v2.png" alt="ATTOM" className="h-12 md:h-16 w-auto" />
        </a>

        <nav className="flex items-center gap-8 text-sm uppercase tracking-[0.15em]">
          <a href="/about" className="hover:opacity-60">
            ABOUT
          </a>
          <a href="/what-we-do" className="hover:opacity-60">
            WHAT WE DO
          </a>
          <a href="/contact" className="hover:opacity-60">
            CONTACT
          </a>
        </nav>
      </header>

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

          <p className="mt-10 max-w-lg text-base leading-relaxed text-gray-500 md:text-lg">
            We work on what holds them togheter.
          </p>

          <a
            href="/what-we-do"
            className="mt-10 inline-block bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            See how →
          </a>
        </div>
      </section>
      {/* ── FIM DO HERO ── */}

      <footer className="mt-auto pt-20 pb-12 flex flex-col gap-4 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
        <p>© 2026 ATTOM AGENCY. All rights reserved.</p>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href="/privacy-policy"
            className="hover:text-black transition underline-offset-4 hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="/cookie-policy"
            className="hover:text-black transition underline-offset-4 hover:underline"
          >
            Cookie Policy
          </a>
          <a
            href="/terms-and-conditions"
            className="hover:text-black transition underline-offset-4 hover:underline"
          >
            Terms & Conditions
          </a>
        </div>
      </footer>

      {!cookieChoice && (
        <div className="fixed bottom-6 left-6 right-6 z-50 border border-gray-200 bg-white p-5 shadow-lg md:left-12 md:right-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-2 text-sm font-medium">Cookies</p>
              <p className="text-sm leading-relaxed text-gray-600">
                We use cookies to improve your browsing experience and analyse
                website traffic. You can accept or reject non-essential cookies.
                Read our{" "}
                <a
                  href="/cookie-policy"
                  className="underline underline-offset-4"
                >
                  Cookie Policy
                </a>{" "}
                for more information.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => handleCookieChoice("rejected")}
                className="border border-gray-300 px-5 py-3 text-sm font-medium transition hover:border-black"
              >
                Reject
              </button>
              <button
                onClick={() => handleCookieChoice("accepted")}
                className="bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
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