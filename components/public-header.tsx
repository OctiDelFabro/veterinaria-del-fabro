import Link from "next/link";

import { WhatsAppButton } from "@/components/public/WhatsAppButton";
import { businessData } from "@/lib/business-data";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/servicios", label: "Servicios" },
  { href: "/contacto", label: "Contacto" },
];

export function PublicHeader() {
  return (
    <header className="border-b border-veterinarian-blueSoft bg-white">
      <div className="container-main flex flex-col gap-4 py-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="text-xl font-bold text-veterinarian-violet">
            {businessData.name}
          </Link>
          <WhatsAppButton message="Hola, quería hacer una consulta a Veterinaria Del Fabro." className="w-full sm:w-auto">
            WhatsApp
          </WhatsAppButton>
        </div>
        <nav className="flex flex-wrap gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-veterinarian-blueSoft hover:text-veterinarian-violetDark"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
