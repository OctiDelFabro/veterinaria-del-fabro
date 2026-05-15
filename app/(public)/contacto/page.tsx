import { InfoCard } from "@/components/public/InfoCard";
import { SectionHeader } from "@/components/public/SectionHeader";
import { getPublicBusinessSettings } from "@/lib/business-settings";

const whatsappMessage = "Hola, quería hacer una consulta a Veterinaria Del Fabro.";

export const dynamic = "force-dynamic";

export default async function ContactoPage() {
  const businessSettings = await getPublicBusinessSettings();

  const whatsappHref = `https://wa.me/${businessSettings.whatsappInternational}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="space-y-8 py-10">
      <SectionHeader
        title="Contacto"
        description="Estamos en Jesús María, Córdoba. Comunicate con nosotros o acercate al local en nuestros horarios de atención."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <InfoCard title="Dirección" description={businessSettings.address} />
        <InfoCard
          title="Comunicación"
          description={`WhatsApp: ${businessSettings.whatsappVisible} · Teléfono: ${businessSettings.phone} · Instagram: @${businessSettings.instagramUser}`}
        />
        <InfoCard title="Horarios" description={businessSettings.hours.join(" · ")} />
        <InfoCard title="Ubicación" description="Encontranos fácilmente desde Google Maps.">
          <a
            href={businessSettings.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md border border-veterinarian-blue px-3 py-2 text-sm font-semibold text-veterinarian-blue hover:bg-veterinarian-blueSoft"
          >
            Abrir en Google Maps
          </a>
        </InfoCard>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md bg-veterinarian-violet px-4 py-2 text-sm font-semibold text-white hover:bg-veterinarian-violetDark"
        >
          Consultar por WhatsApp
        </a>
        <a
          href={businessSettings.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md border border-veterinarian-blue px-4 py-2 text-sm font-semibold text-veterinarian-blue hover:bg-veterinarian-blueSoft"
        >
          Ver Instagram
        </a>
        <a
          href={businessSettings.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md border border-veterinarian-blue px-4 py-2 text-sm font-semibold text-veterinarian-blue hover:bg-veterinarian-blueSoft"
        >
          Cómo llegar
        </a>
      </div>
    </div>
  );
}
