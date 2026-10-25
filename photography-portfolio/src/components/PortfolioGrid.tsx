
"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { categories, projects } from "@/data/projects";
import type { PhotographyCategory } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

function PortfolioGridContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [active, setActive] = useState<string>("All Work");

  useEffect(() => {
    const validCategory = categories.find(
      (category) => category === categoryParam
    );

    setActive(validCategory ?? "All Work");
  }, [categoryParam]);

  const filtered = useMemo(
    () =>
      active === "All Work"
        ? projects
        : projects.filter((project) => project.category === active),
    [active]
  );

  return (
    <>
      <div className="filter-list" aria-label="Filter projects">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            className={`filter-button ${
              active === category ? "active" : ""
            }`}
            onClick={() => setActive(category as "All Work" | PhotographyCategory)}
            aria-pressed={active === category}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="empty-state">
          Projects coming soon. Check back shortly.
        </p>
      )}
    </>
  );
}

export default function PortfolioGrid() {
  return (
    <Suspense fallback={<p>Loading portfolio...</p>}>
      <PortfolioGridContent />
    </Suspense>
  );
}
