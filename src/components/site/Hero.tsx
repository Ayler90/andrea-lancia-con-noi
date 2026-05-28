import heroImg from "@/assets/hero-andrea.jpg";

const AVATARS = [
  { initials: "AB", bg: "bg-[#156686]" },
  { initials: "MC", bg: "bg-[#A1C2CF]" },
  { initials: "GR", bg: "bg-[#C4D9DC]" },
  { initials: "LS", bg: "bg-[#6C9FA8]" },
];

export function Hero() {
  return (
    <section id="top" className="pt-36 md:pt-40">
      <div className="container-narrow">
        <div className="rounded-3xl md:rounded-[2rem] bg-surface overflow-hidden relative">

          {/* Animated glow orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl md:rounded-[2rem]">
            <div
              className="absolute w-72 h-72 rounded-full bg-[#156686]/12 blur-3xl top-[-20px] left-[-20px]"
              style={{ animation: "glow-float 7s ease-in-out infinite" }}
            />
            <div
              className="absolute w-56 h-56 rounded-full bg-[#C4D9DC]/30 blur-2xl top-[10%] left-[30%]"
              style={{ animation: "glow-float-alt 9s ease-in-out infinite", animationDelay: "2s" }}
            />
            <div
              className="absolute w-80 h-80 rounded-full bg-[#A1C2CF]/15 blur-3xl bottom-[-40px] left-[15%]"
              style={{ animation: "glow-float 11s ease-in-out infinite", animationDelay: "4s" }}
            />
            <div
              className="absolute w-44 h-44 rounded-full bg-[#156686]/10 blur-2xl bottom-[20%] left-[50%]"
              style={{ animation: "glow-float-alt 8s ease-in-out infinite", animationDelay: "1s" }}
            />
          </div>

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
    </section>
  );
}
