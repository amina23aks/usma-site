"use client";
import { useState } from "react";
import { fixtures, squad, stories } from "@/lib/demo-content";

type DemoArticle = {
  id: number;
  title: string;
  introduction: string;
  published: boolean;
};
const initialArticles: DemoArticle[] = stories
  .slice(0, 3)
  .map((story, index) => ({
    id: index + 1,
    title: story.title,
    introduction: story.description,
    published: index !== 2,
  }));

export default function AdminPreview() {
  const [entered, setEntered] = useState(false);
  const [tab, setTab] = useState("Actualités");
  const [articles, setArticles] = useState(initialArticles);
  const [editing, setEditing] = useState<DemoArticle | null>(null);
  const [preview, setPreview] = useState<DemoArticle | null>(null);
  const [score, setScore] = useState({ home: 2, away: 1 });
  const [message, setMessage] = useState("");

  if (!entered)
    return (
      <section className="admin-entry form-panel">
        <p className="eyebrow red">Espace de démonstration</p>
        <h2>L’éditorial, côté coulisses.</h2>
        <p className="muted">
          Explorez la mise en page et simulez la publication. Cette maquette est
          accessible sans compte et conserve ses changements uniquement pendant
          votre visite sur cette page.
        </p>
        <button className="button" onClick={() => setEntered(true)}>
          Entrer dans la maquette
        </button>
      </section>
    );

  function saveArticle(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!editing) return;
    const data = new FormData(event.currentTarget);
    const title = String(data.get("title") || "").trim();
    const introduction = String(data.get("introduction") || "").trim();
    if (!title || !introduction) {
      setMessage("Ajoutez un titre et une introduction.");
      return;
    }
    const next = { ...editing, title, introduction };
    setArticles((current) =>
      editing.id === 0
        ? [
            ...current,
            { ...next, id: Math.max(0, ...current.map((item) => item.id)) + 1 },
          ]
        : current.map((item) => (item.id === editing.id ? next : item)),
    );
    setEditing(null);
    setMessage("Article enregistré dans cette maquette.");
  }

  function saveScore(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const home = Number(data.get("home"));
    const away = Number(data.get("away"));
    if (
      ![home, away].every(
        (value) => Number.isInteger(value) && value >= 0 && value <= 99,
      )
    ) {
      setMessage("Choisissez deux scores entiers entre 0 et 99.");
      return;
    }
    setScore({ home, away });
    setMessage(
      "Score enregistré dans la maquette. Les pages publiques utilisent encore leurs données statiques.",
    );
  }

  return (
    <div className="admin-grid">
      <aside className="admin-sidebar" aria-label="Sections de la maquette">
        {["Actualités", "Matchs", "Équipe"].map((item) => (
          <button
            key={item}
            aria-pressed={tab === item}
            onClick={() => {
              setTab(item);
              setEditing(null);
              setPreview(null);
              setMessage("");
            }}
          >
            {item}
          </button>
        ))}
        <button onClick={() => setEntered(false)}>Quitter la maquette</button>
      </aside>
      <div>
        <p className="information-note">
          Simulation locale : aucun compte, aucun accès à PostgreSQL. Le
          rechargement remet les données initiales.
        </p>
        <p role="status" className="form-status">
          {message}
        </p>
        {tab === "Actualités" && (
          <>
            <div className="admin-heading">
              <h2>Gestion des actualités</h2>
              <button
                className="button"
                onClick={() => {
                  setEditing({
                    id: 0,
                    title: "",
                    introduction: "",
                    published: false,
                  });
                  setPreview(null);
                }}
              >
                Nouvel article
              </button>
            </div>
            {editing ? (
              <form className="form-panel" onSubmit={saveArticle}>
                <label htmlFor="article-title">Titre</label>
                <input
                  id="article-title"
                  name="title"
                  defaultValue={editing.title}
                  required
                  maxLength={160}
                />
                <label htmlFor="article-introduction">Introduction</label>
                <textarea
                  id="article-introduction"
                  name="introduction"
                  defaultValue={editing.introduction}
                  required
                  maxLength={1000}
                  rows={5}
                />
                <div className="filter-row">
                  <button className="button" type="submit">
                    Enregistrer
                  </button>
                  <button
                    className="button outline"
                    type="button"
                    onClick={() => setEditing(null)}
                  >
                    Annuler
                  </button>
                </div>
              </form>
            ) : (
              <div className="table-scroll">
                <table>
                  <thead>
                    <tr>
                      <th>Titre</th>
                      <th>Statut</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {articles.map((article) => (
                      <tr key={article.id}>
                        <td>{article.title}</td>
                        <td>
                          <span
                            className={`status-label ${article.published ? "published" : ""}`}
                          >
                            {article.published ? "Publié" : "Brouillon"}
                          </span>
                        </td>
                        <td className="table-actions">
                          <button
                            onClick={() => {
                              setEditing(article);
                              setPreview(null);
                            }}
                          >
                            Modifier
                          </button>
                          <button
                            onClick={() => {
                              setArticles((current) =>
                                current.map((item) =>
                                  item.id === article.id
                                    ? { ...item, published: !item.published }
                                    : item,
                                ),
                              );
                              setPreview(null);
                              setMessage(
                                article.published
                                  ? "Article retiré de l’aperçu visiteur simulé."
                                  : "Article visible dans l’aperçu visiteur simulé.",
                              );
                            }}
                          >
                            {article.published ? "Dépublier" : "Publier"}
                          </button>
                          <button onClick={() => setPreview(article)}>
                            Vue visiteur
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {preview && (
              <section className="visitor-preview" aria-live="polite">
                <p className="eyebrow red">Aperçu visiteur simulé</p>
                {preview.published ? (
                  <>
                    <h2>{preview.title}</h2>
                    <p>{preview.introduction}</p>
                  </>
                ) : (
                  <>
                    <h2>Contenu indisponible.</h2>
                    <p className="muted">
                      Une page réelle renverra 404 tant que cet article est un
                      brouillon.
                    </p>
                  </>
                )}
              </section>
            )}
          </>
        )}
        {tab === "Matchs" && (
          <>
            <h2>Résultat de démonstration</h2>
            <p className="score admin-score">
              USMA {score.home} – {score.away} Club A
            </p>
            <form className="form-panel" onSubmit={saveScore}>
              <div className="score-fields">
                <div>
                  <label htmlFor="score-home">Buts USMA</label>
                  <input
                    id="score-home"
                    name="home"
                    type="number"
                    min={0}
                    max={99}
                    step={1}
                    required
                    defaultValue={score.home}
                  />
                </div>
                <div>
                  <label htmlFor="score-away">Buts Club A</label>
                  <input
                    id="score-away"
                    name="away"
                    type="number"
                    min={0}
                    max={99}
                    step={1}
                    required
                    defaultValue={score.away}
                  />
                </div>
              </div>
              <button className="button">Enregistrer le score</button>
            </form>
            <p className="small muted">
              {fixtures.length} rencontres fictives dans les pages publiques.
            </p>
          </>
        )}
        {tab === "Équipe" && (
          <>
            <h2>Aperçu de l’effectif</h2>
            <p className="muted">
              La gestion persistante des joueurs sera ajoutée avec la base et
              les droits d’administration.
            </p>
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>Joueur fictif</th>
                    <th>Numéro</th>
                    <th>Poste</th>
                  </tr>
                </thead>
                <tbody>
                  {squad.map((player) => (
                    <tr key={player.slug}>
                      <td>{player.name}</td>
                      <td>{player.number}</td>
                      <td>{player.position}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
