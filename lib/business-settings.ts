import { prisma } from "@/lib/prisma";

export type PublicBusinessSettings = {
  businessName: string;
  address: string;
  whatsappVisible: string;
  whatsappInternational: string;
  phone: string;
  instagramUser: string;
  instagramUrl: string;
  googleMapsUrl: string;
  hours: string[];
};

export const fallbackBusinessSettings: PublicBusinessSettings = {
  businessName: "Veterinaria Del Fabro",
  address: "Cástulo Peña 667, Jesús María, Córdoba",
  whatsappVisible: "3525 549966",
  whatsappInternational: "5493525549966",
  phone: "425-414",
  instagramUser: "veterinariadelfabro",
  instagramUrl: "https://www.instagram.com/veterinariadelfabro",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=C%C3%A1stulo%20Pe%C3%B1a%20667%2C%20Jes%C3%BAs%20Mar%C3%ADa%2C%20C%C3%B3rdoba",
  hours: [
    "Lunes a viernes de 9:00 a 12:30 y de 17:00 a 20:30",
    "Sábados de 9:00 a 12:30",
    "Domingos cerrado",
  ],
};

export async function getPublicBusinessSettings(): Promise<PublicBusinessSettings> {
  if (!process.env.DATABASE_URL) {
    return fallbackBusinessSettings;
  }

  try {
    const businessSettings = await prisma.configuracionNegocio.findFirst({
      orderBy: {
        createdAt: "asc",
      },
    });

    if (!businessSettings) {
      return fallbackBusinessSettings;
    }

    const parsedHours = businessSettings.horarios
      .split(". ")
      .map((hour) => hour.trim())
      .filter(Boolean);

    const instagramUser = businessSettings.instagramUsuario?.trim() || fallbackBusinessSettings.instagramUser;

    return {
      businessName: businessSettings.nombreNegocio,
      address: businessSettings.direccion,
      whatsappVisible: businessSettings.whatsappVisible,
      whatsappInternational: businessSettings.whatsappInternacional,
      phone: businessSettings.telefono?.trim() || fallbackBusinessSettings.phone,
      instagramUser,
      instagramUrl: `https://www.instagram.com/${instagramUser}`,
      googleMapsUrl: businessSettings.googleMapsUrl?.trim() || fallbackBusinessSettings.googleMapsUrl,
      hours: parsedHours.length > 0 ? parsedHours : fallbackBusinessSettings.hours,
    };
  } catch (error) {
    console.error("Error loading public business settings", error);
    return fallbackBusinessSettings;
  }
}
