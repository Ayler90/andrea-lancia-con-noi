import gionsnow from "@/assets/01_LOGO_GionSnow_Positivo (2).png";
import grace from "@/assets/logo-grace.webp";
import trentinoSocialTank from "@/assets/logo-home-pagex2-trentino social tank.png";
import logoBwb from "@/assets/logo.BWB8mVrQ.svg";
import unscripted from "@/assets/unscripted-logo (2).png";

// Old logos have opaque/dark content — simple grayscale is fine
// New logos (grace, unscripted) have white content on transparent bg — need brightness(0) to become visible
const logos = [
  { src: gionsnow,           alt: "GionSnow",            bright: false },
  { src: trentinoSocialTank, alt: "Trentino Social Tank", bright: false },
  { src: logoBwb,            alt: "24 Ore Business School", bright: false },
  { src: grace,              alt: "Grace",                bright: true  },
  { src: unscripted,         alt: "Unscripted",           bright: true  },
];

export function Loghi() {
  return (
    <section id="loghi" className="pb-14 md:pb-20 border-b border-border overflow-hidden">
      <div className="container-narrow mb-10 text-center">
        <h2 className="h-display text-2xl md:text-3xl lg:text-4xl">
          Alcuni dei clienti e delle realtà{" "}
          <em className="text-[#156686]">con cui ho lavorato</em>
        </h2>
      </div>

      {/* Marquee track */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        <div
          className="flex gap-16 md:gap-24 items-center"
          style={{ width: "max-content", animation: "logo-marquee 18s linear infinite" }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex-shrink-0 w-[160px] h-[52px] flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain"
                style={{
                  filter: logo.bright
                    ? "grayscale(100%) brightness(0) opacity(0.38)"
                    : "grayscale(100%) opacity(0.45)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
