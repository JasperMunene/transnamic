import React from "react";
import ProjectHeader from "@/components/projects/project-header";
import ProjectInfo from "@/components/projects/project-info";

const projectData = [
  {
    name: "Greenwood Estates",
    description:
      "Nestled in a tranquil, tree-lined setting, this estate offers elegant homes crafted with sustainability and comfort in mind.",
    location: "Downtown City Center",
    scope: "Office Complex Development",
    itemNumber: 1,
    imageSrc: "/Westlands.jpeg",

    projectLink: "/projects/greenwood-estates",
  },
  {
    name: "Uhuru Garden",
    description: "sensensional ",
    location: "Seaside Avenue",
    scope: "Residential Development",
    itemNumber: 2,
    imageSrc:
      "https://cdn.prod.website-files.com/66cff9a759450299f215b2ec/67025070f5d5d3c3e415c7b4_harbor-view-condominiums.jpg",
    projectLink: "/projects/oceanview-heights",
  },
  {
    name: "Uhuru Garden",
    description:
      "The urban park, expertly designed by Transnamic, features well-constructed pathways and spacious green fields where visitors can relax and enjoy fresh air. With stunning views of the city skyline, the park offers a peaceful retreat in the heart of the city. The thoughtful construction ensures easy access and a smooth flow, making it a perfect spot for leisure and tranquility amidst urban life.",
    location: "Nairobi City",
    scope: "Mixed-Use Development",
    itemNumber: 3,
    imageSrc: "/UhuruGarden.jpeg",

    projectLink: "/projects/summit-towers",
  },
];

export default function Project() {
  return (
    <section id="Project" className="project-section">
      <div className="w-layout-blockcontainer container w-container">
        <ProjectHeader />
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        {projectData.map((project) => (
          <ProjectInfo
            key={project.itemNumber}
            name={project.name}
            description={project.description}
            location={project.location}
            scope={project.scope}
            itemNumber={project.itemNumber}
            imageSrc={project.imageSrc}
            projectLink={project.projectLink}
          />
        ))}
      </div>
    </section>
  );
}
