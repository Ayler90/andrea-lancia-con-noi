import { useEffect, useState } from "react";
import logoLight from "@/assets/logo-andrea-bonomo-light.svg";
import logoDark  from "@/assets/logo-andrea-bonomo-dark.svg";
import avatarImg from "@/assets/Foto profilo IG - Favicon.jpg";

const links = [
  { href: "#chi-sono",      label: "Chi sono" },
  { href: "#percorsi",      label: "I miei percorsi" },
  { href: "#newsletter",    label: "Guida gratuita ai lanci" },
  { href: "#testimonianze", label: "Recensioni" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [closing, setClosing]   = useState(false);

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
            href="#newsletter"
            className="flex-shrink-0 text-xs font-semibold bg-foreground text-background px-4 py-1.5 rounded-full hover:bg-[#156686] hover:text-white transition-colors whitespace-nowrap"
          >
            Scarica ora →
          </a>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 ${
          scrolled ? "border-b" : "bg-transparent"
        }`}
        style={scrolled ? {
          backgroundColor:      "rgba(255,255,255,0.60)",
          backdropFilter:       "blur(18px) saturate(180%)",
          WebkitBackdropFilter: "blur(18px) saturate(180%)",
          borderColor:          "rgba(255,255,255,0.55)",
          boxShadow:            "inset 0 1px 0 rgba(255,255,255,0.20), 0 4px 24px rgba(0,0,0,0.07)",
        } : undefined}
      >
        <div className="container-narrow grid grid-cols-3 items-center h-16 md:h-20">
          {/* Left: avatar + logo */}
          <a href="#top" className="justify-self-start flex items-center gap-2.5">
            <img
              src={avatarImg}
              alt=""
              aria-hidden="true"
              className="w-8 h-8 rounded-full object-cover flex-shrink-0"
              style={{ boxShadow: "0 0 0 1.5px rgba(21,102,134,0.18)" }}
            />
            <img
              src={logoLight}
              alt="Andrea Bonomo"
              className="h-5 w-auto"
            />
          </a>

          {/* Center: nav links (desktop only) */}
          <nav className="hidden md:flex items-center justify-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-foreground/80 relative pb-0.5 whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#156686] hover:after:w-full after:transition-all after:duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right: CTA (desktop) + hamburger (mobile) */}
          <div className="flex items-center justify-end gap-3 col-start-3">
            <a
              href="#prenota"
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
      </header>

      {/* Fullscreen mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[200] flex flex-col md:hidden"
          style={{ backgroundColor: "#156686", animation: `${closing ? "mobile-menu-out" : "mobile-menu-in"} 0.15s ease both` }}
        >
          {/* Top row: avatar + dark logo + close */}
          <div className="container-narrow grid grid-cols-3 items-center h-16 flex-shrink-0">
            <a href="#top" onClick={closeMenu} className="flex items-center gap-2.5">
              <img
                src={avatarImg}
                alt=""
                aria-hidden="true"
                className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                style={{ boxShadow: "0 0 0 1.5px rgba(255,255,255,0.25)" }}
              />
              <img
                src={logoDark}
                alt="Andrea Bonomo"
                className="h-5 w-auto"
              />
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
          <nav className="flex flex-col px-7 pt-10 gap-6 overflow-y-auto">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                className="h-display text-[1.75rem] font-bold text-white leading-none hover:text-white/70 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="mt-auto px-7 pb-14 pt-8">
            <a
              href="#prenota"
              onClick={closeMenu}
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
