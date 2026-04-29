const cards = [
  {
    n: "01",
    title: "Percorso di Lancio",
    desc: "Ti seguo in ogni fase del lancio: strategia, email, pagine, sponsorizzate. Done for you, in 3-4 mesi.",
    featured: true,
  },
  {
    n: "02",
    title: "Business Blueprint",
    desc: "Un percorso annuale di 12 mesi insieme a me e Davide, specializzato in offerte e business. Lavoriamo su comunicazione, offerte, funnel, newsletter e lanci — con call mensili, supporto WhatsApp e Q&A live.",
  },
  {
    n: "03",
    title: "Mentoring Newsletter",
    desc: "Crei la tua newsletter da zero in 30-45 giorni, con il mio supporto strategico e sessioni 1:1.",
  },
  {
    n: "04",
    title: "Easy-Mail Pack",
    desc: "Il video corso completo su email marketing e lanci: 90 lezioni per imparare a usare l'email nei tuoi lanci.",
  },
  {
    n: "05",
    title: "Consulenza Strategica",
    desc: "90 minuti 1:1 su un problema specifico del tuo lancio o funnel. Con registrazione e report.",
  },
];

export function Percorsi() {
  return (
    <section id="percorsi" className="py-20 md:py-32 bg-surface">
      <div className="container-narrow">
        <div className="max-w-3xl mb-14 md:mb-20">
          <p className="eyebrow mb-4">02 — Percorsi</p>
          <h2 className="h-display text-4xl md:text-5xl lg:text-6xl">
            Come posso <span className="text-primary italic font-normal">aiutarti</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-6 gap-4 md:gap-6">
          {cards.map((c, i) => {
            // 2+3 layout: first 2 take 3 cols each, last 3 take 2 cols each
            const span = i < 2 ? "md:col-span-3" : "md:col-span-2";
            return (
              <article
                key={c.n}
                className={`${span} group relative bg-background rounded-2xl p-7 md:p-9 border border-border hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(21,102,134,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col`}
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-sm font-mono text-primary">{c.n}</span>
                  <span className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-xs group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                    →
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-3">
                  {c.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-1">
                  {c.desc}
                </p>
                <a
                  href="#contatti"
                  className="mt-6 text-sm font-medium text-primary hover:underline underline-offset-4"
                >
                  Scopri →
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
