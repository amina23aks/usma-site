"use client";
import Link from "next/link";
import { useState } from "react";
import { fixtures } from "@/lib/demo-content";
export default function MatchList() {
  const [status, setStatus] = useState("À venir");
  return (
    <>
      <div className="filter-row" role="group" aria-label="État des rencontres">
        {["À venir", "Terminé"].map((item) => (
          <button
            key={item}
            className="filter-button"
            aria-pressed={status === item}
            onClick={() => setStatus(item)}
          >
            {item === "Terminé" ? "Résultats" : item}
          </button>
        ))}
      </div>
      <div className="fixture-list">
        {fixtures
          .filter((item) => item.status === status)
          .map((match) => (
            <Link
              className="fixture-row"
              key={match.slug}
              href={`/matchs/${match.slug}`}
            >
              <div>
                <span className="category">{match.competition}</span>
                <p className="small muted">{match.date}</p>
              </div>
              <h2>
                USMA <span className="muted">/</span> {match.opponent}
              </h2>
              <div>
                <strong className="score">
                  {match.homeScore === null
                    ? "À venir"
                    : `${match.homeScore} – ${match.awayScore}`}
                </strong>
                <span className="small muted">{match.venue}</span>
              </div>
              <span className="fixture-detail">Détails</span>
            </Link>
          ))}
      </div>
    </>
  );
}
