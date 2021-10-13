import React from 'react'
import styles from "./errorPageStyle.module.scss"

type MainPageProps = {

}

const MainPage: React.FC<MainPageProps> = () => {
  return (
      //always add className={styles.container} to use the imported styles inside of a div
    <div className={styles.container}>
      <h1>[ERROR 404]</h1>
      <p>THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED, HAD ITS NAME CHANGED OR IS TEMPORARILY UNAVAILABLE.</p>
      <p>PLEASE TRY TO GO BACK OR RETURN TO THE HOMEPAGE.</p>
    </div>
  )
}

export default MainPage