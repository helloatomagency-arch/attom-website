"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useApp } from "@/contexts/AppContext";

export default function PrivacyPolicy() {
  const { theme } = useApp();
  const d = theme === "dark";

  return (
    <main className={`min-h-screen flex flex-col ${d ? "bg-black text-white" : "bg-white text-black"}`}>
      <Header />

      <section className="px-6 md:px-16 lg:px-24 pt-8 pb-32 max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gray-400 mb-12">Legal</p>

        <h1 className="text-4xl md:text-5xl font-medium tracking-[-0.02em] mb-12">Privacy Policy</h1>

        <p className={`mb-8 text-lg leading-[1.75] ${d ? "text-gray-400" : "text-gray-600"}`}>
          ATTOM Agency respects your privacy and is committed to protecting your personal data.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-3">Information we collect</h2>
        <p className={`mb-8 text-lg leading-[1.75] ${d ? "text-gray-400" : "text-gray-600"}`}>
          We may collect your name, email address, company information and any details you provide through our contact forms.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-3">How we use your data</h2>
        <p className={`mb-8 text-lg leading-[1.75] ${d ? "text-gray-400" : "text-gray-600"}`}>
          Your information is used to respond to inquiries, provide services, and improve our website.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-3">Data protection</h2>
        <p className={`mb-8 text-lg leading-[1.75] ${d ? "text-gray-400" : "text-gray-600"}`}>
          We implement appropriate security measures to protect your personal data.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-3">Your rights</h2>
        <p className={`mb-8 text-lg leading-[1.75] ${d ? "text-gray-400" : "text-gray-600"}`}>
          You have the right to access, correct or delete your personal data at any time.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-3">Contact</h2>
        <p className={`text-lg leading-[1.75] ${d ? "text-gray-400" : "text-gray-600"}`}>
          For any privacy-related questions, contact us at{" "}
          <a href="mailto:hello.atomagency@gmail.com" className={`underline underline-offset-4 ${d ? "hover:text-white" : "hover:text-black"} transition`}>
            hello.atomagency@gmail.com
          </a>
        </p>
      </section>

      <Footer />
    </main>
  );
}