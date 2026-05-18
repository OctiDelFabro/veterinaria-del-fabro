import { prisma } from "@/lib/prisma";

export type PublicCategory = {
  id: string;
  name: string;
  slug: string;
};

export type AdminCategory = {
  id: string;
  name: string;
  slug: string;
  visible: boolean;
  active: boolean;
  productCount: number;
};

const fallbackCategoryData = [
  { id: "fc1", name: "Alimentos", slug: "alimentos" },
  { id: "fc2", name: "Medicamentos", slug: "medicamentos" },
  { id: "fc3", name: "Pipetas y Antiparasitarios", slug: "pipetas-y-antiparasitarios" },
  { id: "fc4", name: "Accesorios", slug: "accesorios" },
  { id: "fc5", name: "Higiene", slug: "higiene" },
  { id: "fc6", name: "Juguetes", slug: "juguetes" },
  { id: "fc7", name: "Petshop", slug: "petshop" },
  { id: "fc8", name: "Otros", slug: "otros" },
] as const;

export const fallbackPublicCategories: PublicCategory[] = fallbackCategoryData.map((category) => ({
  id: category.id,
  name: category.name,
  slug: category.slug,
}));

const fallbackProductCountsBySlug: Record<string, number> = {
  alimentos: 2,
  medicamentos: 2,
  "pipetas-y-antiparasitarios": 1,
  accesorios: 2,
  higiene: 2,
  juguetes: 1,
  petshop: 1,
  otros: 1,
};

export const fallbackAdminCategories: AdminCategory[] = fallbackCategoryData.map((category) => ({
  id: category.id,
  name: category.name,
  slug: category.slug,
  visible: true,
  active: true,
  productCount: fallbackProductCountsBySlug[category.slug] ?? 0,
}));

export async function getPublicCategories(): Promise<PublicCategory[]> {
  if (!process.env.DATABASE_URL) {
    return fallbackPublicCategories;
  }

  try {
    const categories = await prisma.categoria.findMany({
      where: {
        visible: true,
        activo: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    if (categories.length === 0) {
      return fallbackPublicCategories;
    }

    return categories.map((category) => ({
      id: category.id,
      name: category.nombre,
      slug: category.slug,
    }));
  } catch (error) {
    console.error("Error loading public categories", error);
    return fallbackPublicCategories;
  }
}

export async function getAdminCategories(): Promise<AdminCategory[]> {
  if (!process.env.DATABASE_URL) {
    return fallbackAdminCategories;
  }

  try {
    const categories = await prisma.categoria.findMany({
      orderBy: {
        createdAt: "asc",
      },
      include: {
        _count: {
          select: {
            productos: true,
          },
        },
      },
    });

    if (categories.length === 0) {
      return fallbackAdminCategories;
    }

    return categories.map((category) => ({
      id: category.id,
      name: category.nombre,
      slug: category.slug,
      visible: category.visible,
      active: category.activo,
      productCount: category._count.productos,
    }));
  } catch (error) {
    console.error("Error loading admin categories", error);
    return fallbackAdminCategories;
  }
}


export async function getAdminCategoryById(id: string): Promise<AdminCategory | undefined> {
  const fallbackCategory = fallbackAdminCategories.find((category) => category.id === id);

  if (!process.env.DATABASE_URL) {
    return fallbackCategory;
  }

  try {
    const category = await prisma.categoria.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            productos: true,
          },
        },
      },
    });

    if (!category) {
      return fallbackCategory;
    }

    return {
      id: category.id,
      name: category.nombre,
      slug: category.slug,
      visible: category.visible,
      active: category.activo,
      productCount: category._count.productos,
    };
  } catch (error) {
    console.error("Error loading admin category by id", error);
    return fallbackCategory;
  }
}
