import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from '../../../styles/appComponents/LogicApp/Auth/Auth.module.scss'
import SubmitButton from "../../Ui/Auth/Buttons/SumbitButtonUi/SubmitButton";
import FieldForm from "../../Ui/Auth/Field/FieldForm";
import { IAuthFields } from "./interfaces/reg-login-form.interface";

const LoginComponent: FC = () => {

    const [isLoading, setIsLoading] = useState(false)

    const{
        register,
        formState: {errors},
        handleSubmit,
        reset
        } = useForm<IAuthFields>({
            mode: "onSubmit"
        })
    
        const onSubmit:SubmitHandler<IAuthFields> = (data) =>{
            reset()
        }

        useEffect(() =>{
            setIsLoading(true)
        }, [])


    return(
    <>
        {
            isLoading ? 
        
        <div className={styles.wrapper}>
            <div className={styles.loginForm}>
                <form className={styles.form}>
                <h1 className={styles.formHeading}>С возвращением</h1>
                    <div className={styles.formBlock}>
                      <div className={styles.leftContent}>
                        <div className={styles.emailBlock}>
                            <label className={styles.formLabel}>Электронаня почта</label>  
                            <FieldForm
                            {...register('email', {
                                required: true,

                            })}
                            />


                             <label className={styles.formLabel}>Пароль</label>
                            <FieldForm
                            {...register('password', {
                                required: true,

                            })}
                            />

                            <div className={styles.submitFormButton}>
                                <SubmitButton/>
                            </div>

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

        : <></>
        }
    </>
    )
}

export default LoginComponent