import { prisma } from "@/lib/prisma";

export type PublicService = {
  id: string;
  name: string;
  slug: string;
  longDescription: string;
};

export type AdminService = {
  id: string;
  name: string;
  slug: string;
  longDescription: string;
  visible: boolean;
  active: boolean;
};

export const fallbackPublicServices: PublicService[] = [
  {
    id: "service-consultas",
    name: "Consultas",
    slug: "consultas",
    longDescription:
      "Atención clínica para pequeños animales. Realizamos consultas generales, controles de salud, evaluación de síntomas, seguimiento de tratamientos y orientación veterinaria según la necesidad de cada mascota.",
  },
  {
    id: "service-cirugias",
    name: "Cirugías",
    slug: "cirugias",
    longDescription:
      "Realizamos procedimientos quirúrgicos veterinarios para pequeños animales, con evaluación previa del paciente y acompañamiento profesional durante el proceso prequirúrgico y posquirúrgico.",
  },
  {
    id: "service-plan-de-vacunacion",
    name: "Plan de vacunación",
    slug: "plan-de-vacunacion",
    longDescription:
      "Asesoramos sobre el calendario de vacunación correspondiente según la edad, especie y condición sanitaria de cada mascota. También brindamos orientación sobre refuerzos, controles preventivos y cuidados asociados.",
  },
];

export const fallbackAdminServices: AdminService[] = fallbackPublicServices.map((service) => ({
  ...service,
  visible: true,
  active: true,
}));

export async function getPublicServices(): Promise<PublicService[]> {
  if (!process.env.DATABASE_URL) {
    return fallbackPublicServices;
  }

  try {
    const services = await prisma.servicio.findMany({
      where: { visible: true, activo: true },
      orderBy: { createdAt: "asc" },
    });

    if (services.length === 0) {
      return fallbackPublicServices;
    }

    return services.map((service) => ({
      id: service.id,
      name: service.nombre,
      slug: service.slug,
      longDescription: service.descripcionLarga,
    }));
  } catch (error) {
    console.error("Error loading public services from database:", error);
    return fallbackPublicServices;
  }
}

export async function getPublicServiceBySlug(slug: string): Promise<PublicService | undefined> {
  if (!process.env.DATABASE_URL) {
    return fallbackPublicServices.find((service) => service.slug === slug);
  }

  try {
    const service = await prisma.servicio.findFirst({
      where: { slug, visible: true, activo: true },
    });

    if (!service) {
      return fallbackPublicServices.find((fallbackService) => fallbackService.slug === slug);
    }

    return {
      id: service.id,
      name: service.nombre,
      slug: service.slug,
      longDescription: service.descripcionLarga,
    };
  } catch (error) {
    console.error("Error loading public service by slug from database:", error);
    return fallbackPublicServices.find((service) => service.slug === slug);
  }
}

export async function getAdminServices(): Promise<AdminService[]> {
  if (!process.env.DATABASE_URL) {
    return fallbackAdminServices;
  }

  try {
    const services = await prisma.servicio.findMany({
      orderBy: { createdAt: "asc" },
    });

    if (services.length === 0) {
      return fallbackAdminServices;
    }

    return services.map((service) => ({
      id: service.id,
      name: service.nombre,
      slug: service.slug,
      longDescription: service.descripcionLarga,
      visible: service.visible,
      active: service.activo,
    }));
  } catch (error) {
    console.error("Error loading admin services from database:", error);
    return fallbackAdminServices;
  }
}
