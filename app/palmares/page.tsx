import { PageHeading } from "@/components/editorial";
import TrophyExplorer from "@/components/trophy-explorer";
export const metadata = { title: "Palmarès · USM Alger · Démo" };
export default function TrophiesPage() {
  return (
    <main id="main" className="wrap page-content">
      <PageHeading
        title="Les émotions ont une forme."
        description="Le futur musée des titres et des grandes soirées. Une direction visuelle, sans affirmation historique non vérifiée."
      />
      <TrophyExplorer />
    </main>
  );
}
