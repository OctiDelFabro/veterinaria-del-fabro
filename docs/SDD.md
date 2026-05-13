# SDD — Veterinaria Del Fabro

## 1. Visión del producto

Web responsive para Veterinaria Del Fabro, orientada a mostrar productos, servicios clínicos y datos de contacto a clientes, y permitir administración interna de productos, stock, categorías, servicios y datos del negocio.

## 2. Usuarios

### Cliente
Puede:
- Ver inicio
- Ver catálogo
- Buscar productos
- Filtrar productos
- Ver detalle de producto
- Ver servicios
- Ver detalle de servicio
- Consultar por WhatsApp
- Ver contacto

No puede:
- Acceder al panel administrador
- Modificar productos
- Ver stock exacto
- Ver precios
- Ver información interna

### Administrador
Puede:
- Iniciar sesión
- Acceder al panel administrador
- Gestionar productos
- Gestionar categorías
- Gestionar servicios
- Editar datos del negocio

## 3. Vista pública

Rutas:
- /
- /catalogo
- /catalogo/[slug]
- /servicios
- /servicios/[slug]
- /contacto

## 4. Vista administrativa

Rutas:
- /admin/login
- /admin
- /admin/productos
- /admin/productos/nuevo
- /admin/productos/[id]/editar
- /admin/categorias
- /admin/servicios
- /admin/configuracion

## 5. Inicio

La pantalla de inicio debe mostrar:
- Veterinaria Del Fabro
- Atención veterinaria para pequeños animales en Jesús María
- Productos de petshop, alimentos, medicamentos y servicios clínicos
- Botones:
  - Ver catálogo
  - Servicios clínicos
  - Consultar por WhatsApp

## 6. Catálogo

La pantalla catálogo debe tener:
- Título
- Buscador
- Filtros por categoría
- Tarjetas simples de productos

Cada tarjeta muestra:
- Imagen
- Nombre
- Banda inclinada de stock

Estados:
- Disponible: banda azul
- No disponible: banda gris claro

La tarjeta abre el detalle de producto.

## 7. Detalle de producto

Debe mostrar:
- Imagen
- Nombre
- Categoría
- Descripción breve
- Estado de stock
- Botón WhatsApp
- Volver al catálogo

No mostrar:
- Precio
- Stock exacto

## 8. Servicios

Servicios iniciales:
- Consultas
- Cirugías
- Plan de vacunación

La pantalla servicios muestra tarjetas simples con nombre.
Incluye botón genérico de WhatsApp.

## 9. Detalle de servicio

Debe mostrar:
- Nombre
- Descripción larga
- Botón específico de WhatsApp
- Volver a servicios

## 10. Contacto

Datos:
- Dirección: Cástulo Peña 667, Jesús María, Córdoba
- WhatsApp: 3525 549966
- Teléfono: 425-414
- Instagram: @veterinariadelfabro
- Horarios:
  - Lunes a viernes de 9:00 a 12:30 y de 17:00 a 20:30
  - Sábados de 9:00 a 12:30
  - Domingos cerrado

## 11. Categorías

Categorías:
- Alimentos
- Medicamentos
- Pipetas y Antiparasitarios
- Accesorios
- Higiene
- Juguetes
- Petshop
- Otros

## 12. Reglas de stock

Internamente:
- stock > 0 significa disponible
- stock = 0 significa no disponible

Públicamente:
- No mostrar stock exacto
- Solo mostrar Disponible / No disponible

## 13. Administración

Productos:
- Crear
- Editar
- Cambiar stock
- Ocultar / mostrar
- Activar / desactivar

Categorías:
- Crear
- Editar
- Ocultar / mostrar
- Activar / desactivar

Servicios:
- Crear
- Editar
- Ocultar / mostrar
- Activar / desactivar

Datos del negocio:
- Nombre
- Dirección
- WhatsApp
- Teléfono
- Instagram
- Horarios
- Google Maps URL

## 14. Versión 2 futura

Queda fuera de V1:
- Clientes registrados
- Cuentas corrientes
- Deudas
- Turnos online
- Historia clínica
- Reportes
- Carrito
- Pagos online
