export function PublicFooter() {
  return (
    <footer className="border-t border-veterinarian-blueSoft bg-white py-6">
      <div className="container-main text-sm text-slate-500">
        © {new Date().getFullYear()} Veterinaria Del Fabro.
      </div>
    </footer>
  );
}
