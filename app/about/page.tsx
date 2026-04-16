import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-black">
      <Header />

      {/* HERO */}
      <section className="px-6 md:px-16 lg:px-24 pt-8 pb-16 md:pb-20">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gray-400 mb-12">
          About
        </p>

        <h1 className="text-[clamp(4rem,11vw,9rem)] font-medium leading-[0.9] tracking-[-0.03em] mb-10">
          A Matéria
          <br />
          <em className="font-extralight italic">Invisível</em>
        </h1>

        <div className="w-8 h-px bg-gray-300 mb-8" />

        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed whitespace-nowrap">
          Tudo o que move uma marca começa antes de ser visto.
        </p>
      </section>

      {/* BLOCO 1 */}
      <section className="px-6 md:px-16 lg:px-24 pb-8 md:pb-10">
        <p className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-[-0.02em]">
          Houve um tempo em que o marketing
          <br />
          <em className="font-extralight italic text-gray-400">
            se tornou ruído.
          </em>
        </p>
      </section>

      {/* BLOCO 2 */}
      <section className="px-6 md:px-16 lg:px-24 pb-8 md:pb-10">
        <p className="text-xl md:text-2xl text-gray-600 leading-[1.75] max-w-4xl">
          Um sistema saturado de fórmulas repetidas, métricas ocas e promessas
          que se esgotavam no instante em que eram ditas. As marcas falavam,
          mas raramente diziam. Cresciam, mas não se tornavam.
        </p>
      </section>

      {/* BLOCO 3 */}
      <section className="px-6 md:px-16 lg:px-24 pb-8 md:pb-10">
        <p className="text-2xl md:text-4xl font-medium leading-[1.2] tracking-[-0.01em] mb-4">
          Nesse excesso de visibilidade, perdeu-se o essencial.
        </p>
        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
          A razão profunda pela qual algo merece existir.
        </p>
      </section>

      {/* BLOCO 4 */}
      <section className="px-6 md:px-16 lg:px-24 pb-14 md:pb-20">
        <p className="text-xl md:text-2xl text-gray-600 leading-[1.75] max-w-4xl">
          Foi nesse intervalo que a ATTOM começou a tomar forma. Não como
          resposta imediata, mas como recusa.
        </p>
      </section>

      {/* RECUSAS */}
      <section className="px-6 md:px-16 lg:px-24 pb-14 md:pb-20">
        <div className="max-w-5xl">
          {[
            "Recusa em aceitar que presença é sinónimo de relevância.",
            "Recusa em confundir movimento com direção.",
            "Recusa em tratar identidade como superfície.",
          ].map((text, i) => (
            <div
              key={i}
              className="border-t border-gray-100 py-7 md:py-8 flex items-start gap-6"
            >
              <span className="text-base text-gray-300 tracking-widest mt-1 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-2xl md:text-3xl font-medium leading-[1.2]">
                {text}
              </p>
            </div>
          ))}
          <div className="border-t border-gray-100" />
        </div>
      </section>

      {/* BLOCO 5 */}
      <section className="px-6 md:px-16 lg:px-24 pb-8 md:pb-10">
        <p className="text-xl md:text-2xl text-gray-600 leading-[1.75] max-w-4xl">
          A ATTOM nasce de um princípio quase físico: tudo o que é
          verdadeiramente impactante é, na sua origem, invisível. Antes da
          forma, há intenção. Antes da estética, há estrutura. Antes de
          qualquer crescimento mensurável, existe uma força mais discreta, mas
          decisiva.
        </p>
      </section>

      {/* NOME */}
      <section className="px-6 md:px-16 lg:px-24 pb-8 md:pb-10">
        <p className="text-[clamp(3.5rem,9vw,8rem)] font-medium leading-[0.95] tracking-[-0.03em]">
          Chamamos-lhe
          <br />
          <em className="font-extralight italic">ATTOM.</em>
        </p>
      </section>

      {/* BLOCO 6 */}
      <section className="px-6 md:px-16 lg:px-24 pb-8 md:pb-10">
        <p className="text-xl md:text-2xl text-gray-600 leading-[1.75] max-w-4xl">
          Não como referência científica, mas como símbolo: a unidade mínima de
          tudo o que importa. O ponto onde a identidade deixa de ser um
          exercício de estilo e passa a ser um sistema vivo. Onde estratégia e
          sensibilidade não competem — coexistem.
        </p>
      </section>

      {/* BLOCO 7 */}
      <section className="px-6 md:px-16 lg:px-24 pb-14 md:pb-20">
        <p className="text-xl md:text-2xl text-gray-600 leading-[1.75] max-w-4xl">
          Por detrás desta construção estão três olhares distintos, unidos por
          uma mesma exigência: a de não simplificar o complexo nem complicar o
          essencial. Não se trata de acumular ideias, mas de as depurar até ao
          ponto em que se tornam inevitáveis.
        </p>
      </section>

      {/* REVELAR */}
      <section className="px-6 md:px-16 lg:px-24 pb-8 md:pb-10">
        <p className="text-[clamp(2.8rem,7vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.03em] max-w-5xl">
          O nosso trabalho não é acrescentar.
          <br />
          <em className="font-extralight italic text-gray-400">É revelar.</em>
        </p>
      </section>

      {/* BLOCO 8 */}
      <section className="px-6 md:px-16 lg:px-24 pb-8 md:pb-10">
        <p className="text-xl md:text-2xl text-gray-600 leading-[1.75] max-w-4xl">
          Revelar o que já existe, mas ainda não foi articulado com precisão.
          Revelar o que diferencia, mesmo quando tudo parece igual. Revelar
          aquilo que, quando finalmente se torna visível, parece óbvio — como
          se sempre tivesse estado lá.
        </p>
      </section>

      {/* BLOCO 9 */}
      <section className="px-6 md:px-16 lg:px-24 pb-14 md:pb-20">
        <p className="text-xl md:text-2xl text-gray-600 leading-[1.75] max-w-4xl">
          Aqui, o marketing aproxima-se da arquitectura. Cada marca é tratada
          como um sistema em evolução, onde cultura, linguagem e posicionamento
          são partes interdependentes de um todo coerente.
        </p>
      </section>

      {/* PULL QUOTE */}
      <section className="px-6 md:px-16 lg:px-24 pb-14 md:pb-20">
        <div className="max-w-5xl">
          <div className="w-8 h-px bg-black mb-10" />
          <p className="text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-[-0.02em]">
            Porque no fim, o que distingue uma marca não é o que ela mostra —
            é aquilo que a sustenta{" "}
            <em className="font-extralight italic text-gray-400">
              quando ninguém está a olhar.
            </em>
          </p>
          <div className="w-8 h-px bg-black mt-10" />
        </div>
      </section>

      {/* FECHO */}
      <section className="px-6 md:px-16 lg:px-24 pb-32 md:pb-48">
        <p className="text-[clamp(3rem,8vw,7.5rem)] font-medium leading-[0.9] tracking-[-0.03em]">
          E isso,
          <br />
          quase sempre,
          <br />
          <em className="font-extralight italic text-gray-400">
            começa no invisível.
          </em>
        </p>
      </section>

      <Footer />
    </main>
  );
}