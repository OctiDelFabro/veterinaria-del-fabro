type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-2xl space-y-2">
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-wide text-veterinarian-blue">{eyebrow}</p> : null}
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
      {description ? <p className="text-sm text-slate-600 sm:text-base">{description}</p> : null}
    </div>
  );
}
