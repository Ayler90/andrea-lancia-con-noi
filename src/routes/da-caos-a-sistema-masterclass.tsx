import { createFileRoute } from "@tanstack/react-router";
import React, { useState, useEffect, useRef } from "react";
import posthog from "posthog-js";
import andreaFavicon from "@/assets/Foto profilo IG - Favicon.jpg";
import davideFoto from "@/assets/Davide foto profilo.jpg";
import copertingWorkbook from "@/assets/copertina da caos a sistema workbook.png";
import andreaChiSono from "@/assets/Andrea chi sono.png";
import davideChiSono from "@/assets/Davide chi sono.png";
import andreadaveSfondo from "@/assets/Andrea e Dave immagine sfondo.png";
import recBB1 from "@/assets/Recensioni Business Blueprint 1.jpg";
import recBB2 from "@/assets/Recensioni Business Blueprint 2.png";
import recBB3 from "@/assets/Recensioni Business Blueprint3.png";
import recBB4 from "@/assets/Recensioni Business Blueprint4.png";
import recBB5 from "@/assets/Recensioni Business Blueprint5.png";
import recBB6 from "@/assets/Recensioni Business Blueprint6.jpg";
import recBB7 from "@/assets/Recensioni Business Blueprint7.png";
import recBB8 from "@/assets/Recensioni Business Blueprint8.jpg";
import recBB9 from "@/assets/Recensioni Business Blueprint9.jpg";

export const Route = createFileRoute("/da-caos-a-sistema-masterclass")({
  component: ZeroImprovvisazioneMasterclass,
  head: () => ({
    meta: [
      { name: "robots", content: "noindex, nofollow" },
      { title: "Da Caos a Sistema – Masterclass Gratuita | Andrea Bonomo" },
      { name: "description", content: "La masterclass gratuita con Andrea Bonomo e Davide Angiolillo per costruire il tuo piano lanci per i prossimi 12 mesi." },
    ],
  }),
});

