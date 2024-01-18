import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EHeader from './Elements/EHeader';
import FCCar from './Functional Comps/FCCar';
import CCStudent from './Class Comps/CCStudent';

function App() {

  return (
    <div>
      {EHeader}
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>calculator</h1>
      <div className="card">
        <CCStudent />
    
      </div>
    </div>
  )
}

export default App
