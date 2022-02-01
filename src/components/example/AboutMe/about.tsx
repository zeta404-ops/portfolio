import React from 'react'
import styles from './about.module.scss'
import aboutme from '../../video/aboutme.gif'
import * as ReactBootStrap from "react-bootstrap"

type AboutProps = {

}

const About: React.FC<AboutProps> = () => {
  return (
    
    <div className={styles.container}>
<>
<div className={styles.nav}>
  <ReactBootStrap.Navbar variant="light">
    <ReactBootStrap.Container>
  
    <ReactBootStrap.Nav className="me-auto">
      <ReactBootStrap.Nav.Link href="#Home
      ">Home</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#Projects">Projects</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
    </ReactBootStrap.Container>
  </ReactBootStrap.Navbar>
  </div>
</>
<div className={styles.picBanner}>
<img className="pic" src={aboutme} alt='about me banner'/>
</div>


 <div >
  <h3 className={styles.zeta}>ABOUT ME<br></br>I’m currently learning: SQL - NodeSql - Csharp - Unity - React - Java<br></br>I’m looking to collaborate on Making a Gameproject<br></br>
  You can ask me about ... Technology, CyberSecurity, Hardware, Software.
  </h3>
 </div>


  </div>

  )
}

export default About
