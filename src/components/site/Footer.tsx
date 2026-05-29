import logoImg from "@/assets/Logo-Grigio (1).png";

const percorsi = [
  { href: "#percorsi", label: "Pronti, Partenza, Lancio" },
  { href: "#percorsi", label: "Business Blueprint" },
  { href: "#percorsi", label: "Mentoring Newsletter" },
  { href: "#percorsi", label: "Consulenza Strategica" },
];

const corsi = [
  { href: "#percorsi", label: "Easy-Mail Pack" },
  { href: "#percorsi", label: "Calendario di Lancio" },
];

const sito = [
  { href: "#chi-sono",      label: "Chi sono" },
  { href: "#percorsi",      label: "I miei percorsi" },
  { href: "#newsletter",    label: "Guida gratuita ai lanci" },
  { href: "#testimonianze", label: "Recensioni" },
];

export function Footer() {
  return (
    <footer id="contatti" style={{ backgroundColor: "#1B2F52" }} className="text-white">
      <div className="container-narrow py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">

          {/* Logo + motto */}
          <div>
            <img
              src={logoImg}
              alt="Andrea Bonomo"
              className="h-14 w-auto mb-6"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="text-sm text-white/65 leading-relaxed max-w-xs">
              Lanciamo la tua prossima offerta,<br />senza ansia e senza stress.
            </p>
          </div>

          {/* Percorsi e Consulenze */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-5">Percorsi e Consulenze</p>
            <ul className="space-y-3">
              {percorsi.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Corsi e Template */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-5">Corsi e Template</p>
            <ul className="space-y-3">
              {corsi.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sito */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-5">Sito</p>
            <ul className="space-y-3">
              {sito.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-narrow py-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-white/40">
          <p>© 2026 Andrea Bonomo - P.IVA 04815800232</p>
          <div className="flex gap-5">
            <a
              href="https://www.iubenda.com/privacy-policy/31182601"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.iubenda.com/privacy-policy/31182601/cookie-policy"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white/70 transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
