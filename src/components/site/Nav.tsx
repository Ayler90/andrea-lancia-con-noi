import { useEffect, useState } from "react";
import logoImg from "@/assets/Logo-Grigio (1).png";

const links = [
  { href: "#chi-sono",     label: "Chi sono" },
  { href: "#percorsi",     label: "I miei percorsi" },
  { href: "#newsletter",   label: "Guida gratuita ai lanci" },
  { href: "#testimonianze", label: "Recensioni" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      {/* Announcement banner — normal flow, scrolls away */}
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

      {/* Main nav — sticky, sits just below the banner then sticks at top */}
      <header
        className={`sticky top-0 z-50 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 ${
          scrolled ? "border-b" : "bg-transparent"
        }`}
        style={scrolled ? {
          backgroundColor:      "rgba(255,255,255,0.60)",
          backdropFilter:       "blur(18px) saturate(180%)",
          WebkitBackdropFilter: "blur(18px) saturate(180%)",
          borderColor:          "rgba(255,255,255,0.55)",
          boxShadow:            "inset 0 1px 0 rgba(255,255,255,0.75), 0 4px 24px rgba(0,0,0,0.07)",
        } : undefined}
      >
        <div className="container-narrow grid grid-cols-3 items-center h-16 md:h-20">
          {/* Left: logo */}
          <a href="#top" className="justify-self-start flex items-center">
            <img src={logoImg} alt="Andrea Bonomo" className="h-10 w-auto" style={{ filter: "brightness(0) saturate(100%) invert(34%) sepia(60%) saturate(500%) hue-rotate(162deg) brightness(90%)" }} />
          </a>

          {/* Center: nav links */}
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

          {/* Right: CTA button + mobile hamburger */}
          <div className="flex items-center justify-end gap-3">
            <a
              href="#prenota"
              className="hidden md:inline-flex pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 text-xs px-4 py-2"
            >
              Prenota la call conoscitiva →
            </a>
            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden flex flex-col gap-1.5 p-2"
            >
              <span className={`block w-5 h-px bg-foreground transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
              <span className={`block w-5 h-px bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-px bg-foreground transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        {open && (
          <div
            className="md:hidden border-t"
            style={{
              backgroundColor:      "rgba(255,255,255,0.72)",
              backdropFilter:       "blur(18px) saturate(180%)",
              WebkitBackdropFilter: "blur(18px) saturate(180%)",
              borderColor:          "rgba(255,255,255,0.55)",
            }}
          >
            <nav className="container-narrow flex flex-col py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base text-foreground/90 hover:text-[#156686]"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
