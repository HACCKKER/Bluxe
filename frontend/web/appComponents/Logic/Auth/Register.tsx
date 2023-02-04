import { log } from "console";
import Link from "next/link";
import { FC, use, useEffect, useState, useRef } from 'react';
import styles from '../../../styles/appComponents/LogicApp/Auth/Auth.module.scss'
import BackButton from "../../Ui/Auth/Buttons/BackButtonUi/BackButton";


const RegisterComponent: FC = () => {


    const emailInput = useRef(null)
    const usernameInput = useRef(null)
    const passwordInput = useRef(null)

    const [isLoading, setIsLoading] = useState(false)

   
    const AuthValidateInputs = () =>{
        console.log(usernameInput.current.value)
    }


    useEffect(() =>{
        setIsLoading(true)
    }, [])


    return(
        <>
        <div className={styles.wrapper}>   
            <div className={styles.loginForm}>
                <form>
                <div className={styles.topBackButton}>
                        <div className={styles.contentButton}>
                            <BackButton/>
                        </div>
                    </div>
                    <h1 className={styles.formHeading}>Создать аккаунт </h1>

                    <div className={styles.formBlock}>
                        <div className={styles.emailBlock}>
                            <label className={styles.formLabel}>Электронаня почта</label>  
                            <div className={styles.input}>
                                <input type="text" ref={emailInput} />
                            </div>

                            <label className={styles.formLabel}>Имя пользователя</label>
                            <div className={styles.input}>
                                <input type="text" ref={usernameInput} />
                            </div>

                            <label className={styles.formLabel}>Пароль</label>
                            <div className={styles.input}>
                                <input type="text" ref={passwordInput} />
                            </div>
                            
                            <Link href="/@me">
                            <div className={styles.submitFormButton}>
                                <button type='button' onClick={AuthValidateInputs}>Войти</button>
                            </div>
                            </Link>

                            <div className={styles.haveAccount}>
                                <Link className={styles.LinkBack} href='/auth/login'>
                                    Уже есть аккаунт?
                                </Link>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </div>

      
       </>
    )


}



export default RegisterComponent