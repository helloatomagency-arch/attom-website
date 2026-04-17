"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useApp } from "@/contexts/AppContext";

const copy = {
  en: {
    label: "Legal",
    title: "Privacy Policy",
    intro: "ATTOM Agency respects your privacy and is committed to protecting your personal data.",
    sections: [
      { heading: "Information we collect", text: "We may collect your name, email address, company information and any details you provide through our contact forms." },
      { heading: "How we use your data", text: "Your information is used to respond to inquiries, provide services, and improve our website." },
      { heading: "Data protection", text: "We implement appropriate security measures to protect your personal data." },
      { heading: "Your rights", text: "You have the right to access, correct or delete your personal data at any time." },
      { heading: "Contact", text: "For any privacy-related questions, contact us at" },
    ],
  },
  pt: {
    label: "Legal",
    title: "Política de Privacidade",
    intro: "A ATTOM Agency respeita a sua privacidade e compromete-se a proteger os seus dados pessoais.",
    sections: [
      { heading: "Informações que recolhemos", text: "Podemos recolher o seu nome, endereço de email, informações sobre a empresa e quaisquer dados que forneça através dos nossos formulários de contacto." },
      { heading: "Como utilizamos os seus dados", text: "As suas informações são utilizadas para responder a pedidos, prestar serviços e melhorar o nosso website." },
      { heading: "Proteção de dados", text: "Implementamos medidas de segurança adequadas para proteger os seus dados pessoais." },
      { heading: "Os seus direitos", text: "Tem o direito de aceder, corrigir ou eliminar os seus dados pessoais a qualquer momento." },
      { heading: "Contacto", text: "Para questões relacionadas com privacidade, contacte-nos em" },
    ],
  },
};

export default function PrivacyPolicy() {
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