import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminCategoryForm } from "@/components/admin/categories/AdminCategoryForm";
import { AdminCategoryTable } from "@/components/admin/categories/AdminCategoryTable";
import { getAdminCategories } from "@/lib/categories";

export default async function AdminCategoriasPage() {
  const categories = await getAdminCategories();
  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Gestión de categorías"
        description="Desde esta sección se podrán administrar las categorías visibles del catálogo."
      />

      <section className="rounded-xl border border-veterinarian-blueSoft/60 bg-veterinarian-blueSoft/20 p-5 shadow-sm">
        <p className="text-sm text-slate-700">
          Los cambios todavía no se guardan en base de datos. Esta pantalla es una interfaz inicial.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">Nueva categoría</h2>
        <AdminCategoryForm />
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">Categorías actuales</h2>
        <AdminCategoryTable categories={categories} />
      </section>
    </div>
  );
}
