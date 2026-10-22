import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

function App() {
  const categoriasHabilidades = [
    { nombre: "Lenguajes", habilidades: ["JavaScript"] },
    { nombre: "Frontend", habilidades: ["HTML", "CSS"] },
    { nombre: "Bases de datos", habilidades: ["SQL"] },
    { nombre: "Herramientas", habilidades: ["Git", "GitHub"] },
  ];
  const habilidadesAprendiendo = ["React", "Express"];

  const proyectos = [
    {
      title: "Portfolio personal",
      description:
        "Una página personal desarrollada para presentar mis habilidades y proyectos.",
      technologies: "React, JavaScript, CSS, Git, GitHub",
    },
    {
      title: "Sistema de Callcenter",
      description:
        "Proyecto desarrollado para gestionar y organizar información relacionada con llamadas y usuarios de un sistema de atención.",
      technologies: "JavaScript, HTML, CSS, SQL",
    },
    {
      title: "Sistema CRUD",
      description:
        "Aplicación desarrollada para practicar las operaciones de crear, consultar, modificar y eliminar registros utilizando una base de datos.",
      technologies: "C#, SQL Server Express",
  },
  ];

  return (
    <div className="portfolio-layout">
      <aside className="portfolio-sidebar">
        <Header titulo="Portafolio TP 2" />
        <Sidebar />
      </aside>

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/skills"
            element={
              <Skills
                categorias={categoriasHabilidades}
                aprendiendo={habilidadesAprendiendo}
              />
            }
          />
          <Route path="/projects" element={<Projects proyectos={proyectos} />} />
          <Route path="/contact" element={<Contact email="agustinmoretta2016@gmail.com" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;