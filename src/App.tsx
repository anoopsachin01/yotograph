import { useState } from 'react'

import Navbar from './Navbar'
import Work from './Work'
import About from './About'
import './App.css'

function App() {

  const [activeMenu, setActiveMenu] = useState("Work")

  return (
    <div className="app">
        <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
        {activeMenu == "Work" && <Work/>}
        {activeMenu == "About" && <About/>}
    </div>
  )
}

export default App
