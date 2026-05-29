import aereiImg from "@/assets/Foto con aerei senza sfondo.png";

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
    <section id="chi-sono" className="relative min-h-screen flex flex-col md:flex-row">

      {/* LEFT column — flush to left edge, full section height, image bottom-anchored */}
      <div className="relative md:w-5/12 min-h-[60vw] md:min-h-screen flex-shrink-0">
        <img
          src={aereiImg}
          alt="Andrea Bonomo con gli aerei"
          loading="lazy"
          width={1024}
          height={1024}
          className="absolute inset-0 w-full h-full object-contain object-bottom"
          style={{ transform: "translateY(-15%)" }}
        />
        {/* White gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
          style={{ background: "linear-gradient(to top, white 45%, rgba(255,255,255,0.7) 65%, transparent)" }} />
        {/* Text overlaid at bottom */}
        <div className="absolute bottom-0 left-0 right-0 pb-8 px-8 md:px-12">
          <p className="eyebrow text-[#156686]/70 mb-2">Chi sono</p>
          <h2 className="h-display text-3xl md:text-4xl lg:text-5xl leading-tight">
            Sono Andrea Bonomo,{" "}
            <em className="text-[#156686]">funnel e launch strategist.</em>
          </h2>
        </div>
      </div>

      {/* RIGHT column — padded, vertically centered */}
      <div className="flex-1 flex items-center py-20 md:py-32 pr-5 md:pr-10 lg:pr-16 pl-8 md:pl-12 lg:pl-16">
        <div className="w-full max-w-xl">
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

