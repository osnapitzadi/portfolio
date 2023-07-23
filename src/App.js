import './App.css';
import Frame from './components/Frame';
import { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true);

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
    <div className='container-fuild'>
      <Frame />
      <div
        id="toggle"
        onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)}
      >
        <div className="toggle-inner"/>
      </div>
    </div>
  );
}

export default App;
