import React from "react";
import "./index.css";
import Button from "app/components/Button";
import { FaFacebook } from "react-icons/fa";
interface ProjectCardProps {
  icon: React.ReactNode;
  projName: string;
  description: string;
  color: string;
}
const deleteProject = () => {};
const viewAnalytics = () => {};

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return (
    <div className="project-card">
      <div className="icon-block border-round">
        <div className="icon" style={{ color: props.color, fontSize:"4rem" }}>
          {props.icon}
        </div>
      </div>
      <div className="proj-name">{props.projName}</div>
      <div className="proj-desc">{props.description}</div>
      <div className="buttons">
        <button className="view-btn" onClick={viewAnalytics}>
          View Analytics
        </button>{" "}
        <button className="del-btn" onClick={deleteProject}>
          Delete Project
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
