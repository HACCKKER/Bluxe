import styles from '../../../../styles/appComponents/UiApp/NavBars/AppNavBar.module.scss';
import { FC, PropsWithChildren } from 'react'
import classNames from 'classnames';
import Logo from '../../Assets/Icon/Logo';

const AppNavBar: FC<PropsWithChildren> = ({children}) => {

    const ActivateButton = () => {
        const ContainerButton = document.querySelector('#ContainerButton');
        ContainerButton.classList.toggle('AppNavBar_Active__2aHBo');
    }

    return (
        <div className={styles.NavBar}>
            <header className={styles.nav}>
            </header>
            <nav className={styles.menu}>
                <a>Bluxe</a>
                <div id='ContainerButton' className={styles.ButtonContainer}>
                    <div className={styles.ButtonActiveHr}>
                        <hr />
                    </div>
                    <div className={styles.IconButton}>
                        <div 
                        onClick={ActivateButton} 
                        className={styles.Button}>
                            <Logo 
                            width={30} 
                            height={22}/>
                        </div>
                    </div>
                </div>
                <hr 
                    className={styles.HrButtonTop} 
                />
                <ul className={styles.ContainerButtons}>
                    <UserServers />
                </ul>
            </nav> 
            <div>
                {children}
            </div>
        </div>
  )
}
export default AppNavBar