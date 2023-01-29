import styles from '../../../../styles/appComponents/UiApp/NavBars/MainNavBar.module.scss';
import { FC, PropsWithChildren } from 'react'

const MainNavBar: FC<PropsWithChildren> = ({children}) => {
  return (
    <header className={styles.Header}>        
      <nav className={styles.Nav}>
        <a></a>
        <div>

        </div>
        <div>
          
        </div>
      </nav>
    </header>
  )
}
export default MainNavBar