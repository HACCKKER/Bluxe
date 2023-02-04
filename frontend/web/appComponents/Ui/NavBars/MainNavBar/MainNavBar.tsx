import styles from '../../../../styles/appComponents/UiApp/NavBars/MainNavBar.module.scss';
import DesktopNavBar from './DesktopNavBar';
import MobileMainNavBar from './MobileNavBar';

const MainNavBar = () => {
  return (
    <div className={styles.NavbarContainer}>        
        <MobileMainNavBar />
        <DesktopNavBar />
    </div>
  )
}
export default MainNavBar