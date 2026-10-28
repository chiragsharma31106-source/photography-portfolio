
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { PortfolioProject } from "@/data/projects";

export default function ProjectCard({
  project,
  priority = false,
}: {
  project: PortfolioProject;
  priority?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <article className="project-card">
        <button
          type="button"
          className="project-image-wrap project-image-button"
          onClick={() => setIsOpen(true)}
          aria-label={`Open ${project.title} cover photo`}
        >
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority={priority}
            sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
            className="project-image"
          />
          <span className="image-arrow" aria-hidden="true">
            ⤢
          </span>
        </button>

        <div className="project-meta">
          <div>
            <Link href={`/portfolio/${project.slug}`} className="project-title-link">
              <h3>{project.title}</h3>
            </Link>
            <p>{project.category}</p>
          </div>

          {project.year && <span>{project.year}</span>}
        </div>
      </article>

      {isOpen && (
        <div
          className="photo-lightbox-overlay"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} photo`}
        >
          <button
            type="button"
            className="photo-lightbox-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close photo"
          >
            ×
          </button>

          <div className="photo-lightbox-content">
            <Image
              src={project.coverImage}
              alt={project.title}
              width={2000}
              height={1500}
              className="photo-lightbox-full"
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
