import Link from "next/link";

import { toggleServiceActive, toggleServiceVisibility } from "@/app/(admin)/admin/servicios/actions";
import { AdminServiceStatusBadge } from "@/components/admin/services/AdminServiceStatusBadge";
import type { AdminService } from "@/lib/services";

type AdminServiceTableProps = {
  services: AdminService[];
  isPersistenceEnabled: boolean;
};

export function AdminServiceTable({ services, isPersistenceEnabled }: AdminServiceTableProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="hidden overflow-x-auto md:block">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-600">
            <tr>
              <th className="px-4 py-3">Nombre</th><th className="px-4 py-3">Slug</th><th className="px-4 py-3">Visible</th><th className="px-4 py-3">Estado</th><th className="px-4 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {services.map((service) => (
              <tr key={service.id}>
                <td className="px-4 py-3 font-medium text-slate-900">{service.name}</td>
                <td className="px-4 py-3">{service.slug}</td>
                <td className="px-4 py-3"><AdminServiceStatusBadge label={service.visible ? "Visible" : "Oculto"} variant={service.visible ? "success" : "warning"} /></td>
                <td className="px-4 py-3"><AdminServiceStatusBadge label={service.active ? "Activo" : "Inactivo"} variant={service.active ? "success" : "danger"} /></td>
                <td className="px-4 py-3"><div className="flex flex-wrap gap-2">
                  <Link href={`/admin/servicios/${service.id}/editar`} className="rounded-md bg-veterinarian-blue px-3 py-1.5 text-xs font-medium text-white transition hover:bg-veterinarian-violetDark">Editar</Link>
                  <form action={toggleServiceVisibility.bind(null, service.id)}><button type="submit" disabled={!isPersistenceEnabled} className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 disabled:cursor-not-allowed disabled:opacity-60">{service.visible ? "Ocultar" : "Mostrar"}</button></form>
                  <form action={toggleServiceActive.bind(null, service.id)}><button type="submit" disabled={!isPersistenceEnabled} className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 disabled:cursor-not-allowed disabled:opacity-60">{service.active ? "Desactivar" : "Activar"}</button></form>
                </div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-3 p-4 md:hidden">
        {services.map((service) => (
          <article key={service.id} className="space-y-3 rounded-lg border border-slate-200 p-4">
            <div><h3 className="font-medium text-slate-900">{service.name}</h3><p className="text-sm text-slate-600">{service.slug}</p></div>
            <div className="flex flex-wrap gap-2"><AdminServiceStatusBadge label={service.visible ? "Visible" : "Oculto"} variant={service.visible ? "success" : "warning"} /><AdminServiceStatusBadge label={service.active ? "Activo" : "Inactivo"} variant={service.active ? "success" : "danger"} /></div>
            <div className="flex flex-wrap gap-2">
              <Link href={`/admin/servicios/${service.id}/editar`} className="rounded-md bg-veterinarian-blue px-3 py-1.5 text-xs font-medium text-white">Editar</Link>
              <form action={toggleServiceVisibility.bind(null, service.id)}><button type="submit" disabled={!isPersistenceEnabled} className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 disabled:cursor-not-allowed disabled:opacity-60">{service.visible ? "Ocultar" : "Mostrar"}</button></form>
              <form action={toggleServiceActive.bind(null, service.id)}><button type="submit" disabled={!isPersistenceEnabled} className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 disabled:cursor-not-allowed disabled:opacity-60">{service.active ? "Desactivar" : "Activar"}</button></form>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
