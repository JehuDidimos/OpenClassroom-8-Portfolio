import "../styles/components/ProjectStyles.scss";
import { useNavigate } from "react-router-dom";
import { resolveProjectImage } from "../data/projectImages";

export default function ProjectComponent({ project }) {
  const navigate = useNavigate();

  function pageRedirect(id) {
    navigate(`/projects/${id}`);
  }

  return (
    <div className="project-card" onClick={() => pageRedirect(project.id)}>
      <div className="card-overlay"></div>
      <p>{project.title}</p>
      <img src={resolveProjectImage(project.imageCardUrl)} alt="" />
    </div>
  );
}
