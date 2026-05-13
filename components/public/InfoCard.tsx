type InfoCardProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

export function InfoCard({ title, description, children }: InfoCardProps) {
  return (
    <article className="rounded-xl border border-veterinarian-blueSoft bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      {children ? <div className="mt-4">{children}</div> : null}
    </article>
  );
}
