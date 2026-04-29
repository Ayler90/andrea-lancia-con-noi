export function ChiSono() {
  return (
    <section id="chi-sono" className="py-20 md:py-32 border-t border-border">
      <div className="container-narrow grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="eyebrow mb-4">01 — Chi sono</p>
          <h2 className="h-display text-3xl md:text-4xl">
            10 anni nel digitale, 5 dedicati ai lanci.
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <p className="text-lg md:text-xl leading-relaxed text-foreground/85">
            Ho 10 anni di esperienza nel digitale. Ho iniziato come copywriter, poi landing page,
            Meta Ads, email marketing — fino a specializzarmi nei lanci. Dal 2021 lavoro con
            freelance e solopreneur per costruire lanci strutturati che vendono, senza il caos
            dell'improvvisazione.
          </p>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-foreground/85">
            Ho aiutato <span className="text-primary font-medium">80+ professionisti</span> a
            lanciare le loro offerte.
          </p>
          <a
            href="#contatti"
            className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-primary hover:gap-3 transition-all"
          >
            Lavoriamo insieme <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
