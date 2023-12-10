import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { parse, stringify, toJSON, fromJSON } from "flatted";
import {
  useWeb3ModalProvider,
  useWeb3ModalAccount,
} from "@web3modal/ethers/react";
import { Eip1193Provider } from "ethers";
import { deployContract } from "utils/deploy";

const LandingPage: React.FC = () => {
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const [loading, setLoading] = useState<boolean>(false);
  const { walletProvider } = useWeb3ModalProvider();
  const [projects, setProjects] = useState<any>([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isConnected) {
      navigate("/login");
    }
    const p: Array<{
      name: string;
      description: string;
      color: string;
      chainId: number;
      projectId: string;
    }> = JSON.parse(localStorage.getItem("projects") || "[]");

    const filteredProjects = p.filter((project) => project.chainId === chainId);
    setCardData(filteredProjects);
  }, [isConnected, chainId]);

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

  const [cardData, setCardData] = useState<any>([]);

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const onModelClose = () => {
    setModalOpen(false);
  };

  const deleteProject = (index: number) => {
    const updatedCardData = cardData.filter((_: any, i: number) => i !== index);
    setCardData(updatedCardData);
  };

  const addProject = async (formData: ProjectFormData) => {
    setLoading(true);
    const address = await deployContract(walletProvider as Eip1193Provider);
    if (address) {
      const newCardData = [
        {
          name: formData.projName,
          description: formData.description,
          color: icons[getRandomInteger()].color,
          chainId: chainId,
          projectId: address,
        },
      ];
      setCardData(newCardData);
      const projects = JSON.parse(localStorage.getItem("projects") || "[]");
      localStorage.setItem(
        "projects",
        JSON.stringify([...projects, ...newCardData])
      );
    }
    setLoading(false);
    setModalOpen(false);
  };

  const getRandomInteger = () => {
    return Math.floor(Math.random() * 9);
  };

  const cards = cardData.map(
    (
      card: {
        name: string;
        description: string;
        color: string;
      },
      index: React.Key | null | undefined
    ) => (
      <ProjectCard
        key={index}
        projName={card.name}
        description={card.description}
        icon={icons[getRandomInteger()].icon}
        color={card.color}
        onDelete={() => deleteProject(index as number)}
      />
    )
  );

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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <w3m-button />
        <Button
          className="add-proj-btn"
          label={!loading ? "Add Project" : "Loading..."}
          onClick={() => setModalOpen(true)}
        />
      </div>
      <div className="projects">{cards}</div>
    </div>
  );
};

export default LandingPage;
