import Project from "./Project";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const Projects = ({openMenu}) => {
  const [projects] = useState([
    {
      id: 1,
      title: "27 Barber",
      description:
        "Making some prototype for university course",
      link: "https://www.figma.com/proto/UOCBdGCCiB8tEPBHxHLrPq/27Barber---Kelompok-6?node-id=234-7&starting-point-node-id=234%3A7",
      show: true,
    },
  ]);

  return (
    <>
      <div className={`portfolio-section opened-menu-${openMenu}`}>
        <div className="card-view">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
      <div className="github-card github-icons">
        <a
          className="github-icon"
          href="https://github.com/UrBoii1"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </>
  );
};

export default Projects;
