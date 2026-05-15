import { AdminPageHeader } from "@/components/admin/AdminPageHeader";

export default function AdminCategoriasPage() {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Gestión de categorías"
        description="Desde esta sección se podrán administrar las categorías visibles del catálogo."
      />
      <section className="rounded-xl border border-veterinarian-blueSoft/60 bg-white p-5 shadow-sm">
        <p className="text-sm text-slate-700">CRUD de categorías pendiente de implementar.</p>
      </section>
    </div>
  );
}
