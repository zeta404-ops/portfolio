import React from 'react'
import styles from './about.module.scss'
import aboutme from '../../video/banner.gif'


type AboutProps = {

}

const About: React.FC<AboutProps> = () => {
  return (
    
  <div className={styles.container}>
  <div className={styles.picBanner}>
  <img className={styles.pic} src={aboutme} alt='about me banner'/>
  </div>


  <div>
    <h3 className={styles.zeta}>ABOUT ME<br></br><br></br>I'm currently learning: SQL - NodeSql - C# - Unity - React - Java<br></br>I'm looking to collaborate on Making a Gameproject<br></br>
     You can ask me about ... Technology, CyberSecurity, Hardware, Software.<br></br>
     </h3>
  </div>


 </div>

  )
}

export default About
