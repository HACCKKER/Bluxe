import { FC } from "react";
import styles from '../../../styles/appComponents/LogicApp/Register/Register.module.scss'
import BackButton from "../../Ui/Auth/Buttons/BackButton/BackButton";

const RegisterComponent: FC = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.loginForm}>
                <form>
                    <div className={styles.topBackButton}>
                        <div className={styles.contentButton}>
                            <BackButton/>
                        </div>
                    </div>
                    <h1 className={styles.formHeading}>Создать аккаунт</h1>

                    <div className={styles.formBlock}>
                        <div className={styles.emailBlock}>
                            
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterComponent