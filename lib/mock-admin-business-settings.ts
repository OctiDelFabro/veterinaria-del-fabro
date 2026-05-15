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

export const mockAdminBusinessSettings: AdminBusinessSettings = {
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
