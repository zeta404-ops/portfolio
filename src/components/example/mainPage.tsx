import React from 'react'
import styles from './mainpage.module.scss'
import {Link} from "react-router-dom";
import Banner from '../banner/banner';
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
     <Link to="/aboutme"><p className={styles.explore}>Explore</p></Link>

      <div className={styles.zeta}>
      <h3>Hello! Welcome to my portfolio profile.<br></br>
        I am Zhinar Masood.<br></br>
        I study information and communication technology and I'm excited about programming and cyber security.<br></br>
        Here you will find my CV and some of my projects.
      </h3>
      </div>
  </div>
)}

export default MainPage
