"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { requireAdminUser } from "@/lib/auth/admin";
import { prisma } from "@/lib/prisma";
import { generateSlug } from "@/lib/slug";

function parseServiceFormData(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const rawSlug = String(formData.get("slug") ?? "").trim();
  const longDescription = String(formData.get("longDescription") ?? "").trim();

  return {
    name,
    slug: generateSlug(rawSlug.length > 0 ? rawSlug : name),
    longDescription,
    visible: formData.get("visible") === "on",
    active: formData.get("active") === "on",
  };
}

export async function createService(formData: FormData): Promise<void> {
  await requireAdminUser();
  if (!process.env.DATABASE_URL) redirect("/admin/servicios?status=config");

  const { name, slug, longDescription, visible, active } = parseServiceFormData(formData);
  if (!name || !longDescription) redirect("/admin/servicios?status=missing-fields");

  let existingService;
  try {
    existingService = await prisma.servicio.findUnique({ where: { slug } });
  } catch (error) {
    console.error("Error managing service", error);
    redirect("/admin/servicios?status=error");
  }

  if (existingService) redirect("/admin/servicios?status=duplicate");

  try {
    await prisma.servicio.create({
      data: {
        nombre: name,
        slug,
        descripcionLarga: longDescription,
        visible,
        activo: active,
      },
    });
  } catch (error) {
    console.error("Error managing service", error);
    redirect("/admin/servicios?status=error");
  }

  revalidatePath("/");
  revalidatePath("/servicios");
  revalidatePath(`/servicios/${slug}`);
  revalidatePath("/admin/servicios");
  redirect("/admin/servicios?status=created");
}

export async function updateService(id: string, formData: FormData): Promise<void> {
  await requireAdminUser();
  if (!process.env.DATABASE_URL) redirect("/admin/servicios?status=config");

  const { name, slug, longDescription, visible, active } = parseServiceFormData(formData);
  if (!name || !longDescription) redirect(`/admin/servicios/${id}/editar?status=missing-fields`);

  let existingService;
  try {
    existingService = await prisma.servicio.findUnique({ where: { id } });
  } catch (error) {
    console.error("Error managing service", error);
    redirect("/admin/servicios?status=error");
  }

  if (!existingService) redirect("/admin/servicios?status=not-found");

  let duplicateService;
  try {
    duplicateService = await prisma.servicio.findFirst({ where: { slug, NOT: { id } } });
  } catch (error) {
    console.error("Error managing service", error);
    redirect("/admin/servicios?status=error");
  }

  if (duplicateService) redirect(`/admin/servicios/${id}/editar?status=duplicate`);

  try {
    await prisma.servicio.update({
      where: { id },
      data: {
        nombre: name,
        slug,
        descripcionLarga: longDescription,
        visible,
        activo: active,
      },
    });
  } catch (error) {
    console.error("Error managing service", error);
    redirect("/admin/servicios?status=error");
  }

  revalidatePath("/");
  revalidatePath("/servicios");
  revalidatePath(`/servicios/${slug}`);
  revalidatePath("/admin/servicios");
  revalidatePath(`/admin/servicios/${id}/editar`);
  redirect("/admin/servicios?status=updated");
}

export async function toggleServiceVisibility(id: string): Promise<void> {
  await requireAdminUser();
  if (!process.env.DATABASE_URL) redirect("/admin/servicios?status=config");

  let service;
  try {
    service = await prisma.servicio.findUnique({ where: { id } });
  } catch (error) {
    console.error("Error managing service", error);
    redirect("/admin/servicios?status=error");
  }

  if (!service) redirect("/admin/servicios?status=not-found");

  try {
    await prisma.servicio.update({ where: { id }, data: { visible: !service.visible } });
  } catch (error) {
    console.error("Error managing service", error);
    redirect("/admin/servicios?status=error");
  }

  revalidatePath("/");
  revalidatePath("/servicios");
  revalidatePath(`/servicios/${service.slug}`);
  revalidatePath("/admin/servicios");
  redirect("/admin/servicios?status=updated");
}

export async function toggleServiceActive(id: string): Promise<void> {
  await requireAdminUser();
  if (!process.env.DATABASE_URL) redirect("/admin/servicios?status=config");

  let service;
  try {
    service = await prisma.servicio.findUnique({ where: { id } });
  } catch (error) {
    console.error("Error managing service", error);
    redirect("/admin/servicios?status=error");
  }

  if (!service) redirect("/admin/servicios?status=not-found");

  try {
    await prisma.servicio.update({ where: { id }, data: { activo: !service.activo } });
  } catch (error) {
    console.error("Error managing service", error);
    redirect("/admin/servicios?status=error");
  }

  revalidatePath("/");
  revalidatePath("/servicios");
  revalidatePath(`/servicios/${service.slug}`);
  revalidatePath("/admin/servicios");
  redirect("/admin/servicios?status=updated");
}
