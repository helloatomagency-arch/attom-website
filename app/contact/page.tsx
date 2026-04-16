"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useApp } from "@/contexts/AppContext";

export default function ContactPage() {
  const { theme } = useApp();
  const d = theme === "dark";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    setSubmitError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
      projectDetails: String(formData.get("projectDetails") || ""),
      budget: String(formData.get("budget") || ""),
      timeline: String(formData.get("timeline") || ""),
    };
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const result = await res.json();
      if (!res.ok) { setSubmitError(result.error || "There was an error sending your message."); return; }
      setSubmitMessage("Your message has been sent successfully.");
      form.reset();
    } catch (error) {
      console.error(error);
      setSubmitError("There was an error sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = `w-full border-b py-3 outline-none text-base bg-transparent transition ${
    d ? "border-gray-700 focus:border-white text-white" : "border-gray-200 focus:border-black text-black"
  }`;

  return (
    <main className={`min-h-screen flex flex-col ${d ? "bg-black text-white" : "bg-white text-black"}`}>
      <Header />

      <section className="px-6 md:px-16 lg:px-24 pt-8 pb-32 grid md:grid-cols-2 gap-16 md:gap-24">
        <div className="max-w-md">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gray-400 mb-10">Contact</p>
          <h1 className="text-3xl md:text-4xl font-medium leading-[1.1] tracking-tight mb-8">
            Let's build something<br />
            <em className="font-light text-gray-400">that stands out.</em>
          </h1>
          <p className={`text-base md:text-lg leading-relaxed ${d ? "text-gray-400" : "text-gray-500"}`}>
            Tell us about your brand, goals and timeline. We'll get back to you within 1 to 2 business days.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
          {[
            { label: "Name *", name: "name", type: "text" },
            { label: "Email *", name: "email", type: "email" },
            { label: "Company / Brand *", name: "company", type: "text" },
            { label: "Estimated budget *", name: "budget", type: "text" },
            { label: "Timeline *", name: "timeline", type: "text" },
          ].map((field) => (
            <div key={field.name}>
              <label className={`block text-xs uppercase tracking-[0.15em] mb-2 ${d ? "text-gray-500" : "text-gray-400"}`}>{field.label}</label>
              <input name={field.name} type={field.type} required className={inputClass} />
            </div>
          ))}

          <div>
            <label className={`block text-xs uppercase tracking-[0.15em] mb-2 ${d ? "text-gray-500" : "text-gray-400"}`}>What are you looking to build? *</label>
            <textarea name="projectDetails" rows={4} required className={`${inputClass} resize-none`} />
          </div>

          <label className={`flex items-start gap-3 text-sm leading-relaxed ${d ? "text-gray-400" : "text-gray-500"}`}>
            <input type="checkbox" required className="mt-1 h-4 w-4 shrink-0" />
            <span>
              I agree to the processing of my personal data in accordance with the{" "}
              <a href="/privacy-policy" className="underline underline-offset-4">Privacy Policy</a>.
            </span>
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-3 text-sm font-medium transition hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed ${d ? "bg-white text-black" : "bg-black text-white"}`}
          >
            {isSubmitting ? "Sending..." : "Let's build your brand →"}
          </button>

          {submitMessage && <p className="text-sm text-gray-400">{submitMessage}</p>}
          {submitError && <p className="text-sm text-red-500">{submitError}</p>}
        </form>
      </section>

      <Footer />
    </main>
  );
}