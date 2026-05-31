import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ChiSono } from "@/components/site/ChiSono";
import { Testimonianze } from "@/components/site/Testimonianze";
import { Newsletter } from "@/components/site/Newsletter";
import React, { useState } from "react";
import coverImg from "@/assets/Immagine-Calendario-di-Lancio (2) - copertina.png";
import imgCalendario from "@/assets/calendario-di-lancio-img1.png";
import imgPianoEditoriale from "@/assets/piano-editoriale.png";
import carousel1 from "@/assets/calendario-di-lancio-1.png";
import carousel2 from "@/assets/calendario-di-lancio-2.png";
import carousel3 from "@/assets/calendario-di-lancio-3.png";
import carousel4 from "@/assets/calendario-di-lancio-4.png";
import carousel5 from "@/assets/calendario-di-lancio-5.png";

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

const PURCHASE_URL = "https://andreabonomo.systeme.io/completa-acquisto-calendario-lancio";
const IMG_BASE = "https://academy.andreabonomo.it/wp-content/uploads/2025/03/";

const carouselImages = [
  { src: carousel1, alt: "Calendario di lancio – schermata 1" },
  { src: carousel2, alt: "Calendario di lancio – schermata 2" },
  { src: carousel3, alt: "Calendario di lancio – schermata 3" },
  { src: carousel4, alt: "Calendario di lancio – schermata 4" },
  { src: carousel5, alt: "Calendario di lancio – schermata 5" },
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
      <div className="overflow-hidden rounded-lg shadow-xl">
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
      <div style={{ maxHeight: open ? "300px" : "0px", overflow: "hidden", transition: open ? "max-height 0.4s ease" : "none" }}>
        <div className="px-6 pb-5 text-sm text-foreground/65 leading-relaxed">
          {a}
        </div>
      </div>
    </div>
  );
}

function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <section className="py-16 md:py-20 px-4">
      <div className="container-narrow max-w-4xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-3 text-center">Hai dubbi?</p>
        <h2 className="h-display text-3xl md:text-4xl lg:text-5xl mb-10 text-center">Domande frequenti</h2>
        <div className="space-y-4">
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
        <div className="mt-12 text-center">
          <a
            href="#form"
            className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 text-sm px-8 py-3.5 inline-flex"
          >
            Acquista ora a 2,99€ →
          </a>
        </div>
      </div>
    </section>
  );
}

