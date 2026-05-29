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
  cx: number; cy: number;
  r: number;
  opacity: number;
  phase: number;
  angle: number;       // current drift direction
  driftSpeed: number;  // px per frame
};

function drawSparkle(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, opacity: number) {
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.fillStyle = "#156686";
  ctx.beginPath();
  const pts = 4;
  for (let i = 0; i < pts * 2; i++) {
    const a   = (i * Math.PI) / pts - Math.PI / 2;
    const rad = i % 2 === 0 ? r : r * 0.3;
    i === 0 ? ctx.moveTo(x + Math.cos(a) * rad, y + Math.sin(a) * rad)
            : ctx.lineTo(x + Math.cos(a) * rad, y + Math.sin(a) * rad);
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
    let animId: number;
    let stars: Star[] = [];
    let mouseX = -9999, mouseY = -9999;
    let smoothMouseX = -9999, smoothMouseY = -9999;
    let mouseActive = false;

    const buildStars = () => {
      stars = Array.from({ length: 200 }, () => ({
        cx:         Math.random() * canvas.width,
        cy:         Math.random() * canvas.height,
        r:          Math.random() * 7 + 3,
        opacity:    Math.random() * 0.45 + 0.25,
        phase:      Math.random() * Math.PI * 2,
        angle:      Math.random() * Math.PI * 2,
        driftSpeed: Math.random() * 0.35 + 0.08,
      }));
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
      if (!mouseActive) {
        // Snap on first entry so there's no delay
        smoothMouseX = mouseX;
        smoothMouseY = mouseY;
        mouseActive = true;
      }
    };
    const onLeave = () => { mouseX = -9999; mouseY = -9999; mouseActive = false; };
    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);

    let t = 0;
    const draw = () => {
      t += 0.012;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const W = canvas.width, H = canvas.height;

      // Smoothly interpolate toward the actual mouse position
      smoothMouseX += (mouseX - smoothMouseX) * 0.035;
      smoothMouseY += (mouseY - smoothMouseY) * 0.035;

      for (const s of stars) {
        // Autonomous drift
        s.angle += (Math.random() - 0.5) * 0.04;
        s.cx    += Math.cos(s.angle) * s.driftSpeed;
        s.cy    += Math.sin(s.angle) * s.driftSpeed;

        // Wrap around edges
        if (s.cx < -20)    s.cx = W + 20;
        if (s.cx > W + 20) s.cx = -20;
        if (s.cy < -20)    s.cy = H + 20;
        if (s.cy > H + 20) s.cy = -20;

        // Mouse attraction using smoothed position
        const dx   = smoothMouseX - s.cx;
        const dy   = smoothMouseY - s.cy;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const R    = 280;
        const pull = 18 * Math.exp(-(dist * dist) / (2 * R * R));
        const drawX = s.cx + (dx / dist) * pull;
        const drawY = s.cy + (dy / dist) * pull;

        const twinkle = 0.75 + 0.25 * Math.sin(t * 1.6 + s.phase);
        drawSparkle(ctx, drawX, drawY, s.r * twinkle, s.opacity * twinkle);
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
