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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
              className="text-sm text-foreground/80 hover:text-primary transition-colors"
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
                className="py-3 text-base text-foreground/90 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
