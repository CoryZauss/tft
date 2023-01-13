import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/tailwind.css'
import History from './components/History.jsx'
import Navbar from './components/Navbar.jsx'

function App() {

  return (
    <div>
      <Navbar/>

      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
        <History />
      </div>
    </div>
  );
}

export default App
