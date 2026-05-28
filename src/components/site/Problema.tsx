import costruiscoImg from "@/assets/Foto mentre costruisco.jpg";

const chaosThoughts = [
  { text: "Devo fare o no un webinar?",                x: "2%",  y: "6%",  delay: "0s"   },
  { text: "Quante email invio?",                       x: "58%", y: "3%",  delay: "1s"   },
  { text: "Che contenuti dovrei creare?",              x: "64%", y: "34%", delay: "1.8s" },
  { text: "Quanto le tengo aperte le vendite?",        x: "55%", y: "68%", delay: "0.6s" },
  { text: "Ma quest'offerta è giusta per il mio pubblico?", x: "0%", y: "58%", delay: "2.2s" },
  { text: "Mi servono o no le ads?",                   x: "28%", y: "85%", delay: "1.4s" },
];

const clarityItems = [
  "Strategia di lancio su misura per la tua offerta",
  "Calendario step-by-step con ogni azione da fare",
  "Email, contenuti e pagine di vendita già pronti",
  "Supporto in ogni fase, dalla partenza alla chiusura",
];

function ChaosWidget() {
  return (
    <div className="relative w-full h-72 md:h-96 flex items-center justify-center select-none">
      {/* Thought bubbles */}
      {chaosThoughts.map((t) => (
        <div
          key={t.text}
          className="absolute text-xs font-medium text-white/65 bg-white/10 border border-white/20 rounded-xl px-3 py-1.5 backdrop-blur-sm"
          style={{
            left: t.x,
            top: t.y,
            animation: `thought-float 3.5s ease-in-out ${t.delay} infinite`,
            maxWidth: "48%",
          }}
        >
          {t.text}
        </div>
      ))}

      {/* Central emoji */}
      <div
        className="relative z-10 text-7xl md:text-8xl"
        style={{ animation: "thought-float 4s ease-in-out 0.5s infinite" }}
      >
        🤯
      </div>
    </div>
  );
}

export function Problema() {
  return (
    <section id="problema" className="py-20 md:py-32 bg-[#156686] relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-80 h-80 rounded-full blur-3xl -top-20 -right-20"
          style={{ backgroundColor: "rgba(196,217,220,0.12)", animation: "glow-float 10s ease-in-out infinite" }}
        />
        <div
          className="absolute w-64 h-64 rounded-full blur-3xl bottom-0 left-1/4"
          style={{ backgroundColor: "rgba(161,194,207,0.10)", animation: "glow-float-alt 12s ease-in-out infinite", animationDelay: "3s" }}
        />
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl top-1/3 -left-20"
          style={{ backgroundColor: "rgba(196,217,220,0.08)", animation: "glow-float 14s ease-in-out infinite", animationDelay: "6s" }}
        />
        <div
          className="absolute w-56 h-56 rounded-full blur-2xl bottom-1/4 right-1/4"
          style={{ backgroundColor: "rgba(255,255,255,0.05)", animation: "glow-float-alt 9s ease-in-out infinite", animationDelay: "1.5s" }}
        />
      </div>

      <div className="container-narrow relative z-10">
        {/* Heading */}
        <h2 className="h-display text-3xl md:text-4xl lg:text-5xl text-white max-w-2xl mb-16">
          Conosco perfettamente il tuo{" "}
          <em className="text-[#C4D9DC]">problema con i lanci</em>
        </h2>

        {/* ROW 1: Problem text LEFT + Chaos widget RIGHT */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <p className="text-sm md:text-base text-white/85 leading-relaxed mb-5">
              Hai appena creato il tuo <strong>nuovo video corso</strong>, percorso 1:1 o un'altra
              offerta. Adesso lo vuoi lanciare e vuoi portare{" "}
              <strong>più persone possibili</strong> a scoprire la tua novità.
            </p>
            <p className="text-sm md:text-base font-semibold text-white mb-5">
              Solo che... come si fa un lancio?
            </p>
            <ul className="space-y-3 mb-7">
              {[
                "Servono le email? Quante?",
                "Di che contenuti hai bisogno?",
                "Bisogna far iscrivere le persone a un webinar?",
                "Come fai a capire se l'offerta è giusta per il tuo pubblico?",
              ].map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm md:text-base text-white/75">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
            <div className="space-y-4 text-sm md:text-base text-white/80 leading-relaxed">
              <p>
                Online ci sono centinaia di persone che ti dicono cosa dovresti fare, ma questo ti
                crea <strong>ancora più confusione</strong> invece di schiarirti le idee.
              </p>
              <p className="font-semibold text-white">
                Non hai una strategia chiara, un sistema per lanciare e vai a braccio.
              </p>
              <p>
                Pubblichi → nessuno si iscrive → vai nel panico → smetti → ansia → blocco. Tutto
                questo perché non hai una <strong>direzione limpida</strong> da seguire.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <ChaosWidget />
          </div>
        </div>

        {/* ROW 2: Andrea's photo LEFT + Clarity text RIGHT */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mt-16 md:mt-24">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-3xl blur-2xl"
              style={{ backgroundColor: "rgba(196,217,220,0.15)" }}
            />
            <img
              src={costruiscoImg}
              alt="Andrea Bonomo"
              className="relative w-full max-w-sm mx-auto rounded-3xl object-cover aspect-[4/5]"
            />
          </div>

          <div>
            <p className="text-sm md:text-base font-semibold text-white mb-3">
              Quello che faccio è questo:
            </p>
            <p className="text-sm md:text-base text-white/85 leading-relaxed mb-8">
              Ti guido nel tuo lancio, <strong>togliendoti il peso</strong> di gestire la parte
              tecnica e strategica e accompagnandoti in ogni fase, così sai sempre dove sei e cosa
              succederà dopo.
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
              <a
                href="#testimonianze"
                className="text-sm font-medium text-white/80 border border-white/35 hover:border-white/70 hover:text-white transition-all flex items-center gap-2 px-5 py-2.5 rounded-full"
              >
                Leggi le recensioni →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
