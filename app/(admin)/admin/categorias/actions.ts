"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { requireAdminUser } from "@/lib/auth/admin";
import { prisma } from "@/lib/prisma";
import { generateSlug } from "@/lib/slug";

function parseCategoryFormData(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const rawSlug = String(formData.get("slug") ?? "").trim();

  return {
    name,
    slug: generateSlug(rawSlug.length > 0 ? rawSlug : name),
    visible: formData.get("visible") === "on",
    active: formData.get("active") === "on",
  };
}

export async function createCategory(formData: FormData): Promise<void> {
  await requireAdminUser();
  if (!process.env.DATABASE_URL) redirect("/admin/categorias?status=config");

  const { name, slug, visible, active } = parseCategoryFormData(formData);
  if (!name || !slug) redirect("/admin/categorias?status=missing-fields");

  let existingCategory;
  try {
    existingCategory = await prisma.categoria.findUnique({ where: { slug } });
  } catch (error) {
    console.error("Error managing category", error);
    redirect("/admin/categorias?status=error");
  }

  if (existingCategory) redirect("/admin/categorias?status=duplicate");

  try {
    await prisma.categoria.create({ data: { nombre: name, slug, visible, activo: active } });
  } catch (error) {
    console.error("Error managing category", error);
    redirect("/admin/categorias?status=error");
  }

  revalidatePath("/"); revalidatePath("/catalogo"); revalidatePath("/admin/categorias");
  redirect("/admin/categorias?status=created");
}

export async function updateCategory(id: string, formData: FormData): Promise<void> {
  await requireAdminUser();
  if (!process.env.DATABASE_URL) redirect("/admin/categorias?status=config");

  const { name, slug, visible, active } = parseCategoryFormData(formData);
  if (!name || !slug) redirect(`/admin/categorias/${id}/editar?status=missing-fields`);

  let existingCategory;
  try {
    existingCategory = await prisma.categoria.findUnique({ where: { id } });
  } catch (error) {
    console.error("Error managing category", error);
    redirect("/admin/categorias?status=error");
  }

  if (!existingCategory) redirect("/admin/categorias?status=not-found");

  let duplicateCategory;
  try {
    duplicateCategory = await prisma.categoria.findFirst({ where: { slug, NOT: { id } } });
  } catch (error) {
    console.error("Error managing category", error);
    redirect("/admin/categorias?status=error");
  }

  if (duplicateCategory) redirect(`/admin/categorias/${id}/editar?status=duplicate`);

  try {
    await prisma.categoria.update({ where: { id }, data: { nombre: name, slug, visible, activo: active } });
  } catch (error) {
    console.error("Error managing category", error);
    redirect("/admin/categorias?status=error");
  }

  revalidatePath("/"); revalidatePath("/catalogo"); revalidatePath("/admin/categorias"); revalidatePath(`/admin/categorias/${id}/editar`);
  redirect("/admin/categorias?status=updated");
}

export async function toggleCategoryVisibility(id: string): Promise<void> {
  await requireAdminUser();
  if (!process.env.DATABASE_URL) redirect("/admin/categorias?status=config");

  let category;
  try {
    category = await prisma.categoria.findUnique({ where: { id } });
  } catch (error) {
    console.error("Error managing category", error);
    redirect("/admin/categorias?status=error");
  }

  if (!category) redirect("/admin/categorias?status=not-found");

  try {
    await prisma.categoria.update({ where: { id }, data: { visible: !category.visible } });
  } catch (error) {
    console.error("Error managing category", error);
    redirect("/admin/categorias?status=error");
  }

  revalidatePath("/"); revalidatePath("/catalogo"); revalidatePath("/admin/categorias");
  redirect("/admin/categorias?status=updated");
}

export async function toggleCategoryActive(id: string): Promise<void> {
  await requireAdminUser();
  if (!process.env.DATABASE_URL) redirect("/admin/categorias?status=config");

  let category;
  try {
    category = await prisma.categoria.findUnique({ where: { id } });
  } catch (error) {
    console.error("Error managing category", error);
    redirect("/admin/categorias?status=error");
  }

  if (!category) redirect("/admin/categorias?status=not-found");

  try {
    await prisma.categoria.update({ where: { id }, data: { activo: !category.activo } });
  } catch (error) {
    console.error("Error managing category", error);
    redirect("/admin/categorias?status=error");
  }

  revalidatePath("/"); revalidatePath("/catalogo"); revalidatePath("/admin/categorias");
  redirect("/admin/categorias?status=updated");
}
