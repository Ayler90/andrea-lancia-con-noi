import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Loghi } from "@/components/site/Loghi";
import { Problema } from "@/components/site/Problema";
import { ChiSono } from "@/components/site/ChiSono";
import { Percorsi } from "@/components/site/Percorsi";
import { ConChiLavoro } from "@/components/site/ConChiLavoro";
import { Newsletter } from "@/components/site/Newsletter";
import { Testimonianze } from "@/components/site/Testimonianze";
import { CallConoscitiva } from "@/components/site/CallConoscitiva";
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
      {/* Single overflow-hidden wrapper so hero glow orbs can drift into the logo strip */}
      <div className="relative overflow-hidden">
        <Hero />
        <Loghi />
      </div>
      <Problema />
      <ChiSono />
      <Percorsi />
      <ConChiLavoro />
      <Newsletter />
      <Testimonianze />
      <CallConoscitiva />
      <Footer />
    </main>
  );
}
