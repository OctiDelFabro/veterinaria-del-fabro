export type AdminService = {
  id: string;
  name: string;
  slug: string;
  longDescription: string;
  visible: boolean;
  active: boolean;
};

export const mockAdminServices: AdminService[] = [
  {
    id: "service-consultas",
    name: "Consultas",
    slug: "consultas",
    longDescription:
      "Atención clínica para pequeños animales. Realizamos consultas generales, controles de salud, evaluación de síntomas, seguimiento de tratamientos y orientación veterinaria según la necesidad de cada mascota.",
    visible: true,
    active: true,
  },
  {
    id: "service-cirugias",
    name: "Cirugías",
    slug: "cirugias",
    longDescription:
      "Realizamos procedimientos quirúrgicos veterinarios para pequeños animales, con evaluación previa del paciente y acompañamiento profesional durante el proceso prequirúrgico y posquirúrgico.",
    visible: true,
    active: true,
  },
  {
    id: "service-plan-vacunacion",
    name: "Plan de vacunación",
    slug: "plan-de-vacunacion",
    longDescription:
      "Asesoramos sobre el calendario de vacunación correspondiente según la edad, especie y condición sanitaria de cada mascota. También brindamos orientación sobre refuerzos, controles preventivos y cuidados asociados.",
    visible: true,
    active: true,
  },
];

export function getAdminServiceById(id: string): AdminService | undefined {
  return mockAdminServices.find((service) => service.id === id);
}
