"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useApp } from "@/contexts/AppContext";

const copy = {
  en: {
    label: "Legal",
    title: "Terms & Conditions",
    intro: "By using this website, you agree to the following Terms & Conditions.",
    sections: [
      { heading: "Use of this website", text: "This website is provided for general information about ATTOM Agency and its services." },
      { heading: "Intellectual property", text: "All content on this website, including text, branding and visual elements, belongs to ATTOM Agency unless otherwise stated." },
      { heading: "Limitation of liability", text: "We do our best to keep the information on this website accurate and up to date, but we do not guarantee completeness or accuracy at all times." },
      { heading: "External links", text: "This website may contain links to third-party websites. We are not responsible for their content or privacy practices." },
      { heading: "Contact", text: "For any questions regarding these terms, contact us at" },
    ],
  },
  pt: {
    label: "Legal",
    title: "Termos e Condições",
    intro: "Ao utilizar este website, aceita os seguintes Termos e Condições.",
    sections: [
      { heading: "Utilização deste website", text: "Este website destina-se a fornecer informações gerais sobre a ATTOM Agency e os seus serviços." },
      { heading: "Propriedade intelectual", text: "Todo o conteúdo deste website, incluindo texto, marca e elementos visuais, pertence à ATTOM Agency, salvo indicação em contrário." },
      { heading: "Limitação de responsabilidade", text: "Fazemos o possível para manter a informação deste website precisa e actualizada, mas não garantimos a sua exaustividade ou exactidão em todos os momentos." },
      { heading: "Links externos", text: "Este website pode conter links para websites de terceiros. Não somos responsáveis pelo seu conteúdo ou práticas de privacidade." },
      { heading: "Contacto", text: "Para qualquer questão sobre estes termos, contacte-nos em" },
    ],
  },
};

export default function TermsAndConditions() {
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