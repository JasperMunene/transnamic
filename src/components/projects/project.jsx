import React from 'react'
import ProjectHeader from "@/components/projects/project-header";
import ProjectInfo from "@/components/projects/project-info";


export default function Project() {
  return (
      <section id="Project" className="project-section">
          <div className="w-layout-blockcontainer container w-container">
              <ProjectHeader/>
          </div>
          <div className=" flex items-center justify-center">
              <ProjectInfo/>
          </div>

      </section>
)
}
