"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useApp } from "@/contexts/AppContext";

const copy = {
  en: {
    headline: "COMING SOON",
    subline: "We have limited spots...",
    name: "Name",
    email: "Email",
    phone: "Phone (optional)",
    cta: "NOTIFY ME",
    success: "You're on the list. We'll reach out soon.",
    cookieTitle: "Cookies",
    cookieText: "We use cookies to improve your browsing experience and analyse website traffic. You can accept or reject non-essential cookies. Read our",
    cookieLink: "Cookie Policy",
    cookieMore: "for more information.",
    reject: "Reject",
    accept: "Accept",
    rights: "© 2026 ATTOM Agency. All rights reserved.",
    privacy: "Privacy Policy",
    cookie: "Cookie Policy",
    terms: "Terms & Conditions",
  },
  pt: {
    headline: "EM BREVE",
    subline: "Temos vagas limitadas...",
    name: "Nome",
    email: "Email",
    phone: "Telefone (opcional)",
    cta: "NOTIFICAR-ME",
    success: "Estás na lista. Entraremos em contacto em breve.",
    cookieTitle: "Cookies",
    cookieText: "Utilizamos cookies para melhorar a sua experiência de navegação e analisar o tráfego do site. Pode aceitar ou rejeitar cookies não essenciais. Leia a nossa",
    cookieLink: "Política de Cookies",
    cookieMore: "para mais informações.",
    reject: "Rejeitar",
    accept: "Aceitar",
    rights: "© 2026 ATTOM Agency. Todos os direitos reservados.",
    privacy: "Política de Privacidade",
    cookie: "Política de Cookies",
    terms: "Termos & Condições",
  },
};

