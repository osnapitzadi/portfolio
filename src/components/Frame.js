import React, { useState, useEffect, useRef } from 'react'
import anime from "animejs/lib/anime.es.js"
import Hero from './Hero'
import Projects from './Projects'
import Info from './Info'
import Contact from './Contact'
import { set } from 'animejs'

function Frame() {
    
        const [page, setPage] = useState("projects");


        const toggleComponent = (divId) => () => {
            setPage(divId);
        };

 
        return (
        <div className='frame d-flex flex-row'>
            <div className='col-6'>
                <Hero />
                <ul className="m-3">
                    <li id='projects' className={`menu-item ${page === 'projects' ? 'menu-active' : ''}`}>
                        <div onClick={toggleComponent('projects')}>Projects</div>
                    </li>
                    <li id='info' className={`menu-item ${page === 'info' ? 'menu-active' : ''}`}> 
                        <div onClick={toggleComponent('info')}>Info</div>
                    </li>
                    <li id='contact' className={`menu-item ${page === 'contact' ? 'menu-active' : ''}`}>
                        <div onClick={toggleComponent('contact')}>Contact</div>
                    </li>
                </ul>
            </div>
            <div className='col-6 d-flex'>
                {page === 'projects' ? <Projects /> : null }
                {page === 'info' ? <Info /> : null}
                {page === 'contact' ? <Contact /> : null}
            </div>
        </div>
        )
}

export default Frame;