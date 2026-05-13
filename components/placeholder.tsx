export function Placeholder({ title, description }: { title: string; description: string }) {
  return (
    <section className="rounded-xl border border-veterinarian-blueSoft bg-white p-6 shadow-sm">
      <h1 className="text-2xl font-semibold text-veterinarian-violet">{title}</h1>
      <p className="mt-2 text-slate-600">{description}</p>
    </section>
  );
}
