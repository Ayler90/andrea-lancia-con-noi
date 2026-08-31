import { createFileRoute } from "@tanstack/react-router";
import React, { useState, useEffect } from "react";
import recBB1 from "@/assets/Recensioni Business Blueprint 1.jpg";
import recBB2 from "@/assets/Recensioni Business Blueprint 2.png";
import recBB3 from "@/assets/Recensioni Business Blueprint3.png";
import recBB4 from "@/assets/Recensioni Business Blueprint4.png";
import recBB5 from "@/assets/Recensioni Business Blueprint5.png";
import recBB6 from "@/assets/Recensioni Business Blueprint6.jpg";
import recBB7 from "@/assets/Recensioni Business Blueprint7.png";
import recBB8 from "@/assets/Recensioni Business Blueprint8.jpg";
import recBB9 from "@/assets/Recensioni Business Blueprint9.jpg";
import recG1  from "@/assets/Recensioni Google 1.png";
import recG2  from "@/assets/Recensioni Google 2.png";
import recG3  from "@/assets/Recensioni Google 3.png";
import recG4  from "@/assets/Recensioni Google 4.png";
import recG5  from "@/assets/Recensioni Google 5.png";
import recG6  from "@/assets/Recensioni Google 6.png";
import recG7  from "@/assets/Recensioni Google 7.png";
import recG8  from "@/assets/Recensioni Google 8.png";
import recG9  from "@/assets/Recensioni Google 9.png";
import recG10 from "@/assets/Recensioni Google 10.png";
import recG11 from "@/assets/Recensioni Google 11.png";
import recG12 from "@/assets/Recensioni Google 12.png";
import recG13 from "@/assets/Recensioni Google 13.png";
import recF1  from "@/assets/Feedback di vendita.jpg";
import recF2  from "@/assets/Feedback di vendita 2.jpg";
import recF3  from "@/assets/Feedback di vendita 3.jpg";
import recF4  from "@/assets/Feedback di vendita 4.jpg";
import recF5  from "@/assets/Feedback di vendita 5.jpg";
import recF6  from "@/assets/Feedback di vendita 6.jpg";
import recF7  from "@/assets/Feedback di vendita 7.jpg";
import recF8  from "@/assets/Feedback di vendita 8.jpg";
import recF9  from "@/assets/Feedback di vendita 9.jpg";
import recF10 from "@/assets/Feedback di vendita 10.png";
import recF11 from "@/assets/Feedback di vendita 11.png";
import recF12 from "@/assets/Feedback di vendita 12.png";
import recExtra1 from "@/assets/Screenshot 2026-08-05 170115.png";
import recExtra2 from "@/assets/Screenshot 2026-08-05 170041.png";

export const Route = createFileRoute("/registrazione-da-caos-a-sistema")({
  component: RegistrazioneDaCaosASistema,
  head: () => ({
    title: "Registrazione - Da Caos A Sistema - Andrea Bonomo - Funnel e Launch Strategist",
    meta: [
      { name: "robots", content: "noindex, nofollow" },
      { name: "description", content: "Rivedi la registrazione completa della masterclass Da Caos a Sistema con Andrea Bonomo e Davide Angiolillo. Disponibile fino a domenica 6 settembre." },
    ],
  }),
});

function CheckIconWhite() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="rgba(196,217,220,0.2)" />
      <path d="M7 12.5l3.5 3.5 6.5-7" stroke="#C4D9DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIconBlue() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#4B6380" fillOpacity="0.12" />
      <path d="M7 12.5l3.5 3.5 6.5-7" stroke="#4B6380" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="rgba(239,68,68,0.08)" />
      <path d="M8 8l8 8M16 8l-8 8" stroke="rgba(239,68,68,0.5)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const CANDIDATURA_LINK = "https://forms.gle/XkYLh6Znr36mN7KJ8";

const ALL_RECENSIONI = [recBB1, recBB2, recBB3, recBB4, recBB5, recBB6, recBB7, recBB8, recBB9, recG1, recG2, recG3, recG4, recG5, recG6, recG7, recG8, recG9, recG10, recG11, recG12, recG13, recF1, recF2, recF3, recF4, recF5, recF6, recF7, recF8, recF9, recF10, recF11, recF12, recExtra1, recExtra2];

