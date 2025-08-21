import React from 'react'
import MenuBar from './components/MenuBar'
import './index.css'
import "./App.css"
import github from './assets/github.svg'
import Login from './assets/Login.png'
import Img_SDME from './assets/Img_SDME.png'
import IMG_BTI from './assets/IMG_BTI.png'
import IMG_SMZR from './assets/IMG_SMZR.png'
import IMGLoginDisplayMaster from './assets/IMGLoginDisplayMaster.png'
import envelope from './assets/envelope.svg'
import thelephone from './assets/telephone.svg'
import geo from './assets/geo.svg'
import linkedin from './assets/linkedin.svg'
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
        Hi,My name is <span>Steven Camacho Cisneros</span> and i am a passionate about creating innovative web solutions that bridge the gap between beautiful design and robust functionality.
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
        <p className='p1'>
          Featured <span className='span'>Projects</span>
        </p>
        <p className='p2'>
         A selection of projects that showcase my skills in full stack development
        </p>
        <div className='Projects_Container'>
          <div className='Project_Card'>
         <img src={Login} alt="ImgLogin" />
         <div className='Project_Info'>
          <p className='Project_Title'>Mesoamerican cultures evaluation and study system</p>
          <p className='Project_Description'>
Project carried out with Java, focused on helping in the study of the subject of Mexican history, especially on the topic of Mesoamerican cultures for children and primary school teachers.</p>
          <div className='Project_Technologies'>
            <p className='pt'>java</p>
          </div>
          <a href="https://github.com/kronen9999/Sistema-de-evaluacion-y-estudio-de-culturas-mesoamericanas/" target='_blank' className='linkGit'>Code<img className='gitImage' src={github} alt="" /></a>
         </div>
            </div>
            <div className='Project_Card'>
         <img src={Img_SDME} alt="ImgSDME" />
         <div className='Project_Info'>
          <p className='Project_Title'>Dispensing system for women</p>
          <p className='Project_Description'>
Dispensing system made in Java, with connection to Arduino components and databases for storing information. Focused on supporting the needs of women in ITSAO</p>
          <div className='Project_Technologies'>
            <p className='pt'>java</p>
            <p className='pt'>Arduino</p>
            <p className='pt'>Mysql</p>
          </div>
          <a href="https://github.com/kronen9999/SistemaDispensador_Para_Mujeres/" target='_blank' className='linkGit'>Code<img className='gitImage' src={github} alt="" /></a>
         </div>
            </div>
            <div className='Project_Card'>
         <img src={IMG_BTI} alt="IMGBTI" />
         <div className='Project_Info'>
          <p className='Project_Title'>ITSAO Job Board System</p>
          <p className='Project_Description'>
Web platform to connect students with job recruiters, allowing employers to post vacancies and manage candidates,Designed to serve the needs of Instituto Tecnológico Superior de Acatlán de Osorio</p>
          <div className='Project_Technologies'>
            <p className='pt'>Html</p>
            <p className='pt'>Css</p>
            <p className='pt'>Javascript</p>
            <p className='pt'>Php</p>
            <p className='pt'>Mysql</p>
          </div>
          <a href="https://github.com/kronen9999/BolsaTrabajoITSAO" target='_blank' className='linkGit'>Code<img className='gitImage' src={github} alt="" /></a>
         </div>
            </div>
           <div className='Project_Card'>
         <img src={IMG_SMZR} alt="IMG_SMZR" />
         <div className='Project_Info'>
          <p className='Project_Title'>Women’s Health System for Rural Areas</p>
          <p className='Project_Description'>
 Developed a web application for rural clinics to monitor and register pregnant women during their pregnancy stage </p>
          <div className='Project_Technologies'>
            <p className='pt'>Html</p>
            <p className='pt'>Css</p>
            <p className='pt'>Javascript</p>
            <p className='pt'>Php</p>
            <p className='pt'>Mysql</p>
          </div>
          <a href="https://github.com/kronen9999/SistemaGestorMujeresEmbarazadas" target='_blank' className='linkGit'>Code<img className='gitImage' src={github} alt="" /></a>
         </div>
            </div>
             <div className='Project_Card'>
         <img src={IMGLoginDisplayMaster} alt="IMGLoginDisplayMaster" />
         <div className='Project_Info'>
          <p className='Project_Title'>Repair Workshop Management System (DM)</p>
          <p className='Project_Description'>
