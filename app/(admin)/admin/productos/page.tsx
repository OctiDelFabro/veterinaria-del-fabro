import { AdminPageHeader } from "@/components/admin/AdminPageHeader";

export default function AdminProductosPage() {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Gestión de productos"
        description="Desde esta sección se podrán crear, editar, ocultar y administrar productos del catálogo."
      />
      <section className="rounded-xl border border-veterinarian-blueSoft/60 bg-white p-5 shadow-sm">
        <p className="text-sm text-slate-700">CRUD de productos pendiente de implementar.</p>
      </section>
    </div>
  );
}
