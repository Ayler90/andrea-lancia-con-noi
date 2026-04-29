import blob from "@/assets/blob.jpg";

export function ChiSono() {
  return (
    <section id="chi-sono" className="py-20 md:py-32">
      <div className="container-narrow grid md:grid-cols-12 gap-10 md:gap-12 items-start">
        <div className="md:col-span-5 md:sticky md:top-32">
          <p className="eyebrow mb-4">01 — Chi sono</p>
          <h2 className="h-display text-4xl md:text-5xl lg:text-6xl">
            10 anni nel digitale, <em>5 dedicati ai lanci.</em>
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
          <p className="text-lg md:text-xl leading-relaxed text-foreground/85">
            Ho 10 anni di esperienza nel digitale. Ho iniziato come copywriter, poi landing
            page, Meta Ads, email marketing — fino a specializzarmi nei lanci.
          </p>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-foreground/85">
            Dal 2021 lavoro con freelance e solopreneur per costruire lanci strutturati che
            vendono, senza il caos dell'improvvisazione.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 md:gap-8 py-8 border-y border-border">
            <div>
              <p className="h-display text-3xl md:text-4xl text-primary">80+</p>
              <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">
                Professionisti
              </p>
            </div>
            <div>
              <p className="h-display text-3xl md:text-4xl text-primary">10</p>
              <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">
                Anni di esperienza
              </p>
            </div>
            <div>
              <p className="h-display text-3xl md:text-4xl text-primary">2021</p>
              <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">
                Focus sui lanci
              </p>
            </div>
          </div>

          <a
            href="#contatti"
            className="inline-flex items-center gap-2 mt-10 text-sm font-medium text-primary hover:gap-3 transition-all"
          >
            Lavoriamo insieme <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
