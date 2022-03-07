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
            <ul>
              {/* terms and privacy policy link */}
                <li ><a className={styles.copyright} href="/terms">Terms</a></li>
                <li ><a className={styles.copyright} href="/privacypolicy">Privacy Policy</a></li>
            </ul>
            {/* just a text and copyright to owner */}
            <p className={styles.copyright}>Zhinar © 2022</p>
            <div className={styles.socials}>
            {/* icons with reactbootstrap icons and linked */}
            <div className={styles.ico1}> 
            <a href="https://www.instagram.com/zhinar_0/" target="_blank" rel="noreferrer" >
                <CgInstagram size={55} className={styles.icon1} color="#ffffff"/> 
            </a>
            </div>
            <div className={styles.ico2}> 
            <a href="https://www.linkedin.com/in/zhinar/" target="_blank" rel="noreferrer" >
                <AiOutlineLinkedin size={63} className={styles.icon2} color="#ffffff"/> 
            </a>
            </div>
            </div>
            
            
    </div>
    
  )
}

export default Footer
