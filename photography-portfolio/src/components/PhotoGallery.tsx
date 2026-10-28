
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { PortfolioProject } from "@/data/projects";

type GalleryImage = PortfolioProject["gallery"][number];

export default function PhotoGallery({
  project,
}: {
  project: PortfolioProject;
}) {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    if (!activeImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeImage]);

  return (
    <>
      <div className="gallery-grid">
        {project.gallery.map((image) => (
          <button
            type="button"
            className="gallery-image gallery-image-button"
            key={image.src}
            onClick={() => setActiveImage(image)}
            aria-label={`Open photo: ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1200}
              height={800}
              sizes="(max-width: 700px) 100vw, 50vw"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </button>
        ))}
      </div>

      {activeImage && (
        <div
          className="photo-lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt}
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            className="photo-lightbox-close"
            aria-label="Close photo"
            onClick={() => setActiveImage(null)}
          >
            ×
          </button>

          <div className="photo-lightbox-content">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              width={2400}
              height={1800}
              sizes="100vw"
              className="photo-lightbox-full"
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
