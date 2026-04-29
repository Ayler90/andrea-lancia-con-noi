import { Instagram, Mail } from "lucide-react";

const links = [
  { href: "#chi-sono", label: "Chi sono" },
  { href: "#percorsi", label: "Percorsi" },
  { href: "#newsletter", label: "Newsletter" },
  { href: "#contatti", label: "Contatti" },
];

export function Footer() {
  return (
    <footer id="contatti" className="border-t border-border bg-background">
      <div className="container-narrow py-14 md:py-20">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div>
            <p className="text-base font-medium tracking-tight">Andrea Bonomo</p>
            <p className="text-sm text-muted-foreground mt-1">Funnel e Launch Strategist</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
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

          <div className="flex md:justify-end gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="mailto:hello@andreabonomo.it"
              aria-label="Email"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-narrow py-6 text-xs text-muted-foreground flex flex-col md:flex-row gap-2 md:justify-between">
          <p>© 2026 Andrea Bonomo — P.IVA [placeholder]</p>
          <p>Made with care in Italy</p>
        </div>
      </div>
    </footer>
  );
}
