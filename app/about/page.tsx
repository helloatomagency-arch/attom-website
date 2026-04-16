"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useApp } from "@/contexts/AppContext";

const content = {
  en: {
    label: "About",
    title1: "The Invisible",
    title2: "Matter",
    subtitle: "Everything that moves a brand begins before it's seen.",
    block1: {
      big: "There was a time when marketing",
      em: "became noise.",
    },
    block2: "A system flooded with recycled formulas, hollow metrics and promises that expired the moment they were made. Brands spoke, but rarely said anything. They grew, but never became.",
    block3: {
      big: "In that excess of visibility, something essential was lost.",
      small: "The deeper reason why anything deserves to exist.",
    },
    block4: "It was in that gap — between what appears and what endures — that ATTOM began to take shape. Not as an immediate answer. As a refusal.",
    refusals: [
      "A refusal to accept that presence is the same as relevance.",
      "A refusal to confuse motion with direction.",
      "A refusal to treat identity as surface.",
    ],
    block5: "ATTOM is built on a principle that is almost physical: everything truly impactful is, at its core, invisible. Before form, there is intention. Before aesthetics, there is structure. Before any measurable growth, there is a quieter force — but a decisive one.",
    nameTitle: "We called it",
    nameEm: "ATTOM.",
    block6: "Not as a scientific reference, but as a symbol: the smallest unit of everything that matters. The point where identity stops being a style exercise and becomes a living system. Where strategy and sensibility don't compete — they coexist.",
    block7: "Behind this sits three distinct perspectives, held together by one shared demand: never simplify the complex, never complicate the essential. It's not about accumulating ideas — it's about distilling them until they become inevitable.",
    revealTitle: "Our work is not to add.",
    revealEm: "It's to reveal.",
    block8: "To reveal what already exists but hasn't yet been articulated with precision. To reveal what makes something different, even when everything looks the same. To reveal what, once visible, feels obvious — as if it had always been there.",
    block9: "Here, marketing approaches architecture. Every brand is treated as a system in motion — where culture, language and positioning are not separate elements but interdependent parts of a coherent whole.",
    pullQuote: "In the end, what sets a brand apart is not what it shows — it's what sustains it",
    pullQuoteEm: "when no one is watching.",
    closing1: "And that,",
    closing2: "almost always,",
    closingEm: "begins in the invisible.",
  },
  pt: {
    label: "About",
    title1: "A Matéria",
    title2: "Invisível",
    subtitle: "Tudo o que move uma marca começa antes de ser visto.",
    block1: {
      big: "Houve um tempo em que o marketing",
      em: "se tornou ruído.",
    },
    block2: "Um sistema saturado de fórmulas repetidas, métricas ocas e promessas que se esgotavam no instante em que eram ditas. As marcas falavam, mas raramente diziam. Cresciam, mas não se tornavam.",
    block3: {
      big: "Nesse excesso de visibilidade, perdeu-se o essencial.",
      small: "A razão profunda pela qual algo merece existir.",
    },
    block4: "Foi nesse intervalo que a ATTOM começou a tomar forma. Não como resposta imediata, mas como recusa.",
    refusals: [
      "Recusa em aceitar que presença é sinónimo de relevância.",
      "Recusa em confundir movimento com direção.",
      "Recusa em tratar identidade como superfície.",
    ],
    block5: "A ATTOM nasce de um princípio quase físico: tudo o que é verdadeiramente impactante é, na sua origem, invisível. Antes da forma, há intenção. Antes da estética, há estrutura. Antes de qualquer crescimento mensurável, existe uma força mais discreta, mas decisiva.",
    nameTitle: "Chamamos-lhe",
    nameEm: "ATTOM.",
    block6: "Não como referência científica, mas como símbolo: a unidade mínima de tudo o que importa. O ponto onde a identidade deixa de ser um exercício de estilo e passa a ser um sistema vivo. Onde estratégia e sensibilidade não competem — coexistem.",
    block7: "Por detrás desta construção estão três olhares distintos, unidos por uma mesma exigência: a de não simplificar o complexo nem complicar o essencial. Não se trata de acumular ideias, mas de as depurar até ao ponto em que se tornam inevitáveis.",
    revealTitle: "O nosso trabalho não é acrescentar.",
    revealEm: "É revelar.",
    block8: "Revelar o que já existe, mas ainda não foi articulado com precisão. Revelar o que diferencia, mesmo quando tudo parece igual. Revelar aquilo que, quando finalmente se torna visível, parece óbvio — como se sempre tivesse estado lá.",
    block9: "Aqui, o marketing aproxima-se da arquitectura. Cada marca é tratada como um sistema em evolução, onde cultura, linguagem e posicionamento são partes interdependentes de um todo coerente.",
    pullQuote: "Porque no fim, o que distingue uma marca não é o que ela mostra — é aquilo que a sustenta",
    pullQuoteEm: "quando ninguém está a olhar.",
    closing1: "E isso,",
    closing2: "quase sempre,",
    closingEm: "começa no invisível.",
  },
};

