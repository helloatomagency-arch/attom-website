"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useApp } from "@/contexts/AppContext";

export default function TermsAndConditions() {
  const { theme } = useApp();
  const d = theme === "dark";

  return (
    <main className={`min-h-screen flex flex-col ${d ? "bg-black text-white" : "bg-white text-black"}`}>
      <Header />

      <section className="px-6 md:px-16 lg:px-24 pt-8 pb-32 max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gray-400 mb-12">Legal</p>

        <h1 className="text-4xl md:text-5xl font-medium tracking-[-0.02em] mb-12">Terms & Conditions</h1>

        <p className={`mb-8 text-lg leading-[1.75] ${d ? "text-gray-400" : "text-gray-600"}`}>
          By using this website, you agree to the following Terms & Conditions.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-3">Use of this website</h2>
        <p className={`mb-8 text-lg leading-[1.75] ${d ? "text-gray-400" : "text-gray-600"}`}>
          This website is provided for general information about ATTOM Agency and its services.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-3">Intellectual property</h2>
        <p className={`mb-8 text-lg leading-[1.75] ${d ? "text-gray-400" : "text-gray-600"}`}>
          All content on this website, including text, branding and visual elements, belongs to ATTOM Agency unless otherwise stated.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-3">Limitation of liability</h2>
        <p className={`mb-8 text-lg leading-[1.75] ${d ? "text-gray-400" : "text-gray-600"}`}>
          We do our best to keep the information on this website accurate and up to date, but we do not guarantee completeness or accuracy at all times.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-3">External links</h2>
        <p className={`mb-8 text-lg leading-[1.75] ${d ? "text-gray-400" : "text-gray-600"}`}>
          This website may contain links to third-party websites. We are not responsible for their content or privacy practices.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-3">Contact</h2>
        <p className={`text-lg leading-[1.75] ${d ? "text-gray-400" : "text-gray-600"}`}>
          For any questions regarding these terms, contact us at{" "}
          <a href="mailto:hello.atomagency@gmail.com" className={`underline underline-offset-4 ${d ? "hover:text-white" : "hover:text-black"} transition`}>
            hello.atomagency@gmail.com
          </a>
        </p>
      </section>

      <Footer />
    </main>
  );
}