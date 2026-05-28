import heroImg from "@/assets/Foto al telefono.jpg";

const AVATARS = [
  { initials: "AB", bg: "bg-[#156686]" },
  { initials: "MC", bg: "bg-[#A1C2CF]" },
  { initials: "GR", bg: "bg-[#C4D9DC]" },
  { initials: "LS", bg: "bg-[#6C9FA8]" },
];

export function Hero() {
  return (
    <section id="top" className="pt-24 md:pt-28 relative overflow-hidden">
      {/* Glow orbs in the WHITE padding area — top strip and bottom strip around the card.
          Section has overflow-hidden so they clip at the section boundary. */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-left — in the top padding strip (above the card) */}
        <div
          className="absolute w-44 h-44 rounded-full bg-[#156686]/14 blur-3xl"
          style={{ top: "-2%", left: "4%", animation: "orb-drift-1 11s ease-in-out infinite" }}
        />
        {/* Top-right — in the top padding strip */}
        <div
          className="absolute w-36 h-36 rounded-full bg-[#C4D9DC]/28 blur-2xl"
          style={{ top: "-1%", right: "6%", animation: "orb-drift-3 10s ease-in-out infinite", animationDelay: "3s" }}
        />
        {/* Bottom-left — below the card */}
        <div
          className="absolute w-48 h-48 rounded-full bg-[#A1C2CF]/18 blur-3xl"
          style={{ bottom: "-4%", left: "10%", animation: "orb-drift-2 13s ease-in-out infinite", animationDelay: "1s" }}
        />
        {/* Bottom-right — below the card */}
        <div
          className="absolute w-40 h-40 rounded-full bg-[#156686]/12 blur-2xl"
          style={{ bottom: "-3%", right: "12%", animation: "orb-drift-4 9s ease-in-out infinite", animationDelay: "5s" }}
        />
      </div>

      <div className="w-full max-w-[1360px] mx-auto px-3 md:px-5 relative z-10">
        {/* Glow below the card */}
        <div className="relative">
          <div className="absolute inset-x-12 -bottom-10 h-28 bg-[#156686]/25 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute inset-x-32 -bottom-4 h-16 bg-[#C4D9DC]/40 blur-2xl rounded-full pointer-events-none" />

          {/* Gray card — no glow orbs inside */}
          <div className="rounded-3xl md:rounded-[2rem] bg-surface overflow-hidden relative z-10">
            <div className="grid md:grid-cols-12 gap-0 items-stretch">
              {/* Text */}
              <div className="md:col-span-7 p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-between min-h-[520px] md:min-h-[620px] relative">
                <div />

                <h1 className="h-display mt-10 md:mt-0 leading-[1.1]">
                  <span className="block text-[1.375rem] sm:text-[1.625rem] md:text-[2rem] lg:text-[2.375rem] font-bold">
                    Faccio{" "}
                    <span className="text-[#156686]">lanci</span>{" "}
                    e costruisco{" "}
                    <span className="text-[#156686]">funnel di vendita</span>.
                  </span>
                  <em className="block text-[1.875rem] sm:text-[2.375rem] md:text-[3rem] lg:text-[3.75rem] mt-2">
                    Lanciamo la tua prossima{" "}
                    <span className="text-[#156686]">offerta?</span>
                  </em>
                </h1>

                <div className="mt-6 md:mt-8">
                  <p className="text-sm md:text-base text-foreground/70 max-w-xl leading-relaxed">
                    Lo so che lanciare ti spaventa, ci sono mille cose da controllare e non sai da
                    dove iniziare. Facciamolo insieme: mi occupo io della parte tecnica e strategica,
                    tu ci metti creatività ed energia. Zero stress, zero ansia.
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
                    <a
                      href="#percorsi"
                      className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5"
                    >
                      Scopri i miei percorsi
                    </a>
                    <a href="#newsletter" className="cta-ghost text-foreground">
                      Scarica la guida gratuita ai lanci
                      <span className="transition-transform group-hover:translate-x-0.5">→</span>
                    </a>
                  </div>

                  {/* Social proof strip */}
                  <div className="mt-8 flex items-center gap-4">
                    <div className="flex items-center">
                      {AVATARS.map((a, i) => (
                        <div
                          key={i}
                          className={`w-9 h-9 rounded-full ${a.bg} border-2 border-surface flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0`}
                          style={{ marginLeft: i > 0 ? "-10px" : "0", zIndex: AVATARS.length - i }}
                        >
                          {a.initials}
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-foreground/70">
                      <strong className="text-foreground">+90</strong> professionisti hanno già
                      lanciato con me
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="md:col-span-5 relative min-h-[320px] md:min-h-[620px]">
                <img
                  src={heroImg}
                  alt="Andrea Bonomo, Funnel e Launch Strategist"
                  width={1280}
                  height={1280}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
