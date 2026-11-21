"use client";
import { useState } from "react";
import { stories } from "@/lib/demo-content";
import { StoryCard } from "./editorial";

export default function NewsArchive() {
  const [category, setCategory] = useState("Tous");
  const filtered = stories.filter(
    (story) => category === "Tous" || story.category === category,
  );
  return (
    <>
      <div
        className="filter-row"
        role="group"
        aria-label="Catégories d’actualités"
      >
        {["Tous", "Équipe première", "Supporters", "Le club"].map((item) => (
          <button
            key={item}
            className="filter-button"
            aria-pressed={category === item}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="archive-grid">
        {filtered.map((story) => (
          <StoryCard key={story.slug} story={story} />
        ))}
      </div>
      <p className="small muted result-count" aria-live="polite">
        {filtered.length} article{filtered.length > 1 ? "s" : ""} de
        démonstration
      </p>
    </>
  );
}
