import Link from "next/link";
import type { stories } from "@/lib/demo-content";

export function PageHeading({
  title,
  description,
  label = "USM Alger · Concept",
}: {
  title: string;
  description: string;
  label?: string;
}) {
  return (
    <div className="page-heading">
      <p className="eyebrow red">{label}</p>
      <h1>{title}</h1>
      <p className="muted">{description}</p>
    </div>
  );
}

export function StoryCard({ story }: { story: (typeof stories)[number] }) {
  return (
    <Link className="news-card archive-card" href={`/actualites/${story.slug}`}>
      <div
        className={`editorial-photo ${story.image} news-photo`}
        role="img"
        aria-label={`Image générée — ${story.category}`}
      />
      <div className="card-body">
        <p className="category">{story.category}</p>
        <h2>{story.title}</h2>
        <p className="muted">{story.description}</p>
        <span className="small muted">{story.date}</span>
      </div>
    </Link>
  );
}
