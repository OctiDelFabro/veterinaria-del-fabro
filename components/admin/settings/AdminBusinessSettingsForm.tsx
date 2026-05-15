import type { AdminBusinessSettings } from "@/lib/mock-admin-business-settings";

type AdminBusinessSettingsFormProps = {
  initialData: AdminBusinessSettings;
};

export function AdminBusinessSettingsForm({ initialData }: AdminBusinessSettingsFormProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <form className="space-y-5">
        <div className="space-y-3">
          <h2 className="text-base font-semibold text-veterinarian-violetDark">Datos principales</h2>
          <div className="grid gap-4">
            <label className="space-y-1 text-sm text-slate-700">
              <span className="font-medium">Nombre del negocio</span>
              <input defaultValue={initialData.businessName} className="w-full rounded-md border border-slate-300 px-3 py-2" />
            </label>
            <label className="space-y-1 text-sm text-slate-700">
              <span className="font-medium">Dirección</span>
              <input defaultValue={initialData.address} className="w-full rounded-md border border-slate-300 px-3 py-2" />
            </label>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-base font-semibold text-veterinarian-violetDark">Contacto</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-1 text-sm text-slate-700">
              <span className="font-medium">WhatsApp visible</span>
              <input defaultValue={initialData.whatsappVisible} className="w-full rounded-md border border-slate-300 px-3 py-2" />
            </label>
            <label className="space-y-1 text-sm text-slate-700">
              <span className="font-medium">WhatsApp internacional</span>
              <input defaultValue={initialData.whatsappInternational} className="w-full rounded-md border border-slate-300 px-3 py-2" />
            </label>
            <label className="space-y-1 text-sm text-slate-700">
              <span className="font-medium">Teléfono</span>
              <input defaultValue={initialData.phone} className="w-full rounded-md border border-slate-300 px-3 py-2" />
            </label>
            <label className="space-y-1 text-sm text-slate-700">
              <span className="font-medium">Usuario de Instagram</span>
              <input defaultValue={initialData.instagramUser} className="w-full rounded-md border border-slate-300 px-3 py-2" />
            </label>
          </div>
          <label className="space-y-1 text-sm text-slate-700">
            <span className="font-medium">Google Maps URL</span>
            <input defaultValue={initialData.googleMapsUrl} className="w-full rounded-md border border-slate-300 px-3 py-2" />
          </label>
        </div>

        <div className="space-y-3">
          <h2 className="text-base font-semibold text-veterinarian-violetDark">Horarios</h2>
          <div className="grid gap-4">
            <label className="space-y-1 text-sm text-slate-700">
              <span className="font-medium">Lunes a viernes</span>
              <input defaultValue={initialData.mondayToFridayHours} className="w-full rounded-md border border-slate-300 px-3 py-2" />
            </label>
            <label className="space-y-1 text-sm text-slate-700">
              <span className="font-medium">Sábados</span>
              <input defaultValue={initialData.saturdayHours} className="w-full rounded-md border border-slate-300 px-3 py-2" />
            </label>
            <label className="space-y-1 text-sm text-slate-700">
              <span className="font-medium">Domingos</span>
              <input defaultValue={initialData.sundayHours} className="w-full rounded-md border border-slate-300 px-3 py-2" />
            </label>
          </div>
        </div>

        <p className="rounded-md border border-veterinarian-blueSoft bg-veterinarian-blueSoft/40 px-3 py-2 text-sm text-slate-700">
          Formulario visual. La persistencia se integrará en una próxima etapa.
        </p>

        <div className="flex flex-wrap gap-3 pt-1">
          <button type="button" className="rounded-md bg-veterinarian-violet px-4 py-2 text-sm font-medium text-white hover:bg-veterinarian-violetDark">
            Guardar configuración
          </button>
          <button type="button" className="rounded-md border border-veterinarian-blue px-4 py-2 text-sm font-medium text-veterinarian-blue hover:bg-veterinarian-blue/10">
            Restaurar cambios
          </button>
        </div>
      </form>
    </section>
  );
}
