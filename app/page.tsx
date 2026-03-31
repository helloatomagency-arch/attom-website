"use client";

export default function Home() {
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.success) {
      alert("Mensagem enviada 🚀");
      form.reset();
    } else {
      alert("Erro ao enviar. Tenta novamente.");
    }
  };

  return (
    <main className="min-h-screen bg-white text-black px-6">
      
      {/* HEADER */}
      <header className="flex items-center justify-between py-6">
        <p className="text-xl font-semibold">ATTOM Agency</p>

        <nav className="flex gap-8 text-sm">
          <a href="#about" className="hover:opacity-60">About</a>
          <a href="#services" className="hover:opacity-60">What we do</a>
          <a href="#contact" className="hover:opacity-60">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-5xl mt-20">
        <p className="text-sm uppercase tracking-[0.2em] mb-6">
          Creative Agency
        </p>

        <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-6">
          Building brands that don’t blend in.
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Creative direction, brand strategy and digital growth for brands ready
          to stand out and scale.
        </p>

        <a
          href="#contact"
          className="bg-black text-white px-6 py-3 inline-block"
        >
          Let’s build your brand
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="mt-32 max-w-4xl">
        <h2 className="text-3xl font-semibold mb-6">About</h2>
        <p className="text-gray-600">
          We build brands with intention. From strategy to execution, we help
          businesses grow with clarity and impact.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="mt-32 max-w-4xl">
        <h2 className="text-3xl font-semibold mb-6">What we do</h2>
        <p className="text-gray-600">
          Brand strategy, creative direction, content and digital growth. We
          focus on building brands that stand out and scale.
        </p>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="mt-32 max-w-xl">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          <input
            name="name"
            type="text"
            placeholder="Your name"
            required
            className="border p-3"
          />

          <input
            name="email"
            type="email"
            placeholder="Your email"
            required
            className="border p-3"
          />

          <textarea
            name="message"
            placeholder="Your message"
            required
            className="border p-3"
          />

          <button
            type="submit"
            className="bg-black text-white py-3"
          >
            Send message
          </button>

        </form>
      </section>

    </main>
  );
}