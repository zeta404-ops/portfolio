import React from 'react'
import styles from './banner.module.scss'
import banner from '../video/banner.gif'

type BannerProps = {
    text: string
    text2: string
    className: string
}

const Banner: React.FC<BannerProps> = ({ text, text2, className }) => {
  return (
    <div className={styles.container}>
        {/* <img className={styles.pic} src={banner} alt='Banner for web dev'/> */}
        <h3 className={styles.textcss}>{text}</h3>
        <h3 className={styles.textcss2}>{text2}</h3>
    </div>
  )
}

export default Banner
