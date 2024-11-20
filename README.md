# Apolo Web - Prueba Técnica

[🔗 Ver el proyecto desplegado aquí](https://apoloweb-rickandmorty-pruebatecnica.netlify.app)

¡Bienvenido! Este es el repositorio de la prueba técnica desarrollada para **Apolo Web**. La aplicación consume la API de _Rick and Morty_ para mostrar personajes con opciones de búsqueda y filtros, incluye autenticación (inicio de sesión y registro).

## Características

- **Autenticación:**
  - Registro e inicio de sesión con formularios responsivos.
- **Listado de personajes:**
  - Muestra personajes de _Rick and Morty_ consumiendo su API.
  - Filtros funcionales (nombre, especie, género, estado).
  - Paginación para mostrar grandes volúmenes de datos.

## Tecnologías utilizadas

- **Frontend:**
  - React
  - Tailwind CSS
- **Consumo de API:**
  - [Rick and Morty](https://rickandmortyapi.com)
- **Gestión de estado:**
  - Zustand
- **Formularios:**
  - React Hook Form
  - Joi, para validaciones
  - [Mensajes de Joi en español](https://www.npmjs.com/package/@joi-tools/translator)

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
|-- public/             # Recursos públicos
|-- package.json        # Configuración del proyecto
|-- README.md           # Documentación
```

## Mejoras futuras

- Implementar autenticación con token JWT.
- Mejorar el diseño visual con animaciones más avanzadas.

## Autor

- [Jesús Jimenez](mailto:jesusjimeneztapia456@gmail.com)
- [GitHub](https://github.com/jesusjimeneztapia)
- [LinkedIn](https://bo.linkedin.com/in/jesusjimeneztapia)
- [Portafolio](https://jesusjimenez-dev.netlify.app)
