import { createFileRoute } from "@tanstack/react-router";
import React, { useState, useEffect, useRef } from "react";
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
import imgCreaNL from "@/assets/crea newsletter.png";
import imgForm from "@/assets/form.png";
import imgAutomazioni from "@/assets/automazioni.png";
import imgLanding from "@/assets/landing page.png";
import imgLancio from "@/assets/lancio con email.png";
import imgProfila from "@/assets/profila contenuti.png";
import imgLezioneEmanuela from "@/assets/lezione emanuela.png";
import imgCalendarioEasyMail from "@/assets/calendario di lancio easy mail pack.png";
import imgPalline from "@/assets/garanzia.png";
import recEmp1 from "@/assets/recensione emp 1.png";
import recEmp2 from "@/assets/recensione emp 2.png";
import recEmp3 from "@/assets/recensione emp 3.png";
import recEmp4 from "@/assets/recensione emp 4.png";
import recEmp5 from "@/assets/recensione emp 5.png";
import recEmp6 from "@/assets/recensione emp 6.png";
import recEmp7 from "@/assets/recensione emp 7.png";
import recEmp8 from "@/assets/recensione emp 8.png";
import recEmp9 from "@/assets/recensione emp 9.png";
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

// ── Video modal ──────────────────────────────────────────────────────────────

function VideoModal({ url, title, onClose }: { url: string; title: string; onClose: () => void }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // trigger expand animation on mount
    const t = requestAnimationFrame(() => setOpen(true));
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(t);
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 backdrop-blur-sm transition-opacity duration-300"
        style={{ backgroundColor: open ? "rgba(12,35,48,0.85)" : "rgba(12,35,48,0)" }} />
      <div
        className="relative z-10 w-full max-w-3xl md:max-w-5xl rounded-2xl overflow-hidden shadow-2xl transition-all duration-300"
        style={{
          clipPath: open ? "inset(0% 0% 0% 0% round 1rem)" : "inset(50% 0% 50% 0% round 1rem)",
          border: "1.5px solid rgba(196,217,220,0.25)",
          boxShadow: "0 0 60px -10px rgba(21,102,134,0.6)",
        }}
        onClick={e => e.stopPropagation()}>
        {/* brand top bar */}
        <div className="flex items-center justify-between px-4 py-3" style={{ backgroundColor: "#EEF3F5", borderBottom: "1px solid rgba(21,102,134,0.12)" }}>
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#156686]/60 mb-0.5">Anteprima lezione</p>
            <p className="text-[13px] font-semibold text-[#0c2330]/85 leading-tight">{title}</p>
          </div>
          <button onClick={onClose}
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs transition hover:bg-[#156686]/10 text-[#156686]/60 hover:text-[#156686] flex-shrink-0 ml-4">✕</button>
        </div>
        <div className="aspect-video" style={{ backgroundColor: "#0c2330" }}>
          {url.includes(".mp4") ? (
            <video src={url} className="w-full h-full" controls autoPlay />
          ) : (
            <iframe src={url} className="w-full h-full" allow="autoplay; fullscreen" allowFullScreen />
          )}
        </div>
      </div>
    </div>
  );
}

// ── Parallax lesson background ────────────────────────────────────────────────

const PARALLAX_IMGS = [imgCreaNL, imgForm, imgAutomazioni, imgLanding, imgLancio, imgProfila, lezione2, lezione3, lezione4, lezione5];

