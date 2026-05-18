import { prisma } from "@/lib/prisma";

export type AdminBusinessSettings = {
  businessName: string;
  address: string;
  whatsappVisible: string;
  whatsappInternational: string;
  phone: string;
  instagramUser: string;
  googleMapsUrl: string;
  mondayToFridayHours: string;
  saturdayHours: string;
  sundayHours: string;
};

export const fallbackAdminBusinessSettings: AdminBusinessSettings = {
  businessName: "Veterinaria Del Fabro",
  address: "Cástulo Peña 667, Jesús María, Córdoba",
  whatsappVisible: "3525 549966",
  whatsappInternational: "5493525549966",
  phone: "425-414",
  instagramUser: "veterinariadelfabro",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=C%C3%A1stulo%20Pe%C3%B1a%20667%2C%20Jes%C3%BAs%20Mar%C3%ADa%2C%20C%C3%B3rdoba",
  mondayToFridayHours: "Lunes a viernes de 9:00 a 12:30 y de 17:00 a 20:30",
  saturdayHours: "Sábados de 9:00 a 12:30",
  sundayHours: "Domingos cerrado",
};

export async function getAdminBusinessSettings(): Promise<AdminBusinessSettings> {
  if (!process.env.DATABASE_URL) {
    return fallbackAdminBusinessSettings;
  }

  try {
    const businessSettings = await prisma.configuracionNegocio.findFirst({
      orderBy: {
        createdAt: "asc",
      },
    });

    if (!businessSettings) {
      return fallbackAdminBusinessSettings;
    }

    const parsedHours = businessSettings.horarios
      .split(".")
      .map((hour) => hour.trim())
      .filter(Boolean);

    return {
      businessName: businessSettings.nombreNegocio,
      address: businessSettings.direccion,
      whatsappVisible: businessSettings.whatsappVisible,
      whatsappInternational: businessSettings.whatsappInternacional,
      phone: businessSettings.telefono?.trim() || fallbackAdminBusinessSettings.phone,
      instagramUser: businessSettings.instagramUsuario?.trim() || fallbackAdminBusinessSettings.instagramUser,
      googleMapsUrl: businessSettings.googleMapsUrl?.trim() || fallbackAdminBusinessSettings.googleMapsUrl,
      mondayToFridayHours: parsedHours[0] || fallbackAdminBusinessSettings.mondayToFridayHours,
      saturdayHours: parsedHours[1] || fallbackAdminBusinessSettings.saturdayHours,
      sundayHours: parsedHours[2] || fallbackAdminBusinessSettings.sundayHours,
    };
  } catch (error) {
    console.error("Error loading admin business settings", error);
    return fallbackAdminBusinessSettings;
  }
}
