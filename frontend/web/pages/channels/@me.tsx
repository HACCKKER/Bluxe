import Header from '../../appComponents/Logic/Meta/Header';
import AppNavBar from '../../appComponents/Ui/NavBars/AppNavBar/AppNavBar';
import styles from '../../styles/pages/Home.module.scss';

export default function me() {
  return (
    <>
      <Header description='Bluxe' title_description='Друзья' />
      <main className={styles.wrapper}>
        <AppNavBar />
      </main>
    </>
  )
}