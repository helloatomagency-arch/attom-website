"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useApp } from "@/contexts/AppContext";

const copy = {
  en: {
    label: "Cookie Policy",
    title: "Cookie Policy",
    intro: "This website uses cookies to improve your browsing experience and help us understand how the site is used.",
    sections: [
      { heading: "What are cookies?", text: "Cookies are small text files stored on your device when you visit a website." },
      { heading: "How we use cookies", text: "We may use cookies to remember preferences, improve performance and analyse website traffic." },
      { heading: "Your choices", text: "You can accept or reject non-essential cookies through the cookie banner shown on this website." },
      { heading: "Contact", text: "For any questions about cookies, contact us at" },
    ],
  },
  pt: {
    label: "Política de Cookies",
    title: "Política de Cookies",
    intro: "Este website utiliza cookies para melhorar a sua experiência de navegação e ajudar-nos a compreender como o site é utilizado.",
    sections: [
      { heading: "O que são cookies?", text: "Os cookies são pequenos ficheiros de texto guardados no seu dispositivo quando visita um website." },
      { heading: "Como utilizamos os cookies", text: "Podemos utilizar cookies para memorizar preferências, melhorar o desempenho e analisar o tráfego do site." },
      { heading: "As suas escolhas", text: "Pode aceitar ou rejeitar cookies não essenciais através do banner de cookies apresentado neste website." },
      { heading: "Contacto", text: "Para qualquer questão sobre cookies, contacte-nos em" },
    ],
  },
};

export default function CookiePolicy() {
  const { theme, lang } = useApp();
  const d = theme === "dark";
  const t = copy[lang as "en" | "pt"] ?? copy.en;

  return (
    <main className={`min-h-screen flex flex-col ${d ? "bg-black text-white" : "bg-white text-black"}`}>
      <Header />
      <section className="px-6 md:px-16 lg:px-24 pt-8 pb-32 max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gray-400 mb-12">{t.label}</p>
        <h1 className="text-4xl md:text-5xl font-medium tracking-[-0.02em] mb-12">{t.title}</h1>
        <p className={`mb-8 text-lg leading-[1.75] ${d ? "text-gray-400" : "text-gray-600"}`}>{t.intro}</p>
        {t.sections.map((s, i) => (
          <div key={i}>
            <h2 className="text-xl font-medium mt-10 mb-3">{s.heading}</h2>
            {i === t.sections.length - 1 ? (
              <p className={`text-lg leading-[1.75] ${d ? "text-gray-400" : "text-gray-600"}`}>
                {s.text}{" "}
                <a href="mailto:hello.atomagency@gmail.com" className={`underline underline-offset-4 transition ${d ? "hover:text-white" : "hover:text-black"}`}>
                  hello.atomagency@gmail.com
                </a>
              </p>
            ) : (
              <p className={`text-lg leading-[1.75] ${d ? "text-gray-400" : "text-gray-600"}`}>{s.text}</p>
            )}
          </div>
        ))}
      </section>
      <Footer />
    </main>
  );
}