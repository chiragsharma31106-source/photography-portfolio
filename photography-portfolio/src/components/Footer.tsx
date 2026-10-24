import Link from "next/link";
import { getEmailUrl, getInstagramUrl, getWhatsAppUrl, siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
        <h2>Let&apos;s make<br />something memorable.</h2>
        <Link className="text-link" href="/contact">Start a conversation <span>↗</span></Link>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.photographerName}</span>
        <div className="social-links">
          <a href={getInstagramUrl()} target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer">WhatsApp ↗</a>
          <a href={getEmailUrl()} >Email ↗</a>
        </div>
        <span>{siteConfig.location}</span>
      </div>
    </footer>
  );
}
