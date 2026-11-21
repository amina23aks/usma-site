import { PageHeading } from "@/components/editorial";
import HistoryExplorer from "@/components/history-explorer";
export const metadata = { title: "Histoire · USM Alger · Démo" };
export default function HistoryPage() {
  return (
    <main id="main" className="wrap page-content">
      <PageHeading
        title="La mémoire vive."
        description="Des quartiers aux tribunes, un récit qui traverse les générations. Un parcours conceptuel à enrichir avec des archives vérifiées."
      />
      <HistoryExplorer />
    </main>
  );
}
