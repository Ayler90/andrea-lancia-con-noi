import { useEffect, useState } from "react";
import p1 from "@/assets/Percorso di lancio.jpg";
import p2 from "@/assets/Calendario di lancio.jpg";
import p3 from "@/assets/Business blueprint.jpg";
import p4 from "@/assets/Mentoring newsletter.jpg";
import p5 from "@/assets/Easy-mail pack.jpg";
import p6 from "@/assets/Consulenza strategica.jpg";

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

const PERCORSI: Record<string, Percorso[]> = {
  lancio: [
    {
      n: "01",
      tag: "Percorso 1:1 · 3-4 mesi",
      title: "Pronti, partenza,",
      italic: "lancio!",
      desc: "Ti seguo in ogni fase di lancio e mi occupo io di tutta la parte strategica e tecnica: strategia di lancio, ottimizzazione offerta, ads, email, pagine di iscrizione e di vendita, checkout, automazioni.",
      bullets: ["Strategia di lancio personalizzata", "Email di pre lancio e lancio", "Landing & sales page", "Gestione completa Ads"],
      cta: "Candidati al percorso",
      image: p1,
      bg: "bg-[#C4D9DC]",
    },
    {
      n: "02",
      tag: "Template Notion Scaricabile",
      title: "Calendario di",
      italic: "Lancio",
      desc: "Il template completo per organizzare il tuo lancio in autonomia: calendario settimana per settimana e script delle email pronti da usare.",
      bullets: ["Calendario di lancio strutturato", "Script email pronti all'uso", "Timeline fase per fase", "Accesso immediato"],
      cta: "Acquista il calendario ora",
      image: p2,
      bg: "bg-[#C4D9DC]",
    },
  ],
  business: [
    {
      n: "03",
      tag: "Mentorship · 12 mesi",
      title: "Business",
      italic: "Blueprint",
      desc: "Un percorso annuale insieme a me e Davide, specializzato in offerte e business. Lavoriamo su comunicazione, offerte, funnel, newsletter e lanci.",
      bullets: ["2 call mensili 1:1 da 90 minuti", "Supporto WhatsApp continuativo", "Check di 30 minuti prenotabili entro 24 ore", "Template e strategia personalizzata"],
      cta: "Candidati a Business Blueprint",
      image: p3,
      bg: "bg-[#C4D9DC]",
    },
  ],
  newsletter: [
    {
      n: "04",
      tag: "Percorso 1:1 · 30-45 giorni",
      title: "Mentoring",
      italic: "Newsletter",
      desc: "Creiamo e lanciamo la tua newsletter da zero in 30-45 giorni, con il mio supporto strategico e 3 sessioni 1:1 da 90 minuti.",
      bullets: ["Tone of voice, struttura e argomenti", "Setup tecnico completo", "Calendario editoriale mensile", "3 sessioni 1:1 da 90 minuti e supporto WhatsApp"],
      cta: "Candidati al mentoring",
      image: p4,
      bg: "bg-[#C4D9DC]",
    },
    {
      n: "05",
      tag: "Video corso registrato",
      title: "Easy-Mail",
      italic: "Pack",
      desc: "Il video corso completo su email marketing e lanci. 90 lezioni per imparare a usare l'email nei tuoi lanci.",
      bullets: ["90 video lezioni", "Template email pronti", "Casi studio reali", "Accesso a vita"],
      cta: "Acquista ora il video corso",
      image: p5,
      bg: "bg-[#C4D9DC]",
    },
  ],
  consulenza: [
    {
      n: "06",
      tag: "1:1 · 90 minuti",
      title: "Consulenza",
      italic: "Strategica",
      desc: "90 minuti 1:1 su un problema specifico del tuo lancio o funnel. Con registrazione e report finale.",
      bullets: ["Audit del tuo funnel", "Piano d'azione concreto", "Registrazione della call", "Report scritto"],
      cta: "Prenota la consulenza",
      image: p6,
      bg: "bg-[#C4D9DC]",
    },
  ],
};

type FilterId = keyof typeof PERCORSI | "tutti";

