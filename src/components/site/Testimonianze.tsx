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

export function Testimonianze() {
  return (
    <section id="testimonianze" className="pt-10 md:pt-14 pb-20 md:pb-32 relative overflow-hidden">
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
