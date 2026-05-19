import Link from "next/link";

import { updateCategory } from "@/app/(admin)/admin/categorias/actions";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminCategoryForm } from "@/components/admin/categories/AdminCategoryForm";
import { getAdminCategoryById } from "@/lib/categories";

const statusMessages: Record<string, string> = {
  duplicate: "Ya existe otra categoría con ese nombre o slug.",
  config: "No hay base de datos configurada para guardar cambios.",
  "missing-fields": "Completá los campos obligatorios.",
  error: "Ocurrió un error al guardar la categoría.",
};

const getStatusClassName = (status?: string) => {
  if (!status) return "border-slate-200 bg-white text-slate-700";
  if (["created", "updated", "success"].includes(status)) return "border-emerald-200 bg-emerald-50 text-emerald-900";
  if (status === "config") return "border-sky-200 bg-sky-50 text-sky-900";
  return "border-rose-200 bg-rose-50 text-rose-900";
};

export default async function AdminCategoriaEditarPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ status?: string }>;
}) {
  const { id } = await params;
  const query = await searchParams;
  const category = await getAdminCategoryById(id);
  const isPersistenceEnabled = Boolean(process.env.DATABASE_URL);

  if (!category) {
    return (
      <div className="space-y-4">
        <h1 className="text-xl font-semibold text-slate-900">Categoría no encontrada</h1>
        <p className="text-sm text-slate-700">La categoría solicitada no existe o no está disponible.</p>
        <Link href="/admin/categorias" className="text-sm font-medium text-veterinarian-blue hover:underline">
          Volver a categorías
        </Link>
      </div>
    );
  }

  const statusMessage = query?.status ? statusMessages[query.status] : undefined;
  const updateCategoryWithId = updateCategory.bind(null, category.id);

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Editar categoría"
        description="Modificá los datos de la categoría seleccionada."
      />

      {statusMessage ? (
        <section className={`rounded-xl border p-5 shadow-sm ${getStatusClassName(query?.status)}`}>
          <p className="text-sm text-slate-700">{statusMessage}</p>
        </section>
      ) : null}

      <AdminCategoryForm
        initialData={category}
        action={updateCategoryWithId}
        isPersistenceEnabled={isPersistenceEnabled}
      />
    </div>
  );
}
