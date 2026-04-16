"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    number: "01",
    title: "Brand Strategy",
    tagline: "Antes de comunicar, é preciso decidir.",
    description:
      "Uma marca sem estratégia é apenas estética à espera de uma razão para existir. Aqui definimos o núcleo — o posicionamento, a proposta de valor, a arquitetura que sustenta todas as decisões que se seguem. É o trabalho invisível que torna tudo o resto inevitável.",
    tags: ["Posicionamento", "Proposta de valor", "Arquitetura de marca", "Naming", "Estratégia de comunicação"],
  },
  {
    number: "02",
    title: "Brand & Identity",
    tagline: "Uma marca não se desenha. Define-se.",
    description:
      "Identidade não é logótipo. É o sistema completo através do qual uma marca se torna reconhecível — não apenas visualmente, mas em cada ponto de contacto. Construímos sistemas visuais que têm coerência interna e capacidade de escalar sem perder carácter.",
    tags: ["Identidade visual", "Direção criativa", "Sistema de marca", "Guidelines"],
  },
  {
    number: "03",
    title: "Content & Narrative",
    tagline: "O que uma marca diz é tão importante como o que é.",
    description:
      "Conteúdo sem narrativa é ruído. Trabalhamos a linguagem como sistema — não como produção — para que cada peça, em qualquer canal, seja reconhecível como parte de um todo. A voz de uma marca é um activo estratégico. Tratamo-la como tal.",
    tags: ["Storytelling", "Content strategy", "Social media", "Produção de conteúdo"],
  },
  {
    number: "04",
    title: "Growth & Performance",
    tagline: "A estrutura que traduz intenção em resultado.",
    description:
      "Uma marca bem construída merece ser encontrada. Esta área não existe à parte da estratégia — é a sua consequência natural. Activamos os canais certos, com a mensagem certa, para as pessoas certas. Performance não é volume. É precisão.",
    tags: ["Paid media", "Performance marketing", "SEO", "Funis e conversão"],
  },
  {
    number: "05",
    title: "Digital & Experience",
    tagline: "O espaço digital é um espaço de marca.",
    description:
      "Um website não é uma brochura. É o lugar onde a marca existe com mais controlo e mais responsabilidade. Desenhamos experiências digitais que respeitam o utilizador e expressam a marca — onde UX e identidade não competem, mas se tornam a mesma coisa.",
    tags: ["Websites", "Landing pages", "UX/UI", "Experiência digital"],
  },
  {
    number: "06",
    title: "Influence & Culture",
    tagline: "As marcas que duram entram na cultura. Não apenas no feed.",
    description:
      "Influência real não se compra — constrói-se. Através das pessoas certas, das histórias certas e das parcerias que fazem sentido. Trabalhamos neste espaço com a mesma exigência editorial que aplicamos a tudo o resto, porque a cultura é o território onde as marcas se tornam referências.",
    tags: ["Influencer marketing", "PR e imprensa", "Parcerias", "Ativações"],
  },
  {
    number: "07",
    title: "People & Knowledge",
    tagline: "O conhecimento que uma equipa tem é o limite do que uma marca pode ser.",
    description:
      "Toda a empresa é obrigada a formar. Poucas formam com intenção. Desenvolvemos programas de formação obrigatória — legalmente enquadrados, mas construídos à medida de cada organização. Não entregamos conteúdo genérico. Entregamos formação que serve a cultura da empresa, desenvolve as pessoas certas e cumpre o que a lei exige sem desperdiçar o que o tempo permite.",
    tags: ["Formação obrigatória certificada", "Programas à medida", "Formação em contexto de marca", "Desenvolvimento de equipas"],
  },
];

export default function WhatWeDoPage() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen flex flex-col bg-white text-black">
      <Header />

      {/* HERO */}
      <section className="px-6 md:px-16 lg:px-24 pt-8 pb-16 md:pb-20">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gray-400 mb-12">
          What We Do
        </p>

        <h1 className="text-[clamp(3rem,8vw,7rem)] font-medium leading-[0.95] tracking-[-0.03em] mb-10">
          O que fazemos
          <br />
          <em className="font-extralight italic">
            é inseparável de como pensamos.
          </em>
        </h1>

        <div className="w-8 h-px bg-gray-300 mb-8" />

        <p className="text-xl md:text-2xl text-gray-600 leading-[1.75] max-w-3xl">
          Não oferecemos serviços isolados. Oferecemos sistemas.
        </p>
      </section>

      {/* INTRO */}
      <section className="px-6 md:px-16 lg:px-24 pb-20 md:pb-32">
        <p className="text-xl md:text-2xl text-gray-600 leading-[1.75] max-w-4xl">
          Cada área que ativamos é parte de um todo coerente — porque uma marca
          que não é coerente internamente nunca o será externamente. Trabalhamos
          de forma integrada ou de forma focada, consoante o que cada marca
          precisa. Mas o princípio é sempre o mesmo: nada existe por acaso, e
          nada funciona sozinho.
        </p>
        <p className="text-xl md:text-2xl text-gray-400 leading-[1.75] max-w-4xl mt-6 font-light italic">
          O que se segue não é um catálogo. É uma descrição de como pensamos o
          trabalho — e do que está disponível para quem quiser construir algo
          que dure.
        </p>
      </section>

      {/* SERVIÇOS */}
      <section className="px-6 md:px-16 lg:px-24 pb-32 md:pb-48">
        <div className="divide-y divide-gray-100">
          {services.map((s) => (
            <div key={s.number} className="reveal py-16 md:py-20">

              {/* NÚMERO + TÍTULO */}
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-3xl md:text-5xl font-medium text-gray-200 tracking-tight shrink-0">
                  {s.number}
                </span>
                <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.02em]">
                  {s.title}
                </h2>
              </div>

              {/* TAGLINE + DESCRIÇÃO */}
              <div className="max-w-3xl mb-10">
                <p className="text-xl md:text-2xl font-medium mb-4 text-black">
                  {s.tagline}
                </p>
                <p className="text-lg md:text-xl text-gray-600 leading-[1.75]">
                  {s.description}
                </p>
              </div>

              {/* TAGS */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
                {s.tags.map((tag, i) => (
                  <span key={tag} className="flex items-center gap-2">
                    <span className="text-sm text-gray-400">{tag}</span>
                    {i < s.tags.length - 1 && (
                      <span className="text-gray-300 text-base leading-none">·</span>
                    )}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* FECHO */}
      <section className="px-6 md:px-16 lg:px-24 pb-32 md:pb-48 flex flex-col items-start gap-8">
        <p className="text-2xl md:text-4xl font-medium leading-[1.1] tracking-[-0.02em]">
          Não fazemos tudo.
          <br />
          <em className="font-extralight italic text-gray-400">
            Fazemos apenas o que importa.
          </em>
        </p>

        <a
          href="/contact"
          className="inline-block bg-black text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition"
        >
          Falar connosco →
        </a>
      </section>

      <Footer />
    </main>
  );
}