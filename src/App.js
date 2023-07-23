import './App.css';
import Frame from './components/Frame';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import Loader from './components/Loader';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true)
      setTimeout(() => {
          setLoading(false)
      }, 3000)
  }, [])

  useEffect(() => {
    const body = document.body
    const toggle = document.querySelector('.toggle-inner')
    
    // If dark mode is enabled - adds classes to update dark-mode styling.
    // Else, removes and styling is as normal.
    if( darkMode === true ) {
      body.classList.add('dark-mode')
      toggle.classList.add('toggle-active')
    } else {
      body.classList.remove('dark-mode')
      toggle.classList.remove('toggle-active')
    }
  }, [darkMode])
  return (
    <AnimatePresence mode='wait'>
      {/* Loader animation */}
      {loading ? 
      <motion.div
        key={'loader'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Loader />
      </motion.div>
      :
      <motion.div
        key={'app'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className='container-fuild'>
          <Frame />
          <div
            id="toggle"
            onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)}
          >
            <div className="toggle-inner"/>
          </div>
        </div>
      </motion.div>
      }
    </AnimatePresence>
  );
}

export default App;
