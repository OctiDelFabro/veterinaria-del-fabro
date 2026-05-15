import Link from "next/link";

import type { MockService } from "@/lib/mock-services";

type ServiceCardProps = {
  service: MockService;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/servicios/${service.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border border-veterinarian-blueSoft bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-veterinarian-violet hover:shadow-md"
    >
      <h3 className="text-lg font-semibold text-slate-800 transition group-hover:text-veterinarian-violet">{service.name}</h3>
    </Link>
  );
}
