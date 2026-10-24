import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { getWhatsAppUrl } from "@/config/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return { title: project?.title ?? "Project", description: project?.description };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="project-detail section-shell">
      <Link className="back-link" href="/portfolio">← Back to all work</Link>
      <div className="detail-heading">
        <div><p className="eyebrow">{project.category.toUpperCase()}</p><h1>{project.title}<span className="brand-dot">.</span></h1></div>
        <p className="detail-description">{project.description}</p>
      </div>
      <div className="detail-cover">
        <Image src={project.coverImage} alt={project.title} fill priority sizes="100vw" />
      </div>
      <div className="project-facts">
        <div><span>Category</span><b>{project.category}</b></div>
        {project.year && <div><span>Year</span><b>{project.year}</b></div>}
        {project.location && <div><span>Location</span><b>{project.location}</b></div>}
        {project.client && <div><span>Client</span><b>{project.client}</b></div>}
      </div>
      <div className="gallery-grid">
        {project.gallery.map((image, index) => (
          <div className="gallery-image" key={image.src}>
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
          </div>
        ))}
      </div>
      <div className="next-project">
        <p className="eyebrow">KEEP EXPLORING</p>
        <Link href={`/portfolio/${nextProject.slug}`}><span>{nextProject.category}</span><h2>{nextProject.title} ↗</h2></Link>
      </div>
      <div className="detail-cta"><p>Have a similar project in mind?</p><a className="button" href={getWhatsAppUrl(`Hi! I'd like to enquire about a shoot similar to "${project.title}".`)} target="_blank" rel="noreferrer">Enquire about a shoot ↗</a></div>
    </article>
  );
}
