import blob from "@/assets/blob.jpg";

export function ChiSono() {
  return (
    <section id="chi-sono" className="py-20 md:py-32">
      <div className="container-narrow grid md:grid-cols-12 gap-10 md:gap-12 items-start">
        <div className="md:col-span-5 md:sticky md:top-32">
          <p className="eyebrow mb-4">Chi sono</p>
          <h2 className="h-display text-4xl md:text-5xl lg:text-6xl">
            Sono Andrea Bonomo, <em>funnel e launch strategist.</em>
          </h2>
          <div className="mt-10 hidden md:block relative aspect-square max-w-xs">
            <img
              src={blob}
              alt=""
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <p className="text-lg md:text-xl leading-relaxed text-foreground/85">
            Gestisco lanci da oltre 6 anni e, conti alla mano, ne ho gestiti 50+ per coach,
            consulenti e creator, generando più di 700.000€ di fatturato totale per i miei clienti.
          </p>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-foreground/85">
            Il mio lavoro è semplice: prendo la tua offerta, costruiamo insieme la strategia, e la
            portiamo sul mercato nel modo più efficace possibile. Senza che tu debba fare tutto da
            solo.
          </p>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-foreground/85">
            Non mi occupo solo della parte tecnica. Ti accompagno in ogni fase, dalla definizione
            dell'offerta alla chiusura del carrello, così sai sempre dove sei e cosa succederà dopo.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 md:gap-8 py-8 border-y border-border">
            <div>
              <p className="h-display text-3xl md:text-4xl text-primary">50+</p>
              <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">
                Lanci gestiti
              </p>
            </div>
            <div>
              <p className="h-display text-3xl md:text-4xl text-primary">6+</p>
              <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">
                Anni di esperienza
              </p>
            </div>
            <div>
              <p className="h-display text-3xl md:text-4xl text-primary">700k€</p>
              <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">
                Fatturato generato
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm text-foreground/60 leading-relaxed">
            Alcuni settori in cui ho gestito lanci:{" "}
            <span className="text-foreground/80">
              Video making · Effetti speciali SFX · Make up · SMM · Allattamento · Trattamenti al
              viso · Pavimento pelvico · Fitness
            </span>
          </p>

          <a
            href="#percorsi"
            className="inline-flex items-center gap-2 mt-10 text-sm font-medium text-primary hover:gap-3 transition-all"
          >
            Scopri i miei percorsi <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
