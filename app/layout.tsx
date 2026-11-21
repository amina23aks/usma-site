import type { Metadata } from "next";
import Link from "next/link";
import localFont from "next/font/local";
import "./globals.css";

const headings = localFont({
  src: [
    { path: "./fonts/BarlowCondensed-Bold.ttf", weight: "700" },
    { path: "./fonts/BarlowCondensed-ExtraBold.ttf", weight: "800" },
  ],
  variable: "--font-headings",
  display: "swap",
});

const bodyFont = localFont({
  src: [
    { path: "./fonts/SourceSans3-Regular.ttf", weight: "400" },
    { path: "./fonts/SourceSans3-SemiBold.ttf", weight: "600" },
  ],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "USM Alger — Rouge et noir, toute la ville · Démo",
  description:
    "Un concept de site pour USM Alger : actualités, rendez-vous, équipe et mémoire du club. Contenu fictif de démonstration.",
  robots: { index: false, follow: false },
};

const navigation = [
  ["actualites", "Actualités"],
  ["matchs", "Matchs"],
  ["equipe", "Équipe"],
  ["histoire", "Histoire"],
  ["palmares", "Palmarès"],
  ["boutique", "Boutique"],
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      dir="ltr"
      className={`${headings.variable} ${bodyFont.variable}`}
    >
      <body>
        <a className="skip-link" href="#main">
          Aller au contenu
        </a>
        <div className="prototype-notice">
          Concept indépendant · Images générées, personnes et contenus fictifs
        </div>
        <header className="site-header">
          <div className="wrap header-inner">
            <Link className="brand" href="/" aria-label="USM Alger, accueil">
              USM <span>ALGER</span>
              <small>LE CLUB DE LA CAPITALE · CONCEPT</small>
            </Link>
            <nav className="desktop-nav" aria-label="Navigation principale">
              {navigation.map(([id, label]) => (
                <Link href={`/#${id}`} key={id}>
                  {label}
                </Link>
              ))}
            </nav>
            <details className="mobile-menu">
              <summary>Menu</summary>
              <nav aria-label="Navigation mobile">
                {navigation.map(([id, label]) => (
                  <Link href={`/#${id}`} key={id}>
                    {label}
                  </Link>
                ))}
              </nav>
            </details>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="wrap footer-grid">
            <div>
              <Link className="brand" href="/">
                USM <span>ALGER</span>
              </Link>
              <p>
                Une ville, des générations,
                <br />
                une même passion.
              </p>
            </div>
            <div>
              <h2>Explorer</h2>
              <Link href="/#actualites">Actualités</Link>
              <Link href="/#equipe">Équipe première</Link>
              <Link href="/#histoire">Histoire du club</Link>
            </div>
            <div>
              <h2>Le projet</h2>
              <Link href="/#partenaires">Partenaires</Link>
              <Link href="/#boutique">Boutique à venir</Link>
              <p className="small">
                Identité provisoire.
                <br />
                Aucune affiliation officielle.
              </p>
            </div>
          </div>
          <div className="wrap footer-bottom">
            <span>Prototype indépendant · Contenus de démonstration</span>
            <Link href="/#top">Retour en haut</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
