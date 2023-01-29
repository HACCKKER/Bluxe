import styles from '../../styles/components/NavBar.module.scss';
import { FC, PropsWithChildren } from 'react'

const MainNavBar: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className={styles.NavBar}>
        <header className={styles.nav}>
        </header>
        <nav className={styles.menu}>
        </nav> 
        <div>
            {children}
        </div>
    </div>
  )
}
export default MainNavBar