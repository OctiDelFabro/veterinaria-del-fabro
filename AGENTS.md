# AGENTS.md — Veterinaria Del Fabro

## Project overview

Este proyecto es una web responsive para Veterinaria Del Fabro, una veterinaria de pequeños animales ubicada en Jesús María, Córdoba.

La versión 1 debe incluir una vista pública para clientes y una vista privada para administración.

Vista pública:
- Inicio
- Catálogo
- Detalle de producto
- Servicios clínicos
- Detalle de servicio
- Contacto

Vista privada:
- Login administrador
- Panel administrador
- Gestión de productos
- Gestión de categorías
- Gestión de servicios
- Configuración de datos del negocio

## Stack

El stack actual del proyecto es:
- Next.js App Router
- TypeScript
- Tailwind CSS
- React
- Preparado para Prisma, PostgreSQL y Supabase en futuras tareas

No agregar ni cambiar tecnologías sin una tarea explícita.

## Commands

Usar estos comandos cuando corresponda:

npm install
npm run dev
npm run build
npm run lint

Si el entorno no permite instalar dependencias por restricciones de red, dejar constancia clara en el resumen del PR.

## Design rules

El diseño debe ser:
- Mobile-first
- Responsive
- Minimalista
- Profesional
- Limpio y claro

Identidad visual:
- Fondo principal blanco
- Violeta veterinario como color principal
- Detalles azules profesionales
- Texto gris oscuro
- Tarjetas con bordes suaves
- Sombras leves

Evitar diseños infantiles o demasiado cargados.

## Public catalog rules

El catálogo público debe:
- Mostrar productos sin requerir login
- Permitir búsqueda por nombre
- Permitir filtro por categoría
- Mostrar tarjetas simples de producto
- Cada tarjeta debe mostrar solamente imagen, nombre y estado de stock
- El estado de stock debe aparecer en la esquina superior izquierda como una banda inclinada
- Si hay stock, la banda dice “Disponible” en azul
- Si no hay stock, la banda dice “No disponible” en gris claro
- No mostrar precios
- No mostrar cantidad exacta de stock
- No mostrar descripción en la tarjeta
- No mostrar categoría en la tarjeta
- No mostrar botón de WhatsApp en la tarjeta
- La tarjeta completa debe ser clickeable
- Al hacer click en una tarjeta, debe abrirse el detalle del producto

## Product detail rules

El detalle de producto debe mostrar:
- Imagen
- Nombre
- Categoría
- Descripción breve
- Estado de stock
- Botón de consulta por WhatsApp
- Botón o enlace para volver al catálogo

No debe mostrar:
- Precio
- Cantidad exacta de stock
- Información administrativa

Mensajes de WhatsApp:
- Producto disponible: “Hola, quería consultar por el producto: [nombre del producto].”
- Producto no disponible: “Hola, quería consultar cuándo vuelve a ingresar el producto: [nombre del producto].”

## Services rules

La pantalla pública de servicios debe:
- Mostrar tarjetas simples de servicios
- Cada tarjeta muestra solo el nombre del servicio
- Las tarjetas no muestran descripción larga
- Las tarjetas no muestran botón específico de WhatsApp
- Al hacer click en una tarjeta, debe abrirse el detalle del servicio
- La pantalla de servicios sí debe tener un botón genérico de WhatsApp

Mensaje genérico:
“Hola, quería consultar por los servicios clínicos de la veterinaria.”

Servicios iniciales:
- Consultas
- Cirugías
- Plan de vacunación

## Service detail rules

El detalle de servicio debe mostrar:
- Nombre del servicio
- Descripción larga
- Botón específico de consulta por WhatsApp
- Botón o enlace para volver a servicios

No debe mostrar precios.

## Contact rules

La pantalla de contacto debe mostrar:
- Veterinaria Del Fabro
- Dirección: Cástulo Peña 667, Jesús María, Córdoba
- WhatsApp: 3525 549966
- Teléfono: 425-414
- Instagram: @veterinariadelfabro
- Horarios
- Botón de WhatsApp
- Botón de Instagram
- Botón “Cómo llegar”
- Mapa o enlace a Google Maps

Horarios:
- Lunes a viernes de 9:00 a 12:30 y de 17:00 a 20:30
- Sábados de 9:00 a 12:30
- Domingos cerrado

## Admin rules

La zona administrativa debe:
- Estar separada visual y funcionalmente de la vista pública
- No aparecer en la navegación pública
- Usar rutas bajo /admin
- Tener login en /admin/login
- No mostrar AdminSidebar en /admin/login
- Mostrar AdminSidebar solo en rutas privadas administrativas
- No implementar auth real hasta una tarea específica

Por ahora todos los administradores tienen los mismos permisos.

## Product admin rules

El administrador podrá gestionar productos con:
- Nombre
- Categoría
- Descripción breve
- Stock interno
- Imagen opcional
- Visible / Oculto
- Activo / Inactivo

El administrador sí puede ver stock exacto.
El cliente nunca ve stock exacto.

No eliminar productos definitivamente.
Solo ocultar o desactivar.

## Categories

Categorías iniciales:
- Alimentos
- Medicamentos
- Pipetas y Antiparasitarios
- Accesorios
- Higiene
- Juguetes
- Petshop
- Otros

Las categorías no deben eliminarse definitivamente.
Solo ocultarse o desactivarse.

## Business data

Nombre:
Veterinaria Del Fabro

Dirección:
Cástulo Peña 667, Jesús María, Córdoba

WhatsApp visible:
3525 549966

WhatsApp internacional:
5493525549966

Teléfono:
425-414

Instagram:
veterinariadelfabro

## Version 1 exclusions

No implementar en versión 1:
- Carrito
- Pagos online
- Login de clientes
- Turnos online
- Historia clínica
- Cuentas corrientes
- Deudas
- Reportes
- Roles avanzados

Estos módulos quedan para versiones futuras.

## Coding rules

- Usar TypeScript estricto.
- Usar componentes claros y reutilizables.
- Mantener nombres en inglés para archivos/componentes cuando sean técnicos.
- Mantener textos visibles al usuario en español.
- Evitar lógica duplicada.
- No hardcodear datos sensibles.
- No subir claves ni variables secretas.
- Usar variables de entorno para credenciales futuras.
- Mantener diseño responsive.

## Pull request rules

Cada PR debe:
- Tener alcance chico y claro
- Explicar qué cambió
- Explicar qué NO cambió
- Incluir comandos ejecutados
- Indicar si algún comando no pudo ejecutarse y por qué
- No mezclar documentación, diseño, base de datos y CRUD en un mismo PR salvo pedido explícito
