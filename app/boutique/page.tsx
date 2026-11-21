import Link from "next/link";
import { PageHeading } from "@/components/editorial";
export const metadata = { title: "Boutique · USM Alger · Démo" };
export default function ShopPage() {
  return (
    <main id="main" className="wrap page-content">
      <PageHeading
        title="Les couleurs au quotidien."
        description="Une sélection conceptuelle de vêtements et d’accessoires. Le magasin indépendant sera relié lorsqu’il sera disponible."
      />
      <p className="information-note">
        Aperçu visuel. La commande, les prix, les tailles et le paiement seront
        disponibles dans le futur magasin.
      </p>
      <div className="product-grid">
        {[
          "Le maillot essentiel",
          "L’écharpe des tribunes",
          "La collection supporter",
        ].map((name) => (
          <article className="product-card" key={name}>
            <div
              className="editorial-photo merchandise product-photo"
              role="img"
              aria-label="Maillot et écharpe conceptuels, image générée partagée"
            />
            <div className="card-body">
              <p className="category">Collection concept</p>
              <h2>{name}</h2>
              <p className="muted">
                Photographie et fiche produit définitives à préparer.
              </p>
              <span className="availability-label">Boutique à venir</span>
            </div>
          </article>
        ))}
      </div>
      <section className="shop-bottom">
        <h2>Le maillot rassemble.</h2>
        <p className="muted">
          Découvrez aussi les visages de l’équipe et les récits du club.
        </p>
        <Link className="button outline" href="/equipe">
          Découvrir l’équipe
        </Link>
      </section>
    </main>
  );
}
