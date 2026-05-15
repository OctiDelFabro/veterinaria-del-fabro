import Link from "next/link";

const adminLinks = [
  { href: "/admin", label: "Panel" },
  { href: "/admin/productos", label: "Productos" },
  { href: "/admin/categorias", label: "Categorías" },
  { href: "/admin/servicios", label: "Servicios" },
  { href: "/admin/configuracion", label: "Datos del negocio" },
];

export function AdminSidebar() {
  return (
    <aside className="flex w-full flex-col border-r border-veterinarian-blueSoft/70 bg-veterinarian-blueSoft/30 md:min-h-screen md:max-w-64">
      <div className="border-b border-veterinarian-blueSoft/80 p-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-veterinarian-blue">Veterinaria Del Fabro</p>
        <p className="mt-1 text-lg font-semibold text-veterinarian-violetDark">Panel administrador</p>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {adminLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-white hover:text-veterinarian-violetDark"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="p-4 pt-2">
        <button
          type="button"
          disabled
          className="w-full cursor-not-allowed rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-400"
        >
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
}