function CheckIcon({ color = "#4B6380" }: { color?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill={color} fillOpacity="0.12" />
      <path d="M7 12.5l3.5 3.5 6.5-7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type Star = { cx: number; cy: number; r: number; opacity: number; phase: number; angle: number; driftSpeed: number };

function drawSparkle(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, opacity: number) {
  ctx.save(); ctx.globalAlpha = opacity; ctx.fillStyle = "#4B6380"; ctx.beginPath();
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
        const dx = smX - s.cx, dy = smY - s.cy, dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const p = 18 * Math.exp(-(dist * dist) / (2 * 280 * 280)) * pull;
        const tw = 0.75 + 0.25 * Math.sin(t * 1.6 + s.phase);
        drawSparkle(ctx, s.cx + (dx / dist) * p, s.cy + (dy / dist) * p, s.r * tw, s.opacity * tw);
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} />;
}

const FAQS: { q: string; a: string }[] = [
  { q: "La masterclass è registrata?", a: "Sì, potrai rivedere la registrazione per 7 giorni. Ma la masterclass è fatta apposta per essere il più pratica possibile e per rispondere alle domande in diretta, quindi se ti riguardi la registrazione ti perdi buona parte del valore." },
  { q: "È davvero gratuito o alla fine mi vendete qualcosa?", a: "La masterclass è gratuita. Alla fine ti presentiamo Business Blueprint, il nostro percorso annuale a posti limitati. Ma la masterclass di per sé non ha alcun costo, non ci sono passaggi nascosti e non sei obbligato a niente." },
  { q: "Ho solo un servizio. Ha senso partecipare?", a: "Sì. Lavoriamo esattamente sulla fase in cui sei: come costruire un piano solido con quello che hai adesso, quando aggiungere altre offerte e quando invece ha più senso consolidare quello che hai già." },
  { q: "Ho già più offerte ma penso di avere un problema di target.", a: "La prima parte serve proprio a fare chiarezza su questo. Spesso avere troppe offerte non è il problema: il punto è capire se sono giuste per il pubblico a cui vuoi arrivare." },
  { q: "Funziona anche se vendo solo infoprodotti?", a: "Sì. La struttura funziona allo stesso modo per videocorsi, membership, masterclass e percorsi digitali. Il workbook e il calendario si adattano a quello che vendi." },
  { q: "Devo esserci in diretta?", a: "Il workbook si compila in diretta e noi ti guidiamo in tempo reale. Se non puoi esserci perdi la parte pratica. Prima di iscriverti, assicurati di non avere altri impegni quella serata." },
];

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {FAQS.map((faq, i) => (
        <div key={i} className={`faq-item filter-btn rounded-2xl${open === i ? " is-active" : ""}`}
          style={{ transition: "box-shadow 0.35s ease, transform 0.35s ease" }}>
          <button className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-base text-foreground"
            onClick={() => setOpen(open === i ? null : i)}>
            {faq.q}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
              style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.35s ease", flexShrink: 0, marginLeft: 16 }}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div style={{ maxHeight: open === i ? "800px" : "0px", overflow: "hidden", transition: open === i ? "max-height 0.4s ease" : "none" }}>
            <div className="px-6 pb-5 text-sm text-foreground/65 leading-relaxed">{faq.a}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

const STEPS: { n: string; title: string; badge?: string; points: React.ReactNode[] }[] = [
  {
    n: "01",
    title: "Il tuo target: a chi ti stai rivolgendo davvero",
    badge: "con Davide",
    points: [
      <>Partiamo da una domanda scomoda: <strong>sai davvero a chi stai vendendo?</strong> Non in senso generico, ma in modo specifico: chi è, cosa vuole, cosa lo blocca, perché dovrebbe scegliere te e non qualcun altro.</>,
      <>In questa parte costruiamo insieme il <strong>profilo del tuo cliente ideale in modo operativo</strong>: non un esercizio teorico, ma uno strumento che ti serve per prendere <strong>decisioni concrete</strong> su cosa creare, come comunicarlo e a chi.</>,
      <>Uscire da questa sezione con le idee chiare sul target cambia tutto: i tuoi contenuti diventano più efficaci, <strong>i tuoi lanci parlano alla persona giusta</strong> e smetti di sentirti come se stessi urlando nel vuoto.</>,
    ],
  },
  {
    n: "02",
    title: "Le tue offerte: quante, quali e in che ordine",
    badge: "con Davide",
    points: [
      <>Hai troppe offerte e non sai quale promuovere? O ne hai una sola e non capisci perché non basta? In questa sezione guardiamo quello che hai e lo trasformiamo in <strong>un ecosistema di offerte che ha senso</strong>.</>,
      <>Capiamo quante offerte servono davvero, <strong>quale è il punto di ingresso più efficace</strong> per i nuovi clienti, quale è l'offerta principale da lanciare e come costruire <strong>una progressione naturale</strong> che porta le persone ad acquistare di più nel tempo.</>,
      <>Il risultato è <strong>una mappa chiara delle tue offerte</strong>: cosa vendi, a chi, in quale ordine e perché. Niente più confusione su cosa spingere e quando.</>,
    ],
  },
  {
    n: "03",
    title: "Il tuo freebie: cosa regalare per far crescere la lista",
    badge: "con Andrea",
    points: [
      <><strong>Senza una lista email non hai un business scalabile</strong>: hai solo clienti che comprano una volta e spariscono. Il freebie è lo strumento che trasforma i visitatori in contatti e i contatti in clienti.</>,
      <>In questa parte capiamo <strong>quale tipo di contenuto gratuito funziona meglio per il tuo business</strong>, non in assoluto, ma in base a quello che vendi e a chi ti rivolgi. Una guida, un template, una mini-formazione, un audit: la scelta giusta dipende dal tuo target e dal tuo ecosistema.</>,
      <>Esci da questa sezione con <strong>un'idea concreta del freebie da creare</strong> e con la struttura del <strong>funnel di acquisizione che lo distribuisce in automatico</strong>.</>,
    ],
  },
  {
    n: "04",
    title: "Il calendario lanci e funnel per i prossimi 12 mesi",
    badge: "con Andrea",
    points: [
      <>Questa è la parte che cambia il modo in cui gestisci il tuo business. <strong>Costruiamo insieme la mappa dell'anno</strong>: quando fare i lanci principali, dove inserire i micro lanci tra un lancio e l'altro e come far girare i funnel evergreen nei periodi in cui non sei in fase attiva.</>,
      <>Non si tratta di riempire un calendario a caso. Si tratta di <strong>scegliere i momenti giusti per il tuo mercato</strong>, distribuire le energie nel modo più efficace e fare in modo che <strong>le entrate siano più costanti e prevedibili</strong>, senza dover stare sempre a spingere.</>,
      <>A fine masterclass hai sul foglio di lavoro <strong>un piano lanci per i prossimi 12 mesi: date, offerte, tipo di lancio e struttura del funnel</strong>. Qualcosa di concreto che puoi iniziare a usare da subito.</>,
    ],
  },
];

/* ── Illustrazioni per ogni step del programma ── */
function IllTarget({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 200 200" width="200" height="200" style={{ overflow: "visible" }}>
      {[80, 60, 40, 22].map((r, i) => (
        <circle key={r} cx="100" cy="100" r={r}
          fill="none"
          stroke="#4B6380"
          strokeWidth={i === 3 ? 0 : 1.5}
          opacity={active ? [0.12, 0.2, 0.35, 0][i] : 0}
          style={{ transition: `opacity 0.5s ease ${i * 0.07}s` }}
        />
      ))}
      {/* filled rings */}
      <circle cx="100" cy="100" r={58} fill="rgba(21,102,134,0.07)" opacity={active ? 1 : 0} style={{ transition: "opacity 0.4s ease 0.1s" }} />
      <circle cx="100" cy="100" r={40} fill="rgba(21,102,134,0.10)" opacity={active ? 1 : 0} style={{ transition: "opacity 0.4s ease 0.15s" }} />
      <circle cx="100" cy="100" r={22} fill="rgba(21,102,134,0.20)" opacity={active ? 1 : 0} style={{ transition: "opacity 0.4s ease 0.2s" }} />
      <circle cx="100" cy="100" r={8} fill="#4B6380" opacity={active ? 1 : 0} style={{ transition: "opacity 0.4s ease 0.28s" }} />
      {/* crosshair */}
      {[[-85,0],[85,0],[0,-85],[0,85]].map(([dx, dy], i) => (
        <line key={i} x1={100} y1={100} x2={100 + dx} y2={100 + dy}
          stroke="#4B6380" strokeWidth="1" strokeDasharray="3 4"
          opacity={active ? 0.25 : 0} style={{ transition: `opacity 0.4s ease ${0.3 + i*0.05}s` }} />
      ))}
      {/* floating dot */}
      <circle cx="148" cy="58" r="5" fill="#4B6380" opacity={active ? 0.5 : 0}
        style={{ transition: "opacity 0.4s ease 0.4s", animation: active ? "thought-float 3s ease-in-out infinite" : "none" }} />
      <circle cx="60" cy="148" r="3.5" fill="#4B6380" opacity={active ? 0.35 : 0}
        style={{ transition: "opacity 0.4s ease 0.45s", animation: active ? "thought-float 3.8s ease-in-out 0.5s infinite" : "none" }} />
    </svg>
  );
}

function IllOfferte({ active }: { active: boolean }) {
  const cards = [
    { y: 36, label: "Offerta principale", w: 140 },
    { y: 78, label: "Upsell", w: 110 },
    { y: 118, label: "Entry point", w: 125 },
  ];
  return (
    <svg viewBox="0 0 200 200" width="200" height="200" style={{ overflow: "visible" }}>
      {cards.map((c, i) => (
        <g key={i} opacity={active ? 1 : 0} style={{ transition: `opacity 0.45s ease ${i * 0.1}s` }}>
          <rect x={(200 - c.w) / 2} y={c.y} width={c.w} height={32} rx="8"
            fill="rgba(21,102,134,0.09)" stroke="#4B6380" strokeWidth="1.2" strokeOpacity="0.3" />
          <rect x={(200 - c.w) / 2 + 10} y={c.y + 11} width={c.w * 0.55} height="6" rx="3" fill="#4B6380" fillOpacity="0.3" />
          <rect x={(200 - c.w) / 2 + 10 + c.w * 0.55 + 6} y={c.y + 11} width={20} height="6" rx="3" fill="#4B6380" fillOpacity="0.5" />
        </g>
      ))}
      {/* arrows connecting cards */}
      {[0,1].map(i => (
        <path key={i} d={`M100 ${cards[i].y + 32} L100 ${cards[i+1].y}`}
          stroke="#4B6380" strokeWidth="1.2" strokeDasharray="3 3"
          strokeOpacity={active ? 0.35 : 0} style={{ transition: `stroke-opacity 0.4s ease ${0.3 + i*0.1}s` }} />
      ))}
      <circle cx="148" cy="160" r="4" fill="#4B6380" opacity={active ? 0.4 : 0}
        style={{ transition: "opacity 0.4s ease 0.5s", animation: active ? "thought-float 3.5s ease-in-out infinite" : "none" }} />
    </svg>
  );
}

function IllFreebie({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 200 200" width="200" height="200" style={{ overflow: "visible" }}>
      {/* envelope body */}
      <rect x="40" y="70" width="120" height="80" rx="10"
        fill="rgba(21,102,134,0.08)" stroke="#4B6380" strokeWidth="1.4" strokeOpacity={active ? 0.4 : 0}
        style={{ transition: "stroke-opacity 0.4s ease 0.1s" }} />
      {/* envelope flap */}
      <path d="M40 70 L100 115 L160 70"
        fill="none" stroke="#4B6380" strokeWidth="1.4"
        strokeOpacity={active ? 0.4 : 0} style={{ transition: "stroke-opacity 0.4s ease 0.15s" }} />
      {/* gift bow */}
      <path d="M85 70 Q100 52 115 70" fill="none" stroke="#4B6380" strokeWidth="2"
        strokeOpacity={active ? 0.6 : 0} style={{ transition: "stroke-opacity 0.4s ease 0.2s" }} />
      <circle cx="100" cy="70" r="5" fill="#4B6380" opacity={active ? 0.7 : 0}
        style={{ transition: "opacity 0.4s ease 0.25s" }} />
      {/* sparkles */}
      {[[55,45,6],[148,52,4],[138,140,5],[52,148,3.5]].map(([cx,cy,r],i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="#4B6380"
          opacity={active ? [0.35,0.25,0.3,0.2][i] : 0}
          style={{ transition: `opacity 0.4s ease ${0.3+i*0.08}s`, animation: active ? `thought-float ${3+i*0.4}s ease-in-out ${i*0.3}s infinite` : "none" }} />
      ))}
      {/* download arrow */}
      <path d="M100 118 L100 140 M88 130 L100 142 L112 130"
        fill="none" stroke="#4B6380" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        strokeOpacity={active ? 0.5 : 0} style={{ transition: "stroke-opacity 0.4s ease 0.4s" }} />
    </svg>
  );
}

function IllCalendario({ active }: { active: boolean }) {
  const cols = 7;
  const rows = 5;
  // highlight some cells to look like a launch plan
  const highlighted = new Set([2,4,8,9,10,16,17,23,24,30,31,32]);
  const orange = new Set([9,10,24,25]);
  return (
    <svg viewBox="0 0 200 200" width="200" height="200" style={{ overflow: "visible" }}>
      {/* header bar */}
      <rect x="30" y="28" width="140" height="22" rx="6"
        fill="rgba(21,102,134,0.15)" opacity={active ? 1 : 0} style={{ transition: "opacity 0.35s ease" }} />
      <rect x="42" y="35" width="50" height="8" rx="4" fill="#4B6380" fillOpacity={active ? 0.5 : 0}
        style={{ transition: "opacity 0.35s ease 0.05s" }} />
      {/* grid */}
      {Array.from({ length: rows * cols }, (_, idx) => {
        const col = idx % cols;
        const row = Math.floor(idx / cols);
        const isHL = highlighted.has(idx);
        const isOr = orange.has(idx);
        return (
          <rect key={idx}
            x={30 + col * 20} y={58 + row * 20} width="16" height="16" rx="3"
            fill={isOr ? "rgba(251,146,60,0.75)" : isHL ? "rgba(21,102,134,0.45)" : "rgba(21,102,134,0.08)"}
            opacity={active ? 1 : 0}
            style={{ transition: `opacity 0.35s ease ${0.05 + idx * 0.008}s` }}
          />
        );
      })}
      <circle cx="155" cy="168" r="4" fill="#4B6380" opacity={active ? 0.4 : 0}
        style={{ transition: "opacity 0.4s ease 0.5s", animation: active ? "thought-float 3.2s ease-in-out infinite" : "none" }} />
    </svg>
  );
}

const STEP_ILLUSTRATIONS = [IllTarget, IllOfferte, IllFreebie, IllCalendario];

function Programma() {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [passedSet, setPassedSet] = useState<Set<number>>(new Set());
  const [activeStep, setActiveStep] = useState<number>(-1);

  useEffect(() => {
    const update = () => {
      const mid = window.innerHeight * 0.5;
      const next = new Set<number>();
      let closest = -1;
      let closestDist = Infinity;
      stepRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        if (center < mid + window.innerHeight * 0.2) next.add(i);
        const dist = Math.abs(center - mid);
        if (dist < closestDist) { closestDist = dist; closest = i; }
      });
      setPassedSet(next);
      setActiveStep(closest);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="container-narrow">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4B6380] mb-4 text-center">Il programma</p>
        <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-12">
          Cosa costruiamo insieme, <em className="text-[#4B6380]">in diretta</em>, nella masterclass?
        </h2>

        <div>
          {STEPS.map((step, i) => {
            const isActive = passedSet.has(i);
            const isLast = i === STEPS.length - 1;
            const IllComp = STEP_ILLUSTRATIONS[i];
            const onRight = i % 2 === 0;
            const illVisible = activeStep === i;

            const illEl = (
              <div className="hidden md:flex items-start justify-center w-[200px] flex-shrink-0 pt-2"
                style={{
                  opacity: illVisible ? 1 : 0,
                  transform: illVisible
                    ? "translateX(0) scale(1)"
                    : onRight ? "translateX(20px) scale(0.88)" : "translateX(-20px) scale(0.88)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                }}>
                <IllComp active={illVisible} />
              </div>
            );

            return (
              <div
                key={step.n}
                ref={el => { stepRefs.current[i] = el; }}
                className="flex gap-6 md:gap-8 items-start bg-white"
                style={{ opacity: isActive ? 1 : 0.3, transition: "opacity 0.4s ease" }}
              >
                {/* Illustration LEFT slot */}
                {!onRight && illEl}
                {onRight && <div className="hidden md:block w-[200px] flex-shrink-0" />}

                {/* Step number + content */}
                <div className="flex gap-6 md:gap-8 flex-1 items-stretch">
                  <div className="w-14 flex-shrink-0 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 font-bold text-sm relative z-10"
                      style={{
                        backgroundColor: isActive ? "#4B6380" : "rgba(21,102,134,0.15)",
                        color: isActive ? "white" : "#4B6380",
                        boxShadow: "0 0 0 4px white",
                        transition: "background-color 0.4s ease, color 0.4s ease",
                      }}>
                      {step.n}
                    </div>
                    {!isLast && <div className="w-px flex-1 bg-[#4B6380]/20 my-3" />}
                  </div>
                  <div className={`pt-1 ${isLast ? "" : "pb-10"}`}>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="font-bold text-foreground/90 text-xl">{step.title}</h3>
                      {step.badge && (
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#4B6380] bg-[#4B6380]/10 border border-[#4B6380]/20 rounded-full pl-1 pr-2.5 py-1">
                          <img
                            src={step.badge === "con Davide" ? davideFoto : andreaFavicon}
                            alt={step.badge}
                            className="w-4 h-4 rounded-full object-cover flex-shrink-0"
                          />
                          {step.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-3 mt-3">
                      {step.points.map((p, j) => (
                        <p key={j} className="text-sm text-foreground/60 leading-relaxed">{p as React.ReactNode}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Illustration RIGHT slot */}
                {onRight && illEl}
                {!onRight && <div className="hidden md:block w-[200px] flex-shrink-0" />}
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex flex-col items-center gap-2">
          <button
            className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 whitespace-nowrap"
            onClick={() => { posthog.capture("da_caos_a_sistema_cta_click", { cta_label: "programma-iscriviti" }); scrollToSection("form"); }}
          >
            Voglio il mio posto →
          </button>
          <p className="text-sm text-[#4B6380] font-medium mt-2">🔴 Masterclass Gratuita · 29 Agosto · In diretta</p>
        </div>
      </div>
    </section>
  );
}

function MailerLiteForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gdpr, setGdpr] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; gdpr?: string }>({});

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs: typeof errors = {};
    if (!name.trim()) errs.name = "Inserisci il tuo nome";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Inserisci un'email valida";
    if (!gdpr) errs.gdpr = "";
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSubmitting(true);
    try {
      const body = new URLSearchParams();
      body.set("fields[name]", name.trim());
      body.set("fields[email]", email.trim());
      body.set("gdpr[]", "Voglio ricevere comunicazioni relative alla masterclass gratuita");
      body.set("ml-submit", "1");
      body.set("anticsrf", "true");
      await fetch("https://assets.mailerlite.com/jsonp/17207/forms/194222245924571056/subscribe", {
        method: "POST",
        body,
        mode: "no-cors",
      });
      window.location.href = "/grazie-iscrizione-da-caos-a-sistema";
    } catch {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Nome */}
      <div style={{ marginBottom: 10 }}>
        <div style={{ position: "relative" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4B6380" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
            style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", opacity: 0.55 }}>
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
          </svg>
          <input
            type="text"
            name="fields[name]"
            placeholder="Il tuo Nome*"
            autoComplete="given-name"
            value={name}
            onChange={e => setName(e.target.value)}
            style={errors.name ? inputErr : inputBase}
          />
        </div>
        {errors.name && <p style={{ color: "#dc2626", fontSize: 12, margin: "4px 0 0" }}>{errors.name}</p>}
      </div>

      {/* Email */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ position: "relative" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4B6380" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
            style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", opacity: 0.55 }}>
            <rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/>
          </svg>
          <input
            type="email"
            name="fields[email]"
            placeholder="La tua Email* (riceverai qui il workbook)"
            autoComplete="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={errors.email ? inputErr : inputBase}
          />
        </div>
        {errors.email && <p style={{ color: "#dc2626", fontSize: 12, margin: "4px 0 0" }}>{errors.email}</p>}
      </div>

      {/* Privacy */}
      <div style={{ marginBottom: 16, fontSize: 13, color: "rgba(21,102,134,0.65)", lineHeight: "1.5" }}>
        Iscrivendoti accetti la{" "}
        <a href="https://www.iubenda.com/privacy-policy/31182601" target="_blank" rel="noreferrer" style={{ color: "#4B6380", textDecoration: "underline" }}>
          Privacy Policy
        </a>{" "}
        del sito. Puoi disiscriverti quando vuoi, dal link che trovi alla fine di ogni email.
      </div>

      {/* Checkbox GDPR */}
      <div style={{ marginBottom: 20, paddingLeft: 26, position: "relative", minHeight: 24 }}>
        <input
          type="checkbox"
          id="ml-gdpr-44209135"
          checked={gdpr}
          onChange={e => setGdpr(e.target.checked)}
          style={{ position: "absolute", left: 0, top: 3, width: 16, height: 16, cursor: "pointer", accentColor: "#4B6380" }}
        />
        <label htmlFor="ml-gdpr-44209135" style={{ fontSize: 13, color: errors.gdpr ? "#dc2626" : "rgba(21,102,134,0.75)", cursor: "pointer", lineHeight: "1.5" }}>
          Voglio ricevere comunicazioni relative alla masterclass gratuita*
        </label>
      </div>
      <button
        type="submit"
        disabled={submitting}
        style={{
          width: "100%", padding: "14px 28px", backgroundColor: submitting ? "#125a77" : "#4B6380",
          color: "#fff", border: "none", borderRadius: 9999, fontSize: 16, fontWeight: 700,
          cursor: submitting ? "not-allowed" : "pointer", fontFamily: "inherit",
          transition: "background-color 0.2s",
        }}
      >
        {submitting ? "Iscrizione in corso…" : "Voglio iscrivermi ora"}
      </button>
    </form>
  );
}

const inputBase: React.CSSProperties = {
  width: "100%", padding: "11px 12px 11px 40px", boxSizing: "border-box",
  border: "1.5px solid rgba(21,102,134,0.2)", borderRadius: 12, fontSize: 15,
  fontFamily: "inherit", color: "#1B2F52", backgroundColor: "#EEF3F5",
  outline: "none", transition: "border-color 0.2s, box-shadow 0.2s",
};
const inputErr: React.CSSProperties = { ...inputBase, border: "1.5px solid #dc2626" };

const TARGET_DATE = new Date("2026-08-29T08:00:00Z"); // 10:00 CEST

function useCountdown() {
  const calc = () => {
    const diff = TARGET_DATE.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    const s = Math.floor(diff / 1000);
    return { days: Math.floor(s / 86400), hours: Math.floor((s % 86400) / 3600), minutes: Math.floor((s % 3600) / 60), seconds: s % 60 };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => { const id = setInterval(() => setTime(calc()), 1000); return () => clearInterval(id); }, []);
  return time;
}

function CountdownBanner() {
  const { days, hours, minutes, seconds } = useCountdown();
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white whitespace-nowrap overflow-hidden" style={{ backgroundColor: "#4B6380", lineHeight: "1.4" }}>
      <span className="opacity-80">Le iscrizioni si chiudono tra </span>
      <span className="font-bold tabular-nums">
        <span style={{ display: "inline-block", minWidth: "2.5ch" }}>{days}g</span>
        {" · "}
        <span style={{ display: "inline-block", minWidth: "2.5ch" }}>{pad(hours)}h</span>
        {" · "}
        <span style={{ display: "inline-block", minWidth: "2.5ch" }}>{pad(minutes)}m</span>
        {" · "}
        <span style={{ display: "inline-block", minWidth: "2.5ch" }}>{pad(seconds)}s</span>
      </span>
    </div>
  );
}

const CHAOS_MONTHS: { name: string; emoji: string; thought: string; vibe: "dead" | "meh" | "panic" }[] = [
  { name: "GEN", emoji: "😶", thought: "Ok, nuovo anno. Da dove comincio?", vibe: "meh" },
  { name: "FEB", emoji: "😱", thought: "Ho fatto un lancio improvvisato. Non dormivo da 3 giorni.", vibe: "panic" },
  { name: "MAR", emoji: "🥴", thought: "Ok, che faccio a marzo?", vibe: "meh" },
  { name: "APR", emoji: "😶‍🌫️", thought: "Aprile è già a metà e non ho ancora niente.", vibe: "dead" },
  { name: "MAG", emoji: "🙄", thought: "Magari a maggio mi organizzo.", vibe: "dead" },
  { name: "GIU", emoji: "😬", thought: "Giugno è già arrivato, faccio un lancio? Dovrei?", vibe: "meh" },
  { name: "LUG", emoji: "😱", thought: "Lancio improvvisato di luglio. Perché ogni volta?", vibe: "panic" },
  { name: "AGO", emoji: "😴", thought: "Agosto non conta. Tanto non compra nessuno.", vibe: "dead" },
  { name: "SET", emoji: "😱", thought: "Settembre: tutto in una volta. Di corsa, di nuovo.", vibe: "panic" },
  { name: "OTT", emoji: "😮‍💨", thought: "Ok mi riprendo. Forse.", vibe: "meh" },
  { name: "NOV", emoji: "😱", thought: "Black Friday. Cosa faccio? Uno sconto? Quanto?!", vibe: "panic" },
  { name: "DIC", emoji: "💀", thought: "Stanco morto. L'anno prossimo mi organizzo.", vibe: "dead" },
];

function ChaosCalendar() {
  const [revealedCount, setRevealedCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  // Reveal one month every ~420ms for a dramatic left-to-right appearance
  useEffect(() => {
    if (!started) return;
    if (revealedCount >= CHAOS_MONTHS.length) return;
    const id = setTimeout(() => setRevealedCount(c => c + 1), 420);
    return () => clearTimeout(id);
  }, [started, revealedCount]);

  const vibeStyle = (vibe: string) => {
    if (vibe === "panic") return { bg: "rgba(251,100,50,0.15)", border: "rgba(251,120,60,0.35)", text: "text-orange-200" };
    if (vibe === "dead") return { bg: "rgba(255,255,255,0.04)", border: "rgba(255,255,255,0.08)", text: "text-white/35" };
    return { bg: "rgba(196,217,220,0.10)", border: "rgba(196,217,220,0.20)", text: "text-white/60" };
  };

  const months = CHAOS_MONTHS.map((m, i) => {
    const revealed = i < revealedCount;
    const { bg, border } = vibeStyle(m.vibe);
    return (
      <div
        key={m.name}
        className="rounded-xl flex flex-col items-center gap-2 p-3 transition-all duration-500 flex-shrink-0 flex-1"
        style={{
          backgroundColor: bg,
          border: `1px solid ${border}`,
          opacity: revealed ? 1 : 0,
          transform: revealed ? "translateY(0)" : "translateY(8px)",
        }}
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/50">{m.name}</p>
        <span className="text-3xl leading-none">{revealed ? m.emoji : "\u00a0"}</span>
        <p className="text-[11px] leading-snug text-center text-white/85" style={{ minHeight: 44 }}>
          {revealed ? m.thought : ""}
        </p>
      </div>
    );
  });

  return (
    <div ref={ref} className="mt-14">
      {/* Mobile: breakout a 100vw, nessun padding laterale, card larghe ~200px */}
      <div className="md:hidden overflow-x-auto" style={{ position: "relative", left: "50%", width: "100vw", transform: "translateX(-50%)" }}>
        <div className="flex gap-2 pb-2" style={{ minWidth: 2488 }}>
          {months}
        </div>
      </div>
      {/* Desktop: breakout a 116vw */}
      <div className="hidden md:block overflow-x-auto" style={{ position: "relative", left: "50%", width: "116vw", transform: "translateX(-50%)" }}>
        <div className="flex gap-3 px-6 pb-2" style={{ minWidth: "max(116vw, 900px)" }}>
          {months}
        </div>
      </div>
    </div>
  );
}

const QUIZ_QUESTIONS = [
  {
    question: "Come descrivi la tua situazione attuale?",
    answers: [
      "Ho un'offerta ma faccio fatica a vendere con continuità",
      "Ho clienti ma non riesco a scalare o strutturare",
      "Sto cercando di capire cosa vendere e a chi",
    ],
  },
  {
    question: "Quanto guadagni dipende da quanto lavori attivamente?",
    answers: [
      "Sì, se mi fermo si ferma tutto",
      "In parte, ho qualcosa di automatico ma non basta",
      "No, ho sistemi che lavorano anche senza di me",
    ],
  },
  {
    question: "Qual è il tuo obiettivo principale venendo a questa masterclass?",
    answers: [
      "Avere un piano lanci concreto per i prossimi 12 mesi",
      "Capire come strutturare le mie offerte e a chi venderle",
      "Trovare un sistema che generi vendite anche quando non sto spingendo",
    ],
  },
];

function QuizForm() {
  const [step, setStep] = useState<number>(0);       // 0-2 = quiz, 3 = form
  const [answers, setAnswers] = useState<number[]>([]);
  const [selecting, setSelecting] = useState<number | null>(null);

  function pick(answerIdx: number) {
    setSelecting(answerIdx);
    const q = QUIZ_QUESTIONS[step];
    posthog.capture("quiz_answer", {
      question_index: step + 1,
      question:       q.question,
      answer_index:   answerIdx,
      answer:         q.answers[answerIdx],
    });
    if (step === QUIZ_QUESTIONS.length - 1) {
      posthog.capture("quiz_completed", {
        answers: [...answers, answerIdx].map((ai, qi) => ({
          question: QUIZ_QUESTIONS[qi].question,
          answer:   QUIZ_QUESTIONS[qi].answers[ai],
        })),
      });
    }
    setTimeout(() => {
      const next = [...answers, answerIdx];
      setAnswers(next);
      setSelecting(null);
      setStep(s => s + 1);
    }, 180);
  }

  const q = QUIZ_QUESTIONS[step];

  return (
    <div>
      {step === 0 && (
        <div className="mb-5 text-center">
          <p className="text-sm text-foreground/65 leading-relaxed">
            Prima di iscriverti, abbiamo <strong>3 domande veloci</strong> per capire da dove parti. Meno di un minuto.
          </p>
        </div>
      )}

      {/* Progress dots */}
      <div className="flex justify-center gap-2 mb-5">
        {QUIZ_QUESTIONS.map((_, i) => (
          <div key={i} className="rounded-full transition-all duration-400"
            style={{
              width: i === step ? 20 : 8, height: 8,
              backgroundColor: i < step ? "#4B6380" : i === step ? "#4B6380" : "rgba(21,102,134,0.18)",
              transition: "all 0.3s ease",
            }} />
        ))}
      </div>

      {step < 3 ? (
        <div key={step} style={{ minHeight: 260 }}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4B6380]/60 mb-2 text-center">
            Domanda {step + 1} di 3
          </p>
          <h3 className="font-bold text-foreground/90 text-base md:text-lg leading-snug mb-5 text-center">
            {q.question}
          </h3>
          <div className="flex flex-col gap-2.5">
            {q.answers.map((a, i) => (
              <button
                key={i}
                onClick={() => pick(i)}
                className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                style={{
                  border: selecting === i ? "1.5px solid #4B6380" : "1.5px solid rgba(21,102,134,0.2)",
                  backgroundColor: selecting === i ? "rgba(21,102,134,0.10)" : "rgba(21,102,134,0.03)",
                  color: selecting === i ? "#4B6380" : "rgba(0,0,0,0.7)",
                  transform: selecting === i ? "scale(0.985)" : "scale(1)",
                  cursor: "pointer",
                }}
              >
                <span className="inline-flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full border flex-shrink-0 flex items-center justify-center text-[10px] font-bold"
                    style={{
                      borderColor: selecting === i ? "#4B6380" : "rgba(21,102,134,0.35)",
                      backgroundColor: selecting === i ? "#4B6380" : "transparent",
                      color: selecting === i ? "white" : "#4B6380",
                    }}>
                    {["A","B","C"][i]}
                  </span>
                  {a}
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p className="text-center text-sm text-[#4B6380] font-semibold mb-1">Perfetto, ci siamo quasi.</p>
          <h3 className="font-bold text-foreground/90 text-lg md:text-xl leading-snug mb-5 text-center">
            Prenota il tuo posto alla Masterclass Gratuita
          </h3>
          <MailerLiteForm />
        </div>
      )}
    </div>
  );
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 24;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

const BAR_CONTENT = ({ onClick }: { onClick: () => void }) => (
  <div
    className="flex flex-col items-center sm:flex-row sm:justify-center gap-3 sm:gap-8 px-8 py-3.5 text-center sm:text-left"
    style={{
      background: "rgba(10,26,35,0.92)",
      backdropFilter: "blur(14px)",
      borderTop: "1px solid rgba(196,217,220,0.12)",
    }}
  >
    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-sm text-white/80">
      <span className="font-semibold text-white">Da Caos a Sistema</span>
      <span className="text-white/40 hidden sm:inline">·</span>
      <span>🗓 29 agosto · ore 10:00</span>
      <span className="text-white/40 hidden sm:inline">·</span>
      <span>Gratuita</span>
      <span className="text-white/40">·</span>
      <span>100 posti disponibili</span>
    </div>
    <button
      className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 whitespace-nowrap flex-shrink-0 text-sm px-5 py-2"
      onClick={onClick}
    >
      Voglio il mio posto →
    </button>
  </div>
);

function StickyBar() {
  const [visible, setVisible] = useState(false);
  const [docked, setDocked] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (visible && !docked) {
      const t = setTimeout(() => setShown(true), 10);
      return () => clearTimeout(t);
    } else {
      setShown(false);
    }
  }, [visible, docked]);

  useEffect(() => {
    const hero = document.getElementById("hero-section");
    const anchor = document.getElementById("sticky-bar-anchor");
    if (!hero || !anchor) return;

    const heroObs = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    const anchorObs = new IntersectionObserver(
      ([entry]) => setDocked(entry.isIntersecting),
      { threshold: 0 }
    );
    heroObs.observe(hero);
    anchorObs.observe(anchor);
    return () => { heroObs.disconnect(); anchorObs.disconnect(); };
  }, []);

  const handleClick = () => {
    posthog.capture("da_caos_a_sistema_cta_click", { cta_label: "sticky-bar" });
    scrollToSection("form");
  };

  if (!visible && !shown) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50"
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(100%)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        pointerEvents: shown ? "auto" : "none",
      }}
    >
      <BAR_CONTENT onClick={handleClick} />
    </div>
  );
}

function ZeroImprovvisazioneMasterclass() {
  function trackCta(label: string) {
    posthog.capture("da_caos_a_sistema_cta_click", { cta_label: label });
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <StickyBar />
      {/* BANNER */}
      <CountdownBanner />

      {/* HERO */}
      <section id="hero-section" className="relative overflow-hidden pt-16 pb-28 md:pt-24 md:pb-36">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#4B6380]/20 blur-3xl pointer-events-none" style={{ top: "-10%", left: "-8%", zIndex: 0, animation: "orb-drift-1 22s ease-in-out infinite", willChange: "transform", isolation: "isolate" }} />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-[#4B6380]/20 blur-3xl pointer-events-none" style={{ top: "5%", right: "-5%", zIndex: 0, animation: "orb-drift-2 28s ease-in-out infinite", willChange: "transform", isolation: "isolate" }} />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#4B6380]/20 blur-3xl pointer-events-none" style={{ bottom: "-10%", right: "-8%", zIndex: 0, animation: "orb-drift-1 22s ease-in-out infinite", willChange: "transform", isolation: "isolate" }} />

        <div className="container-narrow relative" style={{ zIndex: 1, maxWidth: 1260 }}>
          <div className="grid md:grid-cols-[1fr_420px] gap-10 md:gap-20 items-center">

            {/* COLONNA SINISTRA */}
            <div className="text-center sm:text-left">
              <div className="inline-flex items-center gap-2 border border-[#4B6380]/25 bg-[#4B6380]/6 text-[#4B6380] text-[11px] font-semibold uppercase tracking-[0.12em] px-4 py-2 rounded-full mb-6">
                🗓 29 agosto · ore 10:00 · Masterclass gratuita · Posti limitati
              </div>

              <h1 className="h-display font-bold" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
                Pianifica i prossimi 12 mesi di{" "}
                <em className="text-[#4B6380]">lanci e funnel</em>{" "}
                delle tue offerte in una mattinata.
              </h1>

              <p className="mt-5 text-sm md:text-base text-foreground/65 leading-relaxed">
                <strong>Da Caos a Sistema</strong> è la masterclass gratuita in cui <strong>Andrea Bonomo</strong> e <strong>Davide Angiolillo</strong> ti guidano a costruire il tuo <strong>piano lanci dall'inizio alla fine</strong>: quale offerta lanciare, a chi, quando, con quali contenuti e come portare i tuoi clienti da un'offerta all'altra nel tempo.
              </p>

              <p className="mt-3 font-bold text-[#4B6380] text-sm md:text-base">
                Sabato 29 agosto · ore 10:00 · Zoom · Gratuito
              </p>

              <div className="mt-7 flex flex-col items-center sm:items-start sm:flex-row gap-3">
                <div className="flex flex-col items-center sm:items-start">
                  <button className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 whitespace-nowrap" onClick={() => { trackCta("hero-iscriviti"); scrollToSection("form"); }}>
                    Voglio il mio posto →
                  </button>
                </div>
                <button className="cta-ghost whitespace-nowrap" onClick={() => scrollToSection("programma")}>
                  Scopri il programma ↓
                </button>
              </div>

              <div className="mt-7 flex flex-wrap justify-center sm:justify-start gap-2.5">
                {[
                  { icon: "🎓", text: "Masterclass gratuita" },
                  { icon: "💻", text: "Su Zoom" },
                  { icon: "👥", text: "Max 100 posti" },
                  { icon: "📋", text: "Workbook incluso" },
                ].map(chip => (
                  <div key={chip.text} className="inline-flex items-center gap-2 border border-[#4B6380]/15 bg-[#4B6380]/5 px-3 py-1.5 rounded-full text-xs text-foreground/70 font-medium">
                    <span>{chip.icon}</span>{chip.text}
                  </div>
                ))}
              </div>
            </div>

            {/* COLONNA DESTRA — quiz + form */}
            <div id="form" className="bg-white rounded-2xl p-7 md:p-9 flex flex-col" style={{ boxShadow: "0 8px 48px -8px rgba(21,102,134,0.22), 0 2px 12px -2px rgba(21,102,134,0.12)", height: 600 }}>
              <div className="flex justify-center mb-5 flex-shrink-0">
                <div className="inline-flex items-center gap-1.5 border border-[#4B6380]/25 bg-[#4B6380]/6 text-[#4B6380] text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1.5 rounded-full">
                  🗓 29 agosto · ore 10:00
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <QuizForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROBLEMA — sfondo #4B6380 */}
      <section className="relative py-20 md:py-28" style={{ backgroundColor: "#4B6380" }} data-cursor-light>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-[600px] h-[600px] rounded-full" style={{ background: "#6C9FA8", opacity: 0.3, filter: "blur(100px)", top: "-20%", left: "-5%", animation: "orb-drift-1 28s ease-in-out infinite" }} />
          <div className="absolute w-[500px] h-[500px] rounded-full" style={{ background: "#0c2330", opacity: 0.25, filter: "blur(100px)", bottom: "-15%", right: "5%", animation: "orb-drift-2 34s ease-in-out infinite" }} />
        </div>
        <div className="container-narrow relative">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50 mb-10">Ora ti trovi qui</p>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <h2 className="h-display font-bold text-white leading-[1.1]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Stai gestendo ogni tuo lancio e funnel{" "}
              <em style={{ color: "#C4D9DC" }}>in emergenza e senza un piano?</em>
            </h2>
            <div className="space-y-5 text-sm md:text-base text-white/75 leading-relaxed">
              <p>Hai un'offerta da lanciare ma <strong className="text-white/90">non sai da dove iniziare</strong>: non sai quando farlo, come comunicarlo, quante email mandare né cosa pubblicare sui social. Allora rimandi, aspetti il momento giusto, e il momento giusto non arriva mai.</p>
              <p>Quando non puoi più rimandare, <strong className="text-white/90">costruisci tutto in una settimana di corsa</strong>: scrivi le email alle undici di sera, pubblichi contenuti senza una logica precisa, apri le iscrizioni sperando che qualcosa funzioni. A volte va bene, a volte no. Ma non sai mai perché.</p>
              <p>Il lancio si chiude, e dopo? <strong className="text-white/90">Passano settimane in cui non entra nulla</strong> perché non hai strutturato niente nel mezzo. Nessun funnel evergreen, nessun piano di contenuti, nessuna automazione che lavora mentre tu non ci sei. E il prossimo lancio ricomincia da zero, con le stesse domande irrisolte.</p>
              <p><strong className="text-white/90">Il problema non è il lancio in sé. È che attorno al lancio non c'è niente.</strong> Nessuna struttura, nessun filo che tiene insieme una cosa e l'altra. E quindi ogni volta ricomincia da capo.</p>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center gap-1">
            <button className="pill bg-white text-[#4B6380] hover:-translate-y-0.5 whitespace-nowrap" onClick={() => { trackCta("problema-iscriviti"); scrollToSection("form"); }}>
              Voglio il mio posto →
            </button>
            <p className="text-sm text-white font-medium mt-3">🔴 Masterclass Gratuita · 29 Agosto · In diretta</p>
          </div>

          <div className="mt-16 text-center">
            <h2 className="h-display font-bold text-white text-2xl md:text-3xl lg:text-4xl leading-snug">
              Il tuo calendario è più o meno così,{" "}
              <em style={{ color: "#C4D9DC" }}>in questo momento?</em>
            </h2>
          </div>
          <ChaosCalendar />
        </div>
      </section>

      {/* CARD PROBLEMA — sfondo bianco */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-narrow">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4B6380] mb-4 text-center">Quanto sarebbe liberatorio sapere esattamente cosa e quando farlo?</p>
          <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-6">
            Ma fai fatica a farlo perché hai{" "}
            <em className="text-[#4B6380]">uno di questi problemi qui sotto.</em>
          </h2>
          <p className="text-foreground/70 text-sm md:text-base max-w-2xl mx-auto mb-12 leading-relaxed">
            Lo so. In questo momento <strong>il tuo business va un po' a braccio.</strong><br /><br />
            Fai un lancio e poi speri che le cose vadano bene perché <strong>buona parte dei guadagni dipendono da questo.</strong><br /><br />
            Stessa cosa per le tue offerte: ti trovi ad averne parecchie per accontentare tutti i potenziali clienti che arrivano (e passi quasi più tempo a fare preventivi che altro).<br /><br />
            I 4 riquadri qui sotto sintetizzano bene quello che vive il <strong>90% dei liberi professionisti e imprenditori</strong> che hanno un business online e si sentono sfiancati dalla sua gestione.
          </p>
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              {
                emoji: "🎯",
                delay: "0s",
                title: "Non hai ben chiaro a chi ti stai rivolgendo",
                desc: <>Parli a tutti e non parli a nessuno. Ogni lancio ricomincia con le stesse domande: chi è il mio cliente ideale? Cosa gli interessa davvero? <strong>Se non lo identifichi chiaramente, ti ritrovi a sperare che le tue offerte vengano acquistate.</strong></>,
              },
              {
                emoji: "📦",
                delay: "0.2s",
                title: "Non hai definito le tue offerte in modo specifico",
                desc: <>Ne hai troppe, troppe poche, o non sono abbastanza chiare. Il risultato? <strong>Le persone non capiscono cosa comprano</strong> e tu non sai quale offrire prima, quale dopo e a chi.</>,
              },
              {
                emoji: "🔗",
                delay: "0.4s",
                title: "Il tuo ecosistema non porta i clienti ad acquistare",
                desc: <>Hai contenuti, una lista, forse anche un funnel. Ma non sono collegati tra loro in modo da <strong>guidare le persone naturalmente verso le tue offerte</strong>. Le cose ci sono, ma non lavorano insieme.</>,
              },
              {
                emoji: "📅",
                delay: "0.6s",
                title: "Non hai un piano di lanci e funnel",
                desc: <>Ogni mese vai a sentimento. Quando le vendite calano, lanci qualcosa. Quando sei stanco, ti fermi. <strong>Non c'è mai un piano per l'anno</strong>: solo reazione a quello che succede, mese per mese.</>,
              },
            ].map((item, idx) => (
              <div key={item.title} className="rounded-2xl p-6 border border-[#4B6380]/15 bg-[#4B6380]/4 flex gap-5 items-start">
                <div className="relative flex-shrink-0 mt-0.5">
                  <div className="text-3xl" style={{ animation: `thought-float ${3 + idx * 0.4}s ease-in-out infinite` }}>{item.emoji}</div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-3 blur-lg rounded-full pointer-events-none" style={{ backgroundColor: "rgba(21,102,134,0.35)" }} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground/90 text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PER CHI È — sfondo #EEF3F5 */}
      <section className="py-16 md:py-20 bg-[#EEF3F5]">
        <div className="container-narrow">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4B6380] mb-4 text-center">Per chi è la masterclass del 29 agosto?</p>
          <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-12">
            Da Caos a Sistema è{" "}
            <em className="text-[#4B6380]">perfetto per te</em> se:
          </h2>
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              {
                emoji: "💼",
                delay: "0s",
                title: "Sei un coach o consulente",
                tags: ["Coaching", "Consulenza", "Formazione"],
                paragraphs: [
                  <>Vendi sessioni, pacchetti o percorsi. Ogni mese la situazione cambia: a volte sei pieno di clienti, altri mesi è il vuoto totale. <strong>Non riesci a prevedere le entrate</strong> e ogni lancio lo costruisci da zero, con l'ansia che non funzioni.</>,
                  <>Esci dalla masterclass con <strong>un piano lanci per l'anno</strong> che ti permette di sapere in anticipo quando e come acquisire nuovi clienti, senza rincorrere sempre l'emergenza.</>,
                ],
              },
              {
                emoji: "🎬",
                delay: "0.3s",
                title: "Sei un creator o brand",
                tags: ["Videocorsi", "Membership", "Infoprodotti"],
                paragraphs: [
                  <>Vendi videocorsi, membership, masterclass o prodotti digitali. Ogni lancio ti prosciuga: ci metti settimane di energia e <strong>tra un lancio e l'altro le vendite si fermano</strong>. Non hai una struttura che generi entrate costanti.</>,
                  <>Costruiamo insieme <strong>la mappa dell'anno</strong> con i lanci giusti al momento giusto e i funnel evergreen che lavorano anche quando non sei in fase attiva.</>,
                ],
              },
            ].map(card => (
              <div key={card.title} className="rounded-2xl py-8 px-6 bg-white border border-[#4B6380]/15 flex flex-col"
                style={{ boxShadow: "inset 0 0 40px -10px rgba(21,102,134,0.08), inset 0 1px 0 rgba(196,217,220,0.3)" }}>
                <div className="relative inline-block mb-5 self-start">
                  <div className="text-4xl" style={{ animation: `thought-float 3s ease-in-out ${card.delay} infinite` }}>{card.emoji}</div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-4 blur-lg rounded-full pointer-events-none" style={{ backgroundColor: "rgba(21,102,134,0.35)" }} />
                </div>
                <h3 className="font-bold text-xl text-foreground/85 mb-3">{card.title}</h3>
                {card.paragraphs.map((p, i) => (
                  <p key={i} className={`text-sm text-foreground/65 leading-relaxed${i > 0 ? " mt-3" : ""}`}>{p}</p>
                ))}
                <div className="mt-6 pt-5 border-t border-[#4B6380]/15 flex flex-wrap gap-x-3 gap-y-1">
                  {card.tags.map((tag, i) => (
                    <span key={tag} className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#4B6380]/70">
                      {i > 0 && <span className="text-[#4B6380]/30 mx-0.5">·</span>}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Non fa per te */}
          <div className="mt-10 max-w-xl mx-auto">
            <h3 className="h-display font-bold text-2xl md:text-3xl text-center mb-6">
              La masterclass <em className="text-foreground/40">non fa per te</em> se:
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { bold: "Hai già un calendario lanci strutturato e funzionante.", rest: " Questa masterclass è per chi ancora non ce l'ha." },
                { bold: "Stai cercando tattiche tecniche.", rest: " Ads, copywriting avanzato o automazioni non sono l'argomento." },
                { bold: "Non hai ancora un'offerta chiara.", rest: " Serve almeno una cosa da lanciare per costruire il piano." },
                { bold: "Lavori nel network marketing.", rest: " Il metodo che insegniamo è pensato per chi vende le proprie offerte, non per chi distribuisce prodotti di terzi e lavora su reclutamento e downline." },
              ].map(({ bold, rest }) => (
                <li key={bold} className="flex items-start gap-3 text-sm text-foreground/50 leading-relaxed">
                  <span className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-foreground/25" />
                  <span><strong className="text-foreground/65">{bold}</strong>{rest}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROGRAMMA — scroll-lit steps */}
      <div id="programma"><Programma /></div>

      {/* COSA TI PORTI A CASA — sfondo #4B6380 */}
      <section className="relative py-20 md:py-28" style={{ backgroundColor: "#4B6380" }} data-cursor-light>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-[600px] h-[600px] rounded-full" style={{ background: "#6C9FA8", opacity: 0.3, filter: "blur(100px)", top: "-20%", left: "-5%", animation: "orb-drift-1 28s ease-in-out infinite" }} />
          <div className="absolute w-[500px] h-[500px] rounded-full" style={{ background: "#0c2330", opacity: 0.25, filter: "blur(100px)", bottom: "-15%", right: "5%", animation: "orb-drift-2 34s ease-in-out infinite" }} />
        </div>
        <div className="container-narrow relative text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50 mb-4">Il risultato</p>
          <h2 className="h-display font-bold text-white leading-[1.1] mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Alla fine della masterclass{" "}
            <em style={{ color: "#C4D9DC" }}>hai in mano:</em>
          </h2>
          <p className="text-white/60 text-sm md:text-base mb-12 max-w-xl mx-auto">Quattro elementi concreti, già scritti e adattati al tuo business, pronti da usare dal giorno dopo.</p>

          <div className="grid sm:grid-cols-2 gap-4">

            {/* Card 1 — Target */}
            <div className="bg-white/10 border border-white/15 rounded-2xl p-8 flex flex-col items-center text-center gap-5">
              <div className="w-full flex items-center justify-center" style={{ height: 140 }}>
                <svg viewBox="0 0 160 140" width="160" height="140" style={{ animation: "thought-float 4s ease-in-out infinite" }}>
                  {[60,46,32].map((r, i) => (
                    <circle key={r} cx="80" cy="70" r={r} fill="none" stroke="white"
                      strokeWidth="1.2" opacity={[0.12,0.22,0.38][i]} />
                  ))}
                  <circle cx="80" cy="70" r={22} fill="rgba(255,255,255,0.10)" />
                  <circle cx="80" cy="70" r={10} fill="rgba(255,255,255,0.22)" />
                  <circle cx="80" cy="70" r={4} fill="white" />
                  {[[80,10,80,42],[80,98,80,130],[10,70,42,70],[118,70,150,70]].map(([x1,y1,x2,y2],i) => (
                    <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="1" strokeDasharray="3 4" opacity="0.3" />
                  ))}
                  {[[130,30,5],[28,108,3.5],[138,100,4]].map(([cx,cy,r],i) => (
                    <circle key={i} cx={cx} cy={cy} r={r} fill="white" opacity="0.45" />
                  ))}
                  <text x="80" y="128" textAnchor="middle" fill="white" fontSize="9" opacity="0.4" fontFamily="sans-serif">cliente ideale</text>
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg leading-snug">Il tuo target definito</h3>
              <p className="text-white/60 text-sm leading-relaxed">Sai esattamente a chi ti rivolgi per ogni offerta. Ogni lancio parla alla persona giusta e smetti di urlare nel vuoto.</p>
            </div>

            {/* Card 2 — Mappa offerte */}
            <div className="bg-white/10 border border-white/15 rounded-2xl p-8 flex flex-col items-center text-center gap-5">
              <div className="w-full flex items-center justify-center" style={{ height: 140 }}>
                <svg viewBox="0 0 200 140" width="200" height="140" style={{ animation: "thought-float 4.5s ease-in-out 0.3s infinite" }}>
                  {[
                    { x: 60, y: 10, w: 80, h: 28, label: "Offerta principale" },
                    { x: 50, y: 52, w: 100, h: 28, label: "Upsell / continuità" },
                    { x: 28, y: 94, w: 144, h: 28, label: "Entry point" },
                  ].map((b, i) => (
                    <g key={i}>
                      <rect x={b.x} y={b.y} width={b.w} height={b.h} rx="6"
                        fill={`rgba(255,255,255,${0.08 + i * 0.06})`} stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                      <text x={b.x + b.w / 2} y={b.y + 18} textAnchor="middle" fill="white"
                        fontSize="8.5" opacity="0.75" fontFamily="sans-serif">{b.label}</text>
                    </g>
                  ))}
                  {[[100,40,100,50],[100,82,100,92]].map(([x1,y1,x2,y2],i) => (
                    <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="1.2" opacity="0.35" markerEnd="url(#arr)" />
                  ))}
                  <defs>
                    <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                      <path d="M0,0 L6,3 L0,6 Z" fill="rgba(255,255,255,0.35)" />
                    </marker>
                  </defs>
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg leading-snug">La mappa delle tue offerte</h3>
              <p className="text-white/60 text-sm leading-relaxed">Hai un ecosistema chiaro: qual è il punto di ingresso, cosa vendi dopo e come le offerte si collegano tra loro nel tempo.</p>
            </div>

            {/* Card 3 — Piano anno */}
            <div className="bg-white/10 border border-white/15 rounded-2xl p-8 flex flex-col items-center text-center gap-5">
              <div className="w-full flex items-center justify-center" style={{ height: 140 }}>
                <svg viewBox="0 0 200 140" width="200" height="140" style={{ animation: "thought-float 3.8s ease-in-out 0.6s infinite" }}>
                  <rect x="20" y="16" width="160" height="108" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <rect x="20" y="16" width="160" height="26" rx="8" fill="rgba(255,255,255,0.10)" />
                  <text x="100" y="34" textAnchor="middle" fill="white" fontSize="9" opacity="0.7" fontFamily="sans-serif">Piano lanci 12 mesi</text>
                  {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => {
                    const col = i % 6; const row = Math.floor(i / 6);
                    const x = 28 + col * 25; const y = 52 + row * 34;
                    const isLaunch = [1,3,6,9].includes(i);
                    const isMicro = [0,4,7,10].includes(i);
                    return (
                      <g key={i}>
                        <rect x={x} y={y} width="18" height="22" rx="3"
                          fill={isLaunch ? "rgba(255,255,255,0.30)" : isMicro ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.05)"}
                          stroke={isLaunch ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.15)"} strokeWidth="0.8" />
                        {isLaunch && <text x={x+9} y={y+14} textAnchor="middle" fill="white" fontSize="6" opacity="0.9" fontFamily="sans-serif">L</text>}
                        {isMicro && <text x={x+9} y={y+14} textAnchor="middle" fill="white" fontSize="6" opacity="0.55" fontFamily="sans-serif">m</text>}
                      </g>
                    );
                  })}
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg leading-snug">Il piano dell'anno intero</h3>
              <p className="text-white/60 text-sm leading-relaxed">Grandi lanci, micro lanci e funnel evergreen già posizionati nel calendario. Entrate più costanti, senza dover improvvisare ogni volta.</p>
            </div>

            {/* Card 4 — Email flow */}
            <div className="bg-white/10 border border-white/15 rounded-2xl p-8 flex flex-col items-center text-center gap-5">
              <div className="w-full flex items-center justify-center" style={{ height: 140 }}>
                <svg viewBox="0 0 200 140" width="200" height="140" style={{ animation: "thought-float 4.2s ease-in-out 0.9s infinite" }}>
                  {/* funnel steps */}
                  {[
                    { x: 30, y: 18, w: 140, label: "Nuovo contatto" },
                    { x: 45, y: 54, w: 110, label: "Prima offerta" },
                    { x: 60, y: 90, w: 80, label: "Offerta premium" },
                  ].map((b, i) => (
                    <g key={i}>
                      <rect x={b.x} y={b.y} width={b.w} height={26} rx="5"
                        fill={`rgba(255,255,255,${0.08 + i * 0.07})`} stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                      <text x={b.x + b.w / 2} y={b.y + 17} textAnchor="middle" fill="white"
                        fontSize="8.5" opacity="0.8" fontFamily="sans-serif">{b.label}</text>
                    </g>
                  ))}
                  {/* connecting arrows */}
                  {[[100,46,100,52],[100,82,100,88]].map(([x1,y1,x2,y2],i) => (
                    <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="1.5" opacity="0.4" markerEnd="url(#farr)" />
                  ))}
                  <defs>
                    <marker id="farr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                      <path d="M0,0 L6,3 L0,6 Z" fill="rgba(255,255,255,0.4)" />
                    </marker>
                  </defs>
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg leading-snug">Il funnel di progressione tra offerte</h3>
              <p className="text-white/60 text-sm leading-relaxed">Sai come portare ogni cliente da una offerta alla successiva. Il business genera vendite anche quando non sei attivo.</p>
            </div>

          </div>

          <div className="mt-12 flex flex-col items-center gap-1">
            <button className="pill bg-white text-[#4B6380] hover:-translate-y-0.5 whitespace-nowrap" onClick={() => { trackCta("risultato-iscriviti"); scrollToSection("form"); }}>
              Voglio il mio posto →
            </button>
            <p className="text-sm text-white font-medium mt-3">🔴 Masterclass Gratuita · 29 Agosto · In diretta</p>
          </div>
        </div>
      </section>

      {/* WORKBOOK — sfondo #EEF3F5 */}
      <section className="py-16 md:py-20 bg-[#EEF3F5]">
        <div className="container-narrow">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4B6380] mb-4 text-center">Durante la masterclass compileremo il workbook su offerte, lanci, funnel ed ecosistema.</p>
          <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-12">
            Il workbook che compili{" "}
            <em className="text-[#4B6380]">in diretta con noi</em>
          </h2>
          <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-[#4B6380]/12 overflow-hidden" style={{ boxShadow: "0 4px 40px rgba(21,102,134,0.10)" }}>
            <div className="grid md:grid-cols-[1fr_1.3fr] gap-0">

              {/* SINISTRA — copertina inclinata */}
              <div className="bg-[#EEF3F5] flex items-center justify-center p-8 md:p-14">
                <div className="relative w-full flex justify-center">
                  <img
                    src={copertingWorkbook}
                    alt="Copertina workbook masterclass"
                    className="w-full max-w-[300px] rounded-xl object-cover"
                    style={{
                      transform: "rotate(-4deg)",
                      boxShadow: "8px 16px 40px rgba(21,102,134,0.22), 2px 4px 12px rgba(21,102,134,0.12)",
                    }}
                  />
                </div>
              </div>

              {/* DESTRA — testo */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-1.5 border border-emerald-200 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-5 self-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" style={{ boxShadow: "0 0 5px rgba(52,211,153,0.8)" }} />
                  Incluso con l'iscrizione
                </div>
                <h3 className="font-bold text-foreground/90 text-xl md:text-2xl leading-snug mb-4">
                  Il regalo che ti facciamo per l'iscrizione alla masterclass.
                </h3>
                <p className="text-sm md:text-base text-foreground/65 leading-relaxed mb-4">
                  Quante volte sei uscito da una formazione con la testa piena di spunti, convinto che questa volta avresti davvero messo tutto in pratica, e invece dopo due giorni eri già nel solito loop? Noi lo sappiamo benissimo. Per questo abbiamo costruito questo workbook: non come un bonus qualsiasi, ma come lo strumento che ti accompagna durante la diretta e ti resta in mano dopo.
                </p>
                <p className="text-sm md:text-base text-foreground/65 leading-relaxed mb-6">
                  Lo compili sezione per sezione mentre siamo in diretta con te. Quando esci dalla mattinata hai già scritto <strong>chi è il tuo cliente, quali offerte hai e in che ordine lanciarle, come far crescere la tua lista e come pianificare i prossimi 12 mesi</strong>. Non appunti sparsi. Un piano vero, adattato al tuo business. Sai già cosa fare il giorno dopo della masterclass. <strong>È una liberazione.</strong>
                </p>
                <ul className="space-y-2.5 mb-6">
                  {[
                    "Target definito per ogni offerta",
                    "Mappa delle offerte e ordine di lancio",
                    "Calendario lanci per i prossimi 12 mesi",
                    "Struttura freebie e funnel di acquisizione",
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/75">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col items-center md:items-start">
                  <button
                    className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5"
                    onClick={() => { trackCta("workbook-iscriviti"); scrollToSection("form"); }}
                  >
                    Voglio il mio posto →
                  </button>
                  <p className="text-sm text-foreground/70 font-medium mt-3">🔴 Masterclass Gratuita · 29 Agosto · In diretta</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CHI SIAMO */}
      <section className="py-16 md:py-20 bg-white">
        <div className="px-6 md:px-12">
          {/* Grande riquadro con immagine di sfondo */}
          <div className="relative overflow-hidden rounded-3xl flex flex-col" style={{ minHeight: "780px" }}>
            <img src={andreadaveSfondo} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "rgba(27,47,82,0.32)" }} />
            <div className="relative z-10 flex flex-col h-full" style={{ minHeight: "780px" }}>
              <div className="mt-auto pb-10 px-8 md:px-12">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50 mb-4 text-center">Chi ti guiderà durante la masterclass?</p>
                <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-center text-white mb-8">
                  Chi siamo e perché{" "}
                  <em style={{ color: "#C4D9DC" }}>possiamo parlare di questo</em>
                </h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

                  {/* ANDREA — sinistra */}
                  <div className="rounded-2xl p-4" style={{ backgroundColor: "#C4D9DC", border: "1px solid #A8C8CC" }}>
                    <p className="font-bold text-[#1B2F52] text-base">Andrea Bonomo</p>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#4B6380] bg-[#4B6380]/10 px-2 py-0.5 rounded-full inline-block mt-1 mb-2">Funnel & Launch Strategist</span>
                    <p className="text-xs text-[#1B2F52]/75 leading-relaxed">Negli ultimi anni ho lavorato con <strong className="text-[#1B2F52]">oltre 100 coach, consulenti, formatori e creator</strong> per costruire sistemi di lancio e funnel evergreen che generano vendite <strong className="text-[#1B2F52]">senza finire ogni volta in burnout e con l'acqua alla gola</strong>.</p>
                    <div className="mt-3 flex items-center gap-2 bg-white/50 border border-[#4B6380]/20 rounded-xl px-3 py-1.5 w-fit">
                      <span className="text-amber-500 text-xs tracking-tighter">★★★★★</span>
                      <span className="text-xs text-[#1B2F52]/70 font-medium">4.9 · 50+ recensioni su Google</span>
                    </div>
                  </div>

                  {/* DAVIDE — destra */}
                  <div className="rounded-2xl p-4" style={{ backgroundColor: "#C4D9DC", border: "1px solid #A8C8CC" }}>
                    <p className="font-bold text-[#1B2F52] text-base">Davide Angiolillo</p>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#4B6380] bg-[#4B6380]/10 px-2 py-0.5 rounded-full inline-block mt-1 mb-2">Esperto di Target & Offerte</span>
                    <p className="text-xs text-[#1B2F52]/65 leading-relaxed italic">[Credenziali, clienti ed esperienza di Davide: da aggiungere]</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIANZE — StarFieldBg + placeholder */}
      <section className="pt-20 pb-24 relative overflow-hidden">
        <StarFieldBg />
        <div className="absolute inset-x-0 top-0 h-40 pointer-events-none" style={{ background: "linear-gradient(to bottom, white, transparent)", zIndex: 1 }} />
        <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none" style={{ background: "linear-gradient(to top, white, transparent)", zIndex: 1 }} />
        <div className="container-narrow relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4B6380] mb-4 text-center">Alcune parole dei nostri studenti/clienti</p>
          <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-12">
            Cosa dicono le persone che hanno lavorato{" "}
            <em className="text-[#4B6380]">con noi?</em>
          </h2>
          <div className="columns-2 md:columns-3 gap-4 max-w-5xl mx-auto">
            {[recBB1, recBB2, recBB3, recBB4, recBB5, recBB6, recBB7, recBB8, recBB9].map((src, i) => (
              <div key={i} className="break-inside-avoid mb-4">
                <img src={src} alt={`Recensione ${i + 1}`} className="w-full rounded-2xl" style={{ boxShadow: "0 2px 16px rgba(21,102,134,0.1)" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEZIONE MOTIVAZIONALE + CTA */}
      <section className="py-16 md:py-24 bg-foreground relative overflow-hidden" data-cursor-light>
        <div className="absolute w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: "#6C9FA8", opacity: 0.35, filter: "blur(100px)", bottom: "-20%", left: "5%", animation: "orb-drift-1 28s ease-in-out infinite" }} />
        <div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "#4B6380", opacity: 0.3, filter: "blur(100px)", bottom: "-15%", right: "10%", animation: "orb-drift-2 34s ease-in-out infinite" }} />
        <div className="container-narrow relative z-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

            {/* COLONNA SINISTRA — testo */}
            <div>
              <h2 className="h-display font-bold text-white text-3xl md:text-4xl leading-tight mb-6">
                Un solo motivo per iscriverti
              </h2>
              <p className="text-white/85 text-base md:text-lg leading-relaxed mb-5">
                Se in tutti questi mesi ti sei chiesto come fare a organizzare i tuoi lanci, capire cosa vendere e a chi, o uscire dal loop di un mese pieno e uno vuoto, questa masterclass è la risposta a tutto quello che ti frulla in testa.
              </p>
              <p className="text-white/65 text-sm md:text-base leading-relaxed mb-5">
                Sì, ti chiede una mattinata e un po' di attenzione. Ma in cambio risolvi una volta per tutte quella sensazione di guardare il calendario e pensare: "Ok, e adesso che faccio?"
              </p>
              <p className="text-white/65 text-sm md:text-base leading-relaxed">
                Tutto quello che facciamo insieme il 29 agosto è lo stesso lavoro che facciamo con i nostri clienti paganti. Niente di diverso, niente di annacquato. Hai accesso diretto al nostro metodo e lo porti a casa per applicarlo al tuo business da subito.
              </p>
            </div>

            {/* COLONNA DESTRA — CTA card */}
            <div>
              <div className="bg-white rounded-2xl p-8 flex flex-col gap-5 items-center text-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#4B6380]/60 mb-1">Prenota il tuo posto</p>
                  <p className="font-bold text-foreground/85 text-lg leading-snug">Sabato 29 agosto · ore 10:00 · Zoom</p>
                  <p className="text-sm text-foreground/50 mt-1">Gratuito. Nessun pagamento, nessun impegno.</p>
                </div>
                <button
                  className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 w-full text-center"
                  onClick={() => { trackCta("bottom-iscriviti"); scrollToSection("form"); }}
                >
                  Voglio il mio posto →
                </button>
                <p className="text-sm text-foreground/70 font-medium mt-3">🔴 Masterclass Gratuita · 29 Agosto · In diretta</p>
                <p className="text-xs text-foreground/40">Niente spam. Ricevi solo l'email con il link Zoom.</p>
                <div className="border-t border-[#4B6380]/10 pt-4 text-xs text-foreground/45 leading-relaxed">
                  Se alla fine ti presentiamo Business Blueprint e non fa per te, non cambia niente. Porti a casa il piano e lo usi da solo.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="container-narrow max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4B6380] mb-4 text-center">Domande frequenti</p>
          <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-10">
            Hai qualche domanda? <em className="text-[#4B6380]">Ho le risposte.</em>
          </h2>
          <FaqAccordion />
        </div>
      </section>

      {/* ANCHOR per sticky bar — la barra si "ancora" qui prima del footer */}
      <div id="sticky-bar-anchor">
        <BAR_CONTENT onClick={() => { posthog.capture("da_caos_a_sistema_cta_click", { cta_label: "sticky-bar-docked" }); scrollToSection("form"); }} />
      </div>

      {/* FOOTER SEMPLICE */}
      <footer style={{ backgroundColor: "#1B2F52" }} className="text-white">
        <div className="container-narrow py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>Andrea Bonomo · P.IVA 04815800232</p>
          <div className="flex gap-5">
            <a href="https://www.iubenda.com/privacy-policy/31182601" target="_blank" rel="noreferrer" className="hover:text-white/80 transition-colors">Privacy Policy</a>
            <a href="/cookie-policy" className="hover:text-white/80 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
