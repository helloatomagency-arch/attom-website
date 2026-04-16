"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const LETRAS = ["A", "T", "T", "O", "M", " ", "A", "G", "E", "N", "C", "Y"];

export default function IntroAnimation() {
  const pathname = usePathname();
  const [letraAtual, setLetraAtual] = useState(0);
  const [mostrarCompleto, setMostrarCompleto] = useState(false);
  const [mostrarBarra, setMostrarBarra] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [terminado, setTerminado] = useState(false);
  const [deveCorrer, setDeveCorrer] = useState(false);

  useEffect(() => {
    // só corre na homepage
    if (pathname !== "/") {
      setTerminado(true);
      return;
    }

    // só corre se ainda não correu nesta sessão
    const jaCorreu = sessionStorage.getItem("attom_intro_done");
    if (jaCorreu) {
      setTerminado(true);
      return;
    }

    setDeveCorrer(true);
  }, [pathname]);

  useEffect(() => {
    if (!deveCorrer) return;

    if (letraAtual < LETRAS.length) {
      const timer = setTimeout(() => {
        setLetraAtual((prev) => prev + 1);
      }, 120);
      return () => clearTimeout(timer);
    }

    const timer1 = setTimeout(() => {
      setMostrarCompleto(true);
    }, 100);

    const timerBar = setTimeout(() => {
      setMostrarBarra(true);
    }, 250);

    const timer2 = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        sessionStorage.setItem("attom_intro_done", "true");
        setTerminado(true);
      }, 600);
    }, 1200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timerBar);
      clearTimeout(timer2);
    };
  }, [letraAtual, deveCorrer]);

  if (terminado) return null;
  if (!deveCorrer) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
      style={{ opacity: fadeOut ? 0 : 1, transition: "opacity 0.6s ease" }}
    >
      <div style={{ position: "relative", display: "inline-block" }}>
        <p
          style={{
            fontSize: "clamp(30px, 7vw, 100px)",
            fontWeight: 700,
            letterSpacing: "0.05em",
            color: "black",
            whiteSpace: "nowrap",
            margin: 0,
          }}
        >
          {mostrarCompleto
            ? "ATTOM AGENCY"
            : LETRAS[letraAtual - 1] === " " || letraAtual === 0
            ? "\u00A0"
            : LETRAS[letraAtual - 1]}
        </p>

        {mostrarCompleto && (
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "52%",
              transform: "translate(-50%, -50%)",
              height: "10px",
              width: mostrarBarra ? "100%" : "0%",
              backgroundColor: "white",
              transition: "width 0.8s ease",
              pointerEvents: "none",
            }}
          />
        )}
      </div>
    </div>
  );
}