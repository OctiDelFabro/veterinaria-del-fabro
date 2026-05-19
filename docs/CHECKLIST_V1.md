# Checklist V1 — Veterinaria Del Fabro

## Base del proyecto
- [x] Next.js App Router configurado
- [x] TypeScript configurado
- [x] Tailwind configurado
- [x] Rutas públicas implementadas
- [x] Rutas admin implementadas
- [x] Layout público
- [x] Layout admin
- [x] Login separado del layout admin

## Documentación
- [x] AGENTS.md creado
- [x] SDD documentado
- [x] Checklist V1 creado
- [x] README enlaza documentación

## Vista pública
- [x] Inicio implementado
- [x] Catálogo implementado
- [x] Buscador de productos
- [x] Filtros por categoría
- [x] Tarjetas de producto simples
- [x] Banda inclinada de stock
- [x] Detalle de producto
- [x] WhatsApp en detalle de producto
- [x] Servicios implementado
- [x] Tarjetas simples de servicios
- [x] Detalle de servicio
- [x] Botón genérico de WhatsApp en servicios
- [x] Contacto implementado
- [x] Mapa o enlace de Google Maps

## Vista administrativa
- [x] Login visual implementado
- [x] Protección de rutas admin
- [x] Panel admin implementado
- [x] Gestión de productos
- [x] Formulario de producto
- [x] Gestión de categorías
- [x] Gestión de servicios
- [x] Configuración del negocio

Nota: Gestión real de productos implementada con Prisma: crear, editar, mostrar/ocultar y activar/desactivar. Imágenes integradas con Supabase Storage. No se implementa eliminación.
Nota: Gestión real de categorías implementada con Prisma: crear, editar, mostrar/ocultar y activar/desactivar. No se implementa eliminación.
Nota: Gestión real de servicios implementada con Prisma: crear, editar, mostrar/ocultar y activar/desactivar. No se implementa eliminación.
Nota: Configuración del negocio con persistencia real mediante Prisma; protegida por Supabase Auth.
Nota: Rutas /admin protegidas con Supabase Auth y lista ADMIN_EMAILS.

## Base de datos
- [x] Prisma configurado
- [x] Modelo Categoria
- [x] Modelo Producto
- [x] Modelo Servicio
- [x] Modelo ConfiguracionNegocio
- [x] Modelo AdminProfile
- [x] Seed inicial

Nota: Contacto público conectado a configuracion_negocio mediante Prisma.
Nota: Categorías públicas y administrativas conectadas a Prisma.
Nota: Servicios públicos y administrativos conectados a Prisma.
Nota: Productos públicos y administrativos conectados a Prisma.

## Integraciones
- [x] Supabase Auth
- [x] Supabase Storage
- [x] WhatsApp links
- [x] Instagram link
- [x] Google Maps link

## QA
- [ ] npm install
- [ ] npm run build
- [ ] npm run lint
- [ ] Revisión responsive mobile
- [x] Revisión de rutas públicas
- [x] Revisión de rutas admin
- [x] Revisión visual general

Nota: Imágenes de productos integradas con Supabase Storage. Pendiente eliminación de archivos antiguos del bucket.

Nota final: Revisión final visual y de estados vacíos realizada. Pendiente: eliminación de archivos antiguos del bucket y mejoras futuras.
