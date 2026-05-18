# Veterinaria Del Fabro

Base inicial del proyecto con **Next.js App Router + TypeScript + Tailwind CSS**.

## Requisitos
- Node.js 20+
- npm 10+

## Ejecutar en desarrollo
```bash
npm install
npm run dev
```

## Scripts
```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Alcance de esta base
- Layout público y rutas públicas placeholder.
- Layout administrativo y rutas privadas placeholder.
- Estructura inicial para Prisma y Supabase **sin** configuración de base de datos ni auth.


## Admin authentication setup

Variables necesarias:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `ADMIN_EMAILS`

Pasos:
1. Crear usuario en Supabase Authentication.
2. Agregar su email a `ADMIN_EMAILS`.
3. Ejecutar `npm run dev`.
4. Entrar a `/admin/login`.

No usar `service_role` en frontend ni en variables públicas.

Para que /admin/configuracion pueda guardar cambios:

- `DATABASE_URL` debe estar configurada.
- El usuario debe iniciar sesión con Supabase Auth.
- El email del usuario debe estar incluido en `ADMIN_EMAILS`.

No usar `service_role`.

Para gestionar categorías desde el panel admin:

- `DATABASE_URL` debe estar configurada.
- El usuario debe iniciar sesión con Supabase Auth.
- El email debe estar incluido en `ADMIN_EMAILS`.

No usar `service_role`.

## Project documentation

- [SDD](./docs/SDD.md)
- [Checklist V1](./docs/CHECKLIST_V1.md)
- [Agent instructions](./AGENTS.md)


## Database commands
```bash
npm run db:generate
npm run db:push
npm run db:migrate
npm run db:seed
npm run db:studio
```

Para usar Prisma se debe crear un archivo `.env` local basado en `.env.example` y configurar `DATABASE_URL`.

## Local database setup

Para conectar Prisma con Supabase localmente se debe crear un archivo `.env` basado en `.env.example` y configurar `DATABASE_URL`.

Comandos útiles:

```bash
npm run db:generate
npm run db:push
npm run db:seed
npm run db:studio
```
