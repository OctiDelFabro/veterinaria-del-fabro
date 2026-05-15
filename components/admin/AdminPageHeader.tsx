type AdminPageHeaderProps = {
  title: string;
  description?: string;
};

export function AdminPageHeader({ title, description }: AdminPageHeaderProps) {
  return (
    <header className="space-y-2">
      <h1 className="text-2xl font-semibold text-veterinarian-violetDark md:text-3xl">{title}</h1>
      {description ? <p className="max-w-3xl text-sm text-slate-600 md:text-base">{description}</p> : null}
    </header>
  );
}
