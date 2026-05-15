import Link from "next/link";

import { WhatsAppButton } from "@/components/public/WhatsAppButton";
import { getServiceBySlug } from "@/lib/mock-services";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

const serviceWhatsappMessages: Record<string, string> = {
  consultas: "Hola, quería consultar por una consulta veterinaria.",
  cirugias: "Hola, quería consultar por el servicio de cirugías.",
  "plan-de-vacunacion": "Hola, quería consultar por el plan de vacunación.",
};

function getWhatsappMessage(slug: string, serviceName: string) {
  return serviceWhatsappMessages[slug] ?? `Hola, quería consultar por el servicio: ${serviceName}.`;
}

export default async function ServicioDetallePage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="py-16">
        <div className="mx-auto max-w-2xl rounded-2xl border border-veterinarian-blueSoft bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900">Servicio no disponible</h1>
          <p className="mt-3 text-slate-600">Este servicio no está disponible actualmente.</p>
          <Link href="/servicios" className="mt-6 inline-flex text-sm font-semibold text-veterinarian-violet hover:text-veterinarian-violetDark">
            Volver a servicios
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10">
      <article className="mx-auto max-w-3xl rounded-2xl border border-veterinarian-blueSoft bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">{service.name}</h1>
        <p className="mt-4 leading-relaxed text-slate-700">{service.longDescription}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <WhatsAppButton message={getWhatsappMessage(service.slug, service.name)}>
            Consultar por WhatsApp
          </WhatsAppButton>
          <Link href="/servicios" className="text-sm font-semibold text-veterinarian-violet hover:text-veterinarian-violetDark">
            Volver a servicios
          </Link>
        </div>
      </article>
    </div>
  );
}
