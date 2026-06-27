import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projects from "../data/ProjectsList.json";
import TagComponent from "../components/TagComponent";
import "../styles/pages/ProjectDetailsPageStyles.scss";
import BannerComponent from "../components/BannerComponent";
import ButtonComponent from "../components/ButtonComponent";
import { resolveProjectImage } from "../data/projectImages";

export default function ProjectDetailsPage() {
  const param = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    const matchingProject = projects.find((project) => project.id === param.id);
    setProject(matchingProject);
  }, [param.id]);

  return (
    <div className="project-details-page">
      <h2 className="project-title">{project?.title}</h2>
      <BannerComponent
        size="large"
        imageSource={resolveProjectImage(project?.imageUrl)}
      />
      <div className="project-details">
        <p className="description">{project?.description}</p>
        <div className="tags">
          {project?.tags?.map((tag, index) => (
            <TagComponent key={tag + index} tagName={tag} />
          ))}
        </div>
      </div>
      <div className="actions">
        <ButtonComponent url={project?.githubUrl}></ButtonComponent>
      </div>
    </div>
  );
}
