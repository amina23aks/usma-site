import Link from "next/link";
import { stories, squad } from "@/lib/demo-content";

export default function Home() {
  return (
    <main id="main">
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="editorial-photo crowd hero-photo" aria-hidden="true" />
        <div className="wrap hero-copy">
          <p className="eyebrow">La capitale a ses couleurs.</p>
          <h1 id="hero-title">
            Rouge et noir,
            <br />
            toute la ville.
          </h1>
          <p>
            Des tribunes au terrain, une passion qui traverse les générations.
          </p>
          <Link className="button" href="/actualites">
            Au cœur du club
          </Link>
        </div>
        <span className="hero-credit">Image conceptuelle générée</span>
      </section>

      <section
        className="wrap match-section"
        id="matchs"
        aria-label="Résultats et prochaines rencontres de démonstration"
      >
        <div className="match-strip">
          <article>
            <p className="category">
              Dernier résultat <span className="demo-label">Démo</span>
            </p>
            <div className="match-teams">
              <strong>USMA</strong>
              <span className="score">2 – 1</span>
              <strong>Club A</strong>
            </div>
            <p className="small muted">Match terminé · Rencontre fictive</p>
          </article>
          <article>
            <p className="category">
              Prochain rendez-vous <span className="demo-label">Démo</span>
            </p>
            <div className="match-teams">
              <strong>USMA</strong>
              <span className="versus">VS</span>
              <strong>Club B</strong>
            </div>
            <p className="small muted">
              Samedi · 19h00, heure d’Alger · Stade à confirmer
            </p>
          </article>
        </div>
      </section>

      <section
        className="section wrap"
        id="actualites"
        aria-labelledby="news-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow red">Dans la vie du club</p>
            <h2 id="news-title">À la une.</h2>
          </div>
          <Link className="text-link" href="/actualites">
            Toutes les actualités
          </Link>
        </div>
        <div className="news-grid">
          {stories.slice(0, 3).map((story, index) => (
            <Link
              href={`/actualites/${story.slug}`}
              className={`news-card ${index === 0 ? "lead-story" : ""}`}
              key={story.title}
            >
              <div
                className={`editorial-photo ${story.image} news-photo`}
                role="img"
                aria-label={`Photographie conceptuelle — ${story.category}`}
              />
              <div className="card-body">
                <p className="category">{story.category}</p>
                <h3>{story.title}</h3>
                <p className="muted">{story.description}</p>
                <span className="small muted">Récit fictif · Édition démo</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section
        className="section dark-section"
        id="equipe"
        aria-labelledby="squad-title"
      >
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Un même maillot</p>
              <h2 id="squad-title">Équipe première.</h2>
            </div>
            <Link className="text-link" href="/equipe">
              Tout l’effectif
            </Link>
          </div>
          <div className="squad-grid">
            {squad.map((player) => (
              <Link
                className="player-card"
                key={player.number}
                href={`/equipe/${player.slug}`}
              >
                <div
                  className="editorial-photo player player-photo"
                  role="img"
                  aria-label="Portrait fictif généré pour le concept"
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
        </div>
      </section>

      <section
        className="section wrap"
        id="histoire"
        aria-labelledby="history-title"
      >
        <div className="feature-grid">
          <div
            className="editorial-photo crowd archive-photo"
            role="img"
            aria-label="Tribunes conceptuelles en noir et blanc"
          />
          <div className="feature-copy">
            <p className="eyebrow red">Histoire & transmission</p>
            <h2 id="history-title">
              Bien plus
              <br />
              que des souvenirs.
            </h2>
            <p className="muted">
              Des quartiers aux tribunes, les couleurs se portent et la passion
              se transmet. Un espace pour raconter les grandes périodes du club
              avec des archives et des témoignages vérifiés.
            </p>
            <Link className="button outline" href="/histoire">
              Explorer notre histoire
            </Link>
          </div>
        </div>
      </section>

      <section
        className="section dark-section"
        id="palmares"
        aria-labelledby="trophy-title"
      >
        <div className="wrap feature-grid">
          <div className="feature-copy">
            <p className="eyebrow">La mémoire rouge & noire</p>
            <h2 id="trophy-title">
              Les émotions
              <br />
              ont une forme.
            </h2>
            <p className="muted">
              Un musée à imaginer, une histoire à documenter. Les trophées et
              leurs récits prendront place ici, après vérification des sources.
            </p>
            <Link className="button outline light-button" href="/palmares">
              Explorer le musée
            </Link>
          </div>
          <div
            className="editorial-photo trophy feature-photo"
            role="img"
            aria-label="Trophée fictif dans une vitrine aux reflets rouges"
          />
        </div>
      </section>

      <section
        className="section wrap"
        id="boutique"
        aria-labelledby="shop-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow red">Porter les couleurs</p>
            <h2 id="shop-title">
              Rouge & noir,
              <br />
              au quotidien.
            </h2>
          </div>
          <Link className="text-link" href="/boutique">
            Découvrir la sélection
          </Link>
        </div>
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
                aria-label="Composition conceptuelle d’un maillot rouge et noir et d’une écharpe"
              />
              <div className="card-body">
                <p className="category">Collection concept</p>
                <h3>{name}</h3>
                <p className="small muted">
                  Boutique à venir · Visuel de démonstration
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="partners-section wrap"
        id="partenaires"
        aria-labelledby="partners-title"
      >
        <h2 id="partners-title">L’aventure se partage.</h2>
        <p className="muted">
          Emplacements de partenaires en attente d’approbation.
        </p>
        <div className="partner-grid">
          {["Partenaire A", "Partenaire B", "Partenaire C", "Partenaire D"].map(
            (name) => (
              <div className="partner-placeholder" key={name}>
                {name}
              </div>
            ),
          )}
        </div>
      </section>
    </main>
  );
}
