# Veterinaria Del Fabro

Sitio web para **Veterinaria Del Fabro** con vista pública, catálogo, servicios, contacto y panel administrativo protegido. El panel permite gestionar productos, categorías, servicios, configuración del negocio e imágenes de productos mediante Prisma y Supabase.

## Stack actual
- Next.js App Router
- TypeScript
- Tailwind CSS
- Prisma
- Supabase Auth
- Supabase Storage
- PostgreSQL / Supabase

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

## Alcance actual
- Vista pública completa: inicio, catálogo, detalle de producto, servicios, detalle de servicio y contacto.
- Vista administrativa bajo `/admin` con autenticación de Supabase.
- Rutas `/admin` protegidas con verificación de sesión y `ADMIN_EMAILS`.
- CRUD real con Prisma para productos, categorías y servicios.
- Gestión por estado para productos/categorías/servicios (mostrar/ocultar y activar/desactivar).
- Sin eliminación definitiva para productos, categorías ni servicios.
- Configuración del negocio con persistencia real mediante Prisma.
- Imágenes de productos integradas con Supabase Storage.
- Dashboard administrativo con métricas reales.

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

Para acceder y gestionar datos administrativos:

- `DATABASE_URL` debe estar configurada.
- El usuario debe iniciar sesión con Supabase Auth.
- El email del usuario debe estar incluido en `ADMIN_EMAILS`.

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

## Product image storage setup

Para habilitar imágenes de productos:

1. Crear un bucket en Supabase Storage llamado `product-images`.
2. El bucket puede ser público para poder usar URLs públicas.
3. Configurar policies para permitir operaciones de usuarios autenticados en ese bucket.
4. En `.env` se puede definir: `SUPABASE_PRODUCT_IMAGES_BUCKET="product-images"`.

Aclaraciones:

- No usar `service_role`.
- La acción server-side valida que el usuario sea admin con Supabase Auth y `ADMIN_EMAILS` antes de subir imágenes.
