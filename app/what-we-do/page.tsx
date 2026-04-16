"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useApp } from "@/contexts/AppContext";

const services = {
  en: [
    { number: "01", title: "Brand Strategy", tagline: "Before you communicate, you need to decide.", description: "A brand without strategy is just aesthetics waiting for a reason to exist. This is where we define the core — the positioning, the value proposition, the architecture that holds every decision that follows. The invisible work that makes everything else inevitable.", tags: ["Positioning", "Value proposition", "Brand architecture", "Naming", "Communication strategy"] },
    { number: "02", title: "Brand & Identity", tagline: "A brand isn't drawn. It's defined.", description: "Identity is not a logo. It's the complete system through which a brand becomes recognisable — not just visually, but at every point of contact. We build visual systems with internal coherence and the capacity to scale without losing character.", tags: ["Visual identity", "Creative direction", "Brand system", "Guidelines"] },
    { number: "03", title: "Content & Narrative", tagline: "What a brand says matters as much as what it is.", description: "Content without narrative is noise. We work language as a system — not a production line — so that every piece, in any channel, is recognisable as part of a whole. A brand's voice is a strategic asset. We treat it that way.", tags: ["Storytelling", "Content strategy", "Social media", "Content production"] },
    { number: "04", title: "Growth & Performance", tagline: "The structure that turns intention into result.", description: "A well-built brand deserves to be found. This area doesn't exist apart from strategy — it's its natural consequence. We activate the right channels, with the right message, for the right people. Performance is not volume. It's precision.", tags: ["Paid media", "Performance marketing", "SEO", "Funnels & conversion"] },
    { number: "05", title: "Digital & Experience", tagline: "Digital space is brand space.", description: "A website is not a brochure. It's the place where a brand exists with the most control and the most responsibility. We design digital experiences that respect the user and express the brand — where UX and identity don't compete, but become the same thing.", tags: ["Websites", "Landing pages", "UX/UI", "Digital experience"] },
    { number: "06", title: "Influence & Culture", tagline: "Brands that last enter culture. Not just the feed.", description: "Real influence can't be bought — it's built. Through the right people, the right stories and the partnerships that actually make sense. We work in this space with the same editorial rigour we apply to everything else, because culture is the territory where brands become references.", tags: ["Influencer marketing", "PR & press", "Partnerships", "Activations"] },
    { number: "07", title: "People & Knowledge", tagline: "The knowledge a team holds is the limit of what a brand can be.", description: "Every company is required to train. Few train with intention. We develop mandatory training programmes — legally compliant, but built around each organisation's specific needs. We don't deliver generic content. We deliver training that serves the company's culture, develops the right people, and fulfils what the law requires without wasting what time allows.", tags: ["Certified mandatory training", "Tailored programmes", "Brand-context training", "Team development"] },
  ],
  pt: [
    { number: "01", title: "Brand Strategy", tagline: "Antes de comunicar, é preciso decidir.", description: "Uma marca sem estratégia é apenas estética à espera de uma razão para existir. Aqui definimos o núcleo — o posicionamento, a proposta de valor, a arquitetura que sustenta todas as decisões que se seguem. É o trabalho invisível que torna tudo o resto inevitável.", tags: ["Posicionamento", "Proposta de valor", "Arquitetura de marca", "Naming", "Estratégia de comunicação"] },
    { number: "02", title: "Brand & Identity", tagline: "Uma marca não se desenha. Define-se.", description: "Identidade não é logótipo. É o sistema completo através do qual uma marca se torna reconhecível — não apenas visualmente, mas em cada ponto de contacto. Construímos sistemas visuais que têm coerência interna e capacidade de escalar sem perder carácter.", tags: ["Identidade visual", "Direção criativa", "Sistema de marca", "Guidelines"] },
    { number: "03", title: "Content & Narrative", tagline: "O que uma marca diz é tão importante como o que é.", description: "Conteúdo sem narrativa é ruído. Trabalhamos a linguagem como sistema — não como produção — para que cada peça, em qualquer canal, seja reconhecível como parte de um todo. A voz de uma marca é um activo estratégico. Tratamo-la como tal.", tags: ["Storytelling", "Content strategy", "Social media", "Produção de conteúdo"] },
    { number: "04", title: "Growth & Performance", tagline: "A estrutura que traduz intenção em resultado.", description: "Uma marca bem construída merece ser encontrada. Esta área não existe à parte da estratégia — é a sua consequência natural. Activamos os canais certos, com a mensagem certa, para as pessoas certas. Performance não é volume. É precisão.", tags: ["Paid media", "Performance marketing", "SEO", "Funis e conversão"] },
    { number: "05", title: "Digital & Experience", tagline: "O espaço digital é um espaço de marca.", description: "Um website não é uma brochura. É o lugar onde a marca existe com mais controlo e mais responsabilidade. Desenhamos experiências digitais que respeitam o utilizador e expressam a marca — onde UX e identidade não competem, mas se tornam a mesma coisa.", tags: ["Websites", "Landing pages", "UX/UI", "Experiência digital"] },
    { number: "06", title: "Influence & Culture", tagline: "As marcas que duram entram na cultura. Não apenas no feed.", description: "Influência real não se compra — constrói-se. Através das pessoas certas, das histórias certas e das parcerias que fazem sentido. Trabalhamos neste espaço com a mesma exigência editorial que aplicamos a tudo o resto, porque a cultura é o território onde as marcas se tornam referências.", tags: ["Influencer marketing", "PR e imprensa", "Parcerias", "Ativações"] },
    { number: "07", title: "People & Knowledge", tagline: "O conhecimento que uma equipa tem é o limite do que uma marca pode ser.", description: "Toda a empresa é obrigada a formar. Poucas formam com intenção. Desenvolvemos programas de formação obrigatória — legalmente enquadrados, mas construídos à medida de cada organização. Não entregamos conteúdo genérico. Entregamos formação que serve a cultura da empresa, desenvolve as pessoas certas e cumpre o que a lei exige sem desperdiçar o que o tempo permite.", tags: ["Formação obrigatória certificada", "Programas à medida", "Formação em contexto de marca", "Desenvolvimento de equipas"] },
  ],
};

