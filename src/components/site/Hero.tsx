import heroImg from "@/assets/Foto al telefono.jpg";
import av1 from "@/assets/489209743_1013582267367313_7979056182020525523_n.jpg";
import av2 from "@/assets/611355146_18053563283679070_9100361660993615423_n.jpg";
import av3 from "@/assets/631692874_18511332868073523_2990688616745288258_n.jpg";
import av4 from "@/assets/658145434_18521514847079426_4575213628711787897_n.jpg";

const AVATARS = [av1, av2, av3, av4];

export function Hero() {
  return (
    <section id="top" className="pt-24 md:pt-28 pb-14 md:pb-20 relative">
      {/* Glow orbs — 5x bigger, slow drift across full section */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[260px] h-[260px] rounded-full bg-[#156686]/30 blur-3xl"
          style={{ top: "5%", left: "3%", animation: "orb-drift-1 70s ease-in-out infinite" }}
        />
        <div
          className="absolute w-[240px] h-[240px] rounded-full bg-[#A1C2CF]/35 blur-3xl"
          style={{ bottom: "8%", right: "4%", animation: "orb-drift-2 85s ease-in-out infinite", animationDelay: "10s" }}
        />
        <div
          className="absolute w-[220px] h-[220px] rounded-full bg-[#C4D9DC]/40 blur-3xl"
          style={{ top: "3%", right: "5%", animation: "orb-drift-3 75s ease-in-out infinite", animationDelay: "25s" }}
        />
        <div
          className="absolute w-[200px] h-[200px] rounded-full bg-[#156686]/25 blur-3xl"
          style={{ bottom: "5%", left: "8%", animation: "orb-drift-4 65s ease-in-out infinite", animationDelay: "15s" }}
        />
      </div>

      <div className="w-full max-w-[1360px] mx-auto px-3 md:px-5 relative z-10">
        <div className="relative">
          {/* Gray card */}
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
                      {AVATARS.map((src, i) => (
                        <div
                          key={i}
                          className="w-9 h-9 rounded-full border-2 border-surface overflow-hidden flex-shrink-0"
                          style={{ marginLeft: i > 0 ? "-10px" : "0", zIndex: AVATARS.length - i }}
                        >
                          <img src={src} alt="" className="w-full h-full object-cover" />
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
