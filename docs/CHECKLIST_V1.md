# Checklist V1 — Veterinaria Del Fabro

## Base del proyecto
- [x] Next.js App Router configurado
- [x] TypeScript configurado
- [x] Tailwind configurado
- [x] Rutas públicas placeholder
- [x] Rutas admin placeholder
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
- [ ] Gestión de productos
- [ ] Formulario de producto
- [x] Gestión de categorías
- [ ] Gestión de servicios
- [x] Configuración del negocio

Nota: UI inicial de productos implementada con datos mock; pendiente CRUD real.
Nota: Gestión real de categorías implementada con Prisma: crear, editar, mostrar/ocultar y activar/desactivar. No se implementa eliminación.
Nota: UI inicial de servicios implementada con datos mock; pendiente CRUD real.
Nota: Configuración del negocio con persistencia real mediante Prisma; protegida por Supabase Auth.

## Base de datos
- [x] Prisma configurado
- [x] Modelo Categoria
- [x] Modelo Producto
- [x] Modelo Servicio
- [x] Modelo ConfiguracionNegocio
- [x] Modelo AdminProfile
- [x] Seed inicial

Nota: Contacto público conectado a configuracion_negocio mediante Prisma con fallback estático.
Nota: Categorías públicas y administrativas conectadas a Prisma con fallback estático.
Nota: Servicios públicos y administrativos conectados a Prisma con fallback estático.
Nota: Productos públicos y administrativos conectados a Prisma con fallback estático.

## Integraciones
- [x] Supabase Auth
- [ ] Supabase Storage
- [x] WhatsApp links
- [x] Instagram link
- [x] Google Maps link

## QA
- [ ] npm install
- [ ] npm run build
- [ ] npm run lint
- [ ] Revisión responsive mobile
- [ ] Revisión de rutas públicas
- [ ] Revisión de rutas admin
- [ ] Revisión visual general

Nota: Rutas /admin protegidas con Supabase Auth y lista ADMIN_EMAILS; CRUD real pendiente.
