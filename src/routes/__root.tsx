import { Outlet, Link, createRootRoute } from "@tanstack/react-router";
import { MouseFollower } from "@/components/site/MouseFollower";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#156686] mb-4">Errore 404</p>
        <h1 className="h-display font-bold mb-6" style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)", lineHeight: 1.2 }}>
          <span>🤔 </span>
          <span style={{
            background: "radial-gradient(ellipse at 50% 50%, #a8e6f0 0%, #156686 35%, #0c2330 65%)",
            backgroundSize: "300% 100%",
            backgroundPosition: "-50% 50%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "text-glow-float 3.5s ease-in-out infinite",
          }}>
            mmm, questa pagina non c'è.
          </span>
        </h1>
        <p className="text-base md:text-lg text-foreground/60 max-w-md mb-10 leading-relaxed">
          La pagina che stai cercando non esiste o è stata spostata.<br />
          Torna alla home per continuare.
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
