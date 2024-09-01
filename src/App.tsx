import { useState } from 'react'

import Navbar from './Navbar'
import Work from './Work'
import About from './About'
import Contact from "./Contact"
import './App.css'

function App() {

  const [activeMenu, setActiveMenu] = useState("Work")

  return (
    <div className="app">
        <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
        {activeMenu == "Work" && <Work/>}
        {activeMenu == "About" && <About/>}
        {activeMenu == "Contact" && <Contact/>}
    </div>
  )
}

export default App