function ScaricaCalendarioLancio() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />

      {/* ── HERO ── */}
      <section className="pt-16 pb-16 md:pt-24 md:pb-20 px-6 md:px-4 relative overflow-hidden">
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
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <CheckIcon />
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
      <section data-cursor-light style={{ backgroundColor: "#156686" }} className="py-16 md:py-20 px-4">
        <div className="container-narrow max-w-5xl mx-auto text-center">
          <h2 className="h-display text-3xl md:text-4xl lg:text-5xl text-white mb-3">
            Un Template Notion. Due Calendari. <em style={{ color: "#C4D9DC" }}>Zero Stress di Lancio.</em>
          </h2>
          <p className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-14" style={{ color: "#f0f0f0" }}>
            Tutto quello che ti serve per pianificare il tuo lancio, in un unico posto.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            {/* Card 1 + line + image */}
            <div className="flex flex-col items-center">
              <div data-cursor-dark className="w-full rounded-2xl py-8 px-6" style={{ backgroundColor: "#EEF3F5", border: "1px solid rgba(196,217,220,0.5)" }}>
                <h3 className="font-bold text-lg mb-2 text-foreground">📅 Calendario Visivo del Lancio</h3>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  Visualizza l'intero lancio in un colpo d'occhio. Ogni fase, ogni giorno, ogni azione: tutto organizzato in una vista calendario chiara e intuitiva.
                </p>
              </div>
              {/* Connector */}
              <div className="w-px h-16 bg-white/30 my-2" />
              {/* Image + glow */}
              <div className="relative w-full">
                <img
                  src={imgCalendario}
                  alt="Vista calendario del lancio"
                  className="w-full rounded-xl relative z-10"
                  style={{ animation: "img-float 5s ease-in-out infinite" }}
                />
                <div style={{
                  position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                  width: "120%", height: "120%",
                  background: "radial-gradient(circle, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.3) 40%, transparent 70%)",
                  filter: "blur(40px)", zIndex: 0,
                }} />
              </div>
            </div>

            {/* Card 2 + line + image */}
            <div className="flex flex-col items-center">
              <div data-cursor-dark className="w-full rounded-2xl py-8 px-6" style={{ backgroundColor: "#EEF3F5", border: "1px solid rgba(196,217,220,0.5)" }}>
                <h3 className="font-bold text-lg mb-2 text-foreground">📝 Piano Editoriale Completo</h3>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  Email, post social, reel, storie: per ogni pezzo di contenuto hai già suggeriti il formato, l'obiettivo e il testo di partenza.
                </p>
              </div>
              {/* Connector */}
              <div className="w-px h-16 bg-white/30 my-2" />
              {/* Image + glow, tilted right */}
              <div className="relative w-full" style={{ transform: "rotate(3deg) translateY(12px)" }}>
                <img
                  src={imgPianoEditoriale}
                  alt="Piano editoriale del lancio"
                  className="w-full rounded-xl relative z-10"
                  style={{ animation: "img-float 5s ease-in-out infinite", animationDelay: "0.8s" }}
                />
                <div style={{
                  position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                  width: "120%", height: "120%",
                  background: "radial-gradient(circle, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.3) 40%, transparent 70%)",
                  filter: "blur(40px)", zIndex: 0,
                }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAROUSEL ── */}
      <section className="py-16 md:py-20 px-4">
        <div className="container-narrow max-w-5xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#156686] mb-3">Dai un'occhiata al template</p>
          <h2 className="h-display text-3xl md:text-4xl lg:text-5xl mb-12">Guarda come è fatto</h2>
          <Carousel />
        </div>
      </section>

      {/* ── PURCHASE ── */}
      <section id="form" className="py-16 md:py-20 px-4 bg-foreground relative overflow-hidden" data-cursor-light>
        {/* Glow orbs */}
        <div className="absolute w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "#6C9FA8", opacity: 0.35, filter: "blur(100px)", bottom: "-20%", left: "5%", animation: "orb-drift-1 28s ease-in-out infinite" }} />
        <div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "#156686", opacity: 0.3, filter: "blur(100px)", bottom: "-15%", right: "10%", animation: "orb-drift-2 34s ease-in-out infinite" }} />

        <div className="container-narrow max-w-4xl mx-auto relative z-10">

          {/* Mobile annotation — above the card */}
          <div className="block md:hidden mb-6 pl-2" data-cursor-light>
            <div style={{ transform: "rotate(-6deg)", transformOrigin: "left top" }}>
              <span style={{ fontFamily: "'Caveat', cursive", fontSize: "1.2rem", color: "#C4D9DC", lineHeight: 1.35, display: "block" }}>
                Pronto a organizzare al meglio i tuoi lanci?
              </span>
              <svg width="80" height="70" viewBox="0 0 80 70" fill="none" className="mt-1 ml-4">
                <path d="M 20 4 C 18 28, 18 48, 72 64" stroke="#C4D9DC" strokeWidth="2" strokeLinecap="round" fill="none"/>
                <path d="M 60 56 L 72 64 L 62 72" stroke="#C4D9DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
          </div>

          <div className="relative">
            {/* Desktop annotation — absolute left of card */}
            <div className="hidden md:block absolute right-full top-8 pr-6 w-48" data-cursor-light>
              <span style={{ fontFamily: "'Caveat', cursive", fontSize: "1.2rem", color: "#C4D9DC", lineHeight: 1.35, display: "block", transform: "rotate(-6deg)", transformOrigin: "center top" }}>
                Pronto a organizzare al meglio i tuoi lanci?
              </span>
              <svg width="80" height="75" viewBox="0 0 80 75" fill="none" className="mt-1 ml-6">
                <path d="M 25 4 C 24 28, 20 50, 72 68" stroke="#C4D9DC" strokeWidth="2" strokeLinecap="round" fill="none"/>
                <path d="M 60 60 L 72 68 L 62 76" stroke="#C4D9DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>

            <div className="bg-white rounded-xl overflow-hidden" data-cursor-dark>

              {/* ── MOBILE layout: single centered column ── */}
              <div className="md:hidden px-8 pt-10 pb-10 text-center">
                <img src={coverImg} alt="Anteprima Calendario di Lancio" className="w-44 mx-auto mb-6" style={{ animation: "img-float 5s ease-in-out infinite" }} />
                <div className="inline-flex items-center gap-1.5 border border-[#156686]/25 bg-[#156686]/6 text-[#156686] text-[11px] font-semibold uppercase tracking-[0.12em] px-3 py-1 rounded-full mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" style={{ boxShadow: "0 0 5px rgba(52,211,153,0.8)" }} />
                  Accesso immediato
                </div>
                <h2 className="h-display text-3xl mb-2">Calendario di <em className="text-[#156686]">Lancio</em></h2>
                <p className="text-foreground/60 text-sm mb-5">Template Notion – accesso immediato dopo l'acquisto</p>
                <div className="flex items-baseline gap-2 justify-center mb-8">
                  <span className="text-5xl font-bold text-[#156686]">2,99€</span>
                  <span className="text-foreground/40 text-sm">una tantum</span>
                </div>
                <div className="text-left max-w-xs mx-auto mb-8">
                  <p className="text-xs font-semibold text-foreground/50 uppercase tracking-[0.15em] mb-4">Cosa ricevi</p>
                  <ul className="space-y-3">
                    {["Template Notion duplicabile","Calendario visivo del lancio (Board + Timeline)","Piano editoriale per email, social e contenuti","Istruzioni per personalizzarlo in 10 minuti","Aggiornamenti futuri inclusi"].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80"><CheckIcon />{item}</li>
                    ))}
                  </ul>
                </div>
                <a href={PURCHASE_URL} target="_blank" rel="noreferrer" className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 text-base px-8 py-3.5 block w-full text-center">
                  Acquista ora a 2,99€ →
                </a>
                <p className="text-xs text-foreground/40 mt-3">Pagamento sicuro. Accesso immediato.</p>
              </div>

              {/* ── DESKTOP layout: image+header top, checklist|divider|price bottom ── */}
              <div className="hidden md:block px-14 pt-12 pb-12">
                <div className="flex items-start gap-8 mb-10">
                  <img src={coverImg} alt="Anteprima Calendario di Lancio" className="w-36 flex-shrink-0" style={{ animation: "img-float 5s ease-in-out infinite" }} />
                  <div>
                    <div className="inline-flex items-center gap-1.5 border border-[#156686]/25 bg-[#156686]/6 text-[#156686] text-[11px] font-semibold uppercase tracking-[0.12em] px-3 py-1 rounded-full mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" style={{ boxShadow: "0 0 5px rgba(52,211,153,0.8)" }} />
                      Accesso immediato
                    </div>
                    <h2 className="h-display text-4xl lg:text-5xl mb-2">Calendario di <em className="text-[#156686]">Lancio</em></h2>
                    <p className="text-foreground/60 text-sm">Template Notion – accesso immediato dopo l'acquisto</p>
                  </div>
                </div>
                <div className="flex gap-0">
                  <div className="flex-1 pr-12">
                    <p className="text-xs font-semibold text-foreground/50 uppercase tracking-[0.15em] mb-5">Cosa ricevi</p>
                    <ul className="space-y-3">
                      {["Template Notion duplicabile","Calendario visivo del lancio (Board + Timeline)","Piano editoriale per email, social e contenuti","Istruzioni per personalizzarlo in 10 minuti","Aggiornamenti futuri inclusi"].map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80"><CheckIcon />{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-px bg-foreground/10 mx-4 self-stretch" />
                  <div className="w-72 flex-shrink-0 pl-12 flex flex-col justify-center items-center text-center">
                    <span className="text-5xl font-bold text-[#156686]">2,99€</span>
                    <span className="text-foreground/40 text-sm mt-1 mb-8">una tantum</span>
                    <a href={PURCHASE_URL} target="_blank" rel="noreferrer" className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 text-sm px-6 py-3 text-center block w-full">
                      Acquista ora a 2,99€ →
                    </a>
                    <p className="text-xs text-foreground/40 mt-3">Pagamento sicuro.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FaqSection />

      {/* ── CHI SONO ── */}
      <ChiSono ctaText="Acquista ora il Calendario di Lancio →" ctaHref={PURCHASE_URL} />

      {/* ── TESTIMONIANZE ── */}
      <Testimonianze />

      {/* ── NEWSLETTER ── */}
      <Newsletter />

      <Footer />
    </div>
  );
}