const FILTERS: { id: Exclude<FilterId, "tutti">; label: string; sub: string }[] = [
  { id: "lancio", label: "Voglio lanciare la mia offerta", sub: "Percorso di Lancio | Calendario di Lancio" },
  { id: "newsletter", label: "Voglio lanciare una newsletter", sub: "Mentoring | Easy-Mail Pack" },
  { id: "business", label: "Voglio lavorare a 360° sul mio business", sub: "Business Blueprint" },
  { id: "consulenza", label: "Voglio un aiuto veloce", sub: "Consulenza Strategica" },
];

export function Percorsi() {
  const [active, setActive] = useState<FilterId>("lancio");

  useEffect(() => {
    const handler = (e: Event) => {
      setActive((e as CustomEvent<FilterId>).detail);
    };
    window.addEventListener("percorso-select", handler);
    return () => window.removeEventListener("percorso-select", handler);
  }, []);

  const items =
    active === "tutti"
      ? Object.values(PERCORSI).flat()
      : PERCORSI[active];

  return (
    <section id="percorsi" className="py-20 md:py-28 bg-[#f0f0f0]">
      <div className="container-narrow">
        <div className="max-w-3xl mb-10 md:mb-14">
          <p className="eyebrow mb-4">I miei percorsi</p>
          <h2 className="h-display text-4xl md:text-5xl lg:text-6xl">
            Ecco come possiamo <em className="text-[#156686]">lavorare insieme</em>
          </h2>
          <p className="mt-6 text-sm md:text-base text-foreground/70 leading-relaxed">
            Dimmi su cosa vuoi lavorare e ti mostro il percorso giusto per te.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="grid sm:grid-cols-2 gap-5 md:gap-6 mb-6">
          {FILTERS.map((f) => {
            const isActive = active === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`filter-btn group text-left p-5 md:p-6 rounded-2xl ${
                  isActive
                    ? "is-active text-white"
                    : "text-foreground"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-base md:text-lg font-semibold leading-tight">
                      {f.label}
                    </p>
                    <p
                      className={`text-xs mt-1.5 uppercase tracking-[0.15em] ${
                        isActive ? "text-white/60" : "text-foreground/50"
                      }`}
                    >
                      → {f.sub}
                    </p>
                  </div>
                  <span
                    className={`text-xl flex-shrink-0 transition-transform ${
                      isActive ? "rotate-45" : "group-hover:translate-x-1"
                    }`}
                  >
                    →
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Show all link */}
        <div className="mb-12 md:mb-16">
          <button
            onClick={() => setActive("tutti")}
            className={`text-sm underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition ${
              active === "tutti" ? "text-foreground font-medium" : "text-foreground/60"
            }`}
          >
            {active === "tutti" ? "✓ Stai vedendo tutti i percorsi" : "Mostrami tutti i percorsi →"}
          </button>
        </div>

        <div className="space-y-6 md:space-y-8">
          {items.map((p, i) => (
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
      className={`${percorso.bg} rounded-3xl md:rounded-[2rem] overflow-hidden group animate-in fade-in slide-in-from-bottom-4 duration-500 transition-transform hover:-translate-y-1.5`}
    >
      <div
        className={`grid md:grid-cols-12 gap-0 items-stretch ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="md:col-span-7 p-8 sm:p-10 md:p-14 lg:p-16 flex flex-col relative overflow-hidden">
          {/* Huge background number */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-4 h-display leading-none select-none pointer-events-none"
            style={{
              fontSize: "clamp(180px, 22vw, 340px)",
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(0,0,0,0.07)",
            }}
          >
            {percorso.n}
          </span>

          <div className="flex items-center justify-end gap-4 flex-wrap relative z-10">
            <span className="text-xs uppercase tracking-[0.18em] text-foreground/60 font-medium">
              {percorso.tag}
            </span>
          </div>

          <h3 className="h-display text-4xl md:text-5xl lg:text-6xl mt-8 md:mt-12 relative z-10">
            {percorso.title} <em>{percorso.italic}</em>
          </h3>

          <p className="mt-6 text-sm md:text-base text-foreground/75 leading-relaxed max-w-xl relative z-10">
            {percorso.desc}
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3 max-w-xl relative z-10">
            {percorso.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-foreground/85">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-10 relative z-10">
            <a
              href="#contatti"
              className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5"
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
