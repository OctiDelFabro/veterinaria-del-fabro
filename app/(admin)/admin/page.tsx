import { AdminActionCard } from "@/components/admin/AdminActionCard";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminStatCard } from "@/components/admin/AdminStatCard";

export default function AdminHomePage() {
  return (
    <div className="space-y-8">
      <AdminPageHeader
        title="Panel administrador"
        description="Resumen inicial para gestionar la información pública de Veterinaria Del Fabro."
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <AdminStatCard title="Productos" value="12" description="Productos mock" />
        <AdminStatCard title="Categorías" value="8" description="Categorías cargadas" />
        <AdminStatCard title="Servicios" value="3" description="Servicios iniciales" />
        <AdminStatCard title="Estado del sitio" value="Vista pública activa" />
      </section>

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
