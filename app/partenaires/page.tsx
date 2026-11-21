import Link from "next/link";
import { PageHeading } from "@/components/editorial";
export const metadata = { title: "Partenaires · USM Alger · Démo" };
export default function PartnersPage() {
  return (
    <main id="main" className="wrap page-content">
      <PageHeading
        title="Ensemble, plus loin."
        description="Un espace pour celles et ceux qui accompagnent l’aventure. Les emplacements restent neutres jusqu’à l’approbation des partenaires."
      />
      <div className="partner-grid partners-full">
        {[
          "Partenaire A",
          "Partenaire B",
          "Partenaire C",
          "Partenaire D",
          "Partenaire E",
          "Partenaire F",
        ].map((name) => (
          <div className="partner-placeholder" key={name}>
            {name}
          </div>
        ))}
      </div>
      <section className="feature-grid section">
        <div
          className="editorial-photo crowd feature-photo"
          role="img"
          aria-label="Tribunes fictives, image conceptuelle"
        />
        <div>
          <p className="eyebrow red">Une ambition partagée</p>
          <h2>Faire partie de l’histoire.</h2>
          <p className="muted">
            Cette présentation accueillera les partenariats et les coordonnées
            approuvés par le club.
          </p>
          <Link className="button" href="/contact">
            Prendre contact
          </Link>
        </div>
      </section>
    </main>
  );
}
