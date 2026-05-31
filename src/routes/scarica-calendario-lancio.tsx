import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import React, { useState } from "react";
import coverImg from "@/assets/Immagine-Calendario-di-Lancio (2) - copertina.png";
import imgCalendario from "@/assets/calendario-di-lancio-img1.png";
import imgPianoEditoriale from "@/assets/piano-editoriale.png";

export const Route = createFileRoute("/scarica-calendario-lancio")({
  component: ScaricaCalendarioLancio,
  head: () => ({
    meta: [
      { title: "Calendario di Lancio – Template Notion | Andrea Bonomo" },
      {
        name: "description",
        content:
          "Il template Notion che ti dà un calendario visivo del lancio e un piano editoriale completo per ogni fase. Solo 2,99€.",
      },
      { property: "og:title", content: "Calendario di Lancio – Template Notion | Andrea Bonomo" },
      {
        property: "og:description",
        content:
          "Il template Notion che ti dà un calendario visivo del lancio e un piano editoriale completo per ogni fase. Solo 2,99€.",
      },
    ],
  }),
});

const IMG_BASE = "https://academy.andreabonomo.it/wp-content/uploads/2025/03/";
const PURCHASE_URL = "https://andreabonomo.systeme.io/completa-acquisto-calendario-lancio";

const carouselImages = [
  { src: IMG_BASE + "calendario-di-lancio-1.png", alt: "Calendario di lancio – schermata 1" },
  { src: IMG_BASE + "calendario-di-lancio-2.png", alt: "Calendario di lancio – schermata 2" },
  { src: IMG_BASE + "calendario-di-lancio-3.png", alt: "Calendario di lancio – schermata 3" },
  { src: IMG_BASE + "calendario-di-lancio-4.png", alt: "Calendario di lancio – schermata 4" },
  { src: IMG_BASE + "calendario-di-lancio-5.png", alt: "Calendario di lancio – schermata 5" },
];

const reviewImages = [
  { src: IMG_BASE + "IMG_4196-scaled.jpg", alt: "Recensione 1" },
  { src: IMG_BASE + "IMG_4197-scaled.jpg", alt: "Recensione 2" },
  { src: IMG_BASE + "IMG_4198-scaled.jpg", alt: "Recensione 3" },
  { src: IMG_BASE + "IMG_4199-scaled.jpg", alt: "Recensione 4" },
  { src: IMG_BASE + "IMG_4200-scaled.jpg", alt: "Recensione 5" },
];

