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


    <h3 className={styles.zeta} data-aos="zoom-out-down">🌐Click at the icons to visit official badge issuer site🌐</h3>

    <div className={styles.credly}> 
      
      {/* links to my badges */}
      <a className={styles.badge1}  data-aos="fade-right" href="https://www.credly.com/badges/19303848-984e-498d-8015-50b56bc24cab/public_url" target="_blank" rel="noreferrer" ><img src="https://i.ibb.co/16bf6pK/cybersecurity-essentials.png" alt='cyber ess badge'/></a>
      <a className={styles.badge2}  data-aos="fade-up" href="https://www.credly.com/badges/836d77f9-b428-441a-8d92-13fa8b5a0f26/public_url" target="_blank" rel="noreferrer" ><img src="https://i.ibb.co/RpSSWGZ/introduction-to-cybersecurity.png" alt='cyber intro badge'/></a>
      <a className={styles.badge3}  data-aos="fade-down" href="https://www.credly.com/badges/2e122d42-14f5-4b9e-bd49-fd79990c1841/public_url" target="_blank" rel="noreferrer" ><img src="https://i.ibb.co/TtdJZSx/introduction-to-iot.png" alt='intro IOT badge'/></a>
      <a className={styles.badge4}  data-aos="fade-left" href="https://www.credly.com/badges/ab6bb0c7-b6b7-4e58-842f-7cd877545085/public_url" target="_blank" rel="noreferrer" ><img src="https://i.ibb.co/nwfPT5x/pkttracer.png" alt='PACKET TRACER badge'/></a>
    </div>

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
    <h3 className={styles.zeta2} data-aos="fade-up-left">Node Sql</h3>
                <h3 className={styles.zeta2} data-aos="fade-up-right">C#</h3>
                <h3 className={styles.zeta2} data-aos="fade-up">Unity</h3>
                <h3 className={styles.zeta2} data-aos="fade-down">React</h3>
                <h3 className={styles.zeta2} data-aos="zoom-in">Java</h3>
                <h3 className={styles.zeta2} data-aos="zoom-out">HTML</h3>
                <h3 className={styles.zeta2} data-aos="fade-down">CSS</h3>
                <h3 className={styles.zeta2} data-aos="fade-down-right">JAVASCRIPT</h3>
                <h3 className={styles.zeta2} data-aos="zoom-in">Typescript</h3>
                <h3 className={styles.zeta2} data-aos="zoom-out">ReactJS</h3>
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
       <h3 className={styles.graph}  data-aos="fade-up">LUMION 8</h3>
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


  </div>

  )
}

export default Cv
