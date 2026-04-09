"use client";

import { useEffect, useState } from "react";

const TEXTO = "ATTOM AGENCY";

export default function IntroAnimation() {
  const [letrasVisiveis, setLetrasVisiveis] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [terminado, setTerminado] = useState(false);

  useEffect(() => {
    if (letrasVisiveis < TEXTO.length) {
      const timer = setTimeout(() => {
        setLetrasVisiveis((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setTerminado(true);
      }, 600);
    }, 700);

    return () => clearTimeout(timer);
  }, [letrasVisiveis]);

  if (terminado) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
      style={{ opacity: fadeOut ? 0 : 1, transition: "opacity 0.6s ease" }}
    >
      <p style={{
        fontSize: "clamp(40px, 10vw, 140px)",
        fontWeight: 700,
        letterSpacing: "0.1em",
        color: "black",
        whiteSpace: "nowrap",
      }}>
        {TEXTO.split("").map((letra, i) => (
          <span
            key={i}
            style={{
              opacity: i < letrasVisiveis ? 1 : 0,
              transition: "opacity 0.2s ease",
              display: "inline-block",
            }}
          >
            {letra === " " ? "\u00A0" : letra}
          </span>
        ))}
      </p>
    </div>
  );
}