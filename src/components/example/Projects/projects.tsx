import React from 'react'
import Banner from '../../banner/banner'
import styles from './projects.module.scss'

type ProjectProps = {

}

const Project: React.FC<ProjectProps> = () => {
  return (
    
  <div className={styles.container}>
  <div className={styles.picBanner}>
    <Banner text='PROJECTS' text2='Your project, our project.'  className={styles.pic}/> 
  </div>


  <div>
    <h3 className={styles.zeta} >HERE YOU WILL SEE SOME OF MY PERSONAL PROJECTS</h3>
    <div className={styles.GitRepos}>
      <a className={styles.repo1} href="https://github.com/zeta404-ops/FindTheUnknown"><img src="https://gh-card.dev/repos/zeta404-ops/FindTheUnknown.svg?fullname=" alt='ftw'/></a>
      <br></br>
      <a className={styles.repo2} href="https://github.com/varia-ict/varia-agile-20C-ryhma-3"><img src="https://gh-card.dev/repos/varia-ict/varia-agile-20C-ryhma-3.svg?fullname=" alt='ictvaria'/></a>
     <br></br>
      <a className={styles.repo3} href="https://github.com/zeta404-ops/portfolio"><img src="https://gh-card.dev/repos/zeta404-ops/portfolio.svg?fullname=" alt='portfolio' /></a>
     <br></br> 
   </div>

  </div>


  </div>

  )
}

export default Project
