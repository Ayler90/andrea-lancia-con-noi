export function Problema() {
  const domande = [
    "Servono le email? Quante?",
    "Di che contenuti hai bisogno?",
    "Bisogna far iscrivere le persone a un webinar?",
    "Come fai a capire se l'offerta è giusta per il tuo pubblico?",
  ];

  return (
    <section id="problema" className="py-20 md:py-32 bg-[#156686]">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto">
          <h2 className="h-display text-4xl md:text-5xl lg:text-6xl text-white">
            Conosco perfettamente il tuo problema con i lanci
          </h2>

          <div className="mt-10 space-y-5 text-base md:text-lg text-white/85 leading-relaxed">
            <p>
              Hai appena creato il tuo nuovo video corso, percorso 1:1 o un'altra offerta. Adesso
              lo vuoi lanciare e vuoi portare più persone possibili a scoprire la tua novità.
            </p>
            <p className="font-semibold text-white">Solo che... come si fa un lancio?</p>
          </div>

          <ul className="mt-8 space-y-3">
            {domande.map((d) => (
              <li
                key={d}
                className="flex items-start gap-4 text-base md:text-lg text-white/80"
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 flex-shrink-0" />
                {d}
              </li>
            ))}
          </ul>

          <div className="mt-10 space-y-5 text-base md:text-lg text-white/85 leading-relaxed">
            <p>
              Online ci sono centinaia di persone che ti dicono cosa dovresti fare e come farlo,
              solo che questo ti crea ancora più confusione, invece di schiarirti le idee.
            </p>
            <p>
              Dopo aver lavorato su decine e decine di lanci, il problema reale per cui i lanci
              non funzionano è proprio questo.
            </p>
            <p className="font-semibold text-white">
              Non hai una strategia chiara, un sistema per lanciare e vai a braccio.
            </p>
            <p>
              Oggi pubblichi un contenuto per portare le persone a iscriversi al tuo webinar. Ma
              magari non si iscrivono in tanti e vai nel panico. Quindi smetti e la tua mente
              inizia a mostrarti gli scenari peggiori. Così, vai in ansia e smetti di pubblicare
              pensando che i risultati non arriveranno.
            </p>
            <p>
              Ecco, tutto questo succede perché non hai una direzione limpida da seguire e una
              serie di step chiari. E il rischio di perderti nelle mille cose da fare è molto alto.
            </p>
          </div>

          <div className="mt-12 p-8 md:p-10 rounded-3xl bg-white/10 border border-white/20">
            <p className="text-base md:text-lg text-white leading-relaxed">
              Quello che faccio è questo:{" "}
              <span className="font-semibold">
                ti guido nel tuo lancio, togliendoti il peso di gestire la parte tecnica e
                strategica e accompagnandoti in ogni fase.
              </span>
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
            <a
              href="#percorsi"
              className="pill bg-white text-[#156686] hover:bg-white/90 hover:-translate-y-0.5 font-semibold"
            >
              Scopri i miei percorsi
            </a>
            <a
              href="#testimonianze"
              className="group inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Leggi le recensioni di chi ha lanciato con me
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
