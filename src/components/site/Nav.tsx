import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#chi-sono", label: "Chi sono" },
  { href: "#percorsi", label: "Percorsi" },
  { href: "#newsletter", label: "Newsletter" },
  { href: "#contatti", label: "Contatti" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 12);
      if (bannerRef.current && navRef.current) {
        const rect = bannerRef.current.getBoundingClientRect();
        navRef.current.style.top = `${Math.max(0, rect.bottom)}px`;
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      {/* Announcement banner — normal flow, scrolls with page. overflow-hidden clips glows at banner edges */}
      <div ref={bannerRef} className="relative bg-[#C4D9DC] overflow-hidden">
        {/* Three glows centered vertically, clipped by overflow-hidden, fast movement */}
        <div
          className="absolute w-24 h-24 rounded-full blur-2xl pointer-events-none"
          style={{ backgroundColor: "rgba(21,102,134,0.30)", top: "50%", left: "8%", transform: "translateY(-50%)", animation: "banner-drift-1 3s ease-in-out infinite" }}
        />
        <div
          className="absolute w-28 h-28 rounded-full blur-2xl pointer-events-none"
          style={{ backgroundColor: "rgba(21,102,134,0.24)", top: "50%", left: "42%", transform: "translateY(-50%)", animation: "banner-drift-2 4s ease-in-out infinite", animationDelay: "1s" }}
        />
        <div
          className="absolute w-20 h-20 rounded-full blur-xl pointer-events-none"
          style={{ backgroundColor: "rgba(11,71,100,0.32)", top: "50%", right: "14%", transform: "translateY(-50%)", animation: "banner-drift-3 3.5s ease-in-out infinite", animationDelay: "2s" }}
        />
        <div className="container-narrow py-2.5 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center relative z-10">
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

      {/* Main nav — fixed, top adjusts dynamically as banner scrolls */}
      <header
        ref={navRef}
        className={`fixed left-0 right-0 z-40 transition-colors duration-300 ${
          scrolled
            ? "bg-background/85 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
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
