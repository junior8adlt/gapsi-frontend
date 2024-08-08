# Prueba Gapsi Frontend

Este proyecto es la interfaz de usuario de una aplicación web construida con React y Vite. La aplicación está diseñada para ser una Progressive Web App (PWA) y utiliza varias librerías para mejorar la funcionalidad y la experiencia del usuario.


## Instalación

Sigue estos pasos para ejecutar el proyecto en tu entorno local
1. Clona el repositorio

2. Navega a la carpeta del proyecto 
```bash
  cd <Nombre del proyecto>
```

3. Instala las dependencias
```bash
  npm install
```

4. Ejecuta el proyecto
```bash
  npm run dev 
```
## Variables de entorno
Crea un archivo .env en la raíz del proyecto para definir las variables de entorno necesarias:

```bash
VITE_MODE=development
VITE_BASE_URL=/
VITE_API_URL=http://localhost:3000
```
## Building para Produccíon
Para crear una versión optimizada del proyecto para producción, ejecuta:
```bash
  npm run build 
```
Esto generará los archivos optimizados en la carpeta dist, listos para ser desplegados.

## Progressive Web App (PWA)
Este proyecto está configurado como una PWA para proporcionar una experiencia de usuario mejorada. Las características de la PWA incluyen:
- Service Worker: Utiliza un service-worker.js para permitir la funcionalidad offline y el caching de recursos.
- Manifest: Incluye un archivo manifest.webmanifest para definir el aspecto y comportamiento de la aplicación cuando se instala en el dispositivo del usuario.

## Librerias
A continuación, se describen las librerías principales utilizadas en el proyecto y su propósito:

- react-hot-toast:
Proporciona notificaciones de toast de forma sencilla y elegante. Se utiliza para mostrar mensajes de éxito y error en la interfaz de usuario.

- react-router-dom:
Maneja el enrutamiento en la aplicación React. Permite la navegación entre diferentes vistas de manera eficiente.

- react-virtualized:
Facilita la visualización de grandes listas de datos mediante virtualización, mejorando el rendimiento al renderizar solo los elementos visibles en pantalla.

- @mui:
Libreria con componentes UI que nos ayudan a agilizar las integraciónes y construcción de la aplicación web.

- axios: 
Facilita la realización de solicitudes HTTP desde el navegador. Se utiliza para interactuar con la API del backend y gestionar datos.

## Estructura del proyecto
- src/: Contiene el código fuente de la aplicación.
- components/: Componentes reutilizables de la interfaz.
- pages/: Componentes de página para el enrutamiento.
- serviceWorkerRegistration.js: Manejador para el registro del service worker.
- main.jsx: Punto de entrada de la aplicación.
- public/: Contiene archivos estáticos, como el service-worker.js y el manifest asi como assets usados en el proyecto.

## Patrones de diseno 
- Componentes Funcionales: Los componentes funcionales son una forma de construir componentes en React utilizando funciones en lugar de clases. Estos componentes son más simples y se centran en la representación visual y en recibir datos a través de props, lo utilice en los componentes Welcome, ProviderList y AddProviderForm
- Patrón de Contenedor/Presentacional: En el patrón contenedor/presentacional, los componentes se dividen en dos tipos:
  - Contenedores: Manejan la lógica del negocio y el estado.
  - Presentacionales: Se encargan de la representación visual y reciben datos a través de props.

Los use en:
ProvidersList es el contenedor que maneja el estado de los proveedores y las operaciones relacionadas (agregar, eliminar, etc.).
AddProviderForm es un componente presentacional que muestra el formulario y envía datos al contenedor a través de callbacks.

- Patrón de Diseño de Enrutamiento: El enrutamiento permite a la aplicación de una sola página (SPA) manejar múltiples vistas sin recargar la página completa. Utiliza rutas para renderizar diferentes componentes basados en la URL.


## Contribuciones
Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tus cambios (git checkout -b feature/nueva-caracteristica).
3. Realiza tus cambios y haz commit (git commit -am 'Agrega nueva característica').
4. Haz push a tu rama (git push origin feature/nueva-caracteristica).
5. Crea un pull request desde la rama de tu fork.