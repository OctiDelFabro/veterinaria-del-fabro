import Link from "next/link";

import { updateService } from "@/app/(admin)/admin/servicios/actions";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminServiceForm } from "@/components/admin/services/AdminServiceForm";
import { getAdminServiceById } from "@/lib/services";

const statusMessages: Record<string, string> = {
  duplicate: "Ya existe otro servicio con ese nombre o slug.",
  config: "No hay base de datos configurada para guardar cambios.",
  "missing-fields": "Completá los campos obligatorios.",
  error: "Ocurrió un error al guardar el servicio.",
};

export default async function AdminServicioEditarPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ status?: string }>;
}) {
  const { id } = await params;
  const query = await searchParams;
  const service = await getAdminServiceById(id);
  const isPersistenceEnabled = Boolean(process.env.DATABASE_URL);

  if (!service) {
    return (
      <div className="space-y-4">
        <h1 className="text-xl font-semibold text-slate-900">Servicio no encontrado</h1>
        <p className="text-sm text-slate-700">El servicio solicitado no existe o no está disponible.</p>
        <Link href="/admin/servicios" className="text-sm font-medium text-veterinarian-blue hover:underline">
          Volver a servicios
        </Link>
      </div>
    );
  }

  const statusMessage = query?.status ? statusMessages[query.status] : undefined;
  const updateServiceWithId = updateService.bind(null, service.id);

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Editar servicio"
        description="Modificá los datos del servicio seleccionado."
      />

      {statusMessage ? (
        <section className="rounded-xl border border-veterinarian-blueSoft/60 bg-veterinarian-blueSoft/20 p-5 shadow-sm">
          <p className="text-sm text-slate-700">{statusMessage}</p>
        </section>
      ) : null}

      <AdminServiceForm
        initialData={service}
        action={updateServiceWithId}
        isPersistenceEnabled={isPersistenceEnabled}
      />
    </div>
  );
}
