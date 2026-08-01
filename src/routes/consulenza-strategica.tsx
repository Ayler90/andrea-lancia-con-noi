import { createFileRoute } from "@tanstack/react-router";
import React, { useState, useEffect, useRef } from "react";
import posthog from "posthog-js";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ChiSono } from "@/components/site/ChiSono";
import { Newsletter } from "@/components/site/Newsletter";
import coverImg from "@/assets/Consulenza strategica.jpg";
import recG1 from "@/assets/Recensione Google My Business.png";
import recG2 from "@/assets/Recensione Google My Business 2.png";
import recG3 from "@/assets/Recensione Google My Business 3.png";
import recG4 from "@/assets/Recensione Google My Business 4.png";
import recG5 from "@/assets/Recensione Google My Business 5.png";
import recG6 from "@/assets/Recensione Google My Business 6.png";
import recG7 from "@/assets/Recensione Google My Business 7.png";
import recG8 from "@/assets/Recensione Google My Business 8.png";
import recG9 from "@/assets/Recensione Google My Business 9.png";
import recG10 from "@/assets/Recensione Google My Business 10.png";
import recG11 from "@/assets/Recensione Google My Business 11.png";
import recG12 from "@/assets/Recensione Google My Business 12.png";
import recG13 from "@/assets/Recensione Google My Business 13.png";

export const Route = createFileRoute("/consulenza-strategica")({
  component: ConsulenzaStrategica,
  head: () => ({
    meta: [
      { title: "Consulenza Strategica – 60 minuti per risolvere il tuo problema | Andrea Bonomo" },
      {
        name: "description",
        content:
          "Prenota una consulenza strategica 1:1 di 60 minuti con Andrea Bonomo. Risolviamo insieme il tuo problema su funnel, email marketing, newsletter o lancio.",
      },
      { property: "og:title", content: "Consulenza Strategica | Andrea Bonomo" },
      { property: "og:description", content: "60 minuti 1:1 per risolvere il tuo problema di email marketing, newsletter o lancio." },
    ],
  }),
});

const IG_URL = "https://www.instagram.com/andreabonomo_mktg/";

