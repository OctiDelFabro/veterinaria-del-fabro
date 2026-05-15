export type AdminCategory = {
  id: string;
  name: string;
  slug: string;
  visible: boolean;
  active: boolean;
  productCount: number;
};

export const mockAdminCategories: AdminCategory[] = [
  {
    id: "ac1",
    name: "Alimentos",
    slug: "alimentos",
    visible: true,
    active: true,
    productCount: 2,
  },
  {
    id: "ac2",
    name: "Medicamentos",
    slug: "medicamentos",
    visible: true,
    active: true,
    productCount: 2,
  },
  {
    id: "ac3",
    name: "Pipetas y Antiparasitarios",
    slug: "pipetas-y-antiparasitarios",
    visible: true,
    active: true,
    productCount: 1,
  },
  {
    id: "ac4",
    name: "Accesorios",
    slug: "accesorios",
    visible: true,
    active: true,
    productCount: 2,
  },
  {
    id: "ac5",
    name: "Higiene",
    slug: "higiene",
    visible: true,
    active: true,
    productCount: 2,
  },
  {
    id: "ac6",
    name: "Juguetes",
    slug: "juguetes",
    visible: true,
    active: true,
    productCount: 1,
  },
  {
    id: "ac7",
    name: "Petshop",
    slug: "petshop",
    visible: true,
    active: true,
    productCount: 1,
  },
  {
    id: "ac8",
    name: "Otros",
    slug: "otros",
    visible: true,
    active: true,
    productCount: 1,
  },
];

export function getAdminCategoryById(id: string): AdminCategory | undefined {
  return mockAdminCategories.find((category) => category.id === id);
}
