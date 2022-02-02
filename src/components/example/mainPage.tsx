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
     <Link to="/aboutme"><p className={styles.explore}>About Me</p></Link>

  </div>
)}

export default MainPage
