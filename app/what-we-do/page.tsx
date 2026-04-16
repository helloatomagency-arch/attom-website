"use client";

import { useEffect } from "react";

export default function WhatWeDoPage() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen flex flex-col bg-white text-black px-6 pt-8 pb-0 md:px-12">
      {/* HEADER (mantém igual) */}
      <header className="flex items-center justify-between mb-24">
        <a href="/">
          <img
            src="/logo_v2.png"
            alt="ATTOM"
            className="h-12 md:h-15 w-auto"
          />
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

      {/* HERO */}
      <section className="max-w-4xl mb-32">
        <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">
          WHAT WE DO
        </p>

        <h1 className="text-3xl md:text-5xl font-medium leading-tight mb-6">
          O que fazemos não se separa de como pensamos.
        </h1>

        <p className="text-lg md:text-xl text-gray-600">
          Porque quando se separa, deixa de funcionar.
        </p>
      </section>

      {/* INTRO */}
      <section className="max-w-2xl mb-40">
        <p className="text-lg md:text-xl leading-relaxed text-gray-700">
          Não organizamos o trabalho em serviços. Construímos sistemas —
          coerentes, intencionais e sustentáveis.
        </p>
      </section>

      {/* BLOCOS */}
      <section className="flex flex-col gap-40">
        {/* 01 */}
        <div className="max-w-xl reveal">
          <p className="text-sm text-gray-400 mb-2">01</p>
          <h2 className="text-2xl md:text-3xl font-medium mb-4">
            Brand Strategy
          </h2>
          <p className="text-xl mb-4">
            Antes de comunicar, é preciso decidir.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Definimos o núcleo da marca — aquilo que orienta todas as decisões
            seguintes. Onde a marca existe, o que oferece e porque isso importa.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Posicionamento · Proposta de valor · Arquitetura · Naming
          </p>
        </div>

        {/* 02 */}
        <div className="max-w-xl ml-auto reveal">
          <p className="text-sm text-gray-400 mb-2">02</p>
          <h2 className="text-2xl md:text-3xl font-medium mb-4">
            Brand & Identity
          </h2>
          <p className="text-xl mb-4">
            Uma marca não se desenha. Define-se.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Criamos sistemas visuais com coerência e capacidade de evoluir sem
            perder carácter. Cada detalhe deve reforçar o todo.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Identidade visual · Direção criativa · Sistema · Guidelines
          </p>
        </div>

        {/* 03 */}
        <div className="max-w-xl reveal">
          <p className="text-sm text-gray-400 mb-2">03</p>
          <h2 className="text-2xl md:text-3xl font-medium mb-4">
            Content & Narrative
          </h2>
          <p className="text-xl mb-4">
            Toda a marca comunica. Poucas dizem algo.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Construímos linguagem clara e consistente para que cada peça faça
            parte do mesmo sistema. Não produzimos volume. Criamos significado.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Storytelling · Content strategy · Social · Produção
          </p>
        </div>

        {/* 04 */}
        <div className="max-w-xl ml-auto reveal">
          <p className="text-sm text-gray-400 mb-2">04</p>
          <h2 className="text-2xl md:text-3xl font-medium mb-4">
            Growth & Performance
          </h2>
          <p className="text-xl mb-4">
            Crescimento não é uma tática. É consequência.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Trabalhamos aquisição e conversão como extensão da estratégia. Dados
            informam — não substituem pensamento.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Paid media · Performance · SEO · Conversão
          </p>
        </div>

        {/* 05 */}
        <div className="max-w-xl reveal">
          <p className="text-sm text-gray-400 mb-2">05</p>
          <h2 className="text-2xl md:text-3xl font-medium mb-4">
            Digital & Experience
          </h2>
          <p className="text-xl mb-4">
            O digital é onde a marca é testada.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Criamos experiências digitais onde estrutura, conteúdo e interface
            trabalham como um todo.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Websites · UX/UI · Landing pages · Experiência
          </p>
        </div>

        {/* 06 */}
        <div className="max-w-xl ml-auto reveal">
          <p className="text-sm text-gray-400 mb-2">06</p>
          <h2 className="text-2xl md:text-3xl font-medium mb-4">
            Influence & Culture
          </h2>
          <p className="text-xl mb-4">
            As marcas que duram entram na cultura.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Trabalhamos com pessoas, plataformas e momentos que ampliam a marca
            sem a diluir.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Influência · PR · Parcerias · Ativações
          </p>
        </div>
      </section>

      {/* FECHO */}
      <section className="text-center mt-40 mb-20">
        <p className="text-xl mb-6">
          Não fazemos tudo. Fazemos apenas o que importa.
        </p>

        <a
          href="/contact"
          className="inline-block border border-black px-6 py-3 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition"
        >
          Falar connosco
        </a>
      </section>

      {/* FOOTER (mantém igual) */}
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
    </main>
  );
}