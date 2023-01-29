import Header from '../appComponents/Logic/Meta/Header'
import MainNavBar from '../appComponents/Ui/NavBars/MainNavBar/MainNavBar'
import styles from '../styles/pages/Home.module.scss'

export default function Home() {
  return (
    <>
      <Header description='' title_description='Ваше место для общения и отдыха' />
      <div className={styles.MainContainer}>
        <div className={styles.Header}>
          <MainNavBar />
          <div className={styles.HeaderContent}>

          </div>
          <div className={styles.HeaderBackground}>
            <img src='./' alt='' />
            <img src='./' alt='' />
            <img src='./' alt='' />
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
