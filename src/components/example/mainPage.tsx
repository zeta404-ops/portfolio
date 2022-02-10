import React from 'react'
import styles from './mainpage.module.scss'
import Banner from '../banner/banner';
import {CgInstagram} from 'react-icons/cg'
import {AiOutlineLinkedin} from 'react-icons/ai'
type MainPageProps = {

}

const MainPage: React.FC<MainPageProps> = () => {
  return (
    <div className={styles.container}>



      {/* images for main page*/}

      <div className={styles.pic}>
      {/* <img className={styles.pic} src={banner} alt='Banner for web dev'/> */}
      <Banner text='WEB DEVELOPER' text2='Designing success through creative web design'  className={styles.pic}/> 
      

      {/* links for about me page*/}

     </div>
     {/* <Link to="/aboutme"><p className={styles.explore}>About Me</p></Link> */}
     <div className={styles.zeta}>
       <h3 className={styles.zeta}>Hello! Welcome to my portfolio profile.<br></br>
        I am Zhinar Masood.<br></br>
        I study information and communication technology and I'm excited about programming and cyber security.
       </h3>
      </div>

      <h3 className={styles.explore}>ABOUT ME</h3>

        <div className={styles.zeta}>
         <h3 className={styles.zeta}>I'm currently learning: SQL - Node Sql - Csharp - Unity - React - Java - HTML - CSS - JAVASCRIPT - Typescript.
         <br></br>I'm looking to collaborate on making a Gameproject<br></br>
         You can ask me about ... Technology, CyberSecurity, Hardware, Software.<br></br>
         </h3>
        </div>

        <h3 className={styles.explore}>Setup and Equipment</h3>
        <div className={styles.zeta}>
          <h3 className={styles.zeta}>PC SPECS<br></br>
              Processor: Intel Core i7-8700K 3.7 GHz (up to 4.7 GHz)<br></br>
              Operating System: Windows 10 64-bit<br></br>
              Central memory: 32GB DDR4<br></br>
              Graphics Card: NVIDIA GeForce GTX 1080 8GB<br></br>
              Hard drive: 256GB m.2 SSD + 1TB HDD<br></br>
              Memory card slot: SD card reader<br></br>
              Optical drive: SuperMulti DVD RW<br></br>
              </h3>

              <h3 className={styles.explore}>IDE</h3>
              <h3 className={styles.zeta}>VISUAL STUDIO CODE<br></br>
              Visual Studio 2019<br></br>
              IntteliJ IDEA Community Edition<br></br>
              
              </h3>
        </div>

        
        {/* <Link to="/contact"><p className={styles.explore}>CONTACT ME</p></Link> */}

        <h3 className={styles.explore}>CONTACT ME</h3>

        <div className={styles.socials}>

         <div> 
           <a href="https://www.instagram.com/zhinar_0/" target="_blank" rel="noreferrer" >
             <CgInstagram size={55} color="#D41141"/> 
           </a>
         </div>
         <div> 
           <a href="https://www.linkedin.com/in/zhinar/" target="_blank" rel="noreferrer" >
             <AiOutlineLinkedin size={63} color="#D41141"/> 
           </a>
         </div>
         </div>

  </div>
)}

export default MainPage