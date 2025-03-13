import React from 'react';
import ProjectHeader from "@/components/projects/project-header";
import ProjectInfo from "@/components/projects/project-info";

const projectData = [
    {
        name: "Greenwood Estates",
        description: "Nestled in a tranquil, tree-lined setting, this estate offers elegant homes crafted with sustainability and comfort in mind.",
        location: "Downtown City Center",
        scope: "Office Complex Development",
        itemNumber: 1,
        imageSrc: "https://cdn.prod.website-files.com/66cff9a759450299f215b2ec/6702502befb10cb94ab1607f_greenwood-estates.jpg",
        projectLink: "/projects/greenwood-estates",
    },
    {
        name: "Oceanview Heights",
        description: "A stunning seaside community offering breathtaking ocean views and luxurious modern architecture.",
        location: "Seaside Avenue",
        scope: "Residential Development",
        itemNumber: 2,
        imageSrc: "https://cdn.prod.website-files.com/66cff9a759450299f215b2ec/67025070f5d5d3c3e415c7b4_harbor-view-condominiums.jpg",
        projectLink: "/projects/oceanview-heights",
    },
    {
        name: "Summit Towers",
        description: "An iconic skyscraper in the heart of the city, combining innovative design with state-of-the-art facilities.",
        location: "City Center Plaza",
        scope: "Mixed-Use Development",
        itemNumber: 3,
        imageSrc: "https://cdn.prod.website-files.com/66cff9a759450299f215b2ec/67025086353ccf72c869ac78_urban-green-apartments.jpg",
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
