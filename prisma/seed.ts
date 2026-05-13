import { prisma } from "../lib/prisma";
import { generateSlug } from "../lib/slug";

const categories = [
  "Alimentos",
  "Medicamentos",
  "Pipetas y Antiparasitarios",
  "Accesorios",
  "Higiene",
  "Juguetes",
  "Petshop",
  "Otros",
];

const services = [
  {
    nombre: "Consultas",
    descripcionLarga:
      "Atención clínica para pequeños animales. Realizamos consultas generales, controles de salud, evaluación de síntomas, seguimiento de tratamientos y orientación veterinaria según la necesidad de cada mascota.",
  },
  {
    nombre: "Cirugías",
    descripcionLarga:
      "Realizamos procedimientos quirúrgicos veterinarios para pequeños animales, con evaluación previa del paciente y acompañamiento profesional durante el proceso prequirúrgico y posquirúrgico.",
  },
  {
    nombre: "Plan de vacunación",
    descripcionLarga:
      "Asesoramos sobre el calendario de vacunación correspondiente según la edad, especie y condición sanitaria de cada mascota. También brindamos orientación sobre refuerzos, controles preventivos y cuidados asociados.",
  },
];

async function main() {
  console.log("Seed started");

  await Promise.all(
    categories.map((nombre) => {
      const slug = generateSlug(nombre);
      return prisma.categoria.upsert({
        where: { slug },
        update: { nombre, visible: true, activo: true },
        create: { nombre, slug, visible: true, activo: true },
      });
    }),
  );
  console.log("Categories seeded");

  await Promise.all(
    services.map(({ nombre, descripcionLarga }) => {
      const slug = generateSlug(nombre);
      return prisma.servicio.upsert({
        where: { slug },
        update: { nombre, slug, descripcionLarga, visible: true, activo: true },
        create: { nombre, slug, descripcionLarga, visible: true, activo: true },
      });
    }),
  );
  console.log("Services seeded");

  const existingConfig = await prisma.configuracionNegocio.findFirst({
    orderBy: { createdAt: "asc" },
  });

  const configData = {
    nombreNegocio: "Veterinaria Del Fabro",
    direccion: "Cástulo Peña 667, Jesús María, Córdoba",
    whatsappVisible: "3525 549966",
    whatsappInternacional: "5493525549966",
    telefono: "425-414",
    instagramUsuario: "veterinariadelfabro",
    horarios:
      "Lunes a viernes de 9:00 a 12:30 y de 17:00 a 20:30. Sábados de 9:00 a 12:30. Domingos cerrado.",
    googleMapsUrl: null,
  };

  if (!existingConfig) {
    await prisma.configuracionNegocio.create({ data: configData });
  } else {
    await prisma.configuracionNegocio.update({
      where: { id: existingConfig.id },
      data: configData,
    });
  }
  console.log("Business configuration seeded");

  console.log("Seed completed");
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
