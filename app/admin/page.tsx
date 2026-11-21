import { PageHeading } from "@/components/editorial";
import AdminPreview from "@/components/admin-preview";
export const metadata = { title: "Administration — maquette · USM Alger" };
export default function AdminPage() {
  return (
    <main id="main" className="wrap page-content">
      <PageHeading
        title="Le club, côté coulisses."
        description="Une maquette interactive pour valider les écrans d’administration avant leur connexion à la base et à l’authentification."
      />
      <AdminPreview />
    </main>
  );
}
