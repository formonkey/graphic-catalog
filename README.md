# Prueba técnica - Listado de Tarjeta Gráfica

## Descripción

Se trata de una aplicación web que muestra un listado de tarjetas gráficas, con la posibilidad de filtrar por modelo con
un buscador

## Tecnologías

- Angular
- TailwindCSS
- Typescript
- RxJS
- Karma + Jasmine
- Docker
- Docker Compose
- Nginx
- NodeJS
- ExpressJS
- GraphQL

### Requisitos

- Docker
- Docker Compose
- NodeJS
- NPM
- NVM

## Instalación

En el proyecto nos encontramos con dos carpetas, client y serverless

### Client

Esta es la parte front desarrollada con Angular

Lo primoer es iniciar la terminal en esta carpeta con la versión de node correcta, para ello ejecutaremos el siguiente
comando:

```bash
nvm use
```

Para instalar las dependencias ejecutar:

```bash
npm install
```

Para iniciar el front podríamos ejecutar:

```bash
npm start
```

Para arrancar el docker-compose es necesario hacer el build del proyecto con este comando:

```bash
npm run build
```

Pero para poder hacer peticiones a la API GraphQL necesitamos que el servidor esté levantado, por lo que lo
mejor es ejecutar el siguiente comando en la carpeta principal:

```bash
docker-compose up
```

### Serverless

Esta es la parte back desarrollada con NodeJS y ExpressJS

Lo primero es iniciar la terminal en esta carpeta con la versión de node correcta, para ello ejecutaremos el siguiente
comando:

```bash
nvm use
```

Para instalar las dependencias ejecutar:

```bash
npm install
```

Para iniciar el servidor ejecutar:

```bash
npm run start
```

Pero para poder hacer peticiones a la API GraphQL necesitamos que el servidor esté levantado, por lo que lo
mejor es ejecutar el siguiente comando en la carpeta principal:

```bash
docker-compose up
```

