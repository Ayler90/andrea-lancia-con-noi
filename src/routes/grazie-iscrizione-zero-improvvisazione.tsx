import { createFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/grazie-iscrizione-zero-improvvisazione")({
  component: GrazieZeroImprovvisazione,
  head: () => ({
    meta: [
      { name: "robots", content: "noindex, nofollow" },
      { title: "Ci sei! – Zero Improvvisazione | Andrea Bonomo" },
    ],
  }),
});

const CALENDAR_URL =
  "https://calendar.google.com/calendar/render?action=TEMPLATE" +
  "&text=Zero+Improvvisazione+%E2%80%93+Masterclass+Gratuita" +
  "&dates=20260829T080000Z%2F20260829T100000Z" +
  "&details=Masterclass+gratuita+con+Andrea+Bonomo+e+Davide+Angiolillo.+Il+link+Zoom+arriva+via+email+la+mattina+stessa." +
  "&location=Zoom";

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#156686" fillOpacity="0.12" />
      <path d="M7 12.5l3.5 3.5 6.5-7" stroke="#156686" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GrazieZeroImprovvisazione() {
  return (
    <div className="min-h-screen bg-background flex flex-col">

      {/* HERO — dark navy */}
      <section className="relative overflow-hidden py-20 md:py-28 text-white" style={{ backgroundColor: "#1B2F52" }} data-cursor-light>
        <div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "#156686", opacity: 0.35, filter: "blur(120px)", top: "-20%", left: "-10%", animation: "orb-drift-1 22s ease-in-out infinite" }} />
        <div className="absolute w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "#6C9FA8", opacity: 0.25, filter: "blur(100px)", bottom: "-10%", right: "-5%", animation: "orb-drift-2 28s ease-in-out infinite" }} />

        <div className="container-narrow relative text-center" style={{ zIndex: 1 }}>
          <div className="inline-flex items-center gap-2 border border-white/20 bg-white/8 text-white text-[11px] font-semibold uppercase tracking-[0.12em] px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" style={{ boxShadow: "0 0 6px rgba(52,211,153,0.9)" }} />
            Iscrizione confermata
          </div>

          <h1 className="h-display font-bold" style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)", lineHeight: 1.0 }}>
            Ci sei! 🎉
          </h1>

          <p className="font-bold text-white/80 text-base md:text-lg mt-5 mb-3">
            Sabato 29 agosto · 10:00–12:00 · su Zoom
          </p>
          <p className="text-white/55 text-sm max-w-xl mx-auto leading-relaxed">
            Costruiamo insieme il tuo piano lanci per i prossimi 12 mesi. Alla fine hai un piano completo già scritto, adattato al tuo business.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noreferrer"
              className="pill bg-white text-[#156686] hover:-translate-y-0.5 whitespace-nowrap font-semibold"
            >
              🗓 Salva la data in calendario →
            </a>
            <a href="#step-workbook" className="cta-ghost text-white/70 border-white/25 hover:text-white hover:border-white/50 whitespace-nowrap">
              Scarica il workbook ↓
            </a>
          </div>

          <div className="mt-10 max-w-xl mx-auto bg-white/8 border border-white/15 rounded-2xl p-5 text-sm text-white/65 leading-relaxed text-left">
            <p className="font-semibold text-white/85 mb-1">Tieni d'occhio la tua email</p>
            Nelle prossime ore ricevi un'email con tutti i dettagli. Se non la trovi in arrivo, controlla nello spam. Il link Zoom arriva la mattina del 29 agosto, non prima.
          </div>
        </div>
      </section>

      {/* STEPS — 3 passi da fare */}
      <section className="py-16 md:py-24 bg-[#EEF3F5]">
        <div className="container-narrow max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-4 text-center">Cosa fare adesso</p>
          <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-14">
            Tre cose da fare{" "}
            <em className="text-[#156686]">prima del 29 agosto</em>
          </h2>

          <div className="flex flex-col gap-6">
            {/* Step 1: Calendario */}
            <div className="bg-white rounded-2xl border border-[#156686]/15 p-6 md:p-8 flex gap-5 md:gap-8 items-start" style={{ boxShadow: "0 2px 16px rgba(21,102,134,0.06)" }}>
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex-shrink-0 flex items-center justify-center font-bold text-sm text-white" style={{ backgroundColor: "#156686" }}>01</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">🗓</span>
                  <h3 className="font-bold text-lg text-foreground/90">Salva la data in calendario</h3>
                </div>
                <p className="text-sm text-foreground/60 leading-relaxed mb-4">Aggiungi subito la masterclass al tuo calendario per non dimenticarti. Il link Zoom arriva via email la mattina del 29 agosto.</p>
                <a href={CALENDAR_URL} target="_blank" rel="noreferrer" className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 inline-flex">
                  Aggiungi a Google Calendar →
                </a>
                <p className="text-xs text-foreground/40 mt-3">Sabato 29 agosto · 10:00–12:00 · Zoom</p>
              </div>
            </div>

            {/* Step 2: Workbook */}
            <div id="step-workbook" className="bg-white rounded-2xl border border-[#156686]/15 p-6 md:p-8 flex gap-5 md:gap-8 items-start" style={{ boxShadow: "0 2px 16px rgba(21,102,134,0.06)" }}>
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex-shrink-0 flex items-center justify-center font-bold text-sm text-white" style={{ backgroundColor: "#156686" }}>02</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">📋</span>
                  <h3 className="font-bold text-lg text-foreground/90">Scarica il workbook</h3>
                </div>
                <p className="text-sm text-foreground/60 leading-relaxed mb-4">Scaricalo adesso e stampalo (o aprilo su un secondo schermo) prima della diretta. Lo compili insieme a noi sezione per sezione. Senza workbook perdi l'80% del valore della mattinata.</p>
                <ul className="space-y-2 mb-5">
                  {[
                    "La sezione target per ogni tua offerta",
                    "La mappa delle offerte con l'ordine di lancio",
                    "Il piano dell'anno e il piano contenuti per ogni fase",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/75">
                      <CheckIcon />{item}
                    </li>
                  ))}
                </ul>
                <a href="#" className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 inline-flex">
                  Scarica il workbook →
                </a>
                <p className="text-xs text-foreground/40 mt-3">Consiglio: carta e penna vicino aiutano.</p>
              </div>
            </div>

            {/* Step 3: Questionario */}
            <div className="bg-white rounded-2xl border border-[#156686]/15 p-6 md:p-8 flex gap-5 md:gap-8 items-start" style={{ boxShadow: "0 2px 16px rgba(21,102,134,0.06)" }}>
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex-shrink-0 flex items-center justify-center font-bold text-sm text-white" style={{ backgroundColor: "#156686" }}>03</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">✍️</span>
                  <h3 className="font-bold text-lg text-foreground/90">Rispondi al questionario</h3>
                </div>
                <p className="text-sm text-foreground/60 leading-relaxed mb-4">Due minuti, anonimo. Quello che scrivi ci aiuta a impostare la diretta sulla situazione reale di chi partecipa. Rispondi come ti viene, senza pensarci troppo.</p>
                <a href="#" className="pill border border-[#156686]/30 text-[#156686] hover:bg-[#156686]/5 inline-flex">
                  Compila il questionario →
                </a>
                <p className="text-xs text-foreground/40 mt-3">Ci vuole meno di 2 minuti.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEGUICI SU INSTAGRAM */}
      <section className="py-16 md:py-20 relative overflow-hidden" style={{ backgroundColor: "#156686" }} data-cursor-light>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-[500px] h-[500px] rounded-full" style={{ background: "#6C9FA8", opacity: 0.3, filter: "blur(100px)", top: "-20%", left: "-5%", animation: "orb-drift-1 28s ease-in-out infinite" }} />
          <div className="absolute w-[400px] h-[400px] rounded-full" style={{ background: "#0c2330", opacity: 0.2, filter: "blur(80px)", bottom: "-10%", right: "5%", animation: "orb-drift-2 34s ease-in-out infinite" }} />
        </div>
        <div className="container-narrow relative">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50 mb-4">Rimani aggiornato</p>
          <h2 className="h-display font-bold text-white leading-[1.1] mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Seguici su <em style={{ color: "#C4D9DC" }}>Instagram</em>
          </h2>
          <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-xl mb-8">
            Nei giorni prima della masterclass pubblicheremo contenuti per prepararti. Seguici per non perderti nulla.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://instagram.com/andreabonomo_mktg" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl px-5 py-4 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none"/>
              </svg>
              <div>
                <p className="text-white font-semibold text-sm">Andrea Bonomo</p>
                <p className="text-white/60 text-xs">@andreabonomo_mktg</p>
              </div>
            </a>
            <a href="#" className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl px-5 py-4 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none"/>
              </svg>
              <div>
                <p className="text-white font-semibold text-sm">Davide Angiolillo</p>
                <p className="text-white/60 text-xs">@[handle da aggiungere]</p>
              </div>
            </a>
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
