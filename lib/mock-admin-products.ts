import type { ProductCategory } from "@/lib/mock-products";

export type AdminProduct = {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  shortDescription: string;
  stock: number;
  visible: boolean;
  active: boolean;
  imageUrl?: string | null;
};

export const mockAdminProducts: AdminProduct[] = [
  {
    id: "ap1",
    name: "Royal Canin Mini Adult 3kg",
    slug: "royal-canin-mini-adult-3kg",
    category: "Alimentos",
    shortDescription: "Alimento balanceado para perros adultos de raza pequeña.",
    stock: 8,
    visible: true,
    active: true,
    imageUrl: null,
  },
  {
    id: "ap2",
    name: "Pro Plan Puppy 3kg",
    slug: "pro-plan-puppy-3kg",
    category: "Alimentos",
    shortDescription: "Alimento balanceado para cachorros.",
    stock: 0,
    visible: true,
    active: true,
    imageUrl: null,
  },
  {
    id: "ap3",
    name: "Pipeta antipulgas para perros",
    slug: "pipeta-antipulgas-para-perros",
    category: "Pipetas y Antiparasitarios",
    shortDescription: "Pipeta para control externo de pulgas y garrapatas.",
    stock: 12,
    visible: true,
    active: true,
    imageUrl: null,
  },
  {
    id: "ap4",
    name: "Collar regulable para perro",
    slug: "collar-regulable-para-perro",
    category: "Accesorios",
    shortDescription: "Collar cómodo y regulable para uso diario.",
    stock: 4,
    visible: false,
    active: true,
    imageUrl: null,
  },
  {
    id: "ap5",
    name: "Shampoo hipoalergénico",
    slug: "shampoo-hipoalergenico",
    category: "Higiene",
    shortDescription: "Shampoo para higiene y cuidado del pelaje.",
    stock: 0,
    visible: true,
    active: false,
    imageUrl: null,
  },
  {
    id: "ap6",
    name: "Pelota mordillo",
    slug: "pelota-mordillo",
    category: "Juguetes",
    shortDescription: "Juguete resistente para perros.",
    stock: 7,
    visible: true,
    active: true,
    imageUrl: null,
  },
  {
    id: "ap7",
    name: "Comedero plástico mediano",
    slug: "comedero-plastico-mediano",
    category: "Petshop",
    shortDescription: "Comedero práctico para perros y gatos.",
    stock: 3,
    visible: true,
    active: true,
    imageUrl: null,
  },
  {
    id: "ap8",
    name: "Antiparasitario interno",
    slug: "antiparasitario-interno",
    category: "Medicamentos",
    shortDescription: "Producto veterinario para control de parásitos internos.",
    stock: 6,
    visible: false,
    active: false,
    imageUrl: null,
  },
];

export function getAdminProductById(id: string): AdminProduct | undefined {
  return mockAdminProducts.find((product) => product.id === id);
}
