
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeImage =
    activeIndex !== null ? project.gallery[activeIndex] : null;

  const totalImages = project.gallery.length;

  const showPrevious = () => {
    setActiveIndex((current) => {
      if (current === null || totalImages === 0) return current;
      return (current - 1 + totalImages) % totalImages;
    });
  };

  const showNext = () => {
    setActiveIndex((current) => {
      if (current === null || totalImages === 0) return current;
      return (current + 1) % totalImages;
    });
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveIndex((current) => {
          if (current === null || totalImages === 0) return current;
          return (current - 1 + totalImages) % totalImages;
        });
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveIndex((current) => {
          if (current === null || totalImages === 0) return current;
          return (current + 1) % totalImages;
        });
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, totalImages]);

  return (
    <>
      <div className="gallery-grid">
        {project.gallery.map((image, index) => (
          <button
            type="button"
            className="gallery-image gallery-image-button"
            key={image.src}
            onClick={() => setActiveIndex(index)}
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

      {activeImage && activeIndex !== null && (
        <div
          className="photo-lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt}
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            className="photo-lightbox-close"
            aria-label="Close photo"
            onClick={() => setActiveIndex(null)}
          >
            ×
          </button>

          {totalImages > 1 && (
            <>
              <button
                type="button"
                className="photo-lightbox-nav photo-lightbox-prev"
                aria-label="Previous photo"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
              >
                ←
              </button>

              <button
                type="button"
                className="photo-lightbox-nav photo-lightbox-next"
                aria-label="Next photo"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
              >
                →
              </button>
            </>
          )}

          <div
            className="photo-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              width={2400}
              height={1800}
              sizes="100vw"
              className="photo-lightbox-full"
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "100%",
                maxHeight: "85vh",
                objectFit: "contain",
              }}
            />

            <p className="photo-lightbox-counter">
              {activeIndex + 1} / {totalImages}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
