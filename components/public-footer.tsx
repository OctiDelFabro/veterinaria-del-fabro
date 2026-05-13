import { businessData } from "@/lib/business-data";

export function PublicFooter() {
  return (
    <footer className="border-t border-veterinarian-blueSoft bg-white py-8">
      <div className="container-main grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
        <p className="font-semibold text-veterinarian-violet">{businessData.name}</p>
        <p className="sm:text-right">{businessData.address}</p>
        <p>
          WhatsApp: <span className="text-slate-800">{businessData.whatsappVisible}</span>
        </p>
        <p className="sm:text-right">
          Instagram: <span className="text-veterinarian-blue">@{businessData.instagramUser}</span>
        </p>
        <p>{businessData.hours[0]}</p>
        <p className="sm:text-right">{businessData.hours[1]}</p>
      </div>
      <div className="container-main mt-6 border-t border-veterinarian-blueSoft pt-4 text-xs text-slate-500">
        © {new Date().getFullYear()} {businessData.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
