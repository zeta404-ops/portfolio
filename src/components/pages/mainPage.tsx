// import React, { useEffect, useRef, useState } from 'react'
import React, { useEffect, useState } from 'react'
import styles from './mainpage.module.scss'
import Banner from '../banner/banner';
import Contact from './ContactForm/contact';
import AOS from 'aos';
import 'aos/dist/aos.css';


type MainPageProps = {
  contactFormState: boolean;
  setContactformState: React.Dispatch<React.SetStateAction<boolean>>
}

const MainPage: React.FC<MainPageProps> = ({ contactFormState, setContactformState }) => {

  const [buttonActive, setButtonActive] = useState<boolean>(true);

  useEffect(() => {
    AOS.init({duration: 1500});
    
    // timer for the button to be inactive about 200ms 
    const timer = setTimeout(() => {
      setButtonActive(true);
    }, 200);

    return () => clearTimeout(timer);

  },  [contactFormState]);


  return (

    // Banner is commanded here
    <div className={styles.container}>
      <div className={styles.pic}>
      <Banner text='WEB DEVELOPER' text2='Designing success through creative web design'  className={styles.pic}/> 
     </div>

    {/* my own image and introduction  */}
     <div className={styles.zeta} data-aos="zoom-in">
      {/* <img className={styles.zetaimg} src="https://i.ibb.co/nRjFWrg/zetaa.jpg" alt='zeta'/> */}
       <h3 className={styles.zeta}>Hello! Welcome to my portfolio profile.<br></br>
        I am Zhinar.<br></br>
        I study information and communication technology and I'm excited about programming and cyber security.
       </h3>
      </div>

          {/* about me div */}

          
          <div className={styles.txtRvl1}> 
          
                <h3 className={styles.explore} data-aos="fade-up-right">😃ABOUT ME😃</h3>
            <div className={styles.zeta1}>
            
                <h3 className={styles.zeta} data-aos="fade-up-left">I'm currently learning:</h3>
                <h3 className={styles.explore1} data-aos="fade-up-right">SQL - Node Sql - C# - Unity - React - Java - HTML - CSS - JAVASCRIPT - Typescript</h3>
                <h3 className={styles.zeta} data-aos="fade-up-left">I'm looking to collaborate on making a Gameproject</h3>
                <h3 className={styles.zeta} data-aos="fade-up-left"> You can ask me about ...</h3>
                <h3 className={styles.explore2} data-aos="fade-up-right">Technology, CyberSecurity, Hardware, Software</h3>
            </div>
          </div>

          {/* setup and equipment comes here */}
          <div className={styles.txtRvl2}  data-aos="fade-up-left"> 
              <h3 className={styles.explore}>💻Setup and Equipment💻</h3> 
            <div className={styles.zeta2}>
               <h3 className={styles.zeta} data-aos="fade-up-left">PC SPECS</h3>
               <h3 className={styles.zeta} data-aos="fade-up">Processor: Intel Core i7-8700K 3.7 GHz (up to 4.7 GHz)</h3>
               <h3 className={styles.zeta} data-aos="fade-down-right">Operating System: Windows 10 64-bit</h3>
               <h3 className={styles.zeta} data-aos="fade-right">Central memory: 32GB DDR4</h3>
               <h3 className={styles.zeta} data-aos="fade-up-right">Graphics Card: NVIDIA GeForce GTX 1080TI 8GB</h3>
               <h3 className={styles.zeta} data-aos="fade-up-left">Hard drive: 256GB m.2 SSD + 3TB HDD</h3>
            </div>
          </div>

          {/* my ide's comes here */}
            <div className={styles.txtRvl3}> 
                <h3 className={styles.explore} data-aos="fade-up">🔸IDE🔸</h3>
              <div className={styles.zeta3}>
                <h3 className={styles.zeta} data-aos="fade-up">VISUAL STUDIO CODE</h3>
                <h3 className={styles.zeta} data-aos="fade-up-right">Visual Studio 2019</h3>
                <h3 className={styles.zeta} data-aos="fade-down">IntteliJ IDEA Community Edition</h3>
                <h3 className={styles.zeta} data-aos="fade-up">Apache NetBeans IDE 12.0</h3>
               
              </div>
            </div>

        {/* takes contactform state and if its clicked it sets modal to open */}
        { 
          contactFormState
           ? <Contact openState={contactFormState} setModalIsOpen={setContactformState}/> 
           : null
        }

        {/* contact me button */}
        <button   
          data-aos="slide-up"
          className={styles.contact}
          disabled={!buttonActive}
          onClick={(e) => {
            setContactformState(true);
            setButtonActive(false);
            e.preventDefault()
          }}
        >
        😎Contact Me😎
        </button>



  </div>
)}

export default MainPage
