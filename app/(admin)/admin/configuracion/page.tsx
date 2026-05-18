import { AdminBusinessPreviewCard } from "@/components/admin/settings/AdminBusinessPreviewCard";
import { AdminBusinessSettingsForm } from "@/components/admin/settings/AdminBusinessSettingsForm";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { getAdminBusinessSettings } from "@/lib/admin-business-settings";

import { updateBusinessSettings } from "./actions";

const statusMessages: Record<string, string> = {
  success: "Datos del negocio actualizados correctamente.",
  config: "No hay base de datos configurada para guardar cambios.",
  "missing-fields": "Completá los campos obligatorios antes de guardar.",
  error: "Ocurrió un error al guardar los datos.",
  unauthenticated: "Iniciá sesión para continuar.",
  unauthorized: "No tenés permisos para realizar esta acción.",
};

export default async function AdminConfiguracionPage({
  searchParams,
}: {
  searchParams?: Promise<{ status?: string }>;
}) {
  const params = await searchParams;
  const settings = await getAdminBusinessSettings();
  const isPersistenceEnabled = Boolean(process.env.DATABASE_URL);
  const statusMessage = params?.status ? statusMessages[params.status] : undefined;

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Datos del negocio"
        description="Desde esta sección se podrán editar los datos públicos de Veterinaria Del Fabro."
      />

      <section className="rounded-xl border border-veterinarian-blueSoft/60 bg-veterinarian-blueSoft/30 p-4 text-sm text-slate-700 shadow-sm">
        {isPersistenceEnabled
          ? "Los cambios se guardan en la base de datos."
          : "Modo visual: no hay DATABASE_URL configurada en este entorno."}
      </section>

      {statusMessage ? (
        <section className="rounded-xl border border-veterinarian-blueSoft/60 bg-white p-4 text-sm text-slate-700 shadow-sm">{statusMessage}</section>
      ) : null}

      <div className="grid gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <AdminBusinessSettingsForm
          initialData={settings}
          action={updateBusinessSettings}
          isPersistenceEnabled={isPersistenceEnabled}
        />
        <AdminBusinessPreviewCard settings={settings} />
      </div>
    </div>
  );
}
