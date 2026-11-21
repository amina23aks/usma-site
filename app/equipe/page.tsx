import Link from "next/link";
import { PageHeading } from "@/components/editorial";
import { squad } from "@/lib/demo-content";
export const metadata = { title: "Équipe · USM Alger · Démo" };
export default function SquadPage() {
  return (
    <main id="main" className="wrap page-content">
      <PageHeading
        title="Un même maillot."
        description="Les visages du collectif. Identités fictives et portrait conceptuel partagé pour cette démonstration."
      />
      {["Gardiens", "Défenseurs", "Milieux", "Attaquants"].map((group) => (
        <section className="squad-group" key={group}>
          <h2>{group}</h2>
          <div className="squad-grid">
            {squad
              .filter((player) => player.group === group)
              .map((player) => (
                <Link
                  className="player-card light-player"
                  key={player.slug}
                  href={`/equipe/${player.slug}`}
                >
                  <div
                    className="editorial-photo player player-photo"
                    role="img"
                    aria-label="Portrait généré, personnage fictif"
                  >
                    <span className="shirt-number">{player.number}</span>
                  </div>
                  <div className="player-copy">
                    <h3>{player.name}</h3>
                    <p className="small muted">{player.position}</p>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      ))}
    </main>
  );
}
