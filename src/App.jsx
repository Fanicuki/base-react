// PÁGINA PRINCIPAL

import Sidebar from './lib/sidebar.jsx'
import Navbar from './lib/navbar.jsx'
import './App.css'

function App() {
  
  return (
    <>
    <div className='main-container'>
      <Sidebar />
      <Navbar />
      <div className="container">
          <p>hola chiquito</p>
      </div>
    </div>
    
    </>
  )
}

export default App
