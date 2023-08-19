import React from 'react'

function Projects() {
  const projects = [
    {
      id: 7,
      title: "Travel Agency",
      url: "https://travelclub.kz/"
    },
    {
      id: 5,
      title: "Jewelry Store",
      url: "https://atush-studio.ru/"
    },
    {
      id: 6,
      title: "Event Agency",
      url: "https://www.moscowstars.ru/"
    }, 
    {
      id: 4,
      title: "Productivity App",
      url: "https://productivity-app-prod.web.app"
    },
    {
      id: 3,
      title: "React Todo",
      url: "https://react-todo-adil.web.app/"
    },
    {
      id: 1,
      title: "NASA API",
      url: "https://nasa-apod-api-adil.web.app/"
    },
    {
      id: 2,
      title: "Vanilla JS Store (First project)",
      url: "https://projectlevel1adil.web.app/"
    },
    
  ];
  return (
        <div className='scrollable'>
          {projects.map(project => (
          <div className='menu-item'>• <a className='project' key={project.id} href={project.url} target='_blank'>
            {project.title}
          </a></div>
          ))}
        </div>
  )
}

export default Projects