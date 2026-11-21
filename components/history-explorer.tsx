"use client";
import { useState } from "react";
import Link from "next/link";
import { historyChapters } from "@/lib/demo-content";
export default function HistoryExplorer() {
  const [selected, setSelected] = useState(0);
  const chapter = historyChapters[selected];
  return (
    <div className="history-explorer">
      <div
        className="history-choices"
        role="group"
        aria-label="Chapitres de l’histoire"
      >
        {historyChapters.map((item, index) => (
          <button
            key={item.label}
            className="chapter-button"
            aria-pressed={index === selected}
            onClick={() => setSelected(index)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <section className="history-panel" aria-live="polite" aria-atomic="true">
        <div
          className={`editorial-photo ${chapter.image} history-photo`}
          role="img"
          aria-label="Image conceptuelle, future archive à valider"
        />
        <div>
          <p className="eyebrow red">{chapter.label}</p>
          <h2>{chapter.title}</h2>
          <p className="muted">{chapter.text}</p>
          <Link className="button outline" href="/palmares">
            Explorer le musée
          </Link>
        </div>
      </section>
    </div>
  );
}
