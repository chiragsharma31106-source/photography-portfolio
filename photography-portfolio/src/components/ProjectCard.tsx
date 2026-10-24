import Image from "next/image";
import Link from "next/link";
import type { PortfolioProject } from "@/data/projects";

export default function ProjectCard({ project, priority = false }: { project: PortfolioProject; priority?: boolean }) {
  return (
    <Link className="project-card" href={`/portfolio/${project.slug}`}>
      <div className="project-image-wrap">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          priority={priority}
          sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
          className="project-image"
        />
        <span className="image-arrow" aria-hidden="true">↗</span>
      </div>
      <div className="project-meta">
        <div><h3>{project.title}</h3><p>{project.category}</p></div>
        {project.year && <span>{project.year}</span>}
      </div>
    </Link>
  );
}
