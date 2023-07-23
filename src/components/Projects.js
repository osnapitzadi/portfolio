import React from 'react'

function Projects() {
  const projects = [
    {
      id: 1,
      title: "NASA API",
      url: ""
    },
    {
      id: 2,
      title: "Weather API",
      url: ""
    },
    {
      id: 3,
      title: "React Todo",
      url: ""
    }
  ];
  return (
        <div>
          {projects.map(project => (
          <div className='project' key={project.id}>
            {project.title}
          </div>
          ))}
        </div>
  )
}

export default Projects