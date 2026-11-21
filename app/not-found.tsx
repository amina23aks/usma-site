import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="not-found wrap">
      <p className="eyebrow red">Hors-jeu.</p>
      <p className="error-number" aria-hidden="true">
        404
      </p>
      <h1>Cette page a quitté le terrain.</h1>
      <p className="muted">
        L’adresse est inconnue ou le contenu est indisponible. Retrouvez les
        nouvelles du club sur l’accueil.
      </p>
      <Link className="button" href="/">
        Retour à l’accueil
      </Link>
    </main>
  );
}
