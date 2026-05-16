"use client";

import { useMemo, useState } from "react";

import { PublicProduct } from "@/lib/products";

import { WhatsAppButton } from "./WhatsAppButton";
import { ProductCard } from "./ProductCard";

type ProductCatalogProps = {
  products: PublicProduct[];
  categories: readonly string[];
};

export function ProductCatalog({ products, categories }: ProductCatalogProps) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
      const matchesQuery = product.name.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [products, query, selectedCategory]);

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
        <div className="grid gap-4 md:grid-cols-[2fr_1fr]">
          <input
            type="search"
            placeholder="Buscar producto..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none ring-veterinarian-violet transition focus:ring-2"
          />
          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none ring-veterinarian-violet transition focus:ring-2"
          >
            <option value="Todos">Todos</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <p className="text-base font-semibold text-slate-800">No encontramos productos con ese nombre.</p>
          <p className="mt-2 text-sm text-slate-600">Podés consultarnos por WhatsApp para verificar disponibilidad.</p>
          <div className="mt-4">
            <WhatsAppButton message="Hola, quería consultar por un producto que no encontré en el catálogo." />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
