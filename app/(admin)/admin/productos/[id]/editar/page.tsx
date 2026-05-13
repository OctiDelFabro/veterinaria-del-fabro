import { Placeholder } from "@/components/placeholder";

export default async function AdminProductosEditarPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return <Placeholder title={`Editar Producto: ${id}`} description="Edición de producto (placeholder)." />;
}
