import { Outlet, Link, createRootRoute } from "@tanstack/react-router";
import { MouseFollower } from "@/components/site/MouseFollower";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-24 text-center">
        <p className="eyebrow text-[#156686]/70 mb-6">Aiuto, forse c'è un problema.</p>
        <h1 className="h-display font-bold mb-6" style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)", lineHeight: 1.1 }}>
          <span>🤔 </span>
          <span style={{
            background: "radial-gradient(circle, #c8eef5 0%, #156686 40%, #0c2330 75%)",
            backgroundSize: "400% 400%",
            backgroundPosition: "-100% 50%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "text-glow-float 18s ease-in-out infinite",
          }}>
            mmm, questa pagina non c'è.
          </span>
        </h1>
        <p className="text-foreground/65 max-w-xl mb-10 leading-relaxed" style={{ fontSize: "16px" }}>
          Sembra che ci sia qualche problema con la pagina o che proprio non esista. Controlla di avere scritto bene la pagina nella barra degli indirizzi oppure clicca sul pulsante qui sotto per tornare in home.
        </p>
        <Link
          to="/"
          className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 text-sm px-6 py-3"
        >
          Torna alla home →
        </Link>
      </main>
      <Footer />
    </div>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <>
      <MouseFollower />
      <Outlet />
    </>
  );
}
