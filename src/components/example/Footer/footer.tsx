import React from 'react'
import styles from './footer.module.scss'
import {CgInstagram} from 'react-icons/cg'
import {AiOutlineLinkedin} from 'react-icons/ai'
type FooterProps = {

}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className={styles.cfooter}>

        <div className={styles.social}></div>
            <ul className="list-inline">
                <li ><a className={styles.copyright} href="/terms">Terms</a></li>
                <li ><a className={styles.copyright} href="/privacypolicy">Privacy Policy</a></li>
            </ul>
            <p className={styles.copyright}>Zhinar © 2022</p>
            <div className={styles.socials}>

            <div className={styles.ico1}> 
            <a href="https://www.instagram.com/zhinar_0/" target="_blank" rel="noreferrer" >
                <CgInstagram size={55} color="#ffffff"/> 
            </a>
            </div>
            <div className={styles.ico2}> 
            <a href="https://www.linkedin.com/in/zhinar/" target="_blank" rel="noreferrer" >
                <AiOutlineLinkedin size={63} color="#ffffff"/> 
            </a>
            </div>
            </div>
    </div>
    
  )
}

export default Footer
