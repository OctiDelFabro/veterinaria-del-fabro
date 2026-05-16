import Link from "next/link";

import type { AdminService } from "@/lib/services";

type AdminServiceFormProps = {
  initialData?: AdminService;
};

export function AdminServiceForm({ initialData }: AdminServiceFormProps) {
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

        <label className="space-y-1 text-sm text-slate-700">
          <span className="font-medium">Descripción larga</span>
          <textarea
            defaultValue={initialData?.longDescription ?? ""}
            rows={5}
            className="w-full rounded-md border border-slate-300 px-3 py-2"
          />
        </label>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex items-center gap-2 rounded-md border border-slate-200 p-3 text-sm text-slate-700">
            <input type="checkbox" defaultChecked={initialData?.visible ?? true} className="h-4 w-4" />
            Visible en la web pública
          </label>
          <label className="flex items-center gap-2 rounded-md border border-slate-200 p-3 text-sm text-slate-700">
            <input type="checkbox" defaultChecked={initialData?.active ?? true} className="h-4 w-4" />
            Servicio activo
          </label>
        </div>

        <p className="rounded-md border border-veterinarian-blueSoft bg-veterinarian-blueSoft/40 px-3 py-2 text-sm text-slate-700">
          Formulario visual. La persistencia se integrará en una próxima etapa.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <button type="button" className="rounded-md bg-veterinarian-violet px-4 py-2 text-sm font-medium text-white hover:bg-veterinarian-violetDark">
            Guardar servicio
          </button>
          <Link href="/admin/servicios" className="rounded-md border border-veterinarian-blue px-4 py-2 text-sm font-medium text-veterinarian-blue">Cancelar</Link>
        </div>
      </form>
    </section>
  );
}
