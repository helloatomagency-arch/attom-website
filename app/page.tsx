"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [cookieChoice, setCookieChoice] = useState<string | null>(null);

  useEffect(() => {
    const savedChoice = localStorage.getItem("attom_cookie_consent");
    if (savedChoice) {
      setCookieChoice(savedChoice);
    }
  }, []);

  const handleCookieChoice = (choice: "accepted" | "rejected") => {
    localStorage.setItem("attom_cookie_consent", choice);
    setCookieChoice(choice);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const company = String(formData.get("company") || "");
    const projectDetails = String(formData.get("projectDetails") || "");
    const budget = String(formData.get("budget") || "");
    const timeline = String(formData.get("timeline") || "");

    const message = `
Company / Brand: ${company}
What are you looking to build: ${projectDetails}
Estimated budget: ${budget}
Timeline: ${timeline}
    `.trim();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const result = await res.json();

      if (result.success) {
        alert("Message sent successfully.");
        form.reset();
      } else {
        alert("There was an error sending your message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("There was an error sending your message. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-white text-black px-6 py-8 md:px-12">
      <header className="flex items-center justify-between mb-24">
        <p className="text-xl font-semibold">ATTOM Agency</p>

        <nav className="flex items-center gap-8 text-sm uppercase tracking-[0.15em]">
          <a href="#about" className="hover:opacity-60">
            ABOUT
          </a>
          <a href="#services" className="hover:opacity-60">
            WHAT WE DO
          </a>
          <a href="#contact" className="hover:opacity-60">
            CONTACT
          </a>
        </nav>
      </header>

      <section className="max-w-5xl mb-32">
        <p className="text-sm mb-6 uppercase tracking-[0.2em] text-gray-500">
          Creative Agency
        </p>

        <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] max-w-5xl mb-8">
          Building brands that don’t blend in.
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
          Creative direction, brand strategy and digital growth for brands ready
          to stand out and scale.
        </p>

        <div className="mt-8">
          <a
            href="#contact"
            className="inline-block bg-black text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            Let’s build your brand
          </a>
        </div>
      </section>

      <section
        id="about"
        className="border-t border-gray-200 pt-16 pb-24 grid md:grid-cols-2 gap-12"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">
            About ATTOM
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-2xl md:text-3xl leading-tight font-medium">
            We build brands with intention.
          </p>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            From strategy to execution, every decision is designed to create
            clarity, consistency and long-term value.
          </p>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            ATTOM is a creative agency focused on building strong, distinctive
            brands that stand out and grow in a competitive digital landscape.
          </p>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            We work with a select number of partners, taking a long-term
            approach to create brands built to last.
          </p>
        </div>
      </section>

      <section
        id="services"
        className="border-t border-gray-200 pt-16 pb-24 grid md:grid-cols-2 gap-12"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">
            What we do
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-medium mb-3">Creative Direction</h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
              We define visual language, art direction and creative systems that
              give brands a strong and consistent identity.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-3">Brand Strategy</h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
              We build positioning, messaging and narrative clarity to create
              brands with purpose and direction.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-3">Digital Growth</h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
              We design and optimise digital experiences focused on performance,
              consistency and scalable growth.
            </p>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-gray-200 pt-16 pb-24 grid md:grid-cols-2 gap-12"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">
            Contact
          </p>

          <h2 className="text-3xl md:text-4xl font-medium leading-tight max-w-md">
            Let’s build something that stands out.
          </h2>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed mt-6 max-w-md">
            Tell us about your brand, goals and timeline. We’ll get back to you
            with the next steps.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 max-w-xl">
          <div>
            <label className="block text-sm mb-2">Name *</label>
            <input
              name="name"
              type="text"
              required
              className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Email *</label>
            <input
              name="email"
              type="email"
              required
              className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Company / Brand *</label>
            <input
              name="company"
              type="text"
              required
              className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">
              What are you looking to build? *
            </label>
            <textarea
              name="projectDetails"
              rows={5}
              required
              className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-black resize-none"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Estimated budget *</label>
            <input
              name="budget"
              type="text"
              required
              className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Timeline *</label>
            <input
              name="timeline"
              type="text"
              required
              className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <label className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
            <input
              type="checkbox"
              required
              className="mt-1 h-4 w-4 border-gray-300"
            />
            <span>
              I agree to the processing of my personal data in accordance with
              the{" "}
              <a href="/privacy-policy" className="underline underline-offset-4">
                Privacy Policy
              </a>
              .
            </span>
          </label>

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            Let’s build your brand
          </button>
        </form>
      </section>

      <footer className="border-t border-gray-200 pt-8 pb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-gray-600">
        <p>© 2026 ATTOM Agency. All rights reserved.</p>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href="/privacy-policy"
            className="hover:text-black transition underline-offset-4 hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="/cookie-policy"
            className="hover:text-black transition underline-offset-4 hover:underline"
          >
            Cookie Policy
          </a>
          <a
            href="/terms-and-conditions"
            className="hover:text-black transition underline-offset-4 hover:underline"
          >
            Terms & Conditions
          </a>
        </div>
      </footer>

      {!cookieChoice && (
        <div className="fixed bottom-6 left-6 right-6 md:left-12 md:right-12 z-50 border border-gray-200 bg-white p-5 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-sm font-medium mb-2">Cookies</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                We use cookies to improve your browsing experience and analyse
                website traffic. You can accept or reject non-essential cookies.
                Read our{" "}
                <a href="/cookie-policy" className="underline underline-offset-4">
                  Cookie Policy
                </a>{" "}
                for more information.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => handleCookieChoice("rejected")}
                className="border border-gray-300 px-5 py-3 text-sm font-medium hover:border-black transition"
              >
                Reject
              </button>
              <button
                onClick={() => handleCookieChoice("accepted")}
                className="bg-black text-white px-5 py-3 text-sm font-medium hover:opacity-90 transition"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}