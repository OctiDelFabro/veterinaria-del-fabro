export default function AdminLoginPage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-veterinarian-blueSoft/20 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-veterinarian-blueSoft/70 bg-white p-6 shadow-sm md:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-veterinarian-blue">Veterinaria Del Fabro</p>
        <h1 className="mt-2 text-2xl font-semibold text-veterinarian-violetDark">Acceso administrador</h1>
        <p className="mt-3 text-sm text-slate-600">
          Ingresá con tus credenciales para administrar productos, categorías, servicios y datos del negocio.
        </p>

        <form className="mt-6 space-y-4">
          <div className="space-y-1">
            <label htmlFor="admin-email" className="text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              id="admin-email"
              type="email"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none ring-veterinarian-violet/40 transition focus:ring-2"
              placeholder="admin@veterinariadelfabro.com"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="admin-password" className="text-sm font-medium text-slate-700">
              Contraseña
            </label>
            <input
              id="admin-password"
              type="password"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none ring-veterinarian-violet/40 transition focus:ring-2"
              placeholder="••••••••"
            />
          </div>

          <button
            type="button"
            className="w-full rounded-lg bg-veterinarian-violet px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-veterinarian-violetDark"
          >
            Ingresar
          </button>
        </form>

        <p className="mt-4 text-xs text-slate-500">La autenticación real se integrará en una próxima etapa.</p>
      </div>
    </section>
  );
}
