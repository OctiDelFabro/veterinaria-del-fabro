import { AdminPageHeader } from "@/components/admin/AdminPageHeader";

export default function AdminServiciosPage() {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Gestión de servicios"
        description="Desde esta sección se podrán administrar los servicios clínicos visibles en la web."
      />
      <section className="rounded-xl border border-veterinarian-blueSoft/60 bg-white p-5 shadow-sm">
        <p className="text-sm text-slate-700">CRUD de servicios pendiente de implementar.</p>
      </section>
    </div>
  );
}
