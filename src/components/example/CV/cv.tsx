import React from 'react'
import Banner from '../../banner/banner'
import styles from './cv.module.scss'
type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    
    <div className={styles.container}>

  <div className={styles.picBanner}>
  <Banner text='CV' text2='Insightful IT manager with history of beating deadlines.'  className={styles.pic}/> 

  </div>

    <div>
     <h3 className={styles.zeta}>EDUCATION</h3>
    </div>
  </div>

  )
}

export default Cv
