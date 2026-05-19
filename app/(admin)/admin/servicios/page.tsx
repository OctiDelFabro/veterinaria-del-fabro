import { createService } from "@/app/(admin)/admin/servicios/actions";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminServiceForm } from "@/components/admin/services/AdminServiceForm";
import { AdminServiceTable } from "@/components/admin/services/AdminServiceTable";
import { getAdminServices } from "@/lib/services";

const statusMessages: Record<string, string> = {
  created: "Servicio creado correctamente.",
  updated: "Servicio actualizado correctamente.",
  config: "No hay base de datos configurada para guardar cambios.",
  "missing-fields": "Completá los campos obligatorios.",
  duplicate: "Ya existe un servicio con ese nombre o slug.",
  "not-found": "El servicio solicitado no existe.",
  error: "Ocurrió un error al guardar el servicio.",
};

export default async function AdminServiciosPage({
  searchParams,
}: {
  searchParams?: Promise<{ status?: string }>;
}) {
  const params = await searchParams;
  const services = await getAdminServices();
  const isPersistenceEnabled = Boolean(process.env.DATABASE_URL);
  const statusMessage = params?.status ? statusMessages[params.status] : undefined;

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Gestión de servicios"
        description="Desde esta sección se podrán administrar los servicios clínicos visibles en la web."
      />

      {statusMessage ? (
        <section className="rounded-xl border border-veterinarian-blueSoft/60 bg-veterinarian-blueSoft/20 p-5 shadow-sm">
          <p className="text-sm text-slate-700">{statusMessage}</p>
        </section>
      ) : null}

      <section className="rounded-xl border border-veterinarian-blueSoft/60 bg-veterinarian-blueSoft/20 p-5 shadow-sm">
        <p className="text-sm text-slate-700">
          {isPersistenceEnabled
            ? "Los cambios se guardan en la base de datos."
            : "Modo visual: no hay DATABASE_URL configurada en este entorno."}
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">Nuevo servicio</h2>
        <AdminServiceForm action={createService} isPersistenceEnabled={isPersistenceEnabled} />
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">Servicios actuales</h2>
        <AdminServiceTable services={services} isPersistenceEnabled={isPersistenceEnabled} />
      </section>
    </div>
  );
}
