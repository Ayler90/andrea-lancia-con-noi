import { useCallback, useEffect, useRef } from "react";
import costruiscoImg from "@/assets/Foto mentre costruisco.jpg";

const chaosThoughts = [
  { text: "Devo fare o no un webinar?",                     x: "2%",  y: "5%",  delay: "0s"   },
  { text: "Quante email invio?",                            x: "58%", y: "3%",  delay: "1s"   },
  { text: "Che contenuti dovrei creare?",                   x: "60%", y: "34%", delay: "1.8s" },
  { text: "Quanto le tengo aperte le vendite?",             x: "52%", y: "70%", delay: "0.6s" },
  { text: "Ma quest'offerta è giusta per il mio pubblico?", x: "0%",  y: "55%", delay: "2.2s" },
  { text: "Mi servono o no le ads?",                        x: "22%", y: "85%", delay: "1.4s" },
];

export const clarityItems = [
  "Strategia di lancio su misura per la tua offerta",
  "Calendario step-by-step con ogni azione da fare",
  "Email, contenuti e pagine di vendita già pronti",
  "Supporto in ogni fase, dalla partenza alla chiusura",
];

function ChaosWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bubbleRefs   = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const mouse  = { x: 0, y: 0 };
    const smooth = { x: 0, y: 0 };
    let isActive    = false;
    let pullStrength = 0;

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      if (!isActive) {
        smooth.x = mouse.x;
        smooth.y = mouse.y;
        isActive = true;
      }
    };
    const onLeave = () => { isActive = false; };
    container.addEventListener("mousemove", onMove);
    container.addEventListener("mouseleave", onLeave);

    let animId: number;
    const animate = () => {
      if (isActive) {
        smooth.x    += (mouse.x - smooth.x) * 0.08;
        smooth.y    += (mouse.y - smooth.y) * 0.08;
        pullStrength += (1 - pullStrength) * 0.08;
      } else {
        pullStrength += (0 - pullStrength) * 0.05;
      }

      const cW = container.offsetWidth;
      const cH = container.offsetHeight;

      bubbleRefs.current.forEach((el, i) => {
        if (!el) return;
        const t  = chaosThoughts[i];
        const bx = (parseFloat(t.x) / 100) * cW + el.offsetWidth  / 2;
        const by = (parseFloat(t.y) / 100) * cH + el.offsetHeight / 2;
        const dx = smooth.x - bx;
        const dy = smooth.y - by;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const pull = 36 * Math.exp(-(dist * dist) / (2 * 200 * 200)) * pullStrength;
        el.style.transform = `translate(${(dx / dist) * pull}px, ${(dy / dist) * pull}px)`;
      });

      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-72 md:h-96 flex items-center justify-center select-none">
      {chaosThoughts.map((t, i) => (
        <div
          key={t.text}
          ref={el => { bubbleRefs.current[i] = el; }}
          className="absolute"
          style={{ left: t.x, top: t.y, maxWidth: "46%" }}
        >
          <div
            className="text-xs font-medium text-white/65 bg-white/10 border border-white/20 rounded-xl px-3 py-1.5 backdrop-blur-sm"
            style={{ animation: `thought-float 3.5s ease-in-out ${t.delay} infinite` }}
          >
            {t.text}
          </div>
        </div>
      ))}
      <div
        className="relative z-10 text-7xl md:text-8xl leading-none"
        style={{ animation: "thought-float 4s ease-in-out 0.5s infinite", marginTop: "-2rem" }}
      >
        🤯
      </div>
    </div>
  );
}

