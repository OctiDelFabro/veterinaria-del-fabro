import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminServiceForm } from "@/components/admin/services/AdminServiceForm";
import { AdminServiceTable } from "@/components/admin/services/AdminServiceTable";
import { mockAdminServices } from "@/lib/mock-admin-services";

export default function AdminServiciosPage() {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Gestión de servicios"
        description="Desde esta sección se podrán administrar los servicios clínicos visibles en la web."
      />

      <section className="rounded-xl border border-veterinarian-blueSoft/60 bg-white p-5 shadow-sm">
        <p className="text-sm text-slate-700">
          Los cambios todavía no se guardan en base de datos. Esta pantalla es una interfaz inicial.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">Nuevo servicio</h2>
        <AdminServiceForm />
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">Servicios actuales</h2>
        <AdminServiceTable services={mockAdminServices} />
      </section>
    </div>
  );
}
