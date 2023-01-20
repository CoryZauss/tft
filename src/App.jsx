import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/tailwind.css'
import History from './components/History.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Comps from './components/Comps.jsx'

function App() {

  return (
    <div>
      <Navbar />
        <div className="text-center bg-yellow-400 text-sm m-0">{"This is a personal project with the purpose of continuing to learn and grow as a developer... Thank you for visiting, We are currently Under Construction, Please visit again Soon"}</div>

      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
        <History />
      </div>
      <Footer/>
    </div>
  );
}

export default App
