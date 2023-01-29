import { FC } from "react";
import { IUser } from './interfaces/login.interface';
import styles from '../../../styles/appComponents/LogicApp/Login/Login.module.scss'

const Login: FC<IUser> = ({email, password}) => {
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