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
        {/* I loghi dei clienti verranno aggiunti qui */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-10">
          {settori.map((nome) => (
            <span
              key={nome}
              className="text-sm font-medium text-[#156686] bg-[#C4D9DC]/30 border border-[#156686]/25 rounded-full px-5 py-2 shadow-sm shadow-[#156686]/10"
            >
              {nome}
            </span>
          ))}
        </div>
        <div className="flex justify-center">
          <a
            href="#percorsi"
            className="pill bg-white text-[#156686] border border-[#156686] hover:bg-[#156686] hover:text-white hover:-translate-y-0.5 shadow-md shadow-[#156686]/20"
          >
            Scopri come posso aiutarti →
          </a>
        </div>
      </div>
    </section>
  );
}
