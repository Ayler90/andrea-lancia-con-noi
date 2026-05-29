const siLavora = [
  <>Hanno già un'<strong>audience attiva</strong> e che risponde</>,
  <>Vendono <strong>più di un prodotto digitale</strong> o servizio</>,
  <>Hanno <strong>già lanciato</strong> almeno una volta</>,
  <>Vogliono <strong>vendite costanti</strong>, non solo lanci continui</>,
];

const nonLavora = [
  <>Cerchi <strong>risultati immediati</strong> facendo il minimo possibile. I lanci richiedono preparazione, strategia e tempo.</>,
  <>Non sei disposto a <strong>metterti in gioco</strong>. Il mio lavoro è guidarti, ma l'energia e la presenza le devi mettere tu.</>,
  <>Fai <strong>network marketing</strong>. Non è il mio campo e non ho gli strumenti giusti per aiutarti.</>,
  <>Hai un <strong>e-commerce di prodotti fisici</strong>. Lavoro esclusivamente con infoprodotti, servizi e percorsi digitali.</>,
];

function FloatingEmoji({ emoji, glowColor }: { emoji: string; glowColor: string }) {
  return (
    <div className="relative inline-block mb-6">
      <div className="text-4xl" style={{ animation: "thought-float 3s ease-in-out infinite" }}>
        {emoji}
      </div>
      <div
        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-5 blur-lg rounded-full pointer-events-none"
        style={{ backgroundColor: glowColor }}
      />
    </div>
  );
}

export function ConChiLavoro() {
  return (
    <section id="con-chi-lavoro" className="py-20 md:py-28 bg-foreground text-background">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* Con chi lavoro */}
          <div>
            <FloatingEmoji emoji="✅" glowColor="rgba(21,102,134,0.5)" />
            <p className="eyebrow mb-5 text-background/60">Con chi lavoro</p>
            <h2 className="h-display text-3xl md:text-4xl lg:text-5xl">
              Lavoro al meglio con{" "}
              <em className="text-[#C4D9DC]">creator, coach, consulenti e formatori</em> che:
            </h2>

            <ul className="mt-8 space-y-4">
              {siLavora.map((it, i) => (
                <li key={i} className="flex items-start gap-4 text-sm md:text-base text-background/90">
                  <span className="mt-2 w-2 h-2 bg-secondary flex-shrink-0" />
                  {it}
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-4 text-sm md:text-base text-background/80 leading-relaxed">
              <p>
                Se stai lanciando il tuo primo corso ma hai un pubblico molto ristretto o non sei
                ancora posizionato, probabilmente non sono la <strong>persona giusta</strong> ma posso consigliarti
                colleghi per aiutarti in questa prima fase.
              </p>
              <p>
                Ma se hai già <strong>costruito qualcosa di solido</strong>, hai già ottenuto i <strong>primi risultati</strong> e
                vuoi creare un <strong>sistema di lancio efficace</strong>, allora dovremmo parlarne.
              </p>
            </div>

            <div className="mt-10">
              <a
                href="#contatti"
                className="pill bg-background text-foreground hover:bg-[#C4D9DC] hover:text-foreground hover:-translate-y-0.5"
              >
                Prenota la call conoscitiva →
              </a>
            </div>
          </div>

          {/* Con chi non lavoro — white card */}
          <div className="bg-white text-foreground rounded-3xl p-8 md:p-10">
            <FloatingEmoji emoji="❌" glowColor="rgba(220,50,50,0.35)" />
            <p className="eyebrow mb-5 text-foreground/50">Con chi non lavoro</p>
            <h2 className="h-display text-3xl md:text-4xl lg:text-5xl">
              Non sono la persona giusta <em className="text-[#156686]">se:</em>
            </h2>

            <ul className="mt-8 space-y-6">
              {nonLavora.map((it, i) => (
                <li key={i} className="flex items-start gap-4 text-sm md:text-base text-foreground/75">
                  <span className="mt-2 w-2 h-2 border border-foreground/30 flex-shrink-0" />
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
