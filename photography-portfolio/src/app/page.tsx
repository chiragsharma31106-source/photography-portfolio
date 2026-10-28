
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects, categories } from "@/data/projects";
import { siteConfig, getWhatsAppUrl } from "@/config/site";

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> PHOTOGRAPHER & VISUAL STORYTELLER ·{" "}
            {siteConfig.location.toUpperCase()}
          </p>

          <h1>
            Making the
            <br />
            <em>ordinary</em> feel
            <br />
            extraordinary.
          </h1>

          <div className="hero-bottom">
            <p>
              Honest frames, thoughtful details, and stories that stay with
              you.
            </p>

            <Link
              className="round-link"
              href="/portfolio"
              aria-label="Explore portfolio"
            >
              ↘
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <Image
            src="/images/1.jpeg"
            alt="Warm golden light falling across a landscape"
            fill
            priority
            sizes="(max-width: 800px) 100vw, 48vw"
          />
          <span className="image-note">/ Creative Stories</span>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="section-shell section-space">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A FEW RECENT STORIES</p>
            <h2>
              Selected work<span className="brand-dot">.</span>
            </h2>
          </div>

          <Link className="text-link" href="/portfolio">
            View all work <span>↗</span>
          </Link>
        </div>

        <div className="project-grid home-grid">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              priority={index === 0}
            />
          ))}
        </div>
      </section>

      {/* PHOTOGRAPHY CATEGORIES */}
      <section className="category-band">
        <div className="section-shell category-inner">
          <p className="eyebrow">WHAT I PHOTOGRAPH</p>

          <div className="category-list">
            {categories
              .filter((category) => category !== "All Work")
              .map((category, index) => (
                <Link
                  href={`/portfolio?category=${encodeURIComponent(category)}`}
                  key={category}
                >
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {category}

                  <b>↗</b>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-strip section-shell">
        <p className="eyebrow">BEHIND THE CAMERA</p>

        <div>
          <h2>
            Curious by nature.
            <br />
            <em>Intentional</em> by design.
          </h2>

          <p className="body-copy">
            I work with light, texture and real moments to create photographs
            that feel considered, natural and full of character.
          </p>

          <Link className="text-link" href="/about">
            A little about me <span>↗</span>
          </Link>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-banner">
        <div className="section-shell contact-banner-inner">
          <p className="eyebrow">HAVE SOMETHING IN MIND?</p>

          <h2>
            Good things start
            <br />
            with a <em>conversation.</em>
          </h2>

          <a
            className="button button-light"
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
          >
            Enquire for a shoot <span>↗</span>
          </a>
        </div>
      </section>
    </>
  );
}
