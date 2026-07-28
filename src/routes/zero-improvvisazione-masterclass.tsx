import { createFileRoute } from "@tanstack/react-router";
import React, { useState, useEffect, useRef } from "react";
import posthog from "posthog-js";

export const Route = createFileRoute("/zero-improvvisazione-masterclass")({
  component: ZeroImprovvisazioneMasterclass,
  head: () => ({
    meta: [
      { name: "robots", content: "noindex, nofollow" },
      { title: "Lanci Senza Stress – Masterclass Gratuita | Andrea Bonomo" },
      { name: "description", content: "La masterclass gratuita con Andrea Bonomo e Davide Angiolillo per costruire il tuo piano lanci per i prossimi 12 mesi." },
    ],
  }),
});

function CheckIcon({ color = "#156686" }: { color?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill={color} fillOpacity="0.12" />
      <path d="M7 12.5l3.5 3.5 6.5-7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

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

const STEPS = [
  { n: "01", title: "Apertura insieme", desc: "Chi siamo, perché siamo insieme, per chi è questa masterclass e cosa costruiremo nelle prossime 2 ore." },
  { n: "02", title: "Target e offerte (con Davide)", desc: "Partiamo da quello che hai: le offerte che vendi e le persone a cui vuoi venderle. Capiamo quante offerte ha senso avere, in quale ordine lanciarle e come costruire un ecosistema in cui una porta naturalmente all'altra." },
  { n: "03", title: "Piano lanci per 12 mesi (con Andrea)", desc: "Costruiamo la mappa dell'anno: grandi lanci, micro lanci e funnel evergreen. Quanto tempo prima iniziare, cosa pubblicare in ogni fase e come portare i clienti da un'offerta all'altra con l'email marketing." },
  { n: "04", title: "Q&A finale", desc: "Domande aperte: rispondiamo in diretta ai dubbi specifici della tua situazione e del tuo business." },
];

function Programma() {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [passedSet, setPassedSet] = useState<Set<number>>(new Set());

  useEffect(() => {
    const update = () => {
      const mid = window.innerHeight * 0.5;
      const next = new Set<number>();
      stepRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top + rect.height / 2 < mid + window.innerHeight * 0.2) next.add(i);
      });
      setPassedSet(next);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-narrow max-w-3xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-4 text-center">Il programma</p>
        <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-12">
          Cosa costruiamo insieme <em className="text-[#156686]">in questa masterclass?</em>
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

const ML_FORM_STYLE = `
  #mlb2-44209135 { font-family: 'Inter', sans-serif; }
  #mlb2-44209135 .ml-form-embedWrapper { background: transparent !important; }
  #mlb2-44209135 .ml-form-embedBody { padding: 0 !important; }
  #mlb2-44209135 .ml-form-fieldRow { margin-bottom: 12px; }
  #mlb2-44209135 .form-control {
    width: 100%; padding: 13px 16px; border: 1.5px solid rgba(21,102,134,0.28);
    border-radius: 12px; font-size: 15px; color: #1B2F52; background: white;
    outline: none; transition: border-color 0.2s;
    font-family: 'Inter', sans-serif;
  }
  #mlb2-44209135 .form-control:focus { border-color: #156686; box-shadow: 0 0 0 3px rgba(21,102,134,0.1); }
  #mlb2-44209135 .form-control::placeholder { color: rgba(27,47,82,0.4); }
  #mlb2-44209135 .ml-form-embedSubmit { margin-top: 16px; }
  #mlb2-44209135 .ml-form-embedSubmit button {
    width: 100%; padding: 14px 28px; background-color: #156686; color: white;
    border: none; border-radius: 9999px; font-size: 15px; font-weight: 600;
    cursor: pointer; transition: background-color 0.2s, transform 0.15s;
    font-family: 'Inter', sans-serif;
  }
  #mlb2-44209135 .ml-form-embedSubmit button:hover { background-color: #125a77; transform: translateY(-2px); }
  #mlb2-44209135 .ml-form-checkboxRow { margin-top: 14px; display: flex; align-items: flex-start; gap: 10px; }
  #mlb2-44209135 .ml-form-checkboxRow input[type="checkbox"] {
    width: 16px; height: 16px; margin-top: 2px; flex-shrink: 0; accent-color: #156686; cursor: pointer;
  }
  #mlb2-44209135 .ml-form-checkboxRow label {
    font-size: 12px; color: rgba(21,102,134,0.65); line-height: 1.5; cursor: pointer;
  }
  #mlb2-44209135 .ml-form-checkboxRow label a { color: #156686; text-decoration: underline; }
  #mlb2-44209135 .ml-error { color: #dc2626; font-size: 12px; margin-top: 4px; }
  #mlb2-44209135 .ml-form-successBody { display: none; }
  #mlb2-44209135 .ml-form-successBody.show { display: block; text-align: center; padding: 24px; }
`;

function MailerLiteForm() {
  const injected = useRef(false);

  useEffect(() => {
    if (injected.current) return;
    injected.current = true;

    (window as any).ml_webform_success_44209135 = function () {
      window.location.href = "/grazie-iscrizione-zero-improvvisazione";
    };

    const fetchUrl = "https://assets.mailerlite.com/jsonp/17207/forms/194222245924571056/takel";
    fetch(fetchUrl).catch(() => {});

    if (!document.getElementById("ml-form-44209135-script")) {
      const s = document.createElement("script");
      s.id = "ml-form-44209135-script";
      s.src = "https://groot.mailerlite.com/js/w/webforms.min.js?v83147fa8ce2d95cb73ece7f28b469519";
      s.async = true;
      document.head.appendChild(s);
    }
  }, []);

  return (
    <>
      <style>{ML_FORM_STYLE}</style>
      <div id="mlb2-44209135" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-44209135">
        <div className="ml-form-align-center">
          <div className="ml-form-embedWrapper embedForm">
            <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
              <form
                className="ml-block-form"
                action="https://assets.mailerlite.com/jsonp/17207/forms/194222245924571056/subscribe"
                data-code=""
                method="post"
                target="_blank"
              >
                <div className="ml-form-formContent">
                  <div className="ml-form-fieldRow">
                    <div className="ml-field-group ml-field-name">
                      <input type="text" className="form-control" name="fields[name]" placeholder="Il tuo nome" autoComplete="given-name" />
                    </div>
                  </div>
                  <div className="ml-form-fieldRow">
                    <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                      <input type="email" className="form-control" name="fields[email]" placeholder="La tua email" autoComplete="email" />
                    </div>
                  </div>
                  <div className="ml-form-checkboxRow ml-form-fieldRow ml-last-item">
                    <input type="checkbox" id="ml-gdpr-44209135" name="gdpr[]" value="true" />
                    <label htmlFor="ml-gdpr-44209135">
                      Acconsento a ricevere comunicazioni da Andrea Bonomo.{" "}
                      <a href="https://www.iubenda.com/privacy-policy/31182601" target="_blank" rel="noreferrer">Privacy Policy</a>
                    </label>
                  </div>
                </div>
                <div className="ml-form-embedSubmit">
                  <button type="submit" className="primary">Voglio iscrivermi alla masterclass gratuita!</button>
                </div>
                <input type="hidden" name="ml-submit" value="1" />
                <input type="hidden" name="anticsrf" value="true" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ZeroImprovvisazioneMasterclass() {
  function trackCta(label: string) {
    posthog.capture("zero_improv_cta_click", { cta_label: label });
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* BANNER */}
      <div className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white" style={{ backgroundColor: "#156686" }}>
        Le iscrizioni chiudono presto — prenota il tuo posto ora
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden pt-10 pb-20 md:pt-14 md:pb-28">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#156686]/20 blur-3xl pointer-events-none" style={{ top: "-10%", left: "-8%", zIndex: 0, animation: "orb-drift-1 22s ease-in-out infinite" }} />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-[#156686]/20 blur-3xl pointer-events-none" style={{ top: "5%", right: "-5%", zIndex: 0, animation: "orb-drift-2 28s ease-in-out infinite" }} />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#156686]/20 blur-3xl pointer-events-none" style={{ bottom: "-10%", right: "-8%", zIndex: 0, animation: "orb-drift-1 22s ease-in-out infinite" }} />

        <div className="container-narrow relative" style={{ zIndex: 1 }}>
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 border border-[#156686]/25 bg-[#156686]/6 text-[#156686] text-[11px] font-semibold uppercase tracking-[0.12em] px-4 py-2 rounded-full">
              🗓 Masterclass gratuita · Zoom · Posti limitati
            </div>
          </div>

          {/* H1 */}
          <h1 className="h-display font-bold text-center max-w-3xl mx-auto" style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}>
            Pianifica i prossimi 12 mesi di{" "}
            <em className="text-[#156686]">lanci e funnel</em>{" "}
            delle tue offerte in una mattinata.
          </h1>

          <p className="mt-6 text-sm md:text-base text-foreground/65 text-center max-w-xl mx-auto leading-relaxed">
            Lanci Senza Stress è la masterclass gratuita in cui Andrea Bonomo e Davide Angiolillo ti guidano a costruire il tuo piano lanci dall'inizio alla fine: quale offerta lanciare, a chi, quando, con quali contenuti e come portare i tuoi clienti da un'offerta all'altra nel tempo.
          </p>

          <p className="mt-4 text-center font-bold text-[#156686] text-sm md:text-base">
            Sabato 29 agosto · 10:00–12:00 · Zoom · Gratuito
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#form" className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 whitespace-nowrap" onClick={() => trackCta("hero-iscriviti")}>
              Voglio il mio posto →
            </a>
            <a href="#programma" className="cta-ghost whitespace-nowrap">
              Scopri il programma ↓
            </a>
          </div>

          {/* Social proof strip */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <span className="text-amber-400 tracking-tighter text-base">★★★★★</span>
              <span><strong className="text-foreground/80">4.9</strong> su Google · 50+ recensioni</span>
            </div>
            <div className="w-px h-4 bg-foreground/15 hidden md:block" />
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <span>🧑‍💼</span>
              <span><strong className="text-foreground/80">100+</strong> creator e professionisti aiutati</span>
            </div>
            <div className="w-px h-4 bg-foreground/15 hidden md:block" />
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <span>📧</span>
              <span><strong className="text-foreground/80">500+</strong> email inviate per i clienti</span>
            </div>
          </div>

          {/* Chip info — desktop */}
          <div className="mt-8 hidden md:flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: "🎓", text: "Masterclass gratuita" },
              { icon: "💻", text: "Su Zoom" },
              { icon: "👥", text: "Max 100 posti" },
              { icon: "📋", text: "Workbook incluso" },
            ].map(chip => (
              <div key={chip.text} className="inline-flex items-center gap-2 border border-[#156686]/15 bg-[#156686]/5 px-4 py-2 rounded-full text-sm text-foreground/75 font-medium">
                <span>{chip.icon}</span>{chip.text}
              </div>
            ))}
          </div>
          {/* Chip info — mobile */}
          <div className="mt-6 md:hidden grid grid-cols-2 gap-x-2 gap-y-3 max-w-xs mx-auto">
            {[
              { icon: "🎓", text: "Masterclass gratuita" },
              { icon: "💻", text: "Su Zoom" },
              { icon: "👥", text: "Max 100 posti" },
              { icon: "📋", text: "Workbook incluso" },
            ].map(chip => (
              <div key={chip.text} className="flex items-center gap-1.5 text-sm text-foreground/65 font-medium">
                <span>{chip.icon}</span><span>{chip.text}</span>
              </div>
            ))}
          </div>

          {/* FORM prima occorrenza */}
          <div id="form" className="mt-14 max-w-lg mx-auto bg-white rounded-2xl border border-[#156686]/10 p-6 md:p-8" style={{ boxShadow: "0 8px 40px rgba(21,102,134,0.10)" }}>
            <MailerLiteForm />
            <p className="text-xs text-foreground/40 text-center mt-4">Gratuito. Niente spam. Ricevi solo l'email con il link Zoom.</p>
          </div>

          {/* Hero placeholder image */}
          <div className="mt-12 max-w-2xl mx-auto rounded-2xl overflow-hidden border border-[#156686]/10" style={{ boxShadow: "0 20px 60px rgba(21,102,134,0.12)" }}>
            <div className="aspect-video bg-[#EEF3F5] flex flex-col items-center justify-center gap-3 text-foreground/30">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <span className="text-sm font-medium">Immagine masterclass · placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA — sfondo #156686 */}
      <section className="relative py-20 md:py-28" style={{ backgroundColor: "#156686" }} data-cursor-light>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-[600px] h-[600px] rounded-full" style={{ background: "#6C9FA8", opacity: 0.3, filter: "blur(100px)", top: "-20%", left: "-5%", animation: "orb-drift-1 28s ease-in-out infinite" }} />
          <div className="absolute w-[500px] h-[500px] rounded-full" style={{ background: "#0c2330", opacity: 0.25, filter: "blur(100px)", bottom: "-15%", right: "5%", animation: "orb-drift-2 34s ease-in-out infinite" }} />
        </div>
        <div className="container-narrow relative">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50 mb-10">Il punto di partenza</p>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <h2 className="h-display font-bold text-white leading-[1.1]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Stai gestendo così i tuoi lanci{" "}
              <em style={{ color: "#C4D9DC" }}>in emergenza?</em>
            </h2>
            <div className="space-y-5 text-sm md:text-base text-white/75 leading-relaxed">
              <p>Hai un'offerta da lanciare ma non sai da dove iniziare, quando farlo né come comunicarlo alla tua community. Quindi aspetti.</p>
              <p>Quando non puoi più rimandare, costruisci tutto in una settimana di corsa: email, contenuti, pagine di iscrizione. Il lancio parte, funziona più o meno, poi si chiude.</p>
              <p>Passano settimane senza richieste perché non hai strutturato niente nel mezzo. E il prossimo lancio ricomincia da zero, con le stesse domande irrisolte.</p>
              <p><strong className="text-white/90">Non è il lancio il problema. È che non hai un sistema attorno.</strong></p>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <a href="#form" className="pill bg-white text-[#156686] hover:-translate-y-0.5 whitespace-nowrap" onClick={() => trackCta("problema-iscriviti")}>
              Voglio il mio posto →
            </a>
          </div>
        </div>
      </section>

      {/* CARD PROBLEMA — sfondo bianco */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-narrow">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-4 text-center">Il vero problema</p>
          <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-12">
            Il vero problema{" "}
            <em className="text-[#156686]">non è il lancio</em>
          </h2>
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              {
                emoji: "🎯",
                delay: "0s",
                title: "Manca la chiarezza sul target",
                desc: "Non sai esattamente chi stai raggiungendo con quella specifica offerta. E ogni lancio riparte da zero anche su questo: stesse domande, stessa incertezza.",
              },
              {
                emoji: "📅",
                delay: "0.3s",
                title: "Manca il piano nell'anno",
                desc: "Se affidi il fatturato solo ai lanci attivi, le vendite si fermano tra uno e l'altro. Serve una struttura con micro lanci e funnel evergreen che genera entrate costanti.",
              },
            ].map((item, idx) => (
              <div key={item.title} className="rounded-2xl p-6 border border-[#156686]/15 bg-[#156686]/4 flex gap-5 items-start">
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
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-4 text-center">Per chi è</p>
          <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-12">
            Lanci Senza Stress è{" "}
            <em className="text-[#156686]">perfetto per te</em> se:
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                emoji: "💼",
                delay: "0s",
                title: "Vendi servizi",
                tags: ["Coaching", "Consulenza", "Formazione"],
                paragraphs: [
                  "Hai 1-3 offerte e ogni lancio sembra un'emergenza: non sai da dove iniziare, cosa pubblicare e quando.",
                  "Esci dalla masterclass con un piano lanci per l'anno che funziona anche nei mesi in cui non sei in fase attiva.",
                ],
              },
              {
                emoji: "🎬",
                delay: "0.3s",
                title: "Crei contenuti o infoprodotti",
                tags: ["Videocorsi", "Membership", "Masterclass"],
                paragraphs: [
                  "Lanci videocorsi, membership o masterclass ma non hai una struttura chiara: i lanci ti esauriscono e tra l'uno e l'altro non entrano vendite.",
                  "Costruiamo insieme la mappa dell'anno con i lanci giusti nei momenti giusti.",
                ],
              },
              {
                emoji: "🚀",
                delay: "0.6s",
                title: "Vuoi smettere di improvvisare",
                tags: ["Piano", "Funnel", "Sistemi"],
                paragraphs: [
                  "Ogni lancio ti prende energie enormi perché non è mai pianificato in anticipo. Finisci sempre con l'acqua alla gola.",
                  "Impari a distribuire lanci e funnel nell'anno in modo che le vendite siano più costanti e prevedibili.",
                ],
              },
            ].map(card => (
              <div key={card.title} className="rounded-2xl py-8 px-6 bg-white border border-[#156686]/15 flex flex-col"
                style={{ boxShadow: "inset 0 0 40px -10px rgba(21,102,134,0.08), inset 0 1px 0 rgba(196,217,220,0.3)" }}>
                <div className="relative inline-block mb-5 self-start">
                  <div className="text-4xl" style={{ animation: `thought-float 3s ease-in-out ${card.delay} infinite` }}>{card.emoji}</div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-4 blur-lg rounded-full pointer-events-none" style={{ backgroundColor: "rgba(21,102,134,0.35)" }} />
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

      {/* COSA TI PORTI A CASA — sfondo #156686 */}
      <section className="relative py-20 md:py-28" style={{ backgroundColor: "#156686" }} data-cursor-light>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-[600px] h-[600px] rounded-full" style={{ background: "#6C9FA8", opacity: 0.3, filter: "blur(100px)", top: "-20%", left: "-5%", animation: "orb-drift-1 28s ease-in-out infinite" }} />
          <div className="absolute w-[500px] h-[500px] rounded-full" style={{ background: "#0c2330", opacity: 0.25, filter: "blur(100px)", bottom: "-15%", right: "5%", animation: "orb-drift-2 34s ease-in-out infinite" }} />
        </div>
        <div className="container-narrow relative">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50 mb-10">Il risultato</p>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <h2 className="h-display font-bold text-white leading-[1.1]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                Alla fine della masterclass{" "}
                <em style={{ color: "#C4D9DC" }}>hai in mano:</em>
              </h2>
              <div className="mt-8 rounded-2xl overflow-hidden border border-white/15" style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.25)" }}>
                <div className="aspect-[4/3] bg-white/10 flex flex-col items-center justify-center gap-3 text-white/30">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <span className="text-sm font-medium">Preview workbook · placeholder</span>
                </div>
              </div>
            </div>
            <ul className="space-y-4">
              {[
                "Il target definito per ogni tua offerta",
                "La mappa delle offerte con l'ordine in cui lanciarle",
                "Il piano dell'anno: grandi lanci, micro lanci e funnel evergreen",
                "Il piano dei contenuti per ogni fase di lancio",
                "La logica per portare i clienti da un'offerta all'altra con l'email",
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base text-white/80 leading-relaxed">
                  <CheckIcon color="white" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 flex justify-center">
            <a href="#form" className="pill bg-white text-[#156686] hover:-translate-y-0.5 whitespace-nowrap" onClick={() => trackCta("risultato-iscriviti")}>
              Voglio il mio posto →
            </a>
          </div>
        </div>
      </section>

      {/* WORKBOOK — sfondo #EEF3F5 */}
      <section className="py-16 md:py-20 bg-[#EEF3F5]">
        <div className="container-narrow">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-4 text-center">Il regalo</p>
          <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-12">
            Il workbook che compili{" "}
            <em className="text-[#156686]">in diretta con noi</em>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <div>
              <p className="text-sm md:text-base text-foreground/70 leading-relaxed mb-6">
                Iscrivendoti alla masterclass gratuita scarichi subito il workbook. Lo compili in diretta con noi, sezione per sezione, adattato al tuo business specifico. Alla fine hai uno schema già fatto e pronto da usare.
              </p>
              <ul className="space-y-3">
                {[
                  "Sezione target per ogni tua offerta",
                  "Mappa delle offerte con ordine di lancio",
                  "Piano dell'anno con contenuti per ogni fase",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white border border-[#156686]/15 p-8 flex flex-col items-center gap-4 shadow-sm text-center">
              <div className="relative">
                <div className="text-5xl" style={{ animation: "thought-float 3s ease-in-out infinite" }}>📋</div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-4 blur-xl rounded-full pointer-events-none" style={{ backgroundColor: "rgba(21,102,134,0.3)" }} />
              </div>
              <div>
                <p className="font-bold text-foreground/85 text-lg mb-1">Il tuo workbook</p>
                <p className="text-sm text-foreground/50">Scaricabile subito dopo l'iscrizione</p>
              </div>
              <div className="inline-flex items-center gap-1.5 border border-emerald-200 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" style={{ boxShadow: "0 0 5px rgba(52,211,153,0.8)" }} />
                Disponibile subito
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHI SIAMO — sfondo bianco */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-narrow">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-4 text-center">Chi siamo</p>
          <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-12">
            Chi siamo e perché{" "}
            <em className="text-[#156686]">possiamo parlare di questo</em>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="rounded-2xl p-6 bg-[#EEF3F5] border border-[#156686]/15">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 rounded-full bg-[#156686]/15 flex items-center justify-center flex-shrink-0">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#156686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-foreground/85 text-lg">Andrea Bonomo</p>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#156686] bg-[#C4D9DC]/80 px-2 py-0.5 rounded-full">Funnel & Launch Strategist</span>
                </div>
              </div>
              <p className="text-sm text-foreground/65 leading-relaxed">Negli ultimi anni ho lavorato con oltre 100 coach, consulenti, formatori e creator per costruire sistemi di lancio e funnel evergreen che generano vendite senza finire ogni volta in burnout e con l'acqua alla gola. Lavoro su contenuti, email e creando il percorso migliore per trasformare un'idea in un'offerta che porta vendite.</p>
              <div className="mt-5 flex items-center gap-2 bg-white border border-[#156686]/10 rounded-xl px-4 py-2.5 w-fit">
                <span className="text-amber-400 text-sm tracking-tighter">★★★★★</span>
                <span className="text-xs text-foreground/55 font-medium">4.9 · 50+ recensioni su Google</span>
              </div>
            </div>
            <div className="rounded-2xl p-6 bg-[#EEF3F5] border border-[#156686]/15">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 rounded-full bg-[#156686]/15 flex items-center justify-center flex-shrink-0">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#156686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-foreground/85 text-lg">Davide Angiolillo</p>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#156686] bg-[#C4D9DC]/80 px-2 py-0.5 rounded-full">Esperto di Target & Offerte</span>
                </div>
              </div>
              <p className="text-sm text-foreground/50 leading-relaxed italic">[Credenziali, clienti ed esperienza di Davide: da aggiungere]</p>
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
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-4 text-center">Le parole dei partecipanti ❤️</p>
          <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-12">
            Cosa dicono le persone che hanno lavorato{" "}
            <em className="text-[#156686]">con noi?</em>
          </h2>
          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              { name: "Martina R.", role: "Coach & Formatrice", text: "Prima di questa masterclass ogni lancio era una corsa contro il tempo. Adesso ho finalmente un piano chiaro per i prossimi 12 mesi e so esattamente cosa fare settimana per settimana." },
              { name: "Luca P.", role: "Consulente Marketing", text: "In 2 ore ho capito più di quanto avessi imparato in mesi di corsi sparsi. Il workbook compilato insieme a loro vale già da solo l'iscrizione — ed è gratuita." },
              { name: "Sara M.", role: "Creator & Infoproduttrice", text: "Pensavo di avere già un sistema, ma mi mancava la struttura. Ora ho la mappa delle offerte, l'ordine dei lanci e la logica dei funnel evergreen. Tutto in una mattinata." },
            ].map((t) => (
              <div key={t.name} className="bg-white/90 backdrop-blur rounded-2xl border border-[#156686]/15 p-6 flex flex-col gap-4"
                style={{ boxShadow: "0 4px 24px rgba(21,102,134,0.08)" }}>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => <span key={i} className="text-amber-400 text-sm">★</span>)}
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed flex-1">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-[#156686]/10">
                  <div className="w-9 h-9 rounded-full bg-[#EEF3F5] flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#156686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground/80">{t.name}</p>
                    <p className="text-[10px] text-foreground/45">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-3 bg-white/90 border border-[#156686]/15 rounded-2xl px-6 py-4 shadow-sm">
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {Array.from({ length: 5 }).map((_, i) => <span key={i} className="text-amber-400 text-sm">★</span>)}
                </div>
                <p className="text-xs text-foreground/55">4.9 su Google · 50+ recensioni verificate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM seconda occorrenza — sfondo scuro */}
      <section className="py-16 md:py-20 bg-foreground relative overflow-hidden" data-cursor-light>
        <div className="absolute w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: "#6C9FA8", opacity: 0.35, filter: "blur(100px)", bottom: "-20%", left: "5%", animation: "orb-drift-1 28s ease-in-out infinite" }} />
        <div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "#156686", opacity: 0.3, filter: "blur(100px)", bottom: "-15%", right: "10%", animation: "orb-drift-2 34s ease-in-out infinite" }} />
        <div className="container-narrow relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50 mb-4 text-center">Prenota il tuo posto</p>
          <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-center text-white mb-2">
            La prossima volta che hai qualcosa da lanciare,{" "}
            <em style={{ color: "#C4D9DC" }}>non devi ricominciare da capo.</em>
          </h2>
          <p className="text-center text-white/55 text-sm mt-3 mb-10">
            Sabato 29 agosto · 10:00–12:00 · Zoom · Gratuito
          </p>
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-xl p-8">
              <a href="#form" className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 block w-full text-center" onClick={() => trackCta("bottom-iscriviti")}>
                Voglio il mio posto →
              </a>
              <p className="text-xs text-foreground/40 text-center mt-3">Gratuito. Niente spam. Ricevi solo l'email con il link Zoom.</p>
            </div>
            <div className="bg-white/8 border border-white/15 rounded-2xl p-6 mt-6 text-white/70 text-sm leading-relaxed text-center">
              La masterclass è completamente gratuita. Non ti chiediamo nessuna carta di credito, nessun pagamento, nessun impegno. Ti iscrivi, partecipi e porti a casa il tuo piano. Se alla fine ti presentiamo Business Blueprint e non fa per te, non cambia niente.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="container-narrow max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-4 text-center">Domande frequenti</p>
          <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-10">
            Hai qualche domanda? <em className="text-[#156686]">Ho le risposte.</em>
          </h2>
          <FaqAccordion />
        </div>
      </section>

      {/* P.S. */}
      <section className="py-12 bg-[#EEF3F5]">
        <div className="container-narrow max-w-2xl mx-auto">
          <div className="rounded-2xl border border-[#156686]/15 bg-white p-8">
            <p className="text-sm text-foreground/65 leading-relaxed">
              <strong className="text-foreground/85">P.S.</strong> Se stai pensando "ho già provato a fare dei piani ma poi non li ho mai seguiti", non è una scusa per non venire - è esattamente il motivo per cui questa masterclass esiste. Un piano fatto da solo su un foglio non lo segui. Uno costruito in diretta, con qualcuno che ti fa le domande giuste sul tuo business specifico, è un'altra cosa. Iscriviti, ne vale la pena.
            </p>
          </div>
        </div>
      </section>

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
