import { FC } from "react";

import styles from '../../../../../styles/appComponents/UiApp/Auth/Buttons/BackButton/BackButton.module.scss'

const BackButton:FC = () => {
    return(
        <div className={styles.backButton}>
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd" clip-rule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"/>
            </svg> 
            <div>
                 Назад
            </div>
        </div>
    )
}

export default BackButton