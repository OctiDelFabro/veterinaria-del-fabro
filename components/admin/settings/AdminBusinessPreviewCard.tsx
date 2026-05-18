import type { AdminBusinessSettings } from "@/lib/admin-business-settings";

type AdminBusinessPreviewCardProps = {
  settings: AdminBusinessSettings;
};

export function AdminBusinessPreviewCard({ settings }: AdminBusinessPreviewCardProps) {
  return (
    <aside className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <h2 className="text-base font-semibold text-veterinarian-violetDark">Vista previa pública</h2>
      <div className="mt-4 space-y-2 text-sm text-slate-700">
        <p className="text-lg font-semibold text-slate-900">{settings.businessName}</p>
        <p>{settings.address}</p>
        <p>
          <span className="font-medium">WhatsApp:</span> {settings.whatsappVisible}
        </p>
        <p>
          <span className="font-medium">Teléfono:</span> {settings.phone}
        </p>
        <p>
          <span className="font-medium">Instagram:</span> @{settings.instagramUser}
        </p>
      </div>

      <div className="mt-4 rounded-md border border-slate-200 p-3 text-sm text-slate-700">
        <p className="font-medium text-slate-900">Horarios</p>
        <p className="mt-1">{settings.mondayToFridayHours}</p>
        <p>{settings.saturdayHours}</p>
        <p>{settings.sundayHours}</p>
      </div>

      <a
        href={settings.googleMapsUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex rounded-md border border-veterinarian-blue px-4 py-2 text-sm font-medium text-veterinarian-blue hover:bg-veterinarian-blue/10"
      >
        Cómo llegar
      </a>
    </aside>
  );
}
