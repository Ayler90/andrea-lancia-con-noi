import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import posthog from "posthog-js";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ChiSono } from "@/components/site/ChiSono";
import { Newsletter } from "@/components/site/Newsletter";
import { Loghi } from "@/components/site/Loghi";
import coverImg from "@/assets/copertina-easy-mail-pack-videocorso.png";
import screenshotLezione1 from "@/assets/Lezione 1 easy mail pack.png";
import lezione2 from "@/assets/lezione 2.png";
import lezione3 from "@/assets/lezione 3.png";
import lezione4 from "@/assets/lezione 4.png";
import lezione5 from "@/assets/lezione 5.png";
import studenteEmp from "@/assets/studente emp.jpeg";
import studenteEmp1 from "@/assets/studente emp 1.jpeg";
import studenteEmp2 from "@/assets/studente emp 2.png";
import studenteEmp3 from "@/assets/studente emp 3.jpeg";
import studenteEmp4 from "@/assets/studente emp 4.jpeg";

export const Route = createFileRoute("/easy-mail-pack")({
  component: EasyMailPack,
  head: () => ({
    meta: [
      { title: "Easy-Mail Pack – Crea newsletter ed email nei tuoi lanci | Andrea Bonomo" },
      {
        name: "description",
        content:
          "Il video corso completo per imparare a usare l'email marketing nei tuoi lanci, anche se parti da zero. 60+ lezioni, template e automazioni.",
      },
      { property: "og:title", content: "Easy-Mail Pack – Crea newsletter ed email nei tuoi lanci | Andrea Bonomo" },
      {
        property: "og:description",
        content:
          "Il video corso completo per imparare a usare l'email marketing nei tuoi lanci, anche se parti da zero.",
      },
    ],
  }),
});

const PURCHASE_URL = "https://corsi.andreabonomo.it/iscriviti-ora-base";

// ── Instagram mockup sub-components ─────────────────────────────────────────

const ANIM_DURATION = 3000; // ms — shared by both countdowns and charts

const INSIGHTS = [
  { label: "Copertura",      to: -67, suffix: "%", prefix: "↓ " },
  { label: "Interazioni",    to: -89, suffix: "%", prefix: "↓ " },
  { label: "Visite profilo", to: -54, suffix: "%", prefix: "↓ " },
];

function InsightsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [vals, setVals] = useState([0, 0, 0]);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !triggered) {
        setTriggered(true);
        INSIGHTS.forEach((ins, idx) => {
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / ANIM_DURATION, 1);
            // linear feel but smooth end
            const ease = p < 0.9 ? p / 0.9 : 1 - (p - 0.9) / 0.1 * 0 + (p - 0.9) / 0.1;
            setVals(prev => {
              const next = [...prev];
              next[idx] = Math.round(ins.to * ease);
              return next;
            });
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [triggered]);

  return (
    <div ref={ref} className="bg-[#0c2330] mx-3 rounded-xl px-4 py-3 mb-3">
      <p className="text-[10px] text-white/50 uppercase tracking-widest mb-2">Insights ultimi 30 giorni</p>
      <div className="grid grid-cols-3 gap-2">
        {INSIGHTS.map((ins, i) => (
          <div key={ins.label} className="text-center">
            <p className="text-[13px] font-bold text-red-400">
              {ins.prefix}{Math.abs(vals[i])}{ins.suffix}
            </p>
            <p className="text-[9px] text-white/40 leading-tight mt-0.5">{ins.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Each chart has a distinct wavy declining path
const CHARTS = [
  { label: "Reach",        id: "reachFade",  points: "0,6 20,4 40,10 60,7 80,15 100,12 120,24 140,32 160,38 180,42 200,46" },
  { label: "Interazioni",  id: "interFade",  points: "0,8 18,5 36,14 54,9 72,20 90,17 108,28 126,22 144,36 170,41 200,46" },
  { label: "Visite profilo", id: "follFade", points: "0,5 25,12 45,8 65,18 82,14 100,26 118,30 138,25 158,38 180,44 200,46" },
];

function MiniChart({ label, id, points }: { label: string; id: string; points: string }) {
  const ref = useRef<SVGPathElement>(null);
  const fillRef = useRef<SVGPathElement>(null);
  const [triggered, setTriggered] = useState(false);

  // Convert polyline points string to SVG path d attribute
  const toPath = (pts: string) => {
    const coords = pts.trim().split(/\s+/).map(p => p.split(",").map(Number));
    return coords.map((c, i) => `${i === 0 ? "M" : "L"}${c[0]},${c[1]}`).join(" ");
  };
  const toFillPath = (pts: string) => toPath(pts) + " L200,50 L0,50 Z";

  useEffect(() => {
    const lineEl = ref.current;
    if (!lineEl) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !triggered) {
        setTriggered(true);
        const totalLen = lineEl.getTotalLength?.() ?? 300;
        lineEl.style.strokeDasharray = `${totalLen}`;
        lineEl.style.strokeDashoffset = `${totalLen}`;
        lineEl.style.transition = `stroke-dashoffset ${ANIM_DURATION / 1000}s linear`;
        requestAnimationFrame(() => { lineEl.style.strokeDashoffset = "0"; });
        if (fillRef.current) {
          fillRef.current.style.opacity = "0";
          fillRef.current.style.transition = `opacity ${ANIM_DURATION / 1000}s ease`;
          requestAnimationFrame(() => { if (fillRef.current) fillRef.current.style.opacity = "1"; });
        }
      }
    }, { threshold: 0.3 });
    obs.observe(lineEl);
    return () => obs.disconnect();
  }, [triggered]);

  return (
    <div className="mx-3 mb-3 bg-white rounded-xl px-3 py-2.5 border border-gray-100">
      <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-1.5">{label}</p>
      <svg viewBox="0 0 200 50" className="w-full h-9">
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path ref={fillRef} d={toFillPath(points)}
          fill={`url(#${id})`} stroke="none" style={{ opacity: 0 }} />
        <path ref={ref} d={toPath(points)}
          fill="none" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function CheckIcon({ color = "#156686" }: { color?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill={color} fillOpacity="0.12" />
      <path d="M7 12.5l3.5 3.5 6.5-7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#ef4444" fillOpacity="0.10" />
      <path d="M8 8l8 8M16 8l-8 8" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PlaceholderImg({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`rounded-xl flex items-center justify-center bg-[#156686]/8 border border-[#156686]/15 text-[#156686]/50 text-sm font-medium ${className}`}
    >
      {label}
    </div>
  );
}

// ── CountUp ───────────────────────────────────────────────────────────────────

function CountUp({ target, suffix = "", duration = 6400 }: { target: number; suffix?: string; duration?: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 12);
            setValue(Math.round(ease * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} style={{ display: "inline-block", minWidth: `${String(target).length + suffix.length}ch`, fontVariantNumeric: "tabular-nums" }}>
      {value}{suffix}
    </span>
  );
}

// ── FAQ Accordion ─────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "Quanto costa Easy-Mail Pack?",
    a: "Easy-Mail Pack costa 129€ (IVA inclusa). È un accesso a vita: paghi una volta e puoi tornare a guardare le lezioni quando vuoi, per sempre.",
  },
  {
    q: "Se ho una domanda da farti, come faccio a contattarti?",
    a: "Puoi scrivermi via email a andrea@andreabonomo.it oppure mandarmi un DM su Instagram @andrea.bonomo. Rispondo generalmente entro 24–48 ore.",
  },
  {
    q: "Cosa imparerò grazie a Easy-Mail Pack?",
    a: "Imparerai a creare e gestire una lista email, configurare piattaforme come Mailerlite e Active Campaign, scrivere sequenze di lancio, impostare automazioni e creare landing page di iscrizione.",
  },
  {
    q: "I template vanno usati come sono o posso modificarli?",
    a: "Puoi modificarli liberamente! Sono pensati come punto di partenza da personalizzare con il tuo tone of voice e la tua offerta.",
  },
  {
    q: `Come funziona la garanzia "Soddisfatto o rimborsato"?`,
    a: "Hai 14 giorni dall'acquisto per richiedere il rimborso completo, senza dover fornire alcuna motivazione. Ti basta scrivermi.",
  },
];

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`faq-item filter-btn rounded-xl bg-white border overflow-hidden${open === i ? " is-active" : ""}`}
        >
          <button
            className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="text-sm md:text-base font-semibold text-foreground/85">{faq.q}</span>
            <svg
              width="20" height="20" viewBox="0 0 24 24" fill="none"
              className={`flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
            >
              <path d="M6 9l6 6 6-6" stroke="#156686" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div
            style={{
              maxHeight: open === i ? "400px" : "0",
              transition: open === i ? "max-height 0.4s ease" : "none",
              overflow: "hidden",
            }}
          >
            <p className="px-6 pb-5 text-sm md:text-base text-foreground/65 leading-relaxed">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Lesson list accordion ─────────────────────────────────────────────────────

const lessons = [
  "Introduzione a Easy-Mail Pack",
  "Come creare la tua email professionale?",
  "Introduzione a Mailerlite",
  "Mailerlite: creare un modulo di iscrizione alla tua lista",
  "Mailerlite: creare una campagna newsletter",
  "Mailerlite: creare la prima automazione di ringraziamento",
  "Introduzione ad Active Campaign",
  "Active Campaign: come creare un modulo di iscrizione alla tua lista",
  "Active Campaign: creare una campagna newsletter",
  "Active Campaign: creare la prima automazione di ringraziamento",
  "Creiamo la seconda automazione: la sequenza SOS",
  "Lancio con lista distinta",
  "Lancio con la newsletter",
  "Vendere con la newsletter",
  "Come creare una landing page con Mailerlite",
  "Creare una landing page con Systeme.io",
  "Crea la Privacy Policy",
  "Come creare il form in Drive",
  "Segmentazione e profilazione",
  "Fiera editoriale e organizzazione dei contenuti",
  "AI per newsletter",
  "Automazioni base",
  "Automazioni avanzate",
  "Manuali e automazioni dei social",
  "BONUS #1 – Calendario di Lancio (Template Notion)",
  "BONUS #2 – Consigli Visual per la tua Newsletter (con Emanuela Esposito)",
];

function LessonList() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? lessons : lessons.slice(0, 8);
  return (
    <div>
      <div className="space-y-2">
        {visible.map((l, i) => (
          <div
            key={i}
            className="flex items-center justify-between gap-4 rounded-xl bg-white border border-[#156686]/10 px-5 py-4"
          >
            <span className="text-sm md:text-base text-foreground/85">{l}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
              <circle cx="12" cy="12" r="10" stroke="#156686" strokeOpacity="0.4" strokeWidth="1.5" />
              <path d="M10 8l6 4-6 4V8z" fill="#156686" fillOpacity="0.5" />
            </svg>
          </div>
        ))}
      </div>
      {!expanded && (
        <button
          onClick={() => setExpanded(true)}
          className="mt-6 mx-auto block text-sm font-semibold text-[#156686] underline underline-offset-4 hover:text-[#156686]/80"
        >
          Mostra tutte le {lessons.length} lezioni ↓
        </button>
      )}
    </div>
  );
}

// ── LessonCard ────────────────────────────────────────────────────────────────

type CardPos = "top-left" | "top-right" | "bottom-left" | "bottom-right";

function LessonCard({ src, badge, tooltip, pos }: { src: string; badge: string; tooltip: string; pos: CardPos }) {
  const isLeft = pos === "top-left" || pos === "bottom-left";
  const tilt = isLeft ? "-3deg" : "3deg";

  return (
    <div className="group relative" style={{ isolation: "isolate" }}>
      <div className="relative rounded-2xl overflow-hidden aspect-video transition-transform duration-500 group-hover:scale-[1.03]">
        <img src={src} alt={badge} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center">
          <span className="inline-flex items-center border border-[#C4D9DC]/60 bg-[#156686]/80 text-[#C4D9DC] text-[11px] font-semibold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full">
            {badge}
          </span>
        </div>
      </div>

      {/* left column → tooltip outside LEFT border; right column → outside RIGHT border */}
      {isLeft ? (
        <div className="tooltip-bubble tooltip-arrow-right absolute right-full top-1/2 -translate-y-1/2 mr-4 z-30 pointer-events-none flex items-center"
          style={{ rotate: tilt, transformOrigin: "right center" }}>
          <div className="bg-[#0c2330] text-white text-[11px] font-semibold px-4 py-3 rounded-xl w-36 leading-snug">{tooltip}</div>
          <div style={{ width: 0, height: 0, borderTop: "7px solid transparent", borderBottom: "7px solid transparent", borderLeft: "7px solid #0c2330", flexShrink: 0 }} />
        </div>
      ) : (
        <div className="tooltip-bubble tooltip-arrow-left absolute left-full top-1/2 -translate-y-1/2 ml-4 z-30 pointer-events-none flex items-center"
          style={{ rotate: tilt, transformOrigin: "left center" }}>
          <div style={{ width: 0, height: 0, borderTop: "7px solid transparent", borderBottom: "7px solid transparent", borderRight: "7px solid #0c2330", flexShrink: 0 }} />
          <div className="bg-[#0c2330] text-white text-[11px] font-semibold px-4 py-3 rounded-xl w-36 leading-snug">{tooltip}</div>
        </div>
      )}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

function EasyMailPack() {
  function trackCta(label: string) {
    posthog.capture("acquisto_cta_click", { cta_label: label, page: "easy-mail-pack" });
  }

  return (
    <main className="min-h-screen bg-background">
      <Nav />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 md:py-28 px-4">
        {/* glow orbs — z-index 0 so they sit behind all content */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#156686]/20 blur-3xl pointer-events-none"
          style={{ top: "-10%", left: "-8%", zIndex: 0, animation: "orb-drift-1 22s ease-in-out infinite" }} />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-[#156686]/20 blur-3xl pointer-events-none"
          style={{ top: "5%", right: "-5%", zIndex: 0, animation: "orb-drift-2 28s ease-in-out infinite" }} />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#156686]/20 blur-3xl pointer-events-none"
          style={{ bottom: "-10%", right: "-8%", zIndex: 0, animation: "orb-drift-1 22s ease-in-out infinite" }} />

        <div className="container-narrow relative" style={{ zIndex: 1 }}>
          {/* social proof badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 border border-[#156686]/25 bg-[#156686]/6 text-[#156686] text-[11px] font-semibold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full">
              <div className="flex flex-shrink-0" style={{ gap: 0 }}>
                {[studenteEmp, studenteEmp1, studenteEmp2, studenteEmp3, studenteEmp4].map((src, i, arr) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-surface overflow-hidden flex-shrink-0"
                    style={{ marginLeft: i > 0 ? "-10px" : "0", zIndex: arr.length - i }}>
                    <img src={src} alt={`Studente ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              Oltre 150 studenti
            </div>
          </div>

          {/* headline */}
          <h1 className="h-display font-bold text-center max-w-3xl mx-auto"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}>
            Crea newsletter ed email nei tuoi lanci,{" "}
            <em className="text-[#156686]">anche se parti da 0</em>, grazie a Easy-Mail Pack.
          </h1>

          <p className="mt-6 text-sm md:text-base text-foreground/65 text-center max-w-xl mx-auto leading-relaxed">
            Easy-Mail Pack è il video corso completo, super pratico, per freelance e solopreneur, che vogliono inserire l'email marketing nel loro ecosistema e far crescere il loro business.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={PURCHASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 whitespace-nowrap"
              onClick={() => trackCta("hero-iscriviti")}
            >
              Iscriviti ora →
            </a>
            <a href="#lezioni" className="cta-ghost whitespace-nowrap">
              Guarda le lezioni ↓
            </a>
          </div>

          {/* product cover */}
          <div className="mt-14 max-w-3xl mx-auto">
            <img src={coverImg} alt="Easy-Mail Pack copertina" className="w-full rounded-2xl object-cover" />
          </div>

          {/* stats row with count-up */}
          <div className="mt-10 flex items-stretch justify-center max-w-4xl mx-auto flex-wrap gap-y-8">
            {[
              { target: 90, suffix: "+", label: "Lezioni" },
              { target: 21, suffix: "",  label: "Template" },
              { target: 5,  suffix: "",  label: "Ore di formazione" },
              { target: 2,  suffix: "",  label: "Bonus inclusi" },
            ].map((s, i) => (
              <>
                {i > 0 && (
                  <div key={`dot-${i}`} className="hidden md:flex items-center flex-shrink-0 mx-10">
                    <span className="w-px h-8 bg-[#156686]/30" />
                  </div>
                )}
                <div key={s.label} className="text-center min-w-[100px]">
                  <p className="font-bold text-[#156686]" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontVariantNumeric: "tabular-nums", minWidth: "2.5ch" }}>
                    <CountUp target={s.target} suffix={s.suffix} />
                  </p>
                  <p className="text-sm text-foreground/65 mt-1">{s.label}</p>
                </div>
              </>
            ))}
          </div>

        </div>

        <Loghi noBorder />
      </section>

      {/* ── PROBLEMA ──────────────────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 px-4" style={{ backgroundColor: "#156686" }} data-cursor-light>
        {/* glow orbs — overflow-hidden on inner wrapper, not section, so tooltips can escape */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-[600px] h-[600px] rounded-full"
            style={{ background: "#6C9FA8", opacity: 0.3, filter: "blur(100px)", top: "-20%", left: "-5%", animation: "orb-drift-1 28s ease-in-out infinite" }} />
          <div className="absolute w-[500px] h-[500px] rounded-full"
            style={{ background: "#0c2330", opacity: 0.25, filter: "blur(100px)", bottom: "-15%", right: "5%", animation: "orb-drift-2 34s ease-in-out infinite" }} />
        </div>

        <div className="container-narrow relative">
          {/* eyebrow */}
          <p className="eyebrow text-white/50 mb-10">Il punto di partenza</p>

          {/* two-column: title left, text right */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start mb-16 md:mb-20">
            {/* left: title */}
            <h2 className="h-display font-bold text-white leading-[1.1]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Tu vuoi creare la tua lista email, usare le newsletter e inviare email nei tuoi lanci.{" "}
              <em style={{ color: "#C4D9DC" }}>Ma da dove si inizia?</em>
            </h2>

            {/* right: paragraphs */}
            <div className="space-y-5 text-sm md:text-base text-white/75 leading-relaxed">
              <p>
                Easy-Mail Pack ti guida passo dopo passo nel costruire una strategia di email marketing efficace, mostrandoti come configurare strumenti come <strong className="text-white/90">Mailerlite</strong> o <strong className="text-white/90">Active Campaign</strong>, creare email accattivanti e impostare automazioni che lavorano per te.
              </p>
              <p>
                Non importa se non hai esperienza tecnica, se parti da 0 o se non hai mai visto una piattaforma di email marketing: grazie a video tutorial chiari e materiali pronti all'uso, potrai sentirti sicuro e autonomo in ogni fase.
              </p>
              <p>
                Easy-Mail Pack ti insegna a trasformare le email in un potente strumento per connetterti con la tua community, fidelizzare i clienti e aumentare il valore percepito del tuo brand.
              </p>
              <p>
                Inoltre, ti aiuta a risparmiare tempo e a rendere il processo di email marketing <strong className="text-white/90">sostenibile e alla tua portata.</strong>
              </p>
            </div>
          </div>

          {/* lesson images row */}
          <div className="grid grid-cols-2 gap-4">
            <LessonCard src={lezione2} badge="Crea la tua lista e mantienila attiva" tooltip="L'email marketing è efficace quando crei liste specifiche (newsletter, clienti, ecc)." pos="top-left" />
            <LessonCard src={lezione3} badge="Configura le piattaforme, anche se parti da 0" tooltip="Non sai come configurare le piattaforme email? No problem, è tutto spiegato per filo e per segno." pos="top-right" />
            <LessonCard src={lezione4} badge="Profila chi si iscrive alle tue liste" tooltip="Ti mostro come si creano i diversi form di iscrizione (è veramente facile, te l'assicuro)." pos="bottom-left" />
            <LessonCard src={lezione5} badge="Crea strategie di lancio con le email" tooltip="Stai lavorando a un lancio e vuoi usare le email? Qui hai tutti gli script da usare." pos="bottom-right" />
          </div>

          {/* CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={PURCHASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pill bg-white text-[#156686] hover:-translate-y-0.5 whitespace-nowrap"
              onClick={() => trackCta("problema-iscriviti")}
            >
              Iscriviti ora →
            </a>
            <a href="#lezioni" className="cta-ghost text-white whitespace-nowrap" style={{ border: "1.5px solid rgba(255,255,255,0.45)" }}>
              Guarda le lezioni ↓
            </a>
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS: Instagram mockup + testo ───────────────────────── */}
      <section className="py-16 md:py-24 px-4 bg-[#EEF3F5]">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

            {/* ── Phone mockup ─────────────────────────────── */}
            <div className="flex justify-center">
              <div className="relative w-[280px]" style={{ transform: "rotate(-6deg)", transformOrigin: "center bottom", animation: "phone-float 5s ease-in-out infinite" }}>
                {/* glow blob behind phone */}
                <div className="absolute -inset-10 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(196,217,220,0.55) 0%, rgba(255,255,255,0.25) 50%, transparent 75%)", filter: "blur(24px)", zIndex: 0 }} />
                {/* phone shell — thin aluminum-style border like iPhone 17 */}
                <div className="relative rounded-[3rem] p-[2px] z-10"
                  style={{ background: "linear-gradient(160deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.15) 100%)", boxShadow: "0 40px 90px -16px rgba(12,35,48,0.5)" }}>
                  <div className="rounded-[2.9rem] bg-[#0c2330] p-[3px]" style={{ boxShadow: "inset 0 0 0 0.5px rgba(255,255,255,0.07)" }}>
                  {/* screen — dynamic island is inside the screen like real iPhone */}
                  <div className="rounded-[2.75rem] overflow-hidden bg-[#f9fafb]" style={{ minHeight: 480 }}>
                  {/* dynamic island — inside screen */}
                  <div className="flex justify-center pt-3 pb-1 bg-[#f9fafb]">
                    <div className="w-24 h-[18px] bg-[#0c2330] rounded-full" />
                  </div>

                    {/* IG header */}
                    <div className="bg-white px-4 pt-4 pb-3 flex items-center justify-between border-b border-gray-100">
                      <span className="text-[13px] font-bold text-[#0c2330]">@iltuoprofiloinstagram</span>
                      {/* Instagram logo */}
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="#0c2330" strokeWidth="1.8" fill="none"/>
                        <circle cx="12" cy="12" r="4.2" stroke="#0c2330" strokeWidth="1.8" fill="none"/>
                        <circle cx="17.5" cy="6.5" r="1" fill="#0c2330"/>
                      </svg>
                    </div>

                    {/* profile row */}
                    <div className="bg-white px-4 py-4 flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full flex-shrink-0 overflow-hidden border-2 border-[#156686]/30">
                        <img src="https://i.pravatar.cc/56?img=47" alt="profile" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex gap-5 text-center flex-1">
                        {[["12", "Post"], ["847", "Follower"], ["310", "Seguiti"]].map(([n, l]) => (
                          <div key={l}>
                            <p className="text-[13px] font-bold text-[#0c2330]">{n}</p>
                            <p className="text-[10px] text-gray-400">{l}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* insights bar — animated countdown */}
                    <InsightsBar />

                    {/* 3 animated charts */}
                    {CHARTS.map(c => <MiniChart key={c.id} {...c} />)}

                  </div>{/* screen */}
                  </div>{/* inner bg */}
                </div>{/* gradient border wrapper */}
                {/* subtle phone reflection */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-[#0c2330]/20 blur-xl rounded-full z-10" />
              </div>
            </div>

            {/* ── Text column ──────────────────────────────── */}
            <div>
              <p className="eyebrow text-[#156686]/70 mb-4">Il problema</p>
              <h2 className="h-display text-3xl md:text-4xl lg:text-5xl mb-8">
                Fammi indovinare: il tuo business si regge{" "}
                <em className="text-[#156686]">solo sui social.</em>
              </h2>
              <div className="space-y-5 text-sm md:text-base text-foreground/70 leading-relaxed">
                <p>Cerchi di pubblicare regolarmente, interagisci con la tua community e ti sforzi per mantenere il tuo profilo attivo.</p>
                <p>Tuttavia, sei in balia dell'algoritmo: un giorno i tuoi contenuti esplodono, il giorno dopo sembrano invisibili.</p>
                <p>La copertura è imprevedibile e il traffico che generi dipende solo da quanto pubblichi.</p>
                <p><strong className="text-foreground/85">Questo ti lascia in una posizione instabile e, alla lunga, mette a rischio il tuo business.</strong></p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PERCHÉ EASY-MAIL PACK ESISTE ──────────────────────────────────── */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#156686" }} data-cursor-light>
        {/* glow orbs */}
        <div className="relative overflow-hidden">
          <div className="absolute w-[700px] h-[700px] rounded-full pointer-events-none"
            style={{ background: "#6C9FA8", opacity: 0.35, filter: "blur(100px)", bottom: "-20%", left: "5%", animation: "orb-drift-1 28s ease-in-out infinite" }} />
          <div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "#156686", opacity: 0.3, filter: "blur(100px)", bottom: "-15%", right: "10%", animation: "orb-drift-2 34s ease-in-out infinite" }} />

          <div className="container-narrow relative">
            <p className="eyebrow text-primary-foreground/70 mb-4">La soluzione</p>
            <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              Ecco perché <em style={{ color: "#C4D9DC" }}>Easy-Mail Pack</em> esiste.
            </h2>
            <p className="text-sm md:text-base text-white/80 max-w-2xl mb-12 leading-relaxed">
              Per gestire piano video corsi in modo semplice e pratico, imparare a padroneggiare tutto il necessario e integrare l'email marketing nel tuo business online.
            </p>

            <p className="text-sm md:text-base text-white/80 font-semibold mb-8">
              In Easy-Mail Pack trovi tutto quello che ti serve per:
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  title: "Creare la tua lista email e mantenerla attiva",
                  desc: "Impara a impostare la piattaforma, creare il form di iscrizione e iniziare a raccogliere contatti qualificati.",
                  img: "Screenshot: lista email / dashboard",
                },
                {
                  title: "Configurare le piattaforme email come un professionista",
                  desc: "Mailerlite o Active Campaign: ti guido passo dopo passo nella configurazione completa.",
                  img: "Screenshot: configurazione piattaforma",
                },
                {
                  title: "Profilare chi si iscrive e inviare email personalizzate",
                  desc: "Segmenta la tua lista, usa i tag e invia messaggi pertinenti alle persone giuste.",
                  img: "Screenshot: segmentazione contatti",
                },
                {
                  title: "Creare strategie di lancio con schemi e template",
                  desc: "Struttura le email del tuo lancio con sequenze pre-costruite che ti semplificano la vita.",
                  img: "Screenshot: strategia di lancio",
                },
              ].map((f) => (
                <div key={f.title} className="rounded-2xl py-6 px-6" data-cursor-dark
                  style={{ backgroundColor: "#EEF3F5", border: "1px solid rgba(196,217,220,0.5)" }}>
                  <PlaceholderImg label={f.img} className="w-full aspect-video mb-5" />
                  <h3 className="font-bold text-foreground/85 mb-2">{f.title}</h3>
                  <p className="text-sm text-foreground/65 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href={PURCHASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="pill bg-white text-[#156686] hover:-translate-y-0.5 whitespace-nowrap inline-block"
                onClick={() => trackCta("perche-esiste-cta")}
              >
                Iscriviti ora →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── PER CHI È ─────────────────────────────────────────────────────── */}
      <section id="per-chi" className="py-16 md:py-20 px-4">
        <div className="container-narrow">
          <p className="eyebrow text-[#156686]/70 mb-4 text-center">Per chi è Easy-Mail Pack?</p>
          <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-12">
            Creato per chi lavora <em className="text-[#156686]">in autonomia online.</em>
          </h2>
          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              {
                title: "Freelance",
                desc: "Hai clienti ma vuoi smettere di dipendere dal passaparola. Una lista email ti dà un canale diretto per acquisire nuovi lavori.",
              },
              {
                title: "Solopreneur",
                desc: "Vendi corsi, template o servizi. L'email marketing è il canale più efficace per lanciare e rilanciare la tua offerta.",
              },
              {
                title: "Coach",
                desc: "Hai un metodo da condividere. La newsletter ti permette di educare il tuo pubblico e portarlo naturalmente all'acquisto.",
              },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl py-8 px-6 bg-[#156686]/8 border border-[#156686]/15"
                style={{ boxShadow: "inset 0 0 40px -10px rgba(21,102,134,0.12), inset 0 1px 0 rgba(196,217,220,0.3)" }}>
                <h3 className="font-bold text-xl text-foreground/85 mb-3">{card.title}</h3>
                <p className="text-sm text-foreground/65 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COSA TROVERAI DENTRO ──────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-4 bg-[#EEF3F5]">
        <div className="container-narrow">
          <p className="eyebrow text-[#156686]/70 mb-4 text-center">Il programma</p>
          <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-6">
            Ecco cosa troverai <em className="text-[#156686]">dentro Easy-Mail Pack.</em>
          </h2>

          {/* mockup prodotto */}
          <div className="max-w-3xl mx-auto mb-10">
            <PlaceholderImg label="Mockup prodotto" className="w-full aspect-[16/7]" />
          </div>

          {/* stats */}
          <div className="flex items-center justify-center gap-10 flex-wrap mb-14">
            {[
              { n: "60+", label: "Lezioni" },
              { n: "3+", label: "Ore di formazione" },
              { n: "2", label: "Bonus" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-4xl font-bold text-[#156686]">{s.n}</p>
                <p className="text-sm text-foreground/65 mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* 6 anteprima lezioni */}
          <p className="text-sm md:text-base text-foreground/65 text-center mb-8">Queste sono alcune delle lezioni a cui avrai accesso...</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              "Crea la tua newsletter",
              "Dai vita al form di iscrizione",
              "Ora tocca alle automazioni",
              "Crea la tua landing page",
              "Struttura un lancio con le email",
              "Profila i tuoi contatti",
            ].map((title) => (
              <div key={title} className="rounded-xl overflow-hidden border border-[#156686]/10 bg-white"
                style={{ boxShadow: "0 2px 12px -2px rgba(21,102,134,0.08)" }}>
                <PlaceholderImg label={`Thumbnail: ${title}`} className="w-full aspect-video" />
                <div className="px-4 py-3">
                  <p className="text-sm font-semibold text-foreground/85">{title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LISTA COMPLETA LEZIONI ────────────────────────────────────────── */}
      <section id="lezioni" className="py-16 md:py-20 px-4">
        <div className="container-narrow max-w-3xl">
          <p className="eyebrow text-[#156686]/70 mb-4 text-center">Il programma completo</p>
          <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-4">
            Qui sotto trovi la lista <em className="text-[#156686]">completa delle lezioni.</em>
          </h2>
          <p className="text-sm text-foreground/65 text-center mb-10">
            Sono disponibili fin da subito, puoi guardare a ritmo tuo.
          </p>
          <LessonList />
        </div>
      </section>

      {/* ── BONUS ─────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-4 bg-[#EEF3F5]">
        <div className="container-narrow">
          <p className="eyebrow text-[#156686]/70 mb-4 text-center">Extra</p>
          <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-12">
            Ci sono anche due <em className="text-[#156686]">Bonus Speciali</em> per te.
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Bonus 1 */}
            <div className="rounded-2xl bg-white border border-[#156686]/15 overflow-hidden"
              style={{ boxShadow: "0 2px 16px -4px rgba(21,102,134,0.10)" }}>
              <PlaceholderImg label="Screenshot bonus: Consigli Visual Newsletter" className="w-full aspect-video" />
              <div className="px-6 py-6">
                <span className="eyebrow text-[#156686]/70 mb-2 block">Bonus #1</span>
                <h3 className="font-bold text-lg text-foreground/85 mb-3">
                  Consigli Visual per la tua Newsletter
                  <span className="block text-sm font-normal text-foreground/55 mt-0.5">con Emanuela Esposito, Strategist Designer</span>
                </h3>
                <p className="text-sm text-foreground/65 leading-relaxed">
                  Impara a valorizzare la grafica delle tue email con l'aiuto di Emanuela. Costruisci template visivi che rispecchiano la tua brand identity e rendono le tue newsletter riconoscibili.
                </p>
              </div>
            </div>
            {/* Bonus 2 */}
            <div className="rounded-2xl bg-white border border-[#156686]/15 overflow-hidden"
              style={{ boxShadow: "0 2px 16px -4px rgba(21,102,134,0.10)" }}>
              <PlaceholderImg label="Screenshot bonus: Calendario di Lancio Notion" className="w-full aspect-video" />
              <div className="px-6 py-6">
                <span className="eyebrow text-[#156686]/70 mb-2 block">Bonus #2</span>
                <h3 className="font-bold text-lg text-foreground/85 mb-3">
                  Il Calendario di Lancio
                  <span className="block text-sm font-normal text-foreground/55 mt-0.5">Template Notion pronto all'uso</span>
                </h3>
                <p className="text-sm text-foreground/65 leading-relaxed">
                  Avrai accesso al mio Calendario di Lancio — lo stesso che uso con i miei clienti. È già tutto pronto: duplichi il template con un clic e hai subito sotto controllo tutte le fasi del lancio, i contenuti e cosa fare ogni giorno.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHI SONO ──────────────────────────────────────────────────────── */}
      <ChiSono />

      {/* ── PER CHI SÌ / PER CHI NO ───────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-4 bg-[#EEF3F5]">
        <div className="container-narrow max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Per chi è */}
            <div className="rounded-2xl bg-white border border-[#156686]/15 px-6 py-8"
              style={{ boxShadow: "0 2px 16px -4px rgba(21,102,134,0.08)" }}>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#156686] mb-6">✅ Per chi è Easy-Mail Pack</p>
              <ul className="space-y-3">
                {[
                  "Per liberi professionisti, consulenti, coach e formatori che vogliono impostare una newsletter",
                  "Per chi non vuole dipendere dai social come unico canale di contatto con i clienti",
                  "Per chi è già presente online e vuole usare l'email per lanciare e vendere",
                  "Per chi vuole creare email personalizzate che rispecchino la sua brand identity",
                  "Per chi vuole imparare ad usare le automazioni per semplificare il business",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Per chi non è */}
            <div className="rounded-2xl bg-white border border-red-100 px-6 py-8"
              style={{ boxShadow: "0 2px 16px -4px rgba(239,68,68,0.06)" }}>
              <p className="text-sm font-semibold uppercase tracking-widest text-red-400 mb-6">❌ Per chi non è Easy-Mail Pack</p>
              <ul className="space-y-3">
                {[
                  "Per chi non ha ancora una presenza online e non vuole costruirla",
                  "Per chi cerca un servizio dove qualcuno crea la newsletter al posto suo",
                  "Per chi si aspetta risultati senza mettere in pratica le lezioni",
                  "Per chi ha bisogno di una strategia email ultra-avanzata a livello enterprise",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <XIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIANZE ─────────────────────────────────────────────────── */}
      <section id="recensioni" className="py-16 md:py-20 px-4">
        <div className="container-narrow">
          <p className="eyebrow text-[#156686]/70 mb-4 text-center">Social proof</p>
          <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-12">
            Cosa dicono i miei <em className="text-[#156686]">studenti e clienti</em> di me?
          </h2>
          {/* placeholder grid testimonianze */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {Array.from({ length: 6 }).map((_, i) => (
              <PlaceholderImg key={i} label={`Testimonianza ${i + 1}`} className="w-full aspect-square" />
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────────────────────── */}
      <section id="form" className="py-16 md:py-20 px-4 bg-foreground" data-cursor-light>
        <div className="container-narrow max-w-4xl">
          <p className="eyebrow text-primary-foreground/60 mb-4 text-center">Inizia ora</p>
          <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-white text-center mb-12">
            Accedi a <em style={{ color: "#C4D9DC" }}>Easy-Mail Pack.</em>
          </h2>

          <div className="bg-white rounded-xl overflow-hidden max-w-lg mx-auto" data-cursor-dark
            style={{ boxShadow: "0 8px 48px -8px rgba(0,0,0,0.28)" }}>
            <div className="px-8 py-10">
              {/* prezzo */}
              <div className="mb-8">
                <p className="text-6xl font-bold text-[#156686]">129€</p>
                <p className="text-sm text-foreground/55 mt-1">IVA inclusa · Accesso a vita</p>
              </div>

              {/* checklist */}
              <ul className="space-y-3 mb-8">
                {[
                  "60+ lezioni video",
                  "Accesso a vita",
                  "Template email pronti all'uso",
                  "Bonus #1 – Grafica per la Newsletter (con Emanuela Esposito)",
                  "Bonus #2 – Calendario di Lancio (Template Notion)",
                  "Garanzia soddisfatto o rimborsato 14 giorni",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={PURCHASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 block w-full text-center whitespace-nowrap"
                onClick={() => trackCta("pricing-acquista")}
              >
                Acquista ora →
              </a>

              {/* metodi pagamento */}
              <p className="text-xs text-foreground/40 text-center mt-4">
                PayPal · Carta di credito · Carta di debito
              </p>
            </div>

            {/* garanzia */}
            <div className="border-t border-border px-8 py-6 bg-[#EEF3F5]/60">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#156686]/10 flex items-center justify-center flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7l-9-5z" fill="#156686" fillOpacity="0.15" stroke="#156686" strokeWidth="1.5" />
                    <path d="M8 12.5l2.5 2.5 5-5" stroke="#156686" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground/85 mb-1">Non fa per te? Hai la garanzia.</p>
                  <p className="text-sm text-foreground/65 leading-relaxed">
                    Solo che ti ho dato l'acquisto non ti convince, puoi richiedere il rimborso completo entro <strong>14 giorni</strong> dall'acquisto. Non ho alcun problema a darti questa garanzia — sono sicuro del valore del corso.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-4">
        <div className="container-narrow max-w-3xl">
          <p className="eyebrow text-[#156686]/70 mb-4 text-center">Domande frequenti</p>
          <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-10">
            Hai qualche domanda? <em className="text-[#156686]">Ho le risposte.</em>
          </h2>
          <FaqAccordion />
        </div>
      </section>

      {/* ── NEWSLETTER ────────────────────────────────────────────────────── */}
      <Newsletter />

      <Footer />
    </main>
  );
}
