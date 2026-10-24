import type { Metadata } from "next";
import { ArrowUpRight, Instagram, Mail, MessageCircle } from "lucide-react";
import { getEmailUrl, getInstagramUrl, getWhatsAppUrl, siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "Contact", description: "Contact the photographer about a shoot or collaboration." };

export default function ContactPage() {
  return (
    <section className="section-shell page-section contact-page">
      <p className="eyebrow">LET&apos;S MAKE SOMETHING GOOD</p>
      <h1>Tell me what<br />you&apos;re <em>imagining.</em></h1>
      <p className="intro-copy">Share a little about your idea, timeline and what you need. The easiest way to start is to reach out directly.</p>
      <div className="contact-options">
        <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer"><span className="contact-icon"><MessageCircle /></span><div><span>THE QUICKEST WAY</span><h2>WhatsApp</h2><p>Send a message about your project.</p></div><ArrowUpRight /></a>
        <a href={getInstagramUrl()} target="_blank" rel="noreferrer"><span className="contact-icon"><Instagram /></span><div><span>FOLLOW / DM</span><h2>Instagram</h2><p>See recent work or send a DM.</p></div><ArrowUpRight /></a>
        <a href={getEmailUrl()}><span className="contact-icon"><Mail /></span><div><span>FOR PROJECT DETAILS</span><h2>Email</h2><p>{siteConfig.email}</p></div><ArrowUpRight /></a>
      </div>
      <p className="contact-footnote">No booking or payment happens on this website. Your enquiry continues directly through your chosen contact app.</p>
    </section>
  );
}
