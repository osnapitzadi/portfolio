import React, { useState, useEffect, useRef } from 'react'
import anime from "animejs/lib/anime.es.js"
import Hero from './Hero'
import Projects from './Projects'
import Info from './Info'
import Contact from './Contact'

function Frame() {
    
        const [page, setPage] = useState("info");

        return (
        <div className='frame d-flex flex-row'>
            <div className='col-6'>
                <Hero />
                <ul className="m-3">
                    <li className={`menu-item ${page === 'projects' ? 'menu-active' : ''}`}>
                        <div onClick={() => setPage('projects')}>Projects</div>
                    </li>
                    <li className={`menu-item ${page === 'info' ? 'menu-active' : ''}`}> 
                        <div onClick={() => setPage('info')}>Info</div>
                    </li>
                    <li className={`menu-item ${page === 'contact' ? 'menu-active' : ''}`}>
                        <div onClick={() => setPage('contact')}>Contact</div>
                    </li>
                </ul>
            </div>
            <div className='col-6'>
                {page === 'projects' ? <Projects /> : null }
                {page === 'info' ? <Info /> : null}
                {page === 'contact' ? <Contact /> : null}
            </div>
        </div>
        )
}

export default Frame;