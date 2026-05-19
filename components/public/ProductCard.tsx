import Link from "next/link";

import { PublicProduct } from "@/lib/products";

import { StockRibbon } from "./StockRibbon";

type ProductCardProps = {
  product: PublicProduct;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/catalogo/${product.slug}`}
      className="block overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
    >
      <article>
        <div className="relative h-48 overflow-hidden bg-slate-100">
          <StockRibbon stock={product.stock} />
          {product.imageUrl ? (
            <img src={product.imageUrl} alt={`Imagen de ${product.name}`} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full items-center justify-center px-4 text-center text-sm text-slate-500">
              Imagen no disponible
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-sm font-semibold text-slate-800 sm:text-base">{product.name}</h3>
        </div>
      </article>
    </Link>
  );
}
