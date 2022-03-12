import React, { useEffect } from 'react'
import Banner from '../../banner/banner'
import styles from './cv.module.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

type CvProps = {

}

const Cv: React.FC<CvProps> = () => {

  useEffect(() => {
    AOS.init({ once: true, duration: 800, offset: 200, });
    },);

  return (
    
    <div className={styles.container}>

  <div className={styles.picBanner}>
  <Banner text='Curriculum Vitae' text2='Insightful IT manager with history of beating deadlines.'  className={styles.pic}/> 
  </div>


    {/* <h3 className={styles.zeta} data-aos="zoom-out-down">🌐Click at the icons to visit official badge issuer site🌐</h3> */}

    {/* <div className={styles.credly}>  */}
      
      {/* links to my badges */}
      {/* <a className={styles.badge1}  data-aos="fade-right" href="https://www.credly.com/badges/19303848-984e-498d-8015-50b56bc24cab/public_url" target="_blank" rel="noreferrer" ><img className={styles.img1}  src="https://i.ibb.co/16bf6pK/cybersecurity-essentials.png" alt='cyber ess badge'/></a>
      <a className={styles.badge2}  data-aos="fade-up" href="https://www.credly.com/badges/836d77f9-b428-441a-8d92-13fa8b5a0f26/public_url" target="_blank" rel="noreferrer" ><img  className={styles.img1} src="https://i.ibb.co/RpSSWGZ/introduction-to-cybersecurity.png" alt='cyber intro badge'/></a>
      <a className={styles.badge3}  data-aos="fade-down" href="https://www.credly.com/badges/2e122d42-14f5-4b9e-bd49-fd79990c1841/public_url" target="_blank" rel="noreferrer" ><img  className={styles.img1} src="https://i.ibb.co/TtdJZSx/introduction-to-iot.png" alt='intro IOT badge'/></a>
      <a className={styles.badge4}  data-aos="fade-left" href="https://www.credly.com/badges/ab6bb0c7-b6b7-4e58-842f-7cd877545085/public_url" target="_blank" rel="noreferrer" ><img className={styles.img1} src="https://i.ibb.co/nwfPT5x/pkttracer.png" alt='PACKET TRACER badge'/></a> */}
    {/* </div> */}


    <div className={styles.downloadDiv} data-aos="zoom-out-right">
    <a className={styles.downloadbutton} href="https://docdro.id/iqmqP32" target="_blank" rel="noreferrer" ><h3 className={styles.zetaDownload}>CLICK HERE TO DOWNLOAD ALL OF MY CISCO CERTIFICATIONS</h3></a>
    </div>

   



    <h3 className={styles.zeta} data-aos="zoom-out-down" >📚EDUCATION📚</h3>
    <h3 className={styles.graph} data-aos="zoom-out-right" >Currently studying Bachelor of Degree in Information and Communication Technology, Varia</h3>
    <h3 className={styles.graph} data-aos="zoom-out-down" >12.08.2020 - 03.06.2023</h3>

    <h3 className={styles.zeta} data-aos="fade-up" >🎖️SKILLS🎖️</h3>
    <h3 className={styles.graph}  data-aos="fade-up" >
        Agile software development<br></br>
        Participating on small scrum teams<br></br>
        Writing user stories<br></br>
        Working with clients to develop product backlogs<br></br>
        Project management experience
    </h3>
    <h3 className={styles.graph} data-aos="fade-up">Proficiency with programming languages such as.</h3>
    {/* <h3 className={styles.codes} data-aos="fade-up">SQL - Node Sql - C# - Unity - React - Java - HTML - CSS - TypeScript - JavaScript - ReactJs</h3> */}

                {/*
                <h3 className={styles.zeta2} data-aos="fade-up-left">Node Sql</h3> 
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
                <br></br>
                <h3 className={styles.graph} data-aos="fade-up">Learning concepts and applying them to other problems.</h3>
                <h3 className={styles.graph} data-aos="fade-up">Mathematical skills.</h3>
                <h3 className={styles.graph} data-aos="fade-up">Problem-solving capability.</h3>
                <h3 className={styles.graph} data-aos="fade-up">Communication skills.</h3>
                <h3 className={styles.graph} data-aos="fade-up">Writing skills.</h3>
                <h3 className={styles.graph} data-aos="fade-up">Inquisitiveness.</h3>
                <h3 className={styles.graph} data-aos="fade-up">Self-motivation.</h3>

       <h3 className={styles.internship}  data-aos="fade-up">🎓Vesala Primary School, Ruudi Secondary School, internship🎓</h3>
       <h3 className={styles.graph} data-aos="fade-up" >12.08.2019 - 05.10.2019</h3>
       <h3 className={styles.graph} data-aos="fade-up">I followed the lessons given by an ordinary teacher to create a cohesive and consistent learning experience for students
          <br></br>I supervised students inside and outside the classroom, on the playground and in the canteen
          <br></br>I gave the class assignments based on the lesson plan available
       </h3>

       <h3 className={styles.internship}  data-aos="fade-up">📱Good knowledge in these programs and editors📱</h3>

         <div className={styles.row}>
          <a href="https://github.com/" rel="noreferr">
          <img data-aos="fade-down"
          className={styles.awsPic}
          src="https://img.icons8.com/nolan/344/github.png" alt="github">
          </img></a>

          <a href="https://lumion.com/" rel="noreferr">
          <img data-aos="fade-down"
          className={styles.awsPic1}
          src="https://logodix.com/logo/1995865.png" alt="lumion">
          </img></a>

          <a href="https://www.blender.org/" rel="noreferr">
          <img data-aos="fade-down"
          className={styles.awsPic}
          src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Logo_Blender.svg" alt="blender">
          </img></a>

          <a href="https://unity.com/" rel="noreferr">
          <img data-aos="fade-down"
          className={styles.awsPic}
          src="https://upload.wikimedia.org/wikipedia/commons/archive/1/19/20210922191318%21Unity_Technologies_logo.svg" alt="unity">
          </img></a>

          <a href="https://www.audacityteam.org/" rel="noreferr">
          <img data-aos="fade-down"
          className={styles.awsPic}
          src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Audacity_Logo.svg" alt="audacity">
          </img></a>

          <a href="https://filezilla-project.org/" rel="noreferr">
          <img data-aos="fade-down"
          className={styles.awsPic}
          src="https://upload.wikimedia.org/wikipedia/commons/0/01/FileZilla_logo.svg" alt="FileZilla">
          </img></a>
                          
          <a href="https://obsproject.com/" rel="noreferr">
          <img data-aos="fade-down"
          className={styles.awsPic}
          src="https://upload.wikimedia.org/wikipedia/commons/d/d3/OBS_Studio_Logo.svg" alt="OBS">
          </img></a>

          <a href="https://wordpress.org/" rel="noreferr">
          <img data-aos="fade-down"
          className={styles.awsPic}
          src="https://upload.wikimedia.org/wikipedia/commons/2/20/WordPress_logo.svg" alt="WORDPRESS">
          </img></a>

          <a href="https://www.gimp.org/" rel="noreferr">
          <img data-aos="fade-down"
          className={styles.awsPic}
          src="https://upload.wikimedia.org/wikipedia/commons/4/45/The_GIMP_icon_-_gnome.svg" alt="GIMP">
          </img></a>

          <a href="https://www.adobe.com/" rel="noreferr">
          <img data-aos="fade-down"
          className={styles.awsPic}
          src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" alt="PS2022">
          </img></a>

          <a href="https://www.virtualbox.org/" rel="noreferr">
          <img data-aos="fade-down"
          className={styles.awsPic}
          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Virtualbox_logo.png" alt="ORACLEVM">
          </img></a>

          <a href="https://www.microsoft.com/" rel="noreferr">
          <img data-aos="fade-down"
          className={styles.awsPic}
          src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="MS">
          </img></a>
        </div>

       {/* <h3 className={styles.graph}  data-aos="fade-up">LUMION 8</h3>
       <h3 className={styles.graph} data-aos="fade-up">BLENDER</h3>
       <h3 className={styles.graph} data-aos="fade-up">UNITY</h3>
       <h3 className={styles.graph} data-aos="fade-up">GITHUB</h3>
       <h3 className={styles.graph} data-aos="fade-up">AUDACITY</h3>
       <h3 className={styles.graph} data-aos="fade-up">FILEZILLA SERVER</h3>
       <h3 className={styles.graph} data-aos="fade-up">OBS STUDIO</h3>
       <h3 className={styles.graph} data-aos="fade-up">WORDPRESS</h3>
       <h3 className={styles.graph} data-aos="fade-up">GIMP</h3>
       <h3 className={styles.graph} data-aos="fade-up">ADOBE PHOTOSHOP 2022</h3>
       <h3 className={styles.graph} data-aos="fade-up">PACKET TRACER</h3>
       <h3 className={styles.graph} data-aos="fade-up">VIRTUALBOX VM</h3>
        <br></br>
        <br></br> */}

  </div>

  )
}

export default Cv
