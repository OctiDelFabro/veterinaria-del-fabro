import { ProductCatalog } from "@/components/public/ProductCatalog";
import { WhatsAppButton } from "@/components/public/WhatsAppButton";
import { getPublicCategories } from "@/lib/categories";
import { getPublicProducts } from "@/lib/products";

export default async function CatalogoPage() {
  const categories = await getPublicCategories();
  const products = await getPublicProducts();
  return (
    <section className="container-main py-10 sm:py-12">
      <header className="mb-8 space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-veterinarian-violet sm:text-4xl">Catálogo de productos</h1>
        <p className="max-w-3xl text-sm text-slate-700 sm:text-base">
          Consultá nuestros productos de petshop, alimentos, medicamentos y accesorios para pequeños animales.
        </p>
      </header>

      <ProductCatalog products={products} categories={categories.map((category) => category.name)} />

      <div className="mt-10 rounded-xl border border-blue-100 bg-blue-50 p-6 text-center">
        <p className="text-base font-semibold text-slate-800">¿No encontrás lo que buscás?</p>
        <div className="mt-3">
          <WhatsAppButton message="Hola, quería consultar por un producto que no encontré en el catálogo." />
        </div>
      </div>
    </section>
  );
}
