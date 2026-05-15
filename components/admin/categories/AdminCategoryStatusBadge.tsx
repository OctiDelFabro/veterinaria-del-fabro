type AdminCategoryStatusBadgeProps = {
  label: string;
  variant: "success" | "warning" | "neutral" | "danger";
};

const variantStyles: Record<AdminCategoryStatusBadgeProps["variant"], string> = {
  success: "border-emerald-200 bg-emerald-50 text-emerald-700",
  warning: "border-amber-200 bg-amber-50 text-amber-700",
  neutral: "border-slate-200 bg-slate-50 text-slate-700",
  danger: "border-rose-200 bg-rose-50 text-rose-700",
};

export function AdminCategoryStatusBadge({ label, variant }: AdminCategoryStatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${variantStyles[variant]}`}
    >
      {label}
    </span>
  );
}
