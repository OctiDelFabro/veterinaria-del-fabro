"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";
import { requireAdminUser } from "@/lib/auth/admin";

function getFormValue(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function updateBusinessSettings(formData: FormData): Promise<void> {
  await requireAdminUser();

  if (!process.env.DATABASE_URL) {
    redirect("/admin/configuracion?status=config");
  }

  const businessName = getFormValue(formData, "businessName");
  const address = getFormValue(formData, "address");
  const whatsappVisible = getFormValue(formData, "whatsappVisible");
  const whatsappInternational = getFormValue(formData, "whatsappInternational");
  const phone = getFormValue(formData, "phone");
  const instagramUser = getFormValue(formData, "instagramUser");
  const googleMapsUrl = getFormValue(formData, "googleMapsUrl");
  const mondayToFridayHours = getFormValue(formData, "mondayToFridayHours");
  const saturdayHours = getFormValue(formData, "saturdayHours");
  const sundayHours = getFormValue(formData, "sundayHours");

  if (!businessName || !address || !whatsappVisible || !whatsappInternational || !mondayToFridayHours || !saturdayHours || !sundayHours) {
    redirect("/admin/configuracion?status=missing-fields");
  }

  const horarios = `${mondayToFridayHours}. ${saturdayHours}. ${sundayHours}.`;

  try {
    const existingSettings = await prisma.configuracionNegocio.findFirst({
      orderBy: {
        createdAt: "asc",
      },
      select: {
        id: true,
      },
    });

    if (existingSettings) {
      await prisma.configuracionNegocio.update({
        where: {
          id: existingSettings.id,
        },
        data: {
          nombreNegocio: businessName,
          direccion: address,
          whatsappVisible,
          whatsappInternacional: whatsappInternational,
          telefono: phone || null,
          instagramUsuario: instagramUser || null,
          horarios,
          googleMapsUrl: googleMapsUrl || null,
        },
      });
    } else {
      await prisma.configuracionNegocio.create({
        data: {
          nombreNegocio: businessName,
          direccion: address,
          whatsappVisible,
          whatsappInternacional: whatsappInternational,
          telefono: phone || null,
          instagramUsuario: instagramUser || null,
          horarios,
          googleMapsUrl: googleMapsUrl || null,
        },
      });
    }
  } catch (error) {
    console.error("Error updating business settings", error);
    redirect("/admin/configuracion?status=error");
  }

  revalidatePath("/admin/configuracion");
  revalidatePath("/contacto");
  revalidatePath("/");
  redirect("/admin/configuracion?status=success");
}
