import Header from '@/components/meta/Header'
import NavBar from '@/components/pages/NavBar'
import styles from '../styles/pages/Home.module.scss'

export default function Home() {
  return (
    <>
      <Header title='Bluxe' description='' />
      <main className={styles.main}>
        <NavBar />
      </main>
    </>
  )
}
