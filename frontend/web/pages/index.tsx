import Header from '../appComponents/Logic/Meta/Header'
import MainNavBar from '../appComponents/Ui/NavBars/MainNavBar/MainNavBar'
import styles from '../styles/pages/Home.module.scss'

export default function Home() {
  return (
    <>
      <Header description='' title_description='Ваше место для общения и отдыха' />
      <div className={styles.MainContainer}>
        <div className={styles.HeaderContainer}>
          <MainNavBar />
          <div className={styles.HeaderContent}>

          </div>
          <div className={styles.HeaderBackground}>
            <img className={styles.BackgroundImages} src='./assets/Styles.svg' alt='' />
            <img className={styles.ForegroundLeft} src='./assets/Tapok.svg' alt='' />
            <img className={styles.ForegroundRight} src='./assets/Stol.svg' alt='' />
          </div>
        </div>
        <div className={styles.Main}>

        </div>
        <div className={styles.Footer}>

        </div>
      </div>
    </>
  )
}
