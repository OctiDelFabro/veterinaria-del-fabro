import Link from "next/link";

import type { AdminCategory } from "@/lib/categories";
import type { AdminProduct } from "@/lib/products";

type AdminProductFormProps = {
  mode: "create" | "edit";
  initialData?: AdminProduct;
  categories: AdminCategory[];
  action: (formData: FormData) => Promise<void>;
  isPersistenceEnabled: boolean;
};

export function AdminProductForm({ mode, initialData, categories, action, isPersistenceEnabled }: AdminProductFormProps) {
  const activeCategories = categories.filter((category) => category.active);
  const selectedCategory = categories.find((category) => category.id === initialData?.categoryId);
  const categoryOptions = selectedCategory && !activeCategories.some((category) => category.id === selectedCategory.id)
    ? [...activeCategories, selectedCategory]
    : activeCategories;

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <form action={action} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-1 text-sm text-slate-700">
            <span className="font-medium">Nombre</span>
            <input name="name" required defaultValue={initialData?.name ?? ""} className="w-full rounded-md border border-slate-300 px-3 py-2" />
          </label>

          <label className="space-y-1 text-sm text-slate-700">
            <span className="font-medium">Slug</span>
            <input name="slug" defaultValue={initialData?.slug ?? ""} className="w-full rounded-md border border-slate-300 px-3 py-2" />
            <span className="text-xs text-slate-500">Si lo dejás vacío, se generará automáticamente.</span>
          </label>
        </div>

        <label className="space-y-1 text-sm text-slate-700">
          <span className="font-medium">Categoría</span>
          <select name="categoryId" required defaultValue={initialData?.categoryId ?? ""} className="w-full rounded-md border border-slate-300 px-3 py-2">
            <option value="" disabled>Seleccioná una categoría</option>
            {categoryOptions.map((category) => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
        </label>

        <label className="space-y-1 text-sm text-slate-700">
          <span className="font-medium">Descripción breve</span>
          <textarea name="shortDescription" required defaultValue={initialData?.shortDescription ?? ""} rows={3} className="w-full rounded-md border border-slate-300 px-3 py-2" />
        </label>

        <label className="space-y-1 text-sm text-slate-700">
          <span className="font-medium">Stock</span>
          <input name="stock" type="number" min="0" step="1" required defaultValue={initialData?.stock ?? 0} className="w-full rounded-md border border-slate-300 px-3 py-2" />
        </label>

        <div className="space-y-2 rounded-lg border border-slate-200 p-4">
          <h3 className="text-sm font-medium text-slate-800">Imagen del producto</h3>
          {initialData?.imageUrl ? (
            <div className="space-y-2">
              <p className="text-xs font-medium text-slate-600">Imagen actual</p>
              <img src={initialData.imageUrl} alt={`Imagen actual de ${initialData.name}`} className="h-28 w-28 rounded-md border border-slate-200 object-cover" />
            </div>
          ) : null}
          <label className="space-y-1 text-sm text-slate-700">
            <span className="font-medium">Cargar imagen</span>
            <input type="file" name="imageFile" accept="image/jpeg,image/png,image/webp" className="block w-full text-sm" />
          </label>
          <p className="text-xs text-slate-500">Formatos permitidos: JPG, PNG o WebP. Tamaño máximo: 3 MB.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex items-center gap-2 rounded-md border border-slate-200 p-3 text-sm text-slate-700">
            <input name="visible" type="checkbox" defaultChecked={initialData?.visible ?? true} className="h-4 w-4" />
            Visible en catálogo público
          </label>
          <label className="flex items-center gap-2 rounded-md border border-slate-200 p-3 text-sm text-slate-700">
            <input name="active" type="checkbox" defaultChecked={initialData?.active ?? true} className="h-4 w-4" />
            Producto activo
          </label>
        </div>

        <p className="rounded-md border border-veterinarian-blueSoft bg-veterinarian-blueSoft/40 px-3 py-2 text-sm text-slate-700">
          Si cargás una nueva imagen, reemplazará la imagen visible del producto. No se elimina la imagen anterior del bucket en esta etapa.
        </p>

        {!isPersistenceEnabled ? (
          <p className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-900">
            Guardado deshabilitado en este entorno.
          </p>
        ) : null}

        <div className="flex flex-wrap gap-3 pt-2">
          <button type="submit" disabled={!isPersistenceEnabled} className="rounded-md bg-veterinarian-violet px-4 py-2 text-sm font-medium text-white hover:bg-veterinarian-violetDark disabled:cursor-not-allowed disabled:opacity-60">
            {mode === "edit" ? "Guardar cambios" : "Crear producto"}
          </button>
          <Link href="/admin/productos" className="rounded-md border border-veterinarian-blue px-4 py-2 text-sm font-medium text-veterinarian-blue">Volver</Link>
        </div>
      </form>
    </section>
  );
}
