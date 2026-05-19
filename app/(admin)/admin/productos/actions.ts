"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { requireAdminUser } from "@/lib/auth/admin";
import { prisma } from "@/lib/prisma";
import { generateSlug } from "@/lib/slug";
import { hasSupabaseServerConfig } from "@/lib/supabase/server";
import { uploadProductImage } from "@/lib/supabase/storage";

function parseProductFormData(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const rawSlug = String(formData.get("slug") ?? "").trim();
  const categoryId = String(formData.get("categoryId") ?? "").trim();
  const shortDescription = String(formData.get("shortDescription") ?? "").trim();
  const rawStock = String(formData.get("stock") ?? "").trim();
  const imageFile = formData.get("imageFile");

  return {
    name,
    slug: generateSlug(rawSlug.length > 0 ? rawSlug : name),
    categoryId,
    shortDescription,
    rawStock,
    imageFile,
    visible: formData.get("visible") === "on",
    active: formData.get("active") === "on",
  };
}

function parseStock(rawStock: string): number | null {
  const stock = Number(rawStock);
  if (!Number.isInteger(stock) || stock < 0) {
    return null;
  }

  return stock;
}

export async function createProduct(formData: FormData): Promise<void> {
  await requireAdminUser();
  if (!process.env.DATABASE_URL) redirect("/admin/productos?status=config");

  const { name, slug, categoryId, shortDescription, rawStock, imageFile, visible, active } = parseProductFormData(formData);
  if (!name || !categoryId || !shortDescription || !rawStock) redirect("/admin/productos?status=missing-fields");

  const stock = parseStock(rawStock);
  if (stock === null) redirect("/admin/productos?status=invalid-stock");

  let category;
  try {
    category = await prisma.categoria.findUnique({ where: { id: categoryId } });
  } catch (error) {
    console.error("Error managing product", error);
    redirect("/admin/productos?status=error");
  }

  if (!category) redirect("/admin/productos?status=invalid-category");

  let duplicate;
  try {
    duplicate = await prisma.producto.findUnique({ where: { slug } });
  } catch (error) {
    console.error("Error managing product", error);
    redirect("/admin/productos?status=error");
  }

  if (duplicate) redirect("/admin/productos?status=duplicate");

  let imagenUrl: string | null = null;
  if (imageFile instanceof File && imageFile.size > 0) {
    if (!hasSupabaseServerConfig()) {
      redirect("/admin/productos?status=image-error");
    }

    try {
      imagenUrl = await uploadProductImage({ file: imageFile, productSlug: slug });
    } catch (error) {
      if (error instanceof Error && error.message === "Invalid product image") {
        redirect("/admin/productos?status=invalid-image");
      }

      console.error("Error uploading product image", error);
      redirect("/admin/productos?status=image-error");
    }
  }

  try {
    await prisma.producto.create({
      data: {
        nombre: name,
        slug,
        descripcionBreve: shortDescription,
        stock,
        imagenUrl,
        visible,
        activo: active,
        categoriaId: categoryId,
      },
    });
  } catch (error) {
    console.error("Error managing product", error);
    redirect("/admin/productos?status=error");
  }

  revalidatePath("/");
  revalidatePath("/catalogo");
  revalidatePath(`/catalogo/${slug}`);
  revalidatePath("/admin/productos");
  redirect("/admin/productos?status=created");
}

