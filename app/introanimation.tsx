"use client";

import { useEffect, useState } from "react";

const TEXTO = "ATTOM AGENCY";

export default function IntroAnimation() {
  const [mostrar, setMostrar] = useState(false);
  const [letrasVisiveis, setLetrasVisiveis] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [terminado, setTerminado] = useState(false);

  useEffect(() => {
    const jaViu = localStorage.getItem("attom_intro_seen");
    if (jaViu) {
      setTerminado(true);
      return;
    }
    setMostrar(true);
  }, []);

  useEffect(() => {
    if (!mostrar) return;

    if (letrasVisiveis < TEXTO.length) {
      const timer = setTimeout(() => {
        setLetrasVisiveis((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timer);
    }

    // Texto completo — espera um momento e faz fade out
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        localStorage.setItem("attom_intro_seen", "true");
        setTerminado(true);
      }, 600);
    }, 700);

    return () => clearTimeout(timer);
  }, [mostrar, letrasVisiveis]);

  if (terminado) return null;
  if (!mostrar) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-600"
      style={{ opacity: fadeOut ? 0 : 1, transition: "opacity 0.6s ease" }}
    >
      <p className="text-4xl md:text-7xl font-semibold tracking-widest text-black">
        {TEXTO.split("").map((letra, i) => (
          <span
            key={i}
            style={{
              opacity: i < letrasVisiveis ? 1 : 0,
              transition: "opacity 0.15s ease",
            }}
          >
            {letra}
          </span>
        ))}
      </p>
    </div>
  );
}