import type { Metadata } from "next";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata: Metadata = { title: "Portfolio", description: "Explore photography projects across events, products, food, travel and automotive." };

export default function PortfolioPage() {
  return (
    <section className="section-shell page-section">
      <div className="page-intro">
        <p className="eyebrow">THE PORTFOLIO · 2024—2026</p>
        <h1>Selected<br /><em>perspectives.</em></h1>
        <p className="intro-copy">A collection of people, places, objects and fleeting moments seen through my lens.</p>
      </div>
      <PortfolioGrid />
    </section>
  );
}
