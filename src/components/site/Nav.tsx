import { useEffect, useState } from "react";

const links = [
  { href: "#chi-sono", label: "Chi sono" },
  { href: "#percorsi", label: "Percorsi" },
  { href: "#newsletter", label: "Newsletter" },
  { href: "#contatti", label: "Contatti" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Announcement banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#C4D9DC]">
        <div className="container-narrow py-2.5 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
          <p className="text-xs sm:text-sm text-foreground/85 leading-snug">
            Scarica la mia guida gratuita ai lanci, una guida di oltre 30 pagine per creare il tuo
            primo, o prossimo, lancio.
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
        className={`fixed left-0 right-0 z-40 transition-all duration-300 top-[var(--banner-h,52px)] ${
          scrolled
            ? "bg-background/85 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
        style={{ "--banner-h": "52px" } as React.CSSProperties}
      >
        <div className="container-narrow flex items-center justify-between h-16 md:h-20">
          <a href="#top" className="text-base md:text-lg font-medium tracking-tight">
            Andrea Bonomo
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-foreground/80 relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#156686] hover:after:w-full after:transition-all after:duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

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

        {open && (
          <div className="md:hidden border-t border-border bg-background">
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
