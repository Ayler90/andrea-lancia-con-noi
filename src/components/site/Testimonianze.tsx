import { useEffect, useRef } from "react";
import r1  from "@/assets/Recensione Google My Business.png";
import r2  from "@/assets/Recensione Google My Business 2.png";
import r3  from "@/assets/Recensione Google My Business 3.png";
import r4  from "@/assets/Recensione Google My Business 4.png";
import r5  from "@/assets/Recensione Google My Business 5.png";
import r6  from "@/assets/Recensione Google My Business 6.png";
import r7  from "@/assets/Recensione Google My Business 7.png";
import r8  from "@/assets/Recensione Google My Business 8.png";
import r9  from "@/assets/Recensione Google My Business 9.png";
import r10 from "@/assets/Recensione Google My Business 10.png";
import r11 from "@/assets/Recensione Google My Business 11.png";
import r12 from "@/assets/Recensione Google My Business 12.png";
import r13 from "@/assets/Recensione Google My Business 13.png";

import f1  from "@/assets/Feedback di vendita.jpg";
import f2  from "@/assets/Feedback di vendita 2.jpg";
import f3  from "@/assets/Feedback di vendita 3.jpg";
import f4  from "@/assets/Feedback di vendita 4.jpg";
import f5  from "@/assets/Feedback di vendita 5.png";
import f6  from "@/assets/Feedback di vendita 6.png";
import f7  from "@/assets/Feedback di vendita 7.png";
import f8  from "@/assets/Feedback di vendita 8.png";
import f9  from "@/assets/Feedback di vendita 9.png";
import f10 from "@/assets/Feedback di vendita 10.png";
import f11 from "@/assets/Feedback di vendita 11.png";
import f12 from "@/assets/Feedback di vendita 12.png";

// Interleave the two groups so the masonry looks varied
const items = [r1, f1, r2, f2, r3, f3, r4, f4, r5, f5, r6, f6, r7, f7, r8, f8, r9, f9, r10, f10, r11, f11, r12, f12, r13];

type Star = {
  bx: number; by: number;   // base position
  cx: number; cy: number;   // current (animated) position
  r: number;                // outer radius of sparkle
  opacity: number;
  phase: number;            // for twinkle
  speed: number;            // lerp speed
};

function drawSparkle(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, opacity: number) {
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.fillStyle = "#156686";
  ctx.beginPath();
  const pts = 4;
  for (let i = 0; i < pts * 2; i++) {
    const angle = (i * Math.PI) / pts - Math.PI / 2;
    const rad   = i % 2 === 0 ? r : r * 0.3;
    const px = x + Math.cos(angle) * rad;
    const py = y + Math.sin(angle) * rad;
    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    let mouseX = -9999, mouseY = -9999;
    let animId: number;
    let stars: Star[] = [];

    const buildStars = () => {
      const w = canvas.width, h = canvas.height;
      stars = Array.from({ length: 220 }, () => {
        const bx = Math.random() * w;
        const by = Math.random() * h;
        return {
          bx, by, cx: bx, cy: by,
          r:       Math.random() * 7 + 3,
          opacity: Math.random() * 0.45 + 0.25,
          phase:   Math.random() * Math.PI * 2,
          speed:   Math.random() * 0.055 + 0.025,
        };
      });
    };

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      buildStars();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const section = canvas.parentElement!;
    const onMove  = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    const onLeave = () => { mouseX = -9999; mouseY = -9999; };
    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);

    let t = 0;
    const draw = () => {
      t += 0.012;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const s of stars) {
        const dx   = mouseX - s.bx;
        const dy   = mouseY - s.by;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const R    = 220;
        const pull = 38 * Math.exp(-(dist * dist) / (2 * R * R));
        const tx   = s.bx + (dx / dist) * pull;
        const ty   = s.by + (dy / dist) * pull;

        s.cx += (tx - s.cx) * s.speed;
        s.cy += (ty - s.cy) * s.speed;

        const twinkle = 0.75 + 0.25 * Math.sin(t * 1.8 + s.phase);
        drawSparkle(ctx, s.cx, s.cy, s.r * twinkle, s.opacity * twinkle);
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} />;
}

export function Testimonianze() {
  return (
    <section id="testimonianze" className="pt-10 md:pt-14 pb-20 md:pb-32 relative overflow-hidden">
      <StarField />
      {/* White fade top */}
      <div className="absolute inset-x-0 top-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, white, transparent)", zIndex: 1 }} />
      {/* White fade bottom */}
      <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to top, white, transparent)", zIndex: 1 }} />

      {/* Background glows */}
      {[
        { color: "#6C9FA8", top: "15%",  left: "20%",  anim: "orb-drift-1 14s ease-in-out infinite" },
        { color: "#156686", top: "45%",  left: "65%",  anim: "orb-drift-2 11s ease-in-out infinite" },
        { color: "#6C9FA8", top: "65%",  left: "35%",  anim: "orb-drift-3 16s ease-in-out infinite" },
      ].map((g, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: g.color,
            opacity: 0.35,
            filter: "blur(100px)",
            top: g.top,
            left: g.left,
            zIndex: 0,
            animation: g.anim,
          }}
        />
      ))}
      <div className="container-narrow relative z-10">
        <div className="max-w-3xl mb-14 md:mb-20">
          <p className="eyebrow mb-4">Parole che mi riempiono il cuore ❤️</p>
          <h2 className="h-display text-3xl md:text-4xl lg:text-5xl">
            Cosa dice chi ha lavorato <em className="text-[#156686]">con me</em>
          </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {items.map((src, i) => (
            <div
              key={i}
              className="border-wipe break-inside-avoid mb-5 rounded-2xl"
            >
              <img
                src={src}
                alt={`Recensione ${i + 1}`}
                loading="eager"
                className="w-full h-auto block rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
