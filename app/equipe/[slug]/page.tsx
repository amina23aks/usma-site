import Link from "next/link";
import { notFound } from "next/navigation";
import { squad } from "@/lib/demo-content";
export function generateStaticParams() {
  return squad.map((player) => ({ slug: player.slug }));
}
export default async function PlayerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const player = squad.find((item) => item.slug === slug);
  if (!player) notFound();
  return (
    <main id="main" className="wrap page-content">
      <div className="breadcrumbs">
        <Link href="/equipe">Équipe</Link>
        <span>/</span>
        <span>{player.name}</span>
      </div>
      <div className="profile-grid">
        <div
          className="editorial-photo player profile-photo"
          role="img"
          aria-label="Portrait fictif généré pour la démonstration"
        />
        <div>
          <p className="eyebrow red">Équipe première · Profil fictif</p>
          <span className="profile-number">{player.number}</span>
          <h1>{player.name}</h1>
          <p className="profile-role">{player.position}</p>
          <p className="muted">
            Un visage du collectif, une énergie au service du maillot. La
            biographie du joueur sera renseignée à partir des informations
            validées par le club.
          </p>
          <dl className="profile-facts">
            <div>
              <dt>Poste</dt>
              <dd>{player.position}</dd>
            </div>
            <div>
              <dt>Numéro</dt>
              <dd>{player.number}</dd>
            </div>
            <div>
              <dt>Biographie</dt>
              <dd>À renseigner</dd>
            </div>
          </dl>
          <Link className="button outline" href="/equipe">
            Tout l’effectif
          </Link>
        </div>
      </div>
    </main>
  );
}
