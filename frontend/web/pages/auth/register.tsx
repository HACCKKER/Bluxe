import RegisterComponent from "../../appComponents/Logic/Auth/Register";
import Header from "../../appComponents/Logic/Meta/Header";
import styles from '../../styles/pages/AuthPages/RegisterPage.module.scss'


export default function Register() {
    return (
      <>
        <Header description='Register' />
        <div className={styles.register}>
          <RegisterComponent/>
        </div>
      </>
    )
  }