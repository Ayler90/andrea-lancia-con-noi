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

      {/* HERO */}
      <section className="relative overflow-hidden pt-20 pb-20 md:pt-28 md:pb-28 text-center">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#156686]/20 blur-3xl pointer-events-none" style={{ top: "-10%", left: "-8%", zIndex: 0, animation: "orb-drift-1 22s ease-in-out infinite" }} />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-[#156686]/20 blur-3xl pointer-events-none" style={{ top: "5%", right: "-5%", zIndex: 0, animation: "orb-drift-2 28s ease-in-out infinite" }} />

        <div className="container-narrow relative" style={{ zIndex: 1 }}>
          <div className="inline-flex items-center gap-2 border border-[#156686]/25 bg-[#156686]/6 text-[#156686] text-[11px] font-semibold uppercase tracking-[0.12em] px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" style={{ boxShadow: "0 0 5px rgba(52,211,153,0.8)" }} />
            Iscrizione confermata
          </div>

          <h1 className="h-display font-bold text-center" style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 1.0 }}>
            Ci sei!
          </h1>

          <p className="font-bold text-[#156686] text-base mt-4 mb-6">[DATA] · [ORA] · su Zoom</p>

          <p className="text-foreground/70 leading-relaxed max-w-2xl mx-auto mb-10 text-sm md:text-base">
            In questa giornata costruiamo insieme il tuo piano lanci per i prossimi 12 mesi: target per ogni offerta, struttura dell&apos;anno, contenuti per ogni fase di lancio e come portare i clienti da un&apos;offerta all&apos;altra nel tempo. Alla fine hai un piano completo già scritto, adattato al tuo business.
          </p>

          <a href="#" className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 inline-flex mb-10">
            Salva la data in calendario →
          </a>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 max-w-xl mx-auto text-sm text-amber-900 leading-relaxed text-left">
            <p className="font-bold mb-2">Importante</p>
            Nelle prossime ore ricevi un&apos;email con tutti i dettagli. Se non la trovi in arrivo, controlla nello spam. Il link Zoom arriva la mattina del webinar, non prima. Hai domande? Scrivi a [EMAIL DI ANDREA].
          </div>
        </div>
      </section>

      {/* WORKBOOK */}
      <section className="py-16 md:py-20 bg-[#EEF3F5]">
        <div className="container-narrow">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-4">Il tuo regalo</p>
          <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            Scarica subito il tuo <em className="text-[#156686]">workbook</em>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl">
            <div>
              <p className="text-sm md:text-base text-foreground/70 leading-relaxed mb-6">
                Il workbook è il documento che compili in diretta con noi, sezione per sezione, adattato al tuo business mentre lavoriamo. Mi raccomando, scaricalo dal link qui sotto. Se non te lo scarichi e non ti segni tutto quello che verrà fuori durante la diretta, ti perdi l&apos;80% del valore della masterclass.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "La sezione target per ogni tua offerta",
                  "La mappa delle offerte con l'ordine di lancio",
                  "Il piano dell'anno e il piano contenuti per ogni fase",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-foreground/80 text-sm">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#" className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 inline-flex mb-4">
                Scarica il workbook →
              </a>
              <p className="text-xs text-foreground/50 mt-3">
                Consiglio: stampalo o aprilo su un secondo schermo durante la masterclass. Avere carta e penna vicino aiuta.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-[#156686]/15 p-8 flex flex-col items-center gap-4 shadow-sm text-center">
              <div className="relative">
                <div className="text-5xl" style={{ animation: "thought-float 3s ease-in-out infinite" }}>📋</div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-4 blur-xl rounded-full pointer-events-none" style={{ backgroundColor: "rgba(21,102,134,0.3)" }} />
              </div>
              <div>
                <p className="font-bold text-foreground/85 text-lg mb-1">Il tuo workbook</p>
                <p className="text-sm text-foreground/50">Disponibile subito</p>
              </div>
              <div className="inline-flex items-center gap-1.5 border border-emerald-200 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" style={{ boxShadow: "0 0 5px rgba(52,211,153,0.8)" }} />
                Scaricabile ora
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUESTIONARIO */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-narrow max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-4">Due minuti</p>
          <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            Due minuti prima di <em className="text-[#156686]">chiudere questa pagina</em>
          </h2>
          <p className="text-sm md:text-base text-foreground/70 leading-relaxed max-w-2xl mb-8">
            Rispondi a questo questionario anonimo: quello che scrivi ci aiuta a impostare la diretta sulla situazione reale di chi partecipa. Rispondi come ti viene, senza pensarci troppo.
          </p>
          <a href="#" className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 inline-flex">
            Compila il questionario →
          </a>
        </div>
      </section>

      {/* SEGUICI SU INSTAGRAM */}
      <section className="py-16 md:py-20 bg-[#156686]" data-cursor-light>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-[500px] h-[500px] rounded-full" style={{ background: "#6C9FA8", opacity: 0.3, filter: "blur(100px)", top: "-20%", left: "-5%", animation: "orb-drift-1 28s ease-in-out infinite" }} />
        </div>
        <div className="container-narrow relative">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50 mb-4">Rimani aggiornato</p>
          <h2 className="h-display font-bold text-white leading-[1.1] mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Seguici su <em style={{ color: "#C4D9DC" }}>Instagram</em>
          </h2>
          <p className="text-sm md:text-base text-white/75 leading-relaxed max-w-xl mb-8">
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
