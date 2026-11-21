import NewsArchive from "@/components/news-archive";
import { PageHeading } from "@/components/editorial";
export const metadata = { title: "Actualités · USM Alger · Démo" };
export default function NewsPage() {
  return (
    <main id="main" className="wrap page-content">
      <PageHeading
        title="Au rythme du club."
        description="Le terrain, les tribunes et les histoires qui font battre Alger. Articles fictifs de démonstration."
      />
      <NewsArchive />
    </main>
  );
}
