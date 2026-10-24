import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label={`${siteConfig.photographerName} home`}>
        {siteConfig.photographerName}<span className="brand-dot">.</span>
      </Link>
      <nav className="nav-links" aria-label="Main navigation">
        <Link href="/portfolio">Work</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact" className="nav-contact">Let&apos;s talk <span aria-hidden="true">↗</span></Link>
      </nav>
    </header>
  );
}
