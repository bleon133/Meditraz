# Meditraz: Sistema de Trazabilidad de Medicamentos

## Descripción

Meditraz es una aplicación web diseñada como prototipo académico para la trazabilidad de medicamentos. Permite llevar un inventario digital de fármacos, registrar información detallada de cada medicamento, rastrearlo mediante código de barras, recibir alertas de caducidad y gestionar roles de usuario.

## Funcionalidades principales

* **Gestión de inventario:** Crear, editar y eliminar registros de medicamentos.
* **Trazabilidad por código de barras:** Escaneo y búsqueda rápida de productos.
* **Alertas de caducidad:** Notificaciones automáticas para medicamentos próximos a vencer.
* **Control de usuarios y roles:** Autenticación de usuarios con roles (administrador, farmacéutico).
* **Histórico de movimientos:** Registro de entradas y salidas de stock.

## Tecnologías utilizadas

* **Frontend:** Angular (SPA), HTML5, CSS3, TypeScript.
* **Backend (prototipo académico):** ASP.NET Core, API REST.
* **Base de datos:** SQL Server.
* **Control de versiones:** Git/GitHub.

> **Nota:** En el repositorio público se incluye principalmente el código del frontend en Angular. El backend se encuentra documentado en la publicación académica asociada.

## Instalación y ejecución

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/bleon133/meditraz-angular.git
   cd meditraz-angular
   ```

2. **Instalar dependencias de Angular:**

   ```bash
   npm install
   ```

3. **Configuración de la API backend:**

   * Asegúrate de tener una instancia de SQL Server en ejecución.
   * Crea la base de datos `MeditrazDB` y ejecuta los scripts de inicialización (disponibles en la documentación académica).
   * En el archivo `src/environments/environment.ts`, actualiza `apiUrl` con la URL de tu API ASP.NET Core.

4. **Levantar la aplicación Angular:**

   ```bash
   ng serve --open
   ```

   La aplicación estará disponible en `http://localhost:4200/`.

## Capturas de pantalla

<!-- Inserta aquí capturas de la interfaz: formularios de registro, listas de medicamentos, alertas de caducidad, etc. -->

![Listado de Medicamentos](./screenshots/listado-medicamentos.png)
![Detalle de Medicamento](./screenshots/detalle-medicamento.png)

## Origen académico

Este proyecto formó parte de un estudio de Ingeniería Biomédica de la Universidad Autónoma de Bucaramanga (UNAB). Los detalles de diseño y resultados se encuentran en la publicación:

> Pardo, A., & León, B. (2023). "Prototipo de sistema de trazabilidad de medicamentos basado en Angular y ASP.NET Core". *Repositorios Académicos UNAB*.

## Contribuciones

* **Brayan S. León M.** – Desarrollo del frontend en Angular y documentación.
* **Equipo de Ingeniería Biomédica UNAB** – Diseño de base de datos y especificaciones del flujo de trazabilidad.

## Licencia

Este proyecto está bajo la **Licencia MIT**. Revisa el archivo `LICENSE` para más detalles.

---

*Última actualización: Junio 2025*
