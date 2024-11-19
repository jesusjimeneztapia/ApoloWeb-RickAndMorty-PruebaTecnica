# Apolo Web - Prueba Técnica

[🔗 Ver el proyecto desplegado aquí](https://apoloweb-rickandmorty-pruebatecnica.netlify.app)

¡Bienvenido! Este es el repositorio de la prueba técnica desarrollada para **Apolo Web**. La aplicación consume la API de _Rick and Morty_ para mostrar personajes con opciones de búsqueda y filtros.

## Características

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

### 1. Personajes

- Explora los personajes de _Rick and Morty_ con paginación.
- Filtra por nombre, especie, género o estado.

## Estructura del proyecto

```text
ApoloWeb-RickAndMorty-PruebaTecnica/
|-- src/
|   |-- assets/         # Recuros estáticos
|   |-- components/     # Componentes reutilizables
|   |-- constants/      # Constantes de la aplicación
|   |-- hooks/          # Hooks personalizados
|   |-- icons/          # Íconos de la aplicación
|   |-- pages/          # Páginas principales
|   |-- services/       # Lógica para consumir la API
|   |-- stores/         # Estados de la aplicación
|-- public/             # Recursos públicos
|-- package.json        # Configuración del proyecto
|-- README.md           # Documentación
```

## Autor

- [Jesús Jimenez](mailto:jesusjimeneztapia456@gmail.com)
- [GitHub](https://github.com/jesusjimeneztapia)
- [LinkedIn](https://bo.linkedin.com/in/jesusjimeneztapia)
- [Portafolio](https://jesusjimenez-dev.netlify.app)