export default function ComingSoon() {
  const { theme, lang, setLang, setTheme } = useApp();
  const d = theme === "dark";
  const t = copy[lang as "en" | "pt"] ?? copy.en;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cookieChoice, setCookieChoice] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("attom_cookie_consent");
    if (saved) setCookieChoice(saved);
  }, []);

  const handleCookieChoice = (choice: "accepted" | "rejected") => {
    localStorage.setItem("attom_cookie_consent", choice);
    setCookieChoice(choice);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setLoading(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        console.error("Waitlist error:", data.error);
      }
    } catch (err) {
      console.error("Waitlist fetch error:", err);
    }

    setSubmitted(true);
    setLoading(false);
  };

  return (
    <main className={`min-h-screen flex flex-col ${d ? "bg-black text-white" : "bg-white text-black"}`}>

      {/* HEADER — logo + botões inline no mobile, painel fixo no desktop */}
      <header className={`flex items-center justify-between pt-8 pb-0 mb-8 md:mb-24 px-6 md:px-12 ${d ? "bg-black" : "bg-white"}`}>
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

        {/* Botões visíveis só no mobile */}
        <div className={`flex flex-col items-end gap-2 md:hidden text-[11px] tracking-[0.15em] uppercase ${d ? "text-white" : "text-black"}`}>
          <div className="flex items-center gap-1">
            <button onClick={() => setLang("en")} className={`transition ${lang === "en" ? "font-medium" : "text-gray-400"}`}>EN</button>
            <span className="text-gray-400">|</span>
            <button onClick={() => setLang("pt")} className={`transition ${lang === "pt" ? "font-medium" : "text-gray-400"}`}>PT</button>
          </div>
          <div className="flex items-center gap-1">
            <button onClick={() => setTheme("light")} className={`transition ${theme === "light" ? "font-medium" : "text-gray-400"}`}>Light</button>
            <span className="text-gray-400">|</span>
            <button onClick={() => setTheme("dark")} className={`transition ${theme === "dark" ? "font-medium" : "text-gray-400"}`}>Dark</button>
          </div>
        </div>
      </header>

      {/* PAINEL LATERAL FIXO — só no desktop */}
      <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col items-end gap-3">
        <div className={`flex items-center gap-1 text-[11px] tracking-[0.15em] uppercase ${d ? "text-white" : "text-black"}`}>
          <button
            onClick={() => setLang("en")}
            className={`transition ${lang === "en" ? "font-medium" : "text-gray-400"}`}
          >
            EN
          </button>
          <span className="text-gray-400">|</span>
          <button
            onClick={() => setLang("pt")}
            className={`transition ${lang === "pt" ? "font-medium" : "text-gray-400"}`}
          >
            PT
          </button>
        </div>

        <div className={`flex items-center gap-1 text-[11px] tracking-[0.15em] uppercase ${d ? "text-white" : "text-black"}`}>
          <button
            onClick={() => setTheme("light")}
            className={`transition ${theme === "light" ? "font-medium" : "text-gray-400"}`}
          >
            Light
          </button>
          <span className="text-gray-400">|</span>
          <button
            onClick={() => setTheme("dark")}
            className={`transition ${theme === "dark" ? "font-medium" : "text-gray-400"}`}
          >
            Dark
          </button>
        </div>
      </div>

      {/* BODY */}
      <section className="flex flex-1 items-center justify-center px-6 md:px-12">
        <div className="flex flex-col items-center text-center gap-10 w-full max-w-lg">

          <h1 className="text-5xl md:text-[5.5rem] font-semibold leading-[1.02] tracking-tight">
            {t.headline}
          </h1>

          <p className={`text-sm tracking-[0.02em] ${d ? "text-gray-400" : "text-gray-500"}`}>
            {t.subline}
          </p>

          {submitted ? (
            <p className={`text-sm ${d ? "text-gray-400" : "text-gray-500"}`}>
              ✓ {t.success}
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
              <input
                type="text"
                placeholder={t.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className={`w-full px-4 py-3 text-sm border outline-none transition
                  ${d
                    ? "bg-black text-white border-gray-700 placeholder-gray-600 focus:border-gray-400"
                    : "bg-white text-black border-gray-200 placeholder-gray-400 focus:border-gray-500"
                  }`}
              />
              <input
                type="email"
                placeholder={t.email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`w-full px-4 py-3 text-sm border outline-none transition
                  ${d
                    ? "bg-black text-white border-gray-700 placeholder-gray-600 focus:border-gray-400"
                    : "bg-white text-black border-gray-200 placeholder-gray-400 focus:border-gray-500"
                  }`}
              />
              <input
                type="tel"
                placeholder={t.phone}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`w-full px-4 py-3 text-sm border outline-none transition
                  ${d
                    ? "bg-black text-white border-gray-700 placeholder-gray-600 focus:border-gray-400"
                    : "bg-white text-black border-gray-200 placeholder-gray-400 focus:border-gray-500"
                  }`}
              />
              <button
                type="submit"
                disabled={loading}
                className={`px-5 py-3 text-sm font-medium tracking-[0.08em] uppercase transition hover:opacity-90
                  ${d ? "bg-white text-black" : "bg-black text-white"}
                  ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {loading ? "..." : t.cta}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`flex flex-wrap justify-between items-center gap-3 px-6 md:px-12 py-4 text-[11px] ${d ? "text-gray-600" : "text-gray-400"}`}>
        <span>{t.rights}</span>
        <div className="flex gap-5">
          <Link href="/privacy-policy" className="hover:opacity-70 transition">{t.privacy}</Link>
          <Link href="/cookie-policy" className="hover:opacity-70 transition">{t.cookie}</Link>
          <Link href="/terms-and-conditions" className="hover:opacity-70 transition">{t.terms}</Link>
        </div>
      </footer>

      {/* COOKIE BANNER */}
      {!cookieChoice && (
        <div className={`fixed bottom-6 left-6 right-6 z-50 border p-5 shadow-lg md:left-12 md:right-12
          ${d ? "bg-black border-gray-700" : "bg-white border-gray-200"}`}>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-2 text-sm font-medium">{t.cookieTitle}</p>
              <p className={`text-sm leading-relaxed ${d ? "text-gray-400" : "text-gray-600"}`}>
                {t.cookieText}{" "}
                <Link href="/cookie-policy" className="underline underline-offset-4">
                  {t.cookieLink}
                </Link>{" "}
                {t.cookieMore}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleCookieChoice("rejected")}
                className={`border px-5 py-3 text-sm font-medium transition
                  ${d ? "border-gray-600 hover:border-white" : "border-gray-300 hover:border-black"}`}
              >
                {t.reject}
              </button>
              <button
                onClick={() => handleCookieChoice("accepted")}
                className={`px-5 py-3 text-sm font-medium transition hover:opacity-90
                  ${d ? "bg-white text-black" : "bg-black text-white"}`}
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