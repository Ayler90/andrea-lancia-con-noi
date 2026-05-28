export function Loghi() {
  return (
    <section id="loghi" className="py-14 md:py-18 border-b border-border">
      <div className="container-narrow">
        <p className="text-center text-sm text-foreground/40 uppercase tracking-widest mb-10">
          Ho collaborato con oltre 90 professionisti — i loghi dei clienti verranno inseriti qui
        </p>
        {/* Placeholder grid per i loghi */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-30">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="w-24 h-10 bg-foreground/20 rounded-md"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
