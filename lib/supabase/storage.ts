import { createSupabaseServerClient } from "@/lib/supabase/server";

export const productImagesBucket = process.env.SUPABASE_PRODUCT_IMAGES_BUCKET || "product-images";

const MAX_IMAGE_SIZE_BYTES = 3 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

export function isValidProductImage(file: File): boolean {
  return file.size > 0 && file.size <= MAX_IMAGE_SIZE_BYTES && ALLOWED_IMAGE_TYPES.has(file.type);
}

function sanitizeFileName(fileName: string): string {
  const lastDotIndex = fileName.lastIndexOf(".");
  const hasExtension = lastDotIndex > 0;
  const rawName = hasExtension ? fileName.slice(0, lastDotIndex) : fileName;

  const normalized = rawName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  return normalized || "image";
}

function getExtension(file: File): string {
  const fromName = file.name.includes(".") ? file.name.split(".").pop()?.toLowerCase() : "";
  if (fromName && /^[a-z0-9]+$/.test(fromName)) {
    return fromName;
  }

  if (file.type === "image/jpeg") return "jpg";
  if (file.type === "image/png") return "png";
  if (file.type === "image/webp") return "webp";

  return "bin";
}

export function getProductImagePath(productSlug: string, file: File): string {
  const safeSlug = productSlug.toLowerCase().replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "") || "producto";
  const safeFileName = sanitizeFileName(file.name);
  const extension = getExtension(file);
  const timestamp = Date.now();

  return `products/${safeSlug}/${timestamp}-${safeFileName}.${extension}`;
}

export async function uploadProductImage(params: { file: File; productSlug: string }): Promise<string> {
  const { file, productSlug } = params;

  if (!isValidProductImage(file)) {
    throw new Error("Invalid product image");
  }

  const supabase = await createSupabaseServerClient();
  const path = getProductImagePath(productSlug, file);
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const { error: uploadError } = await supabase.storage.from(productImagesBucket).upload(path, buffer, {
    contentType: file.type,
    upsert: false,
  });

  if (uploadError) {
    throw uploadError;
  }

  const { data } = supabase.storage.from(productImagesBucket).getPublicUrl(path);

  if (!data.publicUrl) {
    throw new Error("Unable to get public URL for product image");
  }

  return data.publicUrl;
}