const faqs = [
  {
    q: "Ho bisogno di Notion a pagamento?",
    a: "No. Il template funziona con l'account gratuito di Notion. Ti basterà creare un account (se non ne hai già uno) e duplicare il template nel tuo workspace.",
  },
  {
    q: "Non ho mai usato Notion. Riuscirò ad usarlo?",
    a: "Assolutamente sì. Notion è molto intuitivo e il template è già tutto configurato. Dovrai solo inserire le date del tuo lancio e personalizzare i contenuti suggeriti.",
  },
];

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#156686" fillOpacity="0.12" />
      <path d="M7 12.5l3.5 3.5 6.5-7" stroke="#156686" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Carousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + carouselImages.length) % carouselImages.length);
  const next = () => setCurrent((c) => (c + 1) % carouselImages.length);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-2xl shadow-xl">
        <img
          src={carouselImages[current].src}
          alt={carouselImages[current].alt}
          className="w-full object-cover"
          style={{ maxHeight: 520 }}
        />
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        aria-label="Immagine precedente"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow flex items-center justify-center transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Immagine successiva"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow flex items-center justify-center transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {carouselImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Vai all'immagine ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-[#156686]" : "bg-foreground/20"}`}
          />
        ))}
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-foreground/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-base hover:bg-foreground/[0.03] transition-colors"
      >
        {q}
        <svg
          width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s", flexShrink: 0, marginLeft: 16 }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-5 text-sm text-foreground/65 leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

function ScaricaCalendarioLancio() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />

      {/* ── HERO ── */}
      <section className="pt-16 pb-16 md:pt-24 md:pb-20 px-4 relative overflow-hidden">
        {/* Glow orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[#156686]/25 blur-3xl"
            style={{ top: "0%", left: "-5%", animation: "orb-drift-1 22s ease-in-out infinite" }} />
          <div className="absolute w-[450px] h-[450px] rounded-full bg-[#A1C2CF]/30 blur-3xl"
            style={{ bottom: "0%", right: "-5%", animation: "orb-drift-2 26s ease-in-out infinite", animationDelay: "5s" }} />
        </div>

        <div className="mx-auto w-full max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Left: copy */}
            <div className="flex-1 min-w-0">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 border border-[#156686]/25 bg-[#156686]/6 text-[#156686] text-[11px] font-semibold uppercase tracking-[0.12em] px-3 py-1 rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" style={{ boxShadow: "0 0 5px rgba(52,211,153,0.8)" }} />
                Template Notion · Accesso Immediato
              </div>

              <h1 className="h-display font-bold leading-[1.1] mb-6 text-[clamp(2rem,4.5vw,3.25rem)]">
                Acquista il{" "}
                <span style={{ color: "#156686" }}>Calendario di <em>Lancio</em></span>{" "}🚀
              </h1>

              <p className="text-sm md:text-base text-foreground/85 leading-relaxed mb-8 max-w-lg">
                Il template Notion che ti dà un <strong>calendario visivo del lancio</strong> e un <strong>piano editoriale completo</strong> per ogni fase. Smetti di lanciare a caso, inizia a lanciare con strategia.
              </p>

              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                {[
                  "Calendario visivo con tutte le fasi del lancio",
                  "Piano editoriale per email, social e contenuti",
                  "Pronto all'uso, duplica e compila",
                  "Funziona con Notion gratuito",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/85">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#form"
                className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 text-sm px-6 py-3 inline-flex"
              >
                Acquista ora a 2,99€ →
              </a>
            </div>

            {/* Right: floating hero image */}
            <div className="flex-1 min-w-0 w-full flex items-center justify-center">
              <img
                src={coverImg}
                alt="Anteprima del template Calendario di Lancio"
                className="w-full"
                style={{ animation: "img-float 5s ease-in-out infinite", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES BAND ── */}
      <section className="py-16 md:py-20 px-4 bg-[#f0f7f9]">
        <div className="container-narrow max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Un Template Notion. Due Calendari. Zero Stress di Lancio.
          </h2>
          <p className="text-sm md:text-base text-foreground/85 leading-relaxed max-w-2xl mx-auto mb-14">
            Tutto quello che ti serve per pianificare il tuo lancio, in un unico posto.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            {/* Card 1 + line + image */}
            <div className="flex flex-col items-center">
              <div className="w-full rounded-2xl py-8 px-6 bg-[#156686]/8 border border-[#156686]/15">
                <h3 className="font-bold text-lg mb-2 text-foreground">📅 Calendario Visivo del Lancio</h3>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  Visualizza l'intero lancio in un colpo d'occhio. Ogni fase, ogni giorno, ogni azione — tutto organizzato in una vista calendario chiara e intuitiva.
                </p>
              </div>
              {/* Connector */}
              <div className="w-px h-10 bg-[#156686]/30" />
              {/* Image + glow */}
              <div className="relative w-full">
                <img
                  src={imgCalendario}
                  alt="Vista calendario del lancio"
                  className="w-full rounded-xl relative z-10"
                  style={{ animation: "img-float 5s ease-in-out infinite" }}
                />
                <div style={{
                  position: "absolute", bottom: -16, left: "50%", transform: "translateX(-50%)",
                  width: "70%", height: 40,
                  background: "radial-gradient(ellipse, rgba(255,255,255,0.9) 0%, transparent 70%)",
                  filter: "blur(10px)", zIndex: 0,
                }} />
              </div>
            </div>

            {/* Card 2 + line + image */}
            <div className="flex flex-col items-center">
              <div className="w-full rounded-2xl py-8 px-6 bg-[#156686]/8 border border-[#156686]/15">
                <h3 className="font-bold text-lg mb-2 text-foreground">📝 Piano Editoriale Completo</h3>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  Email, post social, reel, storie — per ogni pezzo di contenuto hai già suggeriti il formato, l'obiettivo e il testo di partenza.
                </p>
              </div>
              {/* Connector */}
              <div className="w-px h-10 bg-[#156686]/30" />
              {/* Image + glow, tilted right */}
              <div className="relative w-full" style={{ transform: "rotate(3deg) translateY(12px)" }}>
                <img
                  src={imgPianoEditoriale}
                  alt="Piano editoriale del lancio"
                  className="w-full rounded-xl relative z-10"
                  style={{ animation: "img-float 5s ease-in-out infinite", animationDelay: "0.8s" }}
                />
                <div style={{
                  position: "absolute", bottom: -16, left: "50%", transform: "translateX(-50%)",
                  width: "70%", height: 40,
                  background: "radial-gradient(ellipse, rgba(255,255,255,0.9) 0%, transparent 70%)",
                  filter: "blur(10px)", zIndex: 0,
                }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAROUSEL ── */}
      <section className="py-16 md:py-20 px-4">
        <div className="container-narrow max-w-5xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-3">Dentro al template</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-12">Guarda come è fatto</h2>
          <Carousel />
        </div>
      </section>

      {/* ── PURCHASE ── */}
      <section id="form" className="py-16 md:py-20 px-4 bg-[#f0f7f9]">
        <div className="container-narrow max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="px-8 pt-10 pb-8 border-b border-foreground/8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-3">Disponibile subito</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Calendario di Lancio</h2>
              <p className="text-foreground/60 text-sm">Template Notion — accesso immediato dopo l'acquisto</p>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-[#156686]">2,99€</span>
                <span className="text-foreground/40 text-sm">una tantum</span>
              </div>
            </div>

            {/* What you get */}
            <div className="px-8 py-8">
              <p className="text-sm font-semibold text-foreground/50 uppercase tracking-[0.15em] mb-5">Cosa ricevi</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Template Notion duplicabile",
                  "Calendario visivo del lancio (Board + Timeline)",
                  "Piano editoriale per email, social e contenuti",
                  "Istruzioni per personalizzarlo in 10 minuti",
                  "Aggiornamenti futuri inclusi",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={PURCHASE_URL}
                target="_blank"
                rel="noreferrer"
                className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 text-base px-8 py-3.5 w-full text-center block"
              >
                Acquista ora a 2,99€ →
              </a>
              <p className="text-xs text-foreground/40 text-center mt-3">Pagamento sicuro. Accesso immediato.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-16 md:py-20 px-4">
        <div className="container-narrow max-w-5xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-3">Cosa dicono</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-12">Chi l'ha già usato</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviewImages.map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className="w-full rounded-2xl shadow-md object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ANDREA ── */}
      <section className="py-16 md:py-20 px-4 bg-[#f0f7f9]">
        <div className="container-narrow max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="flex-shrink-0">
              <img
                src="https://academy.andreabonomo.it/wp-content/uploads/2025/02/Andrea-Bonomo-Foto.jpg"
                alt="Andrea Bonomo"
                className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-lg"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-3">Chi sono</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ciao, sono Andrea 👋</h2>
              <p className="text-foreground/65 text-base leading-relaxed mb-4">
                Sono un <strong>Funnel e Launch Strategist</strong>. Aiuto freelance e solopreneur a lanciare video corsi, percorsi e servizi online con strategia, email marketing e contenuti che funzionano.
              </p>
              <p className="text-foreground/65 text-base leading-relaxed">
                Ho creato questo template per risolvere il problema che vedevo in tutti i miei clienti: sapevano <em>cosa</em> fare, ma non <em>quando</em> farlo. Il Calendario di Lancio risolve esattamente questo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20 px-4">
        <div className="container-narrow max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-3 text-center">Hai dubbi?</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Domande frequenti</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href={PURCHASE_URL}
              target="_blank"
              rel="noreferrer"
              className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 text-sm px-8 py-3.5 inline-flex"
            >
              Acquista ora a 2,99€ →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
