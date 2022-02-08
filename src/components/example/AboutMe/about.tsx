import React from 'react'
import styles from './about.module.scss'
import Banner from '../../banner/banner'
import ig from '../../banner/ig.png'
import linkedin from '../../banner/in.png'

type AboutProps = {

}

const About: React.FC<AboutProps> = () => {
  return (
    
  <div className={styles.container}>
  <div className={styles.picBanner}>
  <Banner text='⭐ABOUT ME⭐' text2='if it were easy everybody would do it.' className={styles.pic}/> 
  </div>




    
  <div className={styles.zeta}>
       <h3 className={styles.zeta}>Hello! Welcome to my portfolio profile.<br></br>
        I am Zhinar Masood.<br></br>
        I study information and communication technology and I'm excited about programming and cyber security.
       </h3>
      </div>

      <h3 className={styles.redtitle}>ABOUT ME</h3>

        <div className={styles.zeta}>
         <h3 className={styles.zeta}>I'm currently learning: SQL - Node Sql - Csharp - Unity - React - Java - HTML - CSS - JAVASCRIPT - Typescript.
         <br></br>I'm looking to collaborate on making a Gameproject<br></br>
         You can ask me about ... Technology, CyberSecurity, Hardware, Software.<br></br>
         </h3>
        </div>

        <h3 className={styles.redtitle}>CONTACT ME</h3>

        <div className={styles.socials}>
         <a className={styles.socials1} href="https://www.instagram.com/zhinar_0/"><img className={styles.img1} src={ig} alt='IG LOGO'/></a>

         <a className={styles.socials2} href="https://www.linkedin.com/in/zhinar/"><img className={styles.img2} src={linkedin} alt='LINKEDIN LOGO'/></a>
         </div>
        </div>

  )
}

export default About
