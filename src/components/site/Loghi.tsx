import gionsnow from "@/assets/01_LOGO_GionSnow_Positivo (2).png";
import grace from "@/assets/logo-grace.webp";
import trentinoSocialTank from "@/assets/logo-home-pagex2-trentino social tank.png";
import logoBwb from "@/assets/logo.BWB8mVrQ.svg";
import unscripted from "@/assets/unscripted-logo (2).png";

const logos = [
  { src: gionsnow,          alt: "GionSnow" },
  { src: grace,             alt: "Grace" },
  { src: trentinoSocialTank, alt: "Trentino Social Tank" },
  { src: logoBwb,           alt: "BWB" },
  { src: unscripted,        alt: "Unscripted" },
];

export function Loghi() {
  return (
    <section id="loghi" className="py-14 md:py-20 border-b border-border overflow-hidden">
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
          style={{
            width: "max-content",
            animation: "logo-marquee 18s linear infinite",
          }}
        >
          {/* Duplicate logos for seamless loop */}
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex-shrink-0 w-[160px] h-[52px] flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain"
                style={{ filter: "grayscale(100%) brightness(0) opacity(0.38)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
