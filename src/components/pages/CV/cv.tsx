import React, { useEffect } from 'react'
import Banner from '../../banner/banner'
import styles from './cv.module.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { cardData } from '../../cards/techCardData';
import TechCard from '../../cards/techCard';


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

   
      
      <div className={styles.zetaPic}><a href="#/"><img className={styles.zetaPicp} src="https://i.ibb.co/Kjj7Fmv/ZETAIMG-modified.png" alt="zeta" /></a></div>
    <h3 className={styles.zet2a} data-aos="zoom-out-down" >Zhinar Masood</h3>
    <h3 className={styles.zet3a} data-aos="zoom-out-down" >ICT Student & future programmer</h3>


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

    <div className={styles.row}>
                {
                  cardData.map(x => <TechCard key={x.key} className={styles.awsPic} techData={x} /> )
                }

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
