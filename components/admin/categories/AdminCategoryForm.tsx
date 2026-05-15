import Link from "next/link";

import type { AdminCategory } from "@/lib/mock-admin-categories";

type AdminCategoryFormProps = {
  initialData?: AdminCategory;
};

export function AdminCategoryForm({ initialData }: AdminCategoryFormProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <form className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-1 text-sm text-slate-700">
            <span className="font-medium">Nombre</span>
            <input defaultValue={initialData?.name ?? ""} className="w-full rounded-md border border-slate-300 px-3 py-2" />
          </label>

          <label className="space-y-1 text-sm text-slate-700">
            <span className="font-medium">Slug</span>
            <input defaultValue={initialData?.slug ?? ""} className="w-full rounded-md border border-slate-300 px-3 py-2" />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex items-center gap-2 rounded-md border border-slate-200 p-3 text-sm text-slate-700">
            <input type="checkbox" defaultChecked={initialData?.visible ?? true} className="h-4 w-4" />
            Visible en catálogo público
          </label>
          <label className="flex items-center gap-2 rounded-md border border-slate-200 p-3 text-sm text-slate-700">
            <input type="checkbox" defaultChecked={initialData?.active ?? true} className="h-4 w-4" />
            Categoría activa
          </label>
        </div>

        <p className="rounded-md border border-veterinarian-blueSoft bg-veterinarian-blueSoft/40 px-3 py-2 text-sm text-slate-700">
          Formulario visual. La persistencia se integrará en una próxima etapa.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <button type="button" className="rounded-md bg-veterinarian-violet px-4 py-2 text-sm font-medium text-white hover:bg-veterinarian-violetDark">
            Guardar categoría
          </button>
          <Link href="/admin/categorias" className="rounded-md border border-veterinarian-blue px-4 py-2 text-sm font-medium text-veterinarian-blue">Cancelar</Link>
        </div>
      </form>
    </section>
  );
}
