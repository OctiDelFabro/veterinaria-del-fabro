import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminCategoryForm } from "@/components/admin/categories/AdminCategoryForm";
import { AdminCategoryTable } from "@/components/admin/categories/AdminCategoryTable";
import { createCategory } from "@/app/(admin)/admin/categorias/actions";
import { getAdminCategories } from "@/lib/categories";

const statusMessages: Record<string, string> = {
  created: "Categoría creada correctamente.",
  updated: "Categoría actualizada correctamente.",
  config: "No hay base de datos configurada para guardar cambios.",
  "missing-fields": "Completá los campos obligatorios.",
  duplicate: "Ya existe una categoría con ese nombre o slug.",
  "not-found": "La categoría solicitada no existe.",
  error: "Ocurrió un error al guardar la categoría.",
};

const getStatusClassName = (status?: string) => {
  if (!status) return "border-slate-200 bg-white text-slate-700";
  if (["created", "updated", "success"].includes(status)) return "border-emerald-200 bg-emerald-50 text-emerald-900";
  if (status === "config") return "border-sky-200 bg-sky-50 text-sky-900";
  return "border-rose-200 bg-rose-50 text-rose-900";
};

export default async function AdminCategoriasPage({
  searchParams,
}: {
  searchParams?: Promise<{ status?: string }>;
}) {
  const params = await searchParams;
  const categories = await getAdminCategories();
  const isPersistenceEnabled = Boolean(process.env.DATABASE_URL);
  const statusMessage = params?.status ? statusMessages[params.status] : undefined;

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Gestión de categorías"
        description="Desde esta sección se podrán administrar las categorías visibles del catálogo."
      />

      {statusMessage ? (
        <section className={`rounded-xl border p-5 shadow-sm ${getStatusClassName(params?.status)}`}>
          <p className="text-sm text-slate-700">{statusMessage}</p>
        </section>
      ) : null}

      <section className={`rounded-xl border p-5 shadow-sm ${getStatusClassName(params?.status)}`}>
        <p className="text-sm text-slate-700">
          {isPersistenceEnabled
            ? "Los cambios se guardan en la base de datos."
            : "Modo visual: no hay DATABASE_URL configurada en este entorno."}
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">Nueva categoría</h2>
        <AdminCategoryForm action={createCategory} isPersistenceEnabled={isPersistenceEnabled} />
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">Categorías actuales</h2>
        <AdminCategoryTable categories={categories} isPersistenceEnabled={isPersistenceEnabled} />
      </section>
    </div>
  );
}