const copy = {
  en: {
    label: "What We Do",
    title1: "What we do",
    title2: "is inseparable from how we think.",
    subtitle: "We don't offer isolated services. We offer systems.",
    intro: "Every area we activate is part of a coherent whole — because a brand that isn't coherent internally will never be coherent externally. We work in an integrated way or a focused way, depending on what each brand needs. But the principle is always the same: nothing exists by accident, and nothing works alone.",
    introItalic: "What follows is not a catalogue. It's a description of how we think about the work — and what's available to those who want to build something that lasts.",
    closing: "We don't do everything.",
    closingEm: "We do only what matters.",
    cta: "Let's talk →",
  },
  pt: {
    label: "What We Do",
    title1: "O que fazemos",
    title2: "é inseparável de como pensamos.",
    subtitle: "Não oferecemos serviços isolados. Oferecemos sistemas.",
    intro: "Cada área que ativamos é parte de um todo coerente — porque uma marca que não é coerente internamente nunca o será externamente. Trabalhamos de forma integrada ou de forma focada, consoante o que cada marca precisa. Mas o princípio é sempre o mesmo: nada existe por acaso, e nada funciona sozinho.",
    introItalic: "O que se segue não é um catálogo. É uma descrição de como pensamos o trabalho — e do que está disponível para quem quiser construir algo que dure.",
    closing: "Não fazemos tudo.",
    closingEm: "Fazemos apenas o que importa.",
    cta: "Falar connosco →",
  },
};

export default function WhatWeDoPage() {
  const { theme, lang } = useApp();
  const d = theme === "dark";
  const l = (lang as "en" | "pt") === "en" ? "en" : "pt";
  const t = copy[l];
  const s = services[l];

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("visible"); }); },
      { threshold: 0.08 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className={`min-h-screen flex flex-col ${d ? "bg-black text-white" : "bg-white text-black"}`}>
      <Header />

      <section className="px-6 md:px-16 lg:px-24 pt-8 pb-16 md:pb-20">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gray-400 mb-12">{t.label}</p>
        <h1 className="text-[clamp(3rem,8vw,7rem)] font-medium leading-[0.95] tracking-[-0.03em] mb-10">
          {t.title1}<br />
          <em className="font-extralight italic">{t.title2}</em>
        </h1>
        <div className={`w-8 h-px mb-8 ${d ? "bg-gray-700" : "bg-gray-300"}`} />
        <p className={`text-xl md:text-2xl leading-[1.75] max-w-3xl ${d ? "text-gray-300" : "text-gray-600"}`}>
          {t.subtitle}
        </p>
      </section>

      <section className="px-6 md:px-16 lg:px-24 pb-20 md:pb-32">
        <p className={`text-xl md:text-2xl leading-[1.75] max-w-4xl ${d ? "text-gray-400" : "text-gray-600"}`}>
          {t.intro}
        </p>
        <p className={`text-xl md:text-2xl leading-[1.75] max-w-4xl mt-6 font-light italic ${d ? "text-gray-500" : "text-gray-400"}`}>
          {t.introItalic}
        </p>
      </section>

      <section className="px-6 md:px-16 lg:px-24 pb-32 md:pb-48">
        <div className={`divide-y ${d ? "divide-gray-800" : "divide-gray-100"}`}>
          {s.map((item) => (
            <div key={item.number} className="reveal py-16 md:py-20">
              <div className="flex items-baseline gap-4 mb-8">
                <span className={`text-3xl md:text-5xl font-medium tracking-tight shrink-0 ${d ? "text-gray-700" : "text-gray-200"}`}>{item.number}</span>
                <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.02em]">{item.title}</h2>
              </div>
              <div className="max-w-3xl mb-10">
                <p className="text-xl md:text-2xl font-medium mb-4">{item.tagline}</p>
                <p className={`text-lg md:text-xl leading-[1.75] ${d ? "text-gray-400" : "text-gray-600"}`}>{item.description}</p>
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
                {item.tags.map((tag, i) => (
                  <span key={tag} className="flex items-center gap-2">
                    <span className={`text-sm ${d ? "text-gray-500" : "text-gray-400"}`}>{tag}</span>
                    {i < item.tags.length - 1 && <span className={`text-base leading-none ${d ? "text-gray-700" : "text-gray-300"}`}>·</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-24 pb-32 md:pb-48 flex flex-col items-start gap-8">
        <p className="text-2xl md:text-4xl font-medium leading-[1.1] tracking-[-0.02em]">
          {t.closing}<br />
          <em className="font-extralight italic text-gray-400">{t.closingEm}</em>
        </p>
        <a href="/contact" className={`inline-block px-6 py-3 text-sm font-medium hover:opacity-90 transition ${d ? "bg-white text-black" : "bg-black text-white"}`}>
          {t.cta}
        </a>
      </section>

      <Footer />
    </main>
  );
}