import heroImg from "@/assets/hero-andrea.jpg";

export function Hero() {
  return (
    <section id="top" className="pt-36 md:pt-40">
      <div className="container-narrow">
        <div
          className="rounded-3xl md:rounded-[2rem] bg-surface overflow-hidden relative"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(21,102,134,0.07) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        >
          <div className="grid md:grid-cols-12 gap-0 items-stretch">
            {/* Text */}
            <div className="md:col-span-7 p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-between min-h-[520px] md:min-h-[620px]">
              <div />

              <h1 className="h-display mt-10 md:mt-0 leading-[1.1]">
                <span className="block text-[1.5rem] sm:text-[1.75rem] md:text-[2.25rem] lg:text-[2.5rem] text-foreground/70 font-medium">
                  Faccio lanci e costruisco funnel di vendita.
                </span>
                <em className="block text-[2rem] sm:text-[2.5rem] md:text-[3.25rem] lg:text-[4rem] mt-2">
                  Lanciamo la tua prossima offerta?
                </em>
              </h1>

              <div className="mt-6 md:mt-8">
                <p className="text-base md:text-lg text-foreground/70 max-w-xl leading-relaxed">
                  Lo so che lanciare ti spaventa, ci sono mille cose da controllare e non sai da
                  dove iniziare. Facciamolo insieme: mi occupo io della parte tecnica e strategica,
                  tu ci metti creatività ed energia. Zero stress, zero ansia.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
                  <a
                    href="#percorsi"
                    className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 shadow-lg shadow-primary/25"
                  >
                    Scopri i miei percorsi
                  </a>
                  <a
                    href="#newsletter"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-foreground rounded-full ring-1 ring-transparent hover:ring-foreground/20 hover:bg-foreground/6 px-4 py-2.5 transition-all duration-200"
                  >
                    Scarica la guida gratuita ai lanci
                    <span className="transition-transform group-hover:translate-x-0.5">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="md:col-span-5 relative min-h-[320px] md:min-h-[620px]">
              <img
                src={heroImg}
                alt="Andrea Bonomo, Funnel e Launch Strategist"
                width={1280}
                height={1280}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
