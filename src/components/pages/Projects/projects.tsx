import React from 'react'
import Banner from '../../banner/banner'
import styles from './projects.module.scss'

type ProjectProps = {

}

const Project: React.FC<ProjectProps> = () => {
  return (
    
  <div className={styles.container}>
  <div className={styles.picBanner}>
    <Banner text='MY PROJECTS📁' text2='Your project, our project.'  className={styles.pic}/> 
  </div>


  <div>
    <h3 className={styles.zeta} >HERE YOU WILL SEE SOME OF MY GITHUB PROJECTS</h3>
    <div className={styles.GitRepos}>
      <a className={styles.repo1} href="https://github.com/zeta404-ops/FindTheUnknown" target="_blank" rel="noreferrer" ><img src="https://gh-card.dev/repos/zeta404-ops/FindTheUnknown.svg?fullname=" alt='ftw'/></a>
      <a className={styles.repo2} href="https://github.com/varia-ict/varia-agile-20C-ryhma-3" target="_blank" rel="noreferrer" ><img src="https://gh-card.dev/repos/varia-ict/varia-agile-20C-ryhma-3.svg?fullname=" alt='ictvaria'/></a>
      <a className={styles.repo3} href="https://github.com/zeta404-ops/portfolio" target="_blank" rel="noreferrer" ><img src="https://gh-card.dev/repos/zeta404-ops/portfolio.svg?fullname=" alt='portfolio' /></a>
   </div>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <h3 className={styles.zeta} >HERE YOU WILL SEE SOME OF MY UNITY PROJECTS</h3>
  </div>

    <div className={styles.unityGamesT1}> 
    <a className={styles.unity3} href="https://play.unity.com/mg/other/challenge-5-13" target="_blank" rel="noreferrer" ><img src="https://i.ibb.co/3CFmPWC/whack-a-food.png" alt='WHACK-A-FOOD'/></a>
    <a className={styles.unity2} href="https://play.unity.com/mg/other/soccer-scripting-8" target="_blank" rel="noreferrer" ><img src="https://i.ibb.co/r68WmDR/pro3.png" alt='SOCCER SCRIPTING'/></a>
    <a className={styles.unity1} href="https://play.unity.com/mg/other/pava-katar" target="_blank" rel="noreferrer" ><img src="https://i.ibb.co/PQxmhyt/pavakatar.png" alt='Unity Game Pava Katar'/></a>
    
    </div>
    <br></br>
    <div className={styles.unityGamesT2}> 

    <a className={styles.unity4} href="https://play.unity.com/mg/other/webgl-builds-88726" target="_blank" rel="noreferrer" ><img src="https://i.ibb.co/7V9MC79/zeta.png" alt='WEBGL ZETA'/></a>
    <br></br>
    <a className={styles.unity5} href="https://play.unity.com/mg/other/mod-the-cube-1642" target="_blank" rel="noreferrer" ><img src="https://i.ibb.co/M5xnmQW/mdc.png" alt='MOD THE CUBE'/></a>
    <br></br>
    <a className={styles.unity6} href="https://play.unity.com/mg/lego/paistettu-peruna" target="_blank" rel="noreferrer" ><img src="https://i.ibb.co/1XcZXm8/pp.png" alt='PAISTETTU PERUNA'/></a>
    <br></br>
    <a className={styles.unity7} href="https://play.unity.com/mg/other/prototype-3-110" target="_blank" rel="noreferrer" ><img src="https://i.ibb.co/Y3w6rJS/PROTOTYPE3.png" alt='PROTOTYPE3'/></a>
    </div>


    

  </div>

  )
}

export default Project
