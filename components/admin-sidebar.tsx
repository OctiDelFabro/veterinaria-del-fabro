import Link from "next/link";

const adminLinks = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/productos", label: "Productos" },
  { href: "/admin/categorias", label: "Categorías" },
  { href: "/admin/servicios", label: "Servicios" },
  { href: "/admin/configuracion", label: "Configuración" },
];

export function AdminSidebar() {
  return (
    <aside className="w-full border-r border-veterinarian-blueSoft bg-veterinarian-blueSoft/30 md:max-w-64">
      <div className="p-4">
        <p className="mb-4 text-lg font-semibold text-veterinarian-violet">Panel Admin</p>
        <nav className="space-y-1">
          {adminLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-md px-3 py-2 text-sm text-slate-700 transition hover:bg-white hover:text-veterinarian-violetDark"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
