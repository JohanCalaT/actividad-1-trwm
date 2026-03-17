# Actividad 1 - TRWM

Este proyecto es una aplicación Node.js/Express desarrollada como parte de la Actividad 1 de la asignatura TRWM.

## Requisitos Previos

- [Node.js](https://nodejs.org/) (versión 14 o superior recomendada)
- npm (incluido con Node.js)

## Instalación

1. Clona el repositorio (o descarga los archivos).
2. Abre una terminal en la carpeta del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

```bash
npm install
```

## Estructura del Proyecto

- `app_server`: Contiene la lógica del servidor, controladores y rutas.
- `bin/www`: Script de inicio de la aplicación.
- `public`: Archivos estáticos (imágenes, CSS, JS del cliente).
- `package.json`: Definición de dependencias y scripts de npm.

## Ejecución

Para iniciar la aplicación en modo desarrollo (con recarga automática):

```bash
npm run start:dev
```

Para iniciar la aplicación en modo producción:

```bash
npm start
```

La aplicación estará disponible en `http://localhost:3000` (o el puerto configurado por defecto).

## Tecnologías Utilizadas

- Express.js
- Pug (Motor de plantillas)
- Morgan (Middleware de registro de logs)
- Cookie-parser
- Nodemon (Desarrollo)
