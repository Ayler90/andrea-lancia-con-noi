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

        {/* LEFT column — full image with text overlay */}
        <div className="md:col-span-5">
          <div className="md:sticky md:top-24 relative overflow-hidden rounded-3xl min-h-[480px]">
            <img
              src={aereiImg}
              alt="Andrea Bonomo"
              loading="lazy"
              width={1024}
              height={1024}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d4f68]/90 via-[#156686]/35 to-transparent" />
            {/* Text inside */}
            <div className="relative z-10 flex flex-col justify-end p-8 md:p-10 min-h-[480px]">
              <p className="eyebrow text-white/60 mb-4">Chi sono</p>
              <h2 className="h-display text-3xl md:text-4xl lg:text-5xl text-white">
                Sono Andrea Bonomo,{" "}
                <em className="text-[#C4D9DC]">funnel e launch strategist.</em>
              </h2>
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
