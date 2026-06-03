import React, { useEffect, useRef, useState } from "react";
import avatarImg from "@/assets/Foto profilo IG - Favicon.jpg";
import { LogoText } from "./LogoText";
import posthog from "posthog-js";

const percorsiSub = [
  { filter: "lancio",     slug: "pronti-partenza-lancio", label: "Pronti, Partenza, Lancio" },
  { filter: "lancio",     slug: "calendario-lancio",      label: "Calendario di Lancio", href: "/scarica-calendario-lancio" },
  { filter: "business",   slug: "business-blueprint",     label: "Business Blueprint" },
  { filter: "newsletter", slug: "mentoring-newsletter",   label: "Mentoring Newsletter" },
  { filter: "consulenza", slug: "consulenza-strategica",  label: "Consulenza Strategica" },
  { filter: "newsletter", slug: "easy-mail-pack",         label: "Easy-Mail Pack" },
];

const percorsiCategories = {
  percorsi: [
    { filter: "lancio",     slug: "pronti-partenza-lancio", label: "Pronti, Partenza, Lancio", emoji: "🚀", desc: "Lancia il tuo primo prodotto online" },
    { filter: "business",   slug: "business-blueprint",     label: "Business Blueprint",        emoji: "🗺️", desc: "Costruisci un business solido e scalabile" },
    { filter: "newsletter", slug: "mentoring-newsletter",   label: "Mentoring Newsletter",      emoji: "✉️", desc: "Cresci con supporto diretto one-to-one" },
    { filter: "consulenza", slug: "consulenza-strategica",  label: "Consulenza Strategica",     emoji: "🎯", desc: "Chiarezza e direzione in una sessione" },
  ],
  corsi: [
    { filter: "lancio",     slug: "calendario-lancio",      label: "Calendario di Lancio", emoji: "📅", desc: "Pianifica ogni lancio senza stress", href: "/scarica-calendario-lancio" },
    { filter: "newsletter", slug: "easy-mail-pack",         label: "Easy-Mail Pack",        emoji: "📧", desc: "Email e newsletter che vendono davvero", href: "/easy-mail-pack" },
  ],
};

