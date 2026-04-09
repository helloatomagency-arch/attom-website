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
      }, 80);
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
      <div className="relative flex items-center justify-center" style={{ width: "90vw", height: "40vh" }}>
        {TEXTO.split("").map((letra, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              fontSize: "clamp(80px, 18vw, 260px)",
              fontWeight: 700,
              color: "black",
              opacity: i < letrasVisiveis ? 1 : 0,
              transition: "opacity 0.15s ease",
              letterSpacing: "-0.02em",
            }}
          >
            {letra}
          </span>
        ))}
      </div>
    </div>
  );
}