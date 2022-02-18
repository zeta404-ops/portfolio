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
      <img className={styles.zetaimg} src="https://i.ibb.co/nRjFWrg/zetaa.jpg" alt='zeta'/>
       <h3 className={styles.zeta}>Hello! Welcome to my portfolio profile.<br></br>
        I am Zhinar Masood.<br></br>
        I study information and communication technology and I'm excited about programming and cyber security.
       </h3>
      </div>

          {/* about me div */}
          <div className={styles.txtRvl1}> 
                <h3 className={styles.explore}>😃ABOUT ME😃</h3>
            <div className={styles.zeta1}>
                <h3 className={styles.zeta}>I'm currently learning:<br></br>SQL - Node Sql - Csharp - Unity - React - Java - HTML - CSS - JAVASCRIPT - Typescript.
                <br></br>I'm looking to collaborate on making a Gameproject<br></br>
                You can ask me about ... Technology, CyberSecurity, Hardware, Software.<br></br>
                  </h3>
            </div>
          </div>

          {/* setup and equipment comes here */}
          <div className={styles.txtRvl2}> 
              <h3 className={styles.explore}>💻Setup and Equipment💻</h3> 
            <div className={styles.zeta2}>
                <h3 className={styles.zeta}>PC SPECS<br></br>
                Processor: Intel Core i7-8700K 3.7 GHz (up to 4.7 GHz)<br></br>
                Operating System: Windows 10 64-bit<br></br>
                Central memory: 32GB DDR4<br></br>
                Graphics Card: NVIDIA GeForce GTX 1080TI 8GB<br></br>
                Hard drive: 256GB m.2 SSD + 3TB HDD<br></br>
                </h3>
            </div>
          </div>

          {/* my ide's comes here */}
            <div className={styles.txtRvl3}> 
                <h3 className={styles.explore}>🔸IDE🔸</h3>
              <div className={styles.zeta3}>
                <h3 className={styles.zeta}>VISUAL STUDIO CODE<br></br>
                Visual Studio 2019<br></br>
                IntteliJ IDEA Community Edition<br></br>
                Apache NetBeans IDE 12.0
                </h3>
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
