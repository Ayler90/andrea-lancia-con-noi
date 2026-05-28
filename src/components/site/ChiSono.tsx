import aereiImg from "@/assets/Foto con aerei.jpg";

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

        {/* LEFT sticky column */}
        <div className="md:col-span-5 md:sticky md:top-32">
          <p className="eyebrow mb-4">Chi sono</p>
          <h2 className="h-display text-4xl md:text-5xl lg:text-6xl">
            Sono Andrea Bonomo,{" "}
            <em className="text-[#156686]">funnel e launch strategist.</em>
          </h2>

          {/* Image: oblique, border, floating, badge */}
          <div className="mt-10 hidden md:block relative">
            <div
              className="relative rounded-2xl overflow-hidden border-[6px] border-[#f0f0f0] shadow-xl max-w-xs"
              style={{ animation: "img-float 5s ease-in-out infinite" }}
            >
              <img
                src={aereiImg}
                alt="Andrea Bonomo"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full h-full object-cover aspect-square"
              />
              {/* Badge inside image */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-md whitespace-nowrap">
                <p className="text-xs font-semibold text-[#156686] tracking-wide">
                  Funnel e Launch Strategist
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT column */}
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

          {/* Stats box */}
          <div
            className="mt-10 grid grid-cols-3 gap-6 md:gap-8 py-8 px-6 rounded-2xl bg-[#156686]/8 border border-[#156686]/15"
            style={{ boxShadow: "inset 0 0 40px -10px rgba(21,102,134,0.12), inset 0 1px 0 rgba(196,217,220,0.3)" }}
          >
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

          <a
            href="#percorsi"
            className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 mt-10 inline-flex"
          >
            Scopri i miei percorsi →
          </a>
        </div>
      </div>
    </section>
  );
}
