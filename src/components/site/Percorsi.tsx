import p1 from "@/assets/p1-launch.jpg";
import p2 from "@/assets/p2-blueprint.jpg";
import p3 from "@/assets/p3-newsletter.jpg";
import p4 from "@/assets/p4-easymail.jpg";
import p5 from "@/assets/p5-consulenza.jpg";

type Percorso = {
  n: string;
  tag: string;
  title: string;
  italic?: string;
  desc: string;
  bullets: string[];
  cta: string;
  image: string;
  bg: string;
};

const percorsi: Percorso[] = [
  {
    n: "01",
    tag: "Done for you · 3-4 mesi",
    title: "Percorso di",
    italic: "Lancio",
    desc: "Ti seguo in ogni fase del lancio: strategia, email, pagine, sponsorizzate. Done for you, fatto bene.",
    bullets: ["Strategia di lancio personalizzata", "Email sequence complete", "Landing & sales page", "Setup Meta Ads"],
    cta: "Scopri il percorso",
    image: p1,
    bg: "bg-[oklch(0.93_0.025_220)]",
  },
  {
    n: "02",
    tag: "Mentorship · 12 mesi",
    title: "Business",
    italic: "Blueprint",
    desc: "Un percorso annuale insieme a me e Davide, specializzato in offerte e business. Lavoriamo su comunicazione, offerte, funnel, newsletter e lanci.",
    bullets: ["Call mensili 1:1", "Supporto WhatsApp continuativo", "Q&A live mensili", "Community privata"],
    cta: "Scopri Business Blueprint",
    image: p2,
    bg: "bg-[oklch(0.95_0.04_85)]",
  },
  {
    n: "03",
    tag: "Mentoring · 30-45 giorni",
    title: "Mentoring",
    italic: "Newsletter",
    desc: "Crei la tua newsletter da zero in 30-45 giorni, con il mio supporto strategico e sessioni 1:1.",
    bullets: ["Posizionamento e tone of voice", "Setup tecnico completo", "Calendario editoriale", "Sessioni 1:1 dedicate"],
    cta: "Scopri il mentoring",
    image: p3,
    bg: "bg-[oklch(0.94_0.015_60)]",
  },
  {
    n: "04",
    tag: "Video corso · self-paced",
    title: "Easy-Mail",
    italic: "Pack",
    desc: "Il video corso completo su email marketing e lanci. 90 lezioni per imparare a usare l'email nei tuoi lanci.",
    bullets: ["90 video lezioni", "Template email pronti", "Casi studio reali", "Accesso a vita"],
    cta: "Scopri Easy-Mail Pack",
    image: p4,
    bg: "bg-[oklch(0.93_0.03_150)]",
  },
  {
    n: "05",
    tag: "1:1 · 90 minuti",
    title: "Consulenza",
    italic: "Strategica",
    desc: "90 minuti 1:1 su un problema specifico del tuo lancio o funnel. Con registrazione e report finale.",
    bullets: ["Audit del tuo funnel", "Piano d'azione concreto", "Registrazione della call", "Report scritto"],
    cta: "Prenota la consulenza",
    image: p5,
    bg: "bg-[oklch(0.92_0.025_30)]",
  },
];

export function Percorsi() {
  return (
    <section id="percorsi" className="py-20 md:py-28">
      <div className="container-narrow">
        <div className="max-w-3xl mb-14 md:mb-20">
          <p className="eyebrow mb-4">02 — Percorsi</p>
          <h2 className="h-display text-4xl md:text-5xl lg:text-6xl">
            Come posso <em>aiutarti</em>
          </h2>
          <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
            Cinque modi diversi di lavorare insieme, dal video corso self-paced alla
            mentorship annuale done-for-you.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {percorsi.map((p, i) => (
            <PercorsoBlock key={p.n} percorso={p} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PercorsoBlock({ percorso, reverse }: { percorso: Percorso; reverse: boolean }) {
  return (
    <article
      className={`${percorso.bg} rounded-3xl md:rounded-[2rem] overflow-hidden group`}
    >
      <div
        className={`grid md:grid-cols-12 gap-0 items-stretch ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="md:col-span-7 p-8 sm:p-10 md:p-14 lg:p-16 flex flex-col">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <span className="text-sm font-mono text-primary">— {percorso.n}</span>
            <span className="text-xs uppercase tracking-[0.18em] text-foreground/60 font-medium">
              {percorso.tag}
            </span>
          </div>

          <h3 className="h-display text-4xl md:text-5xl lg:text-6xl mt-8 md:mt-12">
            {percorso.title} <em>{percorso.italic}</em>
          </h3>

          <p className="mt-6 text-base md:text-lg text-foreground/75 leading-relaxed max-w-xl">
            {percorso.desc}
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3 max-w-xl">
            {percorso.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-foreground/85">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-10">
            <a
              href="#contatti"
              className="pill bg-foreground text-background hover:bg-primary hover:-translate-y-0.5"
            >
              {percorso.cta} →
            </a>
          </div>
        </div>

        <div className="md:col-span-5 relative min-h-[280px] md:min-h-0">
          <img
            src={percorso.image}
            alt={`${percorso.title} ${percorso.italic ?? ""}`}
            loading="lazy"
            width={1024}
            height={1024}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
      </div>
    </article>
  );
}
