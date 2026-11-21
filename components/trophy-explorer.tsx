"use client";
import { useState } from "react";
import { trophyStories } from "@/lib/demo-content";
export default function TrophyExplorer() {
  const [selected, setSelected] = useState(0);
  const trophy = trophyStories[selected];
  return (
    <>
      <section className="trophy-feature">
        <div
          className="editorial-photo trophy trophy-photo"
          role="img"
          aria-label="Trophée fictif, image générée"
        />
        <div className="trophy-copy" aria-live="polite" aria-atomic="true">
          <p className="eyebrow">{trophy.label} · Concept</p>
          <h2>{trophy.title}</h2>
          <p>{trophy.text}</p>
          <span className="small">
            Années, titres et chiffres à vérifier avant publication.
          </span>
        </div>
      </section>
      <div
        className="trophy-choices"
        role="group"
        aria-label="Catégories du musée"
      >
        {trophyStories.map((item, index) => (
          <button
            key={item.label}
            aria-pressed={selected === index}
            className="trophy-choice"
            onClick={() => setSelected(index)}
          >
            <strong>{item.label}</strong>
            <span className="small muted">Découvrir le récit</span>
          </button>
        ))}
      </div>
    </>
  );
}
