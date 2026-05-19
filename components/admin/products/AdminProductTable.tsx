import Link from "next/link";

import { toggleProductActive, toggleProductVisibility } from "@/app/(admin)/admin/productos/actions";
import { AdminProductStatusBadge } from "@/components/admin/products/AdminProductStatusBadge";
import type { AdminProduct } from "@/lib/products";

type AdminProductTableProps = {
  products: AdminProduct[];
  isPersistenceEnabled: boolean;
};

export function AdminProductTable({ products, isPersistenceEnabled }: AdminProductTableProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
        <p className="text-sm font-medium text-slate-800">No hay productos cargados todavía.</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="hidden overflow-x-auto md:block">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-600">
            <tr><th className="px-4 py-3">Nombre</th><th className="px-4 py-3">Categoría</th><th className="px-4 py-3">Stock</th><th className="px-4 py-3">Estado de stock</th><th className="px-4 py-3">Visible</th><th className="px-4 py-3">Activo</th><th className="px-4 py-3">Acciones</th></tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-4 py-3 font-medium text-slate-900">{product.name}</td><td className="px-4 py-3">{product.category}</td><td className="px-4 py-3">{product.stock}</td>
                <td className="px-4 py-3"><AdminProductStatusBadge label={product.stock > 0 ? "Con stock" : "Sin stock"} variant={product.stock > 0 ? "success" : "neutral"} /></td>
                <td className="px-4 py-3"><AdminProductStatusBadge label={product.visible ? "Visible" : "Oculto"} variant={product.visible ? "success" : "warning"} /></td>
                <td className="px-4 py-3"><AdminProductStatusBadge label={product.active ? "Activo" : "Inactivo"} variant={product.active ? "success" : "danger"} /></td>
                <td className="px-4 py-3"><div className="flex flex-wrap gap-2">
                  <Link href={`/admin/productos/${product.id}/editar`} className="rounded-md bg-veterinarian-blue px-3 py-1.5 text-xs font-medium text-white transition hover:bg-veterinarian-violetDark">Editar</Link>
                  <form action={toggleProductVisibility.bind(null, product.id)}><button type="submit" disabled={!isPersistenceEnabled} className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 disabled:cursor-not-allowed disabled:opacity-60">{product.visible ? "Ocultar" : "Mostrar"}</button></form>
                  <form action={toggleProductActive.bind(null, product.id)}><button type="submit" disabled={!isPersistenceEnabled} className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 disabled:cursor-not-allowed disabled:opacity-60">{product.active ? "Desactivar" : "Activar"}</button></form>
                </div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-3 p-4 md:hidden">
        {products.map((product) => (
          <article key={product.id} className="space-y-3 rounded-lg border border-slate-200 p-4">
            <div><h3 className="font-medium text-slate-900">{product.name}</h3><p className="text-sm text-slate-600">{product.category}</p></div>
            <p className="text-sm text-slate-700">Stock: <span className="font-semibold">{product.stock}</span></p>
            <div className="flex flex-wrap gap-2">
              <AdminProductStatusBadge label={product.stock > 0 ? "Con stock" : "Sin stock"} variant={product.stock > 0 ? "success" : "neutral"} />
              <AdminProductStatusBadge label={product.visible ? "Visible" : "Oculto"} variant={product.visible ? "success" : "warning"} />
              <AdminProductStatusBadge label={product.active ? "Activo" : "Inactivo"} variant={product.active ? "success" : "danger"} />
            </div>
            <div className="flex flex-wrap gap-2">
              <Link href={`/admin/productos/${product.id}/editar`} className="rounded-md bg-veterinarian-blue px-3 py-1.5 text-xs font-medium text-white">Editar</Link>
              <form action={toggleProductVisibility.bind(null, product.id)}><button type="submit" disabled={!isPersistenceEnabled} className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 disabled:cursor-not-allowed disabled:opacity-60">{product.visible ? "Ocultar" : "Mostrar"}</button></form>
              <form action={toggleProductActive.bind(null, product.id)}><button type="submit" disabled={!isPersistenceEnabled} className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 disabled:cursor-not-allowed disabled:opacity-60">{product.active ? "Desactivar" : "Activar"}</button></form>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
