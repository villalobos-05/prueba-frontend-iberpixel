# Proyecto Prueba Frontend Iberpixel

## Instrucciones de Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/villalobos-05/prueba-frontend-iberpixel.git
```

2. Navegar al directorio del proyecto:

```bash
cd prueba-frontend-iberpixel
```

3. Instalar las dependencias:

```bash
npm install
```

## Cómo Ejecutar el Proyecto

1. Iniciar el servidor en modo desarrollo:

```bash
npm run dev
```

2. Ir a `http://localhost:5173` para ver la aplicación en funcionamiento.

## Scripts Disponibles

- `npm run dev`: Iniciar el servidor en modo desarrollo.
- `npm run build`: Construir la aplicación para producción en la carpeta `dist`.

## Estructura del Proyecto

### /src (La app)

Contiene el código fuente del proyecto. Aquí es donde se encuentran los archivos principales de la aplicación, incluyendo componentes, servicios, utilidades y otros módulos necesarios para el funcionamiento del frontend.

### /src/assets

Contiene archivos estáticos (como imágenes, videos, etc) que se usan en el proyecto. En este caso solo hay una imagen por defecto para productos sin imagen (image-not-found.jpg)

### /src/services

Contiene los servicios que se encargan de la comunicación con APIs externas. Aquí se encuentran las funciones que realizan peticiones HTTP para crear, obtener, actualizar o eliminar (CRUD) datos en el servidor.

En este caso products.ts se encarga de hacer peticiones GET a la API principal (fakestoreapi.com) para recibir tanto los productos como las categorias.

### /src/utils

Contiene utilidades y funciones auxiliares que son utilizadas en diferentes partes del proyecto. Estas funciones están diseñadas para ser reutilizables, facilitando la implementación de tareas comunes y la mejora de la mantenibilidad del código.

### /src/types

Contiene definiciones de tipos que se utilizan en el proyecto para asegurar la tipificación, mejorando así, tanto la experiencia de desarrollo (ya que obtienes autocompletado), como la calidad del código (ya que te aseguras no cometer errores de tipos).

### /src/components

Contiene los componentes de la aplicación. Los componentes son piezas de la interfaz de usuario que pueden ser utilizadas en diferentes partes de la aplicación. Cada componente incluye su propio estilo y lógica (manejo de estados, etc.).

### /src/components/Products

Contiene los componentes de la parte de los productos. Por ejemplo, ProductCard.tsx, es el componente que contiene la interfaz de un producto. Y es reutilizable, se usa tanto al mostrar todos los productos, como los productos del carrito.

### /src/components/Header

Contiene los componentes principales del header. Por ejemplo, ThemeSwitch.tsx, que es el componente que contiene la lógica para cambiar el tema (color) de la página.

### /src/components/ui

Contiene componentes de interfaz de usuario reutilizables. Estos componentes están diseñados para ser modulares y pueden ser utilizados en diferentes partes de la aplicación para mantener una apariencia y comportamiento consistentes.

Por ejemplo, el componente Button.tsx, que se reutiliza para todos los botones en toda la aplicación.

### /src/hooks

Contiene hooks personalizados que encapsulan lógica reutilizable y pueden ser utilizados en diferentes componentes de la aplicación. Los hooks permiten compartir lógica entre componentes sin necesidad de duplicar código, mejorando la organización y mantenibilidad del proyecto.

Por ejemplo, el hook useProducts.ts, que se encarga de cambiar y devolver los estados relacionados con los productos:

(ej: Si todavía no se ha terminado de fetchear el producto, el estado 'loading' será true y 'products' undefined. El componente que usa este hook, recibe ambos estados, y ya este maneja estos estados como quiere, así como si loading es true, el componente puede devolver una interfaz que diga: 'Cargando...').

### /src/contexts

Contiene los contextos de la aplicación. Los contextos son estados globales, permiten compartir estados y lógica entre múltiples componentes sin necesidad de pasar props manualmente evitando así hacer 'prop drilling'. Esto facilita la gestión de estados globales y mejora la organización del código.

Estos estados globales solo se pueden acceder en componentes que estén envueltos en el proovedor del contexto (el componente Provider).

Por ejemplo, el contexto cart.tsx, que se encarga de manejar la lógica del carrito.

### /src/reducers

Contiene los reducers de la aplicación. Los reducers son funciones puras que gestionan cómo cambia el estado de la aplicación en respuesta a acciones específicas. Se utiliza cuando hay que manejar estados complejos o hay muchas acciones que pueden modificar un estado.

Por ejemplo, el reducer cartReducer.ts, que maneja las acciones relacionadas con el carrito de compras (añadir al carrito, limpiar el carrito, etc.).

### /src/App.tsx

Contiene el componente raíz de la aplicación. Se encarga de renderizar la estructura de la aplicación.

### /src/main.tsx

Contiene el punto de entrada principal de la aplicación. Este archivo es responsable de inicializar la aplicación y renderizar el componente raíz (<App/>).

### /src/index.css

Archivo donde se importa tailwind y se añaden estilos o variables de css. Como por ejemplo, los colores para cada tema (claro y oscuro).

### /index.html

Es el único archivo .html del proyecto. Sirve como plantilla base para que React renderice toda la interfaz de usuario. <div id="root"></div> es el contenedor principal donde React renderiza toda la apilcación.

### /public

Contiene archivos estáticos globales, como iconos (favicon), metadatos (como robots.txt). En este caso solo contiene el favicon global (vite.svg).

### /package.json

Archivo .json que contiene todas las dependencias usadas en el proyecto. Al igual que metadatos del proyecto, como su version, etc.

### /package-lock.json

Similar a /package.json. Contiene todas las dependencias con las versiones exactas de estas.

### /node_modules

Carpeta donde se instalan todas las dependencias del proyecto (de los archivos package.json). Esta carpeta se crea al ejecutar el comando 'npm install' (/node_modules no se versiona, es decir, no se sube al repositorio ya que ocupa mucho espacio y se puede regenerar con el comando ya mencionado).

### /dist

Carpeta donde se guarda la versión optimizada y lista para producción de la aplicación. Se genera automáticamente utilizando el comando 'npm run build'. Esta carpeta tampoco se versiona, por lo tanto no está en el repositorio.

### /.gitignore

Archivo donde se especifica a git las carpetas o archivos que no quieres que sean versionadas (que no se suban al repositorio). Por ejemplo las dos carpetas ya mencionadas (/node_modules y /dist)

### /eslint.config.js

Archivo de configuración de ESLint. Esto es una herramienta para 'linting'. Un linter (como ESLint), analiza tu código en busca de errores y malas prácticas.

Te ayuda a mantener un código libre de errores. (No tiene nada que ver con el proyecto final, esto es solo para la experiencia de desarrollo)

### /.prettierrc

Archivo de configuración de Prettier. Esto es una herramienta para formatear el código. Un formateador (como Prettier) permite tener reglas con guías de estilos, por ejemplo,hacer uso siempre de comillas simples (').

Esto hace tener consistencia en el código y mejorar la experiencia de desarrollo. (Al igual que ESLint, no tiene nada que ver con el proyecto final)

### Demás archivos de configuración

Otros archivos de configuración del proyecto, como tsconfig.json, o vite.config.ts.

Vite es una herramienta para crear y gestionar proyectos con React u otros frameworks, en desarrollo monta un servidor local y se puede configurar el puerto del servidor en el su archivo de configuración.

Por defecto solo se puede acceder desde la propia máquina (localhost), pero se puede configurar para que otras máquinas en local puedan acceder (con la configuración actual).
