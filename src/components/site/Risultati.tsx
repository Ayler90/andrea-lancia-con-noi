export function Risultati() {
  const stats = [
    {
      value: "€1.8M+",
      label: "Fatturato totale dei lanci",
      sub: "negli ultimi 12 mesi.",
    },
    {
      value: "10,4%",
      label: "Conversione media",
      sub: "delle sales page.",
    },
    {
      value: "74%",
      label: "Conversione media",
      sub: "delle landing page opt-in.",
    },
  ];

  return (
    <section id="risultati" className="py-20 md:py-28 bg-surface">
      <div className="container-narrow">
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-5">— I numeri parlano</p>
          <h2 className="h-display text-4xl md:text-5xl lg:text-6xl">
            La prova che il mio metodo <em>funziona</em>
          </h2>

          <div className="mt-8 space-y-3 text-base md:text-lg text-foreground/70 leading-relaxed">
            <p>Una piccola premessa — questi numeri non sono la media.</p>
            <p>
              Sono ciò che succede quando{" "}
              <span className="font-semibold text-foreground">
                strategia, struttura del funnel e copy di conversione
              </span>{" "}
              vanno davvero d'accordo.
            </p>
          </div>
        </div>

        <div className="mt-16 md:mt-20 grid md:grid-cols-3 gap-px bg-foreground/10 rounded-3xl overflow-hidden border border-foreground/10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-surface px-8 py-12 md:py-16 text-center flex flex-col items-center justify-center"
            >
              <div className="font-display italic text-6xl md:text-7xl lg:text-8xl text-primary leading-none">
                {s.value}
              </div>
              <p className="mt-6 text-base md:text-lg font-semibold text-foreground">
                {s.label}
              </p>
              <p className="mt-1 text-sm text-foreground/60">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
