import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminProductForm } from "@/components/admin/products/AdminProductForm";
import { AdminProductTable } from "@/components/admin/products/AdminProductTable";
import { createProduct } from "@/app/(admin)/admin/productos/actions";
import { getAdminCategories } from "@/lib/categories";
import { getAdminProducts } from "@/lib/products";

const statusMessages: Record<string, string> = {
  created: "Producto creado correctamente.",
  updated: "Producto actualizado correctamente.",
  config: "No hay base de datos configurada para guardar cambios.",
  "missing-fields": "Completá los campos obligatorios.",
  "invalid-stock": "El stock debe ser un número entero mayor o igual a cero.",
  "invalid-category": "Seleccioná una categoría válida.",
  duplicate: "Ya existe un producto con ese nombre o slug.",
  "invalid-image": "La imagen debe ser JPG, PNG o WebP y pesar hasta 3 MB.",
  "image-error": "Ocurrió un error al subir la imagen.",
  "not-found": "El producto solicitado no existe.",
  error: "Ocurrió un error al guardar el producto.",
};

const getStatusClassName = (status?: string) => {
  if (!status) return "border-slate-200 bg-white text-slate-700";
  if (["created", "updated", "success"].includes(status)) return "border-emerald-200 bg-emerald-50 text-emerald-900";
  if (status === "config") return "border-sky-200 bg-sky-50 text-sky-900";
  return "border-rose-200 bg-rose-50 text-rose-900";
};

export default async function AdminProductosPage({ searchParams }: { searchParams?: Promise<{ status?: string }> }) {
  const params = await searchParams;
  const products = await getAdminProducts();
  const categories = await getAdminCategories();
  const isPersistenceEnabled = Boolean(process.env.DATABASE_URL);
  const statusMessage = params?.status ? statusMessages[params.status] : undefined;

  return (
    <div className="space-y-6">
      <AdminPageHeader title="Gestión de productos" description="Creá y administrá los productos del catálogo público." />
      <p className="rounded-xl border border-veterinarian-blueSoft bg-veterinarian-blueSoft/50 px-4 py-3 text-sm text-slate-700">
        {isPersistenceEnabled ? "Los cambios se guardan en la base de datos." : "Modo visual: no hay DATABASE_URL configurada en este entorno."}
      </p>
      {statusMessage ? <p className={`rounded-xl border px-4 py-3 text-sm ${getStatusClassName(params?.status)}`}>{statusMessage}</p> : null}
      <AdminProductForm mode="create" action={createProduct} categories={categories} isPersistenceEnabled={isPersistenceEnabled} />
      <AdminProductTable products={products} isPersistenceEnabled={isPersistenceEnabled} />
    </div>
  );
}
