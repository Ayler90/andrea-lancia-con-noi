export function Loghi() {
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

  return (
    <section id="loghi" className="py-16 md:py-20 border-b border-border">
      <div className="container-narrow">
        <p className="text-center text-sm text-foreground/50 uppercase tracking-widest mb-10">
          Ho collaborato con oltre 90 professionisti
        </p>
        {/* Qui verranno inseriti i loghi dei clienti */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
          {settori.map((nome) => (
            <span
              key={nome}
              className="text-sm font-medium text-foreground/50 border border-border rounded-full px-4 py-2"
            >
              {nome}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
