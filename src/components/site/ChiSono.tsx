import { useEffect, useRef, useState } from "react";
import aereiImg from "@/assets/Foto con aerei senza sfondo.png";

function CountUp({ target, suffix = "", duration = 6400 }: { target: number; suffix?: string; duration?: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 12);
          setValue(Math.round(ease * target));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);
  return (
    <span ref={ref} style={{ display: "inline-block", minWidth: `${String(target).length + suffix.length}ch`, fontVariantNumeric: "tabular-nums" }}>
      {value}{suffix}
    </span>
  );
}

const settori = [
  "Video making",
  "Effetti speciali SFX",
  "Make up",
  "SMM",
  "Allattamento",
  "Trattamenti al viso",
  "Pavimento pelvico",
  "Fitness",
];

export function ChiSono({ ctaText = "Scopri i miei percorsi →", ctaHref = "#percorsi", onCtaClick }: { ctaText?: string; ctaHref?: string; onCtaClick?: () => void }) {
  return (
    <section id="chi-sono" className="py-20 md:py-28">
      <div className="max-w-[1360px] mx-auto px-6 md:px-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center">

      {/* LEFT column */}
      <div className="md:w-[45%] flex-shrink-0 w-full flex flex-col">
        {/* "Chi sono" above the image */}
        <p className="eyebrow text-[#156686]/70 mb-4 px-2">Chi sono</p>

        {/* Image container */}
        <div className="relative min-h-[460px] md:min-h-[640px]">
          <img
            src={aereiImg}
            alt="Andrea Bonomo con gli aerei"
            loading="lazy"
            width={1024}
            height={1024}
            className="absolute inset-0 w-full h-full object-contain object-bottom"
            style={{ transform: "translateY(-15%)" }}
          />
          {/* White gradient fade at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
            style={{ background: "linear-gradient(to top, white 45%, rgba(255,255,255,0.7) 65%, transparent)" }} />
          {/* Title overlaid at bottom */}
          <div className="absolute bottom-0 left-0 right-0 pb-8 px-2">
            <h2 className="h-display text-3xl md:text-4xl lg:text-5xl leading-tight">
              Sono Andrea Bonomo,{" "}
              <em className="text-[#156686]">funnel e launch strategist.</em>
            </h2>
          </div>
        </div>
      </div>

      {/* RIGHT column */}
      <div className="flex-1">
        <div className="w-full max-w-xl">
          <p className="text-sm md:text-base leading-relaxed text-foreground/85">
            Gestisco lanci da <strong>oltre 6 anni</strong> e, conti alla mano, ne ho gestiti{" "}
            <strong>50+</strong> per coach, consulenti e creator, generando più di{" "}
            <strong>500.000€ di fatturato totale</strong> per i miei clienti.
          </p>
          <p className="mt-5 text-sm md:text-base leading-relaxed text-foreground/85">
            Il mio lavoro è semplice: prendo la tua offerta, costruiamo{" "}
            <strong>insieme la strategia</strong>, e la portiamo sul mercato nel modo più efficace
            possibile. Senza che tu debba fare tutto da solo.
          </p>

          {/* Stats box */}
          <div
            className="mt-10 grid grid-cols-3 gap-6 md:gap-8 py-8 px-6 rounded-2xl bg-[#156686]/8 border border-[#156686]/15"
            style={{ boxShadow: "inset 0 0 40px -10px rgba(21,102,134,0.12), inset 0 1px 0 rgba(196,217,220,0.3)" }}
          >
            <div>
              <p className="h-display text-3xl md:text-4xl text-[#156686]"><CountUp target={50} suffix="+" /></p>
              <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">
                Lanci gestiti
              </p>
            </div>
            <div>
              <p className="h-display text-3xl md:text-4xl text-[#156686]"><CountUp target={6} suffix="+" /></p>
              <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">
                Anni di esperienza
              </p>
            </div>
            <div>
              <p className="h-display text-3xl md:text-4xl text-[#156686]"><CountUp target={500} suffix="k€" /></p>
              <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">
                Fatturato generato
              </p>
            </div>
          </div>

          {/* Settori */}
          <div className="mt-8">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
              Alcuni settori in cui ho gestito lanci
            </p>
            <div className="flex flex-wrap gap-2">
              {settori.map((nome) => (
                <span
                  key={nome}
                  className="text-xs font-medium text-[#156686] bg-[#C4D9DC]/30 border border-[#156686]/25 rounded-full px-4 py-1.5"
                >
                  {nome}
                </span>
              ))}
            </div>
          </div>

          <a
            href={ctaHref}
            onClick={onCtaClick}
            className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 mt-10 inline-flex"
          >
            {ctaText}
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}