function CalEmbed() {
  useEffect(() => {
    if ((window as any).Cal) return; // already loaded
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "consulenza-strategica", {origin:"https://app.cal.com"});
      Cal.ns["consulenza-strategica"]("inline", {
        elementOrSelector:"#my-cal-inline-consulenza-strategica",
        config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
        calLink: "andreabonomo-mktg/consulenza-strategica",
      });
      Cal.ns["consulenza-strategica"]("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#C4D9DC"},"dark":{"cal-brand":"#F0F0F0"}},"hideEventTypeDetails":false,"layout":"month_view"});
    `;
    document.head.appendChild(script);
  }, []);
  return <div id="my-cal-inline-consulenza-strategica" style={{ width: "100%", height: "100%", overflow: "scroll", minHeight: 600 }} />;
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

// ── Star field ────────────────────────────────────────────────────────────────

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

// ── Scroll reviews ────────────────────────────────────────────────────────────

const REC_IMGS = [recG1, recG2, recG3, recG4, recG5, recG6, recG7, recG8, recG9, recG10, recG11, recG12, recG13];

function ScrollReviews() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [offset2, setOffset2] = useState(0);
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth < 768);
  const mobileOffset = useRef(0);
  const mobileOffset2 = useRef(0);
  const halfWidth = useRef(0);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      if (rowRef.current) halfWidth.current = rowRef.current.scrollWidth / 2;
      const tick = () => {
        const hw = halfWidth.current;
        mobileOffset.current += 0.5;
        if (hw > 0 && mobileOffset.current >= hw * 2) mobileOffset.current -= hw * 2;
        setOffset(mobileOffset.current);
        mobileOffset2.current += 0.5;
        if (hw > 0 && mobileOffset2.current >= hw * 2) mobileOffset2.current -= hw * 2;
        setOffset2(mobileOffset2.current);
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

  const row1 = isMobile
    ? [...REC_IMGS, ...REC_IMGS, ...REC_IMGS, ...REC_IMGS]
    : [...REC_IMGS, ...REC_IMGS];
  const reversed = [...REC_IMGS].reverse();
  // Mobile: ruota di 4 così recG9 è prima (4 copie per loop più lungo). Desktop: ordine originale.
  const row2Base = isMobile ? [...reversed.slice(4), ...reversed.slice(0, 4)] : reversed;
  const row2 = isMobile
    ? [...row2Base, ...row2Base, ...row2Base, ...row2Base]
    : [...row2Base, ...row2Base];

  const getTransform = (ri: number) => {
    if (isMobile) {
      const hw = halfWidth.current || 1;
      if (ri === 0) return `translateX(${-(offset % (hw * 2))}px)`;
      // row2: 4 copie, reset ogni 2*hw — scorre a destra
      return `translateX(${(offset2 % (hw * 2)) - hw * 2}px)`;
    }
    return `translateX(${ri === 0 ? -offset : offset - 150}px)`;
  };

  return (
    <div ref={sectionRef} className="relative space-y-14">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32" style={{ background: "linear-gradient(to right, white, transparent)", zIndex: 2 }} />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32" style={{ background: "linear-gradient(to left, white, transparent)", zIndex: 2 }} />
      {[row1, row2].map((row, ri) => (
        <div key={ri}
          ref={ri === 0 ? rowRef : undefined}
          className="flex gap-5"
          style={{ transform: getTransform(ri), transition: isMobile ? "none" : "transform 0.05s linear", width: "max-content" }}>
          {row.map((src, i) => (
            <img key={i} src={src} alt={`Recensione ${(i % REC_IMGS.length) + 1}`}
              className="h-44 w-auto rounded-xl object-cover flex-shrink-0 transition-transform duration-300 hover:scale-105 hover:z-10 relative" />
          ))}
        </div>
      ))}
    </div>
  );
}

// ── FAQ ───────────────────────────────────────────────────────────────────────

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "Come faccio a sapere se la consulenza fa per me?",
    a: <>Se hai un problema specifico su email marketing, newsletter, funnel o lancio e vuoi una risposta chiara e pratica in 60 minuti, la consulenza fa per te. Se non sei sicuro, <a href={IG_URL} target="_blank" rel="noreferrer" className="text-[#156686] underline underline-offset-2">scrivimi in direct su Instagram</a> e ne parliamo prima.</>,
  },
  {
    q: "Cosa succede dopo che prenoto?",
    a: "Dopo aver scelto giorno e ora, ricevi un link per effettuare il pagamento (€200) e un link al questionario da compilare prima della call. Il questionario mi serve per capire la tua situazione e arrivare preparato sul tuo caso specifico.",
  },
  {
    q: "Cosa devo preparare per la call?",
    a: "Compila il questionario con più dettagli possibili. Se hai screenshot, link o documenti rilevanti - la strategia del lancio, le email che hai scritto, lo screenshot del funnel - tienili pronti da condividere durante la videochiamata.",
  },
  {
    q: "Posso prenotare più sessioni?",
    a: "Sì, puoi prenotare quante sessioni vuoi. Molti clienti tornano per affrontare problemi diversi o per un follow-up dopo aver implementato quanto emerso nella prima call.",
  },
  {
    q: "In che formato si svolge la call?",
    a: "In videochiamata. Il link ti viene inviato automaticamente dopo la prenotazione. La durata è di 60 minuti.",
  },
];

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
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

// ── Come funziona (scroll-lit steps) ─────────────────────────────────────────

const STEPS = [
  { n: "01", title: "Prenota il tuo slot", desc: "Scegli giorno e ora direttamente dal calendario qui sotto. Ci vuole meno di un minuto." },
  { n: "02", title: "Effettua il pagamento", desc: "Dopo la prenotazione ricevi il link per pagare €200. Il pagamento conferma ufficialmente la tua sessione." },
  { n: "03", title: "Compila il questionario", desc: "Ricevi un breve questionario in cui mi racconti la tua situazione e il problema da affrontare. Piu dettagli dai, piu valore ottieni dalla call." },
  { n: "04", title: "La call", desc: "60 minuti in videochiamata 1:1 con me. Analizziamo il problema, troviamo soluzioni concrete e usciamo con un piano d'azione chiaro." },
  { n: "05", title: "Recap scritto e registrazione", desc: "Dopo la call ricevi la registrazione completa della videochiamata e un recap scritto con il piano d'azione, cosi puoi rileggere e riascoltare tutto con calma." },
];

function ComeFunziona() {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [passedSet, setPassedSet] = useState<Set<number>>(new Set());

  useEffect(() => {
    const update = () => {
      const mid = window.innerHeight * 0.5;
      const next = new Set<number>();
      stepRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // step is "passed" once its center crosses the viewport midpoint
        if (rect.top + rect.height / 2 < mid + window.innerHeight * 0.2) next.add(i);
      });
      setPassedSet(next);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <section id="come-funziona" className="py-16 md:py-20 bg-white">
      <div className="container-narrow max-w-3xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-4 text-center">Il processo</p>
        <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-12">
          Come funziona la <em className="text-[#156686]">consulenza?</em>
        </h2>
        <div>
          {STEPS.map((step, i) => {
            const isActive = passedSet.has(i);
            const isLast = i === STEPS.length - 1;
            return (
              <div
                key={step.n}
                ref={el => { stepRefs.current[i] = el; }}
                className="flex gap-6 md:gap-8 items-stretch bg-white"
                style={{ opacity: isActive ? 1 : 0.3, transition: "opacity 0.4s ease" }}
              >
                {/* badge + connector column */}
                <div className="w-14 flex-shrink-0 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 font-bold text-sm relative z-10"
                    style={{
                      backgroundColor: isActive ? "#156686" : "rgba(21,102,134,0.15)",
                      color: isActive ? "white" : "#156686",
                      boxShadow: "0 0 0 4px white",
                      transition: "background-color 0.4s ease, color 0.4s ease",
                    }}>
                    {step.n}
                  </div>
                  {!isLast && <div className="w-px flex-1 bg-[#156686]/20 my-3" />}
                </div>
                {/* text */}
                <div className={`pt-1 ${isLast ? "" : "pb-8"}`}>
                  <h3 className="font-semibold text-foreground/90 text-lg mb-1">{step.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

function ConsulenzaStrategica() {
  function trackCta(label: string) {
    posthog.capture("consulenza_cta_click", { cta_label: label, page: "consulenza-strategica" });
  }

  return (
    <main className="min-h-screen bg-background">
      <Nav />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-10 pb-20 md:pt-14 md:pb-28">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#156686]/20 blur-3xl pointer-events-none"
          style={{ top: "-10%", left: "-8%", zIndex: 0, animation: "orb-drift-1 22s ease-in-out infinite" }} />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-[#156686]/20 blur-3xl pointer-events-none"
          style={{ top: "5%", right: "-5%", zIndex: 0, animation: "orb-drift-2 28s ease-in-out infinite" }} />

        <div className="container-narrow relative" style={{ zIndex: 1 }}>
          {/* Google badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 border border-[#156686]/25 bg-[#156686]/6 text-[#156686] text-[11px] font-semibold uppercase tracking-[0.12em] px-4 py-2 rounded-full whitespace-nowrap">
              <span className="text-yellow-400 text-base tracking-tight leading-none">★★★★★</span>
              5.0 su Google
              <span className="text-[#156686]/30">·</span>
              <a href="#recensioni" className="underline underline-offset-2 hover:opacity-70 transition-opacity normal-case" style={{ textTransform: "none", letterSpacing: "normal" }}>Leggi le recensioni</a>
            </div>
          </div>

          <h1 className="h-display font-bold text-center max-w-3xl mx-auto"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}>
            60 minuti per risolvere{" "}
            <em className="text-[#156686]">il tuo problema</em>{" "}
            di email marketing, newsletter o lancio.
          </h1>

          <p className="mt-6 text-sm md:text-base text-foreground/65 text-center max-w-xl mx-auto leading-relaxed">
            Prenota una consulenza strategica 1:1 con me. Analizziamo insieme la tua situazione, identifichiamo il problema e usciamo dalla call con un piano d'azione chiaro e pratico.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#prenota"
              className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 whitespace-nowrap"
              onClick={() => trackCta("hero-prenota")}>
              Prenota la tua consulenza →
            </a>
            <a href="#come-funziona" className="cta-ghost whitespace-nowrap">
              Come funziona ↓
            </a>
          </div>
          {/* Info chips — desktop: riga flex; mobile: griglia 2×2 con trattino separatore */}
          <div className="mt-10 hidden md:flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: "⏱", text: "60 minuti" },
              { icon: "💬", text: "1:1 con me" },
              { icon: "💶", text: "€200 una tantum" },
              { icon: "📅", text: "Scegli tu giorno e ora" },
            ].map(chip => (
              <div key={chip.text} className="inline-flex items-center gap-2 border border-[#156686]/15 bg-[#156686]/5 px-4 py-2 rounded-full text-sm text-foreground/75 font-medium">
                <span>{chip.icon}</span>{chip.text}
              </div>
            ))}
          </div>
          <div className="mt-8 md:hidden grid grid-cols-2 gap-x-2 gap-y-3 max-w-xs mx-auto">
            {[
              { icon: "⏱", text: "60 minuti" },
              { icon: "💬", text: "1:1 con me" },
              { icon: "💶", text: "€200 una tantum" },
              { icon: "📅", text: "Scegli tu giorno e ora" },
            ].map((chip) => (
              <div key={chip.text} className="flex items-center gap-1.5 text-sm text-foreground/65 font-medium">
                <span>{chip.icon}</span>
                <span>{chip.text}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── PROBLEMA ──────────────────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28" style={{ backgroundColor: "#156686" }} data-cursor-light>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-[600px] h-[600px] rounded-full"
            style={{ background: "#6C9FA8", opacity: 0.3, filter: "blur(100px)", top: "-20%", left: "-5%", animation: "orb-drift-1 28s ease-in-out infinite" }} />
          <div className="absolute w-[500px] h-[500px] rounded-full"
            style={{ background: "#0c2330", opacity: 0.25, filter: "blur(100px)", bottom: "-15%", right: "5%", animation: "orb-drift-2 34s ease-in-out infinite" }} />
        </div>

        <div className="container-narrow relative">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50 mb-10">Il punto di partenza</p>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <h2 className="h-display font-bold text-white leading-[1.1]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Hai un problema specifico da risolvere,{" "}
              <em style={{ color: "#C4D9DC" }}>ma non sai dove mettere le mani e a chi chiedere?</em>
            </h2>

            <div className="space-y-5 text-sm md:text-base text-white/75 leading-relaxed">
              <p>
                Hai qualcosa che non funziona - un funnel che non converte, un'automazione rotta, una newsletter che non cresce - ma <strong className="text-white/90">non riesci a capire dov'è il problema</strong>.
              </p>
              <p>
                Oppure stai per fare un lancio e vuoi essere sicuro che la strategia sia solida: vuoi qualcuno che guardi le tue email, il tuo piano, la tua sequenza, e <strong className="text-white/90">ti dica onestamente cosa funziona e cosa no</strong>.
              </p>
              <p>
                O magari hai un'idea in testa ma non sai come strutturarla. Hai bisogno di qualcuno con cui <strong className="text-white/90">ragionare ad alta voce</strong>, che ti faccia le domande giuste e ti aiuti a mettere ordine.
              </p>
              <p>
                <strong className="text-white/90">La consulenza strategica è esattamente questo: 60 minuti 1:1 con me, dedicati interamente al tuo problema specifico.</strong>
              </p>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <a href="#prenota"
              className="pill bg-white text-[#156686] hover:-translate-y-0.5 whitespace-nowrap"
              onClick={() => trackCta("problema-prenota")}>
              Prenota la tua consulenza →
            </a>
          </div>
        </div>
      </section>

      {/* ── COSA RISOLVIAMO ───────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-narrow">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-4 text-center">Su cosa possiamo lavorare insieme?</p>
          <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-12">
            Questi sono alcuni dei{" "}
            <em className="text-[#156686]">problemi che risolviamo</em>{" "}
            insieme.
          </h2>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              {
                emoji: "📉",
                title: "Il tuo funnel non converte",
                desc: <>Analizziamo insieme ogni step, identifichiamo dove le persone si perdono e definiamo <strong>cosa cambiare per migliorare le conversioni</strong>.</>,
              },
              {
                emoji: "🚀",
                title: "Stai per fare un lancio",
                desc: <>Controlliamo la strategia, le fasi pre/lancio/post e le email che hai scritto. <strong>Esci dalla call con la certezza che tutto è strutturato bene.</strong></>,
              },
              {
                emoji: "📰",
                title: "La tua newsletter non cresce",
                desc: "Troviamo insieme le cause - dal form di iscrizione alla strategia di contenuto - e definiamo un piano concreto per far crescere la lista.",
              },
              {
                emoji: "✉️",
                title: "Le tue email non producono risultati",
                desc: <>Leggiamo insieme le email che hai scritto, analizziamo oggetto, struttura e copy, e le ottimizziamo per <strong>aumentare aperture e clic</strong>.</>,
              },
              {
                emoji: "⚙️",
                title: "Hai un problema tecnico con le automazioni",
                desc: "Condividi lo schermo e risolviamo insieme il problema, che sia su Mailerlite, Active Campaign o qualsiasi altro strumento tu stia usando.",
              },
              {
                emoji: "🎯",
                title: "Vuoi aumentare le richieste di consulenza",
                desc: <>Analizziamo il tuo funnel di acquisizione, le email e i contenuti che stai usando, e definiamo cosa ottimizzare per <strong>ricevere più richieste qualificate</strong>.</>,
              },
            ].map((item, idx) => (
              <div key={item.title} className="rounded-2xl p-6 border border-[#156686]/15 bg-[#156686]/4 flex gap-5 items-start">
                <div className="relative flex-shrink-0 mt-0.5">
                  <div className="text-3xl" style={{ animation: `thought-float ${3 + (idx % 3) * 0.4}s ease-in-out infinite` }}>{item.emoji}</div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-3 blur-lg rounded-full pointer-events-none" style={{ backgroundColor: "rgba(21,102,134,0.35)" }} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground/90 text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-foreground/50 mt-8">
            Non sai se la consulenza è adatta al tuo problema?{" "}
            <a href={IG_URL} target="_blank" rel="noreferrer" className="text-[#156686] underline underline-offset-2">
              Scrivimi su Instagram
            </a>{" "}
            e vediamo insieme.
          </p>
        </div>
      </section>

      {/* ── PER CHI È ─────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-[#EEF3F5]">
        <div className="container-narrow">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-4 text-center">Per chi è</p>
          <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-12">
            La consulenza è <em className="text-[#156686]">perfetta per te</em> se sei:
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                emoji: "💼",
                delay: "0s",
                title: "Freelance",
                tags: ["Email marketing", "Funnel", "Lancio"],
                paragraphs: [
                  "Offri servizi in autonomia e hai bisogno di qualcuno con cui ragionare su come migliorare la tua strategia di email marketing o acquisizione clienti.",
                  "La consulenza ti dà risposte pratiche e operative senza giri di parole.",
                ],
              },
              {
                emoji: "🚀",
                delay: "0.3s",
                title: "Solopreneur o imprenditore",
                tags: ["Newsletter", "Lancio", "Automazioni"],
                paragraphs: [
                  "Gestisci tutto da solo e hai bisogno di un confronto esterno su un problema specifico: un lancio che sta per partire, un funnel da ottimizzare, una strategia da validare.",
                  "In 60 minuti analizziamo il problema e usciamo con un piano d'azione.",
                ],
              },
              {
                emoji: "🎯",
                delay: "0.6s",
                title: "Coach o consulente",
                tags: ["Acquisizione", "Email", "Strategia"],
                paragraphs: [
                  "Vuoi usare l'email marketing per generare più richieste, strutturare meglio le tue comunicazioni o portare più persone ai tuoi programmi.",
                  "Lavoriamo insieme sulla strategia più adatta al tuo modello di business.",
                ],
              },
            ].map(card => (
              <div key={card.title} className="rounded-2xl py-8 px-6 bg-white border border-[#156686]/15 flex flex-col"
                style={{ boxShadow: "inset 0 0 40px -10px rgba(21,102,134,0.08), inset 0 1px 0 rgba(196,217,220,0.3)" }}>
                <div className="relative inline-block mb-5 self-start">
                  <div className="text-4xl" style={{ animation: `thought-float 3s ease-in-out ${card.delay} infinite` }}>{card.emoji}</div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-4 blur-lg rounded-full pointer-events-none"
                    style={{ backgroundColor: "rgba(21,102,134,0.35)" }} />
                </div>
                <h3 className="font-bold text-xl text-foreground/85 mb-3">{card.title}</h3>
                {card.paragraphs.map((p, i) => (
                  <p key={i} className={`text-sm text-foreground/65 leading-relaxed${i > 0 ? " mt-3" : ""}`}>{p}</p>
                ))}
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
          <div className="mt-10 max-w-xl mx-auto">
            <h3 className="h-display font-bold text-2xl md:text-3xl text-center mb-6">
              La consulenza <em className="text-foreground/40">non fa per te</em> se sei:
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { bold: "Un networker o MLM.", rest: " Non lavoro su modelli di business basati sul reclutamento o sulla vendita di opportunità." },
                { bold: "All'inizio assoluto.", rest: " Se non hai ancora un'offerta o un business definito, hai bisogno prima di una base solida." },
                { bold: "In cerca di qualcuno che faccia tutto al posto tuo.", rest: " La consulenza ti dà la strategia, l'esecuzione rimane in capo a te." },
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

      {/* ── COME FUNZIONA ─────────────────────────────────────────────────── */}
      <ComeFunziona />

      {/* ── CHI SONO ──────────────────────────────────────────────────────── */}
      <ChiSono ctaText="Prenota la consulenza →" ctaHref="#prenota" />

      {/* ── TESTIMONIANZE ─────────────────────────────────────────────────── */}
      <section id="recensioni" className="pt-20 pb-24 relative overflow-hidden">
        <StarFieldBg />
        <div className="absolute inset-x-0 top-0 h-40 pointer-events-none" style={{ background: "linear-gradient(to bottom, white, transparent)", zIndex: 1 }} />
        <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none" style={{ background: "linear-gradient(to top, white, transparent)", zIndex: 1 }} />
        <div className="container-narrow relative z-10 mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-4 text-center">Le parole di chi ha già fatto una consulenza con me ❤️</p>
          <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-center">
            Cosa dicono le persone che hanno lavorato{" "}
            <em className="text-[#156686]">con me?</em>
          </h2>
        </div>
        <div className="relative z-10" style={{ clipPath: "inset(0)" }}>
          <ScrollReviews />
        </div>
      </section>

      {/* ── PRENOTA ───────────────────────────────────────────────────────── */}
      <section id="prenota" className="py-16 md:py-20 bg-foreground relative overflow-hidden" data-cursor-light>
        <div className="absolute w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "#6C9FA8", opacity: 0.35, filter: "blur(100px)", bottom: "-20%", left: "5%", animation: "orb-drift-1 28s ease-in-out infinite" }} />
        <div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "#156686", opacity: 0.3, filter: "blur(100px)", bottom: "-15%", right: "10%", animation: "orb-drift-2 34s ease-in-out infinite" }} />

        <div className="container-narrow relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50 mb-4 text-center">Scegli il tuo slot</p>
          <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-center text-white mb-3">
            Prenota la tua <em style={{ color: "#C4D9DC" }}>Consulenza Strategica</em>
          </h2>
          <p className="text-center text-white/60 text-sm mb-10">60 minuti · €200 · 1:1 con me</p>

          <CalEmbed />

          <p className="text-center text-white/50 text-sm mt-8">
            Non sei sicuro che la consulenza faccia per te?{" "}
            <a href={IG_URL} target="_blank" rel="noreferrer"
              className="text-[#C4D9DC] underline underline-offset-2 hover:text-white transition-colors">
              Scrivimi in direct su Instagram
            </a>{" "}
            e ne parliamo prima.
          </p>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20">
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
