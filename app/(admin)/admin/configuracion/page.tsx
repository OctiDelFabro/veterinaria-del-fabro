import { AdminPageHeader } from "@/components/admin/AdminPageHeader";

export default function AdminConfiguracionPage() {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Datos del negocio"
        description="Desde esta sección se podrán editar los datos públicos de Veterinaria Del Fabro."
      />
      <section className="rounded-xl border border-veterinarian-blueSoft/60 bg-white p-5 shadow-sm">
        <p className="text-sm text-slate-700">Formulario de configuración pendiente de implementar.</p>
      </section>
    </div>
  );
}
