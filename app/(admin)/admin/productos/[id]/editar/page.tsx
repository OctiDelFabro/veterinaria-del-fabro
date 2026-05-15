import Link from "next/link";

import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminProductForm } from "@/components/admin/products/AdminProductForm";
import { getAdminProductById } from "@/lib/mock-admin-products";

export default async function AdminProductosEditarPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getAdminProductById(id);

  if (!product) {
    return (
      <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-veterinarian-violetDark">Producto no encontrado</h1>
        <p className="text-slate-700">El producto solicitado no existe en los datos mock.</p>
        <Link href="/admin/productos" className="text-sm font-medium text-veterinarian-blue hover:underline">
          Volver a gestión de productos
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Editar producto"
        description="Modificá la información visual del producto seleccionado."
      />
      <AdminProductForm mode="edit" initialData={product} />
    </div>
  );
}
