// import React, { useEffect, useRef, useState } from 'react'
import React, { useEffect, useState } from 'react'
import styles from './mainpage.module.scss'
import Banner from '../banner/banner';
import Contact from './ContactForm/contact';
import AOS from 'aos';
import { cardData } from '../cards/techCardData'
import 'aos/dist/aos.css';
import TechCard from '../cards/techCard';


type MainPageProps = {
  contactFormState: boolean;
  setContactformState: React.Dispatch<React.SetStateAction<boolean>>
}

const MainPage: React.FC<MainPageProps> = ({ contactFormState, setContactformState }) => {

  const [buttonActive, setButtonActive] = useState<boolean>(true);

  useEffect(() => {
    AOS.init({ once: true, duration: 800, offset: 200, });
    
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

     <div className={styles.zeta}>
      {/* <img className={styles.zetaimg} src="https://i.ibb.co/nRjFWrg/zetaa.jpg" alt='zeta'/> */}
       <h3 className={styles.zeta} data-aos="fade-down">Hello! Welcome to my portfolio profile.</h3>
       <h3 className={styles.zeta} data-aos="fade-down"> I am Zhinar.</h3>
       <h3 className={styles.zeta} data-aos="fade-down">I study information and communication technology and I'm excited about programming and cyber security.</h3>
      </div>

          {/* about me div */}

          
          {/* <div className={styles.txtRvl1}>  */}
          
                <h3 className={styles.explore} data-aos="fade-down">😃ABOUT ME😃</h3>
                <h3 className={styles.zeta} data-aos="fade-down">Languages and Tools:</h3>
                
              <div className={styles.row}>
                {
                  cardData.map(x => <TechCard key={x.key} className={styles.awsPic} techData={x} /> )
                }

              </div>
                <h3 className={styles.zeta} data-aos="fade-down">I'm looking to collaborate on making a Gameproject</h3>
                <h3 className={styles.zeta} data-aos="fade-down"> You can ask me about ...</h3>

                {/* <h3 className={styles.explore2} data-aos="fade-up-right">Technology, CyberSecurity, Hardware, Software</h3> */}

                <div className={styles.row3}>

              <a href="https://www.ibm.com/topics/cybersecurity" rel="noreferr">
              <img data-aos="fade-down"
              className={styles.awsPic}
               src="https://www.svgrepo.com/show/304315/phone-shield.svg" alt="phone shield">
              </img></a>

              

              </div>
                <h3 className={styles.zeta2} data-aos="zoom-in">Technology</h3>
                <h3 className={styles.zeta2} data-aos="fade-down">CyberSecurity</h3>
                <h3 className={styles.zeta2} data-aos="zoom-out">Hardware</h3>
                <h3 className={styles.zeta2} data-aos="fade-up-right">Software</h3>
          {/* </div> */}

          {/* setup and equipment comes here */}
          <div className={styles.txtRvl2}  data-aos="fade-down"> 
              <h3 className={styles.explore}>💻Setup and Equipment💻</h3> 
            <div className={styles.textdivs}>
               <h3 className={styles.zeta} data-aos="fade-down">PC SPECS</h3>
               <h3 className={styles.zeta} data-aos="fade-down">Processor: Intel Core i7-8700K 3.7 GHz (up to 4.7 GHz)</h3>
               <h3 className={styles.zeta} data-aos="fade-down">Operating System: Windows 10 64-bit</h3>
               <h3 className={styles.zeta} data-aos="fade-down">Central memory: 32GB DDR4</h3>
               <h3 className={styles.zeta} data-aos="fade-down">Graphics Card: NVIDIA GeForce GTX 1080TI 8GB</h3>
               <h3 className={styles.zeta} data-aos="fade-down">Hard drive: 256GB m.2 SSD + 3TB HDD</h3>
            </div>
          </div>

          {/* my ide's comes here */}
            <div className={styles.txtRvl3}> 
                <h3 className={styles.explore} data-aos="fade-down">🔸IDE🔸</h3>
              <div className={styles.zeta3}>

              <div className={styles.row2}>



              <a href="https://visualstudio.microsoft.com/downloads/" rel="noreferr">
              <img data-aos="fade-down"
              className={styles.awsPic}
               src="https://upload.wikimedia.org/wikipedia/commons/5/59/Visual_Studio_Icon_2019.svg" alt="vs2019">
              </img></a>

              
              <a href="https://www.jetbrains.com/idea/" rel="noreferr">
              <img data-aos="fade-down"
              className={styles.awsPic}
               src="https://upload.wikimedia.org/wikipedia/commons/9/9c/IntelliJ_IDEA_Icon.svg" alt="IntelliJ">
              </img></a>

              
              <a href="https://netbeans.apache.org/download/nb120/nb120.html" rel="noreferr">
              <img data-aos="fade-down"
              className={styles.awsPic}
               src="https://upload.wikimedia.org/wikipedia/commons/9/98/Apache_NetBeans_Logo.svg" alt="Apache">
              </img></a>

              <a href="https://code.visualstudio.com/" rel="noreferr">
              <img data-aos="fade-down"
              className={styles.awsPic}
               src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" alt="vsCode">
              </img></a>

              </div>
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
          data-aos="fade-down"
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
