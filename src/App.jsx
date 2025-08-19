import React from 'react'
import MenuBar from './components/MenuBar'
import './index.css'
import "./App.css"

function App() {
  return (
    <>
     <div className='father_container'>
      <div className='container_style'>
      <div className='container_content'>
      <MenuBar />
      <section className='About_Section' id='About'>
       
      </section>  
      <section className='Projects_Section' id='Projects'>

      </section>

      <section className='Contact_Section' id='Contact'>

      </section>
      </div>
      </div>
    </div>
    </>
  )
}

export default App