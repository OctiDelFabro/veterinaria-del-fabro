import Link from "next/link";

import { MockProduct } from "@/lib/mock-products";

import { StockRibbon } from "./StockRibbon";

type ProductCardProps = {
  product: MockProduct;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/catalogo/${product.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
    >
      <article>
        <div className="relative h-48 overflow-hidden bg-slate-100">
          <StockRibbon stock={product.stock} />
          <div className="flex h-full items-center justify-center px-4 text-center text-sm text-slate-500">
            {product.imageUrl ? "Imagen de producto" : "Imagen no disponible"}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-sm font-semibold text-slate-800 sm:text-base">{product.name}</h3>
        </div>
      </article>
    </Link>
  );
}
