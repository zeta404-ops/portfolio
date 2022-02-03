import React from 'react'
import styles from './about.module.scss'
import Banner from '../../banner/banner'


type AboutProps = {

}

const About: React.FC<AboutProps> = () => {
  return (
    
  <div className={styles.container}>
  <div className={styles.picBanner}>
  <Banner text='ABOUT ME' text2='if it were easy everybody would do it.' className={styles.pic}/> 
  </div>




    
  <div className={styles.zeta}>
       <h3>Hello! Welcome to my portfolio profile.<br></br>
        I am Zhinar Masood.<br></br>
        I study information and communication technology and I'm excited about programming and cyber security.
       </h3>
      </div>

  
        <div className={styles.zeta}>
         <h3>ABOUT ME<br></br><br></br>I'm currently learning: SQL - Node Sql - Csharp - Unity - React - Java - HTML - CSS - JAVASCRIPT - Typescript.<br></br>I'm looking to collaborate on Making a Gameproject<br></br>
         You can ask me about ... Technology, CyberSecurity, Hardware, Software.<br></br>
         </h3>
        </div>

        <h3> yhteystiedot</h3>
        
 </div>

  )
}

export default About
