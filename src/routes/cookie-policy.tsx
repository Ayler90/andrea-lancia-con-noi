import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/cookie-policy")({
  component: CookiePolicy,
  head: () => ({
    meta: [
      { title: "Cookie Policy | Andrea Bonomo" },
      { name: "description", content: "Informativa sull'uso dei cookie sul sito di Andrea Bonomo." },
    ],
  }),
});

function CookiePolicy() {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "CookieDeclaration";
    script.src = "https://consent.cookiebot.com/46fa8406-565f-41d3-8cde-45908606eb32/cd.js";
    script.type = "text/javascript";
    script.async = true;
    const container = document.getElementById("cookiebot-declaration");
    if (container) container.appendChild(script);
    return () => {
      if (container) container.innerHTML = "";
    };
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <section className="py-20 md:py-28 px-4">
        <div className="container-narrow max-w-3xl">
          <p className="eyebrow text-[#156686]/70 mb-4">Informativa</p>
          <h1 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl mb-10">
            Cookie <em className="text-[#156686]">Policy</em>
          </h1>
          <div id="cookiebot-declaration" className="prose prose-sm max-w-none text-foreground/85" />
        </div>
      </section>
      <Footer />
    </main>
  );
}
