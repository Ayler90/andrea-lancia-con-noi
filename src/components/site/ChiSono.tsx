import blob from "@/assets/blob.jpg";

const settori = [
  "Video making",
  "Effetti speciali SFX",
  "Make up",
  "SMM",
  "Allattamento",
  "Trattamenti al viso",
  "Pavimento pelvico",
  "Fitness",
];

export function ChiSono() {
  return (
    <section id="chi-sono" className="py-20 md:py-32">
      <div className="container-narrow grid md:grid-cols-12 gap-10 md:gap-12 items-start">
        <div className="md:col-span-5 md:sticky md:top-32">
          <p className="eyebrow mb-4">Chi sono</p>
          <h2 className="h-display text-4xl md:text-5xl lg:text-6xl">
            Sono Andrea Bonomo,{" "}
            <em className="text-[#156686]">funnel e launch strategist.</em>
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
          <p className="text-sm md:text-base leading-relaxed text-foreground/85">
            Gestisco lanci da <strong>oltre 6 anni</strong> e, conti alla mano, ne ho gestiti{" "}
            <strong>50+</strong> per coach, consulenti e creator, generando più di{" "}
            <strong>700.000€ di fatturato totale</strong> per i miei clienti.
          </p>
          <p className="mt-5 text-sm md:text-base leading-relaxed text-foreground/85">
            Il mio lavoro è semplice: prendo la tua offerta, costruiamo{" "}
            <strong>insieme la strategia</strong>, e la portiamo sul mercato nel modo più efficace
            possibile. Senza che tu debba fare tutto da solo.
          </p>
          <p className="mt-5 text-sm md:text-base leading-relaxed text-foreground/85">
            Non mi occupo solo della parte tecnica. Ti accompagno{" "}
            <strong>in ogni fase</strong>, dalla definizione dell'offerta alla chiusura del carrello,
            così sai sempre dove sei e cosa succederà dopo.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 md:gap-8 py-8 border-y border-border">
            <div>
              <p className="h-display text-3xl md:text-4xl text-[#156686]">50+</p>
              <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">
                Lanci gestiti
              </p>
            </div>
            <div>
              <p className="h-display text-3xl md:text-4xl text-[#156686]">6+</p>
              <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">
                Anni di esperienza
              </p>
            </div>
            <div>
              <p className="h-display text-3xl md:text-4xl text-[#156686]">700k€</p>
              <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">
                Fatturato generato
              </p>
            </div>
          </div>

          {/* Settori */}
          <div className="mt-8">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
              Alcuni settori in cui ho gestito lanci
            </p>
            <div className="flex flex-wrap gap-2">
              {settori.map((nome) => (
                <span
                  key={nome}
                  className="text-xs font-medium text-[#156686] bg-[#C4D9DC]/30 border border-[#156686]/25 rounded-full px-4 py-1.5"
                >
                  {nome}
                </span>
              ))}
            </div>
          </div>

          <a href="#percorsi" className="cta-ghost text-primary mt-10">
            Scopri i miei percorsi <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
