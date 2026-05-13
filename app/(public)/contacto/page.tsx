import { InfoCard } from "@/components/public/InfoCard";
import { SectionHeader } from "@/components/public/SectionHeader";
import { WhatsAppButton } from "@/components/public/WhatsAppButton";
import { businessData } from "@/lib/business-data";

const whatsappMessage = "Hola, quería hacer una consulta a Veterinaria Del Fabro.";

export default function ContactoPage() {
  return (
    <div className="space-y-8 py-10">
      <SectionHeader
        title="Contacto"
        description="Estamos en Jesús María, Córdoba. Comunicate con nosotros o acercate al local en nuestros horarios de atención."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <InfoCard title="Dirección" description={businessData.address} />
        <InfoCard
          title="Comunicación"
          description={`WhatsApp: ${businessData.whatsappVisible} · Teléfono: ${businessData.phone} · Instagram: @${businessData.instagramUser}`}
        />
        <InfoCard title="Horarios" description={businessData.hours.join(" · ")} />
        <InfoCard title="Ubicación" description="Encontranos fácilmente desde Google Maps.">
          <a
            href={businessData.mapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md border border-veterinarian-blue px-3 py-2 text-sm font-semibold text-veterinarian-blue hover:bg-veterinarian-blueSoft"
          >
            Abrir en Google Maps
          </a>
        </InfoCard>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <WhatsAppButton message={whatsappMessage} />
        <a
          href={businessData.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md border border-veterinarian-blue px-4 py-2 text-sm font-semibold text-veterinarian-blue hover:bg-veterinarian-blueSoft"
        >
          Ver Instagram
        </a>
        <a
          href={businessData.mapsSearchUrl}
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
