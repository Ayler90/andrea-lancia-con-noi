export function ConChiLavoro() {
  const siLavora = [
    "Hanno già un'audience attiva e che risponde",
    "Vendono più di un prodotto digitale o servizio",
    "Hanno già lanciato almeno una volta",
    "Vogliono vendite costanti, non solo lanci continui",
  ];

  const nonLavora = [
    "Cerchi risultati immediati facendo il minimo possibile. I lanci richiedono preparazione, strategia e tempo.",
    "Non sei disposto a metterti in gioco. Il mio lavoro è guidarti, ma l'energia e la presenza le devi mettere tu.",
    "Fai network marketing. Non è il mio campo e non ho gli strumenti giusti per aiutarti.",
    "Hai un e-commerce di prodotti fisici. Lavoro esclusivamente con infoprodotti, servizi e percorsi digitali.",
  ];

  return (
    <section id="con-chi-lavoro" className="py-20 md:py-28 bg-foreground text-background">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Con chi lavoro */}
          <div>
            <p className="eyebrow mb-5 text-background/60">— Con chi lavoro</p>
            <h2 className="h-display text-3xl md:text-4xl lg:text-5xl">
              Lavoro al meglio con{" "}
              <em>creator, coach, consulenti e formatori</em> che:
            </h2>

            <ul className="mt-8 space-y-4">
              {siLavora.map((it) => (
                <li
                  key={it}
                  className="flex items-start gap-4 text-base md:text-lg text-background/90"
                >
                  <span className="mt-2.5 w-2 h-2 bg-secondary flex-shrink-0" />
                  {it}
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-4 text-base md:text-lg text-background/80 leading-relaxed">
              <p>
                Se stai lanciando il tuo primo corso ma hai un pubblico molto ristretto o non sei
                ancora posizionato, probabilmente non sono la persona giusta — ma posso consigliarti
                colleghi per aiutarti in questa prima fase.
              </p>
              <p>
                Ma se hai già costruito qualcosa di solido, hai già ottenuto i primi risultati e
                vuoi creare un sistema di lancio efficace, allora dovremmo parlarne.
              </p>
            </div>

            <div className="mt-10">
              <a
                href="#contatti"
                className="pill bg-background text-foreground hover:bg-secondary hover:text-background hover:-translate-y-0.5"
              >
                Prenota la call conoscitiva →
              </a>
            </div>
          </div>

          {/* Con chi non lavoro */}
          <div className="md:border-l md:border-background/20 md:pl-12 lg:pl-16">
            <p className="eyebrow mb-5 text-background/60">— Con chi non lavoro</p>
            <h2 className="h-display text-3xl md:text-4xl lg:text-5xl">
              Non sono la persona giusta <em>se:</em>
            </h2>

            <ul className="mt-8 space-y-6">
              {nonLavora.map((it) => (
                <li
                  key={it}
                  className="flex items-start gap-4 text-base md:text-lg text-background/75"
                >
                  <span className="mt-2.5 w-2 h-2 border border-background/40 flex-shrink-0" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
