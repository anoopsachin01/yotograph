import { useState } from 'react'

import Navbar from './Navbar'
import Work from './Work'
import './App.css'

function App() {

  const [activeMenu, setActiveMenu] = useState("Work")

  return (
    <div className="app">
        <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
        <Work/>
    </div>
  )
}

export default App
