import React from 'react'

function Contact() {
    const links = [
        {
          id: 1,
          title: "LinkedIn",
          url: "https://www.linkedin.com/in/adil-islambekov/"
        },
        {
          id: 2,
          title: "GitHub",
          url: "https://github.com/osnapitzadi"
        },
        {
          id: 3,
          title: "Email",
          url: "mailto:osnapitzadi@gmail.com"
        }
      ];
  return (
        <div className='d-flex flex-column '>
            
            {links.map(link => (
            <div key={link.id}>
                <i class="bi bi-box-arrow-up-left h7"></i>  <a href={link.url} target="_blank" rel="noreferrer">{link.title}</a>
            </div>
            ))}
            {/* <div><i class="bi bi-box-arrow-up-left h7"></i> LinkedIn</div> 
            <div><i class="bi bi-box-arrow-up-left h7"></i> GitHub</div> 
            <div><i class="bi bi-box-arrow-up-left h7"></i> Email</div>  */}
        </div>
    )
}

export default Contact