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
       <div className='d1'>
       <p className='p1'>
        Full Stack <span className='span'>Developer</span>
       </p>
       <p className='p2'>
        Passionate about creating innovative web solutions that bridge the gap between beautiful design and robust functionality.
       </p>
       <div className='div_Refs'>
       <a href="#Projects">
        View proyects
       </a>
       <a href="#Contact">Get in touch</a>
       </div>
       </div>
       <div className='d2'>
        <p className='p1'>
          About me
        </p>
        <p className='p2'>
         I'm a passionate full stack developer with experience in building scalable web applications. I enjoy working with modern technologies and creating solutions that make a difference.
        </p>
        <p className='p3'>
          Tech Stack
        </p>
        <div className='Tecnologies'>
          <p className='pt'>
            Java
          </p>
          <p className='pt'>
            Javascript
          </p>
          <p className='pt'>
            C#
          </p>
          <p className='pt'>
            React
          </p>
          <p className='pt'>
            Html
          </p>
          <p className='pt'>
            Css
          </p>
          <p className='pt'>
            Git
          </p>
          <p className='pt'>
            Postman
          </p>
          <p className='pt'>
            Mysql
          </p>
          <p className='pt'>
            Sql
          </p>
          <p className='pt'>
           Php
          </p>
          <p className='pt'>
            Laravel
          </p>
        </div>
          <hr/>
          <p className='p4'>
            📍 Available for freelance projects and full-time opportunities
          </p>
       </div>
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