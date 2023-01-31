import { FC } from "react";
import { IAuthFields } from './interfaces/reg-login-form.interface';
import styles from '../../../styles/appComponents/LogicApp/Login/Login.module.scss'

const Login: FC = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.loginForm}>
                <form className={styles.form}>
                    <div className={styles.contentForm}>
                        <div className={styles.leftContent}>

                        </div>

                        <div className={styles.rightContent}>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}