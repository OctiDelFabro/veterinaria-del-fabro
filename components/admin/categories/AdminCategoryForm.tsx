import Link from "next/link";

import type { AdminCategory } from "@/lib/categories";

type AdminCategoryFormProps = {
  initialData?: AdminCategory;
  action: (formData: FormData) => Promise<void>;
  isPersistenceEnabled: boolean;
};

export function AdminCategoryForm({ initialData, action, isPersistenceEnabled }: AdminCategoryFormProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <form action={action} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-1 text-sm text-slate-700">
            <span className="font-medium">Nombre</span>
            <input
              name="name"
              required
              defaultValue={initialData?.name ?? ""}
              className="w-full rounded-md border border-slate-300 px-3 py-2"
            />
          </label>

          <label className="space-y-1 text-sm text-slate-700">
            <span className="font-medium">Slug</span>
            <input name="slug" defaultValue={initialData?.slug ?? ""} className="w-full rounded-md border border-slate-300 px-3 py-2" />
            <span className="text-xs text-slate-500">Si lo dejás vacío, se generará automáticamente.</span>
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex items-center gap-2 rounded-md border border-slate-200 p-3 text-sm text-slate-700">
            <input type="checkbox" name="visible" defaultChecked={initialData?.visible ?? true} className="h-4 w-4" />
            Visible en catálogo público
          </label>
          <label className="flex items-center gap-2 rounded-md border border-slate-200 p-3 text-sm text-slate-700">
            <input type="checkbox" name="active" defaultChecked={initialData?.active ?? true} className="h-4 w-4" />
            Categoría activa
          </label>
        </div>

        {!isPersistenceEnabled ? (
          <p className="rounded-md border border-veterinarian-blueSoft bg-veterinarian-blueSoft/40 px-3 py-2 text-sm text-slate-700">
            Guardado deshabilitado en este entorno.
          </p>
        ) : null}

        <div className="flex flex-wrap gap-3 pt-2">
          <button
            type="submit"
            disabled={!isPersistenceEnabled}
            className="rounded-md bg-veterinarian-violet px-4 py-2 text-sm font-medium text-white hover:bg-veterinarian-violetDark disabled:cursor-not-allowed disabled:opacity-60"
          >
            {initialData ? "Guardar cambios" : "Crear categoría"}
          </button>
          <Link href="/admin/categorias" className="rounded-md border border-veterinarian-blue px-4 py-2 text-sm font-medium text-veterinarian-blue">
            {initialData ? "Volver" : "Cancelar"}
          </Link>
        </div>
      </form>
    </section>
  );
}
