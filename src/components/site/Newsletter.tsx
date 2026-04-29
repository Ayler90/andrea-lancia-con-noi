import { useState } from "react";
import guidaMockup from "@/assets/guida-mockup.jpg";

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="newsletter" className="py-20 md:py-28">
      <div className="container-narrow">
        <div className="bg-primary text-primary-foreground rounded-3xl md:rounded-[2rem] overflow-hidden relative">
          {/* decorative shapes */}
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-secondary/15 blur-3xl pointer-events-none" />

          <div className="grid md:grid-cols-12 gap-0 items-center relative">
            {/* Mockup column */}
            <div className="md:col-span-5 p-8 sm:p-10 md:p-12 lg:p-14 flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-secondary/30 blur-3xl rounded-full" />
                <img
                  src={guidaMockup}
                  alt="Mockup della Guida Gratuita ai Lanci"
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="relative w-full h-auto drop-shadow-2xl rounded-2xl rotate-[-4deg] hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content column */}
            <div className="md:col-span-7 p-8 sm:p-10 md:p-14 lg:p-16">
              <p className="eyebrow mb-5 text-primary-foreground/70">
                03 — Guida gratuita
              </p>
              <h2 className="h-display text-4xl md:text-5xl lg:text-6xl">
                Scarica la <em>Guida</em> ai Lanci
              </h2>
              <p className="mt-6 text-base md:text-lg text-primary-foreground/85 leading-relaxed max-w-xl">
                Una guida pratica per capire come funzionano le fasi di un lancio e
                come strutturare il tuo — che sia il primo o il prossimo. Gratuita.
              </p>

              <ul className="mt-8 space-y-3 max-w-lg">
                {[
                  "Le 4 fasi di un lancio che converte",
                  "Errori comuni da evitare al primo lancio",
                  "Template ed esempi reali",
                ].map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-sm md:text-base text-primary-foreground/90"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              {submitted ? (
                <div className="mt-10 p-6 rounded-2xl bg-background/10 border border-background/20 max-w-xl">
                  <p className="text-lg">
                    Grazie! Controlla la tua email tra qualche istante. ✦
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="mt-10 flex flex-col sm:flex-row gap-3 max-w-xl"
                >
                  <input
                    required
                    type="email"
                    placeholder="La tua email"
                    className="flex-1 px-5 py-4 rounded-full bg-background/10 border border-background/25 placeholder:text-primary-foreground/55 text-primary-foreground focus:outline-none focus:bg-background/15 focus:border-background/40 transition"
                  />
                  <button
                    type="submit"
                    className="px-7 py-4 rounded-full bg-background text-primary font-semibold text-sm hover:bg-background/90 hover:-translate-y-0.5 transition whitespace-nowrap"
                  >
                    Scarica la guida →
                  </button>
                </form>
              )}

              <p className="mt-6 text-xs text-primary-foreground/65 max-w-md leading-relaxed">
                Iscrivendoti riceverai anche la Fun-Letter, la newsletter settimanale
                su lanci, email marketing e business online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
