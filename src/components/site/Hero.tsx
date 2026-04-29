export function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden">
      <div className="container-narrow grid md:grid-cols-12 gap-12 md:gap-8 items-center">
        <div className="md:col-span-7">
          <p className="eyebrow mb-6">Funnel & Launch Strategist</p>
          <h1 className="h-display text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl">
            Pronto a fare il tuo prossimo lancio,{" "}
            <span className="text-primary italic font-normal">senza ansia</span> e senza stress?
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Sono Andrea Bonomo, Funnel e Launch Strategist. Aiuto freelance e solopreneur a
            lanciare video corsi, percorsi e servizi online — con una strategia chiara, email
            marketing e contenuti che funzionano.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
            <a
              href="#percorsi"
              className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all hover:-translate-y-0.5"
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

        <div className="md:col-span-5 relative h-[300px] md:h-[460px]">
          {/* Geometric composition */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[78%] aspect-square rounded-full bg-primary" />
            <div className="absolute bottom-0 left-0 w-[55%] aspect-square rounded-full bg-secondary/60" />
            <div className="absolute top-[20%] left-[10%] w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-surface border border-border rotate-12" />
            <div className="absolute bottom-[18%] right-[12%] w-3 h-3 rounded-full bg-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}
