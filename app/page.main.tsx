"use client";

import { useEffect, useState } from "react";
import { useApp } from "@/contexts/AppContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const copy = {
  en: {
    headline1: "Most brands are built",
    headline2: "to be seen.",
    headlineEm: "Very few",
    headline3: "are built to last.",
    subtext: "We work on what holds them together.",
    cta: "See how →",
    cookieTitle: "Cookies",
    cookieText: "We use cookies to improve your browsing experience and analyse website traffic. You can accept or reject non-essential cookies. Read our",
    cookieLink: "Cookie Policy",
    cookieMore: "for more information.",
    reject: "Reject",
    accept: "Accept",
  },
  pt: {
    headline1: "As marcas constroem-se",
    headline2: "para ser vistas.",
    headlineEm: "Muito poucas",
    headline3: "existem para durar.",
    subtext: "Trabalhamos no que as sustenta.",
    cta: "Ver como →",
    cookieTitle: "Cookies",
    cookieText: "Utilizamos cookies para melhorar a sua experiência de navegação e analisar o tráfego do site. Pode aceitar ou rejeitar cookies não essenciais. Leia a nossa",
    cookieLink: "Política de Cookies",
    cookieMore: "para mais informações.",
    reject: "Rejeitar",
    accept: "Aceitar",
  },
};

export default function Home() {
  const { theme, lang } = useApp();
  const isDark = theme === "dark";
  const isPT = lang === "pt";
  const t = copy[lang as "en" | "pt"] ?? copy.en;
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
    <main className={`min-h-screen flex flex-col ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>

      <Header />

      {/* ── HERO ── */}
      <section className="flex flex-1 items-center px-6 md:px-12">
        <div className="max-w-5xl">
          <h1 className={`font-semibold leading-[1.05] ${isPT ? "text-4xl md:text-6xl md:leading-[1.05]" : "text-5xl md:text-[5.5rem] md:leading-[1.02]"}`}>
            {t.headline1}
            <br />
            {t.headline2}{" "}
            <span className="italic font-light">{t.headlineEm}</span>
            <br />
            {t.headline3}
          </h1>

          <p className={`mt-10 max-w-lg text-base leading-relaxed md:text-lg ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            {t.subtext}
          </p>

          <a
            href="/what-we-do"
            className={`mt-10 inline-block px-5 py-3 text-sm font-medium transition hover:opacity-90 ${isDark ? "bg-white text-black" : "bg-black text-white"}`}
          >
            {t.cta}
          </a>
        </div>
      </section>

      <Footer />

      {/* COOKIES */}
      {!cookieChoice && (
        <div className={`fixed bottom-6 left-6 right-6 z-50 border p-5 shadow-lg md:left-12 md:right-12 ${isDark ? "bg-black border-gray-700" : "bg-white border-gray-200"}`}>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-2 text-sm font-medium">{t.cookieTitle}</p>
              <p className={`text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                {t.cookieText}{" "}
                <a href="/cookie-policy" className="underline underline-offset-4">
                  {t.cookieLink}
                </a>{" "}
                {t.cookieMore}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleCookieChoice("rejected")}
                className={`border px-5 py-3 text-sm font-medium transition ${isDark ? "border-gray-600 hover:border-white" : "border-gray-300 hover:border-black"}`}
              >
                {t.reject}
              </button>
              <button
                onClick={() => handleCookieChoice("accepted")}
                className={`px-5 py-3 text-sm font-medium transition hover:opacity-90 ${isDark ? "bg-white text-black" : "bg-black text-white"}`}
              >
                {t.accept}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}