import heroImg from "@/assets/hero-andrea.jpg";

export function Hero() {
  return (
    <section id="top" className="pt-24 md:pt-28">
      <div className="container-narrow">
        <div className="rounded-3xl md:rounded-[2rem] bg-surface overflow-hidden relative">
          <div className="grid md:grid-cols-12 gap-0 items-stretch">
            {/* Text */}
            <div className="md:col-span-7 p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-between min-h-[520px] md:min-h-[640px]">
              <p className="eyebrow">Funnel & Launch Strategist</p>

              <h1 className="h-display text-[2.25rem] sm:text-5xl md:text-[3.75rem] lg:text-[4.5rem] mt-10 md:mt-0">
                Pronto a fare il tuo prossimo lancio,{" "}
                <em>senza ansia</em> e senza stress?
              </h1>

              <div className="mt-10 md:mt-12">
                <p className="text-base md:text-lg text-foreground/70 max-w-xl leading-relaxed">
                  Sono Andrea Bonomo, Funnel e Launch Strategist. Aiuto freelance e
                  solopreneur a lanciare video corsi, percorsi e servizi online — con una
                  strategia chiara, email marketing e contenuti che funzionano.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
                  <a
                    href="#percorsi"
                    className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5"
                  >
                    Scopri i percorsi
                  </a>
                  <a
                    href="#newsletter"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors group"
                  >
                    Scarica la guida gratuita
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="md:col-span-5 relative min-h-[320px] md:min-h-[640px]">
              <img
                src={heroImg}
                alt="Andrea Bonomo, Funnel e Launch Strategist"
                width={1280}
                height={1280}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-5 right-5 px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm text-xs font-medium">
                ✦ 80+ professionisti
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
