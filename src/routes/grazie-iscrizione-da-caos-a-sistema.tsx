import { createFileRoute } from "@tanstack/react-router";
import React, { useEffect } from "react";
import posthog from "posthog-js";
import copertingWorkbook from "@/assets/copertina da caos a sistema workbook.png";

export const Route = createFileRoute("/grazie-iscrizione-da-caos-a-sistema")({
  component: GrazieDaChaosSistema,
  head: () => ({
    meta: [
      { name: "robots", content: "noindex, nofollow" },
      { title: "Ci sei! – Da Caos a Sistema | Andrea Bonomo" },
    ],
  }),
});

const CALENDAR_URL =
  "https://calendar.google.com/calendar/render?action=TEMPLATE" +
  "&text=Da+Caos+a+Sistema+%E2%80%93+Masterclass+Gratuita" +
  "&dates=20260829T080000Z%2F20260829T100000Z" +
  "&details=Masterclass+gratuita+con+Andrea+Bonomo+e+Davide+Angiolillo.+Il+link+Zoom+arriva+via+email+la+mattina+stessa." +
  "&location=Zoom";

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#4B6380" fillOpacity="0.12" />
      <path d="M7 12.5l3.5 3.5 6.5-7" stroke="#4B6380" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GrazieDaChaosSistema() {
  useEffect(() => {
    posthog.capture("lead_masterclass", { source: "grazie-iscrizione-da-caos-a-sistema" });
    document.title = "Grazie per l'iscrizione - Andrea Bonomo - Funnel e Launch Strategist";
    return () => { document.title = "Andrea Bonomo - Funnel e Launch Strategist"; };
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">

      {/* HERO */}
      <section className="relative overflow-hidden py-20 md:py-28 text-white" style={{ backgroundColor: "#4B6380" }} data-cursor-light>
        <div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "#1B2F52", opacity: 0.45, filter: "blur(120px)", top: "-20%", left: "-10%", animation: "orb-drift-1 22s ease-in-out infinite" }} />
        <div className="absolute w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "#6C9FA8", opacity: 0.3, filter: "blur(100px)", bottom: "-10%", right: "-5%", animation: "orb-drift-2 28s ease-in-out infinite" }} />

        <div className="container-narrow relative text-center" style={{ zIndex: 1 }}>
          <div className="inline-flex items-center gap-2 border border-white/20 bg-white/8 text-white text-[11px] font-semibold uppercase tracking-[0.12em] px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" style={{ boxShadow: "0 0 6px rgba(52,211,153,0.9)" }} />
            Iscrizione confermata · Non chiudere questa pagina. Leggi qui sotto.
          </div>

          <h1 className="h-display font-bold" style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)", lineHeight: 1.0 }}>
            Ci sei! 🎉
          </h1>

          <p className="text-white/90 text-base md:text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Lascia che ti diciamo subito una cosa: hai fatto un passo molto, molto importante. Se sei qui è perché vuoi capire come programmare i tuoi lanci, i tuoi funnel, organizzare le tue offerte e definire, finalmente, il tuo ecosistema. E nella masterclass del 29 agosto lo faremo insieme, in diretta.
          </p>

          <p className="font-semibold text-white/70 text-sm mt-4">
            Sabato 29 agosto · ore 10:00 · su Zoom
          </p>

          <div className="mt-10 max-w-2xl mx-auto bg-white/10 border border-white/20 rounded-2xl p-5 text-sm text-white/75 leading-relaxed text-left">
            <p className="font-semibold text-white mb-2">Tieni d'occhio la tua email</p>
            Nelle prossime ore ricevi un'email con tutti i dettagli. Se non la trovi, controlla in SPAM e in PROMOZIONI: le email di conferma finiscono spesso lì. Il link Zoom arriva la mattina del 29 agosto, non prima.
          </div>
        </div>
      </section>

      {/* STEPS — 3 passi da fare */}
      <section className="py-16 md:py-24 bg-[#EEF3F5]">
        <div className="container-narrow max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4B6380] mb-4 text-center">Cosa fare adesso</p>
          <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-14">
            Tre cose da fare{" "}
            <em className="text-[#4B6380]">prima del 29 agosto</em>
          </h2>

          <div className="flex flex-col gap-6">

            {/* Step 1: Workbook — grande, immagine sinistra + testo destra */}
            <div id="step-workbook" className="bg-white rounded-3xl border border-[#4B6380]/12 overflow-hidden" style={{ boxShadow: "0 4px 40px rgba(21,102,134,0.10)" }}>
              <div className="grid md:grid-cols-[1fr_1.4fr]">
                {/* Copertina */}
                <div className="bg-[#EEF3F5] flex items-center justify-center p-8 md:p-12">
                  <img
                    src={copertingWorkbook}
                    alt="Copertina workbook masterclass"
                    className="w-full max-w-[240px] rounded-xl object-cover"
                    style={{
                      transform: "rotate(-4deg)",
                      boxShadow: "8px 16px 40px rgba(21,102,134,0.22), 2px 4px 12px rgba(21,102,134,0.12)",
                    }}
                  />
                </div>
                {/* Testo */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-1.5 border border-emerald-200 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-5 self-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" style={{ boxShadow: "0 0 5px rgba(52,211,153,0.8)" }} />
                    Passo 01 · Fallo adesso
                  </div>
                  <h3 className="font-bold text-foreground/90 text-xl md:text-2xl leading-snug mb-3">
                    Scarica il workbook e tienilo aperto durante la diretta
                  </h3>
                  <p className="text-sm md:text-base text-foreground/60 leading-relaxed mb-5">
                    Lo compiliamo insieme sezione per sezione durante la mattinata. Senza workbook perdi l'80% del valore: alla fine della diretta esci con un piano vero già scritto, adattato al tuo business. Stampalo o aprilo su un secondo schermo.
                  </p>
                  <p className="text-sm text-foreground/60 leading-relaxed mb-6">
                    Una volta cliccato sul pulsante si aprirà il Workbook in formato Google Doc. Clicca su "File", poi "Crea una copia", per salvarlo sul tuo Drive e modificarlo.
                  </p>
                  <a
                    href="https://docs.google.com/document/d/1CeoHFyWylrmRn65gBMjINacUVAzSRt6aSd-5ilW0cGU/edit?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 self-start inline-flex"
                  >
                    Scarica il workbook →
                  </a>
                  <p className="text-xs text-foreground/40 mt-3">Se vuoi stamparlo e tenerlo con te, è anche meglio.</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Step 2: Calendario */}
              <div className="bg-white rounded-2xl border border-[#4B6380]/15 p-6 md:p-8 flex gap-5 items-start" style={{ boxShadow: "0 2px 16px rgba(21,102,134,0.06)" }}>
                <div className="w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center font-bold text-sm text-white" style={{ backgroundColor: "#4B6380" }}>02</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">🗓</span>
                    <h3 className="font-bold text-lg text-foreground/90">Salva la data in calendario</h3>
                  </div>
                  <p className="text-sm text-foreground/60 leading-relaxed mb-4">Aggiungi subito la masterclass al tuo calendario per non dimenticarti. Il link Zoom arriva via email la mattina del 29 agosto.</p>
                  <a href={CALENDAR_URL} target="_blank" rel="noreferrer" className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 inline-flex">
                    Aggiungi a Google Calendar →
                  </a>
                  <p className="text-xs text-foreground/40 mt-3">Sabato 29 agosto · ore 10:00 · Zoom</p>
                </div>
              </div>

              {/* Step 3: Questionario */}
              <div className="bg-white rounded-2xl border border-[#4B6380]/15 p-6 md:p-8 flex gap-5 items-start" style={{ boxShadow: "0 2px 16px rgba(21,102,134,0.06)" }}>
                <div className="w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center font-bold text-sm text-white" style={{ backgroundColor: "#4B6380" }}>03</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">✍️</span>
                    <h3 className="font-bold text-lg text-foreground/90">Rispondi al questionario</h3>
                  </div>
                  <p className="text-sm text-foreground/60 leading-relaxed mb-4">Due minuti, anonimo. Quello che scrivi ci aiuta a impostare la diretta sulla situazione reale di chi partecipa. Rispondi come ti viene, senza pensarci troppo.</p>
                  <a href="#" className="pill border border-[#4B6380]/30 text-[#4B6380] hover:bg-[#4B6380]/5 inline-flex">
                    Compila il questionario →
                  </a>
                  <p className="text-xs text-foreground/40 mt-3">Ci vuole meno di 2 minuti.</p>
                </div>
              </div>
            </div>

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
