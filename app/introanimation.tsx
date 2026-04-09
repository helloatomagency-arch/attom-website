"use client";

import { useEffect, useState } from "react";

const LETRAS = ["A", "T", "T", "O", "M", " ", "A", "G", "E", "N", "C", "Y"];

export default function IntroAnimation() {
  const [letraAtual, setLetraAtual] = useState(0);
  const [mostrarCompleto, setMostrarCompleto] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [terminado, setTerminado] = useState(false);

  useEffect(() => {
    if (letraAtual < LETRAS.length) {
      const timer = setTimeout(() => {
        setLetraAtual((prev) => prev + 1);
      }, 120);
      return () => clearTimeout(timer);
    }

    // Quando acabou de mostrar todas as letras, mostra o texto completo
    const timer1 = setTimeout(() => {
      setMostrarCompleto(true);
    }, 100);

    // Depois faz fade out
    const timer2 = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setTerminado(true), 600);
    }, 900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [letraAtual]);

  if (terminado) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
      style={{ opacity: fadeOut ? 0 : 1, transition: "opacity 0.6s ease" }}
    >
      <p style={{
        fontSize: "clamp(30px, 7vw, 100px)",
        fontWeight: 700,
        letterSpacing: "0.05em",
        color: "black",
        whiteSpace: "nowrap",
      }}>
        {mostrarCompleto
          ? "ATTOM AGENCY"
          : LETRAS[letraAtual - 1] === " " || letraAtual === 0
          ? "\u00A0"
          : LETRAS[letraAtual - 1]}
      </p>
    </div>
  );
}