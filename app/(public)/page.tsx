import Link from "next/link";

import { InfoCard } from "@/components/public/InfoCard";
import { SectionHeader } from "@/components/public/SectionHeader";
import { WhatsAppButton } from "@/components/public/WhatsAppButton";
import { businessData } from "@/lib/business-data";
import { getPublicCategories } from "@/lib/categories";
import { getPublicServices } from "@/lib/services";

const whatsappMessage = "Hola, quería hacer una consulta a Veterinaria Del Fabro.";

export default async function HomePage() {
  const categories = await getPublicCategories();
  const services = await getPublicServices();
  return (
    <div className="space-y-12 py-10">
      <section className="rounded-2xl border border-veterinarian-blueSoft bg-white p-6 shadow-sm sm:p-10">
        <p className="text-sm font-semibold text-veterinarian-blue">Veterinaria Del Fabro</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Atención veterinaria para pequeños animales en Jesús María
        </h1>
        <p className="mt-4 max-w-3xl text-slate-600">{businessData.description}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/catalogo" className="rounded-md bg-veterinarian-violet px-4 py-2 text-center text-sm font-semibold text-white hover:bg-veterinarian-violetDark">
            Ver catálogo
          </Link>
          <Link href="/servicios" className="rounded-md border border-veterinarian-blue px-4 py-2 text-center text-sm font-semibold text-veterinarian-blue hover:bg-veterinarian-blueSoft">
            Servicios clínicos
          </Link>
          <WhatsAppButton message={whatsappMessage} />
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeader title="Productos para tu mascota" description="Explorá las categorías destacadas y encontrá todo para el cuidado diario." />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <div key={category.name} className="rounded-lg border border-veterinarian-blueSoft bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm">
              {category.name}
            </div>
          ))}
        </div>
        <Link href="/catalogo" className="inline-flex text-sm font-semibold text-veterinarian-violet hover:text-veterinarian-violetDark">
          Ir al catálogo
        </Link>
      </section>

      <section className="space-y-6">
        <SectionHeader title="Servicios clínicos" description="Atención profesional para acompañar cada etapa de tu mascota." />
        <div className="grid gap-4 sm:grid-cols-3">
          {services.map((service) => (
            <InfoCard key={service.id} title={service.name} description="Atención clínica profesional con enfoque en pequeños animales." />
          ))}
        </div>
        <Link href="/servicios" className="inline-flex text-sm font-semibold text-veterinarian-violet hover:text-veterinarian-violetDark">
          Ver servicios
        </Link>
      </section>

      <section className="space-y-6">
        <SectionHeader title="Contacto rápido" description="Estamos para ayudarte con consultas, productos y servicios clínicos." />
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard title="Dirección" description={businessData.address}>
            <a href={businessData.mapsSearchUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-veterinarian-blue hover:underline">
              Cómo llegar
            </a>
          </InfoCard>
          <InfoCard title="Horarios y contacto" description={`${businessData.hours[0]} · ${businessData.hours[1]} · ${businessData.hours[2]}`}>
            <p className="text-sm text-slate-700">WhatsApp: {businessData.whatsappVisible}</p>
            <WhatsAppButton message={whatsappMessage} className="mt-3" />
          </InfoCard>
        </div>
      </section>
    </div>
  );
}
