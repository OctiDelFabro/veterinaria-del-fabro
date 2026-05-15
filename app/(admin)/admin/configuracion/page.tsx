import { AdminBusinessPreviewCard } from "@/components/admin/settings/AdminBusinessPreviewCard";
import { AdminBusinessSettingsForm } from "@/components/admin/settings/AdminBusinessSettingsForm";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { mockAdminBusinessSettings } from "@/lib/mock-admin-business-settings";

export default function AdminConfiguracionPage() {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Datos del negocio"
        description="Desde esta sección se podrán editar los datos públicos de Veterinaria Del Fabro."
      />

      <section className="rounded-xl border border-veterinarian-blueSoft/60 bg-veterinarian-blueSoft/30 p-4 text-sm text-slate-700 shadow-sm">
        Los cambios todavía no se guardan en base de datos. Esta pantalla es una interfaz inicial.
      </section>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <AdminBusinessSettingsForm initialData={mockAdminBusinessSettings} />
        <AdminBusinessPreviewCard settings={mockAdminBusinessSettings} />
      </div>
    </div>
  );
}
