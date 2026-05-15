import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminProductForm } from "@/components/admin/products/AdminProductForm";

export default function AdminProductosNuevoPage() {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Nuevo producto"
        description="Cargá la información inicial del producto que luego se mostrará en el catálogo público."
      />
      <AdminProductForm mode="create" />
    </div>
  );
}
