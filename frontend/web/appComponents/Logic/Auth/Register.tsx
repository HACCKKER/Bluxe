import Link from "next/link";
import { FC, use, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from '../../../styles/appComponents/LogicApp/Auth/Auth.module.scss'
import BackButton from "../../Ui/Auth/Buttons/BackButtonUi/BackButton";
import SubmitButton from "../../Ui/Auth/Buttons/SumbitButtonUi/SubmitButton";
import FieldForm from "../../Ui/Auth/Field/FieldForm";
import { IAuthFields } from "./interfaces/reg-login-form.interface";

const RegisterComponent: FC = () => {

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
                            <label className={styles.formLabel}>Электронаня почта</label>  
                            <FieldForm
                            {...register('email', {
                                required: true,

                            })}
                            />

                            <label className={styles.formLabel}>Имя пользователя</label>
                            <FieldForm
                            {...register('name', {
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