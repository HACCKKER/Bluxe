import { FC } from "react";
import styles from '../../../styles/appComponents/LogicApp/Register/Register.module.scss'

const RegisterComponent: FC = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.loginForm}>
                <form>
                    <button className={styles.button}>
                        <div className={styles.contents}>
                            <div className={styles.content}>
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"
                                fill-rule="evenodd" clip-rule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"/>
                                </svg> 
                                <div>
                                    Назад
                                </div>
                            </div>
                        </div>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default RegisterComponent