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