export function Problema() {
  const circleSpanRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = circleSpanRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("pencil-drawn"); observer.disconnect(); } },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="problema" className="py-20 md:py-32 bg-[#156686] relative overflow-hidden" data-cursor-light>
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-80 h-80 rounded-full blur-3xl -top-20 -right-20"
          style={{ backgroundColor: "rgba(196,217,220,0.12)", animation: "glow-float 10s ease-in-out infinite" }} />
        <div className="absolute w-64 h-64 rounded-full blur-3xl bottom-0 left-1/4"
          style={{ backgroundColor: "rgba(161,194,207,0.10)", animation: "glow-float-alt 12s ease-in-out infinite", animationDelay: "3s" }} />
        <div className="absolute w-96 h-96 rounded-full blur-3xl top-1/3 -left-20"
          style={{ backgroundColor: "rgba(196,217,220,0.08)", animation: "glow-float 14s ease-in-out infinite", animationDelay: "6s" }} />
        <div className="absolute w-56 h-56 rounded-full blur-2xl bottom-1/4 right-1/4"
          style={{ backgroundColor: "rgba(255,255,255,0.05)", animation: "glow-float-alt 9s ease-in-out infinite", animationDelay: "1.5s" }} />
      </div>

      <div className="container-narrow relative z-10">
        <h2
          ref={circleSpanRef}
          className="h-display text-3xl md:text-4xl lg:text-5xl text-white max-w-2xl mb-16 relative"
        >
          Conosco perfettamente il tuo{" "}
          <em className="text-[#C4D9DC]">problema con i lanci</em>
          <svg viewBox="0 0 600 130" aria-hidden="true" className="absolute pointer-events-none"
            style={{ top: "-10%", left: "-3%", width: "106%", height: "120%", overflow: "visible" }}>
            <defs>
              <filter id="pencil-rough">
                <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" seed="5" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
              </filter>
            </defs>
            <path
              d="M 16,65 C 24,14 130,-4 300,2 C 470,-2 578,16 585,65 C 576,114 464,130 300,128 C 136,128 22,112 16,65 Z"
              fill="none" stroke="#C4D9DC" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"
              filter="url(#pencil-rough)" className="pencil-circle-path"
            />
          </svg>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <p className="text-sm md:text-base text-white/85 leading-relaxed mb-5">
              Hai appena creato il tuo <strong>nuovo video corso</strong>, percorso 1:1 o un'altra
              offerta. Adesso lo vuoi lanciare e vuoi portare{" "}
              <strong>più persone possibili</strong> a scoprire la tua novità.
            </p>
            <p className="text-sm md:text-base font-semibold text-white mb-5">
              Solo che... come si fa un lancio?
            </p>
            <ul className="space-y-3 mb-7">
              {[
                "Servono le email? Quante?",
                "Di che contenuti hai bisogno?",
                "Bisogna far iscrivere le persone a un webinar?",
                "Come fai a capire se l'offerta è giusta per il tuo pubblico?",
              ].map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm md:text-base text-white/75">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
            <div className="space-y-4 text-sm md:text-base text-white/80 leading-relaxed">
              <p>
                Online ci sono centinaia di persone che ti dicono cosa dovresti fare, ma questo ti
                crea <strong>ancora più confusione</strong> invece di schiarirti le idee.
              </p>
              <p className="font-semibold text-white">
                Non hai una strategia chiara, un sistema per lanciare e vai a braccio.
              </p>
              <p>
                Pubblichi → nessuno si iscrive → vai nel panico → smetti → ansia → blocco. Tutto
                questo perché non hai una <strong>direzione limpida</strong> da seguire.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <ChaosWidget />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Clarity Section (white bg, follows Problema) ────────────────────────────

export function ClaritySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef       = useRef<SVGSVGElement>(null);
  const imageRef     = useRef<HTMLDivElement>(null);
  const cardRefs     = useRef<(HTMLDivElement | null)[]>([]);

  const draw = useCallback(() => {
    const svg       = svgRef.current;
    const img       = imageRef.current;
    const container = containerRef.current;
    if (!svg || !img || !container || container.offsetWidth === 0) return;

    const cRect = container.getBoundingClientRect();
    const iRect = img.getBoundingClientRect();
    const W = cRect.width;
    const H = cRect.height;

    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    const NS   = "http://www.w3.org/2000/svg";
    const defs = document.createElementNS(NS, "defs");
    svg.appendChild(defs);

    const imgCx = iRect.left - cRect.left + iRect.width  / 2;
    const imgCy = iRect.top  - cRect.top  + iRect.height / 2;
    const imgR  = iRect.width / 2;

    // Returns the point on a rectangle's border that lies on the line from (fromX,fromY) to the rect center
    const edgePt = (cx: number, cy: number, hw: number, hh: number, fromX: number, fromY: number, gap = 6) => {
      const fdx = fromX - cx;
      const fdy = fromY - cy;
      const sx  = fdx !== 0 ? (hw + gap) / Math.abs(fdx) : Infinity;
      const sy  = fdy !== 0 ? (hh + gap) / Math.abs(fdy) : Infinity;
      const s   = Math.min(sx, sy);
      return { x: cx + s * fdx, y: cy + s * fdy };
    };

    const cards = cardRefs.current.map(el => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return {
        x:  r.left - cRect.left + r.width  / 2,
        y:  r.top  - cRect.top  + r.height / 2,
        hw: r.width  / 2,
        hh: r.height / 2,
      };
    }).filter(Boolean) as { x: number; y: number; hw: number; hh: number }[];

    let idx = 0;
    const addSegment = (x1: number, y1: number, x2: number, y2: number, dur: number, delay: number) => {
      const pid = `cs-${idx++}`;

      const line = document.createElementNS(NS, "line");
      line.setAttribute("x1", String(x1)); line.setAttribute("y1", String(y1));
      line.setAttribute("x2", String(x2)); line.setAttribute("y2", String(y2));
      line.setAttribute("stroke", "rgba(21,102,134,0.18)");
      line.setAttribute("stroke-width", "1.2");
      svg.appendChild(line);

      const pathEl = document.createElementNS(NS, "path");
      pathEl.setAttribute("id", pid);
      pathEl.setAttribute("d", `M ${x1} ${y1} L ${x2} ${y2}`);
      pathEl.setAttribute("fill", "none");
      defs.appendChild(pathEl);

      const dot = document.createElementNS(NS, "circle");
      dot.setAttribute("r", "4");
      dot.setAttribute("fill", "#156686");
      dot.setAttribute("opacity", "0.65");

      const motion = document.createElementNS(NS, "animateMotion");
      motion.setAttribute("dur",         `${dur}s`);
      motion.setAttribute("repeatCount", "indefinite");
      motion.setAttribute("keyPoints",   "0;1;0");
      motion.setAttribute("keyTimes",    "0;0.5;1");
      motion.setAttribute("calcMode",    "linear");
      motion.setAttribute("begin",       `${delay}s`);

      const mpath = document.createElementNS(NS, "mpath");
      mpath.setAttribute("href", `#${pid}`);
      mpath.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", `#${pid}`);
      motion.appendChild(mpath);
      dot.appendChild(motion);
      svg.appendChild(dot);
    };

    // Image → each card (4 lines) — start at image edge, end at card border
    cards.forEach((cc, i) => {
      const angle = Math.atan2(cc.y - imgCy, cc.x - imgCx);
      const end   = edgePt(cc.x, cc.y, cc.hw, cc.hh, imgCx, imgCy);
      addSegment(
        imgCx + Math.cos(angle) * (imgR + 6),
        imgCy + Math.sin(angle) * (imgR + 6),
        end.x, end.y,
        6 + i * 0.4,
        i * 0.5
      );
    });

    // Card → next card (3 sequential lines) — edge to edge
    for (let i = 0; i < cards.length - 1; i++) {
      const a    = cards[i];
      const b    = cards[i + 1];
      const from = edgePt(a.x, a.y, a.hw, a.hh, b.x, b.y);
      const to   = edgePt(b.x, b.y, b.hw, b.hh, a.x, a.y);
      addSegment(from.x, from.y, to.x, to.y, 7 + i * 0.4, i * 0.6 + 2);
    }
  }, []);

  useEffect(() => {
    const t  = setTimeout(draw, 100);
    const ro = new ResizeObserver(draw);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => { clearTimeout(t); ro.disconnect(); };
  }, [draw]);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-narrow">
        {/* Title + subtitle — centered */}
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="h-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-5">
            Quello che faccio è questo
          </h2>
          <p className="text-sm md:text-base text-foreground/65 leading-relaxed max-w-2xl mx-auto">
            Ti guido nel tuo lancio,{" "}
            <strong className="text-foreground/85">togliendoti il peso</strong> di gestire la parte tecnica e
            strategica e accompagnandoti in ogni fase, così sai sempre dove sei e cosa succederà dopo.
          </p>
        </div>

        {/* Diagram */}
        <div ref={containerRef} className="relative pb-2">
          <svg
            ref={svgRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ overflow: "visible", zIndex: 0 }}
          />

          {/* Round image — top center */}
          <div className="flex justify-center mb-14 relative z-10">
            <div
              ref={imageRef}
              className="rounded-full overflow-hidden"
              style={{
                width: 220, height: 220,
                border: "5px solid rgba(21,102,134,0.25)",
                boxShadow: "0 0 48px 12px rgba(21,102,134,0.08), 0 4px 24px rgba(0,0,0,0.07)",
              }}
            >
              <img src={costruiscoImg} alt="Andrea Bonomo" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* 4 cards in a row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 relative z-10">
            {clarityItems.map((item, i) => (
              <div
                key={item}
                ref={el => { cardRefs.current[i] = el; }}
                className="rounded-2xl px-4 py-4"
                style={{
                  border: "1px solid rgba(21,102,134,0.14)",
                  background: "rgba(21,102,134,0.04)",
                }}
              >
                <span className="text-[10px] font-bold tracking-widest uppercase block mb-2"
                  style={{ color: "rgba(21,102,134,0.45)" }}>
                  {`0${i + 1}`}
                </span>
                <p className="text-sm font-medium leading-snug text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Centered CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-12 md:mt-14">
          <a href="#percorsi"
            className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 font-semibold">
            Scopri i miei percorsi
          </a>
          <a href="#testimonianze"
            className="text-sm font-medium text-foreground/65 border border-border hover:border-foreground/30 hover:text-foreground transition-all flex items-center gap-2 px-5 py-2.5 rounded-full">
            Leggi le recensioni →
          </a>
        </div>
      </div>
    </section>
  );
}
