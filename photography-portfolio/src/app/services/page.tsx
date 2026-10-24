import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Services", description: "Photography services for events, products, food, travel and automotive projects." };

const services = [
  ["01", "Event / Concert", "Live shows, college festivals, cultural events and behind-the-scenes moments."],
  ["02", "Product", "Product images for brands, launches, catalogues and social media."],
  ["03", "Food / Cafe", "Menu photography, cafe interiors, food stories and brand content."],
  ["04", "Travel / Architecture", "Places, architecture, interiors and visual stories from the road."],
  ["05", "Automotive", "Vehicle portraits, details, lifestyle frames and campaign imagery."]
];

export default function ServicesPage() {
  return (
    <section className="section-shell page-section">
      <div className="page-intro">
        <p className="eyebrow">WAYS WE CAN WORK TOGETHER</p>
        <h1>Photography<br /><em>with purpose.</em></h1>
        <p className="intro-copy">Every project is different. Tell me what you have in mind and we can talk through the details.</p>
      </div>
      <div className="service-list">
        {services.map(([number, title, description]) => <div className="service-row" key={number}><span>{number}</span><h2>{title}</h2><p>{description}</p></div>)}
      </div>
      <div className="service-bottom"><p>Have an idea that doesn&apos;t fit neatly into a category?</p><Link className="text-link" href="/contact">Let&apos;s talk about it ↗</Link></div>
    </section>
  );
}
