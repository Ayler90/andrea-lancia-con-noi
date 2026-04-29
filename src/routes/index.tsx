import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { ChiSono } from "@/components/site/ChiSono";
import { Percorsi } from "@/components/site/Percorsi";
import { Testimonianze } from "@/components/site/Testimonianze";
import { Newsletter } from "@/components/site/Newsletter";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Andrea Bonomo — Funnel e Launch Strategist" },
      {
        name: "description",
        content:
          "Aiuto freelance e solopreneur a lanciare video corsi, percorsi e servizi online con strategia, email marketing e contenuti che funzionano.",
      },
      { property: "og:title", content: "Andrea Bonomo — Funnel e Launch Strategist" },
      {
        property: "og:description",
        content:
          "Strategia, email marketing e lanci strutturati per freelance e solopreneur.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <ChiSono />
      <Percorsi />
      <Testimonianze />
      <Newsletter />
      <Footer />
    </main>
  );
}
