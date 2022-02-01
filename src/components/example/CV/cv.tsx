import React from 'react'
import styles from './someExampleComponent.module.scss'
import banner from '../../video/banner.gif'
import {Link} from "react-router-dom";
type SomeExampleComponentProps = {

}

const SomeExampleComponent: React.FC<SomeExampleComponentProps> = () => {
  return (
    
    <div className={styles.container}>

<div className={styles.picBanner}>
<img className="pic" src={banner} alt='Banner for web dev'/>

</div>
<Link to="/Dashboard"><p>Explore</p></Link>

<div 
>
<h3 className={styles.zeta}>EDUCATION</h3>

</div>


  </div>

  )
}

export default SomeExampleComponent
