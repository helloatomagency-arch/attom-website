"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useApp } from "@/contexts/AppContext";

export default function CookiePolicy() {
  const { theme } = useApp();
  const d = theme === "dark";

  return (
    <main className={`min-h-screen flex flex-col ${d ? "bg-black text-white" : "bg-white text-black"}`}>
      <Header />

      <section className="px-6 md:px-16 lg:px-24 pt-8 pb-32 max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gray-400 mb-12">Cookie Policy</p>

        <h1 className="text-4xl md:text-5xl font-medium tracking-[-0.02em] mb-12">Cookie Policy</h1>

        <p className={`mb-8 text-lg leading-[1.75] ${d ? "text-gray-400" : "text-gray-600"}`}>
          This website uses cookies to improve your browsing experience and help us understand how the site is used.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-3">What are cookies?</h2>
        <p className={`mb-8 text-lg leading-[1.75] ${d ? "text-gray-400" : "text-gray-600"}`}>
          Cookies are small text files stored on your device when you visit a website.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-3">How we use cookies</h2>
        <p className={`mb-8 text-lg leading-[1.75] ${d ? "text-gray-400" : "text-gray-600"}`}>
          We may use cookies to remember preferences, improve performance and analyse website traffic.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-3">Your choices</h2>
        <p className={`mb-8 text-lg leading-[1.75] ${d ? "text-gray-400" : "text-gray-600"}`}>
          You can accept or reject non-essential cookies through the cookie banner shown on this website.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-3">Contact</h2>
        <p className={`text-lg leading-[1.75] ${d ? "text-gray-400" : "text-gray-600"}`}>
          For any questions about cookies, contact us at{" "}
          <a href="mailto:hello.atomagency@gmail.com" className={`underline underline-offset-4 ${d ? "hover:text-white" : "hover:text-black"} transition`}>
            hello.atomagency@gmail.com
          </a>
        </p>
      </section>

      <Footer />
    </main>
  );
}