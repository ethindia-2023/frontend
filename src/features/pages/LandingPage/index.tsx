import React, { useState } from "react";
import "./index.css";
import Button from "../../../app/components/Button";
import ProjectCard from "../../../app/components/ProjectCard";
import ProjectForm, {
  ProjectFormData,
} from "../../../app/components/ProjectForm";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaPinterest,
  FaSnapchat,
  FaTumblr,
  FaReddit,
} from "react-icons/fa";
import { AiOutlineFileAdd } from "react-icons/ai";
import Modal from "../../../app/components/Modal";

const LandingPage: React.FC = () => {
  const icons = [
    { icon: <FaFacebook />, color: "#4267B2" },
    { icon: <FaTwitter />, color: "#1DA1F2" },
    { icon: <FaInstagram />, color: "#E1306C" },
    { icon: <FaGithub />, color: "#171515" },
    { icon: <FaLinkedin />, color: "#0A66C2" },
    { icon: <FaPinterest />, color: "#BD081C" },
    { icon: <FaSnapchat />, color: "#FFFC00" },
    { icon: <FaTumblr />, color: "#35465C" },
    { icon: <FaReddit />, color: "#FF4500" },
  ];

  const [cardData, setCardData] = useState(
    Array.from({ length: 9 }, (_, index) => ({
      name: `Project ${index + 1}`,
      description: `Description ${index + 1}`,
      icon: icons[index].icon,
      color: icons[index].color,
    }))
  );

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const onModelClose = () => {
    setModalOpen(false);
  };

  const deleteProject = (index: number) => {
    const updatedCardData = cardData.filter((_, i) => i !== index);
    setCardData(updatedCardData);
  };

  const addProject = (formData: ProjectFormData) => {
    const randomIndex = getRandomInteger();
    const newProject = {
      name: formData.projName || "",
      description: formData.description || "",
      icon: icons[randomIndex].icon,
      color: icons[randomIndex].color,
    };

    setCardData((prevCardData) => [...prevCardData, newProject]);
    setModalOpen(false);
    console.log("new project", newProject);
  };

  const getRandomInteger = () => {
    return Math.floor(Math.random() * 9);
  };

  const cards = cardData.map((card, index) => (
    <ProjectCard
      key={index}
      projName={card.name}
      description={card.description}
      icon={card.icon}
      color={card.color}
      onDelete={() => deleteProject(index)}
    />
  ));

  return (
    <div className="proj-page">
      <Modal
        children={<ProjectForm onSubmit={addProject} />}
        isOpen={modalOpen}
        modalDescription=""
        modalTitle="Create new Project"
        modalIcon={<AiOutlineFileAdd />}
        onClose={onModelClose}
        hasCloseBtn={true}
      />
      <Button
        className="add-proj-btn"
        label="Add Project"
        onClick={() => setModalOpen(true)}
      />
      <div className="projects">{cards}</div>
    </div>
  );
};

export default LandingPage;
