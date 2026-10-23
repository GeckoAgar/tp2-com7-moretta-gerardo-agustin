# Portfolio personal

## Datos academicos

- Nombre: Moretta Gerardo Agustin
- Comision: 7
- Materia: Programacion IV
- Carrera: Tecnicatura en Programacion
- Universidad: Universidad Tecnologica Nacional (UTN)
- Facultad: Facultad Regional Tucuman (FRT)
- Trabajo practico 2

## Descripcion

Portfolio personal desarrollado con React. La aplicacion organiza la informacion en paginas y permite navegar entre ellas con React Router DOM. Incluye un menu lateral persistente y un area principal cuyo contenido cambia segun la ruta.

## Tecnologias

- React y JavaScript
- React Router DOM
- Vite
- HTML y CSS
- Git y GitHub

## Paginas y rutas

- `/`: presentacion e introduccion al portfolio.
- `/about`: perfil personal, intereses y objetivos.
- `/skills`: tecnologias y herramientas.
- `/projects`: galeria de proyectos con descripcion y tecnologias.
- `/contact`: correo electronico y perfil de GitHub para contacto.

El menu ocupa aproximadamente el 30 % del ancho en pantallas grandes y el contenido el 70 %. En pantallas pequenas, ambas areas se apilan. La opcion activa del menu se resalta visualmente.

## Componentes reutilizables

- `Sidebar`: enlaces de navegacion entre rutas.
- `ProjectCard`: presentacion de cada proyecto.
- `SkillCard`: presentacion de cada habilidad.
- `Header`: identidad del portfolio en el menu lateral.

Las paginas reciben los datos de habilidades y proyectos mediante props y los renderizan con `map()`. La pagina Sobre mi incluye un boton para desplegar informacion adicional.

## Como ejecutar el proyecto

Desde la carpeta del proyecto, instalar las dependencias e iniciar el servidor de desarrollo:

```bash
npm install
npm run dev
```

Para validar el build y ejecutar ESLint:

```bash
npm run build
npm run lint
```

## Estructura principal

```text
src/
├── App.jsx
├── App.css
├── index.css
├── main.jsx
├── Pages/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Home.jsx
│   ├── Projects.jsx
│   └── Skills.jsx
└── components/
    ├── Header.jsx
    ├── ProjectCard.jsx
    ├── Sidebar.jsx
    └── SkillCard.jsx
```

## Repositorio

[Ver el repositorio en GitHub](https://github.com/GeckoAgar/tp2-com7-moretta-gerardo-agustin)

## Contacto

Email: [agustinmoretta2016@gmail.com](mailto:agustinmoretta2016@gmail.com)

GitHub: [GeckoAgar](https://github.com/GeckoAgar)
