import { SectionHeader } from "@/components/public/SectionHeader";
import { ServiceCard } from "@/components/public/ServiceCard";
import { WhatsAppButton } from "@/components/public/WhatsAppButton";
import { getPublicServices } from "@/lib/services";

const servicesWhatsappMessage = "Hola, quería consultar por los servicios clínicos de la veterinaria.";

export default async function ServiciosPage() {
  const services = await getPublicServices();

  return (
    <div className="space-y-8 py-10">
      <SectionHeader
        title="Servicios clínicos"
        description="Brindamos atención veterinaria para pequeños animales, acompañando la salud y el bienestar de tu mascota."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.length === 0 ? (
          <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:col-span-2 lg:col-span-3">
            <p className="text-base font-semibold text-slate-800">No hay servicios disponibles por el momento.</p>
          </div>
        ) : (
          services.map((service) => <ServiceCard key={service.id} service={service} />)
        )}
      </div>

      <div className="pt-2">
        <WhatsAppButton message={servicesWhatsappMessage}>Consultar por WhatsApp</WhatsAppButton>
      </div>
    </div>
  );
}