export default function AboutPage() {
  const { theme, lang } = useApp();
  const d = theme === "dark";
  const t = content[lang as "en" | "pt"];

  return (
    <main className={`min-h-screen flex flex-col ${d ? "bg-black text-white" : "bg-white text-black"}`}>
      <Header />

      <section className="px-6 md:px-16 lg:px-24 pt-8 pb-16 md:pb-20">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gray-400 mb-12">{t.label}</p>
        <h1 className="text-[clamp(4rem,11vw,9rem)] font-medium leading-[0.9] tracking-[-0.03em] mb-10">
          {t.title1}<br /><em className="font-extralight italic">{t.title2}</em>
        </h1>
        <div className={`w-8 h-px mb-8 ${d ? "bg-gray-700" : "bg-gray-300"}`} />
        <p className={`text-xl md:text-2xl leading-relaxed ${d ? "text-gray-300" : "text-gray-700"}`}>
          {t.subtitle}
        </p>
      </section>

      <section className="px-6 md:px-16 lg:px-24 pb-8 md:pb-10">
        <p className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-[-0.02em]">
          {t.block1.big}<br />
          <em className="font-extralight italic text-gray-400">{t.block1.em}</em>
        </p>
      </section>

      <section className="px-6 md:px-16 lg:px-24 pb-8 md:pb-10">
        <p className={`text-xl md:text-2xl leading-[1.75] max-w-4xl ${d ? "text-gray-400" : "text-gray-600"}`}>
          {t.block2}
        </p>
      </section>

      <section className="px-6 md:px-16 lg:px-24 pb-8 md:pb-10">
        <p className="text-2xl md:text-4xl font-medium leading-[1.2] tracking-[-0.01em] mb-4">
          {t.block3.big}
        </p>
        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
          {t.block3.small}
        </p>
      </section>

      <section className="px-6 md:px-16 lg:px-24 pb-14 md:pb-20">
        <p className={`text-xl md:text-2xl leading-[1.75] max-w-4xl ${d ? "text-gray-400" : "text-gray-600"}`}>
          {t.block4}
        </p>
      </section>

      <section className="px-6 md:px-16 lg:px-24 pb-14 md:pb-20">
        <div className="max-w-5xl">
          {t.refusals.map((text, i) => (
            <div key={i} className={`border-t py-7 md:py-8 flex items-start gap-6 ${d ? "border-gray-800" : "border-gray-100"}`}>
              <span className="text-base text-gray-400 tracking-widest mt-1 shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-2xl md:text-3xl font-medium leading-[1.2]">{text}</p>
            </div>
          ))}
          <div className={`border-t ${d ? "border-gray-800" : "border-gray-100"}`} />
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-24 pb-8 md:pb-10">
        <p className={`text-xl md:text-2xl leading-[1.75] max-w-4xl ${d ? "text-gray-400" : "text-gray-600"}`}>
          {t.block5}
        </p>
      </section>

      <section className="px-6 md:px-16 lg:px-24 pb-8 md:pb-10">
        <p className="text-[clamp(3.5rem,9vw,8rem)] font-medium leading-[0.95] tracking-[-0.03em]">
          {t.nameTitle}<br /><em className="font-extralight italic">{t.nameEm}</em>
        </p>
      </section>

      <section className="px-6 md:px-16 lg:px-24 pb-8 md:pb-10">
        <p className={`text-xl md:text-2xl leading-[1.75] max-w-4xl ${d ? "text-gray-400" : "text-gray-600"}`}>
          {t.block6}
        </p>
      </section>

      <section className="px-6 md:px-16 lg:px-24 pb-14 md:pb-20">
        <p className={`text-xl md:text-2xl leading-[1.75] max-w-4xl ${d ? "text-gray-400" : "text-gray-600"}`}>
          {t.block7}
        </p>
      </section>

      <section className="px-6 md:px-16 lg:px-24 pb-8 md:pb-10">
        <p className="text-[clamp(2.8rem,7vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.03em] max-w-5xl">
          {t.revealTitle}<br />
          <em className="font-extralight italic text-gray-400">{t.revealEm}</em>
        </p>
      </section>

      <section className="px-6 md:px-16 lg:px-24 pb-8 md:pb-10">
        <p className={`text-xl md:text-2xl leading-[1.75] max-w-4xl ${d ? "text-gray-400" : "text-gray-600"}`}>
          {t.block8}
        </p>
      </section>

      <section className="px-6 md:px-16 lg:px-24 pb-14 md:pb-20">
        <p className={`text-xl md:text-2xl leading-[1.75] max-w-4xl ${d ? "text-gray-400" : "text-gray-600"}`}>
          {t.block9}
        </p>
      </section>

      <section className="px-6 md:px-16 lg:px-24 pb-14 md:pb-20">
        <div className="max-w-5xl">
          <div className={`w-8 h-px mb-10 ${d ? "bg-white" : "bg-black"}`} />
          <p className="text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-[-0.02em]">
            {t.pullQuote}{" "}
            <em className="font-extralight italic text-gray-400">{t.pullQuoteEm}</em>
          </p>
          <div className={`w-8 h-px mt-10 ${d ? "bg-white" : "bg-black"}`} />
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-24 pb-32 md:pb-48">
        <p className="text-[clamp(3rem,8vw,7.5rem)] font-medium leading-[0.9] tracking-[-0.03em]">
          {t.closing1}<br />{t.closing2}<br />
          <em className="font-extralight italic text-gray-400">{t.closingEm}</em>
        </p>
      </section>

      <Footer />
    </main>
  );
}