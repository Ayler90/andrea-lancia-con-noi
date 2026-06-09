import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/grazie-consulenza-strategica")({
  component: GrazieConsulenzaStrategica,
  head: () => ({
    meta: [
      { title: "Prenotazione confermata – Consulenza Strategica | Andrea Bonomo" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

function TallyForm() {
  useEffect(() => {
    const w = "https://tally.so/widgets/embed.js";
    if (document.querySelector(`script[src="${w}"]`)) {
      (window as any).Tally?.loadEmbeds();
      return;
    }
    const s = document.createElement("script");
    s.src = w;
    const load = () => (window as any).Tally?.loadEmbeds();
    s.onload = load;
    s.onerror = load;
    document.body.appendChild(s);
  }, []);

  return (
    <iframe
      data-tally-src="https://tally.so/embed/nPAvVd?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1"
      loading="lazy"
      width="100%"
      height="437"
      frameBorder={0}
      marginHeight={0}
      marginWidth={0}
      title="Questionario per Consulenza Strategica"
    />
  );
}

const STEPS = [
  {
    n: "1",
    emoji: "📧",
    title: "Ti ho appena inviato l'email di conferma prenotazione",
    body: (
      <>
        <p>
          Dovresti aver ricevuto un'email da parte mia con l'invito alla nostra Consulenza
          Strategica e il link di Google Meet per partecipare.
        </p>
        <p className="mt-3">
          L'oggetto è <strong>"Invitation: Consulenza Strategica: tuo nome"</strong>.
        </p>
        <p className="mt-3">
          Se non dovessi averlo ricevuto, scrivimi a{" "}
          <a href="mailto:ciao@andreabonomo.it" className="text-[#156686] underline underline-offset-2">
            ciao@andreabonomo.it
          </a>{" "}
          per avvisarmi (ti rimanderò l'invito in calendario).
        </p>
      </>
    ),
  },
  {
    n: "2",
    emoji: "📋",
    title: "Compila il questionario qui sotto",
    body: (
      <>
        <p>
          Il questionario contiene domande specifiche che mi aiuteranno a prepararmi alla
          nostra Consulenza Strategica.
        </p>
        <p className="mt-3">
          All'interno troverai uno spazio per inserire i dati di fatturazione ed emettere
          fattura: compila anche quelli.
        </p>
        <p className="mt-3">
          Una volta compilato, invialo. Ricevero una notifica e analizzerò le tue risposte
          in vista della consulenza.
        </p>
      </>
    ),
    hasForm: true,
  },
  {
    n: "3",
    emoji: "💬",
    title: "Se hai qualsiasi dubbio o domanda, contattami",
    body: (
      <>
        <p>
          Puoi farlo scrivendomi a{" "}
          <a href="mailto:ciao@andreabonomo.it" className="text-[#156686] underline underline-offset-2">
            ciao@andreabonomo.it
          </a>{" "}
          oppure in Direct su{" "}
          <a
            href="https://www.instagram.com/andreabonomo_mktg/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#156686] underline underline-offset-2"
          >
            Instagram
          </a>
          .
        </p>
      </>
    ),
  },
];

function GrazieConsulenzaStrategica() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />

      {/* ── HERO ── */}
      <section className="pt-10 pb-16 md:pt-14 md:pb-20 relative overflow-hidden">
        <div className="container-narrow max-w-3xl mx-auto text-center">
          <p className="text-3xl mb-4">🎉</p>
          <p className="eyebrow text-[#156686]/70 mb-4">Prenotazione confermata</p>
          <h1 className="h-display text-3xl md:text-4xl lg:text-5xl mb-6">
            Non chiudere subito la pagina e{" "}
            <em className="text-[#156686]">leggi qui sotto</em> 👇
          </h1>
          <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
            Se stai leggendo queste parole, ti confermo che hai prenotato correttamente la{" "}
            <strong>Consulenza Strategica</strong>.
          </p>
          <p className="mt-4 text-sm md:text-base text-foreground/70 leading-relaxed">
            Intanto, sii orgoglioso di quello che hai fatto: anche se è una Consulenza
            Strategica, è una decisione importante per il tuo business online.
          </p>
          <p className="mt-4 text-sm md:text-base text-foreground/70 leading-relaxed">
            Detto questo, ti spiego subito quali sono i prossimi step per confermare la
            Consulenza Strategica e arrivare pronti al nostro incontro.
          </p>
        </div>
      </section>

      {/* ── STEPS ── */}
      <section className="pb-24 bg-white">
        <div className="container-narrow max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-10 text-center">
            Segui questi step per confermare la Consulenza Strategica
          </p>

          <div className="flex flex-col gap-10">
            {STEPS.map((step, i) => (
              <div key={step.n}>
                <div
                  className="rounded-2xl bg-[#156686]/5 border border-[#156686]/15 px-6 py-7"
                  style={{ boxShadow: "inset 0 0 40px -10px rgba(21,102,134,0.08)" }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-lg font-bold text-white"
                      style={{ backgroundColor: "#156686" }}
                    >
                      {step.n}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="font-semibold text-base md:text-lg text-foreground leading-snug mb-3">
                        {step.emoji} {step.title}
                      </h2>
                      <div className="text-sm md:text-base text-foreground/70 leading-relaxed">
                        {step.body}
                      </div>
                    </div>
                  </div>
                </div>

                {step.hasForm && (
                  <div className="mt-6 rounded-2xl border border-[#156686]/15 overflow-hidden px-2 py-4 md:px-6">
                    <TallyForm />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
