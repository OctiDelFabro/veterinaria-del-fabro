import type { AdminBusinessSettings } from "@/lib/admin-business-settings";

type AdminBusinessSettingsFormProps = {
  initialData: AdminBusinessSettings;
  action: (formData: FormData) => Promise<void>;
  isPersistenceEnabled: boolean;
};

export function AdminBusinessSettingsForm({ initialData, action, isPersistenceEnabled }: AdminBusinessSettingsFormProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <form action={action} className="space-y-5">
        <div className="space-y-3">
          <h2 className="text-base font-semibold text-veterinarian-violetDark">Datos principales</h2>
          <div className="grid gap-4">
            <label className="space-y-1 text-sm text-slate-700">
              <span className="font-medium">Nombre del negocio</span>
              <input name="businessName" required defaultValue={initialData.businessName} className="w-full rounded-md border border-slate-300 px-3 py-2" />
            </label>
            <label className="space-y-1 text-sm text-slate-700">
              <span className="font-medium">Dirección</span>
              <input name="address" required defaultValue={initialData.address} className="w-full rounded-md border border-slate-300 px-3 py-2" />
            </label>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-base font-semibold text-veterinarian-violetDark">Contacto</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-1 text-sm text-slate-700">
              <span className="font-medium">WhatsApp visible</span>
              <input name="whatsappVisible" required defaultValue={initialData.whatsappVisible} className="w-full rounded-md border border-slate-300 px-3 py-2" />
            </label>
            <label className="space-y-1 text-sm text-slate-700">
              <span className="font-medium">WhatsApp internacional</span>
              <input
                name="whatsappInternational"
                required
                defaultValue={initialData.whatsappInternational}
                className="w-full rounded-md border border-slate-300 px-3 py-2"
              />
            </label>
            <label className="space-y-1 text-sm text-slate-700">
              <span className="font-medium">Teléfono</span>
              <input name="phone" defaultValue={initialData.phone} className="w-full rounded-md border border-slate-300 px-3 py-2" />
            </label>
            <label className="space-y-1 text-sm text-slate-700">
              <span className="font-medium">Usuario de Instagram</span>
              <input name="instagramUser" defaultValue={initialData.instagramUser} className="w-full rounded-md border border-slate-300 px-3 py-2" />
            </label>
          </div>
          <label className="space-y-1 text-sm text-slate-700">
            <span className="font-medium">Google Maps URL</span>
            <input name="googleMapsUrl" defaultValue={initialData.googleMapsUrl} className="w-full rounded-md border border-slate-300 px-3 py-2" />
          </label>
        </div>

        <div className="space-y-3">
          <h2 className="text-base font-semibold text-veterinarian-violetDark">Horarios</h2>
          <div className="grid gap-4">
            <label className="space-y-1 text-sm text-slate-700">
              <span className="font-medium">Lunes a viernes</span>
              <input
                name="mondayToFridayHours"
                required
                defaultValue={initialData.mondayToFridayHours}
                className="w-full rounded-md border border-slate-300 px-3 py-2"
              />
            </label>
            <label className="space-y-1 text-sm text-slate-700">
              <span className="font-medium">Sábados</span>
              <input name="saturdayHours" required defaultValue={initialData.saturdayHours} className="w-full rounded-md border border-slate-300 px-3 py-2" />
            </label>
            <label className="space-y-1 text-sm text-slate-700">
              <span className="font-medium">Domingos</span>
              <input name="sundayHours" required defaultValue={initialData.sundayHours} className="w-full rounded-md border border-slate-300 px-3 py-2" />
            </label>
          </div>
        </div>

        <p className="rounded-md border border-veterinarian-blueSoft bg-veterinarian-blueSoft/40 px-3 py-2 text-sm text-slate-700">
          Formulario conectado a base de datos. Los cambios se reflejarán en la vista pública.
        </p>

        <div className="flex flex-wrap gap-3 pt-1">
          <button
            type="submit"
            disabled={!isPersistenceEnabled}
            className="rounded-md bg-veterinarian-violet px-4 py-2 text-sm font-medium text-white hover:bg-veterinarian-violetDark disabled:cursor-not-allowed disabled:opacity-60"
          >
            Guardar configuración
          </button>
          <button type="reset" className="rounded-md border border-veterinarian-blue px-4 py-2 text-sm font-medium text-veterinarian-blue hover:bg-veterinarian-blue/10">
            Restaurar cambios
          </button>
        </div>

        {!isPersistenceEnabled ? <p className="text-sm text-slate-600">Guardado deshabilitado en este entorno.</p> : null}
      </form>
    </section>
  );
}