Designed and developed a web-based system for a real-world electronics repair workshop to manage customer devices, 
repair statuses, and inventory  </p>
          <div className='Project_Technologies'>
            <p className='pt'>Html</p>
            <p className='pt'>Css</p>
            <p className='pt'>Javascript</p>
            <p className='pt'>React</p>
            <p className='pt'>Php</p>
            <p className='pt'>Laravel</p>
            <p className='pt'>Mysql</p>
            <p className='pt'>MVC</p>
          </div>
          <a  target='_blank' className='linkGit'>This project is private<img className='gitImage' src={github} alt="" /></a>
         </div>
            </div>
        </div>
        <div className='OtherProjects_Container'>
          <p className='p1'>Other <span className='span'>Projects</span></p>
 <div className='Project_Card'>
         <div className='Project_Info'>
          <p className='Project_Title'>GPS-Enabled Smart Backpack</p>
          <p className='Project_Description'>
Created a GPS tracking system integrated into a backpack for preschool children’s safety</p>
          <div className='Project_Technologies'>
            <p className='pt'>Esp8266</p>
            <p className='pt'>Php</p>
            <p className='pt'>Mysql</p>
          </div>
          <a  className='linkGit'>This project is private<img className='gitImage' src={github} alt="" /></a>
         </div>
            </div>
        </div>
      </section>
      <section className='Contact_Section' id='Contact'>
        <p className='p1'>Get in <span>Touch</span></p>
        <p className='p2'>Ready to work together? I'd love to hear about your project and how I can help bring it to life.</p>
        <div className='PartsCotainer'>
        <div className='SendMailContainer'>
          <div className='SendMailNameEmail'>
            <div className='SendMailName'>
              <p className='p1'>Name</p>
              <input type="text" placeholder='Your name' />
            </div>
            <div className='SendMailEmail'>
              <p className='p1'>Email</p> 
              <input type="email" placeholder='Your email' />
            </div>
          </div>
          <p className='p3'>Subjetc</p>
          <input type="text" placeholder='Project discussion'  className='inputsubjetc'/>
          <p className='p4'>Message</p>
          <textarea name="" id="" cols="30" rows="10" placeholder='Tell me about your project' className='txaMessage'></textarea>
          <button className='btnSendMessage'>Send Message</button>
        </div>
        <div className='InfoContainer'>
        <div className='ContactInfo'>
          <p className='p1'>
            Contact Information
          </p>
          <div className='InfoItems'>
            <div className='iconItem'>
     <img src={envelope} alt="envelope" />
            </div>
            <div className='DescriptionItem'>
              <p className='p2'>Email</p>
              <p className='p3'>stacica22eneronkio@gmail.com</p>
            </div>

          </div>
           <div className='InfoItems'>
            <div className='iconItem'>
            <img src={thelephone} alt="thelephone" />
            </div>
            <div className='DescriptionItem'>
              <p className='p2'>Phone</p>
              <p className='p3'>+(52)953-240-7559</p>
            </div>

          </div>
           <div className='InfoItems'>
            <div className='iconItem'>
        <img src={geo} alt="geo" />
            </div>
            <div className='DescriptionItem'>
              <p className='p2'>Location</p>
              <p className='p3'>Oaxaca,Mexico</p>
            </div>

          </div>
        </div>
        <div className='socialMedia'>
           <p className='p1'>Follow Me</p>
           <div className='SocialMediaIcons'>
            <a href="https://github.com/kronen9999" target='_blank'><img src={github} alt="" /></a>
            <a href="https://www.linkedin.com/in/steven-camacho-cisneros-16ab15354/" target='_blank'><img src={linkedin} alt="" /></a>
           </div>
        </div>
        <div className='Text'>
          <p className='p1'>Let's Build Something Amazing</p>
          <p className='p2'>
           I'm always excited to work on new projects and collaborate with creative minds. Whether you have a clear vision or just an idea, let's discuss how we can bring it to life.
          </p>
        </div>
        </div>
        </div>
        <hr className='separator'/>
        <p className='Pend'>
       Designed and developed with modern technologies. Open to new opportunities.
        </p>
      </section>
      </div>
      </div>
    </div>
    </>
  )
}

export default App