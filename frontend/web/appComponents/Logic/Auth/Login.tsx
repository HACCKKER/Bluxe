import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import styles from '../../../styles/appComponents/LogicApp/Auth/Auth.module.scss'

import { IAuthFields } from "./interfaces/reg-login-form.interface";

const LoginComponent: FC = () => {

    const emailInput = useRef(null)
    const passwordInput = useRef(null)

    const [isLoading, setIsLoading] = useState(false)

    const AuthValidateInputs = () =>{
        console.log(emailInput.current.value)
    }



    useEffect(() =>{
        const loginWrapper = document.querySelector('#wrapperContent');
        loginWrapper.classList.add('Auth_animate__sHnx4')
    }, [])
    

    return(
    <>
        
        <div className={styles.wrapper} >
            <div className={styles.loginForm}  id='wrapperContent'>
                <form className={styles.form}>
                <h1 className={styles.formHeading}>С возвращением</h1>
                    <div className={styles.formBlock}>
                      <div className={styles.leftContent}>
                        <div className={styles.emailBlock}>

                            <label className={styles.formLabel}>Электронаня почта</label>  
                            <div className={styles.input}>
                                <input type="text" ref={emailInput} />
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
                                Нужен аккаунт?
                                <Link className={styles.LinkBack} href='/auth/register'>
                                    Зарегестрироваться
                                </Link>
                            </div>

                        </div>
                      </div>

                        <div className={styles.rightContent}>
                                
                        </div>
                    </div>
                </form>
            </div>
        </div>


    </>
    )
}

export default LoginComponent