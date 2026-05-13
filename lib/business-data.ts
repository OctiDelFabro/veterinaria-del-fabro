export const businessData = {
  name: "Veterinaria Del Fabro",
  shortDescription: "Atención veterinaria para pequeños animales en Jesús María.",
  description:
    "Productos de petshop, alimentos, medicamentos y servicios clínicos para el cuidado de tu mascota.",
  address: "Cástulo Peña 667, Jesús María, Córdoba",
  whatsappVisible: "3525 549966",
  whatsappInternational: "5493525549966",
  phone: "425-414",
  instagramUser: "veterinariadelfabro",
  instagramUrl: "https://www.instagram.com/veterinariadelfabro",
  hours: [
    "Lunes a viernes de 9:00 a 12:30 y de 17:00 a 20:30",
    "Sábados de 9:00 a 12:30",
    "Domingos cerrado",
  ],
  mapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=C%C3%A1stulo%20Pe%C3%B1a%20667%2C%20Jes%C3%BAs%20Mar%C3%ADa%2C%20C%C3%B3rdoba",
} as const;

export const initialCategories = [
  "Alimentos",
  "Medicamentos",
  "Pipetas y Antiparasitarios",
  "Accesorios",
  "Higiene",
  "Juguetes",
  "Petshop",
  "Otros",
] as const;

export const initialServices = ["Consultas", "Cirugías", "Plan de vacunación"] as const;
