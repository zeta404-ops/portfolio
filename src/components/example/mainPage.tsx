// import React, { useEffect, useRef, useState } from 'react'
import React, { useEffect, useState } from 'react'
import styles from './mainpage.module.scss'
import Banner from '../banner/banner';
import Contact from './ContactForm/contact';

type MainPageProps = {
  contactFormState: boolean;
  setContactformState: React.Dispatch<React.SetStateAction<boolean>>
}

const MainPage: React.FC<MainPageProps> = ({ contactFormState, setContactformState }) => {

  const [buttonActive, setButtonActive] = useState<boolean>(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setButtonActive(true);
    }, 1000);

    return () => clearTimeout(timer);

  },  [contactFormState]);

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
     <img className={styles.zetaimg} src="https://i.ibb.co/nRjFWrg/zetaa.jpg" alt='zeta'/>
       <h3 className={styles.zeta}>Hello! Welcome to my portfolio profile.<br></br>
        I am Zhinar Masood.<br></br>
        I study information and communication technology and I'm excited about programming and cyber security.
       </h3>
      </div>

      <h3 className={styles.explore}>😃ABOUT ME😃</h3>

        <div className={styles.zeta}>
         <h3 className={styles.zeta}>I'm currently learning: SQL - Node Sql - Csharp - Unity - React - Java - HTML - CSS - JAVASCRIPT - Typescript.
         <br></br>I'm looking to collaborate on making a Gameproject<br></br>
         You can ask me about ... Technology, CyberSecurity, Hardware, Software.<br></br>
         </h3>
        </div>

        <h3 className={styles.explore}>💻Setup and Equipment💻</h3>
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

              <h3 className={styles.explore}>🔸IDE🔸</h3>
              <h3 className={styles.zeta}>VISUAL STUDIO CODE<br></br>
              Visual Studio 2019<br></br>
              IntteliJ IDEA Community Edition<br></br>
              
              </h3>
        </div>

        { 
          contactFormState
           ? <Contact openState={contactFormState} setModalIsOpen={setContactformState}/> 
           : null
        }
        {/* <Link to="/contact"><p className={styles.explore}>CONTACT ME</p></Link> */}
        {/* <Contact modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/> */}
        {/* <Link to={'contact'} className={styles.explore}>hh</Link> */}

        <button
          className={styles.explore}
          disabled={!buttonActive}
          onClick={(e) => {
            setContactformState(true);
            setButtonActive(false);
            e.preventDefault()
          }}
        >
        😎Contact Us😎
        </button>



  </div>
)}

export default MainPage
