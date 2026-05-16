import { prisma } from "@/lib/prisma";

export type PublicProduct = {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  stock: number;
  imageUrl?: string | null;
};

export type AdminProduct = {
  id: string;
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  stock: number;
  visible: boolean;
  active: boolean;
  imageUrl?: string | null;
};

export const fallbackPublicProducts: PublicProduct[] = [
  {
    id: "p1",
    slug: "royal-canin-mini-adult-3kg",
    name: "Royal Canin Mini Adult 3kg",
    category: "Alimentos",
    shortDescription: "Alimento balanceado para perros adultos de raza pequeña.",
    stock: 8,
    imageUrl: null,
  },
  {
    id: "p2",
    slug: "pro-plan-puppy-3kg",
    name: "Pro Plan Puppy 3kg",
    category: "Alimentos",
    shortDescription: "Alimento balanceado para cachorros.",
    stock: 0,
    imageUrl: null,
  },
  {
    id: "p3",
    slug: "pipeta-antipulgas-para-perros",
    name: "Pipeta antipulgas para perros",
    category: "Pipetas y Antiparasitarios",
    shortDescription: "Pipeta para control externo de pulgas y garrapatas.",
    stock: 12,
    imageUrl: null,
  },
  {
    id: "p4",
    slug: "collar-regulable-para-perro",
    name: "Collar regulable para perro",
    category: "Accesorios",
    shortDescription: "Collar cómodo y regulable para uso diario.",
    stock: 4,
    imageUrl: null,
  },
  {
    id: "p5",
    slug: "shampoo-hipoalergenico",
    name: "Shampoo hipoalergénico",
    category: "Higiene",
    shortDescription: "Shampoo para higiene y cuidado del pelaje.",
    stock: 0,
    imageUrl: null,
  },
  {
    id: "p6",
    slug: "pelota-mordillo",
    name: "Pelota mordillo",
    category: "Juguetes",
    shortDescription: "Juguete resistente para perros.",
    stock: 7,
    imageUrl: null,
  },
  {
    id: "p7",
    slug: "comedero-plastico-mediano",
    name: "Comedero plástico mediano",
    category: "Petshop",
    shortDescription: "Comedero práctico para perros y gatos.",
    stock: 3,
    imageUrl: null,
  },
  {
    id: "p8",
    slug: "antiparasitario-interno",
    name: "Antiparasitario interno",
    category: "Medicamentos",
    shortDescription: "Producto veterinario para control de parásitos internos.",
    stock: 6,
    imageUrl: null,
  },
  {
    id: "p9",
    slug: "arena-sanitaria-aglutinante",
    name: "Arena sanitaria aglutinante",
    category: "Higiene",
    shortDescription: "Arena de alta absorción para bandeja sanitaria.",
    stock: 10,
    imageUrl: null,
  },
  {
    id: "p10",
    slug: "transportadora-plastica-mediana",
    name: "Transportadora plástica mediana",
    category: "Accesorios",
    shortDescription: "Transportadora ventilada para traslados seguros.",
    stock: 2,
    imageUrl: null,
  },
  {
    id: "p11",
    slug: "snack-premium-para-gatos",
    name: "Snack premium para gatos",
    category: "Otros",
    shortDescription: "Snack complementario para premiar y estimular.",
    stock: 0,
    imageUrl: null,
  },
  {
    id: "p12",
    slug: "vitaminas-multiespecie",
    name: "Vitaminas multiespecie",
    category: "Medicamentos",
    shortDescription: "Suplemento vitamínico para apoyo nutricional.",
    stock: 5,
    imageUrl: null,
  },
];

export const fallbackAdminProducts: AdminProduct[] = fallbackPublicProducts.map((product) => ({
  ...product,
  visible: product.id === "p4" || product.id === "p8" ? false : true,
  active: product.id === "p5" || product.id === "p8" ? false : true,
}));

export async function getPublicProducts(): Promise<PublicProduct[]> {
  if (!process.env.DATABASE_URL) {
    return fallbackPublicProducts;
  }

  try {
    const products = await prisma.producto.findMany({
      where: { visible: true, activo: true },
      include: { categoria: true },
      orderBy: { createdAt: "asc" },
    });

    if (products.length === 0) {
      return fallbackPublicProducts;
    }

    return products.map((product) => ({
      id: product.id,
      name: product.nombre,
      slug: product.slug,
      shortDescription: product.descripcionBreve ?? "",
      stock: product.stock,
      imageUrl: product.imagenUrl,
      category: product.categoria.nombre,
    }));
  } catch (error) {
    console.error("Error loading public products from database:", error);
    return fallbackPublicProducts;
  }
}

export async function getPublicProductBySlug(slug: string): Promise<PublicProduct | undefined> {
  if (!process.env.DATABASE_URL) {
    return fallbackPublicProducts.find((product) => product.slug === slug);
  }

  try {
    const product = await prisma.producto.findFirst({
      where: { slug, visible: true, activo: true },
      include: { categoria: true },
    });

    if (!product) {
      return fallbackPublicProducts.find((fallbackProduct) => fallbackProduct.slug === slug);
    }

    return {
      id: product.id,
      name: product.nombre,
      slug: product.slug,
      shortDescription: product.descripcionBreve ?? "",
      stock: product.stock,
      imageUrl: product.imagenUrl,
      category: product.categoria.nombre,
    };
  } catch (error) {
    console.error("Error loading public product by slug from database:", error);
    return fallbackPublicProducts.find((product) => product.slug === slug);
  }
}

export async function getAdminProducts(): Promise<AdminProduct[]> {
  if (!process.env.DATABASE_URL) {
    return fallbackAdminProducts;
  }

  try {
    const products = await prisma.producto.findMany({
      include: { categoria: true },
      orderBy: { createdAt: "asc" },
    });

    if (products.length === 0) {
      return fallbackAdminProducts;
    }

    return products.map((product) => ({
      id: product.id,
      name: product.nombre,
      slug: product.slug,
      shortDescription: product.descripcionBreve ?? "",
      stock: product.stock,
      imageUrl: product.imagenUrl,
      visible: product.visible,
      active: product.activo,
      category: product.categoria.nombre,
    }));
  } catch (error) {
    console.error("Error loading admin products from database:", error);
    return fallbackAdminProducts;
  }
}

export async function getAdminProductById(id: string): Promise<AdminProduct | undefined> {
  if (!process.env.DATABASE_URL) {
    return fallbackAdminProducts.find((product) => product.id === id);
  }

  try {
    const product = await prisma.producto.findUnique({
      where: { id },
      include: { categoria: true },
    });

    if (!product) {
      return fallbackAdminProducts.find((fallbackProduct) => fallbackProduct.id === id);
    }

    return {
      id: product.id,
      name: product.nombre,
      slug: product.slug,
      shortDescription: product.descripcionBreve ?? "",
      stock: product.stock,
      imageUrl: product.imagenUrl,
      visible: product.visible,
      active: product.activo,
      category: product.categoria.nombre,
    };
  } catch (error) {
    console.error("Error loading admin product by id from database:", error);
    return fallbackAdminProducts.find((product) => product.id === id);
  }
}
