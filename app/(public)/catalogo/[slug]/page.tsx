import { Placeholder } from "@/components/placeholder";

export default async function CatalogoDetallePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return <Placeholder title={`Producto: ${slug}`} description="Detalle de producto (placeholder)." />;
}
