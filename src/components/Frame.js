import React, { useState } from 'react'
import Hero from './Hero'
import Projects from './Projects'
import Info from './Info'
import Contact from './Contact'
import { motion, AnimatePresence } from "framer-motion"

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
            <AnimatePresence mode='wait'>
                {page === 'projects' ? <motion.div
                    className='projects m-3 align-self-end ms-auto'
                    key="projects"
                    initial={{ x:20,opacity: 0 }}
                    animate={{ x:0, opacity: 1 }}
                    exit={{ x:-20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    ><Projects /></motion.div> : null }
                {page === 'info' ? <motion.div
                    className='m-3 align-self-end ms-auto info col-sm-12 col-md-6 col-lg-3'
                    key="info"
                    initial={{ x:20, opacity: 0 }}
                    animate={{ x:0, opacity: 1 }}
                    exit={{ x:-20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    ><Info /></motion.div> : null}
                {page === 'contact' ? <motion.div
                    className='m-3 align-self-end ms-auto contact'
                    key="contact"
                    initial={{ x:20, opacity: 0 }}
                    animate={{ x:0, opacity: 1 }}
                    exit={{ x:-20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    ><Contact /></motion.div> : null}
            </AnimatePresence>
        </div>
        )
}

export default Frame;