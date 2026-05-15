import Link from "next/link";

type AdminActionCardProps = {
  title: string;
  description: string;
  href: string;
  cta?: string;
};

export function AdminActionCard({ title, description, href, cta = "Abrir sección" }: AdminActionCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-xl border border-veterinarian-blueSoft/60 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-veterinarian-violet/50 hover:shadow"
    >
      <p className="text-base font-semibold text-veterinarian-violetDark">{title}</p>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      <p className="mt-4 text-sm font-medium text-veterinarian-blue group-hover:text-veterinarian-violetDark">{cta} →</p>
    </Link>
  );
}
