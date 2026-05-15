import { getPublicBusinessSettings } from "@/lib/business-settings";

export async function PublicFooter() {
  const businessSettings = await getPublicBusinessSettings();

  return (
    <footer className="border-t border-veterinarian-blueSoft bg-white py-8">
      <div className="container-main grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
        <p className="font-semibold text-veterinarian-violet">{businessSettings.businessName}</p>
        <p className="sm:text-right">{businessSettings.address}</p>
        <p>
          WhatsApp: <span className="text-slate-800">{businessSettings.whatsappVisible}</span>
        </p>
        <p className="sm:text-right">
          Instagram: <span className="text-veterinarian-blue">@{businessSettings.instagramUser}</span>
        </p>
        <p>{businessSettings.hours[0]}</p>
        <p className="sm:text-right">{businessSettings.hours[1]}</p>
      </div>
      <div className="container-main mt-6 border-t border-veterinarian-blueSoft pt-4 text-xs text-slate-500">
        © {new Date().getFullYear()} {businessSettings.businessName}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
