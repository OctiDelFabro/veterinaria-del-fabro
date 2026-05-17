import { loginAdmin } from "./actions";

type LoginPageProps = {
  searchParams?: Promise<{ status?: string }>;
};

const statusMessages: Record<string, string> = {
  config: "La autenticación no está configurada en este entorno.",
  "missing-fields": "Ingresá email y contraseña.",
  unauthorized: "El email no está autorizado como administrador.",
  invalid: "Credenciales inválidas.",
  unauthenticated: "Iniciá sesión para acceder al panel administrador.",
  "signed-out": "Sesión cerrada correctamente.",
};

export default async function AdminLoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const status = params?.status;
  const message = status ? statusMessages[status] : null;

  return (
    <section className="flex min-h-screen items-center justify-center bg-veterinarian-blueSoft/20 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-veterinarian-blueSoft/70 bg-white p-6 shadow-sm md:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-veterinarian-blue">Veterinaria Del Fabro</p>
        <h1 className="mt-2 text-2xl font-semibold text-veterinarian-violetDark">Acceso administrador</h1>
        <p className="mt-3 text-sm text-slate-600">Ingresá con tus credenciales para acceder al panel administrativo.</p>

        {message ? (
          <p className="mt-4 rounded-lg border border-veterinarian-blueSoft bg-veterinarian-blueSoft/30 px-3 py-2 text-sm text-veterinarian-violetDark">
            {message}
          </p>
        ) : null}

        <form action={loginAdmin} className="mt-6 space-y-4">
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium text-slate-700">
              Email
            </label>
            <input id="email" name="email" type="email" required className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none ring-veterinarian-violet/40 transition focus:ring-2" placeholder="admin@veterinariadelfabro.com" />
          </div>

          <div className="space-y-1">
            <label htmlFor="password" className="text-sm font-medium text-slate-700">
              Contraseña
            </label>
            <input id="password" name="password" type="password" required className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none ring-veterinarian-violet/40 transition focus:ring-2" placeholder="••••••••" />
          </div>

          <button type="submit" className="w-full rounded-lg bg-veterinarian-violet px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-veterinarian-violetDark">
            Ingresar
          </button>
        </form>
      </div>
    </section>
  );
}
