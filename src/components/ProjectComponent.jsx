import "../styles/components/ProjectStyles.scss";
import image from "../images/image1.png";
import { useNavigate } from "react-router-dom";

export default function ProjectComponent({ project }) {
  const navigate = useNavigate();

  function pageRedirect(id){
    console.log(id)
    navigate(`/projects/${id}`);
  }
  return (
    <div className="project-card" onClick={() => pageRedirect(project.id)}>
      <div className="card-overlay"></div>
      <p>{project.title}</p>
      <img src={project.imageCardUrl} alt="" />
    </div>
  );
}
