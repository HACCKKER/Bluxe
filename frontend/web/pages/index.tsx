import Header from '../appComponents/Logic/Meta/Header'
import MainNavBar from '../appComponents/Ui/NavBars/MainNavBar/MainNavBar'
import styles from '../styles/pages/Home.module.scss'

export default function Home() {
  return (
    <>
      <Header title='Bluxe' description='' />
      <div className={styles.MainContainer}>
        <div className={styles.Header}>
          <MainNavBar />
        </div>
        <div className={styles.Main}>

        </div>
        <div className={styles.Footer}>

        </div>
      </div>
    </>
  )
}