function goToPercorso(filter: string, slug: string, onClose: () => void) {
  onClose();
  posthog.capture("percorso_cta_click", { slug, source: "nav_mobile" });
  if (window.location.pathname !== "/") {
    window.location.href = "/#percorsi";
    return;
  }
  window.dispatchEvent(new CustomEvent("percorso-select", { detail: filter }));
  setTimeout(() => {
    const el = document.getElementById(`percorso-${slug}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else document.getElementById("percorsi")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 200);
}

export function Nav() {
  const [scrolled, setScrolled]         = useState(false);
  const [open, setOpen]                 = useState(false);
  const [closing, setClosing]           = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isCalendarioPage = window.location.pathname === "/scarica-calendario-lancio";
  const isEasyMailPage   = window.location.pathname === "/easy-mail-pack";
  const links = [
    { href: isCalendarioPage ? "#chi-sono"      : "/#chi-sono",      label: "Chi sono" },
    { href: "/#percorsi",                                             label: "I miei percorsi" },
    { href: (isCalendarioPage || isEasyMailPage) ? "#newsletter" : "/#newsletter", label: "Guida gratuita ai lanci", badge: "Gratis" },
    { href: isCalendarioPage ? "#testimonianze" : "/#testimonianze", label: "Recensioni" },
  ];

  const closeMenu = () => {
    setClosing(true);
    setTimeout(() => { setOpen(false); setClosing(false); }, 150);
  };

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Announcement banner */}
      <div className="bg-[#C4D9DC]">
        <div className="container-narrow py-2.5 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
          <p className="text-xs sm:text-sm text-foreground/85 leading-snug">
            Scarica la mia <strong>Guida Gratuita ai Lanci</strong>, una guida di oltre 30 pagine
            per creare il tuo primo, o prossimo, lancio.
          </p>
          <a
            href="/#newsletter"
            className="flex-shrink-0 inline-flex items-center gap-1 text-xs font-semibold bg-primary text-primary-foreground px-4 py-1.5 rounded-full hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            Scarica ora
            <span style={{ display: "inline-block", animation: "arrow-nudge 2.4s ease-in-out infinite" }}>→</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <header
        className="sticky top-0 z-50 border-b transition-[box-shadow] duration-300"
        onMouseLeave={() => setDropdownOpen(false)}
        style={{
          backgroundColor:      "rgba(255,255,255,0.92)",
          backdropFilter:       "saturate(180%) blur(24px)",
          WebkitBackdropFilter: "saturate(180%) blur(24px)",
          borderColor:          "rgba(209,213,219,0.45)",
          boxShadow:            scrolled || dropdownOpen
            ? "inset 0 1px 0 rgba(255,255,255,0.30), 0 4px 32px rgba(0,0,0,0.08)"
            : "inset 0 1px 0 rgba(255,255,255,0.30)",
          transition: "box-shadow 0.3s",
        }}
      >
        {/* Top row */}
        <div className="container-narrow grid grid-cols-3 items-center h-16 md:h-20">
          {/* Left: avatar + logo */}
          <a href="/" className="justify-self-start flex items-center gap-2.5 min-w-0">
            <img
              src={avatarImg}
              alt=""
              aria-hidden="true"
              className="w-8 h-8 rounded-full object-cover flex-shrink-0"
            />
            <LogoText />
          </a>

          {/* Center: nav links (desktop only) */}
          <nav className="hidden md:flex items-center justify-center gap-6">
            {links.map((l) =>
              l.label === "I miei percorsi" ? (
                <button
                  key="percorsi-trigger"
                  onMouseEnter={() => setDropdownOpen(true)}
                  className="inline-flex items-center gap-1 text-sm text-foreground/80 relative pb-0.5 whitespace-nowrap cursor-pointer"
                >
                  {l.label}
                  <svg
                    width="11" height="7" viewBox="0 0 11 7" fill="none"
                    className="mt-px opacity-50 transition-transform duration-200"
                    style={{ transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    <path d="M1 1l4.5 4.5L10 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {/* Animated underline */}
                  <span
                    className="absolute bottom-0 left-0 h-[2px] bg-[#156686] transition-all duration-200"
                    style={{ width: dropdownOpen ? "100%" : "0%" }}
                  />
                </button>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  onMouseEnter={() => setDropdownOpen(false)}
                  className="inline-flex items-center gap-1.5 text-sm text-foreground/80 relative pb-0.5 whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#156686] hover:after:w-full after:transition-all after:duration-200"
                >
                  {l.label}
                  {l.badge && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-full leading-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                      {l.badge}
                    </span>
                  )}
                </a>
              )
            )}
          </nav>

          {/* Right: CTA (desktop) + hamburger (mobile) */}
          <div className="flex items-center justify-end gap-3 col-start-3" onMouseEnter={() => setDropdownOpen(false)}>
            <a
              href="/#prenota"
              onClick={() => posthog.capture("nav_cta_prenota_call", { position: "desktop" })}
              className="hidden md:inline-flex pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 text-xs px-4 py-2"
            >
              Prenota la call conoscitiva →
            </a>

            {/* Hamburger */}
            <button
              aria-label={open ? "Chiudi menu" : "Apri menu"}
              onClick={() => open ? closeMenu() : setOpen(true)}
              className="md:hidden flex flex-col justify-center gap-[5px] p-2 -mr-1 z-[300] relative"
            >
              <span className="block w-6 h-[2px] bg-foreground rounded-full" />
              <span className="block w-6 h-[2px] bg-foreground rounded-full" />
              <span className="block w-4 h-[2px] bg-foreground rounded-full" />
            </button>
          </div>
        </div>

        {/* Expanded mega-menu (desktop only) — outer div handles height clip, inner div handles blur */}
        <div
          className="hidden md:block absolute left-0 right-0 top-full z-50"
          style={{
            clipPath:   dropdownOpen ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
            opacity:    dropdownOpen ? 1 : 0,
            transition: "clip-path 0.28s ease, opacity 0.2s ease",
            backgroundColor:      "rgba(255,255,255,0.75)",
            backdropFilter:       "saturate(180%) blur(28px)",
            WebkitBackdropFilter: "saturate(180%) blur(28px)",
            borderTop:    "1px solid rgba(209,213,219,0.45)",
            borderBottom: "1px solid rgba(209,213,219,0.45)",
            boxShadow:    "0 8px 32px rgba(0,0,0,0.08)",
          }}
        >
          <div>
          {/* Same 3-col grid as top row so content aligns under center nav */}
          <div className="container-narrow grid grid-cols-3 py-6">
            <div /> {/* left spacer */}
            <div className="col-span-2 flex gap-16 pl-2">

              {/* Column: Percorsi */}
              <div className="w-80 flex-shrink-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#156686] mb-4">Percorsi</p>
                <ul className="flex flex-col gap-1">
                  {percorsiCategories.percorsi.map((p) => (
                    <li key={p.slug}>
                      <button
                        onClick={() => { setDropdownOpen(false); goToPercorso(p.filter, p.slug, () => {}); }}
                        className="flex items-start gap-3 py-2 px-2 text-left w-full cursor-pointer group rounded-lg hover:bg-[#156686]/5 transition-colors"
                      >
                        <span className="text-lg leading-none mt-0.5 flex-shrink-0">{p.emoji}</span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-foreground/85 group-hover:text-foreground transition-colors whitespace-nowrap">{p.label}</span>
                          <span className="block text-xs text-foreground/50 mt-0.5 whitespace-nowrap">{p.desc}</span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column: Corsi e Template */}
              <div className="w-72 flex-shrink-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#156686] mb-4">Corsi e Template</p>
                <ul className="flex flex-col gap-1">
                  {percorsiCategories.corsi.map((p) => (
                    <li key={p.slug}>
                      <a
                        href={p.href}
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-start gap-3 py-2 px-2 w-full group rounded-lg hover:bg-[#156686]/5 transition-colors"
                      >
                        <span className="text-lg leading-none mt-0.5 flex-shrink-0">{p.emoji}</span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-foreground/85 group-hover:text-foreground transition-colors whitespace-nowrap">{p.label}</span>
                          <span className="block text-xs text-foreground/50 mt-0.5 whitespace-nowrap">{p.desc}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
          </div>
        </div>
      </header>

      {/* Fullscreen mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[200] flex flex-col md:hidden"
          style={{ backgroundColor: "#156686", animation: `${closing ? "mobile-menu-out" : "mobile-menu-in"} 0.15s ease both` }}
        >
          {/* Top row: avatar + dark logo + close */}
          <div className="container-narrow grid grid-cols-3 items-center h-16 flex-shrink-0">
            <a href="/" onClick={closeMenu} className="flex items-center gap-2.5">
              <img
                src={avatarImg}
                alt=""
                aria-hidden="true"
                className="w-8 h-8 rounded-full object-cover flex-shrink-0"
              />
              <LogoText dark />
            </a>
            <div />
            <div className="flex justify-end">
              <button
                onClick={closeMenu}
                aria-label="Chiudi menu"
                className="text-white/80 hover:text-white transition-colors p-2 -mr-1"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex-1 min-h-0 flex flex-col px-7 pt-4 gap-4 overflow-y-auto pb-4">

            {/* Chi sono */}
            <a href={isCalendarioPage ? "#chi-sono" : "/#chi-sono"} onClick={closeMenu}
              className="h-display text-[1.75rem] font-bold text-white leading-none hover:text-white/70 transition-colors">
              Chi sono
            </a>

            {/* I miei percorsi + sub-items */}
            <div>
              <a href="/#percorsi" onClick={closeMenu}
                className="h-display text-[1.75rem] font-bold text-white leading-none hover:text-white/70 transition-colors">
                I miei percorsi
              </a>
              <ul className="mt-2 flex flex-col gap-1.5 pl-4 border-l-2 border-white/20 ml-1">
                {percorsiSub.map((p) => (
                  <li key={p.slug}>
                    {p.href ? (
                      <button
                        onClick={() => {
                          closeMenu();
                          posthog.capture("percorso_cta_click", { slug: p.slug, source: "nav_mobile" });
                          if (window.location.pathname === p.href) {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          } else {
                            window.location.href = p.href!;
                          }
                        }}
                        className="text-left text-sm font-medium text-white/60 hover:text-white/90 transition-colors leading-snug"
                      >
                        {p.label}
                      </button>
                    ) : (
                      <button
                        onClick={() => goToPercorso(p.filter, p.slug, closeMenu)}
                        className="text-left text-sm font-medium text-white/60 hover:text-white/90 transition-colors leading-snug"
                      >
                        {p.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Guida gratuita ai lanci + badge */}
            <a href={isCalendarioPage ? "#newsletter" : "/#newsletter"} onClick={closeMenu}
              className="h-display text-[1.75rem] font-bold text-white leading-none hover:text-white/70 transition-colors flex items-center gap-3 flex-wrap">
              Guida gratuita ai lanci
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest bg-white/15 text-white px-2.5 py-1 rounded-full leading-none">
                <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" style={{ boxShadow: "0 0 6px rgba(52,211,153,0.8)" }} />
                Gratis
              </span>
            </a>

            {/* Recensioni */}
            <a href={isCalendarioPage ? "#testimonianze" : "/#testimonianze"} onClick={closeMenu}
              className="h-display text-[1.75rem] font-bold text-white leading-none hover:text-white/70 transition-colors">
              Recensioni
            </a>

          </nav>

          {/* Bottom CTA */}
          <div className="mt-auto px-7 pb-14 pt-8">
            <a
              href="/#prenota"
              onClick={() => { posthog.capture("nav_cta_prenota_call", { position: "mobile" }); closeMenu(); }}
              className="pill bg-white text-[#156686] font-semibold text-base block text-center"
            >
              Prenota la call conoscitiva →
            </a>
          </div>
        </div>
      )}
    </>
  );
}
