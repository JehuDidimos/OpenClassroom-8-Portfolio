import "../styles/components/ProjectStyles.scss";
import image from "../images/image1.png";

export default function ProjectComponent({ project }) {
  return (
    <div className="project-card">
      <div className="card-overlay"></div>
      <p>{project.title}</p>
      <img src={image} alt="" />
    </div>
  );
}
