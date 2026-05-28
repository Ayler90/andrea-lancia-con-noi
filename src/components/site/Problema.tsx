import { useRef, useState } from "react";

const chaosItems = [
  "Servono le email? Quante?",
  "Di che contenuti hai bisogno?",
  "Bisogna far iscrivere le persone a un webinar?",
  "Come fai a capire se l'offerta è giusta per il tuo pubblico?",
];

const clarityItems = [
  "Strategia di lancio su misura per la tua offerta",
  "Calendario step-by-step con ogni azione da fare",
  "Email, contenuti e pagine di vendita già pronti",
  "Supporto in ogni fase, dalla partenza alla chiusura",
];

export function Problema() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    setProgress(x);
  };

  const handleMouseLeave = () => setProgress(0);

  const chaosOpacity = 1 - progress * 0.55;
  const clarityOpacity = 0.35 + progress * 0.65;

  return (
    <section
      id="problema"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-20 md:py-32 bg-[#156686] relative overflow-hidden"
    >
      {/* Chaos glows — warm, always present but fade with progress */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 1 - progress * 0.8, transition: "opacity 0.6s ease" }}
      >
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl -top-24 -left-24"
          style={{ backgroundColor: "rgba(255,160,80,0.08)", animation: "glow-float 9s ease-in-out infinite" }}
        />
        <div
          className="absolute w-64 h-64 rounded-full blur-2xl bottom-0 right-1/4"
          style={{ backgroundColor: "rgba(255,100,80,0.06)", animation: "glow-float-alt 11s ease-in-out infinite", animationDelay: "3s" }}
        />
      </div>

      {/* Clarity glows — cool teal, appear with progress */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: progress * 0.9, transition: "opacity 0.6s ease" }}
      >
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl -top-20 -right-20"
          style={{ backgroundColor: "rgba(196,217,220,0.18)", animation: "glow-float 8s ease-in-out infinite" }}
        />
        <div
          className="absolute w-72 h-72 rounded-full blur-3xl bottom-0 left-1/3"
          style={{ backgroundColor: "rgba(161,194,207,0.15)", animation: "glow-float-alt 10s ease-in-out infinite", animationDelay: "2s" }}
        />
      </div>

      {/* Vertical reveal line */}
      <div
        className="absolute top-0 bottom-0 w-px bg-white/15 hidden md:block pointer-events-none transition-none"
        style={{ left: `${progress * 100}%` }}
      />

      <div className="container-narrow relative z-10">
        {/* Section heading */}
        <h2 className="h-display text-3xl md:text-4xl lg:text-5xl text-white mb-14 md:mb-16 max-w-2xl">
          Conosco perfettamente il tuo{" "}
          <em className="text-[#C4D9DC]">problema con i lanci</em>
        </h2>

        {/* Two-column: chaos ↔ clarity */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">

          {/* LEFT — Chaos */}
          <div
            style={{ opacity: chaosOpacity, transition: "opacity 0.5s ease" }}
          >
            <p className="text-xs uppercase tracking-widest text-white/50 mb-6">
              Il tuo problema
            </p>

            <p className="text-sm md:text-base text-white/85 leading-relaxed mb-5">
              Hai appena creato il tuo nuovo video corso, percorso 1:1 o un'altra offerta. Adesso
              lo vuoi lanciare e vuoi portare più persone possibili a scoprire la tua novità.
            </p>
            <p className="text-sm md:text-base font-semibold text-white mb-5">
              Solo che... come si fa un lancio?
            </p>

            <ul className="space-y-3 mb-8">
              {chaosItems.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm md:text-base text-white/75">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
                  {d}
                </li>
              ))}
            </ul>

            <div className="space-y-4 text-sm md:text-base text-white/80 leading-relaxed">
              <p>
                Online ci sono centinaia di persone che ti dicono cosa dovresti fare, ma questo ti
                crea ancora più confusione invece di schiarirti le idee.
              </p>
              <p className="font-semibold text-white">
                Non hai una strategia chiara, un sistema per lanciare e vai a braccio.
              </p>
              <p>
                Pubblichi → nessuno si iscrive → vai nel panico → smetti → ansia → blocco.
                Tutto questo perché non hai una direzione limpida da seguire.
              </p>
            </div>
          </div>

          {/* RIGHT — Clarity */}
          <div
            style={{ opacity: clarityOpacity, transition: "opacity 0.5s ease" }}
          >
            <p className="text-xs uppercase tracking-widest text-white/50 mb-6">
              Il mio approccio
            </p>

            <p className="text-sm md:text-base font-semibold text-white mb-5">
              Quello che faccio è questo:
            </p>
            <p className="text-sm md:text-base text-white/85 leading-relaxed mb-8">
              Ti guido nel tuo lancio, togliendoti il peso di gestire la parte tecnica e strategica
              e accompagnandoti in ogni fase, così sai sempre dove sei e cosa succederà dopo.
            </p>

            <ul className="space-y-4 mb-10">
              {clarityItems.map((item, i) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/15 border border-white/30 flex items-center justify-center text-[10px] font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-sm md:text-base text-white/90 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <a
                href="#percorsi"
                className="pill bg-white text-[#156686] hover:bg-white/90 hover:-translate-y-0.5 font-semibold"
              >
                Scopri i miei percorsi
              </a>
              <a href="#testimonianze" className="cta-ghost text-white/80 hover:!text-white hover:!bg-white/10 hover:!outline-white/20">
                Leggi le recensioni →
              </a>
            </div>
          </div>
        </div>

        {/* Hint */}
        <p className="mt-12 text-center text-xs text-white/30 hidden md:block">
          ← sposta il mouse per vedere la differenza →
        </p>
      </div>
    </section>
  );
}
