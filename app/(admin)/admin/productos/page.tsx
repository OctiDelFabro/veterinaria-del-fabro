import Link from "next/link";

import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminProductTable } from "@/components/admin/products/AdminProductTable";
import { mockAdminProducts } from "@/lib/mock-admin-products";

export default function AdminProductosPage() {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Gestión de productos"
        description="Desde esta sección se podrán crear, editar, ocultar y administrar productos del catálogo."
      />

      <div className="flex justify-start">
        <Link
          href="/admin/productos/nuevo"
          className="rounded-md bg-veterinarian-violet px-4 py-2 text-sm font-medium text-white transition hover:bg-veterinarian-violetDark"
        >
          Nuevo producto
        </Link>
      </div>

      <p className="rounded-xl border border-veterinarian-blueSoft bg-veterinarian-blueSoft/50 px-4 py-3 text-sm text-slate-700">
        Los cambios todavía no se guardan en base de datos. Esta pantalla es una interfaz inicial.
      </p>

      <AdminProductTable products={mockAdminProducts} />
    </div>
  );
}
