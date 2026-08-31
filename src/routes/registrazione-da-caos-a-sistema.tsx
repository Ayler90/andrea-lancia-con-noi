import { createFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/registrazione-da-caos-a-sistema")({
  component: RegistrazioneDaCaosASistema,
  head: () => ({
    title: "Registrazione – Da Caos A Sistema | Andrea Bonomo",
    meta: [{ name: "robots", content: "noindex, nofollow" }],
  }),
});

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#4B6380" fillOpacity="0.15" />
      <path d="M7 12.5l3.5 3.5 6.5-7" stroke="#4B6380" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIconWhite() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="rgba(196,217,220,0.2)" />
      <path d="M7 12.5l3.5 3.5 6.5-7" stroke="#C4D9DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RegistrazioneDaCaosASistema() {
  return (
    <div className="min-h-screen bg-background flex flex-col">

      {/* HERO — VIDEO */}
      <section className="relative overflow-hidden py-16 md:py-24 text-white" style={{ backgroundColor: "#4B6380" }} data-cursor-light>
        <div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "#1B2F52", opacity: 0.45, filter: "blur(120px)", top: "-20%", left: "-10%", animation: "orb-drift-1 22s ease-in-out infinite" }} />
        <div className="absolute w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "#6C9FA8", opacity: 0.3, filter: "blur(100px)", bottom: "-10%", right: "-5%", animation: "orb-drift-2 28s ease-in-out infinite" }} />

        <div className="container-narrow relative" style={{ zIndex: 1 }}>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/8 text-white text-[11px] font-semibold uppercase tracking-[0.12em] px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" style={{ boxShadow: "0 0 6px rgba(52,211,153,0.9)" }} />
              Registrazione disponibile fino a domenica 6 settembre
            </div>

            <h1 className="h-display font-bold text-white" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}>
              Rivedi la masterclass{" "}
              <em style={{ color: "#C4D9DC" }}>quando vuoi</em>
            </h1>

            <p className="text-white/80 mt-5 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Qui sotto trovi la registrazione completa di <strong className="text-white">Da Caos a Sistema</strong>. Prenditi il tempo che ti serve, fermati dove hai bisogno, e compila il workbook mentre guardi — è fatto per lavorarci insieme.
            </p>
          </div>

          {/* VIDEO */}
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden" style={{ boxShadow: "0 16px 80px rgba(0,0,0,0.45)" }}>
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

          {/* CTA workbook */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href="https://docs.google.com/document/d/1CeoHFyWylrmRn65gBMjINacUVAzSRt6aSd-5ilW0cGU/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="pill bg-white text-[#4B6380] hover:bg-white/90 hover:-translate-y-0.5 font-semibold"
            >
              📋 Scarica il workbook e compilalo mentre guardi →
            </a>
            <p className="text-white/50 text-xs">Clicca su File → Crea una copia per salvarlo sul tuo Drive</p>
          </div>
        </div>
      </section>

      {/* BUSINESS BLUEPRINT */}
      <section className="py-20 md:py-28 bg-[#EEF3F5]">
        <div className="container-narrow">

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4B6380] mb-4 text-center">Il passo successivo</p>
          <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-5">
            Hai visto il metodo.{" "}
            <em className="text-[#4B6380]">Vuoi applicarlo con noi?</em>
          </h2>
          <p className="text-center text-foreground/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-16">
            Durante la masterclass hai costruito la struttura. Con <strong>Business Blueprint</strong> la costruiamo insieme, nel dettaglio, adattata al tuo business — con Andrea e Davide al tuo fianco per tutto l'anno.
          </p>

          {/* Card principale */}
          <div className="rounded-3xl overflow-hidden mb-8" style={{ background: "linear-gradient(140deg, #1B2F52 0%, #2d4a6e 50%, #4B6380 100%)", boxShadow: "0 8px 60px rgba(27,47,82,0.35)" }}>
            <div className="p-8 md:p-12 lg:p-14">

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div>
                  <div className="inline-flex items-center gap-2 border border-amber-400/40 bg-amber-400/10 text-amber-300 text-[11px] font-semibold uppercase tracking-[0.12em] px-4 py-2 rounded-full mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" style={{ boxShadow: "0 0 6px rgba(251,191,36,0.9)" }} />
                    Solo 5 posti — percorso annuale
                  </div>
                  <h3 className="h-display font-bold text-white" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                    Business Blueprint
                  </h3>
                  <p className="text-white/60 text-sm mt-1">con Andrea Bonomo e Davide Angiolillo</p>
                </div>
                <a
                  href="https://andreabonomo.notion.site/business-blueprint"
                  target="_blank"
                  rel="noreferrer"
                  className="pill font-semibold text-[#1B2F52] hover:-translate-y-0.5 whitespace-nowrap flex-shrink-0"
                  style={{ backgroundColor: "#C4D9DC", boxShadow: "0 4px 24px rgba(196,217,220,0.3)" }}
                >
                  Leggi tutti i dettagli e candidati →
                </a>
              </div>

              {/* Promessa */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-10">
                <p className="text-white/90 text-base md:text-lg leading-relaxed">
                  Business Blueprint è il percorso annuale in cui costruiamo insieme il tuo sistema di offerte, lanci e funnel — non a teoria, ma sul tuo business, con sessioni live, feedback diretti e un accompagnamento continuo da parte nostra. L'obiettivo è che tu esca dall'anno con un ecosistema che funziona anche quando non stai spingendo attivamente.
                </p>
              </div>

              {/* Cosa c'è dentro */}
              <div className="grid md:grid-cols-2 gap-10">

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#C4D9DC] mb-5">Cosa include il percorso</p>
                  <ul className="space-y-4">
                    {[
                      { titolo: "Sessioni di gruppo mensili", desc: "Ogni mese ci troviamo in live con tutto il gruppo. Lavoriamo su strategia, copy, offerte e lanci — con esempi reali presi dal business di chi partecipa." },
                      { titolo: "Feedback su tutto quello che produci", desc: "Landing page, email di lancio, sales page, sequenze automatiche: mandi e noi ti rispondiamo con feedback concreti. Non commenti generici, ma indicazioni precise su cosa cambiare e perché." },
                      { titolo: "Revisione della tua strategia di offerte", desc: "Partiamo da quello che hai e costruiamo la struttura giusta: quali offerte, in che ordine, a quale prezzo, con quali meccaniche di upsell e cross-sell." },
                      { titolo: "Pianificazione dei lanci per tutto l'anno", desc: "Costruiamo insieme il tuo calendario lanci: quando aprire, quanto durare, quali contenuti creare, come strutturare le email — per ogni lancio che pianifichi nel corso dell'anno." },
                      { titolo: "Funnel evergreen operativo", desc: "Ti aiutiamo a costruire almeno un funnel evergreen che genera entrate in modo continuativo, senza che tu debba essere sempre presente a spingere." },
                      { titolo: "Community privata + supporto tra le sessioni", desc: "Accesso a un gruppo riservato dove puoi fare domande, condividere avanzamenti e ricevere supporto tra una sessione e l'altra — da noi e dagli altri partecipanti." },
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <CheckIconWhite />
                        <div>
                          <p className="text-white font-semibold text-sm">{item.titolo}</p>
                          <p className="text-white/55 text-sm leading-relaxed mt-0.5">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#C4D9DC] mb-5">Per chi è fatto</p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Hai già un business online avviato e vuoi strutturarlo meglio",
                      "Fai lanci ma in modo improvvisato, senza un sistema ripetibile",
                      "Vuoi costruire funnel evergreen che lavorano anche senza di te",
                      "Cerchi un affiancamento continuo, non un corso da guardare da sola",
                      "Vuoi lavorare sulla tua strategia di offerte in modo serio e approfondito",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-white/75 text-sm">
                        <CheckIconWhite />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#C4D9DC] mb-5 mt-8">Non fa per te se</p>
                  <ul className="space-y-3">
                    {[
                      "Stai ancora cercando di capire di cosa occuparti",
                      "Non hai ancora un'offerta o dei clienti",
                      "Cerchi una soluzione rapida senza voler lavorarci seriamente",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-white/50 text-sm">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                          <circle cx="12" cy="12" r="12" fill="rgba(255,255,255,0.07)" />
                          <path d="M8 8l8 8M16 8l-8 8" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Posti */}
                  <div className="mt-8 bg-white/8 border border-white/15 rounded-2xl p-5">
                    <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">Posti disponibili</p>
                    <div className="flex items-end gap-3">
                      <span className="text-white font-bold" style={{ fontSize: "3.5rem", lineHeight: 1 }}>5</span>
                      <span className="text-white/40 text-sm mb-2">posti massimi · candidatura aperta</span>
                    </div>
                    <p className="text-white/40 text-xs mt-2 leading-relaxed">Il numero ridotto non è una trovata di marketing. È una scelta deliberata: con più di 5 persone non riusciremmo a dare il livello di attenzione che questo percorso richiede.</p>
                  </div>
                </div>
              </div>

              {/* CTA bottom */}
              <div className="mt-12 flex flex-col items-center gap-3 text-center">
                <a
                  href="https://andreabonomo.notion.site/business-blueprint"
                  target="_blank"
                  rel="noreferrer"
                  className="pill font-semibold text-[#1B2F52] hover:-translate-y-0.5"
                  style={{ backgroundColor: "#C4D9DC", boxShadow: "0 4px 24px rgba(196,217,220,0.3)" }}
                >
                  Leggi tutti i dettagli e candidati →
                </a>
                <p className="text-white/35 text-xs">Trovi tutte le informazioni sul Notion — incluse le modalità di candidatura</p>
              </div>

            </div>
          </div>

          {/* Note finali */}
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {[
              { emoji: "🗓", titolo: "Inizio", testo: "Il percorso parte a ottobre 2026 e dura 12 mesi." },
              { emoji: "👥", titolo: "Gruppo piccolo", testo: "Massimo 5 persone. Non è un corso broadcast — è un lavoro vero." },
              { emoji: "💬", titolo: "Candidatura", testo: "Non si acquista direttamente. Prima parliamo per capire se fa al caso tuo." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-[#4B6380]/10" style={{ boxShadow: "0 2px 16px rgba(21,102,134,0.06)" }}>
                <span className="text-2xl">{item.emoji}</span>
                <p className="font-bold text-foreground/85 mt-3 mb-1">{item.titolo}</p>
                <p className="text-sm text-foreground/55 leading-relaxed">{item.testo}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "#1B2F52" }} className="text-white mt-auto">
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
