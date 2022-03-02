import React from 'react'
import Banner from '../../banner/banner'
import styles from './projects.module.scss'

type ProjectProps = {

}

const Project: React.FC<ProjectProps> = () => {
  return (
    
  <div className={styles.container}>
  <div className={styles.picBanner}>
    <Banner text='MY PROJECTS📁' text2='Coding is a way of life'  className={styles.pic}/> 
  </div>


  <div>
    <h3 className={styles.zeta} >HERE YOU WILL SEE SOME OF MY GITHUB PROJECTS</h3>
    <div className={styles.GitRepos}>
      <a href="https://github.com/zeta404-ops/FindTheUnknown" target="_blank" rel="noreferrer" ><img className={styles.repo1} src="https://gh-card.dev/repos/zeta404-ops/FindTheUnknown.svg?fullname=" alt='ftw'/></a>
      <a href="https://github.com/varia-ict/varia-agile-20C-ryhma-3" target="_blank" rel="noreferrer" ><img className={styles.repo2} src="https://gh-card.dev/repos/varia-ict/varia-agile-20C-ryhma-3.svg?fullname=" alt='ictvaria'/></a>
      <a href="https://github.com/zeta404-ops/portfolio" target="_blank" rel="noreferrer" ><img className={styles.repo3} src="https://gh-card.dev/repos/zeta404-ops/portfolio.svg?fullname=" alt='portfolio' /></a>
   </div>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <h3 className={styles.zeta} >HERE YOU WILL SEE SOME OF MY OTHER PROJECTS</h3>
  </div>

    {/* <div className={styles.unityGamesT1}> 

    <a href="https://play.unity.com/mg/other/webgl-builds-150727" target="_blank" rel="noreferrer" ><h3 className={styles.zeta}>PROTOTYPE 1</h3></a>
    <a href="https://play.unity.com/mg/other/webgl-builds-150716" target="_blank" rel="noreferrer" ><h3 className={styles.zeta}>PROTOTYPE 2</h3></a>
    <a href="https://play.unity.com/mg/other/prototype-3-110" target="_blank" rel="noreferrer" ><h3 className={styles.zeta}>PROTOTYPE 3</h3></a>
    <a href="https://play.unity.com/mg/other/webgl-builds-150707" target="_blank" rel="noreferrer" ><h3 className={styles.zeta}>PROTOTYPE 4</h3></a>
    <a href="https://play.unity.com/mg/other/pava-katar" target="_blank" rel="noreferrer" ><h3 className={styles.zeta}>PROTOTYPE 5</h3></a>
    <a href="https://play.unity.com/mg/other/webgl-builds-150693" target="_blank" rel="noreferrer" ><h3 className={styles.zeta}>CHALLENGE 1</h3></a>
    <a href="https://play.unity.com/mg/other/webgl-builds-150694" target="_blank" rel="noreferrer" ><h3 className={styles.zeta}>CHALLENGE 2</h3></a>
    <a href="https://play.unity.com/mg/other/webgl-builds-150705" target="_blank" rel="noreferrer" ><h3 className={styles.zeta}>CHALLENGE 3</h3></a>
    <a href="https://play.unity.com/mg/other/soccer-scripting-8" target="_blank" rel="noreferrer" ><h3 className={styles.zeta}>CHALLENGE 4</h3></a>
    <a href="https://play.unity.com/mg/other/challenge-5-13" target="_blank" rel="noreferrer" ><h3 className={styles.zeta}>CHALLENGE 5</h3></a>
    <a href="https://play.unity.com/mg/other/webgl-builds-150699" target="_blank" rel="noreferrer" ><h3 className={styles.zeta}>Roll-a-Ball</h3></a>
    <a href="https://play.unity.com/mg/other/pertin-maatila" target="_blank" rel="noreferrer" ><h3 className={styles.zeta}>Pertin Maatila</h3></a>
    <a href="https://play.unity.com/mg/lego/paistettu-peruna" target="_blank" rel="noreferrer" ><h3 className={styles.zeta}>Paistettu Peruna</h3></a>
    <a href="https://play.unity.com/mg/other/mod-the-cube-1642" target="_blank" rel="noreferrer" ><h3 className={styles.zeta}>Mod the Cube</h3></a>
    </div> */}
      <a href="https://play.unity.com/u/zeta404ze" target="_blank" rel="noreferrer" ><img className={styles.projects1} src="https://i.ibb.co/tMr906w/Official-unity-logo-copy.png" alt='unity profile'/></a>
      <a href="https://www.behance.net/zhinarM" target="_blank" rel="noreferrer" ><img className={styles.projects1} src="https://i.ibb.co/kc52ZQk/behance1.png" alt='behance'/></a>
      <a href="https://github.com/zeta404-ops/" target="_blank" rel="noreferrer" ><img className={styles.projects1} src="https://i.ibb.co/233Gr3R/github.png" alt='github'/></a>

  </div>

  )
}

export default Project
