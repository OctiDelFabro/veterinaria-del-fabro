import Link from "next/link";

import { toggleCategoryActive, toggleCategoryVisibility } from "@/app/(admin)/admin/categorias/actions";
import { AdminCategoryStatusBadge } from "@/components/admin/categories/AdminCategoryStatusBadge";
import type { AdminCategory } from "@/lib/categories";

type AdminCategoryTableProps = {
  categories: AdminCategory[];
  isPersistenceEnabled: boolean;
};

export function AdminCategoryTable({ categories, isPersistenceEnabled }: AdminCategoryTableProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="hidden overflow-x-auto md:block">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-600">
            <tr>
              <th className="px-4 py-3">Nombre</th><th className="px-4 py-3">Slug</th><th className="px-4 py-3">Productos asociados</th><th className="px-4 py-3">Visible</th><th className="px-4 py-3">Activa</th><th className="px-4 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {categories.map((category) => (
              <tr key={category.id}>
                <td className="px-4 py-3 font-medium text-slate-900">{category.name}</td>
                <td className="px-4 py-3">{category.slug}</td>
                <td className="px-4 py-3">{category.productCount}</td>
                <td className="px-4 py-3"><AdminCategoryStatusBadge label={category.visible ? "Visible" : "Oculta"} variant={category.visible ? "success" : "warning"} /></td>
                <td className="px-4 py-3"><AdminCategoryStatusBadge label={category.active ? "Activa" : "Inactiva"} variant={category.active ? "success" : "danger"} /></td>
                <td className="px-4 py-3"><div className="flex flex-wrap gap-2">
                  <Link href={`/admin/categorias/${category.id}/editar`} className="rounded-md bg-veterinarian-blue px-3 py-1.5 text-xs font-medium text-white transition hover:bg-veterinarian-violetDark">Editar</Link>
                  <form action={toggleCategoryVisibility.bind(null, category.id)}><button type="submit" disabled={!isPersistenceEnabled} className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 disabled:cursor-not-allowed disabled:opacity-60">{category.visible ? "Ocultar" : "Mostrar"}</button></form>
                  <form action={toggleCategoryActive.bind(null, category.id)}><button type="submit" disabled={!isPersistenceEnabled} className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 disabled:cursor-not-allowed disabled:opacity-60">{category.active ? "Desactivar" : "Activar"}</button></form>
                </div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-3 p-4 md:hidden">
        {categories.map((category) => (
          <article key={category.id} className="space-y-3 rounded-lg border border-slate-200 p-4">
            <div><h3 className="font-medium text-slate-900">{category.name}</h3><p className="text-sm text-slate-600">{category.slug}</p></div>
            <p className="text-sm text-slate-700">Productos asociados: <span className="font-semibold">{category.productCount}</span></p>
            <div className="flex flex-wrap gap-2"><AdminCategoryStatusBadge label={category.visible ? "Visible" : "Oculta"} variant={category.visible ? "success" : "warning"} /><AdminCategoryStatusBadge label={category.active ? "Activa" : "Inactiva"} variant={category.active ? "success" : "danger"} /></div>
            <div className="flex flex-wrap gap-2">
              <Link href={`/admin/categorias/${category.id}/editar`} className="rounded-md bg-veterinarian-blue px-3 py-1.5 text-xs font-medium text-white">Editar</Link>
              <form action={toggleCategoryVisibility.bind(null, category.id)}><button type="submit" disabled={!isPersistenceEnabled} className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 disabled:cursor-not-allowed disabled:opacity-60">{category.visible ? "Ocultar" : "Mostrar"}</button></form>
              <form action={toggleCategoryActive.bind(null, category.id)}><button type="submit" disabled={!isPersistenceEnabled} className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 disabled:cursor-not-allowed disabled:opacity-60">{category.active ? "Desactivar" : "Activar"}</button></form>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
