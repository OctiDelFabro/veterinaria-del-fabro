export type MockService = {
  id: string;
  slug: string;
  name: string;
  longDescription: string;
};

export const mockServices: MockService[] = [
  {
    id: "service-consultas",
    slug: "consultas",
    name: "Consultas",
    longDescription:
      "Atención clínica para pequeños animales. Realizamos consultas generales, controles de salud, evaluación de síntomas, seguimiento de tratamientos y orientación veterinaria según la necesidad de cada mascota.",
  },
  {
    id: "service-cirugias",
    slug: "cirugias",
    name: "Cirugías",
    longDescription:
      "Realizamos procedimientos quirúrgicos veterinarios para pequeños animales, con evaluación previa del paciente y acompañamiento profesional durante el proceso prequirúrgico y posquirúrgico.",
  },
  {
    id: "service-plan-de-vacunacion",
    slug: "plan-de-vacunacion",
    name: "Plan de vacunación",
    longDescription:
      "Asesoramos sobre el calendario de vacunación correspondiente según la edad, especie y condición sanitaria de cada mascota. También brindamos orientación sobre refuerzos, controles preventivos y cuidados asociados.",
  },
];

export function getServiceBySlug(slug: string) {
  return mockServices.find((service) => service.slug === slug);
}
