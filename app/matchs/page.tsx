import { PageHeading } from "@/components/editorial";
import MatchList from "@/components/match-list";
export const metadata = { title: "Matchs · USM Alger · Démo" };
export default function MatchesPage() {
  return (
    <main id="main" className="wrap page-content">
      <PageHeading
        title="Les rendez-vous."
        description="Le calendrier, les résultats et l’attente du prochain coup d’envoi. Toutes les rencontres sont fictives."
      />
      <MatchList />
    </main>
  );
}
