import React from 'react'
import styles from './mainpage.module.scss'
import banner from '../video/bannerr.gif'
import zz from '../video/ZZ.gif'
import * as ReactBootStrap from "react-bootstrap"
import {Link} from "react-router-dom";
type MainPageProps = {

}

const MainPage: React.FC<MainPageProps> = () => {
  return (
    <div className={styles.container}>

      <div className={styles.nav}>
        <ReactBootStrap.Navbar variant="light">
          <ReactBootStrap.Container>
            <Link to="/sd"> 
            <div className={styles.logo} ><img src={zz} alt='logo'/> </div></Link>
            <ReactBootStrap.Nav>
            <ReactBootStrap.Nav.Link href="#Home">Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#CV">CV</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#Projects">Projects</ReactBootStrap.Nav.Link>

          </ReactBootStrap.Nav>
          </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
      </div>
  
      {/* images for main page*/}

      <div className={styles.pic}>
      <img className={styles.pic} src={banner} alt='Banner for web dev'/>
      
      

      {/* links for about me page*/}

    </div>
    <Link to="/aboutme"><p className={styles.explore} >Explore</p></Link>

    <div>
      <h3 className={styles.zeta} >Hello! Welcome to my portfolio profile.<br></br>
        I am Zhinar Masood.<br></br>
        I study information and communication technology and I'm excited about programming and cyber security.<br></br>
        Here you will find my CV and some of my projects.
      </h3>
    </div>
  </div>
)}

export default MainPage
