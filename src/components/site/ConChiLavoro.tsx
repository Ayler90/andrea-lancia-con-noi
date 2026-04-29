export function ConChiLavoro() {
  const items = [
    "Hai già un'audience che ti segue",
    "Vendi più di un prodotto digitale",
    "Hai già lanciato almeno una volta",
    "Vuoi vendite costanti, non solo lanci continui",
  ];

  return (
    <section id="con-chi-lavoro" className="py-20 md:py-28 bg-foreground text-background">
      <div className="container-narrow">
        <div className="max-w-4xl">
          <p className="eyebrow mb-5 text-background/60">— Con chi lavoro</p>
          <h2 className="h-display text-4xl md:text-5xl lg:text-6xl">
            Con chi <em>lavoro</em>
          </h2>

          <p className="mt-10 text-lg md:text-xl text-background/85 leading-relaxed">
            Lavoro al meglio con creator e formatori che:
          </p>

          <ul className="mt-8 space-y-4 max-w-2xl">
            {items.map((it) => (
              <li
                key={it}
                className="flex items-start gap-4 text-lg md:text-xl text-background/90"
              >
                <span className="mt-3 w-2 h-2 bg-secondary flex-shrink-0" />
                {it}
              </li>
            ))}
          </ul>

          <div className="mt-12 space-y-5 max-w-2xl text-lg md:text-xl text-background/85 leading-relaxed">
            <p>
              Se stai lanciando il tuo <em className="font-display italic font-normal">primo</em>{" "}
              corso, probabilmente non sono la persona giusta.
            </p>
            <p>
              Ma se hai già costruito qualcosa di solido e vuoi un sistema di vendita all'altezza,
              dovremmo parlarne.
            </p>
          </div>

          <div className="mt-12">
            <a
              href="#contatti"
              className="pill bg-background text-foreground hover:bg-secondary hover:text-background hover:-translate-y-0.5"
            >
              Parliamone →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
