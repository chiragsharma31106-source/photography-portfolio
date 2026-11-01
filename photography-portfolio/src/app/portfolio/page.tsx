
import type { Metadata } from "next";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "All Work",
  description: "Explore all photography projects.",
};

export default function PortfolioPage() {
  return (
    <main>
      <PortfolioGrid />
    </main>
  );
}
