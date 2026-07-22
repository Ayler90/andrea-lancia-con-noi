import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ChiSono } from "@/components/site/ChiSono";
import React, { useState } from "react";

export const Route = createFileRoute("/zero-improvvisazione-masterclass")({
  component: ZeroImprovvisazioneMasterclass,
  head: () => ({
    meta: [
      { name: "robots", content: "noindex, nofollow" },
      { title: "Zero Improvvisazione – Masterclass Gratuita | Andrea Bonomo" },
      {
        name: "description",
        content:
          "La masterclass gratuita in cui Andrea Bonomo e Davide Angiolillo ti guidano a costruire il tuo piano lanci per i prossimi 12 mesi.",
      },
    ],
  }),
});

function CheckIcon({ white = false }: { white?: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill={white ? "rgba(255,255,255,0.2)" : "#156686"} fillOpacity={white ? 1 : 0.12} />
      <path d="M7 12.5l3.5 3.5 6.5-7" stroke={white ? "#fff" : "#156686"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="rgba(255,255,255,0.15)" />
      <path d="M8 8l8 8M16 8l-8 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className={`filter-btn faq-item rounded-2xl${open ? " is-active" : ""}`} style={{ transition: "box-shadow 0.35s ease, transform 0.35s ease" }}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-base text-foreground"
      >
        {q}
        <svg
          width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.35s ease", flexShrink: 0, marginLeft: 16 }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div style={{ maxHeight: open ? "400px" : "0px", overflow: "hidden", transition: open ? "max-height 0.4s ease" : "none" }}>
        <div className="px-6 pb-5 text-sm text-foreground/65 leading-relaxed">
          {a}
        </div>
      </div>
    </div>
  );
}

const faqs = [
  {
    q: "La masterclass è registrata?",
    a: "Sì, potrai rivedere la registrazione per 7 giorni. Ma la masterclass è fatta apposta per essere il più pratica possibile e per rispondere alle domande dei partecipanti in diretta, quindi se ti riguardi la registrazione ti perdi buona parte del valore della masterclass.",
  },
  {
    q: "È davvero gratuito o alla fine mi vendete qualcosa?",
    a: "La masterclass è gratuita. Alla fine ti presentiamo Business Blueprint, il nostro percorso annuale a posti limitati. Ma la masterclass di per sé non ha alcun costo, non ci sono passaggi nascosti e non sei obbligato a niente.",
  },
  {
    q: "Ho solo un servizio. Ha senso partecipare?",
    a: "Sì. Lavoriamo esattamente sulla fase in cui sei: come costruire un piano solido con quello che hai adesso, quando aggiungere altre offerte e quando invece ha più senso consolidare quello che hai già.",
  },
  {
    q: "Ho già più offerte ma penso di avere un problema di target.",
    a: "La prima parte serve proprio a fare chiarezza su questo. Spesso avere troppe offerte non è il problema: il punto è capire se sono giuste per il pubblico a cui vuoi arrivare. Se hai già un ecosistema ma senti che non sta girando bene, questa parte fa per te.",
  },
  {
    q: "Funziona anche se vendo solo infoprodotti?",
    a: "Sì. La struttura funziona allo stesso modo per videocorsi, membership, masterclass e percorsi digitali. Il workbook e il calendario che mettiamo giù durante la diretta si adattano a quello che vendi.",
  },
  {
    q: "Devo esserci in diretta?",
    a: "Il workbook si compila in diretta e noi ti guidiamo in tempo reale. Se non puoi esserci perdi la parte pratica, che è il motivo per cui la masterclass è strutturata così. Prima di iscriverti, assicurati di non avere altri impegni quella serata/mattinata.",
  },
];

function ZeroImprovvisazioneMasterclass() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background flex flex-col">

      {/* BANNER */}
      <div style={{ backgroundColor: "#156686" }} className="py-2.5 text-center text-white text-sm font-medium">
        Le iscrizioni chiudono presto
      </div>

      <Nav />

      {/* HERO */}
      <section className="pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="container-narrow max-w-5xl mx-auto px-5">
          <h1 className="h-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] mb-6 max-w-4xl">
            Pianifica i prossimi 12 mesi di{" "}
            <em style={{ color: "#156686" }}>lanci e funnel delle tue offerte</em>{" "}
            in una mattinata. Per liberi professionisti, creator e brand.
          </h1>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-2xl mb-6">
            Zero Improvvisazione è la masterclass gratuita in cui Andrea Bonomo e Davide Angiolillo ti guidano a costruire il tuo piano lanci dall&apos;inizio alla fine: quale offerta lanciare, a chi, quando, con quali contenuti e come portare i tuoi clienti da un&apos;offerta all&apos;altra nel tempo.
          </p>
          <p className="font-bold text-[#156686] mb-8 text-base">
            [DATA] · [ORA] · Zoom · Gratuito
          </p>
          <section id="form" className="bg-[#EEF3F5] border-2 border-dashed border-[#156686]/30 rounded-2xl p-8 text-center text-foreground/50 text-sm mb-4 max-w-xl">
            Form di iscrizione - da integrare
          </section>
          <a href="#form" className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 inline-flex mb-3">
            Voglio il mio posto
          </a>
          <p className="text-xs text-foreground/50">Gratuito. Niente spam. Ricevi solo l&apos;email con il link Zoom.</p>
        </div>
      </section>

      {/* PROBLEMA */}
      <section style={{ backgroundColor: "#156686" }} className="py-16 md:py-20">
        <div className="container-narrow max-w-5xl mx-auto px-5 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70 mb-3">Il punto di partenza</p>
          <h2 className="h-display text-3xl md:text-4xl lg:text-5xl mb-6 text-white">
            Stai gestendo così i tuoi lanci adesso?
          </h2>
          <p className="text-white/85 leading-relaxed mb-8 max-w-2xl">
            Ti racconto come funziona di solito, quando non hai un piano organizzato di lanci e funnel.
          </p>
          <div className="space-y-5 max-w-2xl">
            <p className="text-white/85 leading-relaxed">
              Hai una o due offerte che vorresti lanciare da qui a qualche mese. Lo sai già da un po&apos;, ma non hai ancora deciso quando partire né da dove cominciare, come comunicarlo alla tua community e che contenuti creare, quindi aspetti.
            </p>
            <p className="text-white/85 leading-relaxed">
              Nel frattempo continui a pubblicare i soliti contenuti, rispondi ai messaggi della tua community in DM e lavori con i clienti che hai, navigando un po&apos; alla giornata e senti che ti manca chiarezza in quello che fai.
            </p>
            <p className="text-white/85 leading-relaxed">
              Poi, a un certo punto, arriva il momento in cui non puoi più rimandare e in una settimana costruisci tutto di corsa: scrivi le email, crei i contenuti, metti su la pagina di iscrizione e di vendita.
            </p>
            <p className="text-white/85 leading-relaxed">
              Il lancio parte. Funziona, più o meno, e poi si chiude. Poi, stop. Passa qualche settimana, anche un mese, e le richieste rallentano perché non hai strutturato un funnel o un micro lancio.
            </p>
            <p className="text-white/85 leading-relaxed">
              Ora, non è che il tuo business non funzioni, capiamoci: ma stai navigando tra un lancio e l&apos;altro e li stai costruendo tutti all&apos;ultimo e in emergenza, senza sapere come gestire tutto quello che sta nel mezzo.
            </p>
            <p className="text-white/85 leading-relaxed">
              E, in tutto questo, è normale che i contatti arrivino a ondate: perché non hai una struttura che li porti a te in modo costante.
            </p>
          </div>
          <div className="mt-10 max-w-2xl">
            <p className="font-bold text-white mb-3">Il secondo problema è che ogni lancio ricomincia da zero.</p>
            <p className="text-white/85 leading-relaxed mb-4">
              Ogni lancio riparte da zero. Chi stai raggiungendo con questa offerta specifica? Come si collega con quello che venderai dopo? Che contenuti pubblichi nei mesi successivi? Queste domande rimangono aperte ogni volta, ed è normale che tu vada in burnout pensando al prossimo.
            </p>
            <p className="text-white/85 leading-relaxed">
              E intanto il tempo passa, l&apos;energia che metti in ogni lancio improvvisato cala sempre di più e la senti che quella sensazione di caos e disordine aumenta gradualmente.
            </p>
          </div>
        </div>
      </section>

      {/* IL VERO PROBLEMA */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-narrow max-w-5xl mx-auto px-5">
          <h2 className="h-display text-3xl md:text-4xl lg:text-5xl mb-6">Il vero problema non è il lancio</h2>
          <div className="space-y-5 max-w-2xl">
            <p className="text-foreground/80 leading-relaxed">
              Il vero problema non è tanto il lancio in sé: è come costruisci tutto il sistema attorno.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              La maggior parte delle persone che lavora da sola o con team piccoli gestisce i lanci così: si decide di lanciare qualcosa, si costruisce tutto in poco tempo, si fanno alcuni contenuti, si spera che le persone si iscrivano e si chiude. Poi la giostra riparte.
            </p>
            <p className="text-foreground/80 leading-relaxed">Per risolvere questa cosa, bisogna agire su due punti:</p>
          </div>
          <ul className="mt-5 space-y-3 max-w-2xl">
            <li className="flex items-start gap-2.5 text-foreground/80">
              <CheckIcon />
              Avere chiarezza totale su chi stai raggiungendo con quella specifica offerta che stai lanciando
            </li>
            <li className="flex items-start gap-2.5 text-foreground/80">
              <CheckIcon />
              Avere un piano che distribuisca i tuoi lanci e i tuoi funnel nell&apos;anno, in modo che le vendite non si fermino ogni volta che finisce il periodo di lancio.
            </li>
          </ul>
          <p className="mt-6 text-foreground/80 leading-relaxed max-w-2xl">
            Perché se vai a sentimento e decidi di lanciare in base a quando ti gira, oppure se affidi il tuo fatturato solo ai lanci, poi è chiaro che le tue energie ne risentono e ti vien quasi voglia di mollare tutto.
          </p>
        </div>
      </section>

      {/* CHI SIAMO */}
      <section style={{ backgroundColor: "#EEF3F5" }} className="py-16 md:py-20">
        <div className="container-narrow max-w-5xl mx-auto px-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-3">Chi siamo</p>
          <h2 className="h-display text-3xl md:text-4xl lg:text-5xl mb-10">Chi siamo e perché possiamo parlare di tutto questo?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8">
              <p className="font-bold text-lg mb-3">Andrea Bonomo</p>
              <p className="text-foreground/75 leading-relaxed text-sm">
                Sono un funnel e launch strategist. Negli ultimi anni ho lavorato con oltre 100 coach, consulenti, formatori e creator per costruire sistemi di lancio e funnel evergreen, integrandoli tra di loro e generando vendite senza finire ogni volta in burnout e con l&apos;acqua alla gola. Lavoro su contenuti, email e creando il percorso migliore per i miei clienti che vogliono trasformare un&apos;idea in un&apos;offerta che porta vendite.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <p className="font-bold text-lg mb-3">Davide Angiolillo</p>
              <p className="text-foreground/40 leading-relaxed text-sm italic">
                [Credenziali, clienti, esperienza - da completare]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COSA COSTRUIAMO */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-narrow max-w-5xl mx-auto px-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-3">Il programma</p>
          <h2 className="h-display text-3xl md:text-4xl lg:text-5xl mb-6">Cosa costruiamo insieme in questa masterclass gratuita?</h2>
          <p className="text-foreground/80 leading-relaxed mb-10 max-w-2xl">
            La masterclass è divisa in due parti e in entrambe si lavora sul tuo business specifico con un workbook che compili in diretta.
          </p>
          <div className="space-y-6 mb-8">
            <div style={{ backgroundColor: "#EEF3F5" }} className="rounded-2xl p-8">
              <p className="font-bold text-lg mb-3">Parte 1 con Davide - Target e offerte</p>
              <p className="text-foreground/75 leading-relaxed text-sm">
                Partiamo da quello che hai: le offerte che già vendi, le persone che le comprano e quelle che vuoi raggiungere. Capiamo insieme se le tue offerte parlano tutte alle stesse persone o se hai bisogno di pubblici separati, quante offerte ha senso avere in questo momento del tuo business e in quale ordine lanciarle, e come costruire un ecosistema in cui una porta naturalmente all&apos;altra senza creare confusione nella comunicazione. Se hai già troppe offerte capisci qual è quella su cui focalizzarti. Se ne hai una sola capisci quando e come aggiungerne altre.
              </p>
            </div>
            <div style={{ backgroundColor: "#EEF3F5" }} className="rounded-2xl p-8">
              <p className="font-bold text-lg mb-3">Parte 2 con Andrea - Piano di lancio nei 12 mesi</p>
              <p className="text-foreground/75 leading-relaxed text-sm">
                Costruiamo la mappa dell&apos;anno: i grandi lanci che richiedono più energia e più preparazione, i micro lanci e i funnel evergreen che portano vendite costanti nei mesi in cui non sei in fase di lancio attiva, quanto tempo prima iniziare a comunicare ogni offerta e cosa pubblicare in ogni fase. E poi la parte che quasi nessuno pianifica: come portare i tuoi clienti da un&apos;offerta all&apos;altra nel tempo attraverso l&apos;email marketing, in modo che ogni persona che entra nel tuo ecosistema trovi naturalmente il passaggio successivo, senza che tu debba spingere ogni volta da zero.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border-2 border-[#156686] p-8">
            <p className="font-bold text-lg mb-3">Il regalo della masterclass - Il workbook</p>
            <p className="text-foreground/75 leading-relaxed text-sm">
              Iscrivendoti alla masterclass gratuita scarichi subito il workbook. Lo compili in diretta con noi, sezione per sezione, mentre lavoriamo sul tuo business specifico. Alla fine hai uno schema già fatto e adattato a quello che fai tu, pronto da usare.
            </p>
          </div>
        </div>
      </section>

      {/* COSA TI PORTI A CASA */}
      <section style={{ backgroundColor: "#EEF3F5" }} className="py-16 md:py-20">
        <div className="container-narrow max-w-5xl mx-auto px-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-3">Il risultato</p>
          <h2 className="h-display text-3xl md:text-4xl lg:text-5xl mb-8">Cosa ti porti a casa, alla fine di questa masterclass?</h2>
          <ul className="space-y-3 max-w-2xl">
            {[
              "Il target definito per ogni tua offerta",
              "La mappa delle offerte con l'ordine in cui lanciarle",
              "Il piano dell'anno: grandi lanci, micro lanci e funnel evergreen distribuiti nei mesi",
              "Il piano dei contenuti per ogni fase di lancio",
              "La logica per portare i clienti da un'offerta all'altra attraverso l'email",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-foreground/80">
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PER CHI È / NON È */}
      <section style={{ backgroundColor: "#156686" }} className="py-16 md:py-20">
        <div className="container-narrow max-w-5xl mx-auto px-5 text-white">
          <h2 className="h-display text-3xl md:text-4xl lg:text-5xl mb-10 text-white">Per chi è / per chi non è</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="font-bold text-white mb-4 text-base">È per te se:</p>
              <ul className="space-y-3">
                {[
                  "Vendi servizi (coaching, consulenza, mentoring, formazione) o infoprodotti (percorsi high ticket, singoli o di gruppo, videocorsi, membership, masterclass a pagamento o gratuite)",
                  "Hai una o più offerte ma non sai in che ordine o quando lanciarle",
                  "Ragioni ogni lancio sempre all'ultimo e finisci in burnout perché non sai come gestirli",
                  "Nei mesi in cui non stai lanciando attivamente, le vendite rallentano o si fermano",
                  "Non sai come pianificare i lanci grandi, piccoli e i funnel che stanno nel mezzo",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-white/85 text-sm">
                    <CheckIcon white />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-white mb-4 text-base">Non è per te se:</p>
              <ul className="space-y-3">
                {[
                  "Hai già un calendario lanci strutturato e funzionante",
                  "Stai cercando tattiche tecniche come ads, copywriting avanzato o automazioni",
                  "Non hai ancora un'offerta chiara da lanciare",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-white/85 text-sm">
                    <XIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIANZE */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-narrow max-w-5xl mx-auto px-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-3 text-center">Le parole dei partecipanti</p>
          <h2 className="h-display text-3xl md:text-4xl lg:text-5xl mb-10 text-center">Un po&apos; di testimonianze che non fa mai male</h2>
          <div style={{ backgroundColor: "#EEF3F5" }} className="rounded-2xl p-8 text-center text-foreground/50 text-sm italic">
            [DA AGGIUNGERE: inserire 3-5 risultati reali di clienti di Andrea o Dave]
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-narrow max-w-5xl mx-auto px-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-3 text-center">Hai dubbi?</p>
          <h2 className="h-display text-3xl md:text-4xl lg:text-5xl mb-10 text-center">Domande frequenti</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <FaqItem
                key={faq.q}
                q={faq.q}
                a={faq.a}
                open={activeIndex === i}
                onToggle={() => setActiveIndex(activeIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* NOTA SCARSITA */}
      <section className="py-8 bg-background">
        <div className="container-narrow max-w-5xl mx-auto px-5">
          <div className="rounded-2xl border border-foreground/15 p-6 max-w-2xl mx-auto text-sm text-foreground/75 leading-relaxed">
            I posti sono limitati a 100 partecipanti perché è il limite della stanza di Zoom, quindi meglio se prenoti il prima possibile. Alla fine della masterclass presentiamo Business Blueprint, il nostro percorso annuale: i posti disponibili sono massimo 4 (ma non c&apos;è alcun obbligo di iscrizione ovviamente, ti mostreremo solo il percorso).
          </div>
        </div>
      </section>

      {/* CHIUSURA + FORM */}
      <section className="py-16 md:py-20 bg-foreground">
        <div className="container-narrow max-w-5xl mx-auto px-5 text-center">
          <p className="text-white text-lg md:text-xl font-semibold mb-8 max-w-xl mx-auto leading-snug">
            La prossima volta che hai qualcosa da lanciare, non devi ricominciare tutto da capo.
          </p>
          <div id="form-bottom" className="bg-[#EEF3F5] border-2 border-dashed border-[#156686]/30 rounded-2xl p-8 text-center text-foreground/50 text-sm mb-4 max-w-xl mx-auto">
            Form di iscrizione - da integrare
          </div>
          <a href="#form" className="pill bg-white text-[#156686] hover:bg-white/90 hover:-translate-y-0.5 inline-flex mb-3">
            Voglio il mio posto
          </a>
          <p className="text-xs text-white/50">Gratuito. Niente spam. Ricevi solo l&apos;email con il link Zoom.</p>
        </div>
      </section>

      {/* GARANZIA */}
      <section className="py-10 bg-background">
        <div className="container-narrow max-w-5xl mx-auto px-5">
          <div style={{ backgroundColor: "#EEF3F5" }} className="rounded-2xl border border-foreground/10 p-8 max-w-2xl mx-auto text-sm text-foreground/75 leading-relaxed">
            La masterclass è completamente gratuita. Non ti chiediamo nessuna carta di credito, nessun pagamento, nessun impegno (a parte l&apos;impegno di prenderti 2 ore per lavorare alle tue offerte e ai tuoi lanci/funnel). Ti iscrivi, partecipi e porti a casa il tuo piano. Se alla fine ti presentiamo Business Blueprint e non fa per te, non cambia niente: hai comunque un piano lanci completo fatto durante la masterclass.
          </div>
        </div>
      </section>

      {/* P.S. */}
      <section className="py-10 bg-background">
        <div className="container-narrow max-w-5xl mx-auto px-5">
          <div style={{ backgroundColor: "#EEF3F5" }} className="rounded-2xl p-8 max-w-2xl mx-auto text-sm text-foreground/75 leading-relaxed italic">
            Se stai pensando &quot;ho già provato a fare dei piani ma poi non li ho mai seguiti&quot;, non è una scusa per non venire anzi: è esattamente il motivo per cui questa masterclass esiste :) Un piano fatto da solo su un foglio non lo segui. Uno costruito in diretta, con qualcuno che ti fa le domande giuste mentre lavori sul tuo business specifico, è un&apos;altra cosa. Iscriviti, ne vale la pena.
          </div>
        </div>
      </section>

      {/* CHI SONO */}
      <ChiSono ctaText="Voglio il mio posto →" ctaHref="#form" />

      <Footer />
    </div>
  );
}
