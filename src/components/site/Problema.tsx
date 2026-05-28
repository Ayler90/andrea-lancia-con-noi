import heroImg from "@/assets/hero-andrea.jpg";

const chaosThoughts = [
  { text: "Quante email?",      x: "5%",  y: "8%",  delay: "0s"   },
  { text: "Webinar?",           x: "62%", y: "4%",  delay: "1s"   },
  { text: "Landing page?",      x: "72%", y: "35%", delay: "1.8s" },
  { text: "Ads?",               x: "68%", y: "65%", delay: "0.6s" },
  { text: "Contenuti?",         x: "3%",  y: "60%", delay: "2.2s" },
  { text: "Strategia?",         x: "22%", y: "82%", delay: "1.4s" },
  { text: "Come vendo?",        x: "50%", y: "80%", delay: "0.3s" },
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
          className="absolute text-xs font-medium text-white/65 bg-white/10 border border-white/20 rounded-xl px-3 py-1.5 backdrop-blur-sm whitespace-nowrap"
          style={{
            left: t.x,
            top: t.y,
            animation: `thought-float 3.5s ease-in-out ${t.delay} infinite`,
          }}
        >
          {t.text}
        </div>
      ))}

      {/* Person SVG */}
      <svg
        viewBox="0 0 200 260"
        className="w-32 md:w-40 relative z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Head */}
        <circle cx="100" cy="60" r="32" stroke="rgba(255,255,255,0.55)" strokeWidth="2.5" />
        {/* Face — confused expression */}
        <circle cx="89"  cy="56" r="3" fill="rgba(255,255,255,0.6)" />
        <circle cx="111" cy="56" r="3" fill="rgba(255,255,255,0.6)" />
        <path d="M 88 72 Q 100 65 112 72" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
        {/* Sweat drop */}
        <ellipse cx="120" cy="48" rx="4" ry="6" fill="rgba(196,217,220,0.5)" />
        {/* Body */}
        <line x1="100" y1="92"  x2="100" y2="170" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" />
        {/* Arms raised in frustration */}
        <line x1="100" y1="120" x2="62"  y2="95"  stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="100" y1="120" x2="138" y2="95"  stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" />
        {/* Legs */}
        <line x1="100" y1="170" x2="78"  y2="220" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="100" y1="170" x2="122" y2="220" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" />
        {/* Chaotic lines from head */}
        <line x1="100" y1="28" x2="100" y2="12" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="75"  y1="38" x2="60"  y2="26" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="125" y1="38" x2="140" y2="26" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="3 3" />
      </svg>
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

        {/* Divider */}
        <div className="my-16 h-px bg-white/15" />

        {/* ROW 2: Andrea's photo LEFT + Clarity text RIGHT */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-3xl blur-2xl"
              style={{ backgroundColor: "rgba(196,217,220,0.15)" }}
            />
            <img
              src={heroImg}
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
                className="text-sm font-medium text-white/70 hover:text-white transition-colors flex items-center gap-2"
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
