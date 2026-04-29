import { useState } from "react";

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="newsletter" className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* decorative shape */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-secondary/15 blur-3xl pointer-events-none" />

      <div className="container-narrow relative">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-5 text-primary-foreground/70">04 — Guida gratuita</p>
          <h2 className="h-display text-4xl md:text-5xl lg:text-6xl">
            Scarica la <em>Guida Gratuita</em> ai Lanci
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/85 leading-relaxed">
            Una guida pratica per capire come funzionano le fasi di un lancio e come strutturare
            il tuo — che sia il primo o il prossimo. Gratuita.
          </p>

          {submitted ? (
            <div className="mt-10 p-6 rounded-2xl bg-background/10 border border-background/20">
              <p className="text-lg">Grazie! Controlla la tua email tra qualche istante. ✦</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="mt-10 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
            >
              <input
                required
                type="text"
                placeholder="Il tuo nome"
                className="flex-1 px-5 py-4 rounded-full bg-background/10 border border-background/25 placeholder:text-primary-foreground/55 text-primary-foreground focus:outline-none focus:bg-background/15 focus:border-background/40 transition"
              />
              <input
                required
                type="email"
                placeholder="La tua email"
                className="flex-1 px-5 py-4 rounded-full bg-background/10 border border-background/25 placeholder:text-primary-foreground/55 text-primary-foreground focus:outline-none focus:bg-background/15 focus:border-background/40 transition"
              />
              <button
                type="submit"
                className="px-7 py-4 rounded-full bg-background text-primary font-medium text-sm hover:bg-background/90 transition whitespace-nowrap"
              >
                Scarica la guida
              </button>
            </form>
          )}

          <p className="mt-6 text-xs text-primary-foreground/65 max-w-md mx-auto leading-relaxed">
            Iscrivendoti riceverai anche la Fun-Letter, la newsletter settimanale su lanci, email
            marketing e business online.
          </p>
        </div>
      </div>
    </section>
  );
}
