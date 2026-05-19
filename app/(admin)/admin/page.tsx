import { AdminActionCard } from "@/components/admin/AdminActionCard";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminStatCard } from "@/components/admin/AdminStatCard";
import { getAdminCategories } from "@/lib/categories";
import { getAdminProducts } from "@/lib/products";
import { getAdminServices } from "@/lib/services";

export default async function AdminHomePage() {
  const products = await getAdminProducts();
  const categories = await getAdminCategories();
  const services = await getAdminServices();

  return (
    <div className="space-y-8">
      <AdminPageHeader
        title="Panel administrador"
        description="Resumen inicial para gestionar la información pública de Veterinaria Del Fabro."
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <AdminStatCard title="Productos" value={String(products.length)} description="Productos cargados" />
        <AdminStatCard title="Categorías" value={String(categories.length)} description="Categorías cargadas" />
        <AdminStatCard title="Servicios" value={String(services.length)} description="Servicios cargados" />
        <AdminStatCard title="Estado del sitio" value="Vista pública activa" />
      </section>

      <p className="rounded-lg border border-veterinarian-blueSoft/70 bg-veterinarian-blueSoft/20 px-4 py-3 text-sm text-veterinarian-violetDark">Sesión administrativa activa.</p>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-veterinarian-violetDark">Accesos rápidos</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <AdminActionCard
            title="Gestionar productos"
            description="Accedé a la sección inicial para administración de productos del catálogo."
            href="/admin/productos"
          />
          <AdminActionCard
            title="Gestionar categorías"
            description="Accedé a la sección inicial para administración de categorías visibles."
            href="/admin/categorias"
          />
          <AdminActionCard
            title="Gestionar servicios"
            description="Accedé a la sección inicial para administración de servicios clínicos."
            href="/admin/servicios"
          />
          <AdminActionCard
            title="Datos del negocio"
            description="Accedé a la sección inicial para administración de la información pública."
            href="/admin/configuracion"
          />
        </div>
      </section>
    </div>
  );
}
