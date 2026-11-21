import Link from "next/link";
import { notFound } from "next/navigation";
import { fixtures } from "@/lib/demo-content";
export function generateStaticParams() {
  return fixtures.map((match) => ({ slug: match.slug }));
}
export default async function MatchPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const match = fixtures.find((item) => item.slug === slug);
  if (!match) notFound();
  return (
    <main id="main" className="wrap page-content">
      <div className="breadcrumbs">
        <Link href="/matchs">Matchs</Link>
        <span>/</span>
        <span>{match.competition}</span>
      </div>
      <section className="match-detail">
        <p className="eyebrow">Rencontre fictive · {match.status}</p>
        <div className="match-duel">
          <h1>USMA</h1>
          <strong className="score">
            {match.homeScore === null
              ? "VS"
              : `${match.homeScore} – ${match.awayScore}`}
          </strong>
          <h2>{match.opponent}</h2>
        </div>
        <p>{match.date}</p>
        <p className="small">{match.venue}</p>
      </section>
      <section className="article-body section">
        <h2>
          {match.status === "À venir"
            ? "Le prochain chapitre."
            : "Le récit du match."}
        </h2>
        <p>
          {match.status === "À venir"
            ? "La fiche rassemble les informations connues. Les indications non confirmées restent explicitement à confirmer."
            : "Une présentation pour le futur compte rendu. Le contenu et le score sont fictifs et servent à tester les états de la page."}
        </p>
        {match.homeScore === 0 && (
          <p className="information-note">
            Le résultat 0–0 est confirmé dans ce jeu de démonstration. Une
            information inconnue est indiquée comme telle.
          </p>
        )}
        <Link className="button outline" href="/matchs">
          Toutes les rencontres
        </Link>
      </section>
    </main>
  );
}
