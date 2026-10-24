import Link from "next/link";

export default function NotFound() {
  return <section className="section-shell not-found"><p className="eyebrow">404 · FRAME NOT FOUND</p><h1>This page took<br /><em>a different turn.</em></h1><Link className="button" href="/portfolio">Back to the portfolio ↗</Link></section>;
}