function RecensioniGallery() {
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    if (!selected) return;
    const close = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null); };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [selected]);

  return (
    <>
      <div className="columns-2 md:columns-3 gap-4 max-w-5xl mx-auto">
        {ALL_RECENSIONI.map((src, i) => (
          <div key={i} className="break-inside-avoid mb-4">
            <img
              src={src}
              alt={`Recensione ${i + 1}`}
              className="w-full rounded-2xl cursor-pointer transition-transform hover:scale-[1.02]"
              style={{ boxShadow: "0 2px 16px rgba(21,102,134,0.1)" }}
              onClick={() => setSelected(src)}
            />
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full text-white font-bold text-xl"
            style={{ backgroundColor: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
            aria-label="Chiudi"
          >
            x
          </button>
          <img
            src={selected}
            alt="Recensione"
            className="max-w-full max-h-[90vh] rounded-2xl"
            style={{ boxShadow: "0 8px 60px rgba(0,0,0,0.5)" }}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

function RegistrazioneDaCaosASistema() {
  return (
    <div className="min-h-screen bg-background flex flex-col">

      {/* HERO */}
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
              Qui sotto trovi la registrazione completa di <strong className="text-white">Da Caos a Sistema</strong>. Prenditi il tempo che ti serve, fermati dove hai bisogno, e compila il workbook mentre guardi.
            </p>
          </div>

          {/* VIDEO */}
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden" style={{ boxShadow: "0 16px 80px rgba(0,0,0,0.45)" }}>
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
              <iframe
                src="https://www.youtube.com/embed/wMJ5gpcaH1c"
                title="Da Caos a Sistema - Registrazione Masterclass"
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
              Scarica il workbook e compilalo mentre guardi
            </a>
            <p className="text-white/50 text-xs">Clicca su File, poi "Crea una copia" per salvarlo sul tuo Drive</p>
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
            Durante la masterclass hai costruito la struttura. Con <strong>Business Blueprint</strong> la costruiamo insieme, nel dettaglio, adattata al tuo business, con noi due al tuo fianco per tutto l'anno.
          </p>

          {/* Card principale */}
          <div className="rounded-3xl overflow-hidden mb-6" style={{ background: "linear-gradient(140deg, #1B2F52 0%, #2d4a6e 50%, #4B6380 100%)", boxShadow: "0 8px 60px rgba(27,47,82,0.35)" }}>
            <div className="p-8 md:p-12 lg:p-14">

              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
                <div>
                  <div className="inline-flex items-center gap-2 border border-amber-400/40 bg-amber-400/10 text-amber-300 text-[11px] font-semibold uppercase tracking-[0.12em] px-4 py-2 rounded-full mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" style={{ boxShadow: "0 0 6px rgba(251,191,36,0.9)" }} />
                    Percorso esclusivo - solo 5 posti disponibili
                  </div>
                  <h3 className="h-display font-bold text-white" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                    Business Blueprint
                  </h3>
                  <p className="text-white/60 text-sm mt-1">Mentoring 2:1 con Andrea Bonomo e Davide Angiolillo · 12 mesi · 650€/mese</p>
                </div>
                <a
                  href={CANDIDATURA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="pill font-semibold text-[#1B2F52] hover:-translate-y-0.5 whitespace-nowrap flex-shrink-0"
                  style={{ backgroundColor: "#C4D9DC", boxShadow: "0 4px 24px rgba(196,217,220,0.3)" }}
                >
                  Candidati al percorso
                </a>
              </div>

              {/* Promessa */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-10">
                <p className="text-white/90 text-base md:text-lg leading-relaxed">
                  Business Blueprint è il primo percorso in Italia 2:1, di 12 mesi, in cui costruiamo insieme il tuo sistema imprenditoriale. Non è un corso, una community o un gruppo da 200 persone. Siamo noi due e te, e lavoriamo fianco a fianco per strutturare il tuo business e creare un sistema che lavora per te, anche quando non sei presente.
                </p>
              </div>

              {/* Come funzionano i 12 mesi */}
              <div className="mb-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#C4D9DC] mb-6">Come funzionano i 12 mesi</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      n: "24",
                      label: "call individuali da 90 minuti",
                      desc: "1 con Andrea e 1 con Davide ogni mese, distribuite in base alle tue priorità. Puoi portare anche i tuoi collaboratori.",
                    },
                    {
                      n: "2",
                      label: "check strategici mensili da 30 minuti",
                      desc: "Puoi prenotare una call rapida con uno di noi quando hai un dubbio urgente o vuoi una conferma prima di procedere. Prenotabile fino a 18 ore prima.",
                    },
                    {
                      n: "1",
                      label: "chat dedicata 2:1",
                      desc: "WhatsApp o Telegram, rispondiamo entro poche ore. Per i dubbi tra una call e l'altra, non per sostituire le call.",
                    },
                    {
                      n: "Q&A",
                      label: "live ogni due mesi",
                      desc: "Sessioni in cui lavoriamo su domande e situazioni reali insieme a tutto il gruppo.",
                    },
                    {
                      n: "",
                      label: "Masterclass tematiche",
                      desc: "Su argomenti scelti insieme ai partecipanti, in base a quello che serve in quel momento.",
                    },
                    {
                      n: "",
                      label: "Spazio di lavoro su Notion",
                      desc: "Roadmap, materiali, template e note di ogni call, sempre accessibili. Sai sempre dove siamo e cosa c'è da fare.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex gap-4 items-start">
                      {item.n && (
                        <span className="text-white font-bold text-2xl leading-none flex-shrink-0 w-10 text-right">{item.n}</span>
                      )}
                      <div className={item.n ? "" : ""}>
                        <p className="text-white font-semibold text-sm">{item.label}</p>
                        <p className="text-white/55 text-sm leading-relaxed mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Su cosa lavoriamo */}
              <div className="mb-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#C4D9DC] mb-6">Su cosa lavoriamo</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { titolo: "Un business che funziona senza che tu ci sia sempre", desc: "Costruiamo funnel di acquisizione, sequenze email e processi automatizzati che continuano a lavorare anche quando sei offline o in vacanza." },
                    { titolo: "Un posizionamento chiaro e riconoscibile", desc: "Chi sei, cosa fai, per chi lo fai, perché lo fai: lavoriamo sulla base solida da cui partire perché ogni contenuto abbia una direzione precisa." },
                    { titolo: "Clienti migliori, non solo di più", desc: "Struttura di offerta e prezzi che ti permetta di guadagnare di più lavorando con meno persone, quelle giuste." },
                    { titolo: "Un sistema di lancio che sai replicare", desc: "Dalla newsletter alle email di vendita, dalla comunicazione alla chiusura. Una volta costruito, sai esattamente cosa fare e quando." },
                    { titolo: "Una newsletter che lavora per te", desc: "Struttura, piano editoriale e sequenze automatiche. Il canale più diretto che hai per parlare al tuo pubblico senza algoritmi di mezzo." },
                    { titolo: "Una strategia di contenuti con una direzione", desc: "Cosa comunicare, quando e perché, online e offline. Ogni contenuto che produci ha uno scopo preciso." },
                    { titolo: "Un sistema di acquisizione che non dipende dal passaparola", desc: "Funnel, lead magnet, automazioni che portano persone nuove nel tuo ecosistema ogni mese, senza farlo tutto a mano." },
                    { titolo: "Chiarezza sui tuoi numeri", desc: "KPI giusti per il tuo business: sai quanto stai guadagnando, quanto ti costa acquisire un cliente e qual è il margine reale su ogni offerta." },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 bg-white/4 border border-white/8 rounded-xl p-4 list-none">
                      <CheckIconWhite />
                      <div>
                        <p className="text-white font-semibold text-sm">{item.titolo}</p>
                        <p className="text-white/50 text-sm leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </div>
              </div>

              {/* Come lavoriamo - le due specializzazioni */}
              <div className="grid md:grid-cols-2 gap-4 mb-10">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <p className="text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">Con Andrea</p>
                  <p className="text-white font-semibold mb-2">Email marketing, newsletter e lanci</p>
                  <p className="text-white/55 text-sm leading-relaxed">Sequenze email, funnel di acquisizione e vendita, newsletter, analisi dati, automazioni e organizzazione dei lanci. Lavoriamo in consulenza, nei check, e con template, script e correzioni via Loom.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <p className="text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">Con Davide</p>
                  <p className="text-white font-semibold mb-2">Personal branding e strategia di business</p>
                  <p className="text-white/55 text-sm leading-relaxed">Identità e strategia di business, comunicazione online e offline, struttura dei servizi e dei prezzi, fidelizzazione. Le fondamenta su cui tutto il resto regge.</p>
                </div>
              </div>

              {/* CTA candidatura */}
              <div className="bg-white/8 border border-white/15 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-white font-bold text-lg mb-1">Pronta a candidarti?</p>
                  <p className="text-white/55 text-sm leading-relaxed max-w-md">
                    Valutiamo le candidature entro 3-4 giorni e ti scriviamo noi. Dopo c'è una call conoscitiva gratuita in cui capiamo insieme se c'è un fit reale. Nessun impegno da parte tua finche non decidi.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <a
                    href={CANDIDATURA_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="pill font-semibold text-[#1B2F52] hover:-translate-y-0.5 whitespace-nowrap"
                    style={{ backgroundColor: "#C4D9DC", boxShadow: "0 4px 24px rgba(196,217,220,0.3)" }}
                  >
                    Candidati al percorso
                  </a>
                  <p className="text-white/30 text-xs">650€/mese · 12 mesi · 5 posti</p>
                </div>
              </div>

            </div>
          </div>

          {/* Per chi è / non è - fuori dalla card */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-2xl border border-[#4B6380]/10 p-6 md:p-8" style={{ boxShadow: "0 2px 16px rgba(21,102,134,0.06)" }}>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#4B6380] mb-5">Fa per te se</p>
              <ul className="space-y-3">
                {[
                  "Sei freelance o solopreneur con almeno 2.000 o 3.000 euro al mese",
                  "Hai l'agenda piena ma vuoi clienti migliori, non di più",
                  "Vuoi smettere di improvvisare nella comunicazione e nelle vendite",
                  "Vuoi costruire entrate stabili senza dipendere dai social ogni giorno",
                  "Senti che le tue offerte sono il tuo tallone d'Achille",
                  "Sei disponibile a lavorarci davvero per 12 mesi",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-foreground/70 text-sm">
                    <CheckIconBlue />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-[#4B6380]/10 p-6 md:p-8" style={{ boxShadow: "0 2px 16px rgba(21,102,134,0.06)" }}>
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground/40 mb-5">Non fa per te se</p>
              <ul className="space-y-3">
                {[
                  "Non vendi un prodotto o servizio",
                  "Stai cercando qualcuno che faccia tutto al posto tuo",
                  "Vuoi risultati immediati senza costruire nulla di solido",
                  "Non hai tempo da dedicare al percorso ogni settimana",
                  "Sei agli inizi assoluti: questo è un percorso per chi ha già un business avviato",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-foreground/45 text-sm">
                    <CrossIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Note finali - 2 card (rimossa "Inizio") */}
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { emoji: "👥", titolo: "Solo 5 posti", testo: "Non è una trovata di marketing. Con più persone non riusciremmo a dare il livello di attenzione che questo percorso richiede." },
              { emoji: "💬", titolo: "Candidatura, non acquisto diretto", testo: "Ti scriviamo entro 3-4 giorni, poi c'è una call conoscitiva gratuita. Nessun impegno finche non sei pronta." },
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

      {/* RECENSIONI */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-narrow">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4B6380] mb-4 text-center">Cosa dicono di noi</p>
          <h2 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-4">
            Chi ha già lavorato{" "}
            <em className="text-[#4B6380]">con noi</em>
          </h2>
          <p className="text-center text-foreground/55 text-base leading-relaxed max-w-xl mx-auto mb-14">
            Clicca su una recensione per ingrandirla.
          </p>
          <RecensioniGallery />
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
