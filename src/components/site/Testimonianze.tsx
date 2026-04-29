import { Play, Instagram, Quote } from "lucide-react";

const items = [
  {
    type: "video",
    name: "Giulia M.",
    role: "Coach & Formatrice",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Il primo lancio strutturato della mia carriera.",
  },
  {
    type: "quote",
    name: "Marco R.",
    role: "Founder, Studio Creativo",
    text: "Ho dimezzato l'ansia del lancio e raddoppiato i risultati. Lorem ipsum dolor sit amet consectetur.",
  },
  {
    type: "instagram",
    name: "@chiarafit",
    role: "Personal Trainer",
    text: "Dopo Easy-Mail Pack la mia newsletter è cambiata totalmente. Lorem ipsum dolor sit amet.",
  },
  {
    type: "quote",
    name: "Anna T.",
    role: "Consulente HR",
    text: "Strategia chiara, email che convertono, zero improvvisazione. Lorem ipsum dolor sit amet adipiscing.",
  },
  {
    type: "video",
    name: "Davide P.",
    role: "Course Creator",
    text: "Il percorso più completo che abbia mai seguito sui lanci. Lorem ipsum dolor sit amet.",
  },
  {
    type: "instagram",
    name: "@elenacopy",
    role: "Copywriter",
    text: "Lavorare con Andrea ha cambiato il mio approccio alle offerte. Lorem ipsum dolor.",
  },
];

export function Testimonianze() {
  return (
    <section className="py-20 md:py-32 border-t border-border">
      <div className="container-narrow">
        <div className="max-w-3xl mb-14 md:mb-20">
          <p className="eyebrow mb-4">03 — Testimonianze</p>
          <h2 className="h-display text-4xl md:text-5xl lg:text-6xl">
            Cosa dicono <em>chi ha lavorato</em> con me
          </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {items.map((t, i) => (
            <div
              key={i}
              className="break-inside-avoid mb-6 rounded-2xl border border-border bg-background hover:border-primary/30 transition-colors overflow-hidden"
            >
              {t.type === "video" && (
                <div className="relative aspect-video bg-gradient-to-br from-primary to-secondary flex items-center justify-center group cursor-pointer">
                  <div className="w-14 h-14 rounded-full bg-background/95 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-primary fill-primary ml-0.5" />
                  </div>
                </div>
              )}
              {t.type === "instagram" && (
                <div className="aspect-square bg-surface flex items-center justify-center">
                  <Instagram className="w-10 h-10 text-secondary" strokeWidth={1.25} />
                </div>
              )}
              <div className="p-6">
                {t.type === "quote" && (
                  <Quote className="w-6 h-6 text-primary/40 mb-3" strokeWidth={1.5} />
                )}
                <p className="text-sm md:text-base leading-relaxed text-foreground/85">
                  "{t.text}"
                </p>
                <div className="mt-5 pt-5 border-t border-border">
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
