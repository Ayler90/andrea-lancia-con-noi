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

const clarityItems = [
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

    // Local mutable state — no need for refs visible outside this effect
    const mouse  = { x: 0, y: 0 };
    const smooth = { x: 0, y: 0 };
    let isActive    = false;
    let pullStrength = 0; // 0 → 1, eased in/out separately

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      if (!isActive) {
        // Snap smooth position on first entry so there's no initial delay
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
        pullStrength += (1 - pullStrength) * 0.08; // ease in
      } else {
        pullStrength += (0 - pullStrength) * 0.05; // ease out (slower = smoother release)
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
        const R    = 200;
        const pull = 36 * Math.exp(-(dist * dist) / (2 * R * R)) * pullStrength;
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

// Card positions: top-left → top-right → bottom-right → bottom-left (clockwise)
const CARD_POSITIONS: React.CSSProperties[] = [
  { top: 20,    left: 0   },
  { top: 20,    right: 0  },
  { bottom: 20, right: 0  },
  { bottom: 20, left: 0   },
];

function NetworkDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef      = useRef<SVGSVGElement>(null);
  const imageRef    = useRef<HTMLDivElement>(null);
  const cardRefs    = useRef<(HTMLDivElement | null)[]>([]);

  const draw = useCallback(() => {
    const svg       = svgRef.current;
    const img       = imageRef.current;
    const container = containerRef.current;
    if (!svg || !img || !container || container.offsetWidth === 0) return;

    const cRect  = container.getBoundingClientRect();
    const iRect  = img.getBoundingClientRect();
    const W      = cRect.width;
    const H      = cRect.height;

    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    const NS = "http://www.w3.org/2000/svg";
    const defs = document.createElementNS(NS, "defs");
    svg.appendChild(defs);

    const imgCx = iRect.left - cRect.left + iRect.width  / 2;
    const imgCy = iRect.top  - cRect.top  + iRect.height / 2;
    const imgR  = iRect.width / 2;

    let prevX = imgCx, prevY = imgCy;
    let first = true;

    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const eRect = el.getBoundingClientRect();
      const ecx = eRect.left - cRect.left + eRect.width  / 2;
      const ecy = eRect.top  - cRect.top  + eRect.height / 2;

      // First segment starts from image edge, rest start from previous card center
      let x1 = prevX, y1 = prevY;
      if (first) {
        const angle = Math.atan2(ecy - imgCy, ecx - imgCx);
        x1 = imgCx + Math.cos(angle) * (imgR + 4);
        y1 = imgCy + Math.sin(angle) * (imgR + 4);
        first = false;
      }

      // Line
      const line = document.createElementNS(NS, "line");
      line.setAttribute("x1", String(x1));
      line.setAttribute("y1", String(y1));
      line.setAttribute("x2", String(ecx));
      line.setAttribute("y2", String(ecy));
      line.setAttribute("stroke", "rgba(196,217,220,0.35)");
      line.setAttribute("stroke-width", "1");
      svg.appendChild(line);

      // Path in defs for animateMotion
      const pathId = `jp-${i}`;
      const pathEl = document.createElementNS(NS, "path");
      pathEl.setAttribute("id", pathId);
      pathEl.setAttribute("d", `M ${x1} ${y1} L ${ecx} ${ecy}`);
      pathEl.setAttribute("fill", "none");
      defs.appendChild(pathEl);

      // Animated dot
      const dot = document.createElementNS(NS, "circle");
      dot.setAttribute("r", "4.5");
      dot.setAttribute("fill", "#C4D9DC");
      dot.setAttribute("opacity", "0.85");

      const motion = document.createElementNS(NS, "animateMotion");
      motion.setAttribute("dur",          `${2.6 + i * 0.5}s`);
      motion.setAttribute("repeatCount",  "indefinite");
      motion.setAttribute("keyPoints",    "0;1;0");
      motion.setAttribute("keyTimes",     "0;0.5;1");
      motion.setAttribute("calcMode",     "linear");
      motion.setAttribute("begin",        `${i * 0.65}s`);

      const mpath = document.createElementNS(NS, "mpath");
      mpath.setAttribute("href", `#${pathId}`);
      mpath.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", `#${pathId}`);
      motion.appendChild(mpath);
      dot.appendChild(motion);
      svg.appendChild(dot);

      prevX = ecx;
      prevY = ecy;
    });
  }, []);

  useEffect(() => {
    const t = setTimeout(draw, 80);
    const ro = new ResizeObserver(draw);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => { clearTimeout(t); ro.disconnect(); };
  }, [draw]);

  return (
    <div ref={containerRef} className="relative" style={{ height: 480 }}>
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ overflow: "visible" }}
      />

      {/* Central round image */}
      <div
        ref={imageRef}
        className="absolute rounded-full overflow-hidden"
        style={{
          width: 164, height: 164,
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          border: "5px solid rgba(240,240,240,0.75)",
          boxShadow: "0 0 48px 12px rgba(196,217,220,0.18), 0 8px 32px rgba(0,0,0,0.3)",
        }}
      >
        <img src={costruiscoImg} alt="Andrea Bonomo" className="w-full h-full object-cover" />
      </div>

      {/* Four corner cards */}
      {clarityItems.map((item, i) => (
        <div
          key={item}
          ref={el => { cardRefs.current[i] = el; }}
          className="absolute rounded-2xl px-4 py-3"
          style={{
            ...CARD_POSITIONS[i],
            width: 210,
            background: "rgba(21,102,134,0.22)",
            border: "1px solid rgba(196,217,220,0.28)",
            backdropFilter: "blur(10px)",
          }}
        >
          <span className="text-[10px] font-bold tracking-widest uppercase block mb-1.5" style={{ color: "rgba(196,217,220,0.6)" }}>
            {`0${i + 1}`}
          </span>
          <p className="text-xs font-medium leading-snug text-white/90">{item}</p>
        </div>
      ))}
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
        {/* Heading */}
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

        {/* ROW 1: Problem text LEFT + Chaos widget RIGHT */}
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

        {/* ROW 2: text above + network diagram */}
        <div className="mt-16 md:mt-24">
          <div className="mb-8 max-w-xl">
            <p className="text-sm md:text-base font-semibold text-white mb-3">
              Quello che faccio è questo:
            </p>
            <p className="text-sm md:text-base text-white/85 leading-relaxed">
              Ti guido nel tuo lancio,{" "}
              <strong>togliendoti il peso</strong> di gestire la parte tecnica e strategica e
              accompagnandoti in ogni fase, così sai sempre dove sei e cosa succederà dopo.
            </p>
          </div>

          {/* Desktop: network diagram */}
          <div className="hidden md:block">
            <NetworkDiagram />
          </div>

          {/* Mobile: numbered list */}
          <ul className="md:hidden space-y-4 mb-10">
            {clarityItems.map((item, i) => (
              <li key={item} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/15 border border-white/30 flex items-center justify-center text-[10px] font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-sm text-white/90 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 sm:items-center mt-8 md:mt-12">
            <a href="#percorsi" className="pill bg-white text-[#156686] hover:bg-white/90 hover:-translate-y-0.5 font-semibold">
              Scopri i miei percorsi
            </a>
            <a href="#testimonianze" className="text-sm font-medium text-white/80 border border-white/35 hover:border-white/70 hover:text-white transition-all flex items-center gap-2 px-5 py-2.5 rounded-full">
              Leggi le recensioni →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
