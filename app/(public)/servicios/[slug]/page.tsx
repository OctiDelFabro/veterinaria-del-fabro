import { Placeholder } from "@/components/placeholder";

export default async function ServicioDetallePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return <Placeholder title={`Servicio: ${slug}`} description="Detalle de servicio (placeholder)." />;
}