export async function updateProduct(id: string, formData: FormData): Promise<void> {
  await requireAdminUser();
  if (!process.env.DATABASE_URL) redirect("/admin/productos?status=config");

  const { name, slug, categoryId, shortDescription, rawStock, imageFile, visible, active } = parseProductFormData(formData);
  if (!name || !categoryId || !shortDescription || !rawStock) redirect(`/admin/productos/${id}/editar?status=missing-fields`);

  const stock = parseStock(rawStock);
  if (stock === null) redirect(`/admin/productos/${id}/editar?status=invalid-stock`);

  let existingProduct;
  try {
    existingProduct = await prisma.producto.findUnique({ where: { id } });
  } catch (error) {
    console.error("Error managing product", error);
    redirect("/admin/productos?status=error");
  }

  if (!existingProduct) redirect("/admin/productos?status=not-found");

  let category;
  try {
    category = await prisma.categoria.findUnique({ where: { id: categoryId } });
  } catch (error) {
    console.error("Error managing product", error);
    redirect("/admin/productos?status=error");
  }

  if (!category) redirect(`/admin/productos/${id}/editar?status=invalid-category`);

  let duplicate;
  try {
    duplicate = await prisma.producto.findFirst({ where: { slug, NOT: { id } } });
  } catch (error) {
    console.error("Error managing product", error);
    redirect("/admin/productos?status=error");
  }

  if (duplicate) redirect(`/admin/productos/${id}/editar?status=duplicate`);

  let imagenUrl: string | undefined;
  if (imageFile instanceof File && imageFile.size > 0) {
    if (!hasSupabaseServerConfig()) {
      redirect(`/admin/productos/${id}/editar?status=image-error`);
    }

    try {
      imagenUrl = await uploadProductImage({ file: imageFile, productSlug: slug });
    } catch (error) {
      if (error instanceof Error && error.message === "Invalid product image") {
        redirect(`/admin/productos/${id}/editar?status=invalid-image`);
      }

      console.error("Error uploading product image", error);
      redirect(`/admin/productos/${id}/editar?status=image-error`);
    }
  }

  try {
    await prisma.producto.update({
      where: { id },
      data: {
        nombre: name,
        slug,
        descripcionBreve: shortDescription,
        stock,
        visible,
        activo: active,
        categoriaId: categoryId,
        ...(imagenUrl ? { imagenUrl } : {}),
      },
    });
  } catch (error) {
    console.error("Error managing product", error);
    redirect("/admin/productos?status=error");
  }

  revalidatePath("/");
  revalidatePath("/catalogo");
  revalidatePath(`/catalogo/${slug}`);
  if (existingProduct.slug !== slug) {
    revalidatePath(`/catalogo/${existingProduct.slug}`);
  }
  revalidatePath("/admin/productos");
  revalidatePath(`/admin/productos/${id}/editar`);
  redirect("/admin/productos?status=updated");
}

export async function toggleProductVisibility(id: string): Promise<void> {
  await requireAdminUser();
  if (!process.env.DATABASE_URL) redirect("/admin/productos?status=config");

  let product;
  try {
    product = await prisma.producto.findUnique({ where: { id } });
  } catch (error) {
    console.error("Error managing product", error);
    redirect("/admin/productos?status=error");
  }

  if (!product) redirect("/admin/productos?status=not-found");

  try {
    await prisma.producto.update({ where: { id }, data: { visible: !product.visible } });
  } catch (error) {
    console.error("Error managing product", error);
    redirect("/admin/productos?status=error");
  }

  revalidatePath("/");
  revalidatePath("/catalogo");
  revalidatePath(`/catalogo/${product.slug}`);
  revalidatePath("/admin/productos");
  redirect("/admin/productos?status=updated");
}

export async function toggleProductActive(id: string): Promise<void> {
  await requireAdminUser();
  if (!process.env.DATABASE_URL) redirect("/admin/productos?status=config");

  let product;
  try {
    product = await prisma.producto.findUnique({ where: { id } });
  } catch (error) {
    console.error("Error managing product", error);
    redirect("/admin/productos?status=error");
  }

  if (!product) redirect("/admin/productos?status=not-found");

  try {
    await prisma.producto.update({ where: { id }, data: { activo: !product.activo } });
  } catch (error) {
    console.error("Error managing product", error);
    redirect("/admin/productos?status=error");
  }

  revalidatePath("/");
  revalidatePath("/catalogo");
  revalidatePath(`/catalogo/${product.slug}`);
  revalidatePath("/admin/productos");
  redirect("/admin/productos?status=updated");
}