function ParallaxLessonBg() {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handler = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const progress = -rect.top / (rect.height + window.innerHeight);
      setOffset(progress * 200);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Generate enough rows to cover the full section height (each row ~124px incl gap)
  const ROW_H = 124;
  const [numRows, setNumRows] = useState(10);
  useEffect(() => {
    const update = () => {
      if (!ref.current) return;
      setNumRows(Math.ceil((ref.current.offsetHeight * 1.4) / ROW_H) + 2);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const rows = Array.from({ length: numRows }, (_, i) =>
    i % 2 === 0 ? PARALLAX_IMGS : [...PARALLAX_IMGS].reverse()
  );

  return (
    <div ref={ref} className="absolute pointer-events-none overflow-hidden" style={{ inset: "-30%", transform: "rotate(-8deg)", transformOrigin: "center center" }}>
      {rows.map((imgs, ri) => (
        <div key={ri} className="flex gap-3 mb-3"
          style={{ transform: `translateX(${ri % 2 === 0 ? -offset : offset}px)`, transition: "transform 0.1s linear" }}>
          {[...imgs, ...imgs, ...imgs].map((src, ii) => (
            <img key={ii} src={src} alt="" className="h-28 w-44 object-cover rounded-xl flex-shrink-0 opacity-40" />
          ))}
        </div>
      ))}
    </div>
  );
}

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
  const clipRectRef = useRef<SVGRectElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  const toPath = (pts: string) => {
    const coords = pts.trim().split(/\s+/).map(p => p.split(",").map(Number));
    return coords.map((c, i) => `${i === 0 ? "M" : "L"}${c[0]},${c[1]}`).join(" ");
  };
  const toFillPath = (pts: string) => toPath(pts) + " L200,50 L0,50 Z";
  const clipId = `clip-${id}`;

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !triggered) {
        setTriggered(true);
        const rect = clipRectRef.current;
        if (!rect) return;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / ANIM_DURATION, 1);
          rect.setAttribute("width", String(200 * p));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [triggered]);

  return (
    <div ref={wrapperRef} className="mx-3 mb-3 bg-white rounded-xl px-3 py-2.5 border border-gray-100">
      <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-1.5">{label}</p>
      <svg viewBox="0 0 200 50" className="w-full h-9">
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
          </linearGradient>
          <clipPath id={clipId}>
            <rect ref={clipRectRef} x="0" y="0" width="0" height="50" />
          </clipPath>
        </defs>
        <g clipPath={`url(#${clipId})`}>
          <path d={toFillPath(points)} fill={`url(#${id})`} stroke="none" />
          <path d={toPath(points)} fill="none" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
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

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "Quanto costa Easy-Mail Pack?",
    a: "Solamente 129€.\n\nIl prezzo è veramente ridicolo per tutto quello che ottieni.\n\nOltre 90 lezioni e 5+ ore di formazione teorico+pratica su newsletter ed email marketing.",
  },
  {
    q: "Se ho una domanda da farti, come faccio a contattarti?",
    a: <>Puoi scrivermi a <a href="mailto:ciao@andreabonomo.it" className="text-[#156686] underline underline-offset-2">ciao@andreabonomo.it</a> o contattarmi in privato su Instagram.</>,
  },
  {
    q: "Cosa imparerò grazie a Easy-Mail Pack?",
    a: (
      <div>
        <p className="mb-3">Imparerai a:</p>
        <ul className="space-y-2">
          {[
            "creare la tua prima newsletter da 0, grazie ai 9 template che trovi all'interno",
            "creare un modulo di iscrizione e la tua prima automazione di ringraziamento per chi si iscrive alla NL o scarica un tuo freebie",
            "gestire l'email marketing durante un lancio, grazie ai template con le email di pre pre lancio, pre lancio, lancio e post lancio",
            "creare landing page dove far iscrivere le persone",
            "creare una newsletter unica e inimitabile, grazie alla lezione sulla grafica di Emanuela",
            "vendere grazie alla newsletter (ci sono 3 tipologie di vendita dentro al video corso)",
            "E tanto altro",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5"><CheckIcon />{item}</li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    q: "I template vanno usati come sono o posso modificarli?",
    a: "I template sono tutti duplicabili sul tuo Notion, proprio perché tu li possa modificare come vuoi.\n\nCosì puoi creare le tue newsletter ed email direttamente da lì e averli sempre a portata di mano.",
  },
  {
    q: `Come funziona la garanzia "Soddisfatto o rimborsato"?`,
    a: "Se entro 14 giorni non sei soddisfatto di Easy-Mail Pack, ti rimborso fino all'ultimo centesimo.",
  },
];

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`faq-item filter-btn rounded-2xl${open === i ? " is-active" : ""}`}
          style={{ transition: "box-shadow 0.35s ease, transform 0.35s ease" }}
        >
          <button
            className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-base text-foreground"
            onClick={() => setOpen(open === i ? null : i)}
          >
            {faq.q}
            <svg
              width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
              style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.35s ease", flexShrink: 0, marginLeft: 16 }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div style={{ maxHeight: open === i ? "800px" : "0px", overflow: "hidden", transition: open === i ? "max-height 0.4s ease" : "none" }}>
            <div className="px-6 pb-5 text-sm text-foreground/65 leading-relaxed" style={{ whiteSpace: typeof faq.a === "string" ? "pre-line" : "normal" }}>{faq.a}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Lesson list accordion ─────────────────────────────────────────────────────


// ── LessonCard ────────────────────────────────────────────────────────────────

type CardPos = "top-left" | "top-right" | "bottom-left" | "bottom-right";

function LessonCard({ src, badge, tooltip, pos, mobileOpen, onToggle, isDimmed }: {
  src: string;
  badge: string;
  tooltip: string;
  pos: CardPos;
  mobileOpen: boolean;
  onToggle: () => void;
  isDimmed: boolean;
}) {
  const isLeft = pos === "top-left" || pos === "bottom-left";
  const tilt = isLeft ? "-3deg" : "3deg";

  const cardRef = React.useRef<HTMLDivElement>(null);
  const [showBelow, setShowBelow] = React.useState(pos !== "bottom-right");
  const [animKey, setAnimKey] = React.useState(0);

  const handleClick = () => {
    if (!mobileOpen) {
      if (pos === "bottom-right") {
        setShowBelow(false);
      } else if (cardRef.current) {
        setShowBelow(cardRef.current.getBoundingClientRect().top < window.innerHeight / 2);
      }
      setAnimKey(k => k + 1);
    }
    onToggle();
  };

  return (
    <div
      ref={cardRef}
      className={`group relative${isDimmed ? " opacity-40" : ""}${mobileOpen ? " z-10" : ""}`}
      onClick={handleClick}
    >
      <div className="relative rounded-2xl overflow-hidden aspect-video transition-transform duration-500 group-hover:scale-[1.03]">
        <img src={src} alt={badge} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center">
          <span className="inline-flex items-center border border-[#C4D9DC]/60 bg-[#156686]/80 text-[#C4D9DC] text-[9px] md:text-[11px] font-semibold uppercase tracking-[0.10em] px-2.5 py-1 rounded-full">
            {badge}
          </span>
        </div>
      </div>

      {/* Desktop tooltip: left column → outside LEFT border; right column → outside RIGHT border */}
      {isLeft ? (
        <div className="tooltip-bubble tooltip-arrow-right hidden md:flex absolute right-full top-1/2 -translate-y-1/2 mr-4 z-30 pointer-events-none items-center"
          style={{ rotate: tilt, transformOrigin: "right center" }}>
          <div className="text-white text-[11px] font-semibold px-4 py-3 rounded-xl w-36 leading-snug" style={{ backgroundColor: "rgba(12,35,48,0.97)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>{tooltip}</div>
          <div style={{ width: 0, height: 0, borderTop: "7px solid transparent", borderBottom: "7px solid transparent", borderLeft: "7px solid #0c2330", flexShrink: 0 }} />
        </div>
      ) : (
        <div className="tooltip-bubble tooltip-arrow-left hidden md:flex absolute left-full top-1/2 -translate-y-1/2 ml-4 z-30 pointer-events-none items-center"
          style={{ rotate: tilt, transformOrigin: "left center" }}>
          <div style={{ width: 0, height: 0, borderTop: "7px solid transparent", borderBottom: "7px solid transparent", borderRight: "7px solid #0c2330", flexShrink: 0 }} />
          <div className="text-white text-[11px] font-semibold px-4 py-3 rounded-xl w-36 leading-snug" style={{ backgroundColor: "rgba(12,35,48,0.97)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>{tooltip}</div>
        </div>
      )}

      {/* Mobile tooltip ABOVE */}
      <div className={`mobile-tooltip md:hidden absolute left-0 right-0 bottom-full mb-2 z-[100]${mobileOpen && !showBelow ? " is-open" : ""}`}
        style={{ transform: `rotate(${tilt})`, transformOrigin: "center bottom" }}>
        <div key={animKey} className="mobile-tooltip-inner">
          <div className="text-white text-[12px] font-semibold px-4 py-3 rounded-xl leading-snug text-center" style={{ backgroundColor: "#0c2330", boxShadow: "0 4px 20px rgba(0,0,0,0.35)" }}>{tooltip}</div>
          <div className="flex justify-center">
            <div style={{ width: 0, height: 0, borderLeft: "7px solid transparent", borderRight: "7px solid transparent", borderTop: "7px solid #0c2330" }} />
          </div>
        </div>
      </div>

      {/* Mobile tooltip BELOW */}
      <div className={`mobile-tooltip md:hidden absolute left-0 right-0 top-full mt-2 z-[100]${mobileOpen && showBelow ? " is-open" : ""}`}
        style={{ transform: `rotate(${tilt})`, transformOrigin: "center top" }}>
        <div key={animKey} className="mobile-tooltip-inner">
          <div className="flex justify-center">
            <div style={{ width: 0, height: 0, borderLeft: "7px solid transparent", borderRight: "7px solid transparent", borderBottom: "7px solid #0c2330" }} />
          </div>
          <div className="text-white text-[12px] font-semibold px-4 py-3 rounded-xl leading-snug text-center" style={{ backgroundColor: "#0c2330", boxShadow: "0 4px 20px rgba(0,0,0,0.35)" }}>{tooltip}</div>
        </div>
      </div>
    </div>
  );
}

// ── LessonGrid ────────────────────────────────────────────────────────────────

type LessonCardData = { src: string; badge: string; tooltip: string; pos: CardPos };

function LessonGrid({ cards }: { cards: LessonCardData[] }) {
  const [openCardIndex, setOpenCardIndex] = React.useState<number | null>(null);

  const handleToggle = (i: number) => {
    setOpenCardIndex(prev => (prev === i ? null : i));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {cards.map((card, i) => (
        <LessonCard
          key={i}
          src={card.src}
          badge={card.badge}
          tooltip={card.tooltip}
          pos={card.pos}
          mobileOpen={openCardIndex === i}
          onToggle={() => handleToggle(i)}
          isDimmed={openCardIndex !== null && openCardIndex !== i}
        />
      ))}
    </div>
  );
}

// ── Lesson list ──────────────────────────────────────────────────────────────

type Lesson = { name: string; videoUrl?: string };
type Module = { title: string; lessons: Lesson[] };


const MODULES: Module[] = [
  { title: "Come creare la tua email professionale", lessons: [
    { name: "Perché usare un'email professionale?" },
    { name: "Acquistare dominio e hosting email su Vhosting" },
    { name: "Reindirizzare l'email professionale a Gmail" },
    { name: "Usare l'email professionale come mittente su Mailerlite" },
    { name: "Usare l'email professionale come mittente su Active Campaign" },
  ]},
  { title: "Introduzione a Mailerlite", lessons: [
    { name: "Apertura account e inserimento informazioni" },
    { name: "Panoramica della dashboard" },
    { name: "Settaggio iniziale della piattaforma" },
    { name: "Autentica il tuo dominio per evitare di finire in SPAM" },
    { name: "Liste, segmenti e contatti" },
    { name: "Campagne" }, { name: "Moduli di iscrizione" }, { name: "Automazioni" }, { name: "Landing page" },
  ]},
  { title: "Mailerlite: modulo di iscrizione alla newsletter", lessons: [
    { name: "Creazione del form – design e impostazioni iniziali" },
    { name: "Form per iscrizione NL", videoUrl: "https://d1yei2z3i6k35z.cloudfront.net/2971732/65db28a4c8148_OkFormperiscrizioneNewsletter.mp4" }, { name: "Form per iscrizione NL + Lead Magnet" },
    { name: "Form per iscrizione pre lancio + Lead Magnet" }, { name: "Pubblicare il form" }, { name: "Testiamo il form" },
  ]},
  { title: "Mailerlite: creiamo una campagna newsletter", lessons: [
    { name: "Nome, oggetto e lista" }, { name: "Scriviamola insieme" }, { name: "Inviamola" },
    { name: "Leggiamo le statistiche" }, { name: "Creiamo un test A/B con la newsletter" }, { name: "Leggiamo le statistiche del test A/B" },
  ]},
  { title: "Mailerlite: prima automazione di ringraziamento", lessons: [
    { name: "Panoramica iniziale dell'automazione" }, { name: "Il trigger" }, { name: "Creiamo l'email di ringraziamento" },
    { name: "Attiviamo l'automazione e testiamola" }, { name: "Leggiamo le statistiche" },
  ]},
  { title: "Introduzione ad Active Campaign", lessons: [
    { name: "Apertura account e inserimento informazioni" }, { name: "Settaggio iniziale della piattaforma" },
    { name: "Autentica il tuo dominio per evitare di finire in SPAM" }, { name: "Liste e contatti" },
    { name: "Campagne" }, { name: "Moduli di iscrizione" }, { name: "Automazioni" },
  ]},
  { title: "Active Campaign: modulo di iscrizione alla newsletter", lessons: [
    { name: "Creazione della lista d'iscrizione" }, { name: "Creazione del form – design e impostazioni iniziali" },
    { name: "Form per iscrizione NL" }, { name: "Form per iscrizione NL + Lead Magnet" },
    { name: "Form per iscrizione pre lancio + Lead Magnet" }, { name: "Disabilitare o abilitare il Double Opt In" }, { name: "Testiamo il form" },
  ]},
  { title: "Active Campaign: creiamo una campagna newsletter", lessons: [
    { name: "Nome, oggetto e lista" }, { name: "Scriviamola insieme" }, { name: "Leggiamo le statistiche" },
    { name: "Creiamo un test A/B con la newsletter" }, { name: "Leggiamo le statistiche del test A/B" },
  ]},
  { title: "Active Campaign: prima automazione di ringraziamento", lessons: [
    { name: "Panoramica iniziale dell'automazione + trigger" }, { name: "Creiamo l'email di ringraziamento" },
    { name: "Attiviamo l'automazione e testiamola" }, { name: "Leggiamo le statistiche" },
  ]},
  { title: "La seconda automazione: la sequenza SOS", lessons: [
    { name: "TEMPLATE: Sequenza SOS" }, { name: "Sequenza SOS con Mailerlite" }, { name: "Sequenza SOS con Active Campaign" },
    { name: "Escludere chi è nella sequenza dalle email di pre lancio (Mailerlite)" }, { name: "Escludere chi è nella sequenza dalle email di pre lancio (Active Campaign)" },
  ]},
  { title: "AI per newsletter ed email marketing", lessons: [
    { name: "Usare l'AI come assistente per le tue newsletter", videoUrl: "https://www.youtube.com/embed/EHn1jtyZU4M?autoplay=1" }, { name: "Come addestrare l'AI: informazioni di base e tone of voice" },
    { name: "Come generare idee per la newsletter con l'AI" }, { name: "Come riorganizzare gli appunti con l'AI" },
    { name: "Scrivere la bozza provvisoria della NL con l'AI" }, { name: "Generare alternative di oggetto con l'AI" }, { name: "Rivedere la bozza finale della newsletter con l'AI" },
  ]},
  { title: "Piano editoriale e organizzazione dei contenuti", lessons: [
    { name: "Come costruire un piano editoriale per la newsletter?" }, { name: "Content repurposing: come riciclare le tue idee" },
    { name: "Format e Serie: come unirli alla newsletter?" }, { name: "Come trovare idee sempreverdi per la tua newsletter?" },
  ]},
  { title: "Automazioni base", lessons: [
    { name: "Mailerlite: automazione post download freebie" }, { name: "Active Campaign: automazione post download freebie" },
    { name: "Introduzione all'automazione di compleanno" }, { name: "Mailerlite: automazione di compleanno" }, { name: "Active Campaign: automazione di compleanno" },
  ]},
  { title: "Automazioni avanzate", lessons: [
    { name: "Introduzione all'automazione per riattivare i contatti inattivi" }, { name: "Mailerlite: automazione per riattivare i contatti inattivi" },
    { name: "Active Campaign: automazione per riattivare i contatti inattivi" }, { name: "Introduzione all'automazione per il carrello abbandonato" },
    { name: "Mailerlite: automazione per il carrello abbandonato" }, { name: "Active Campaign: automazione per il carrello abbandonato" },
    { name: "Introduzione all'automazione post acquisto" }, { name: "Mailerlite: automazione post acquisto" }, { name: "Active Campaign: automazione post acquisto" },
  ]},
  { title: "Manychat e automazioni dai social", lessons: [
    { name: "Manychat e automazioni social per la newsletter" }, { name: "Panoramica e dashboard" },
    { name: "Automazione con risposta ai commenti" }, { name: "Automazione con risposta alle storie" },
  ]},
  { title: "Lancio con Freebie e Webinar", lessons: [
    { name: "Introduzione al lancio con freebie e webinar", videoUrl: "https://d1yei2z3i6k35z.cloudfront.net/2971732/66783efc338cf_OKIntroduzionelancioFrWeb.mp4" }, { name: "Lo schema di lancio" },
    { name: "Fase di pre pre lancio" }, { name: "Fase di pre lancio" }, { name: "Fase di lancio" }, { name: "Fase di post lancio" },
  ]},
  { title: "Lancio con Lista d'Attesa", lessons: [
    { name: "Introduzione al lancio con lista d'attesa" }, { name: "Lo schema di lancio" },
    { name: "Fase di pre pre lancio" }, { name: "Fase di pre lancio" }, { name: "Fase di lancio" }, { name: "Fase di post lancio" },
  ]},
  { title: "Vendere alla Newsletter", lessons: [
    { name: "Vendere alla tua lista newsletter: sì o no?" }, { name: "Vendere alla newsletter facendo un lancio" },
    { name: "Seconda tipologia di vendita alla newsletter" }, { name: "Terza tipologia di vendita alla newsletter" },
    { name: "Escludere iscritti che non vogliono email di lancio (Active Campaign)" }, { name: "Escludere iscritti che non vogliono email di lancio (Mailerlite)" },
  ]},
  { title: "Landing page con Mailerlite", lessons: [
    { name: "Tutorial per creare la landing page" },
  ]},
  { title: "Landing page con Systeme.io", lessons: [
    { name: "Che cos'è Systeme.io?" }, { name: "Apriamo l'account" }, { name: "Tutorial per creare la landing page" },
    { name: "Inseriamo il modulo di iscrizione" }, { name: "Eliminare il banner di Systeme.io dalle pagine" },
    { name: "Creiamo la pagina di ringraziamento" }, { name: "Leggere le statistiche" },
  ]},
  { title: "Privacy policy con Iubenda", lessons: [
    { name: "Creare la Privacy Policy con Iubenda" },
  ]},
  { title: "Evitare lo SPAM", lessons: [
    { name: "Come evitare di finire in SPAM" },
  ]},
  { title: "Segmentazione e profilazione", lessons: [
    { name: "Perché è importante segmentare le liste?" }, { name: "Segmentare con Google Form + Mailerlite" },
    { name: "Collegare Make e Mailerlite" }, { name: "Segmentare con Google Form + Active Campaign" },
    { name: "Collegare Make ad Active Campaign" }, { name: "Segmentare la frequenza delle newsletter con Mailerlite" },
    { name: "Segmentare la frequenza delle newsletter con Active Campaign" },
    { name: "Campi personalizzati nei form di iscrizione di Mailerlite" }, { name: "Campi personalizzati nei form di iscrizione di Active Campaign" },
  ]},
  { title: "BONUS – Il Calendario di Lancio", lessons: [
    { name: "Template Notion – Il Calendario di Lancio" },
  ]},
  { title: "BONUS – Consigli Visual per la Newsletter", lessons: [
    { name: "Consigli Visual per la tua Newsletter (con Emanuela Esposito)" },
  ]},
];

const SHOW_INITIALLY = 9;

function LessonList({ filterUnlocked = false }: { filterUnlocked?: boolean }) {
  const [showAll, setShowAll] = useState(false);
  const [video, setVideo] = useState<{ url: string; title: string } | null>(null);

  const displayedModules = (() => {
    const base = showAll ? MODULES : MODULES.slice(0, SHOW_INITIALLY);
    if (!filterUnlocked) return base;
    return MODULES
      .map(mod => ({ ...mod, lessons: mod.lessons.filter(l => !!l.videoUrl) }))
      .filter(mod => mod.lessons.length > 0);
  })();

  const visible = displayedModules;

  return (
    <>
      {video && <VideoModal url={video.url} title={video.title} onClose={() => setVideo(null)} />}
      <div className="columns-1 md:columns-3 gap-5">
        {visible.map((mod) => {
          const originalIndex = MODULES.findIndex(m => m.title === mod.title);
          return (
          <div key={mod.title} className="break-inside-avoid mb-6">
            <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#156686] bg-[#C4D9DC]/90 px-2 py-0.5 rounded-full mb-2">
              Modulo {originalIndex + 1}
            </span>
            <p className="text-[14px] font-semibold text-white/90 mb-2">{mod.title}</p>
            <ul className="border-l-2 border-white/20 pl-3 space-y-1.5">
              {mod.lessons.map((l) => (
                <li key={l.name} className="text-[13px] leading-snug">
                  {l.videoUrl ? (
                    <button onClick={() => setVideo({ url: l.videoUrl!, title: l.name })}
                      className="group flex items-center gap-1.5 text-left text-white/80 hover:text-white transition-colors w-full cursor-pointer"
                      aria-label={`Guarda: ${l.name}`}>
                      <span className="lesson-link-text">{l.name}</span>
                      <span className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                        style={{ animation: "arrow-nudge 2.8s ease-in-out infinite", backgroundColor: "rgba(187,247,208,0.9)" }}>
                        <svg width="6" height="7" viewBox="0 0 6 7" fill="#15803d"><polygon points="0,0 6,3.5 0,7" /></svg>
                      </span>
                    </button>
                  ) : (
                    <span className="text-white/60">{l.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          );
        })}
      </div>
      {!showAll && !filterUnlocked && (
        <div className="text-center mt-8">
          <button onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 border border-white/25 rounded-full px-6 py-2.5 hover:bg-white/10 transition">
            Guarda tutti i moduli
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 1v10M1 6l5 5 5-5"/></svg>
          </button>
        </div>
      )}
    </>
  );
}

// ── Star field (same as homepage Testimonianze) ──────────────────────────────

type Star = { cx: number; cy: number; r: number; opacity: number; phase: number; angle: number; driftSpeed: number };

function drawSparkle(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, opacity: number) {
  ctx.save(); ctx.globalAlpha = opacity; ctx.fillStyle = "#156686"; ctx.beginPath();
  for (let i = 0; i < 8; i++) {
    const a = (i * Math.PI) / 4 - Math.PI / 2;
    const rad = i % 2 === 0 ? r : r * 0.3;
    i === 0 ? ctx.moveTo(x + Math.cos(a) * rad, y + Math.sin(a) * rad)
            : ctx.lineTo(x + Math.cos(a) * rad, y + Math.sin(a) * rad);
  }
  ctx.closePath(); ctx.fill(); ctx.restore();
}

function StarFieldBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let animId: number; let stars: Star[] = [];
    let mX = -9999, mY = -9999, smX = -9999, smY = -9999, active = false, pull = 0;
    const build = () => { stars = Array.from({ length: 200 }, () => ({ cx: Math.random() * canvas.width, cy: Math.random() * canvas.height, r: Math.random() * 7 + 3, opacity: Math.random() * 0.45 + 0.25, phase: Math.random() * Math.PI * 2, angle: Math.random() * Math.PI * 2, driftSpeed: Math.random() * 0.35 + 0.08 })); };
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; build(); };
    resize(); const ro = new ResizeObserver(resize); ro.observe(canvas);
    const section = canvas.parentElement!;
    section.addEventListener("mousemove", (e) => { const r = canvas.getBoundingClientRect(); mX = e.clientX - r.left; mY = e.clientY - r.top; if (!active) { smX = mX; smY = mY; active = true; } });
    section.addEventListener("mouseleave", () => { active = false; });
    let t = 0;
    const draw = () => {
      t += 0.012; ctx.clearRect(0, 0, canvas.width, canvas.height);
      smX += (mX - smX) * 0.035; smY += (mY - smY) * 0.035;
      pull += ((active ? 1 : 0) - pull) * 0.05;
      for (const s of stars) {
        s.angle += (Math.random() - 0.5) * 0.04; s.cx += Math.cos(s.angle) * s.driftSpeed; s.cy += Math.sin(s.angle) * s.driftSpeed;
        if (s.cx < -20) s.cx = canvas.width + 20; if (s.cx > canvas.width + 20) s.cx = -20;
        if (s.cy < -20) s.cy = canvas.height + 20; if (s.cy > canvas.height + 20) s.cy = -20;
        const dx = smX - s.cx, dy = smY - s.cy, dist = Math.sqrt(dx*dx + dy*dy) || 1;
        const p = 18 * Math.exp(-(dist*dist) / (2*280*280)) * pull;
        const tw = 0.75 + 0.25 * Math.sin(t * 1.6 + s.phase);
        drawSparkle(ctx, s.cx + (dx/dist)*p, s.cy + (dy/dist)*p, s.r * tw, s.opacity * tw);
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} />;
}

// ── Scroll-driven review rows ─────────────────────────────────────────────────

const REC_IMGS = [recEmp1, recEmp2, recEmp3, recEmp4, recEmp5, recEmp6, recEmp7, recEmp8, recEmp9];

function ScrollReviews() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth < 768);
  const mobileOffset = useRef(0);
  const rafRef = useRef<number>();

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const halfWidth = useRef(0);

  useEffect(() => {
    if (isMobile) {
      if (rowRef.current) halfWidth.current = rowRef.current.scrollWidth / 2;
      const tick = () => {
        mobileOffset.current += 0.5;
        const hw = halfWidth.current;
        if (hw > 0 && mobileOffset.current >= hw) mobileOffset.current -= hw;
        setOffset(mobileOffset.current);
        rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
      return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    } else {
      const handler = () => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const progress = -rect.top / (rect.height + window.innerHeight);
        setOffset(progress * 300);
      };
      window.addEventListener("scroll", handler, { passive: true });
      handler();
      return () => window.removeEventListener("scroll", handler);
    }
  }, [isMobile]);

  const row1 = [...REC_IMGS, ...REC_IMGS];
  const row2 = [...REC_IMGS].reverse().concat([...REC_IMGS].reverse());

  const getTransform = (ri: number) => {
    if (isMobile) {
      const hw = halfWidth.current || 1;
      if (ri === 0) return `translateX(${-(offset % hw)}px)`;
      return `translateX(${offset % hw}px)`;
    }
    return `translateX(${ri === 0 ? -offset : offset - 150}px)`;
  };

  return (
    <div ref={sectionRef} className="relative space-y-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32" style={{ background: "linear-gradient(to right, white, transparent)", zIndex: 2 }} />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32" style={{ background: "linear-gradient(to left, white, transparent)", zIndex: 2 }} />
      {[row1, row2].map((row, ri) => (
        <div key={ri}
          ref={ri === 0 ? rowRef : undefined}
          className="flex gap-5"
          style={{ transform: getTransform(ri), transition: isMobile ? "none" : "transform 0.05s linear", width: "max-content" }}>
          {row.map((src, i) => (
            <img key={i} src={src} alt={`Recensione ${(i % REC_IMGS.length) + 1}`}
              className="h-80 w-auto rounded-2xl object-cover flex-shrink-0" />
          ))}
        </div>
      ))}
    </div>
  );
}

// ── ModuleGrid ────────────────────────────────────────────────────────────────
const MODULE_CARDS = [
  { title: "Crea la tua newsletter",           img: imgCreaNL },
  { title: "Dai vita al form di iscrizione",   img: imgForm },
  { title: "Ora tocca alle automazioni",       img: imgAutomazioni },
  { title: "Crea la tua landing page",         img: imgLanding },
  { title: "Struttura un lancio con le email", img: imgLancio },
  { title: "Profila i tuoi contatti",          img: imgProfila },
];

function ModuleGrid() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
      {MODULE_CARDS.map(({ title, img }, i) => {
        const isActive = activeIndex === i;
        return (
          <div key={title}
            className={`rounded-xl overflow-hidden border border-[#156686]/10 bg-white group transition-transform duration-300 md:hover:-translate-y-1.5${isActive ? " -translate-y-1.5" : ""}`}
            style={{ boxShadow: "0 2px 12px -2px rgba(21,102,134,0.08)", touchAction: "manipulation" }}
            onClick={() => setActiveIndex(prev => prev === i ? null : i)}>
            <img src={img} alt={title} className="w-full aspect-video object-cover transition-transform duration-500 md:group-hover:scale-[1.03]" />
            <div className="px-4 py-3">
              <p className="text-sm font-semibold text-foreground/85">{title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

function EasyMailPack() {
  function trackCta(label: string) {
    posthog.capture("acquisto_cta_click", { cta_label: label, page: "easy-mail-pack" });
  }
  const [filterUnlocked, setFilterUnlocked] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Nav />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 md:py-28 px-2 md:px-4">
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
              href="#form"
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
          <div className="mt-10 max-w-4xl mx-auto rounded-2xl border border-[#156686]/15 bg-[#156686]/5 px-6 py-8"
            style={{ boxShadow: "0 2px 16px -4px rgba(21,102,134,0.08)" }}>
          <div className="flex items-stretch justify-center flex-nowrap gap-y-4">
            {[
              { target: 90, suffix: "+", label: "Lezioni",            labelMobile: "Lezioni" },
              { target: 21, suffix: "",  label: "Template",           labelMobile: "Template" },
              { target: 5,  suffix: "",  label: "Ore di formazione",  labelMobile: "Ore" },
              { target: 2,  suffix: "",  label: "Bonus inclusi",      labelMobile: "Bonus" },
            ].map((s, i) => (
              <>
                {i > 0 && (
                  <div key={`dot-${i}`} className="flex items-center flex-shrink-0 mx-3 md:mx-10">
                    <span className="w-px h-8 bg-[#156686]/30" />
                  </div>
                )}
                <div key={s.label} className="text-center min-w-[48px] md:min-w-[100px]">
                  <p className="font-bold text-[#156686]" style={{ fontSize: "clamp(1.5rem, 7vw, 4rem)", fontVariantNumeric: "tabular-nums", minWidth: "2.5ch" }}>
                    <CountUp target={s.target} suffix={s.suffix} />
                  </p>
                  <p className="text-xs md:text-sm text-foreground/65 mt-1"><span className="md:hidden">{s.labelMobile}</span><span className="hidden md:inline">{s.label}</span></p>
                </div>
              </>
            ))}
          </div>
          </div>

        </div>

        <Loghi noBorder />
      </section>

      {/* ── PROBLEMA ──────────────────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 px-2 md:px-4" style={{ backgroundColor: "#156686" }} data-cursor-light>
        {/* glow orbs — overflow-hidden on inner wrapper, not section, so tooltips can escape */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-[600px] h-[600px] rounded-full"
            style={{ background: "#6C9FA8", opacity: 0.3, filter: "blur(100px)", top: "-20%", left: "-5%", animation: "orb-drift-1 28s ease-in-out infinite" }} />
          <div className="absolute w-[500px] h-[500px] rounded-full"
            style={{ background: "#0c2330", opacity: 0.25, filter: "blur(100px)", bottom: "-15%", right: "5%", animation: "orb-drift-2 34s ease-in-out infinite" }} />
        </div>

        <div className="container-narrow relative">
          {/* eyebrow */}
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50 mb-10">Il punto di partenza</p>

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
          <LessonGrid cards={[
            { src: lezione2, badge: "Crea e mantieni la tua lista", tooltip: "L'email marketing è efficace quando crei liste specifiche (newsletter, clienti, ecc).", pos: "top-left" },
            { src: lezione3, badge: "Configura le piattaforme", tooltip: "Non sai come configurare le piattaforme email? No problem, è tutto spiegato per filo e per segno.", pos: "top-right" },
            { src: lezione4, badge: "Profila chi si iscrive", tooltip: "Ti mostro come si creano i diversi form di iscrizione (è veramente facile, te l'assicuro).", pos: "bottom-left" },
            { src: lezione5, badge: "Email nei tuoi lanci", tooltip: "Stai lavorando a un lancio e vuoi usare le email? Qui hai tutti gli script da usare.", pos: "bottom-right" },
          ]} />

          {/* CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#form"
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
      <section className="pt-12 pb-16 md:py-24 px-2 md:px-4 bg-white">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

            {/* ── Phone mockup ─────────────────────────────── */}
            <div className="flex justify-center">
              <div className="phone-mockup-mobile">
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
              </div>{/* phone-mockup-mobile */}
            </div>

            {/* ── Text column ──────────────────────────────── */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-4">Il problema</p>
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

          {/* ── Split arrow ───────────────────────────────── */}
          <div className="flex justify-center my-10 md:my-14">
            <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* left branch */}
              <path d="M60 4 C60 30, 20 40, 16 68" stroke="#6C9FA8" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
              {/* arrowhead left */}
              <path d="M16 68 L9 58 M16 68 L24 60" stroke="#6C9FA8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              {/* right branch */}
              <path d="M60 4 C60 30, 100 40, 104 68" stroke="#6C9FA8" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
              {/* arrowhead right */}
              <path d="M104 68 L96 60 M104 68 L111 58" stroke="#6C9FA8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* ── Two solution boxes ────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {[
              {
                emoji: "✉️",
                glow: "rgba(21,102,134,0.35)",
                title: "Perché dovresti usare la newsletter nel tuo ecosistema",
                items: [
                  "Non dipende da algoritmi o copertura organica",
                  "La mailing list è davvero tua: controllo diretto su quando e come comunicare",
                  "Dialogo più personale e costante con le persone giuste",
                  "Nessuna pressione a pubblicare ogni giorno: frequenza settimanale, bisettimanale o mensile",
                  "La tua lista cresce comunque, indipendentemente dal profilo social",
                ],
              },
              {
                emoji: "🚀",
                glow: "rgba(21,102,134,0.35)",
                title: "Perché dovresti usare le email nei tuoi lanci",
                items: [
                  "Fare un lancio solo sui social è rischioso: sei in balia di un canale che non controlli",
                  "L'email è un canale parallelo che non dipende dall'algoritmo",
                  "Tasso di apertura e di conversione più alto rispetto ai social",
                  "Più vendite e più clienti senza essere costantemente presente con contenuti",
                  "Strategia email + organico = lancio più solido e prevedibile",
                ],
              },
            ].map(box => (
              <div key={box.title} className="rounded-2xl p-7 md:p-8 bg-[#156686]/8 border border-[#156686]/15">
                {/* floating emoji with glow */}
                <div className="relative inline-block mb-5">
                  <div className="text-4xl" style={{ animation: "thought-float 3s ease-in-out infinite" }}>
                    {box.emoji}
                  </div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-4 blur-lg rounded-full pointer-events-none"
                    style={{ backgroundColor: box.glow }} />
                </div>

                <h3 className="font-semibold text-[#0c2330] text-lg md:text-xl mb-5 leading-snug">
                  {box.title}
                </h3>
                <ul className="space-y-3">
                  {box.items.map(t => (
                    <li key={t} className="flex items-start gap-3 text-sm text-foreground/70 leading-relaxed">
                      <CheckIcon />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── PERCHÉ EASY-MAIL PACK ESISTE ──────────────────────────────────── */}
      <section className="py-16 md:py-20 px-2 md:px-4 bg-[#EEF3F5] relative overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#156686]/20 blur-3xl pointer-events-none"
          style={{ top: "-10%", left: "-8%", animation: "orb-drift-1 22s ease-in-out infinite" }} />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#156686]/15 blur-3xl pointer-events-none"
          style={{ bottom: "-15%", right: "-5%", animation: "orb-drift-2 28s ease-in-out infinite" }} />
        <div className="container-narrow relative">
          {/* title + text with handwriting annotation floating right */}
          <div className="relative mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-4">La soluzione</p>
            <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
              Ecco perché <em className="text-[#156686]">Easy-Mail Pack</em> esiste.
            </h2>
            <p className="text-sm md:text-base text-foreground/70 max-w-2xl leading-relaxed">
              Quando ho creato Easy-Mail Pack, avevo in mente un obiettivo molto chiaro: rendere indipendenti i freelance e i solopreneur che vogliono creare la propria lista email e aggiungere l'email marketing al loro ecosistema di business.
            </p>

            {/* handwriting annotation — right side, aligned with title area */}
            <div className="hidden md:block absolute right-0 bottom-0 text-center" style={{ transform: "rotate(3deg)" }}>
              <p className="font-['Caveat'] text-[#156686] leading-snug" style={{ fontSize: "1.2rem" }}>
                Queste sono solo alcune<br />delle lezioni a cui avrai accesso
              </p>
              <svg width="60" height="48" viewBox="0 0 60 48" fill="none" className="mt-1 mx-auto text-[#156686]/60">
                <path d="M56 4 C50 20, 30 30, 10 42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                <path d="M10 42 L20 36 M10 42 L14 31" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <ModuleGrid />

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#form"
              className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 whitespace-nowrap"
              onClick={() => trackCta("perche-esiste-cta")}
            >
              Iscriviti ora →
            </a>
            <a href="#lezioni" className="cta-ghost whitespace-nowrap">
              Guarda le lezioni ↓
            </a>
          </div>
        </div>
      </section>

      {/* ── PER CHI È ─────────────────────────────────────────────────────── */}
      <section id="per-chi" className="py-16 md:py-20 px-2 md:px-4">
        <div className="container-narrow">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-4 text-center">Per chi è Easy-Mail Pack?</p>
          <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-12">
            Easy-Mail Pack è <em className="text-[#156686]">perfetto per te</em> se sei:
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                emoji: "💼",
                delay: "0s",
                title: "Freelance",
                tags: ["Clienti diretti", "Indipendenza", "Libertà"],
                paragraphs: [
                  "Se sei un libero professionista che si affida ai social per trovare clienti, Easy-Mail Pack ti aiuta a creare una lista email su cui hai il controllo completo.",
                  "Così non devi più dipendere dall'algoritmo di Instagram o da piattaforme che cambiano continuamente.",
                ],
              },
              {
                emoji: "🚀",
                delay: "0.3s",
                title: "Solopreneur",
                tags: ["Automazioni", "Risparmio di tempo", "Scalabilità"],
                paragraphs: [
                  "Gestire un intero business da solo può essere stressante.",
                  "Con Easy-Mail Pack, impari a usare l'email marketing in modo sostenibile, risparmiando tempo con automazioni e strumenti che lavorano per te.",
                ],
              },
              {
                emoji: "🎯",
                delay: "0.6s",
                title: "Coach",
                tags: ["Relazioni", "Educazione", "Conversioni"],
                paragraphs: [
                  "Se lavori come coach e vuoi costruire relazioni più forti con i tuoi clienti, Easy-Mail Pack è perfetto per creare un canale diretto.",
                  "Le email ti aiutano a educare, coinvolgere e guidare i tuoi iscritti lungo un percorso che li porta a scegliere i tuoi servizi.",
                ],
              },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl py-8 px-6 bg-[#156686]/8 border border-[#156686]/15 flex flex-col"
                style={{ boxShadow: "inset 0 0 40px -10px rgba(21,102,134,0.12), inset 0 1px 0 rgba(196,217,220,0.3)" }}>

                {/* floating emoji with glow */}
                <div className="relative inline-block mb-5 self-start">
                  <div className="text-4xl" style={{ animation: `thought-float 3s ease-in-out ${card.delay} infinite` }}>
                    {card.emoji}
                  </div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-4 blur-lg rounded-full pointer-events-none"
                    style={{ backgroundColor: "rgba(21,102,134,0.35)" }} />
                </div>

                <h3 className="font-bold text-xl text-foreground/85 mb-3">{card.title}</h3>

                {card.paragraphs.map((p, i) => (
                  <p key={i} className={`text-sm text-foreground/65 leading-relaxed${i > 0 ? " mt-3" : ""}`}>{p}</p>
                ))}

                {/* keyword tags */}
                <div className="mt-6 pt-5 border-t border-[#156686]/15 flex flex-wrap gap-x-3 gap-y-1">
                  {card.tags.map((tag, i) => (
                    <span key={tag} className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#156686]/70">
                      {i > 0 && <span className="text-[#156686]/30 mx-0.5">·</span>}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LISTA COMPLETA LEZIONI ────────────────────────────────────────── */}
      <section id="lezioni" className="py-16 md:py-20 px-2 md:px-4 relative overflow-hidden" style={{ backgroundColor: "#156686" }} data-cursor-light>
        {/* parallax diagonal lesson images in background */}
        <ParallaxLessonBg />
        {/* dark overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(21,102,134,0.88) 0%, rgba(21,102,134,0.84) 50%, rgba(21,102,134,0.88) 100%)" }} />

        <div className="container-narrow relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60 mb-4 text-center">Il programma completo</p>
          <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-center text-white mb-4">
            Qui sotto trovi la lista <em style={{ color: "#C4D9DC" }}>completa delle lezioni.</em>
          </h2>

          {/* unlocked lessons badge */}
          <div className="flex flex-col items-center gap-3 mb-10">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.12em] text-center"
              style={{ backgroundColor: "rgba(196,217,220,0.12)", border: "1px solid rgba(196,217,220,0.25)", color: "#C4D9DC" }}>
              🔓
              <span>Come regalo, ti ho sbloccato alcune lezioni – hanno questo simbolo <span className="inline-flex flex-shrink-0 w-4 h-4 rounded-full items-center justify-center align-middle" style={{ backgroundColor: "rgba(187,247,208,0.9)" }}><svg width="6" height="7" viewBox="0 0 6 7" fill="#15803d"><polygon points="0,0 6,3.5 0,7" /></svg></span> <button onClick={() => setFilterUnlocked(true)} className="inline underline underline-offset-2 hover:opacity-80 transition-opacity cursor-pointer" style={{ color: "#C4D9DC", fontWeight: "inherit", fontSize: "inherit", textTransform: "inherit", letterSpacing: "inherit" }}>(o clicca qui per filtrarle)</button></span>
            </div>
            {filterUnlocked && (
              <button
                onClick={() => setFilterUnlocked(false)}
                className="text-[11px] font-semibold text-white/60 hover:text-white/90 transition-colors underline underline-offset-2 cursor-pointer">
                Mostra tutte le lezioni
              </button>
            )}
          </div>

          <LessonList filterUnlocked={filterUnlocked} />
        </div>
      </section>

      {/* ── BONUS ─────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-2 md:px-4 bg-[#EEF3F5]">
        <div className="container-narrow">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-4 text-center">Extra</p>
          <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-12">
            Ci sono anche due <em className="text-[#156686]">Bonus Speciali</em> per te.
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Bonus 1 */}
            <div className="rounded-2xl bg-white border border-[#156686]/15 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ boxShadow: "0 2px 16px -4px rgba(21,102,134,0.10)" }}>
              <div className="p-4 pb-0">
                <img src={imgLezioneEmanuela} alt="Lezione Emanuela Esposito" className="w-full aspect-video object-cover rounded-xl" />
              </div>
              <div className="px-6 py-6">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-2 block">Bonus #1</span>
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
            <div className="rounded-2xl bg-white border border-[#156686]/15 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ boxShadow: "0 2px 16px -4px rgba(21,102,134,0.10)" }}>
              <div className="p-4 pb-0">
                <img src={imgCalendarioEasyMail} alt="Calendario di Lancio Easy-Mail Pack" className="w-full aspect-video object-cover rounded-xl" />
              </div>
              <div className="px-6 py-6">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-2 block">Bonus #2</span>
                <h3 className="font-bold text-lg text-foreground/85 mb-3">
                  Il Calendario di Lancio
                  <span className="block text-sm font-normal text-foreground/55 mt-0.5">Template Notion pronto all'uso</span>
                </h3>
                <p className="text-sm text-foreground/65 leading-relaxed">
                  Avrai accesso al mio Calendario di Lancio, lo stesso che uso con i miei clienti. È già tutto pronto: duplichi il template con un clic e hai subito sotto controllo tutte le fasi del lancio, i contenuti e cosa fare ogni giorno.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHI SONO ──────────────────────────────────────────────────────── */}
      <ChiSono ctaText="Acquista ora Easy-Mail Pack →" ctaHref="#form" />

      {/* ── TESTIMONIANZE ─────────────────────────────────────────────────── */}
      <section id="recensioni" className="pt-20 pb-24 relative overflow-hidden">
        <StarFieldBg />
        <div className="absolute inset-x-0 top-0 h-40 pointer-events-none" style={{ background: "linear-gradient(to bottom, white, transparent)", zIndex: 1 }} />
        <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none" style={{ background: "linear-gradient(to top, white, transparent)", zIndex: 1 }} />
        <div className="container-narrow relative z-10 mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-4 text-center">Le parole dei miei studenti ❤️</p>
          <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-center">
            Cosa dicono i miei studenti e clienti di <em className="text-[#156686]">Easy-Mail Pack?</em>
          </h2>
        </div>
        <div className="relative z-10" style={{ clipPath: "inset(0)" }}>
          <ScrollReviews />
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────────────────────── */}
      <section id="form" className="py-16 md:py-20 px-2 md:px-4 bg-foreground relative overflow-hidden" data-cursor-light>
        {/* Glow orbs */}
        <div className="absolute w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "#6C9FA8", opacity: 0.35, filter: "blur(100px)", bottom: "-20%", left: "5%", animation: "orb-drift-1 28s ease-in-out infinite" }} />
        <div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "#156686", opacity: 0.3, filter: "blur(100px)", bottom: "-15%", right: "10%", animation: "orb-drift-2 34s ease-in-out infinite" }} />

        <div className="container-narrow max-w-4xl mx-auto relative z-10">

          {/* Mobile annotation */}
          <div className="block md:hidden mb-6 pl-2" data-cursor-light>
            <div style={{ transform: "rotate(-6deg)", transformOrigin: "left top" }}>
              <span style={{ fontFamily: "'Caveat', cursive", fontSize: "1.2rem", color: "#C4D9DC", lineHeight: 1.35, display: "block" }}>
                Pronto a lanciare la tua newsletter e a usare le email nei tuoi lanci come un pro?
              </span>
              <svg width="50" height="55" viewBox="0 0 50 55" fill="none" className="mt-2 ml-2">
                <path d="M 25 4 C 22 20, 28 36, 25 48" stroke="#C4D9DC" strokeWidth="2" strokeLinecap="round" fill="none"/>
                <path d="M 17 40 L 25 52 L 33 40" stroke="#C4D9DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
          </div>

          <div className="relative">
            {/* Desktop annotation */}
            <div className="hidden md:block absolute right-full top-8 pr-6 w-52" data-cursor-light>
              <span style={{ fontFamily: "'Caveat', cursive", fontSize: "1.2rem", color: "#C4D9DC", lineHeight: 1.35, display: "block", transform: "rotate(-6deg)", transformOrigin: "center top" }}>
                Pronto a lanciare la tua newsletter e a usare le email nei tuoi lanci come un pro?
              </span>
              <svg width="80" height="75" viewBox="0 0 80 75" fill="none" className="mt-1 ml-6">
                <path d="M 25 4 C 24 28, 20 50, 72 68" stroke="#C4D9DC" strokeWidth="2" strokeLinecap="round" fill="none"/>
                <path d="M 60 60 L 72 68 L 62 76" stroke="#C4D9DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>

            <div className="bg-white rounded-xl overflow-hidden" data-cursor-dark>

              {/* ── MOBILE layout ── */}
              <div className="md:hidden pt-6 pb-10 text-center">
                <div className="px-5">
                  <img src={coverImg} alt="Easy-Mail Pack" className="w-44 mx-auto mb-3" style={{ animation: "img-float 5s ease-in-out infinite" }} />
                  <div className="inline-flex items-center gap-1.5 border border-[#156686]/25 bg-[#156686]/6 text-[#156686] text-[11px] font-semibold uppercase tracking-[0.12em] px-3 py-1 rounded-full mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" style={{ boxShadow: "0 0 5px rgba(52,211,153,0.8)" }} />
                    Accesso immediato
                  </div>
                  <h2 className="h-display text-3xl mb-1">Easy-Mail <em className="text-[#156686]">Pack</em></h2>
                  <p className="text-foreground/60 text-sm mb-7">Video corso – accesso immediato dopo l'acquisto</p>
                </div>
                <div className="px-8">
                  <div className="flex items-baseline gap-2 justify-center mb-10">
                    <span className="text-5xl font-bold text-[#156686]">129€</span>
                    <span className="text-foreground/40 text-sm">una tantum</span>
                  </div>
                  <div className="text-left max-w-xs mx-auto mb-8">
                    <p className="text-xs font-semibold text-foreground/50 uppercase tracking-[0.15em] mb-4">Cosa ricevi</p>
                    <ul className="space-y-3">
                      {[
                        "90+ lezioni video",
                        "21 template pronti all'uso",
                        "5 ore di formazione",
                        "Accesso a vita",
                        "Supporto via email",
                        "Bonus: Grafica per la Newsletter (con Emanuela Esposito)",
                        "Bonus: Calendario di Lancio (Template Notion)",
                        "Garanzia soddisfatto o rimborsato 14 giorni",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80"><CheckIcon />{item}</li>
                      ))}
                    </ul>
                  </div>
                  <a href={PURCHASE_URL}
                    onClick={() => trackCta("pricing-acquista-mobile")}
                    className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 block w-full text-center whitespace-nowrap">
                    Acquista ora a 129€ →
                  </a>
                  <p className="text-xs text-foreground/40 mt-3">Puoi pagare anche a rate, selezionando l'opzione nel checkout</p>
                </div>
              </div>

              {/* ── DESKTOP layout ── */}
              <div className="hidden md:block px-14 pt-12 pb-12">
                <div className="flex items-start gap-8 mb-10">
                  <img src={coverImg} alt="Easy-Mail Pack" className="w-36 flex-shrink-0" style={{ animation: "img-float 5s ease-in-out infinite" }} />
                  <div>
                    <div className="inline-flex items-center gap-1.5 border border-[#156686]/25 bg-[#156686]/6 text-[#156686] text-[11px] font-semibold uppercase tracking-[0.12em] px-3 py-1 rounded-full mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" style={{ boxShadow: "0 0 5px rgba(52,211,153,0.8)" }} />
                      Accesso immediato
                    </div>
                    <h2 className="h-display text-4xl lg:text-5xl mb-2">Easy-Mail <em className="text-[#156686]">Pack</em></h2>
                    <p className="text-foreground/60 text-sm">Video corso – accesso immediato dopo l'acquisto</p>
                  </div>
                </div>
                <div className="flex gap-0">
                  <div className="flex-1 pr-12">
                    <p className="text-xs font-semibold text-foreground/50 uppercase tracking-[0.15em] mb-5">Cosa ricevi</p>
                    <ul className="space-y-3">
                      {[
                        "90+ lezioni video",
                        "21 template pronti all'uso",
                        "5 ore di formazione",
                        "Accesso a vita",
                        "Supporto via email",
                        "Bonus: Grafica per la Newsletter (con Emanuela Esposito)",
                        "Bonus: Calendario di Lancio (Template Notion)",
                        "Garanzia soddisfatto o rimborsato 14 giorni",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80"><CheckIcon />{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-px bg-foreground/10 mx-4 self-stretch" />
                  <div className="w-72 flex-shrink-0 pl-12 flex flex-col justify-center items-center text-center">
                    <span className="text-5xl font-bold text-[#156686]">129€</span>
                    <span className="text-foreground/40 text-sm mt-1 mb-2">una tantum</span>
                    <span className="text-foreground/40 text-xs mb-8">Accesso a vita</span>
                    <a href={PURCHASE_URL}
                      onClick={() => trackCta("pricing-acquista-desktop")}
                      className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 text-center block w-full">
                      Acquista ora a 129€ →
                    </a>
                    <p className="text-xs text-foreground/40 mt-3">Puoi pagare anche a rate, selezionando l'opzione nel checkout</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ── GARANZIA ── */}
          <div className="mt-10 bg-white/5 border border-white/20 rounded-2xl px-8 py-7">
            <div className="flex items-center gap-6 mb-3">
              <img src={imgPalline} alt="Garanzia" className="w-16 h-16 flex-shrink-0 rounded-xl object-cover" />
              <p className="font-semibold text-white">Voglio che il tuo acquisto sia consapevole.</p>
            </div>
            <p className="text-sm text-white/65 leading-relaxed">
              Quindi, puoi sempre richiedere il rimborso entro <strong className="text-white/85">14 giorni</strong> dall'acquisto. Non ho alcun problema a darti questa garanzia. Se non sei soddisfatto per qualsiasi motivo, puoi richiedermi il rimborso e ti darò indietro fino all'ultimo centesimo.
            </p>
          </div>

        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-2 md:px-4">
        <div className="container-narrow max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-4 text-center">Domande frequenti</p>
          <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-10">
            Hai qualche domanda? <em className="text-[#156686]">Ho le risposte.</em>
          </h2>
          <FaqAccordion />
        </div>
      </section>

      {/* ── NEWSLETTER ────────────────────────────────────────────────────── */}
      <div id="newsletter"><Newsletter /></div>

      <Footer />
    </main>
  );
}
