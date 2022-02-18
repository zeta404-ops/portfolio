import React from 'react'
import Banner from '../../banner/banner'
import styles from './cv.module.scss'
type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    
    <div className={styles.container}>

  <div className={styles.picBanner}>
  <Banner text='Curriculum Vitae' text2='Insightful IT manager with history of beating deadlines.'  className={styles.pic}/> 

  </div>

    <div>
     
    </div>

      <h3 className={styles.zeta}>🌐Click at the icons to visit official badge issuer site🌐</h3>
    <div className={styles.credly}> 
      
      {/* links to my badges */}
      <a className={styles.badge1} href="https://www.credly.com/badges/19303848-984e-498d-8015-50b56bc24cab/public_url" target="_blank" rel="noreferrer" ><img src="https://i.ibb.co/16bf6pK/cybersecurity-essentials.png" alt='cyber ess badge'/></a>
      <a className={styles.badge2} href="https://www.credly.com/badges/836d77f9-b428-441a-8d92-13fa8b5a0f26/public_url" target="_blank" rel="noreferrer" ><img src="https://i.ibb.co/RpSSWGZ/introduction-to-cybersecurity.png" alt='cyber intro badge'/></a>
      <a className={styles.badge3} href="https://www.credly.com/badges/2e122d42-14f5-4b9e-bd49-fd79990c1841/public_url" target="_blank" rel="noreferrer" ><img src="https://i.ibb.co/TtdJZSx/introduction-to-iot.png" alt='intro IOT badge'/></a>
      <a className={styles.badge4} href="https://www.credly.com/badges/ab6bb0c7-b6b7-4e58-842f-7cd877545085/public_url" target="_blank" rel="noreferrer" ><img src="https://i.ibb.co/nwfPT5x/pkttracer.png" alt='PACKET TRACER badge'/></a>
    </div>
    <h3 className={styles.zeta}>📚EDUCATION📚</h3>
    <h3 className={styles.graph} >Currently studying Bachelor of Degree in Information and Communication Technology, Varia</h3>
    <h3 className={styles.graph} >12.08.2020 - 03.06.2023</h3>

    <h3 className={styles.zeta}>🎖️SKILLS🎖️</h3>
    <h3 className={styles.graph}>
        Agile software development<br></br>
        Participating on small scrum teams<br></br>
        Writing user stories<br></br>
        Working with clients to develop product backlogs<br></br>
        Project management experience
    </h3>
    <h3 className={styles.graph}>Proficiency with programming languages such as.</h3>
    <h3 className={styles.codes}>SQL - Node Sql - Csharp - Unity - React - Java - HTML - CSS - TypeScript - JavaScript - ReactJs</h3>
    <h3 className={styles.graph}>Learning concepts and applying them to other problems.</h3>
    <h3 className={styles.graph}>Mathematical skills.</h3>
    <h3 className={styles.graph}>Problem-solving capability.</h3>
    <h3 className={styles.graph}>Communication skills.</h3>
    <h3 className={styles.graph}>Writing skills.</h3>
    <h3 className={styles.graph}>Inquisitiveness.</h3>
    <h3 className={styles.graph}>Self-motivation.</h3>

       <h3 className={styles.internship}>🎓Vesala Primary School, Ruudi Secondary School, internship🎓</h3>
       <h3 className={styles.graph} >12.08.2019 - 05.10.2019</h3>
       <h3 className={styles.graph}>I followed the lessons given by an ordinary teacher to create a cohesive and consistent learning experience for students
          <br></br>I supervised students inside and outside the classroom, on the playground and in the canteen
          <br></br>I gave the class assignments based on the lesson plan available
       </h3>

  </div>

  )
}

export default Cv
