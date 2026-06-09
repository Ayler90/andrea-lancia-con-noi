import { LogoText } from "./LogoText";
import avatarImg from "@/assets/Foto profilo IG - Favicon.jpg";
import posthog from "posthog-js";

const percorsi = [
  { filter: "lancio",     slug: "pronti-partenza-lancio", label: "Pronti, Partenza, Lancio" },
  { filter: "business",   slug: "business-blueprint",     label: "Business Blueprint" },
  { filter: "newsletter", slug: "mentoring-newsletter",   label: "Mentoring Newsletter" },
  { filter: "consulenza", slug: "consulenza-strategica",  label: "Consulenza Strategica", href: "/consulenza-strategica" },
];

const corsi = [
  { filter: "newsletter", slug: "easy-mail-pack",   label: "Easy-Mail Pack", href: "/easy-mail-pack" },
  { filter: "lancio",     slug: "calendario-lancio", label: "Calendario di Lancio", href: "/scarica-calendario-lancio" },
];

function goToPercorso(e: React.MouseEvent, filter: string, slug: string) {
  e.preventDefault();
  posthog.capture("percorso_cta_click", { slug, source: "footer" });
  if (window.location.pathname !== "/") {
    window.location.href = "/#percorsi";
    return;
  }
  window.dispatchEvent(new CustomEvent("percorso-select", { detail: filter }));
  setTimeout(() => {
    const el = document.getElementById(`percorso-${slug}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else document.getElementById("percorsi")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 60);
}

export function Footer() {
  const isCalendarioPage = window.location.pathname === "/scarica-calendario-lancio";
  const sito = [
    { href: isCalendarioPage ? "#chi-sono"      : "/#chi-sono",      label: "Chi sono" },
    { href: "/#percorsi",                                             label: "I miei percorsi" },
    { href: "/scarica-calendario-lancio",    label: "Guida gratuita ai lanci" },
    { href: isCalendarioPage ? "#testimonianze" : "/#testimonianze", label: "Recensioni" },
  ];
  return (
    <footer id="contatti" data-cursor-light style={{ backgroundColor: "#1B2F52" }} className="text-white relative overflow-hidden">
      {/* Moving glow orb */}
      <div className="absolute pointer-events-none"
        style={{ width: 680, height: 680, borderRadius: "50%", background: "radial-gradient(circle, rgba(108,159,168,0.50) 0%, transparent 70%)", filter: "blur(60px)", animation: "footer-glow 12s linear infinite", top: "10%", left: "20%" }}
      />
      <div className="container-narrow py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">

          {/* Logo + motto + Instagram */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <img src={avatarImg} alt="" aria-hidden="true" className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
              <LogoText dark />
            </div>
            <p className="text-sm text-white/65 leading-relaxed max-w-xs mb-5">
              Lanciamo la tua prossima offerta,<br />senza ansia e senza stress.
            </p>
            <a
              href="https://www.instagram.com/andreabonomo_mktg/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
              @andreabonomo_mktg
            </a>
          </div>

          {/* Percorsi e Consulenze */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-5">Percorsi e Consulenze</p>
            <ul className="space-y-3">
              {percorsi.map((l) => (
                <li key={l.label}>
                  {(l as any).href ? (
                    <a
                      href={(l as any).href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  ) : (
                    <a
                      href={`#percorso-${l.slug}`}
                      onClick={(e) => goToPercorso(e, l.filter, l.slug)}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  )}
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
                  {l.href ? (
                    <button
                      onClick={() => {
                        posthog.capture("percorso_cta_click", { slug: l.slug, source: "footer" });
                        if (window.location.pathname === l.href) {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        } else {
                          window.location.href = l.href!;
                        }
                      }}
                      className="text-sm text-white/70 hover:text-white transition-colors cursor-pointer"
                    >
                      {l.label}
                    </button>
                  ) : (
                    <a
                      href={`#percorso-${l.slug}`}
                      onClick={(e) => goToPercorso(e, l.filter, l.slug)}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  )}
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
              href="/cookie-policy"
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
