import Link from "next/link";
import { PageHeading } from "@/components/editorial";
import ContactForm from "@/components/contact-form";
export const metadata = { title: "Contact · USM Alger · Démo" };
export default function ContactPage() {
  return (
    <main id="main" className="wrap page-content">
      <PageHeading
        title="On se parle ?"
        description="Une idée, une question, un projet à partager. Un aperçu du futur espace de contact."
      />
      <div className="contact-grid">
        <div>
          <h2>Le club, ses projets et vous.</h2>
          <p className="muted">
            Les coordonnées et les destinataires seront ajoutés après
            validation. Vous pouvez tester le formulaire et sa confirmation sur
            cette page.
          </p>
          <Link className="text-link" href="/partenaires">
            Découvrir l’espace partenaires
          </Link>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
