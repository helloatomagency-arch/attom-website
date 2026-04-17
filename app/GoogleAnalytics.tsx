"use client";

import { useEffect } from "react";
import Script from "next/script";
import { useState } from "react";

export default function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("attom_cookie_consent");
    if (consent === "accepted") {
      setCookiesAccepted(true);
    }

    const handleStorage = (e: StorageEvent) => {
      if (e.key === "attom_cookie_consent" && e.newValue === "accepted") {
        setCookiesAccepted(true);
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  if (!cookiesAccepted) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
}