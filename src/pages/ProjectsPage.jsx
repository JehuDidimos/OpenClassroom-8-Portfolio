import ProjectComponent from "../components/ProjectComponent";
import projects from "../data/ProjectsList.json";
import "../styles/pages/ProjectsPageStyles.scss";


export default function ProjectsPage() {
  

  return (
    <main className="projects-page">
      <h2 className="project-title">Projects</h2>
      <section className="projects-grid" aria-label="Projects">
        {projects.map((project) => (
          <ProjectComponent key={project.id} project={project} />
        ))}
      </section>
    </main>
  );
}
