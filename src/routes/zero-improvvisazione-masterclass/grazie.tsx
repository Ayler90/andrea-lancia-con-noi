import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import React from "react";

export const Route = createFileRoute("/zero-improvvisazione-masterclass/grazie")({
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
      <Nav />

      {/* HERO THANK-YOU */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 text-center">
        <div className="container-narrow max-w-5xl mx-auto px-5">
          <h1 className="h-display text-[clamp(3rem,8vw,6rem)] leading-[1.0] mb-4">Ci sei!</h1>
          <p className="font-bold text-[#156686] text-base mb-6">[DATA] · [ORA] · su Zoom</p>
          <p className="text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-10">
            In questa giornata costruiamo insieme il tuo piano lanci per i prossimi 12 mesi: target per ogni offerta, struttura dell&apos;anno, contenuti per ogni fase di lancio e come portare i clienti da un&apos;offerta all&apos;altra nel tempo. Alla fine hai un piano completo già scritto, adattato al tuo business.
          </p>
          <a href="#" className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 inline-flex mb-8">
            Salva la data in calendario [LINK]
          </a>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 max-w-xl mx-auto text-sm text-amber-900 leading-relaxed text-left">
            <p className="font-bold mb-2">IMPORTANTE</p>
            Nelle prossime ore ricevi un&apos;email con tutti i dettagli. Se non la trovi in arrivo, controlla nello spam. Il link Zoom arriva la mattina del webinar, non prima. Hai domande? Scrivi a [EMAIL DI ANDREA].
          </div>
        </div>
      </section>

      {/* WORKBOOK */}
      <section style={{ backgroundColor: "#EEF3F5" }} className="py-16 md:py-20">
        <div className="container-narrow max-w-5xl mx-auto px-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-3">Il tuo regalo</p>
          <h2 className="h-display text-3xl md:text-4xl lg:text-5xl mb-6">Scarica subito il tuo workbook</h2>
          <p className="text-foreground/80 leading-relaxed max-w-2xl mb-6">
            Il workbook è il documento che compili in diretta con noi, sezione per sezione, adattato al tuo business mentre lavoriamo. Mi raccomando, scaricalo dal link qui sotto. Se non te lo scarichi e non ti segni tutto quello che verrà fuori durante la diretta, ti perdi l&apos;80% del valore della masterclass.
          </p>
          <ul className="space-y-3 mb-8 max-w-xl">
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
            Scarica il workbook [LINK]
          </a>
          <p className="text-xs text-foreground/50 max-w-sm">
            Consiglio: stampalo o aprilo su un secondo schermo durante la masterclass. Avere carta e penna vicino aiuta.
          </p>
        </div>
      </section>

      {/* QUESTIONARIO */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-narrow max-w-5xl mx-auto px-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-3">Due minuti</p>
          <h2 className="h-display text-3xl md:text-4xl lg:text-5xl mb-6">Due minuti prima di chiudere questa pagina</h2>
          <p className="text-foreground/80 leading-relaxed max-w-2xl mb-8">
            Rispondi a questo questionario anonimo: quello che scrivi ci aiuta a impostare la diretta sulla situazione reale di chi partecipa. Rispondi come ti viene, senza pensarci troppo.
          </p>
          <a href="#" className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 inline-flex">
            Compila il questionario [LINK]
          </a>
        </div>
      </section>

      {/* SEGUICI SU INSTAGRAM */}
      <section style={{ backgroundColor: "#EEF3F5" }} className="py-16 md:py-20">
        <div className="container-narrow max-w-5xl mx-auto px-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-3">Rimani aggiornato</p>
          <h2 className="h-display text-3xl md:text-4xl lg:text-5xl mb-6">Seguici su Instagram</h2>
          <p className="text-foreground/80 leading-relaxed max-w-2xl mb-6">
            Nei giorni prima della masterclass pubblicheremo contenuti per prepararti. Seguici su Instagram per non perderti nulla:
          </p>
          <ul className="space-y-3">
            <li className="text-foreground/80 text-sm">
              Andrea:{" "}
              <a href="https://instagram.com/andreabonomo_mktg" className="text-[#156686] font-semibold hover:underline">
                @andreabonomo_mktg
              </a>
            </li>
            <li className="text-foreground/80 text-sm">
              Davide:{" "}
              <a href="#" className="text-[#156686] font-semibold hover:underline">
                @[HANDLE DAVE] [LINK]
              </a>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
