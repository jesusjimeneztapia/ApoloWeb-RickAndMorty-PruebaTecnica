# Apolo Web - Prueba Técnica

[🔗 Ver el proyecto desplegado aquí](https://apoloweb-rickandmorty-pruebatecnica.netlify.app)

¡Bienvenido! Este es el repositorio de la prueba técnica desarrollada para **Apolo Web**. La aplicación consume la API de _Rick and Morty_ para mostrar personajes con opciones de búsqueda y filtros, incluye autenticación (inicio de sesión y registro), y permite la creación y edición de recursos locales.

## Características

- **Autenticación:**
  - Registro e inicio de sesión con formularios responsivos.
  - Almacenado en memoria.
- **Listado de personajes:**
  - Muestra personajes de _Rick and Morty_ consumiendo su API.
  - Filtros funcionales (nombre, especie, género, estado).
  - Paginación para mostrar grandes volúmenes de datos.
- **Creación de recursos locales:**
  - Formulario para crear y guardar recursos personalizados (sin conexión a la API).
  - Almacenado en localStorage.
  - Permite almacenar los últimos 4 recusos creados y/o actualizados.
- **Diseño claro y responsivo:**
  - Adaptado para dispositivos móviles, tabletas y escritorio.

## Tecnologías utilizadas

- **Frontend:**
  - Vite
  - React
  - Tailwind CSS
  - TypeScript
- **Consumo de API:**
  - [Rick and Morty](https://rickandmortyapi.com)
  - Axios
- **Gestión de estado:**
  - Zustand
- **Formularios:**
  - React Hook Form
  - Joi, para validaciones
  - [Mensajes de Joi en español](https://www.npmjs.com/package/@joi-tools/translator)
- **Extras:**
  - React Hot Toast
  - uuid

## Requisitos previos

Asegúrate de tener instalado:

- [Node.js](https://nodejs.org)
- [npm](https://www.npmjs.com) o [yarn](https://yarnpkg.com)

## Instalación y ejecución

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:

1. **Clona el repositorio:**

```bash
git clone https://github.com/jesusjimeneztapia/ApoloWeb-RickAndMorty-PruebaTecnica.git
```

2. **Instala las dependencias:**

```bash
npm install
```

3. **Inicia el servidor de desarrollo:**

```bash
npm run dev
```

4. **Accede a la aplicación:**

Abre http://localhost:5173 en tu navegador.

## Uso

### 1. Autenticación

- Regístrate o inicia sesión con credenciales básicas para acceder a la aplicación.

### 2. Personajes

- Explora los personajes de _Rick and Morty_ con paginación.
- Filtra por nombre, especie, género o estado.

### 3. Recursos personalizados

- Crea y edita recursos locales a través del formulario de la página de Editar/Crear Personajes.

## Estructura del proyecto

```text
ApoloWeb-RickAndMorty-PruebaTecnica/
|-- src/
|   |-- assets/         # Recuros estáticos
|   |-- components/     # Componentes reutilizables
|   |-- constants/      # Constantes de la aplicación
|   |-- errors/         # Errores personalizados
|   |-- hooks/          # Hooks personalizados
|   |-- icons/          # Íconos de la aplicación
|   |-- layouts/        # Layout de la aplicación
|   |-- pages/          # Páginas principales
|   |-- services/       # Lógica para consumir la API
|   |-- stores/         # Estados de la aplicación
|   |-- App.tsx         # Configuración de rutas
|   |-- index.css       # Archivo de estilos globales
|   |-- main.tsx        # Punto de entrada principal
|-- public/             # Recursos públicos
|-- package.json        # Configuración del proyecto
|-- README.md           # Documentación
```

## Capturas de pantalla

### 1. Página de Inicio de Sesión y Registro

![Página de Inicio de Sesión](/design/LoginPage.jpg)
![Página de Registro](/design/RegisterPage.jpg)

### 2. Página de Personajes

![Página de Personajes](/design/CharactersPage.jpg)
![Página de Personajes 2](/design/CharactersPage2.jpg)

### 3. Página de Crear y Editar Personaje

![Página de Crear Personaje](/design/CreateCharacterPage.jpg)
![Página de Editar Personaje](/design/EditCharacterPage.jpg)

## Mejoras futuras

- Implementar autenticación con token JWT.
- Persistir los recursos locales en una base de datos.
- Mejorar el diseño visual con animaciones más avanzadas.

## Autor

- [Jesús Jimenez](mailto:jesusjimeneztapia456@gmail.com)
- [GitHub](https://github.com/jesusjimeneztapia)
- [LinkedIn](https://bo.linkedin.com/in/jesusjimeneztapia)
- [Portafolio](https://jesusjimenez-dev.netlify.app)
