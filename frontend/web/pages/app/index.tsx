import Header from '../../appComponents/Logic/Meta/Header';
import NavBar from '../../appComponents/Ui/NavBars/AppNavBar/AppNavBar';
import styles from '../../styles/pages/Home.module.scss';

export default function Home() {
  return (
    <>
      <Header description='' />
      <main className={styles.main}>
        <NavBar />
      </main>
    </>
  )
}