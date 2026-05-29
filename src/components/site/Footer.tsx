import logoImg from "@/assets/Logo-Grigio (1).png";

const percorsi = [
  { href: "#percorsi", label: "Percorso di Lancio" },
  { href: "#percorsi", label: "Business Blueprint" },
  { href: "#percorsi", label: "Mentoring Newsletter" },
  { href: "#percorsi", label: "Consulenza Strategica" },
];

const corsi = [
  { href: "#percorsi", label: "Easy-Mail Pack" },
  { href: "#percorsi", label: "Calendario di Lancio" },
];

const legal = [
  { href: "#chi-sono",     label: "Chi sono" },
  { href: "#percorsi",     label: "I miei percorsi" },
  { href: "#newsletter",   label: "Guida gratuita ai lanci" },
  { href: "#testimonianze", label: "Recensioni" },
  { href: "#contatti",     label: "Contatti" },
];

export function Footer() {
  return (
    <footer id="contatti" className="bg-foreground text-background">
      <div className="container-narrow py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-10 md:gap-8">

          {/* Logo + motto */}
          <div className="md:col-span-4">
            <img
              src={logoImg}
              alt="Andrea Bonomo"
              className="h-9 w-auto mb-5"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="text-sm text-background/70 leading-relaxed max-w-xs">
              Lanciamo la tua prossima offerta,<br />senza ansia e senza stress.
            </p>
          </div>

          {/* Percorsi */}
          <div className="md:col-span-3 md:col-start-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-background/40 mb-5">Percorsi</p>
            <ul className="space-y-3">
              {percorsi.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-background/75 hover:text-background transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Corsi e template */}
          <div className="md:col-span-3 md:col-start-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-background/40 mb-5">Corsi e Template</p>
            <ul className="space-y-3">
              {corsi.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-background/75 hover:text-background transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-background/40 mt-8 mb-5">Sito</p>
            <ul className="space-y-3">
              {legal.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-background/75 hover:text-background transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container-narrow py-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-background/40">
          <p>© 2026 Andrea Bonomo — P.IVA 04815800232</p>
          <div className="flex gap-5">
            <a
              href="https://www.iubenda.com/privacy-policy/31182601"
              target="_blank"
              rel="noreferrer"
              className="hover:text-background/70 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.iubenda.com/privacy-policy/31182601/cookie-policy"
              target="_blank"
              rel="noreferrer"
              className="hover:text-background/70 transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
