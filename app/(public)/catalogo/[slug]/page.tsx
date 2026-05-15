import Link from "next/link";

import { WhatsAppButton } from "@/components/public/WhatsAppButton";
import { getProductBySlug } from "@/lib/mock-products";

type CatalogDetailProps = {
  params: Promise<{ slug: string }>;
};

export default async function CatalogoDetallePage({ params }: CatalogDetailProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <section className="container-main py-16 text-center">
        <h1 className="text-3xl font-bold text-veterinarian-violet">Producto no disponible</h1>
        <p className="mt-3 text-slate-700">Este producto no está disponible actualmente.</p>
        <Link href="/catalogo" className="mt-6 inline-flex text-sm font-semibold text-blue-700 underline-offset-2 hover:underline">
          Volver al catálogo
        </Link>
      </section>
    );
  }

  const isAvailable = product.stock > 0;
  const whatsappMessage = isAvailable
    ? `Hola, quería consultar por el producto: ${product.name}.`
    : `Hola, quería consultar cuándo vuelve a ingresar el producto: ${product.name}.`;

  return (
    <section className="container-main py-10 sm:py-12">
      <div className="grid gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2">
        <div className="flex min-h-72 items-center justify-center rounded-xl bg-slate-100 px-4 text-center text-sm text-slate-500">
          {product.imageUrl ? "Imagen de producto" : "Imagen no disponible"}
        </div>

        <div className="space-y-4">
          <p className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            {product.category}
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-veterinarian-violet">{product.name}</h1>
          <p className="text-sm leading-6 text-slate-700 sm:text-base">{product.shortDescription}</p>

          <p className="text-sm font-semibold text-slate-800">
            Estado: <span className={isAvailable ? "text-blue-700" : "text-slate-600"}>{isAvailable ? "Disponible" : "No disponible"}</span>
          </p>

          <div className="pt-2">
            <WhatsAppButton message={whatsappMessage}>Consultar por WhatsApp</WhatsAppButton>
          </div>

          <Link href="/catalogo" className="inline-flex text-sm font-semibold text-blue-700 underline-offset-2 hover:underline">
            Volver al catálogo
          </Link>
        </div>
      </div>
    </section>
  );
}
