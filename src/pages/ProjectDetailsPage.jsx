import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import projects from "../data/ProjectsList.json";
import TagComponent from "../components/TagComponent";
import "../styles/pages/ProjectDetailsPageStyles.scss"
import BannerComponent from "../components/BannerComponent";

export default function ProjectDetailsPage(){
    let param = useParams();
    const [project, setProject] = useState({})
    useEffect(() => {
        let project = projects.filter(project => project.id == param.id)
        console.log(project.at(0))
        setProject(project.at(0))
    }, [param.id])
    return (
    <div className="project-details-page">
        <h2 className="project-title">{project?.title}</h2>
        <BannerComponent size="large" imageSource={project.imageUrl}/>
        <div className="project-details">

            <p className="description">{project?.description}</p>
            <div className="tags">
              {project?.tags?.map((tag, index) => (
                <TagComponent key={tag + index} tagName={tag} />
              ))}
            </div>
        </div>

    </div>
  );
}