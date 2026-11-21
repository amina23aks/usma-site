import Link from "next/link";
import { notFound } from "next/navigation";
import { stories } from "@/lib/demo-content";
import { StoryCard } from "@/components/editorial";
export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = stories.find((item) => item.slug === slug);
  if (!story) notFound();
  return (
    <main id="main" className="wrap page-content">
      <div className="breadcrumbs">
        <Link href="/">Accueil</Link>
        <span>/</span>
        <Link href="/actualites">Actualités</Link>
        <span>/</span>
        <span>{story.category}</span>
      </div>
      <article className="article-body">
        <p className="category">{story.category}</p>
        <h1>{story.title}</h1>
        <p className="small muted">{story.date}</p>
        <p className="article-intro">{story.description}</p>
        <figure>
          <div
            className={`editorial-photo ${story.image} article-photo`}
            role="img"
            aria-label="Photographie conceptuelle générée"
          />
          <figcaption>
            Image générée pour ce prototype. Récit fictif.
          </figcaption>
        </figure>
        {story.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <blockquote>
          Les couleurs se portent.
          <br />
          La passion se transmet.
        </blockquote>
      </article>
      <section className="section">
        <h2>À lire aussi.</h2>
        <div className="archive-grid">
          {stories
            .filter((item) => item.slug !== slug)
            .slice(0, 3)
            .map((item) => (
              <StoryCard key={item.slug} story={item} />
            ))}
        </div>
      </section>
    </main>
  );
}
