import { createFileRoute } from "@tanstack/react-router";
import React, { useEffect } from "react";

export const Route = createFileRoute("/registrazione-da-caos-a-sistema")({
  component: RegistrazioneDaCaosASistema,
  head: () => ({
    title: "Registrazione Masterclass – Da Caos A Sistema | Andrea Bonomo",
    meta: [{ name: "robots", content: "noindex, nofollow" }],
  }),
});

function RegistrazioneDaCaosASistema() {
  useEffect(() => {
    document.title = "Registrazione Masterclass – Da Caos A Sistema | Andrea Bonomo";
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#EEF3F5" }}>

      {/* HERO — VIDEO */}
      <section className="relative py-16 md:py-24 text-white" style={{ backgroundColor: "#4B6380" }}>
        <div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "#1B2F52", opacity: 0.4, filter: "blur(120px)", top: "-20%", left: "-10%" }} />
        <div className="absolute w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "#6C9FA8", opacity: 0.25, filter: "blur(100px)", bottom: "-15%", right: "-5%" }} />

        <div className="relative px-6 md:px-12 max-w-5xl mx-auto" style={{ zIndex: 1 }}>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/8 text-white text-[11px] font-semibold uppercase tracking-[0.12em] px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" style={{ boxShadow: "0 0 6px rgba(52,211,153,0.9)" }} />
              Registrazione · Da Caos a Sistema
            </div>
            <h1 className="font-bold text-white" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1, fontFamily: "Instrument Serif, serif" }}>
              Rivedi la masterclass{" "}
              <em style={{ color: "#C4D9DC" }}>quando vuoi</em>
            </h1>
            <p className="text-white/75 mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Qui sotto trovi la registrazione completa di <strong className="text-white">Da Caos a Sistema</strong>. Prenditi il tempo che ti serve, fermati, riprendi, e compila il workbook mentre guardi.
            </p>
          </div>

          {/* VIDEO */}
          <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 16px 80px rgba(0,0,0,0.4)" }}>
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
              <iframe
                src="https://www.youtube.com/embed/wMJ5gpcaH1c"
                title="Da Caos a Sistema – Registrazione Masterclass"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
              />
            </div>
          </div>

          <p className="text-center text-white/50 text-sm mt-5">
            La registrazione è disponibile per 7 giorni dalla data della masterclass.
          </p>
        </div>
      </section>

      {/* BUSINESS BLUEPRINT */}
      <section className="py-16 md:py-24 bg-white">
        <div className="px-6 md:px-12 max-w-4xl mx-auto">

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4B6380] mb-4 text-center">Il passo successivo</p>
          <h2 className="font-bold text-center mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1, fontFamily: "Instrument Serif, serif", color: "#1B2F52" }}>
            Vuoi costruire il tuo sistema{" "}
            <em style={{ color: "#4B6380" }}>con noi al fianco?</em>
          </h2>
          <p className="text-center text-foreground/65 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            Durante la masterclass hai visto il metodo. Con <strong>Business Blueprint</strong> lo applichiamo insieme, passo dopo passo, nel tuo business. Un percorso annuale di mentoring con Andrea e Davide, pensato per chi vuole smettere di improvvisare e costruire qualcosa di solido.
          </p>

          {/* Card */}
          <div className="rounded-3xl overflow-hidden" style={{ background: "linear-gradient(135deg, #1B2F52 0%, #4B6380 100%)", boxShadow: "0 8px 60px rgba(75,99,128,0.35)" }}>
            <div className="p-8 md:p-12">
              <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 text-white text-[11px] font-semibold uppercase tracking-[0.12em] px-4 py-2 rounded-full mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" style={{ boxShadow: "0 0 6px rgba(251,191,36,0.9)" }} />
                Solo 5 posti disponibili
              </div>

              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="font-bold text-white text-2xl md:text-3xl mb-4" style={{ fontFamily: "Instrument Serif, serif" }}>
                    Business Blueprint
                  </h3>
                  <p className="text-white/75 leading-relaxed mb-6">
                    Un anno di lavoro insieme su offerte, lanci, funnel e comunicazione. Non un corso da guardare da soli: un percorso dove ti accompagniamo noi, con sessioni di gruppo, feedback diretti e un sistema costruito su misura per il tuo business.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Strategia annuale di lanci e offerte",
                      "Sessioni di gruppo mensili con Andrea e Davide",
                      "Feedback su copy, funnel ed email",
                      "Community privata e supporto continuo",
                      "Accesso a tutti i materiali e le risorse",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                        <span className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style={{ backgroundColor: "rgba(196,217,220,0.2)", border: "1px solid rgba(196,217,220,0.4)" }}>
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6.5l3 3 5-6" stroke="#C4D9DC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="bg-white/10 border border-white/20 rounded-2xl p-6 w-full mb-6">
                    <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1">Posti rimasti</p>
                    <p className="text-white font-bold" style={{ fontSize: "4rem", lineHeight: 1 }}>5</p>
                    <p className="text-white/50 text-xs mt-1">su un massimo di 5</p>
                  </div>
                  <a
                    href="https://andreabonomo.notion.site/business-blueprint"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 font-semibold text-[#1B2F52] rounded-full px-8 py-4 transition-all hover:-translate-y-0.5"
                    style={{ backgroundColor: "#C4D9DC", boxShadow: "0 4px 24px rgba(196,217,220,0.4)" }}
                  >
                    Scopri Business Blueprint →
                  </a>
                  <p className="text-white/40 text-xs mt-3">Leggi tutte le informazioni e candidati</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "#1B2F52" }} className="text-white mt-auto">
        <div className="px-6 py-8 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
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
