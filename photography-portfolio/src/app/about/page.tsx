import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "About", description: "Learn more about the photographer and their approach." };

export default function AboutPage() {
  return (
    <section className="section-shell page-section about-page">
      <div className="page-intro">
        <p className="eyebrow">A LITTLE INTRODUCTION</p>
        <h1>Behind the<br /><em>frames.</em></h1>
      </div>
      <div className="about-layout">
        <div className="about-photo"><Image src="/images/2.jpeg" alt="Camera and photography gear on a work table" fill sizes="(max-width: 700px) 100vw, 40vw" /></div>
        <div className="about-text">
          <p className="eyebrow">HELLO, I&apos;M {siteConfig.photographerName.toUpperCase()}</p>
          <h2>Photography is how I pay attention.</h2>
          <p>I&apos;m a photographer based in {siteConfig.location}, drawn to natural light, interesting details and stories that feel real.</p>
          <p>From fast-paced events to carefully composed product frames, my approach is simple: understand the subject, find the feeling, and make images with purpose.</p>
          <p className="small-note">I capture stories through light, details, and unique perspectives, turning ordinary moments into timeless visual experiences.</p>
        </div>
      </div>
    </section>
  );
}
