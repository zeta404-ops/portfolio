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
<img className="pic" src={aboutme} alt='about for about me'/>
</div>


<div 
>
<h3 className="zeta" >Hello! Welcome to my portfolio profile.<br></br>
I am Zhinar Masood.<br></br>
I study information and communication technology and I'm excited about programming and cyber security.<br></br>
Here you will find my CV and some of my projects.</h3>

</div>


  </div>

  )
}

export default About
