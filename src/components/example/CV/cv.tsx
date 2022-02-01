import React from 'react'
import styles from './someExampleComponent.module.scss'
import banner from '../video/bannerr.gif'
import * as ReactBootStrap from "react-bootstrap"
import {Link} from "react-router-dom";
type SomeExampleComponentProps = {

}

const SomeExampleComponent: React.FC<SomeExampleComponentProps> = () => {
  return (
    
    <div className={styles.container}>
<>
<div className={styles.nav}>
  <ReactBootStrap.Navbar variant="light">
    <ReactBootStrap.Container>
  
    <ReactBootStrap.Nav className="me-auto">
      <ReactBootStrap.Nav.Link href="#Home
      ">Home</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#Projects">Projects</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
    </ReactBootStrap.Container>
  </ReactBootStrap.Navbar>
  </div>
</>
<div className={styles.picBanner}>
<img className="pic" src={banner} alt='Banner for web dev'/>

</div>
<Link to="/Dashboard"><p>Explore</p></Link>

<div 
>
<h3 className="zeta" >EDUCATION</h3>

</div>


  </div>

  )
}

export default SomeExampleComponent
