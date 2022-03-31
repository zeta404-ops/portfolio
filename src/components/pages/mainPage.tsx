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
                
                {/* <h3 className={styles.explore1} data-aos="fade-up-right">SQL - Node Sql - C# - Unity - React - Java - HTML - CSS - JAVASCRIPT - Typescript</h3> */}
                {/* <h3 className={styles.zeta2} data-aos="fade-up-left">Node Sql</h3>
                <h3 className={styles.zeta2} data-aos="fade-up-right">C#</h3>
                <h3 className={styles.zeta2} data-aos="fade-up">Unity</h3>
                <h3 className={styles.zeta2} data-aos="fade-down">React</h3>
                <h3 className={styles.zeta2} data-aos="zoom-in">Java</h3>
                <h3 className={styles.zeta2} data-aos="zoom-out">HTML</h3>
                <h3 className={styles.zeta2} data-aos="fade-down">CSS</h3>
                <h3 className={styles.zeta2} data-aos="fade-down-right">JAVASCRIPT</h3>
                <h3 className={styles.zeta2} data-aos="zoom-in">Typescript</h3>
                <h3 className={styles.zeta2} data-aos="zoom-out">ReactJS</h3> */}

              <div className={styles.row}>

              <a href="https://aws.amazon.com" rel="noreferr">
              <img data-aos="fade-down"
              className={styles.awsPic}
               src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws">
              </img></a>

              <a href="https://www.blender.org/" rel="noreferr">
              <img data-aos="fade-down"
              className={styles.awsPic}
               src="https://download.blender.org/branding/community/blender_community_badge_white.svg" alt="blender">
              </img></a>
              
              <a href="https://www.w3schools.com/cs/index.php" rel="noreferr">
              <img data-aos="fade-down"
              className={styles.awsPic}
               src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="cs">
              </img></a>

              <a href="https://www.w3schools.com/css/" rel="noreferr">
              <img data-aos="fade-down"
              className={styles.awsPic}
               src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css">
              </img></a>

              <a href="https://firebase.google.com/" rel="noreferr">
              <img data-aos="fade-down"
              className={styles.awsPic}
               src="https://camo.githubusercontent.com/dd4b2422ed3bfc9da88c43d18550375c66f9584327dff7ecc19315ce50b96f07/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f66697265626173652f66697265626173652d69636f6e2e737667" alt="firebase">
              </img></a>

              <a href="https://git-scm.com/" rel="noreferr">
              <img data-aos="fade-down"
              className={styles.awsPic}
               src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667" alt="git">
              </img></a>

              <a href="https://www.w3.org/html/" rel="noreferr">
              <img data-aos="fade-down"
              className={styles.awsPic}
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html">
              </img></a>

              <a href="https://www.java.com/en/" rel="noreferr">
              <img data-aos="fade-down"
              className={styles.awsPic}
               src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java">
              </img></a>

              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" rel="noreferr">
              <img data-aos="fade-down"
              className={styles.awsPic}
               src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="js">
              </img></a>
                
              <a href="https://www.linux.org/" rel="noreferr">
              <img data-aos="fade-down"
              className={styles.awsPic}
               src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux">
              </img></a>

                <br></br>
              <a href="https://www.mongodb.com/" rel="noreferr">
              <img data-aos="fade-down"
              className={styles.awsPic}
               src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongoDB">
              </img></a>

              <a href="https://www.mysql.com/" rel="noreferr">
              <img data-aos="fade-down"
              className={styles.awsPic}
               src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mySQL">
              </img></a>

              <a href="https://nodejs.org/en/" rel="noreferr">
              <img data-aos="fade-down"
              className={styles.awsPic}
               src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="NodeJS">
              </img></a>

              <a href="https://www.photoshop.com/en" rel="noreferr">
              <img data-aos="fade-down"
              className={styles.awsPic}
               src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="PS">
              </img></a>

              <a href="https://www.python.org/" rel="noreferr">
              <img data-aos="fade-down"
              className={styles.awsPic}
               src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="PYTHON">
              </img></a>
              
              <a href="https://reactjs.org/" rel="noreferr">
              <img data-aos="fade-down"
              className={styles.awsPic}
               src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React">
              </img></a>

              <a href="https://reactnative.dev/" rel="noreferr">
              <img data-aos="fade-down"
              className={styles.awsPic}
               src="https://camo.githubusercontent.com/5c92eeb467fd5d2b1ef1c560e3c3c2f758a8d4e03a8136bda7b41a2d3d4a1b59/68747470733a2f2f72656163746e61746976652e6465762f696d672f6865616465725f6c6f676f2e737667" alt="ReactNative">
              </img></a>

              <a href="https://sass-lang.com/" rel="noreferr">
              <img data-aos="fade-down"
              className={styles.awsPic}
               src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass">
              </img></a>

              <a href="https://www.typescriptlang.org/" rel="noreferr">
              <img data-aos="fade-down"
              className={styles.awsPic}
               src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TS">
              </img></a>

              <a href="https://unity.com/" rel="noreferr">
              <img data-aos="fade-down"
              className={styles.awsPic}
               src="https://camo.githubusercontent.com/f8f5c4f90fe3c43e5b7858360cf3a4eeffcaa0bdf7352c7c8c4b9c1489bb7f99/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f756e69747933642f756e69747933642d69636f6e2e737667" alt="Unity">
              </img></a>
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

              {/* <a href="https://visualstudio.microsoft.com/downloads/" rel="noreferr">
              <img data-aos="fade-down"
              className={styles.awsPic}
               src="https://www.svgrepo.com/show/228666/technological.svg" alt="vs2019">
              </img></a>


              <a href="https://visualstudio.microsoft.com/downloads/" rel="noreferr">
              <img data-aos="fade-down"
              className={styles.awsPic}
               src="https://www.svgrepo.com/show/302643/processor.svg" alt="vs2019">
              </img></a>


              <a href="https://visualstudio.microsoft.com/downloads/" rel="noreferr">
              <img data-aos="fade-down"
              className={styles.awsPic}
               src="https://www.svgrepo.com/show/179551/monitor-technology.svg" alt="vs2019">
              </img></a> */}



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
                {/* <h3 className={styles.zeta} data-aos="fade-up">VISUAL STUDIO CODE</h3>
                <h3 className={styles.zeta} data-aos="fade-up-right">Visual Studio 2019</h3>
                <h3 className={styles.zeta} data-aos="fade-down">IntteliJ IDEA Community Edition</h3>
                <h3 className={styles.zeta} data-aos="fade-up">Apache NetBeans IDE 12.0</h3>
                */}
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
