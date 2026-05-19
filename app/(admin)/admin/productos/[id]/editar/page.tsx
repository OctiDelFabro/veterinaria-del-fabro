import Link from "next/link";

import { updateProduct } from "@/app/(admin)/admin/productos/actions";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminProductForm } from "@/components/admin/products/AdminProductForm";
import { getAdminCategories } from "@/lib/categories";
import { getAdminProductById } from "@/lib/products";

const statusMessages: Record<string, string> = {
  duplicate: "Ya existe otro producto con ese nombre o slug.",
  config: "No hay base de datos configurada para guardar cambios.",
  "missing-fields": "Completá los campos obligatorios.",
  "invalid-stock": "El stock debe ser un número entero mayor o igual a cero.",
  "invalid-category": "Seleccioná una categoría válida.",
  "invalid-image": "La imagen debe ser JPG, PNG o WebP y pesar hasta 3 MB.",
  "image-error": "Ocurrió un error al subir la imagen.",
  error: "Ocurrió un error al guardar el producto.",
};

export default async function AdminProductosEditarPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ status?: string }>;
}) {
  const { id } = await params;
  const product = await getAdminProductById(id);

  if (!product) {
    return (
      <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-veterinarian-violetDark">Producto no encontrado</h1>
        <p className="text-slate-700">El producto solicitado no existe o no está disponible.</p>
        <Link href="/admin/productos" className="text-sm font-medium text-veterinarian-blue hover:underline">Volver a gestión de productos</Link>
      </div>
    );
  }

  const categories = await getAdminCategories();
  const isPersistenceEnabled = Boolean(process.env.DATABASE_URL);
  const paramsSearch = await searchParams;
  const statusMessage = paramsSearch?.status ? statusMessages[paramsSearch.status] : undefined;
  const updateProductWithId = updateProduct.bind(null, product.id);

  return (
    <div className="space-y-6">
      <AdminPageHeader title="Editar producto" description="Modificá los datos del producto seleccionado." />
      {statusMessage ? <p className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">{statusMessage}</p> : null}
      <AdminProductForm mode="edit" initialData={product} action={updateProductWithId} categories={categories} isPersistenceEnabled={isPersistenceEnabled} />
      <Link href="/admin/productos" className="inline-block text-sm font-medium text-veterinarian-blue hover:underline">Volver a gestión de productos</Link>
    </div>
  );
}
