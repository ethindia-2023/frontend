import React from "react";
import "./index.css";
import Button from "../../../app/components/Button";
import ProjectCard from "../../../app/components/ProjectCard";
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

const LandingPage: React.FC = () => {
  const cardData = Array.from({ length: 9 }, (_, index) => ({
    projName: `Project ${index + 1}`,
    description: `Description ${index + 1}`,
  }));

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

  const cards = cardData.map((card, index) => (
    <ProjectCard
      key={index}
      projName={card.projName}
      description={card.description}
      icon={icons[index].icon}
      color={icons[index].color}
    />
  ));

  return (
    <div className="proj-page">
      <Button className="add-proj-btn" label="Add Project" />
      <div className="projects">{cards}</div>
    </div>
  );
};

export default LandingPage;
