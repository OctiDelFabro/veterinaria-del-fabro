type AdminStatCardProps = {
  title: string;
  value: string;
  description?: string;
};

export function AdminStatCard({ title, value, description }: AdminStatCardProps) {
  return (
    <article className="rounded-xl border border-veterinarian-blueSoft/60 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-600">{title}</p>
      <p className="mt-2 text-2xl font-semibold text-veterinarian-violetDark">{value}</p>
      {description ? <p className="mt-1 text-sm text-slate-500">{description}</p> : null}
    </article>
  );
}
