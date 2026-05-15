export type ProductCategory =
  | "Alimentos"
  | "Medicamentos"
  | "Pipetas y Antiparasitarios"
  | "Accesorios"
  | "Higiene"
  | "Juguetes"
  | "Petshop"
  | "Otros";

export type MockProduct = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  stock: number;
  imageUrl?: string | null;
};

export const mockProducts: MockProduct[] = [
  {
    id: "p1",
    slug: "royal-canin-mini-adult-3kg",
    name: "Royal Canin Mini Adult 3kg",
    category: "Alimentos",
    shortDescription: "Alimento balanceado para perros adultos de raza pequeña.",
    stock: 8,
    imageUrl: null
  },
  {
    id: "p2",
    slug: "pro-plan-puppy-3kg",
    name: "Pro Plan Puppy 3kg",
    category: "Alimentos",
    shortDescription: "Alimento balanceado para cachorros.",
    stock: 0,
    imageUrl: null
  },
  {
    id: "p3",
    slug: "pipeta-antipulgas-para-perros",
    name: "Pipeta antipulgas para perros",
    category: "Pipetas y Antiparasitarios",
    shortDescription: "Pipeta para control externo de pulgas y garrapatas.",
    stock: 12,
    imageUrl: null
  },
  {
    id: "p4",
    slug: "collar-regulable-para-perro",
    name: "Collar regulable para perro",
    category: "Accesorios",
    shortDescription: "Collar cómodo y regulable para uso diario.",
    stock: 4,
    imageUrl: null
  },
  {
    id: "p5",
    slug: "shampoo-hipoalergenico",
    name: "Shampoo hipoalergénico",
    category: "Higiene",
    shortDescription: "Shampoo para higiene y cuidado del pelaje.",
    stock: 0,
    imageUrl: null
  },
  {
    id: "p6",
    slug: "pelota-mordillo",
    name: "Pelota mordillo",
    category: "Juguetes",
    shortDescription: "Juguete resistente para perros.",
    stock: 7,
    imageUrl: null
  },
  {
    id: "p7",
    slug: "comedero-plastico-mediano",
    name: "Comedero plástico mediano",
    category: "Petshop",
    shortDescription: "Comedero práctico para perros y gatos.",
    stock: 3,
    imageUrl: null
  },
  {
    id: "p8",
    slug: "antiparasitario-interno",
    name: "Antiparasitario interno",
    category: "Medicamentos",
    shortDescription: "Producto veterinario para control de parásitos internos.",
    stock: 6,
    imageUrl: null
  },
  {
    id: "p9",
    slug: "arena-sanitaria-aglutinante",
    name: "Arena sanitaria aglutinante",
    category: "Higiene",
    shortDescription: "Arena de alta absorción para bandeja sanitaria.",
    stock: 10,
    imageUrl: null
  },
  {
    id: "p10",
    slug: "transportadora-plastica-mediana",
    name: "Transportadora plástica mediana",
    category: "Accesorios",
    shortDescription: "Transportadora ventilada para traslados seguros.",
    stock: 2,
    imageUrl: null
  },
  {
    id: "p11",
    slug: "snack-premium-para-gatos",
    name: "Snack premium para gatos",
    category: "Otros",
    shortDescription: "Snack complementario para premiar y estimular.",
    stock: 0,
    imageUrl: null
  },
  {
    id: "p12",
    slug: "vitaminas-multiespecie",
    name: "Vitaminas multiespecie",
    category: "Medicamentos",
    shortDescription: "Suplemento vitamínico para apoyo nutricional.",
    stock: 5,
    imageUrl: null
  }
];

export function getProductBySlug(slug: string) {
  return mockProducts.find((product) => product.slug === slug);
}
