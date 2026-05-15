type StockRibbonProps = {
  stock: number;
};

export function StockRibbon({ stock }: StockRibbonProps) {
  const isAvailable = stock > 0;

  return (
    <span
      className={`absolute left-[-2.75rem] top-4 w-44 -rotate-45 py-1 text-center text-xs font-semibold uppercase tracking-wide ${
        isAvailable ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-700"
      }`}
    >
      {isAvailable ? "Disponible" : "No disponible"}
    </span>
  );
}
